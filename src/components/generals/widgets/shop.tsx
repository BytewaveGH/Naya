import React, { useState } from 'react'
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react'

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: `GHC${(i + 1) * 10}`,
  image: 'https://via.placeholder.com/150',
}))

const ShoppingDisplay = () => {
  const [page, setPage] = useState(1)
  //   const itemsPerPage = 12;

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1))
  const handleNext = () => setPage((prev) => prev + 1)

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Search and Filter */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-1/2">
          <Search className="w-5 h-5 text-gray-500" />
          <input type="text" placeholder="Search products..." className="ml-2 w-full focus:outline-none" />
        </div>
        <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg">
          <Filter className="w-5 h-5 mr-2" /> Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg text-center shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded-lg" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-l-lg disabled:opacity-50" disabled={page === 1}>
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="px-4">Page {page}</span>
        <button onClick={handleNext} className="p-2 bg-gray-200 rounded-r-lg">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default ShoppingDisplay
