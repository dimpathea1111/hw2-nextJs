

"use client";
import React from "react";

export default async function BlogSlugCatchAllRoute(
  {
    params,
  }: {
    params: Promise<{ slugs: string[] }>
  }
) {

  const { slugs } = await params;

  return (
    <h1>
      My blog catch all : {slugs.join(" / ")}
    </h1>
  );
}