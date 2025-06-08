"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Homepage () {
    
    const [categories, setCategories] = useState()

    useEffect(() => {
        fetch('/api/spotify')
        .then(res => res.json())
        .then(categoriesData => {
            setCategories(categoriesData.categories.items);
        })        
    },[])
    
    return (
        <div className="w-full h-full text-white text-sm md:text-2xl overflow-auto">
            <p className="text-center fixed w-full mx-auto">Veuillez choisir une catégorie</p>
            <div className="h-full flex flex-wrap md:grid md:grid-cols-5 gap-8 items-center w-full p-8 justify-center">
                {
                    categories && 
                    categories.map((category, key) => 
                    (
                        <div key={key} className="border w-[40%] h-1/5 md:h-full md:w-full flex justify-center items-end relative rounded-xl hover:scale-105 cursor-pointer">
                            <p className="text-center z-40">{category.name}</p>
                            <img 
                                src={category.icons[0].url}
                                className="object-cover w-full h-full absolute top-0 left-0 rounded-xl"
                                alt="category-cover"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}