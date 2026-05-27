import { error } from "console";
import { NextResponse } from "next/server";


export async function GET(){
    //logic of fetching data
    const response=await fetch(process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL+'/product');

    const data=await response.json();
    return NextResponse.json(data);
    if(response?.ok){
        return NextResponse.json({
 Success:true,
        data
        });
       
    }



    return  NextResponse.json({
        error:'sorry u cannot fetch product data'
    }, {status:500});
}