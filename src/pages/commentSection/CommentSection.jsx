import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const comments = [
    {
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        username: "Forhad Ahmed",
        location: "Sylhet, Bangladesh",
        commentText:
            "The product selection is great, but I would love to see more variety in the categories.",
    },
    {
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        username: "Jahirul Islam Joy",
        location: "Noakhali, Bangladesh",
        commentText:
            "The website loads quickly, and I had no issues while browsing. Great job!",
    },
    {
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        username: "Shihab",
        location: "Dhaka, Bangladesh",
        commentText:
            "Customer support was very helpful when I had a query. Excellent service!",
    },
    {
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        username: "Forhad Alam Asif",
        location: "Dhaka, Bangladesh",
        commentText:
            "I found the checkout process a bit complicated. It could be simplified.",
    },
    {
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        username: "ABD Abdullah",
        location: "Barishal, Bangladesh",
        commentText:
            "Amazing user experience, I’ll definitely recommend this to my friends!",
    },
    {
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        username: "Olivia Taylor",
        location: "Chattagram, Bangladesh",
        commentText:
            "More payment options would be great, but overall a fantastic service!",
    },
];

const CommentSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % comments.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-100 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-[#357ef0] pb-10">
                Our Community Feedback
            </h1>
            <div className="w-full flex justify-center overflow-hidden py-10">
                <div className="relative w-[80%] flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: "0%", opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="border p-6 rounded-lg bg-[#357df01e] w-[95%] shadow-lg"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-[60px] h-[60px] border-2 border-[#357ef0] rounded-full flex items-center justify-center overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={comments[index].image}
                                        alt="User Icon"
                                    />
                                </div>
                                <div>
                                    <h1 className="font-bold text-xl">
                                        {comments[index].username}
                                    </h1>
                                    <p className="font-semibold text-[#000000ab]">
                                        {comments[index].location}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p>{comments[index].commentText}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;
