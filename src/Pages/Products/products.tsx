import React, { useRef, useState } from 'react'
import Container from '../../Components/Commons/Container/container'
import './products.scss'
import ProductsForm from './ProductsForm/productsForm'
import ProductsTable from './ProductsTable/productsTable'
export interface productsViewModel {
  Guid?: string;
  courseName?: string;
  courseLevel?: string;
  videoCount?: string;
  cost?: string;
  totalCourseTimes?: string;
  CourseTeacherName?: string;
  latestVersion?: string;
  courseIMG?: string;
  courseVideoIMG?: string;
  videoIMG?: string;
}

export default function Products() {

const [products, setProducts] = useState<productsViewModel[]>([]);

function getNewProducts(products:productsViewModel[]){
  setProducts(products)
}

  return (
    <section className='products'>
      <Container>
        <ProductsForm getNewProducts={getNewProducts} products={products} />
        <ProductsTable getNewProducts={getNewProducts} products={products} />
      </Container>
    </section >
  )
}
