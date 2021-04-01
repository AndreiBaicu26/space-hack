import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

export default function BirthDate(props) {
    const { hangleSingleGoalChange, handleGoalsInput, user, error } = props;
    const questions = [
        {
            label: "Merg in vacanta cel putin o data pe an.",
            name: "Travel",
        },{
            label: "Sa am bani pusi de-o parte pentru educatia copiiilor/pensionare/evenimente indepartate.",
            name: "LongTerm",
        },{
            label: "Sa rambursez creditul.",
            name: "Credits",
        },{
            label: "Sa imi cumpar o casa.",
            name: "House",
        },{
            label: "Sa imi cumpar o masina.",
            name: "Car",
        }
    ]
    return (
        <div className="question">
            <FormControl required error={error} component="fieldset">
                <FormLabel component="legend">Pentru mine este important sa: </FormLabel>
                <FormGroup>
                    {questions.map((question, index) =>  
                        <FormControlLabel
                            key= {index}
                            control = { 
                                <Checkbox 
                                    defaultValue={ user.goals[`${question.name}`] } 
                                    onChange={hangleSingleGoalChange} 
                                    name={`${question.name}`} />
                            }
                            label={`${question.label}`}
                        />
                    )}
                </FormGroup>
                <FormHelperText>Alegeti maximum doua aspecte care sunt importante pentru dumneavoastra</FormHelperText>
            </FormControl>

            <div>
                { Object.keys(user.goals).map(goal => {
                    return user.goals[goal] 
                        && Object
                        .keys(user.goals)
                        .filter((v) => (
                            user.goals[v]).length <= 2) && 
                            <TextField 
                                className="outlined-basic" 
                                name={goal} 
                                label={goal} 
                                type="number" 
                                variant="outlined" 
                                onChange={handleGoalsInput}
                            />
                    })
                }
            </div>
        </div>
    );
 }
