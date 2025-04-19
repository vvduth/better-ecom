import { Category } from '@/payload-types'
import React from 'react'
import CategoryDropDown from './CategoryDropDown'

interface Props {
    data: any
}

const CategoriesComponent = ({data}: Props) => {
  return (
    <div className='relative w-full'>
      <div className='flex flex-nowrap items-center'>
      {
      data.map((category: Category) =>(
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