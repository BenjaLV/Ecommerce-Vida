import React from 'react'
import { notFound } from 'next/navigation';


interface Props {
  params: {
    id: string;
  }
}

function CategoryPage({ params }: Props) {

  const { id } = params

  if( id === 'about'){
    notFound()
  }
  return (
    <div>Category page { id }</div>
  )
}

export default CategoryPage;