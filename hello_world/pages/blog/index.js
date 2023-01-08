// import styles from '../styles/job.module.css';
// import styles from '../styles/job.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
const data = await res.json()

return {
    props: {blogs:data}
}

}


const Blogs = ({blogs}) => {
    return ( 
        <div>
            <h1>Blogs List</h1>
            {blogs.map(blog => (
                //  <Link href={'/blog' + blog.id} key={blog.id}>
                
                <a>
                    <h3>{blog.id}</h3>
                </a>
                // <Link />
            ))}
           
        </div>
     );
}
 
export default Blogs;