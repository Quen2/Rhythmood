import { NextResponse } from "next/server"
import SpotifyTokken from "@/app/lib/spotify";

export async function GET () {

    const token = await SpotifyTokken()
    
    const categories = await fetch('https://api.spotify.com/v1/browse/categories?locale=fr_FR', {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    
    const categoriesJson = await categories.json()
    return NextResponse.json(categoriesJson);
}