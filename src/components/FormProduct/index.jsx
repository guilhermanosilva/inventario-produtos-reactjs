function FormProduct() {
  return (
    <div>
      <form>
        <label htmlFor="input-product-name">Nome: </label>
        <input type="text" name="name" id="input-product-name" title="Name" />

        <label htmlFor="input-product-description">Descrição: </label>
        <input
          type="text"
          name="description"
          id="input-product-description"
          title="Description"
        />

        <label htmlFor="input-product-category">Categoria: </label>
        <input
          type="text"
          name="category"
          id="input-product-category"
          title="Category"
        />

        <label htmlFor="input-product-sku">SKU: </label>
        <input type="number" name="sku" id="input-product-sku" title="SKU" />

        <label htmlFor="input-product-price">Preço: </label>
        <input
          type="number"
          name="price"
          id="input-product-price"
          title="Price"
        />

        <label htmlFor="input-product-quantity">Quantidade: </label>
        <input
          type="number"
          name="quantity"
          id="input-product-quantity"
          title="Quantity"
        />

        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default FormProduct;
