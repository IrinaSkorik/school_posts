import React from "react";
import styles from "./index.modules.css";
import cn from "classnames";

const Modal = ({ active, setActive, children }) => {
  return (
    <div className={cn(styles.modal, { [styles.active]: active })} onClick={()=>setActive(false)}>
      <div className={styles["modal__content"]} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;