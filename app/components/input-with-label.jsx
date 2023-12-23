import Input from "./input"
export default function InputWithLabel({label}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">{label}</label>
      <Input />
    </div>
  )
}