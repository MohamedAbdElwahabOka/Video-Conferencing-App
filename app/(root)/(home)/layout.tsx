import React, { Children, ReactNode } from "react"

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      Naver
      <div className="flex">
        sidebar
        <section className="main-h-screen flex flex-1 flex-col px-6 pt-28 pb-6 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  )
}

export default HomeLayout
