import React from 'react'
import { notFound } from 'next/navigation';
import { initialData } from '@/seed/seed';
import Title from '@/components/ui/title/Title';
import ProductGrid from '@/components/products/product-grid/ProductGrid';


const seedProducts = initialData.products;


interface Props {
  params: {
    id: string;
  }
}

function CategoryPage({ params }: Props) {

  const { id } = params
  const products = seedProducts.filter(product => product.gender === id);

  const labels = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',

  }

  // if( id === 'about'){
  //   notFound()
  // }

  return (
    <>
      <Title title={`Articulos de ${(labels as any)[id]}`} subtitle='Todos los productos' className='mb-2' />
      <ProductGrid products={products} />
    </>
  )
}

export default CategoryPage;