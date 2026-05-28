


import { ProductType } from "@/app/lib/product-type/product"
import { Card } from "flowbite-react"
import React from "react"

export default function ProductCardComponent({
  thumbnail,
  name,
  priceOut,
  description,
}: ProductType) {
  return (
    <Card
      className="max-w-sm shadow-md hover:shadow-xl transition duration-300"
      imgAlt={name}
      imgSrc={thumbnail}
    >
      {/* Product Name */}
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>

      {/* Product Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
        {description}
      </p>

      {/* Rating */}
      <div className="mb-5 mt-2.5 flex items-center">

        {Array(5)
          .fill(null)
          .map((_, index) => (
            <svg
              key={index}
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}

        <span className="ml-3 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
          5.0
        </span>

      </div>

      {/* Price + Button */}
      <div className="flex items-center justify-between">

        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          ${priceOut}
        </span>

        <button className="rounded-lg bg-cyan-700 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-800 transition">
          Add to cart
        </button>

      </div>
    </Card>
  )
}