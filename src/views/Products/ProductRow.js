import React from "react";

function ProductRow(props) {
  const product = props.product;
  const productLink = `/products/${product.id}`;

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  };

  const imageSrc = product.image ? "data:image/jpeg;base64, " + product.image : "../../assets/img/no-image.png";

  return (
    <tr key={product.id.toString()} onClick={() => props.history.push(productLink)}>
      <td><img src={imageSrc} height="60" className="product-img" /></td>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow;
