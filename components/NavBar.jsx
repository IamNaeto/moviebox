import { Link } from 'react-router-dom'
import tv from "../src/assets/imgs/tv.png"
import menu from "../src/assets/imgs/Menu.png"
import Searchbar from './Searchbar'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  let header, logo, signIn
  
      if (location.pathname === '/') {
        header = `flex items-center justify-between w-full pb-15 px-3 py-4 md:px-5% md:py-5 text-white transition-all z-10 ${
          isScrolled ? 'fixed top-0 bg-white text-black shadow-md' : ''
        }`;
        logo = `flex items-center  ${isScrolled ? 'text-black' : 'text-white'}`;
        signIn = `${isScrolled ? 'text-black' : 'text-white'} text-4 signin`;
      } else if (location.pathname === '/moremovies') {
        header = `flex md:items-center justify-between w-full pb-15 px-3 py-4 md:px-5% md:py-5 transition-all z-10
          fixed top-0 bg-white text-black shadow-md`;
        logo = `flex items-center text-black`;
        signIn = `text-black text-4 signin`;
      }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return ( 
      <header
      className={header}
      // className={`flex items-center justify-between w-full px-3 py-4 md:px-5% md:py-5 text-white transition-all z-10 ${
      //   isScrolled ? 'fixed top-0 bg-white text-black shadow-md' : ''
      // }`}
    >
            <Link to="/" className={logo}>
              <img src={tv} alt="logo" className='mr-2 w-10 md:w-15'/>
              <h2 className='text-5 md:text-6'>MovieBox</h2>
            </Link>

          {/* Search bar for larger screens */}
          <div className="hidden md:flex w-50%">
            <Searchbar />
          </div>

          {/* Search bar for mobile screens */}
          <div className={`absolute top-15 px-10 left-0 right-0 block md:hidden`}>
            <Searchbar />
          </div>

            <div className='flex justify-between items-center'>
              <Link to="" className={signIn}>Sign In</Link>
              <Link to="" className='ml-2'>
              <img src={menu} alt="menu" className=''/>
              </Link>
            </div>
          </header>
     );
}
 
export default NavBar;