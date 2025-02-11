type SearchBarProps = {
    onFilterTextChange:(filterText: string) => void,
    onInStockOnlyChange:(stock:boolean) => void
}
export function SearchBar(props:SearchBarProps){
    return <>
    <div className="form-group">
        <label htmlFor="serach_field">Search Field:</label>
        <input id="serach_field" className="form-control" type="text" onChange={(e) => props.onFilterTextChange(e.target.value)} />
    </div>

    <div className="form-group">
        <div className="checkbox">
            <label><input type="checkbox" id="stock" name="stock" onChange={(e) => props.onInStockOnlyChange(e.target.checked)} /> Only Show Products in Stock</label>
        </div>
    </div>
    </>
}