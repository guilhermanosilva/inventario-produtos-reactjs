import { useForm } from "react-hook-form";

function FormClient(props) {
  const { register, handleSubmit } = useForm();

  function saveInLocalStorage(data) {
    const storageUsers = localStorage.getItem("users");

    if (!storageUsers) {
      const users = [data];
      localStorage.setItem("users", JSON.stringify(users));
      return;
    }

    const users = JSON.parse(storageUsers);
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
  }

  function getLastUserFromLocalStorage() {
    const users = JSON.parse(localStorage.getItem("users"));
    const lastUser = users[users.length - 1];
    return lastUser;
  }

  function handleModal() {
    props.handleModalFromForm();
  }

  const onSubmit = (data) => {
    saveInLocalStorage(data);
    const user = getLastUserFromLocalStorage();
    props.setData(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="input-client-name">Nome: </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="input-client-name"
            title="Name"
          />
        </div>

        <div>
          <label htmlFor="input-client-email">Email: </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="input-client-email"
            title="Email"
          />
        </div>

        <div>
          <label htmlFor="input-client-phone">Telefone: </label>
          <input
            {...register("phone")}
            type="tel"
            name="phone"
            id="input-client-phone"
            title="Phone"
          />
        </div>
        <div>
          <label htmlFor="input-client-cpf">CPF: </label>
          <input
            {...register("cpf")}
            type="number"
            name="cpf"
            id="input-client-cpf"
            title="CPF"
          />
        </div>

        <div>
          <label htmlFor="input-client-cep">CEP: </label>
          <input
            {...register("cep")}
            type="number"
            name="cep"
            id="input-client-cep"
            title="CEP"
          />
        </div>

        <div>
          <label htmlFor="input-client-street">Logradouro: </label>
          <input
            {...register("street")}
            type="text"
            name="street"
            id="input-client-street"
            title="Street"
          />
        </div>

        <div>
          <label htmlFor="input-client-number">Nº: </label>
          <input
            {...register("number")}
            type="number"
            name="number"
            id="input-client-number"
            title="Number"
          />
        </div>

        <div>
          <label htmlFor="input-client-district">Bairro: </label>
          <input
            {...register("district")}
            type="text"
            name="district"
            id="input-client-district"
            title="District"
          />
        </div>

        <div>
          <label htmlFor="input-client-city">Cidade: </label>
          <input
            {...register("city")}
            type="text"
            name="city"
            id="input-client-city"
            title="City"
          />
        </div>

        <div>
          <label htmlFor="input-client-uf">Estado: </label>
          <input
            {...register("uf")}
            type="text"
            name="uf"
            id="input-client-uf"
            title="UF"
          />
        </div>

        <button>Cadastrar</button>
      </form>
      <button onClick={handleModal}>Fechar</button>
    </div>
  );
}

export default FormClient;
