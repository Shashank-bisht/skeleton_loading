import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const Userskeletom = () => {
  return (
    <div><SkeletonTheme baseColor="#aaadab" highlightColor="#444">
    <div style={{ backgroundColor: '#dbcfce', borderRadius: '10px', padding: '10px', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ margin: 'auto' }}>
        <Skeleton count={1} height='50px' width='50px' borderRadius='50%' />
      </div>
      <Skeleton width='40%'  count={1} style={{ margin:'auto' }} />
      <Skeleton height='13px' width='100%' count={2} style={{ marginBottom: '10px' }} />
    </div>
  </SkeletonTheme>
  </div>
  )
}

export default Userskeletom