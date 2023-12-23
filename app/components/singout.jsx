import { signOutAction } from "../actions/singup"
export default function Singout() {
  return (
    <form
      action={signOutAction}
    >
      <button className="bg-blue-600 text-white px-2 py-1 rounded shadow">Log Out</button>
    </form>
  )
}