export default function CategoryInformation({category}) {
    return (
        <div className="h-full flex justify-center items-center">
            <p>{category.name}</p>
        </div>
    )
}