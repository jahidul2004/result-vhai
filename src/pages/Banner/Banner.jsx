import Lottie from "lottie-react";
import bannerLottie from "../../assets/lottie/bannerlottie.json";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full md:w-50%">
                    <Lottie animationData={bannerLottie}></Lottie>
                </div>
                <div className="w-full md:w-50%">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Your <span className="text-[#357ef0]">Results</span>{" "}
                        Just <br /> a Click Away!
                    </h1>
                    <p className="py-6">
                        Easily access your diploma results anytime, <br />{" "}
                        anywhere with our simple and fast platform.
                    </p>
                    <button className="btn hover:text-[#357ef0] bg-[#357ef0] text-white font-bold">
                        See Result
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
