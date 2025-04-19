import { Category } from '@/payload-types'
import React from 'react'
import CategoryDropDown from './CategoryDropDown'
import { Customcategory } from '../types'

interface Props {
    data: Customcategory[]
}

const CategoriesComponent = ({data}: Props) => {
  return (
    <div className='relative w-full'>
      <div className='flex flex-nowrap items-center'>
      {
      data.map((category: Customcategory) =>(
        <div
          key={category.id}
        
        >
          <CategoryDropDown 
            isActive={false}
            category={category}
            isNavigationHovered={false}
          />
        </div>
      ))
      }
      </div>
    </div>
  )
}

export default CategoriesComponent