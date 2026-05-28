

import React from 'react'
import Link from 'next/link'

export default function ProductPage() {
  return (
    // <div>ProductPage</div>
    //   <div className="flex gap-5">
    //   <Link href={"/dashboard/create"}>Create Product</Link>
    //   <Link href={"/dashboard/edit"}>Edit Product</Link>
    // </div>
    
      // <div>ProductPageRoute
      //       <div>
                
      //           <Link href={'/dashboard/products'}>
      //           Products
      //           </Link>
      //       </div>
      //   </div>

       <div className="flex gap-5">
      <Link href={"/dashboard/create"}>Create Product</Link>
      <Link href={"/dashboard/edit"}>Edit Product</Link>
    </div>
  )
}
