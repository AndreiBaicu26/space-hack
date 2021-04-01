import React from 'react';
import Button from '@material-ui/core/Button';

export default function FinalStep(props) {
    const { handleReset, classes } = props;
    return( 
        <div class="form">
            <div>
                Felicitari! Tocmai ti-ai completat profilul de investitor! 
            </div>
            <Button variant="outlined" onClick={handleReset} className={classes.button}>
                Planificare
            </Button>
        </div>
    );
}