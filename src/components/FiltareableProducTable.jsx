import { useState } from "react"
import PRODUCTOS from "../constants/productos"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

const FiltareableProducTable = () => {
  //Creo los estados en el componente padre de los componente que lo usan para pasarlo por props.
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div className="bg-amber-50 my-30 mx-auto w-3xl border-2 rounded-2xl border-amber-600 p-2.5 pb-6 font-family">
        <SearchBar
          filterText= {filterText}
          inStockOnly={inStockOnly}
          setFilterText={setFilterText}
          setInStockOnly={setInStockOnly}
        />
        <ProductTable 
          filterText= {filterText}
          inStockOnly={inStockOnly}
          products={PRODUCTOS}/>
    </div>
  )
}

export default FiltareableProducTable