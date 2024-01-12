"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MainNavigation() {
  const pathname = usePathname()
  console.log(pathname)
  const [openMenu, setOpenMenu] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(false)
  return (
    <>
      <nav
        className={`p-8 flex justify-between items-center ${
          pathname === "/" ? "text-white" : "text-neutral-600"
        }`}
      >
        <h1 className={`text-lg text-neutral-600`}>
          <span className={pathname === "/" ? "hidden" : "inline-block"}>
            héctor romero
          </span>
        </h1>
        <div className="lg:hidden z-10">
          <button
            className="navbar-burger pt-3"
            onClick={() => {
              setOpenMenu(true)
              setOpenSubMenu(false)
            }}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {openMenu && (
          <div className={`navbar-menu relative z-50`}>
            <motion.nav
              variants={{
                hidden: { opacity: 0, x: -200 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
              className="text-white font-light fixed left-0 top-0 bottom-0 right-0 flex flex-col p-4 pt-6 bg-gray-500 border-r overflow-y-auto bg-opacity-40 backdrop-blur"
            >
              <div className="flex items-start justify-end">
                <button
                  className="navbar-close"
                  onClick={() => setOpenMenu(false)}
                >
                  <svg
                    className="h-6 w-6 text-white cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="h-full flex items-center justify-center">
                <ul className="flex flex-col gap-6 items-center mt-[-3rem]">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setOpenMenu(false)}
                    >
                      INICIO
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <button
                      className="flex items-center"
                      onClick={() => setOpenSubMenu(!openSubMenu)}
                    >
                      <span>OBRAS</span>
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                  </li>
                  <AnimatePresence>
                    {openSubMenu && (
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: -10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="mt-[-1rem] flex items-center flex-col gap-1 text-neutral-950"
                      >
                        <li>
                          <Link
                            href="/obra/bloques"
                            onClick={() => setOpenMenu(false)}
                          >
                            serie bloques
                          </Link>
                        </li>
                        <li>
                          <a>serie iluminados</a>
                        </li>
                        <li>
                          <a>serie wire</a>
                        </li>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <li>
                    <a
                      href="#tecnologias"
                      onClick={() => setOpenMenu(false)}
                    >
                      EXPOSICIONES
                    </a>
                  </li>
                  <li>
                    <a
                      href="#proyectos"
                      onClick={() => setOpenMenu(false)}
                    >
                      SOBRE MÍ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experiencia"
                      onClick={() => setOpenMenu(false)}
                    >
                      CONTACTO
                    </a>
                  </li>
                </ul>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
