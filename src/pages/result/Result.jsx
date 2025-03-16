import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Result = () => {
    const { roll } = useParams();
    const [myResult, setMyResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(myResult);

    useEffect(() => {
        fetch("/6thSemReg.json")
            .then((res) => res.json())
            .then((data) => {
                const foundResult = data.find(
                    (item) => item.rollNumber === roll
                );
                if (foundResult) {
                    setMyResult(foundResult);
                } else {
                    setError("No result found for this roll number.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setError("Failed to load data.");
                setLoading(false);
            });
    }, [roll]);

    return (
        <div className="w-[90%] md:container mx-auto my-10">
            <h1 className="text-2xl md:text-3xl font-bold text-[#4680ee]">
                Result of Roll: {roll}
            </h1>

            {loading ? (
                <p className="text-center text-lg mt-5">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500 mt-5">{error}</p>
            ) : (
                <div className="mt-5 rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(myResult)
                        .filter(([key]) => key.startsWith("gpa"))
                        .map(([key, value], index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-[#4680ee] to-[#6a9fef] shadow-lg p-6 rounded-lg text-center hover:scale-105 transition-all duration-300"
                            >
                                <p className="text-4xl font-extrabold text-white">
                                    {value}
                                </p>
                                <h2 className="text-white font-semibold text-xl mt-2">
                                    Semester: {key.replace("gpa", "")}
                                </h2>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Result;
