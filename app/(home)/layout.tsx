import Navbar from '@/components/Navbar'
import React from 'react'


interface Props {
    children: React.ReactNode
}
const HomeLayout = ({children}: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        {children}</div>
  )
}

export default HomeLayout