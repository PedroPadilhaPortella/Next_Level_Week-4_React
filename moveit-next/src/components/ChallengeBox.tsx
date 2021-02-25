import styles from '../styles/components/ChallengeBox.module.css';

export function ChallegeBox() {
    
    const hasActiveChallenge = true;

    return (
        <div className={styles.challegeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challegeActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" alt="Body"/>
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailed}>Falhei</button>
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