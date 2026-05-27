

// import React from 'react'
// import Link from 'next/link'

// export default function ProductDashboardRoute() {
//   return (
//     // <div>Welcome to Product page</div>
//     <div className='flex gap-5 text-black'>
//       {/* navbar for create and edit  */}
//       <Link href="/dashboard/create">
//         Create Product
//       </Link>
//       <Link href="/dashboard/edit">
//         Edit Product
//       </Link>
//     </div>
//   )
// }


import React from 'react'
import Link from 'next/link'

export default function ProductDashboardRoute() {
  return (
    <div className='flex gap-5 p-4'>

      <Link
        href="/dashboard/create"
        className='bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition'
      >
        Create
      </Link>

      <Link
        href="/dashboard/edit"
        className='bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition'
      >
        Edit
      </Link>

    </div>
  )
}