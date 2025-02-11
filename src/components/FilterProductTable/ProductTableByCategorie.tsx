import { ProductItemRow } from "./ProductItemRow"

type ProductTableByCategorieProps = {
    category:string
    products:Array<{
        price?:string,
        stocked?:boolean,
        name?:string
    }>
}
export function ProductTableByCategorie(props:ProductTableByCategorieProps){
    return <>
    {props.products.length > 0 &&
        <>
        <h1>{props.category}</h1>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stocked</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((curProduct, index) => (
                    <ProductItemRow stocked={curProduct.stocked} name={curProduct.name} price={curProduct.price} key={index}/>
                ))}
            </tbody>
        </table>
        </>
    }
    </>
}