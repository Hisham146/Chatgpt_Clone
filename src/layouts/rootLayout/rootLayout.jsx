import React from 'react'
import './rootlayout.css'
import { Outlet, Link } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, UserButton } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const rootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <div className='rootLayout'>
        <header>
            <Link to="/" className='logo'>
            <img src='/logo.png' alt="logo" />
            <span>HISH AI</span>
            </Link>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
        <main>
           <Outlet/>
        </main>
    </div>
    </ClerkProvider>
  )
}

export default rootLayout