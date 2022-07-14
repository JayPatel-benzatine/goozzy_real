import React, { Suspense } from 'react'
import Navbottom from './Navbottom'
import Navtop from './Navtop'

const MainNav = () => {

  return (
    <>
      <Navtop />
      <Suspense fallback={<div>Loading...</div>}>
        <Navbottom />
      </Suspense>

    </>
  )
}

export default MainNav