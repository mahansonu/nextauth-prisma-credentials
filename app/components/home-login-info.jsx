import Link from "next/link"
import Singout from "./singout";
export default function HomeLoginInfo({session, status}) {
  const user = session?.user;
  return (
    <div className="flex max-w-2xl w-full m-auto items-center">
      {status == "authenticated" ? <UserInfo session={user} /> : <ShowLogin />}
    </div>
  )
}

function UserInfo({session}) {
  return (
    <div>
      <span className="font-bold text-lg">You are logged in as:</span>
      <div className="flex flex-col gap-2 items-center">
        <span>Username: {session.username}</span>
        <span>Email: {session.email}</span>
        <Singout />
      </div>
    </div>
  )
}

function ShowLogin() {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-bold text-lg">You are not logged in, please click on below button</span>
      <Link href="/api/auth/signin" className="bg-blue-500 px-2 py-1 rounded shadow text-white text-center self-center">Please LogIn</Link>
    </div>
    
  )
}