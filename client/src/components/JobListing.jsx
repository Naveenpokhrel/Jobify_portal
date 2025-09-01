import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const JobListing = () => {

    const {isSearched, searchFilter} = useContext(AppContext)
  return (
    <div>
{/* Sidebar */}
<div>
{/* Search Filter from Hero Component */}
{
    isSearched && ( searchFilter.title !== "" || searchFilter.location !==)
}
    </div>
  )
}

export default JobListing