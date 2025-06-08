import { NextResponse } from "next/server"
import SpotifyTokken from "@/app/lib/spotify";

export async function GET (req, context) {

    const token = await SpotifyTokken()
    const params = context.params
    
    
    const categories = await fetch(`https://api.spotify.com/v1/browse/categories/${params.category_id}?locale=fr_FR`, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    
    const categoriesJson = await categories.json()
    return NextResponse.json(categoriesJson);
}