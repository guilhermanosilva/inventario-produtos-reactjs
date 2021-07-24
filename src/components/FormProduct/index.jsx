import { useForm } from "react-hook-form";

function FormProduct(props) {
  const { register, handleSubmit } = useForm();

  function saveInLocalStorage(data) {
    const storageProducts = localStorage.getItem("products");

    if (!storageProducts) {
      const products = [data];
      localStorage.setItem("products", JSON.stringify(products));
      return;
    }

    const products = JSON.parse(storageProducts);
    products.push(data);
    localStorage.setItem("products", JSON.stringify(products));
  }

  function getLastProductFromLocalStorage() {
    const products = JSON.parse(localStorage.getItem("products"));
    const lastProduct = products[products.length - 1];
    return lastProduct;
  }

  function handleModal() {
    props.handleModalFromForm();
  }

  const onSubmit = (data) => {
    saveInLocalStorage(data);
    const product = getLastProductFromLocalStorage();
    props.setProductData(product);
    alert(`O produto '${product.name}' foi adicionado.`);
    handleModal();
  };

  return (
    <div className="box-model">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="input-product-name">Nome: </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="input-product-name"
            title="Name"
          />
        </div>

        <div className="field">
          <label htmlFor="input-product-description">Descrição: </label>
          <input
            {...register("description")}
            type="text"
            name="description"
            id="input-product-description"
            title="Description"
          />
        </div>

        <div className="field">
          <label htmlFor="input-product-category">Categoria: </label>
          <input
            {...register("category")}
            type="text"
            name="category"
            id="input-product-category"
            title="Category"
          />
        </div>

        <div className="field">
          <label htmlFor="input-product-sku">SKU: </label>
          <input
            {...register("sku")}
            type="text"
            name="sku"
            id="input-product-sku"
            title="SKU"
          />
        </div>

        <div className="field">
          <label htmlFor="input-product-price">Preço: </label>
          <input
            {...register("price")}
            type="number"
            name="price"
            id="input-product-price"
            title="Price"
          />
        </div>

        <div className="field">
          <label htmlFor="input-product-quantity">Quantidade: </label>
          <input
            {...register("quantity")}
            type="number"
            name="quantity"
            id="input-product-quantity"
            title="Quantity"
          />
        </div>

        <button>Cadastrar</button>
      </form>
      <div className="btn-close" onClick={handleModal}>
        X
      </div>
    </div>
  );
}

export default FormProduct;
