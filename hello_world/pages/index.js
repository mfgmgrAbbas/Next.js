import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>MetaVerse Developers</title>
      <meta name='keyword' content='blog'/>
    </Head>
    <div>
      <b><h1 className={styles.title}> Hello! world. </h1></b><br></br>
          <p className={styles.text}> I am Abbas Shah and I am a highly skilled developer with experience in a wide range of technologies.</p>
          <p className={styles.text}> I am proficient in HTML and CSS, and have a strong understanding of web design principles. </p>
          <p className={styles.text}> I have also worked extensively with TypeScript, building scalable and reliable applications. </p>
          <p className={styles.text}> In addition, I am proficient in Python and have experience using it for data analysis and machine learning tasks. </p>
          <p className={styles.text}> I am always looking to learn new skills and technologies, and am excited to apply my expertise to challenging projects. </p><br></br>
          <p className={styles.text}> <h2>My Expertise are in Areas</h2><br></br>
          <ol><li>HTML</li>
            <li className={styles.text}>CSS</li>
            <li className={styles.text}>JavaScript</li>
            <li className={styles.text}>TypeScript</li>
            <li className={styles.text}>Python</li>
            <li className={styles.text}>Machine Learning</li>
            </ol></p><br></br>
          <p className={styles.text}> You can join us by visting our blog </p>
          <a className= {styles.btn}href="https://codespacehub.blogspot.com/" target="_blank">Developers Hub</a><br></br>
            {/* <link href ="https://codespacehub.blogspot.com/" >  */}
            {/* <a><h2 className={styles.btn}>Developers Hub</h2></a>
            </link> */}
            < Link className= {styles.text}href="/blog">See Blogs List</Link>
    </div>
    </>
  )
}
