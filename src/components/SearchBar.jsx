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
                className="border-2 border-amber-600 outline-0 rounded p-2 min-w-2xs bg-gray-400"
                />
            </div>
            <div>
                <input 
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={()=> {handleCheck()}}
                />
                <label htmlFor=""
                className="ml-1 text-amber-600"
                >Only Show Products In Stock
                </label>
            </div>
        </form>

        
  )
}

export default SearchBar