import userIcon from "../../assets/slack.png";

const comments = [
    "The product selection is great, but I would love to see more variety in the categories.",
    "The website loads quickly, and I had no issues while browsing. Great job!",
    "Customer support was very helpful when I had a query. Excellent service!",
    "I found the checkout process a bit complicated. It could be simplified.",
];

const CommentSection = () => {
    return (
        <div className="bg-gray-100 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-[#357ef0] pb-10">
                Our Community Feedback
            </h1>
            <div className="relative w-full overflow-hidden  flex items-center py-10">
                <div className="flex animate-marquee">
                    {comments.map((comment, index) => (
                        <div
                            key={index}
                            className="mx-4 border p-4 rounded-lg bg-[#357df01e]"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-[50px] h-[50px] border border-[#357ef0] rounded-full p-2 flex items-center justify-center">
                                    <img
                                        className="w-full h-full"
                                        src={userIcon}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h1 className="font-bold text-xl">
                                        Jahidul Islam Jihad
                                    </h1>
                                    <p className="font-semibold text-[#000000ab]">
                                        Malibagh,Dhaka
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p>{comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommentSection;
