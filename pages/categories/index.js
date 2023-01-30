import styles from "../../styles/Home.module.css";

const Categories = (props) => {
  return (
    <div className={styles.container}>
      <h2>categories index</h2>

      <a href="categories/mopidat" className={styles.card}>
        <h3>Mopidat &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>
      <a href="categories/mopidat2" className={styles.card}>
        <h3>Mopidat 2 &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>
      <a href="categories/organic" className={styles.card}>
        <h3>Organic &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>
    </div>
  );
};

export default Categories;
