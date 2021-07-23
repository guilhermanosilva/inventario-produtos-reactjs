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

  function handleModal() {
    props.handleModalFromForm();
  }

  const onSubmit = (data) => {
    saveInLocalStorage(data);
    props.setProductData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="input-product-name">Nome: </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="input-product-name"
            title="Name"
          />
        </div>

        <div>
          <label htmlFor="input-product-description">Descrição: </label>
          <input
            {...register("description")}
            type="text"
            name="description"
            id="input-product-description"
            title="Description"
          />
        </div>

        <div>
          <label htmlFor="input-product-category">Categoria: </label>
          <input
            {...register("category")}
            type="text"
            name="category"
            id="input-product-category"
            title="Category"
          />
        </div>

        <div>
          <label htmlFor="input-product-sku">SKU: </label>
          <input
            {...register("sku")}
            type="number"
            name="sku"
            id="input-product-sku"
            title="SKU"
          />
        </div>

        <div>
          <label htmlFor="input-product-price">Preço: </label>
          <input
            {...register("price")}
            type="number"
            name="price"
            id="input-product-price"
            title="Price"
          />
        </div>

        <div>
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
      <button onClick={handleModal}>Fechar</button>
    </div>
  );
}

export default FormProduct;
