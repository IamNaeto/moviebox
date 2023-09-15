import React from "react";
import facebook from "../src/assets/imgs/fa-brands_facebook-square.png"
import instagram from "../src/assets/imgs/fa-brands_instagram.png"
import twitter from "../src/assets/imgs/fa-brands_twitter.png"
import youtube from "../src/assets/imgs/fa-brands_youtube.png"

const Footer = () => {
    return ( 
        <footer className="flex items-center flex-col justify-between my-8 mx-5% text-center">
            <div>
                <a className="mr-4" href=""><img src={facebook} alt="" /></a>
                <a  className="mr-4" href=""><img src={instagram} alt="" /></a>
                <a  className="mr-4" href=""><img src={twitter} alt="" /></a>
                <a  href=""><img src={youtube} alt="" /></a>
            </div>

            <div className="my-2">
                <a  className="mr-4 text-#111827 lg:text-4.5 md:text-3 text-3" href="">Conditions of Use</a>
                <a  className="mr-4 text-#111827 lg:text-4.5 md:text-3 text-3" href="">Privacy & Policy</a>
                <a  className="text-#111827 lg:text-4.5 md:text-3 text-3" href="">Press Room</a>
            </div>

            <p className="text-#6B7280 lg:text-4.5 md:text-3 text-3">© 2023 MovieBox by Charles Obimnaeto Egesionu  </p>
        </footer>
     );
}
 
export default Footer;