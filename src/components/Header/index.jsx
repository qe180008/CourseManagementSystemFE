import { Link, NavLink } from "react-router-dom";
import Dropdowns from "../Dropdowns";
import SearchForm from "../Search";
import { CiBellOn } from "react-icons/ci";
function Header() {
  return (
    <>
      <div className="flex border-b-[1px] border-b-[#ddd] items-center justify-around py-[1rem] ">
        <div className="w-[25%] flex items-center justify-end">
          <Dropdowns />
        </div>
        <div className="w-[50%]">
          <SearchForm />
        </div>
        <div className="flex w-[25%] items-center justify-center gap-x-[1.4rem]">
          <NavLink to="#">
            Schedule
          </NavLink>
          <NavLink to="#">
            Wishlish
          </NavLink>
          <div>
            <CiBellOn className="text-[1.7rem]" />
          </div>
          <div className="flex items-center justify-center gap-x-[0.5rem]">
            <Link to="/login">
              <button type="button" className="bg-black text-white px-[0.7rem] py-[0.3rem]">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button type="button" className="bg-black text-white px-[0.7rem] py-[0.3rem]">
                Sign up
              </button>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
export default Header;