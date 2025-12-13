import mainImage from "../assets/main-image.svg"

interface Banner1Props {
    isCJ: boolean;
}

const Banner1: React.FC<Banner1Props> = ({ isCJ }) => {
    return (
        <div className="flex flex-col justify-center items-center px-4 gap-4 pt-24"
            style={{
                background: isCJ
                    ? "linear-gradient(to bottom, #E6EDFF 0%, #FFE6CD 100%)"   // CJ = true
                    : "linear-gradient(to bottom, #FFE6CD 0%, #E6EDFF 100%)"   // CJ = false (example)
            }}
        >
            <img src={mainImage} alt="" />
            <p className="text-center text-3xl font-bold">A Smarter, Safer Learning Tablet For Your Child</p>
            <p className="text-center text-sm">Experience a new era of education with our learning-focused OS, robust parental safety features, and the powerful performance of Samsung</p>
            <button className="bg-[#1B2124] w-full flex items-center justify-center gap-2 text-white  rounded-md px-8 py-3">
                <span className="text-sm">Order Now</span>
                <span>|</span>
                <span className="text-xs opacity-90">Starting from</span>
                <span className="text-sm">  ₹14,999</span>
            </button>
        </div>
    )
}

export default Banner1