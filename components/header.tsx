import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import React, { useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <header className="backdrop-blur-sm bg-opacity-30 sm:h-20 py-5 w-full fixed top-0">
      <div className="max-w-5xl mx-auto px-6">
        <div className="w-full flex flex-row  justify-center  items-center">
          <div className="flex flex-row sm:flex-row items-center mb-4 sm:mb-0">
            {/* <img src="/react-bricks-logo.svg" className="w-48" alt="React Bricks" /> */}
            <div className="sm:ml-8 flex space-x-5 text-center ">
              <Link href="/">
                <a className="text-gray-500 hover:text-pink-700 sm:px-10">Home</a>
              </Link>
              <Link href="/Projects">
                <a className="text-gray-500 hover:text-pink-700 sm:px-10">Projects</a>
              </Link>
              <Link href="/Certify">
                <a className="text-gray-500 hover:text-pink-700 sm:px-10">Certification</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
// () => setTheme(theme === 'dark' ? 'light' : 'dark')