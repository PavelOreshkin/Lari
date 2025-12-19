import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const RootLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.root}>{children}</div>;
};

export default RootLayout;
