import Head from "next/head";
    

const About = () => {
    return ( 
      <>
      <Head>
      <title>MetaVerse Developers</title>
      <meta name='keyword' content='blog'/>
    </Head>
        <div>
            <b><h1> MetaVerse Developers </h1></b><br></br>
          <p> Hello world I am Abbas Shah and I am a highly skilled developer with experience in a wide range of technologies.</p>
          <p> I am proficient in HTML and CSS, and have a strong understanding of web design principles. </p>
          <p> I have also worked extensively with TypeScript, building scalable and reliable applications. </p>
          <p> In addition, I am proficient in Python and have experience using it for data analysis and machine learning tasks. </p>
          <p> I am always looking to learn new skills and technologies, and am excited to apply my expertise to challenging projects. </p><br></br>
          <p> <h2>My Expertise are in Areas</h2><br></br>
          <ol><li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Machine Learning</li>
            </ol></p><br></br>
          <p> You can join us by visting our blog </p>
          <a href="https://codespacehub.blogspot.com/" target="_blank">Developers Hub</a>
            {/* <link href ="https://codespacehub.blogspot.com/" >  */}
            {/* <a><h2 className={styles.btn}>Developers Hub</h2></a>
            </link> */}
        </div>
        </>
     );
}
 
export default About;