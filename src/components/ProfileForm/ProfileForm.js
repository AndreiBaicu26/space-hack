import React, { useEffect } from 'react';
import './ProfileForm.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import ErrorIcon from '@material-ui/icons/Error';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FinalStep from '../../components/Questions/FinalStep';
import QuestionWrapper from '../../components/Questions/QuestionWrapper';
import  { useQontoStepIconStyles, ColorlibConnectorFunction, useColorlibStepIconStyles } from './InlineStyles';

const steps = ['Data nasterii', 'Venituri', 'Obiective', 'Grad de risc', 'Cheltuieli'];
const ColorlibConnector = ColorlibConnectorFunction(StepConnector);

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <CalendarTodayIcon />,
    2: <AttachMoneyIcon />,
    3: <TrendingUpIcon />,
    4: <ErrorIcon />,
    5: <MoneyOffIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function ProfileForm(props) {
  const {user: userDB} = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState(true);
  const [user, setUserInfo] = React.useState({
    birthday: "1998-12-14",
    income: 0,
    expenses: 0, 
    riskArray: [],
    goals: {
    Travel: false,
    LongTerm: false,
    Credits: false,
    House: false, 
    Car: false
    }
  });
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

  const handleReset = () => {
    props.setFirstLogin(false);
  };

  return (
    <div className={`${classes.root} profile-questionnaire`}  >
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <FinalStep handleReset = {handleReset} classes = {classes}/>
        ) : (
          <QuestionWrapper 
            handleReset = {handleReset} 
            steps = {steps}
            activeStep = {activeStep}
            setActiveStep = {setActiveStep}
            userDB = {userDB}
            user = {user}
            setUserInfo = {setUserInfo}
            error = {error}
            classes = {classes}/>
        )}
      </div>
      <span className="disclaimer">Datele personale oferite vor fi stocate doar in scopul realizarii analizei si nu vor fi furnizate catre niciun alt serviciu.</span>
    </div>
  );
}