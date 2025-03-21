import Lottie from "lottie-react";
import individualLottie from "../../assets/lottie/ind.json";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const IndividualResult = () => {
    const [roll, setRoll] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (roll) {
            navigate(`/result/${roll}`);
        }
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-full md:w-1/2 md:ml-20">
                        <Lottie animationData={individualLottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:w-1/2 md:mr-20">
                        <form onSubmit={handleSubmit} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Exam Type
                                    </span>
                                </label>
                                <select
                                    className="border border-[#00000031] p-3 rounded-lg"
                                    name=""
                                    id=""
                                >
                                    <option value="DIPLOMA+IN+ENGINEERING">
                                        Diploma In Engineering
                                    </option>
                                    <option value="">
                                        Diploma In Textile Engineering
                                    </option>
                                    <option value="">
                                        Diploma In Livestock and Forestry
                                    </option>
                                    <option value="">
                                        Diploma In Engineering (Naval)
                                    </option>
                                    <option value="">
                                        Diploma In Tourism and Hospitality
                                    </option>
                                    <option value="">
                                        Diploma In Agriculture
                                    </option>
                                    <option value="">
                                        Diploma In Fisheries
                                    </option>
                                    <option value="">
                                        Diploma In Medical Technology
                                    </option>
                                    <option value="">
                                        Diploma In Commerce
                                    </option>
                                    <option value="">HSC (Vocational)</option>
                                    <option value="">
                                        HSC (Business Management)
                                    </option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Regulation
                                    </span>
                                </label>
                                <select
                                    className="border border-[#00000031] p-3 rounded-lg"
                                    name=""
                                    id=""
                                >
                                    <option value="">Regulation</option>
                                    <option value="2010">2010</option>
                                    <option value="2016">2016</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Roll</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Roll"
                                    className="input input-bordered"
                                    value={roll}
                                    onChange={(e) => setRoll(e.target.value)}
                                    required
                                />
                            </div>
                            <p className="mt-2">
                                Show individual result{" "}
                                <NavLink
                                    className="font-bold"
                                    to={"/guideline/individual"}
                                >
                                    Guideline
                                </NavLink>
                            </p>
                            <div className="form-control mt-6">
                                <Link
                                    to={`/result/${roll}`}
                                    className="hover:text-[#357ef0] btn bg-[#357ef0] text-white font-bold"
                                >
                                    Show Result
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualResult;
