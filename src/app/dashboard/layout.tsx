

import React from 'react'
import { AsideComponentDashboard } from '../components/dashboard/AsideComponentDashboard'

export default function DashboardLayout(
    {
        children,
        products, 
        blogs, 
        setting
    }:{
        children:React.ReactNode,
        products:React.ReactNode,
        blogs:React.ReactNode,
        setting:React.ReactNode,
    }
) {
  return (
    // <div>
    //     {children}
    //     {products}
    //     {blogs}
    //     {setting}

    // </div>
    <section className='grid gride-cols-4 gap-5 '>
      <AsideComponentDashboard/>
      <section className='grid col-span-3'>
        <div className='bg-red-200 p-8'>{children}</div>
        <div className='bg-green-200 p-8'>{products}</div>
        <div className='bg-blue-200 p-8'>{blogs}</div>
        <div className='bg-yellow-200 p-8'>{setting}</div>
      </section>

    </section>
    
  )
}


// import React from 'react'

// export default function DashboardLayout(
//   {
//     children,
//     products,
//     blogs,
//     setting
//   }: {
//     children: React.ReactNode,
//     products: React.ReactNode,
//     blogs: React.ReactNode,
//     setting: React.ReactNode,
//   }
// ) {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">

//       {/* Main Content */}
//       <div className="mb-6">
//         {children}
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

//         {/* Products */}
//         <div className="bg-white rounded-2xl shadow-md p-4">
//           {products}
//         </div>

//         {/* Blogs */}
//         <div className="bg-white text-black text-2xl rounded-2xl shadow-md p-4">
//           {blogs}
//         </div>

//         {/* Settings */}
//         <div className="bg-white rounded-2xl shadow-md p-4">
//           {setting}
//         </div>

//       </div>

//     </div>
//   )
// }