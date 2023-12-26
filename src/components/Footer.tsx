import React from 'react'

function Footer() {
  return (
    <footer className=" bg-black/80 border-t border-gray-700">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between max-md:flex-col max-md:gap-4">
       
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Gallery</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Services</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>

  )
}

export default Footer