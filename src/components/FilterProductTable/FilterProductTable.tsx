import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";
type ProductType = {
    category?: string,
    price?: string,
    stocked?: boolean,
    name?: string
}
type ProductArrayType = Array<ProductType>

type FilterProductTableProps = {
    products: ProductArrayType
}
export function FilterProductTable(props: FilterProductTableProps) {
    const [filterText, setFilterText] = useState<string>();
    const [stock, setStock] = useState<boolean>();
    const [products] = useState<ProductArrayType>(props.products);
    const [filteredProducts, setFilteredProducts] = useState<ProductArrayType>(props.products);



    useEffect(() => {
        let curFilteredProducts = products;
        if (filterText != '' && filterText !== undefined) {
            curFilteredProducts = curFilteredProducts.filter(function (product) {
                return (product.name ?? '') == filterText
            })
        }
        if (stock !== undefined && stock == true) {
            curFilteredProducts = curFilteredProducts.filter(function (product) {
                return (product.stocked ?? false) == stock
            });
        }
        setFilteredProducts(curFilteredProducts);
    }, [stock, filterText]);

    return <><SearchBar
        onFilterTextChange={function (filterText) {
            setFilterText(filterText)
        }}
        onInStockOnlyChange={function (stock) {
            setStock(stock);
        }}
    />
        <ProductTable categories={products.reduce((accumulator: Array<string>, index: ProductType) => {
            if (index.category !== undefined && !accumulator.includes(index?.category)) {
                return [...accumulator, index.category];
            } else {
                return [...accumulator];
            }
        }, [])}
            products={filteredProducts}
        />
    </>
}