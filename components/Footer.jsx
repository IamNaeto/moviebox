import React from "react";

const Footer = () => {
    return ( 
        <footer className="flex items-center flex-col justify-between my-14 mx-5% text-center">
            <div>
                <a className="mr-4" href=""><img src="../src/assets/imgs/fa-brands_facebook-square.png" alt="" /></a>
                <a  className="mr-4" href=""><img src="../src/assets/imgs/fa-brands_instagram.png" alt="" /></a>
                <a  className="mr-4" href=""><img src="../src/assets/imgs/fa-brands_twitter.png" alt="" /></a>
                <a  href=""><img src="../src/assets/imgs/fa-brands_youtube.png" alt="" /></a>
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