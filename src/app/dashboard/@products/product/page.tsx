

"use client";
import ProductCardComponent from "@/app/components/products/ProductCardComponent";
import { ProductType } from "@/app/lib/product-type/product";
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
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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