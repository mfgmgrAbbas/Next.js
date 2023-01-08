import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Image src="/logos.png" width={128} height = {77}/>
            </div>
            <Link href="/"><h1>Home</h1></Link>
            <Link href="/about"><h1>About</h1></Link>
            <Link href="/blog"><h1>Blogs List</h1></Link>
        </nav>
     );
}
 
export default Navbar;