import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></p>
                <p className={styles.lastline}>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
            </div>

            <div className={styles.lastfooter}>
                <div>
                    <img className={styles.icons} src="./phone.png" alt="" />
                    <span>Toll free </span><span className={styles.bold}>1800 200 1234</span>
                </div>

                <div>
                    <img className={styles.icons} src="./facebook.png" alt="" />
                    <span>www.facebook.com/cripumps</span>
                </div>

                <div>
                    <img className={styles.icons} src="./globe.png" alt="" />
                    <span>www.crigroups.com</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
