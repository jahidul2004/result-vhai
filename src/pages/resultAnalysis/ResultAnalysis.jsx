import React, { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const ResultAnalysis = () => {
    const allData = [
        { year: 2015, girls: 80, boys: 70 },
        { year: 2016, girls: 65, boys: 60 },
        { year: 2017, girls: 83, boys: 80 },
        { year: 2018, girls: 79, boys: 75 },
        { year: 2019, girls: 58, boys: 70 },
        { year: 2020, girls: 82, boys: 90 },
        { year: 2021, girls: 89, boys: 65 },
        { year: 2022, girls: 79, boys: 80 },
        { year: 2023, girls: 73, boys: 63 },
        { year: 2024, girls: 61, boys: 78 },
    ];

    const [data, setData] = useState(allData);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setData(allData.slice(-2));
            } else {
                setData(allData);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full h-[500px] mt-10 mb-40">
            <div className="py-5 mb-10">
                <h1 className="text-center text-3xl md:text-4xl font-bold mt-5 text-[#357ef0]">
                    Result Analysis
                </h1>
                <p className="text-center font-semibold pt-2">
                    {window.innerWidth <= 768
                        ? "Last 2 Years in (%)"
                        : "From 2015 to 2024 in (%)"}
                </p>
            </div>

            <ResponsiveContainer
                className="mx-auto pb-2"
                width="95%"
                height="100%"
            >
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" tick={{ fill: "#555" }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="girls"
                        fill="#357ef0"
                        activeBar={<Rectangle fill="pink" stroke="blue" />}
                        radius={[5, 5, 0, 0]}
                    />
                    <Bar
                        dataKey="boys"
                        fill="#008854"
                        activeBar={<Rectangle fill="gold" stroke="purple" />}
                        radius={[5, 5, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResultAnalysis;
