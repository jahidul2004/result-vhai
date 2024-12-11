import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa6";
import logo from "../../assets/slack.png";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-[#f7f7f7] p-10">
            <aside>
                <img className="w-[40px] h-[40px]" src={logo} alt="" />
                <p className="font-bold text-lg">
                    Result Vhai
                    <br />
                    <span>Provide diploma result since 2024</span>
                </p>
                <p>
                    Copyright © {new Date().getFullYear()} -Result Vhai- All
                    right reserved
                </p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl text-[#008854]">
                    <a>
                        <FaFacebook />
                    </a>
                    <a>
                        <FaTelegram />
                    </a>
                    <a>
                        <FaYoutube />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
