import { Link } from 'react-router-dom'
import tv from "../src/assets/imgs/tv.png"
import menu from "../src/assets/imgs/Menu.png"
import Searchbar from './Searchbar'

const NavBar = () => {
    return ( 
        <header className='flex items-center justify-between w-full px-3 py-4 md:px-5% md:py-5 text-white'>
            <Link to="/" className='flex items-center text-white'>
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
              <Link to="" className='text-white text-4 signin'>Sign In</Link>
              <Link to="" className='ml-2'>
              <img src={menu} alt="menu" className=''/>
              </Link>
            </div>
          </header>
     );
}
 
export default NavBar;