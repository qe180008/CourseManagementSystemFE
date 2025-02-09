import { Link } from "react-router-dom";

function FormLogin() {
  const inputElement = [
    {
      content: "Username",
      id: "name",
      type: "text",
      placeholder: "Username",
    },
    {
      content: "Password",
      id: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  return (
    <>
      <form>
        {inputElement.map((element, index) => (
          <div className="" key={index}>
            <label
              htmlFor={element.id}
              className="block text-sm font-medium text-gray-900"
            >
              {element.content}
            </label>
            <div className="mt-2 w-full mb-5">
              <div className="flex items-center rounded-lg bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  id={element.id}
                  name={element.id}
                  type={element.type}
                  placeholder={element.placeholder}
                  className="block w-full py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <div className="mb-5">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree" className=" text-gray-900 ml-2 text-[0.8rem]">
              Remember me
            </label>
          </div>
          <div>
            <Link to="/forgot-password" className="hover:underline text-black text-[0.8rem]">
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="mb-7 w-full">
          <button
            type="submit"
            className="flex w-full justify-center bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-white hover:text-black rounded-lg"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
