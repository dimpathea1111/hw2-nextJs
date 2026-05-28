

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

// import ProductCardComponent from '@/app/components/products/ProductCardComponent'
// import Link from 'next/link'
// import React, { Suspense } from 'react'

// type ProductType = {
//   uuid: string
//   thumbnail: string
//   priceOut: number
//   name: string
//   description: string
// }

// // Fetch Products
// async function getProducts() {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL}/products`,
//       {
//         cache: 'no-store',
//       }
//     )

//     // Check response
//     if (!res.ok) {
//       throw new Error('Failed to fetch products')
//     }

//     const products = await res.json()

//     console.log('=====> Product Data:', products)

//     return products
//   } catch (err) {
//     console.log(err)

//     throw new Error('Fail to fetch data from api')
//   }
// }

// // Loading Component
// function LoadingSuspenseComponent() {
//   return (
//     <div className="flex space-x-2 justify-center items-center h-screen">
//       <span className="sr-only">Loading...</span>

//       <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />

//       <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />

//       <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
//     </div>
//   )
// }

// // Main Page
// export default function ProductPageRoute() {
//   return (
//     <div className="p-5">

//       {/* Navigation */}
//       <div className="flex gap-5 mb-5">

//         <Link
//           href="/dashboard/create"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//         >
//           Create Product
//         </Link>

//         <Link
//           href="/dashboard/edit"
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//         >
//           Edit Product
//         </Link>

//       </div>

//       {/* Suspense */}
//       <Suspense fallback={<LoadingSuspenseComponent />}>
//         <ProductRenderingProcess />
//       </Suspense>

//     </div>
//   )
// }

// // Product Rendering
// async function ProductRenderingProcess() {

//   const products = await getProducts()

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

//       {products?.content?.map(
//         ({
//           uuid,
//           thumbnail,
//           priceOut,
//           name,
//           description,
//         }: ProductType) => (
//           <ProductCardComponent
//             key={uuid}
//             uuid={uuid}
//             thumbnail={thumbnail}
//             priceOut={priceOut}
//             name={name}
//             description={description}
//           />
//         )
//       )}

//     </div>
//   )
// }



"use client";
import ProductCardComponent from "@/app/components/products/ProductCardComponent";
import { ProductType } from "@/app/lib/product-type/product";
// import ProductCardComponent from "@/components/products/ProductCardComponent";
// import { ProductTy/pe } from "@/lib/product-v2/product";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, use } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductPageRoute() {
  return (
    <div className="flex flex-col gap-5">
      <Link href={"/dashboard/create"}>Create Product</Link>
      <Link href={"/dashboard/edit"}>Edit Product</Link>
      <Suspense fallback={<LoadingSuspenseComponent />}>
        <ProductRenderingProcess />
      </Suspense>
    </div>
  );
}
//loading suspense component
export function LoadingSuspenseComponent() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"></div>
      <Image
        width={500}
        height={500}
        alt="suspense loading"
        src="https://dev-portal.motforex.com/_next/image?url=https://cdn.motforex.com/motforex/logo/logo.webp&w=48&q=75"
        className="rounded-full h-20 w-20"
      ></Image>
    </div>
  );
}

function ProductRenderingProcess() {
  // const data = use(getProducts());
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("http://localhost:3000/api/product", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 1000,
  });
  console.log("THIS IS DATA", products);
  return (
    <div>
      <h1>All Product</h1>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {products?.data?.content?.map(
            ({ thumbnail, name, priceOut, description, uuid }: ProductType) => (
              <Link key={uuid} href={`/dashboard/products/${uuid}`}>
                {/* <ProductCardComponent */}
                <ProductCardComponent
                  description={description}
                  uuid={uuid}
                  thumbnail={thumbnail}
                  name={name}
                  priceOut={priceOut}
                />
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}