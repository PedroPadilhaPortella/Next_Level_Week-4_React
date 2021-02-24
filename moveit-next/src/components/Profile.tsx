import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/62967515?s=460&u=fc0e9e922c93beedeba4b883edd8412ef0fffabe&v=4" alt="user"/>
            <div>
                <strong>Pedro Portella</strong>
                <p>
                    <img src="icons/level.svg" alt="levelIcon"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}