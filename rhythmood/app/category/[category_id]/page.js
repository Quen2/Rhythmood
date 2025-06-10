"use client"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Category () {
    
    const params = useParams()
    const [category, setCategory] = useState(null)

    useEffect(() => {
        fetch(`/api/spotify/categoryById/${params.category_id}`)
        .then(res => res.json())
        .then(categoryData => {
            setCategory(categoryData)
        }) 
    },[])

    return (
        <div className="w-screen h-screen bg-[#181818] text-white">
            {
                category && 
                    <p>{category.name}</p>
            }
        </div>
    )
}