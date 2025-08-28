import styles from "./MovieCard.module.css";

type Movie = {
  id: string;
  Link: string;
  Name: string;
  Year: number;
  Genre: string;
  Description: string;
  Score: number;
  Comments: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className={styles.card}>
      <img src={movie.Link} alt={movie.Name} className={styles.image} />
      <h2 className={styles.title}>{movie.Name}</h2>
      <p className={styles.meta}>
        {movie.Genre} • {movie.Year}
      </p>
      <p className={styles.description}>{movie.Description}</p>
      <p className={styles.score}>⭐ {movie.Score}/100</p>
      <p className={styles.comments}>💬 {movie.Comments}</p>
    </div>
  );
}
