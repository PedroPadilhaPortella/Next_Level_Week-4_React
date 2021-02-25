import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallegeBox() {

    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challegeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challegeActive}>
                    <header>Ganhe {activeChallenge.ammount}xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Body"/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailed} onClick={resetChallenge}>Falhei</button>
                        <button type="button" className={styles.challengeSucceeded}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challegeNotActive}>
                    <strong>Finalize um ciclo para receber os desafios.</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up"/>
                        Avance de Level completando os desafios.
                    </p>
                </div>
            )}
        </div>
    );
}