import React from 'react'
import SearchInput from './SearchInput'
import CategoriesComponent from './CategoriesComponent'


interface Props {
    data: any
}
const SearchFilters = ({data}: Props) => {
  return (
    <div className='px-4 lg:px-12 py-8 border-b 
    flex flex-col gap-4 w-full'>
        <SearchInput />
        <CategoriesComponent data={data} />
        </div>
  )
}

export default SearchFilters