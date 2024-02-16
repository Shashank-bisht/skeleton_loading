import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SkeletonElement from '../skeleton/SkeletonElement'
const Articles = () => {
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setArticles(data)
        },5000)
    })
  return (
    <div className='articles'>
         <h2>Articles</h2>
         <SkeletonElement type='title'/>
         {articles && (
             articles.map((article) => (
                <div className='article' key={article.id}>
                     <h3>{article.title}</h3>
                     <p>{article.body}</p>
                 </div>
             ))
         )}

         {!articles && <p>Loading...</p>}
    </div>
  )
}

export default Articles