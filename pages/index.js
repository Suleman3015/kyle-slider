import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Slider from '../src/components/slider/slider';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Case Study Carousel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Slider/>
    </div>
  )
}
