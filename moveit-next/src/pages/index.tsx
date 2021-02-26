import { CompletedChallenges } from '../components/CompletedChalleges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallegeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Início | Move.it</title>
            </Head>
            <ExperienceBar />
            <CountdownProvider>
                <section>
                    <div>
                        <Profile />
                        <CompletedChallenges />
                        <Countdown />
                    </div>
                    <div>
                        <ChallegeBox />
                    </div>
                </section>
            </CountdownProvider>
        </div>
    )
}