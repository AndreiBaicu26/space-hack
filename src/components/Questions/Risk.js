import React from 'react';
import RadioQuestion from '../Questions/RadioQuestion';

export default function Risk(props) {
    const { handleRiskChange } = props;
    return( 
        <div className="risk">
            <div>
            <RadioQuestion 
                question="In general, cum te-ar descrie prietenul tau cel mai bun?"
                questionNo={0} 
                optionsArray={["O persona ce pariaza mult", "Dispusa la risc doar daca faci research", "Precaut","Eviti cu totul riscul"]} 
                handleChange={handleRiskChange}/>
            <RadioQuestion 
                question="Daca ai fi la un show TV, ce ai alege?"
                questionNo={1} 
                optionsArray={["5% sanse sa castigi 100 000$", "25% sanse sa castigi 10 000", " 50% sanse sa castigi 5000$", "1000$" ]} 
                handleChange={handleRiskChange}/>
            <RadioQuestion 
                question="Cand auzi cuvantul risc la ce te gandesti?"
                questionNo={2} 
                optionsArray={["Entuziasm", "Oportunitate", "Incertitudine", "Pierdere "]} 
                handleChange={handleRiskChange}/>,
            </div> 
            <div> 
            <RadioQuestion 
                question="Vecinul tau, un geologist cu experienta, vrea sa exploreze o mina de aur. Expeditia poate sa aduca intre 50x si 100x investitia initiala. El estimeaza ca va avea o rata de succes de 20%. Cu ce suma de bani l-ai sustine pe vecinul tau?"
                questionNo={3} 
                optionsArray={["Salariul pe 6 luni.", "Salariul pe 3 luni.", "Salariul pe o luna.", "0 lei."]} 
                handleChange={handleRiskChange}/>
            <RadioQuestion 
                question="Avand situatia favorabila si situatia nefavorabila a patru tipuri de investitie, ce ai prefera?"
                questionNo={4} 
                optionsArray={[ "+4800$ in cel mai bun caz, -2400$ in cel mai rau", "+2600$ in cel mai bun caz, -800$ in cel mai rau","+800$ in cel mai bun caz, -200$ in cel mai rau", "+200$ in cel mai bun caz, 0 in cel mai rau"]} 
                handleChange={handleRiskChange}/>
            </div>
        </div>
    );
}