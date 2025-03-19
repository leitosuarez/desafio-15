
const ProductRow = ({product}) => {

  return (
    
    <tr className="">
      {
        product.stocked ? <td className="px-4 py-1 font-bold">{product.name}</td> : <td className="text-red-500 px-4 py-2 font-bold">{
          product.name
        }</td>
      }
      <td className="px-4 py-1 font-bold">{`${product.price}.00`}</td> 
    </tr>
  )
}

export default ProductRow