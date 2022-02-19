import React from 'react'
import {BadgeCheckIcon,HomeIcon,SearchIcon,UserIcon,LightningBoltIcon,CollectionIcon} from '@heroicons/react/outline'
import HeaderItem from './HeaderItem'

function Header() {
return (
<div className='flex flex-col m-4 sm:flex-row justify-between items-center h-auto'>
    <div className='flex flex-grow  justify-evenly max-w-sm'>
        <HeaderItem title='Home' Icon={HomeIcon} />
        <HeaderItem title='Trending' Icon={LightningBoltIcon} />
        <HeaderItem title='Verfied' Icon={BadgeCheckIcon} />
        <HeaderItem title='Account' Icon={UserIcon} />
        <HeaderItem title='Collection' Icon={CollectionIcon} />
        <HeaderItem title='Search' Icon={SearchIcon} />

    </div>
    <img className='object-contain' src="https://links.papareact.com/ua6" width={200} height={100} alt="hulu" />
</div>
)
}

export default Header