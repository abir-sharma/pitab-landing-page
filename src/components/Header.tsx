
import pi from "../assets/pi.svg"
import hamburger from "../assets/hamburger.svg"

const Header = () => {
  return (
      <div className="flex items-center justify-between px-6 fixed bg-white w-full z-50  py-4">
        <img src={pi} alt="" />
        <img src={hamburger} alt="" />
      </div>
  )
}

export default Header