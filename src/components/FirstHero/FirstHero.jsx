import React from 'react';
import styles from './FirstHero.module.css'


function FirstHero() {
    return(
        <div className={ styles.maindiv }>
            <div className={ styles.container }>
                <img className={ styles.tropheeimage } src="../../../assets/1.png" alt="trophee" />
            </div>
            <div className={ styles.texts }>
                <strong className={ styles.headingtext }>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
                <ul>
                    <li className={ styles.subtext}>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li className={ styles.subtext}>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>

                <img className={ styles.awardimage } src="../../../assets/2.png" alt="Receiving Award" />

                <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>

            </div>

        </div>
    )
}

export default FirstHero;