import DeleteProductForm from "@/components/products/DeleteProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id
    }
  })
  if(!product) {
    notFound()
  }
  return product
}

export default async function deleteProductPage({params}: {params: Promise<{id: string}>}) {
  const product = await getProductById(+(await params).id)

  console.log(product)

  return (
    <>
      <Heading>Eliminar Producto: {product.name}</Heading>

      <GoBackButton/>

      <DeleteProductForm>
        <ProductForm
          product={product}
        />
      </DeleteProductForm>
    </>
  )
}
