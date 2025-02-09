import img from"../../assets/images/z6300617420455_d0bbea1107c2d7e87bdeec02679bc159.jpg";
import Regester from "../../components/Form/FormRegester";
import { Link } from "react-router-dom";
function SignUp() {
    return (
        <>
            <div className="flex flex-col justify-center items-start px-[35rem] gap-y-[2rem] py-[1.4rem]">
                <h1 className="text-[2rem] font-bold ">Create account</h1>
                <div className="w-full relative mb-[1.5rem] mt-[-1rem]">
                    <img src={img} className="w-[3rem] absolute right-0"/>
                </div>
                <div className="w-full">
                    <Regester />
                </div>
                <div className="w-full">
                    <span className="flex justify-center">Already have an account?<Link to="/login" className="pl-[0.4rem]">Log in</Link></span>
                </div>
            </div>
        </>
    )
}
export default SignUp;