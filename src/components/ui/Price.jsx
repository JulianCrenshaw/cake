import React from 'react'

const Price = ({ salePrice, originalPrice }) => {
  return (
      <div className="dessert__price">
        {salePrice ? (
          <>
            <span className="dessert__price--normal">
              ${originalPrice.toFixed(2)}
            </span>
            ${salePrice.toFixed(2)}
          </>
        ) : (
          <> ${originalPrice.toFixed(2)}</>
        )}
      </div>
  )
}

export default Price;