

export default async function BlogSlug(
    {
        params
    }:{
        params:Promise<{slug:string}>
    }
){

    const {slug}=await params;
    return(
        <div>
            <h2>My blog Slug: {slug}</h2>
        </div>
    )
}