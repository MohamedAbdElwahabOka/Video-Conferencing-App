import React, { Children, ReactNode } from "react"

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      Naver
      {children}
    </main>
  )
}

export default RootLayout
