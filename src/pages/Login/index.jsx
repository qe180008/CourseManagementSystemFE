
import imageSrc from "../../assets/images/z6300617420455_d0bbea1107c2d7e87bdeec02679bc159.jpg";
import FormLogin from "../../components/Form/FormLogin";
function Login() {
    return (
        <>
            <div className=" flex flex-col justify-center px-[35rem] py-[5rem]">
                <div className="relative left-[22rem]">
                    <img className="w-[3rem] h-auto" src={imageSrc} alt="" />
                </div>
                <h1 className="text-[2rem] font-bold text-center mb-[3rem]">Login</h1>
                <div className="mb-[2rem]">
                    <FormLogin />
                </div>
                <div className="flex items-center justify-center gap-1">
                    <div className="border-t-[1px] border-[#ddd] border-solid w-full"></div>
                    <span className="whitespace-nowrap text-[0.8rem]">Or with</span>
                    <div className="border-t-[1px] border-[#ddd] border-solid w-full"></div>
                </div>
                <div className="text-center mt-[1.5rem]">
                    <span>Welcome to Course</span>
                </div>
            </div>
        </>
    )
}
export default Login;
