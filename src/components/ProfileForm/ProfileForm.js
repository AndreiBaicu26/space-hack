import React from 'react';
import './ProfileForm.css';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
// import db from './firebase/FirebaseConfig';

// class ProfileForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       birthDate: new Date()
//     }
//   }


//   render() {
//     return (
//         <div className="form">
//             <div className="question">
//               <span className="nav-dot"></span>
//               <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <KeyboardDatePicker
//                   margin="normal"
//                   id="date-picker-dialog"
//                   label="Data nasterii"
//                   format="MM/dd/yyyy"
//                   onChange={this.handleDateChange}
//                   KeyboardButtonProps={{
//                     'aria-label': 'change date',
//                   }}
//                 />
//               </MuiPickersUtilsProvider>
//             </div>


            
//         </div>
//     );
//   }
// }

// export default ProfileForm;



import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import ErrorIcon from '@material-ui/icons/Error';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const handleDateChange = (date) => {
  console.log(date);
}
const handleSalaryChange = (event) => {
  console.log(event.target.value);
}
const handleBonusChange = (event) => {
  console.log(event.target.value);
}
const handleDividendChange = (event) => {
  console.log(event.target.value);
}
const handleReturnChange = (event) => {
  console.log(event.target.value);
}
const handleRentsChange = (event) => {
  console.log(event.target.value);
}
const handleSchoalrshipBonusChange = (event) => {
  console.log(event.target.value);
}
const otherIncomesChange = (event) => {
  console.log(event.target.value);
}

const birthDateCompoenent = 
  <div className="form">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Data nasterii"
        format="MM/dd/yyyy"
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  </div>

const incomeComponent = 
  <div className="question">
    <span className="nav-dot"></span>
    <TextField className="standard-basic" label="Salariu" onChange={handleSalaryChange}/>
    <TextField className="standard-basic" label="Prime" onChange={handleBonusChange}/>
    <TextField className="standard-basic" label="Dividende" onChange={handleDividendChange} />
    <TextField className="standard-basic" label="Dobanzi" onChange={handleReturnChange}/>
    <TextField className="standard-basic" label="Chirii"onChange={handleRentsChange}/>
    <TextField className="standard-basic" label="Bursa"onChange={handleSchoalrshipBonusChange}/>
    <TextField className="standard-basic" label="Alte venituri"onChange={otherIncomesChange}/>
  </div>


const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

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

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg, #007bb2 0%, #651fff 50%, #4615b2 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
      'linear-gradient( 95deg, #007bb2 0%, #651fff 50%, #4615b2 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, #33bfff 0%,  #007bb2 50%, #2a3eb1 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
    'linear-gradient( 136deg, #33bfff 0%,  #007bb2 50%, #2a3eb1 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <CalendarTodayIcon />,
    2: <AttachMoneyIcon />,
    3: <MoneyOffIcon />,
    4: <ErrorIcon />,
    5: <TrendingUpIcon />,
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

function getSteps() {
  return ['Data nasterii', 'Venituri', 'Cheltuieli', 'Grad de risc', 'Obiective'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return birthDateCompoenent;
    case 1:
      return incomeComponent;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function ProfileForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="form">
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div className="form">
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
          </div>
        )}
      </div>
    </div>
  );
}