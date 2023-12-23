'use client'
import Wrapper from "../layouts/wrapper";
import SubButton from "../components/loading-submit-button";
export default function Page() {
  return (
    <Wrapper>
      <div className="max-w-md w-full m-auto rounded shadow-md bg-white py-5 px-2 text-black">
        <form className="flex flex-col gap-2">
          <div className="text-lg font-bold text-center dark:text-black">Please Log In</div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" className="w-full px-4 py-2 border border-gray-300 rounded dark:text-black"  />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Password</label>
            <input type="text" name="username" id="username" className="w-full px-4 py-2 border border-gray-300 rounded dark:text-black"  />
          </div>
          <SubButton label="Log In" />
        </form>
      </div>
    </Wrapper>
  )
}