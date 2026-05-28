
import { NextResponse } from "next/server";

export async function GET(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL}/products?size=36`);
    const data = await response.json();
    if(response?.ok){
        return NextResponse.json({
            success:true,
            data
        })
    }
    return NextResponse.json({error:"Failed to fetch product data."},{status:500})
}