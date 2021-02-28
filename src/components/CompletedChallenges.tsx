import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallengs.module.css';

export function CompletedChallenges() {
  const { challengesComplited } = useContext(ChallengesContext);
  return (
    <div className={styles.completedChallengsContainer}>
      <span> Desafios completos</span>
      <span>{challengesComplited}</span>
    </div>
  );
}