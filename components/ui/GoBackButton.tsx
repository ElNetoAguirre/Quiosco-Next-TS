"use client"
import { useRouter } from "next/navigation"

export default function GoBackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="bg-amber-400 hover:bg-amber-500 transition-colors text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto rounded-lg"
    >
      Volver
    </button>
  )
}
