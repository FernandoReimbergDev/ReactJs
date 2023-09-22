import styles from "./Post.module.css";
export function Post(props) {
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/FernandoReimbergDev.png"
          />
          <div className={styles.authorInfo}>
            <strong>Fernando Reimberg</strong>
            <span>Analista de Sistemas</span>
          </div>
        </div>

        <time title="21 de Setembro 22:52h" dateTime="2023-09-21 22:52:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
        </p>
        <p>
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
        </p>
        <p>
          é DoctorCare 🚀 👉 <a href="#">jane.design/doctorcare #novoprojeto #nlw  #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
