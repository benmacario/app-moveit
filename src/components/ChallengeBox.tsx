import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengesSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleCharllengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeBoxFailedButton}
              onClick={handleCharllengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeBoxSucceedesButton}
              onClick={handleChallengesSucceeded}
            >
              Completei
            </button>
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