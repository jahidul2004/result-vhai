import Lottie from "lottie-react";
import individualLottie from "../../assets/lottie/individual.json";
const CGPACalc = () => {
    const calculateCGPA = (e) => {
        e.preventDefault();
        const form = e.target;

        const sem1 = parseFloat(form.sem1.value);
        const sem2 = parseFloat(form.sem2.value);
        const sem3 = parseFloat(form.sem3.value);
        const sem4 = parseFloat(form.sem4.value);
        const sem5 = parseFloat(form.sem5.value);
        const sem6 = parseFloat(form.sem6.value);
        const sem7 = parseFloat(form.sem7.value);
        const sem8 = parseFloat(form.sem8.value);

        const regulation = parseInt(form.regulation.value);

        console.log({
            sem1,
            sem2,
            sem3,
            sem4,
            sem5,
            sem6,
            sem7,
            sem8,
            regulation,
        });
        form.reset();
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-full md:w-1/2 md:ml-20">
                        <Lottie animationData={individualLottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:w-1/2 md:mr-20">
                        <form
                            onSubmit={calculateCGPA}
                            className="card-body w-full"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Regulation
                                    </span>
                                </label>
                                <select
                                    className="border border-[#00000031] p-3 rounded-lg"
                                    name="regulation"
                                    id=""
                                >
                                    <option value="null">Regulation</option>
                                    <option value="2010">2010</option>
                                    <option value="2016">2016</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-4">
                                <input
                                    name="sem1"
                                    placeholder="1st"
                                    className="input-bordered border p-3 rounded-lg"
                                    type="text"
                                />
                                <input
                                    name="sem2"
                                    placeholder="2nd"
                                    className="input-bordered border p-3 rounded-lg"
                                    type="text"
                                />
                                <input
                                    name="sem3"
                                    placeholder="3rd"
                                    className="input-bordered border p-3 rounded-lg"
                                    type="text"
                                />
                                <input
                                    name="sem4"
                                    placeholder="4th"
                                    className="input-bordered border p-3 rounded-lg"
                                    type="text"
                                />
                                <input
                                    name="sem5"
                                    placeholder="5th"
                                    className="input-bordered border p-3 rounded-lg"
                                    type="text"
                                />
                                <input
                                    name="sem6"
                                    placeholder="6th"
                                    className="input-bordered border p-3 rounded-lg"
                                    type="text"
                                />
                                <input
                                    name="sem7"
                                    placeholder="7th"
                                    className="input-bordered border p-3 rounded-lg"
                                    type="text"
                                />
                                <input
                                    name="sem8"
                                    placeholder="8th"
                                    className="input-bordered border p-3 rounded-lg"
                                    type="text"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="hover:text-[#357ef0] btn bg-[#357ef0] text-white font-bold">
                                    Calculate CGPA
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CGPACalc;
