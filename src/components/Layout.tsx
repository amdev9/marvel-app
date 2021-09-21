import React from "react";
import styles from "./Layout.module.css";

export interface AuxProps  { 
  children: React.ReactNode
}

const Layout = (props: AuxProps) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Layout;
