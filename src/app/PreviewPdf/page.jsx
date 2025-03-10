
// src/app/PreviewPdf/page.jsx

import styles from "./PreviewPdf.module.scss";

export default function PreviewPdf() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Collections</h2>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search Here" />
        </div>
        <div className={styles.grid}></div> 
      </div>
    </div>
  );
}
