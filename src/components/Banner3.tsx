import mdm from "../assets/mobile-tab.svg"


const Banner3 = () => {
    return (
        <div className="w-full flex flex-col px-4 items-center justify-center gap-4">
            <p className="text-2xl font-bold text-center">MDM Parental Control App</p>
            <p>Allows parents to manage screen time, control app access, and ensure responsible device usage</p>
            <img src={mdm} alt="" />
            <div className="px-4">
                <li>Parents can lock entertainment apps during study hours and set daily screen time limits. </li>
                <li>From their phone, they can view weekly learning reports.</li>
                <li>Student can easily monitor their tablet usage to optimise their studies.</li>
            </div>

        </div>
    )
}

export default Banner3