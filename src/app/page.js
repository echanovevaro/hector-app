import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="background" />
      <main className="text-white w-screen h-screen">
        <div className="mt-8 flex h-4/6 justify-center items-end">
          <h1
            id="logo-landing"
            className="text-2xl font-light"
          >
            héctor romero
          </h1>
        </div>
      </main>
      <div className="blur" />
    </>
  )
}
