import React from "react";
import { AuxProps } from "../types";
import styles from "./Layout.module.css";

const Layout = (props: AuxProps) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Layout;
