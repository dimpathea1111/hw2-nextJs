

// import { ProductCardComponent } from '@/app/components/products/ProductCardComponent';
// import Link from 'next/link'
// import React, { Suspense } from 'react'

// async function getProducts(){
//   try{
//     const res=await fetch('http://localhost:3000/api/products',{
//       cache:'no-store'
//     });
//     const products=await res?.json();
//     console.log(`=====> Product Data: ${products?.conten}`)
//     return products;
    
//   }catch(err){
//     throw new Error('Fail to fetch data form api')
//   }
// }

// // loading suspense  
// function LoadingSuspenseComponent(){
//   return (
//     <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
//   <span className="sr-only">Loading...</span>
//   <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
//   <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
//   <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
// </div>

//   )
// }


// export default function ProductPageRoute(){
//   return(
//     <div className="flex gap-5">
//         <Link href={"/dashboard/create"} className='text-black'>Create Product</Link>
//       <Link href={"/dashboard/edit"} className='text-black'>Edit Product</Link>
      
//       {/* adding suspend  */}
//       <Suspense fallback={<LoadingSuspenseComponent/>}>
//         <ProductRenderingProcess/>

//       </Suspense>
//     </div>
//   )

// }

// // export default function ProductPageRoute() {
// function ProductRenderingProcess() {

//   const {data:products}=getProducts();


//   return (
//     // <div>ProductPageRoute
//     //     <div>
            
//     //         <Link href={'/dashboard/products'}>
//     //         Products
//     //         </Link>
//     //     </div>
//     // </div>

//       // <div>ProductPage</div>
//       <div className="flex gap-5">
//       {/* <Link href={"/dashboard/create"} className='text-black'>Create Product</Link>
//       <Link href={"/dashboard/edit"} className='text-black'>Edit Product</Link>
//       display priduct here  */}

//       <div className="flex gap-5 ">
//         products?.content?.data?.map({uuid,thumbnails, priceOut, name}:ProductType =>(
//           <ProductCardComponent
//           uuid:{uuid},
//           key={uuid}
//           thumbnail={""}
//           priceOut={0}
//           name={""}
//           />
//         ))
//       </div>
//     </div>
//   )
// }


import { ProductCardComponent } from '@/app/components/products/ProductCardComponent'
import Link from 'next/link'
import React, { Suspense } from 'react'

type ProductType = {
  uuid: string
  thumbnail: string
  priceOut: number
  name: string
}

// Fetch Products
async function getProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL}/products`,
      {
        cache: 'no-store',
      }
    )

    const products = await res.json()

    console.log('=====> Product Data:', products)

    return products
  } catch (err) {
    throw new Error('Fail to fetch data from api')
  }
}

// Loading Component
function LoadingSuspenseComponent() {
  return (
    <div className="flex space-x-2 justify-center items-center h-screen">
      <span className="sr-only">Loading...</span>

      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
    </div>
  )
}

// Main Page
export default function ProductPageRoute() {
  return (
    <div className="p-5">

      {/* Navigation */}
      <div className="flex gap-5 mb-5">
        <Link
          href="/dashboard/create"
          className="text-black font-semibold"
        >
          Create Product
        </Link>

        <Link
          href="/dashboard/edit"
          className="text-black font-semibold"
        >
          Edit Product
        </Link>
      </div>

      {/* Suspense */}
      <Suspense fallback={<LoadingSuspenseComponent />}>
        <ProductRenderingProcess />
      </Suspense>

    </div>
  )
}

// Product Rendering
async function ProductRenderingProcess() {

  const products = await getProducts()

  return (
    <div className="grid grid-cols-4 gap-5">

      {products?.content?.map(
        ({ uuid, thumbnail, priceOut, name }: ProductType) => (
          <ProductCardComponent
            key={uuid}
            uuid={uuid}
            thumbnail={thumbnail}
            priceOut={priceOut}
            name={name}
          />
        )
      )}

    </div>
  )
}