import { NextResponse } from "next/server"
import SpotifyTokken from "@/app/lib/spotify";

export async function GET (req, context) {

    const token = await SpotifyTokken()
    const params = await context.params
    const categoryId = params.category_id

    const categories = await fetch(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    
    const categoriesJson = await categories.json()
    console.log(categoriesJson);
    
    return NextResponse.json(categoriesJson);
    
}