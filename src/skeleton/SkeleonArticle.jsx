import React from 'react'
import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer'

const SkeleonArticle = ({theme}) => {
    const themeclass = theme || 'light'
  return (
    <div className={`skeleton-wrapper ${themeclass}`}>
        <div className='skeleton-article'>
            <SkeletonElement type='title'/>
            <SkeletonElement type='text'/>
            <SkeletonElement type='text'/>
            <SkeletonElement type='text'/>
        </div>
        <Shimmer/>
    </div>
  )
}

export default SkeleonArticle