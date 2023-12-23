'use client'
import Wrapper from "../layouts/wrapper"
import { singnupAction } from "../actions/singup"
import { useFormState } from "react-dom";
import { useRef } from "react";
import SubButton from "../components/loading-submit-button";
export default function SignUp() {
  const intialState = {errors: {}, message: null,success: false}
  const [state, dispatch] = useFormState(singnupAction,intialState)
  const formRef = useRef()

  function suceessOperation() {
    formRef.current?.reset()
    return <p className="border border-green-600 bg-green-200 text-green-950">User Created!</p>
  }
  
  return (
    <Wrapper>
      <form className="flex flex-col gap-2 max-w-md w-full m-auto bg-white px-4 py-8 rounded shadow-md" action={dispatch} ref={formRef} >
        {state.success && suceessOperation()}
        <div className="text-lg font-bold text-center dark:text-black">Please SignUp</div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="username" className="dark:text-black">Usernam</label>
          <input type="text" name="username" id="username" className="w-full px-4 py-2 border border-gray-300 rounded dark:text-black" defaultValue={state.username} />
          {state.errors?.username && state.errors.username.map(e => (
            <p className=" text-red-500 text-sm" key={e}>{e}</p>
          ))}
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="email" className="dark:text-black">Email</label>
          <input type="text" name="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded dark:text-black" defaultValue={state.email} />
          {state.errors?.email && state.errors.email.map(e => (
            <p className=" text-red-500 text-sm" key={e}>{e}</p>
          ))}
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="password" className="dark:text-black">Password</label>
          <input type="password" name="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded dark:text-black" defaultValue={state.password} />
          {state.errors?.password && state.errors.password.map(e => (
            <p className=" text-red-500 text-sm" key={e}>{e}</p>
          ))}
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="cpassword" className="dark:text-black">Confirm Password</label>
          <input type="password" name="password_confirm" id="cpassword" className="w-full px-4 py-2 border border-gray-300 rounded dark:text-black" defaultValue={state.password_confirm} />
          {state.errors?.password_confirm && state.errors.password_confirm.map(e => (
            <p className=" text-red-500 text-sm" key={e}>{e}</p>
          ))}
        </div>
        <SubButton />
      </form>
    </Wrapper>
  )
}