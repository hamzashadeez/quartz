import Link from 'next/link'
import React from 'react'
import Logo from './logo'

function LandingPage() {
  return (
    <div className='m-0'>
        {/* Navbar */}
        <div className='flex items-center justify-between px-4 py-1'>
            <Logo />
            <ul className='flex space-x-4 text-sm mx-3 hidden text-orange-500'>
                <li><Link href='#'>Home</Link></li>
                <li><Link href='#'>Courses</Link></li>
                <li><Link href='#'>About</Link></li>
                <li><Link href='#'>Contact</Link></li>
                <li><Link href='#'>Price</Link></li>
                <li><Link href='#'>Reviews</Link></li>
            </ul>
        </div>
        {/* Hero */}
        <div className='h-screen bg-orange-50 flex items-center justify-center'>
            <div>
                <h3 className='text-3xl text-orange-600 font-bold'>Build your skill to advance your career path</h3>
            </div>
        </div>

        {/* Courses */}

        {/* About */}

        {/* Reviews */}

        {/* Pricing */}

        {/* Contact */}

        {/* Footer */}

    </div>
  )
}

export default LandingPage