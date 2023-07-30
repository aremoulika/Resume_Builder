import React from "react";

import Resume from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>Resume Builder</span><h4>Using ReactJS</h4>
          
        </p>
        <p className={styles.heading}>
           <span></span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={Resume} alt="Resume SVG" />
      </div>
    </div>
  );
}

export default Header;
