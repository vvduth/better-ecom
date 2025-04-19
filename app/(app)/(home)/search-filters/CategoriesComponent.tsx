import { Category } from '@/payload-types'
import React from 'react'
import CategoryDropDown from './CategoryDropDown'

interface Props {
    data: any
}

const CategoriesComponent = ({data}: Props) => {
  return (
    <div>{
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
      }</div>
  )
}

export default CategoriesComponent