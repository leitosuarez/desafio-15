import { useState } from "react"

const SearchBar = ({setInStockOnly ,inStockOnly,filterText, setFilterText}) => {

    const handleChange = (input)=> {
        setFilterText(input)
        console.log(input)
    }

    const handleCheck = () => {
        (!inStockOnly) ? setInStockOnly(true) : setInStockOnly(false)
        console.log(inStockOnly)
    }

    console.log(inStockOnly)
  return (
        
        <form action="" 
        className="p-3">
            <div>
                <input type="text"
                name="search" 
                placeholder="Buscar"
                value={filterText}
                onChange={(e)=> handleChange(e.target.value)}
                className="border rounded p-1.5 min-w-2xs"
                />
            </div>
            <div>
                <input 
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={()=> {handleCheck()}}
                />
                <label htmlFor=""
                className="ml-1"
                >Only Show Products In Stock
                </label>
            </div>
        </form>

        
  )
}

export default SearchBar