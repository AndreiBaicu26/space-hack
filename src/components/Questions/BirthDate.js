import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function BirthDate(props) {
    const { handleDateChange, user, classes } = props;
    return( 
        <div className="question">
            <TextField
                id="date"
                label="Data nasterii"
                type="date"
                defaultValue={user.birthday}
                className={classes.textField}
                onChange={handleDateChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}