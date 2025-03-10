"use client";
import { useRouter } from "next/navigation";
import styles from "./usercollection.module.scss"; 

const pdfs = [
  { id: 1, title: "The Impact of Lifestyle on Cardiovascular Diseases", src: "/pdf1.png", description: "This paper explores how lifestyle modifications can prevent cardiovascular diseases and improve well-being." },
  { id: 2, title: "The Role of Poetry in Expressing Human Emotions", src: "/pdf2.png", description: "This research explores the emotional impact of poetry." },
  { id: 3, title: "Alternative Fuels for Sustainable Transportation", src: "/pdf3.png", description: "Examining renewable energy sources for transportation." },
];

const UserCollection = () => {
  const router = useRouter();

  const handlePreview = (pdf) => {
    router.push(`/PreviewPdf?id=${pdf.id}&title=${encodeURIComponent(pdf.title)}&src=${pdf.src}&description=${encodeURIComponent(pdf.description)}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Collections</h1>
      <div className={styles.grid}>
        {pdfs.map((pdf) => (
          <div key={pdf.id} className={styles.card} onClick={() => handlePreview(pdf)}>
            <img src={pdf.src} alt={pdf.title} className={styles.image} />
            <p className={styles.title}>{pdf.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCollection;
