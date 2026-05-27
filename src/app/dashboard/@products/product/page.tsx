

import Link from 'next/link'
import React from 'react'

export default function ProductPageRoute() {
  return (
    <div>ProductPageRoute
        <div>
            
            <Link href={'/dashboard/products'}>
            Products
            </Link>
        </div>
    </div>
  )
}
