import React, { useEffect }  from 'react';
import Button from '@material-ui/core/Button';
import BirthDate from '../../components/Questions/BirthDate';
import Income from '../../components/Questions/Income';
import Expenses from '../../components/Questions/Expenses';
import Goals from '../../components/Questions/Goals';
import Risk from '../../components/Questions/Risk';
import {writeUserPartialData} from '../../firebase/User';

export default function FinalStep(props) {
    const { classes, steps, userDB, activeStep, setActiveStep, user, setUserInfo } = props;
    const [error, setError] = React.useState(true);
    const getStepContent = (step) => {
        switch (step) {
          case 0:
            return <BirthDate handleDateChange = {handleDateChange} user = {user} classes = {classes}/>;
          case 1:
            return <Income handleIncomeChange = {handleIncomeChange} user={user} />;
          case 2:
            return <Goals hangleSingleGoalChange = {hangleSingleGoalChange} handleGoalsInput= {handleGoalsInput} user={user} error={error}/> ;
          case 3:
            return <Risk handleRiskChange = {handleRiskChange}/> ;
          case 4:
            return  <Expenses handleExpensesChange = {handleExpensesChange} user={user} />;
          default:
            return 'Unknown step';
        }
    }
  
    useEffect(()=> {
        switch(activeStep) {
        case 0:
            setError(!user.birthday ? true : false);
            break;
        case 1:
            setError(user.income ? false : true);
            break;
        case 2:
            setError(Object.keys(user.goals).filter((v) => user.goals[v]).length > 2 );
            break;
        case 3:
            setError(Object.keys(user.riskArray).filter((v) => user.riskArray[v]).length !== 5);
            break;
        case 4:
            setError(user.expenses ? false : true);
            break;
        default:
            setError(false);
        }
    }, [user, activeStep]);

    const handleNext = () => {
        writeUserPartialData(userDB, user);
        setError(true);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setError(false);
    };

    const handleDateChange = (birth) => {
        setUserInfo((prevUser) => ({...prevUser, birthday: birth.target.value}));
    }

    const handleIncomeChange= (event) => {
        let income = event.target.value;
        setUserInfo(prevUser => {
        return {
            ...prevUser,
            income
        }
        });
    }

    const handleExpensesChange= (event) => {
        let expenses = event.target.value;
        setUserInfo(prevUser => {
        return {
            ...prevUser,
            expenses
        }
        });
    }

    const handleRiskChange = (event, questionNo) => {
        let riskArray = user.riskArray;
        riskArray[questionNo] = Math.abs(event.target.value - 4 );

        setUserInfo(prevUser => {
        return {
            ...prevUser,
            riskArray
        }
        });
    }

    const hangleSingleGoalChange = (event) => {
        setUserInfo(prevUser => {
        return {
            ...prevUser,
            goals: {
            ...prevUser.goals,
            [event.target.name]: event.target.checked
            }
        }
        });
    }

    const handleGoalsInput = (event) => {
        setUserInfo(prevUser => {
        return {
            ...prevUser,
            goalsNeeds: {
            ...prevUser.goalsNeeds,
            [event.target.name]: event.target.value
            }
        }
        });
    }

    return( 
        <div className="form">
            <div className={classes.instructions}> 
                {getStepContent(activeStep)}
            </div>

            <div className="action-buttons">
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={error}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    );
}