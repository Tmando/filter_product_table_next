type ProductItemRowProps = {
    stocked?:boolean,
    name?:string,
    price?:string,
}
export function ProductItemRow(props:ProductItemRowProps){
    return <><tr>
        <td>{props?.name}</td>
        <td>{props?.price}</td>
        <td>{props.stocked?.toString()}</td>
        </tr></>
}