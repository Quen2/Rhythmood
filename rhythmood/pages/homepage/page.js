"use client"
import Link from "next/link"

export default function Homepage () {

    /////// TODO => remplacer la homepage par la categorylist
    /////// La homepage deviendra la page de recherche
    
    return (
        <div className="w-full h-full text-white">
            <p>Recherche</p>
            <Link 
                href={'/category_list'}
            >
                <p>Voir les catégories</p>
            </Link>
        </div>
    )
}