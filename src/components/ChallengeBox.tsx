import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true;
  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg"/>
            <strong>Exercite-se</strong>
            <p>É agora Brendon. Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeBoxFailedButton}>Falhei</button>
            <button type="button" className={styles.challengeBoxSucceedesButton}>Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Inicie um ciclo para receber desafios a serem completados</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Complete-os e avance de level.
          </p>
        </div>
      )}
    </div>
  );
}