import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Search = (props: Props) => {
    // WIP: Improve search in this project.
  return (
    <div className='hidden lg:flex overflow-hidden gap-x-2 border-[1px] border-[#3352CC] rounded-full px-4 py-1 items-center flex-1'>
        <SearchIcon color='#3352CC' />
        <Input
            placeholder='Search by name, email or status'
            className='border-none outline-none ring-0 focus:ring-0 flex-1 focus-visible:ring-0 focus-visible:ring-offset-0' 
        />
    </div>
  )
}

export default Search