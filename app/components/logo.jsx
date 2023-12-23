import Image from "next/image"
export default function Logo({height = 40, width = 40}) {
  return <Image src="/logo.svg" width={width} height={height} />
}