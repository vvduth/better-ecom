import React from 'react'
import SearchInput from './SearchInput'


interface Props {
    data: any
}
const SearchFilters = ({data}: Props) => {
  return (
    <div className='px-4 lg:px-12 py-8 border-b 
    flex flex-col gap-4 w-full'>
        <SearchInput />
        {
        JSON.stringify(data, null, 2)
    }</div>
  )
}

export default SearchFilters