import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Expenses(props) {
    const { handleExpensesChange, user } = props;
    return( 
        <div className="question">
            <TextField className="outlined-basic" defaultValue={user.expenses}  label="Cheltuieli lunare" type="number" variant="outlined" onChange={handleExpensesChange}/>
            <p className="description">Prin cheltuieli lunare <b>necesare</b>, intelegem cheltuieli cu: </p>
            <em> Locuinta, autoturismul, alimentatia, intretinerea personala si a familiei, imprumuturi, sanatate sau alte cheltuieli de necesitate absoluta.</em>
        </div>
    );
}