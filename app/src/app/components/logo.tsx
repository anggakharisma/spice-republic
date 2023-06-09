import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative h-24 w-48 my-12">
      <Image src="/images/logo.svg" alt="Spice Republic logo" fill={true} style={{
        objectFit: "contain"
      }} />
    </div>
  )
}
