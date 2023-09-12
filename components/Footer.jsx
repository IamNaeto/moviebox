import React from "react";
import facebook from "../src/assets/imgs/fa-brands_facebook-square.png"
import instagram from "../src/assets/imgs/fa-brands_instagram.png"
import twitter from "../src/assets/imgs/fa-brands_twitter.png"
import youtube from "../src/assets/imgs/fa-brands_youtube.png"

const Footer = () => {
    return ( 
        <footer className="flex items-center flex-col justify-between my-14 mx-5% text-center">
            <div>
                <a className="mr-4" href=""><img src={facebook} alt="" /></a>
                <a  className="mr-4" href=""><img src={instagram} alt="" /></a>
                <a  className="mr-4" href=""><img src={twitter} alt="" /></a>
                <a  href=""><img src={youtube} alt="" /></a>
            </div>

            <div className="my-4">
                <a  className="mr-4 text-#111827 text-18px" href="">Conditions of Use</a>
                <a  className="mr-4 text-#111827 text-18px" href="">Privacy & Policy</a>
                <a  className="text-#111827 text-18px" href="">Press Room</a>
            </div>

            <p className="text-#6B7280 text-18px">© 2021 MovieBox by Adriana Eka Prayudha  </p>
        </footer>
     );
}
 
export default Footer;