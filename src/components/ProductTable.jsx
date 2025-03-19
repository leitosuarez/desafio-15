import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

const ProductTable = ({products, inStockOnly, filterText}) => {

    /* const rows = []
    let lastCategory = null

    products.forEach((prod)=> {
        
        if(prod.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                category={prod.category}
                key={prod.category}
                />
            )

        }

        rows.push(
            <ProductRow
                product={prod}
                key={prod.name}
            />
        )

        lastCategory = prod.category
    }) 
    console.log(rows) */
    
    if(filterText === ''){
        console.log('todavia no se escurbinio nada')
    } else{
        console.log(filterText)
    }

    
    const arrayFilterProducts = []
    console.log(arrayFilterProducts)

    //const productosFiltrados2 = products.filter(prod=> (prod.name.includes(filterText)))
    //console.log(productosFiltrados2)
    
    products.forEach(prod => {
        //debugger
        // Filtrar los elementos por nombre y stock
        if(prod.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return
        }

        if(inStockOnly === true && prod.stocked === false) {
            return
        }
        // Buscar si la categoría ya existe en el arrayFilterProducts
        const existingCategory = arrayFilterProducts.find(cat => cat.category === prod.category)
         // Si la categoría no existe, agregar una nueva entrada
         if(!existingCategory) {
            arrayFilterProducts.push({
                category: prod.category,
                products: [prod]
            })
            // Si la categoría ya existe, agregar el producto a la lista de productos
         } else {
            existingCategory.products.push(prod)
         }
    });
    
    

    let cantProductos = 0
    
    arrayFilterProducts.forEach(prod => {
        prod.products.forEach(producto => {
            cantProductos += 1
        })
    })

  return (
    <>
    <div className="px-3.5 ">
            {
                filterText !== '' ? <p>Se encontraron {cantProductos} productos</p> :
                <template></template>
            }
    </div>

    <table className="border border-collapse rounded mx-2.5 min-w-2xs bg-gray-400">
        <thead>
            <tr>
                <th className="px-4 py-2 text-left text-2xl">Name</th>
                <th className="px-4 py-2 text-2xl">Price</th>
            </tr>
        </thead>
        <tbody className="">
           {/*  {
                arrayFilterProducts.map(element => (
                    <>
                        <ProductCategoryRow category={element.category} key={element.category}/>
                        {
                            // Al ser products un array, debo iterar de nuevo para interactuar con todos los productos
                            element.products.map(prod => (
                                <ProductRow product={prod} key={prod.name}/>
                            ))
                        }
                    </>
                ))
            } */}
            {
                filterText !== '' ? arrayFilterProducts.map(element=> (
                    <>
                    <ProductCategoryRow 
                    category={element.category} 
                    key={element.category}
                    />
                    {
                        element.products.map(producto=>(
                            <ProductRow
                            product={producto}
                            key={producto.name}
                            />
                        ))
                    }

                    </>
                )) : <div></div>
            }
            {/* {rows} */}
        </tbody>
    </table>
    </>
  )
}

export default ProductTable