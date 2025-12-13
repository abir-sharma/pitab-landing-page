import { useEffect, useState, useRef } from "react";
import reviewQuote from "../assets/review-quote.png"
import user from "../assets/parent-icon.png"

interface Testimonial {
    id: number;
    text: string;
    name: string;
    subtext: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "For the first time, I could see my entire family tree on one screen. Ancestropedia helped me preserve the stories my grandparents used to tell me.",
        name: "Kamla Devi",
        subtext: "Priya Sharma, Parent of Class 9 student",
        image: "/images/user1.png",
    },
    {
        id: 2,
        text: "The platform made it so easy for my child to understand family links. Wonderful initiative!",
        name: "Rakesh Verma",
        subtext: "Parent of Class 7 student",
        image: "/images/user2.png",
    },
    {
        id: 3,
        text: "A great learning tool that connects children with their roots.",
        name: "Suman Gupta",
        subtext: "Parent of Class 6 student",
        image: "/images/user3.png",
    },
];

export default function TestimonialSlider() {
    const [_index, setIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);


    const startAutoScroll = () => {
        intervalRef.current = setInterval(() => {
            setIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 4000); // 4 sec
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoScroll();
        return stopAutoScroll;
    }, []);


    return (
        <div className="w-full max-w-md mx-auto relative px-4 py-6 flex flex-col gap-6">
            <div>
                <p className="text-2xl text-center font-semibold">Loved by Parents & Students</p>
                <p className="text-center mt-2">
                    Join thousands of families who chose PW Tablet for their children's education
                </p>
            </div>

            {/* Scrollable Slider */}
            <div
                className="overflow-x-auto no-scrollbar"
                style={{ scrollSnapType: "x mandatory" }}
            >
                <div className="flex gap-4">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="
        min-w-[85%] 
        aspect-square
        bg-white 
        border border-gray-300 
        rounded-2xl 
        p-6
        shadow-sm 
        flex 
        flex-col 
        justify-between
        scroll-snap-align-start
    "
                        >


                            {/* Top Section */}
                            <div>
                                {/* Quote Icon */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
                                    <img src={reviewQuote} alt="" />
                                </div>

                                <p className="mt-4 text-gray-700 leading-relaxed">
                                    {item.text}
                                </p>
                            </div>

                            <div className="my-4 border-b"></div>

                            {/* User Info — stays at bottom */}
                            <div className="flex items-center gap-3 mt-auto">
                                <img
                                    src={user}
                                    alt="user"
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                                    <p className="text-xs text-gray-500">{item.subtext}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
