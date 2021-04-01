import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Income(props) {
    const { handleIncomeChange, user } = props;
    return( 
        <div className="question">
            <TextField 
                className="outlined-basic" 
                defaultValue={user.income} 
                label="Venituri lunare" 
                type="number" 
                variant="outlined" 
                onChange={handleIncomeChange}
            />
            <p className="description">Prin venituri lunare, intelegem: </p>
            <em> Salariu, prime, bonusuri, burse, dividende, chirii, dobanzi sau orice alta sursa de venit.</em>
        </div>
    );
}