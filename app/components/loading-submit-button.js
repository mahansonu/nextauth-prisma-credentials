import { useFormStatus } from "react-dom";
export default function SubButton({ label = "Sign Up" }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="px-2 py-2 bg-black rounded text-white my-4"
      disabled={pending}
    >
      {pending ? "Please wait..." : label}
    </button>
  );
}
