import { ProductTableByCategorie } from "./ProductTableByCategorie"
type ProductTableProps = {
    categories: Array<string>,
    products: Array<{
        category?: string,
        price?: string,
        stocked?: boolean,
        name?: string
    }>
}

export function ProductTable(props: ProductTableProps) {
    const filterProductsByCategory = function (products: Array<{
        category?: string,
        price?: string,
        stocked?: boolean,
        name?: string
    }>, categorie: string) {
        const filteredList = products.filter((product) => (product?.category ?? '') == categorie);
        return filteredList;
    };

    return (
        <>
            {props.categories.map((curCategorie, index) => (
                <ProductTableByCategorie products={filterProductsByCategory(props.products, curCategorie)} key={index} category={curCategorie} />
            ))}
        </>
    )
}