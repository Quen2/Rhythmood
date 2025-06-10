import { useEffect } from "react"

export default function CategoryInformation({category}) {

    useEffect(() => {
        console.log(category);
        
        if (category) {
            console.log(category.id);
            fetch(`/api/spotify/categoryById/playlistById/${category.id}`)
            .then(res => res.json())
            .then(categoryPlaylist => {
                console.log(categoryPlaylist);
            })
        }
    },[category])

    return (
        <div className="h-full flex justify-center items-center">
            <p>{category.name}</p>
        </div>
    )
}