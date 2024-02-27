import React from 'react';
import styles from './SecondHero.module.css'


function SecondHero() {
    return(
        
        <div>
            <div className={styles.container}>
                <div>
                    <p className={ styles.firsttext }>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                </div>
                <div className={styles.parent}>
                    <img className={ styles.motorImage } src="./3.png" alt="Images of Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors " />
                    <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                </div>
            </div>

            <div>
                <hr className={ styles.hrtag } />
            </div>
        </div>

    )
}

export default SecondHero;