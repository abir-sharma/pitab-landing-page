import curiousjr from "../assets/curiousjr.svg"
import powerBatch from "../assets/power-batch.svg"
import ai from "../assets/ai.svg"
import learnPlay from "../assets/learnPlay.svg"
import reportCard from "../assets/reportCard.svg"
import challenge from "../assets/challengeOfTheDay.svg"
import aiScan from "../assets/aiScan.svg"
import aiGuru from "../assets/aiGuru.svg"
import reportCard2 from "../assets/reportCard2.svg"
import challenge2 from "../assets/challengeOfTheDay2.svg"
import cjFalse from "../assets/CJInactive.png"
import cjTrue from "../assets/PBActive.png"


interface Banner1Props {
    isCJ: boolean;
    setIsCJ: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner2: React.FC<Banner1Props> = ({ isCJ, setIsCJ }) => {

    // const [isCJ, setIsCJ] = useState(true);

    return (
        <div className="px-4 flex flex-col gap-8 py-12"
            style={{
                background: isCJ
                    ? "linear-gradient(to bottom, #FFE6CD 0%, #FFFFFF 60%)"   // CJ = true
                    : "linear-gradient(to bottom, #E6EDFF 0%, #FFFFFF 60%)"   // CJ = false (example)
            }}
        >
            <p className="text-2xl font-semibold text-center">Choose The Perfect Tablet For Your Child</p>

            <div>
                <div className="flex items-end justify-between">
                    <div className="hover:cursor-pointer" onClick={() => setIsCJ(true)}>

                        {isCJ ?
                            <>
                                <div className="flex text-lg font-bold">
                                    <span>Curious</span><span className="text-red-500">Jr</span>
                                </div>
                                <img src={curiousjr} alt="" />

                            </>
                            :
                            <>
                                <div className="flex text-lg font-bold">
                                    <span>Curious</span><span className="text-gray-500">Jr</span>
                                </div>
                                <img src={cjFalse} alt="" />

                            </>
                        }
                    </div>

                    <div className="hover:cursor-pointer" onClick={() => setIsCJ(false)}>

                        {!isCJ ?
                            <>
                                <div className="flex text-lg font-bold">
                                    <span className="text-black">Power</span><span className="text-blue-500">Batch</span>
                                </div>
                                <img src={cjTrue} alt="" />

                            </>
                            :
                            <>
                                <div className="flex text-lg font-bold">
                                    <span className="text-black">Power</span><span className="text-gray-500">Batch</span>
                                </div>
                                <img src={powerBatch} alt="" />

                            </>
                        }
                    </div>

                </div>

                <p className="text-sm mt-2">We offer live classes with 1:1 mentor support, recordings, worksheets, tests, and progress tracking. Students also get coding, Olympiad prep, mental ability sessions, revision/bridge courses, and chapter learning packs</p>

            </div>

            {isCJ ? <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between rounded-xl py-4 px-4" style={{
                    background: "linear-gradient(to left, #FFC9A0 0%, #FFD6B8 40%, #FFFFFF 100%)"
                }}>
                    <div className="text-[#C76E43] w-52">
                        <p className="text-lg font-semibold ">Homework Help</p>
                        <p className="text-[12px] font-[12px]">Capture your worksheet and get instant answers, clear explanations, and smart AI doubt-solving</p>
                    </div>
                    <img src={ai} alt="" />
                </div>

                <div className="flex items-center justify-between gap-12 rounded-xl py-4 px-3" style={{
                    background: "linear-gradient(to right, #FFD8E1 0%, #FFD8E1 40%, #FFFFFF 100%)"
                }}>
                    <img src={learnPlay} alt="" />

                    <div className="text-[#C26262] ">
                        <p className="text-lg font-semibold text-right ">Learn & Play</p>
                        <p className="text-[12px] font-[12px] text-right">Learn & Play offers interactive quizzes that simplify concepts and make studying more fun</p>
                    </div>
                </div>

                <div className="flex items-center justify-between rounded-xl py-4 px-4" style={{
                    background: "linear-gradient(to left, #FBE9B8 0%, #FBE9B8 40%, #FFFFFF 100%)"
                }}>
                    <div className="text-[#C76E43] w-52">
                        <p className="text-lg font-semibold ">Report Card</p>
                        <p className="text-[12px] font-[12px]">Report Card gives clear insights and weekly reports for easy progress tracking</p>
                    </div>
                    <img src={reportCard} alt="" />
                </div>

                <div className="flex items-center justify-between rounded-xl gap-8  py-4 px-3" style={{
                    background: "linear-gradient(to right, #CCEBFC 0%, #CCEBFC 40%, #FFFFFF 100%)"
                }}>
                    <img src={challenge} alt="" />
                    <div className="text-[#516BAA] w-52">
                        <p className="text-lg font-semibold text-right ">Challenge of the Day</p>
                        <p className="text-[12px] font-[12px] text-right">Learn & Play offers interactive quizzes that simplify concepts and make studying more enjoyable</p>
                    </div>
                </div>
            </div>
                :
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between rounded-xl py-4 px-4" style={{
                        background: "linear-gradient(to left, #BACDFF 0%, #BACDFF 40%, #FFFFFF 100%)"
                    }}>
                        <div className="text-[#3859D0] w-52">
                            <p className="text-lg font-semibold ">AI Scan</p>
                            <p className="text-[12px] font-[12px]">Capture your worksheet and get instant answers, clear explanations, and smart AI doubt-solving</p>
                        </div>
                        <img src={aiScan} alt="" />
                    </div>

                    <div className="flex items-center justify-between gap-12 rounded-xl py-4 px-3" style={{
                        background: "linear-gradient(to right, #BACDFF 0%, #BACDFF 40%, #FFFFFF 100%)"
                    }}>
                        <img src={aiGuru} alt="" />

                        <div className="text-[#3859D0] ">
                            <p className="text-lg font-semibold text-right ">Learn & Play</p>
                            <p className="text-[12px] font-[12px] text-right">Learn & Play offers interactive quizzes that simplify concepts and make studying more fun</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl py-4 px-4" style={{
                        background: "linear-gradient(to left, #BACDFF 0%, #BACDFF 40%, #FFFFFF 100%)"
                    }}>
                        <div className="text-[#3859D0] w-52">
                            <p className="text-lg font-semibold ">Report Card</p>
                            <p className="text-[12px] font-[12px]">Report Card gives clear insights and weekly reports for easy progress tracking</p>
                        </div>
                        <img src={reportCard2} alt="" />
                    </div>

                    <div className="flex items-center justify-between rounded-xl gap-8  py-4 px-3" style={{
                        background: "linear-gradient(to right, #BACDFF 0%, #BACDFF 40%, #FFFFFF 100%)"
                    }}>
                        <img src={challenge2} alt="" />
                        <div className="text-[#3859D0] w-52">
                            <p className="text-lg font-semibold text-right ">Challenge of the Day</p>
                            <p className="text-[12px] font-[12px] text-right">Learn & Play offers interactive quizzes that simplify concepts and make studying more enjoyable</p>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Banner2