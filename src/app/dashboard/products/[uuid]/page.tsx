

import React, { use } from "react";
import { ProductType } from "@/app/lib/product-type/product";
import ProductDetailComponent from "@/app/components/products/ProductDetailComponent";
import { fetchDetail } from "../../@products/product/(..)products/[uuid]/page";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const data: ProductType = await fetchDetail(uuid);

  return <ProductDetailComponent data={data} />;
}