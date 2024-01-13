import Image from "next/image"

export default function Home() {
  return (
    <div className="wrapper">
      <div className="background" />
      <main className="text-white fixed bottom-0 right-0 left-0 top-0 z-10 overflow-hidden">
        <div className="flex h-5/6 justify-center items-end">
          <h1
            id="logo-landing"
            className="text-2xl font-light"
          >
            héctor romero
          </h1>
        </div>
      </main>
      <div className="blur" />
    </div>
  )
}
