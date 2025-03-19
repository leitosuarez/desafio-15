
const ProductCategoryRow = ({category}) => {
  return (
    <tr className="mt-2.5 border-t-2">
        <th className="px-4 py-2 text-left text-white text-2xl">
            {category}
        </th>
    </tr>
  )
}

export default ProductCategoryRow