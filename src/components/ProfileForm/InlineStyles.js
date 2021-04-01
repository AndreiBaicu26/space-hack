
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useQontoStepIconStyles = makeStyles({
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

export const ColorlibConnectorFunction = withStyles({
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
});

export const useColorlibStepIconStyles = makeStyles({
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
