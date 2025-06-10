"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import CategoryInformation from "@/components/categories/category.informations"

export default function CategoryList () {
    
    const [categories, setCategories] = useState()
    const [categoryId, setCategoryId] = useState(null)
    const [category, setCategory] = useState()

    /////// TODO => remplacer la homepage par la categorylist
    /////// La homepage deviendra la page de recherche

    useEffect(() => {
        fetch('/api/spotify')
        .then(res => res.json())
        .then(categoriesData => {
            setCategories(categoriesData.categories.items);
        })        
    },[])

    useEffect(() => {
        if(categoryId) {
            fetch(`/api/spotify/categoryById/${categoryId}`)
            .then(res => res.json())
            .then(categoryData => {
                setCategory(categoryData)
            }) 
        }
    },[categoryId])
    
    return (
        <div className="w-screen h-screen bg-[#181818]">
            <div className="w-full h-full text-white text-sm md:text-2xl overflow-auto">
                <p className="text-center fixed w-full mx-auto">Veuillez choisir une catégorie</p>
                <div className="h-1/5"></div>

                <div className="h-[47.77%]">
                {
                    category &&
                    <CategoryInformation category={category} />
                }
                </div>

                <div className="w-full h-1/3 fixed bottom-0">
                    <div className="flex items-center h-full overflow-y-auto justify-between gap-8 p-4">
                        {
                        categories && 
                        categories.map((category, key) => 
                        (
                            <div onClick={() => {setCategoryId(category.id)}} className="min-w-[80px] md:min-w-[300px] h-full" key={key}>
                                <div className="border flex justify-center items-end relative rounded-xl hover:scale-105 cursor-pointer h-full">
                                    <p className="text-center z-40">{category.name}</p>
                                    <img 
                                        src={category.icons[0].url}
                                        className="object-cover w-full h-full absolute top-0 left-0 rounded-xl"
                                        alt="category-cover"
                                    />
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}