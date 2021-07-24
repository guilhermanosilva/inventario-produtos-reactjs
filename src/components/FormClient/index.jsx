import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Informe o nome"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Preencha o campo de email"),
  phone: yup.number(),
  cpf: yup
    .number()
    .typeError("O CPF deve ter 11 dígitos numéricos")
    .positive()
    .min(11, "O CPF deve ter 11 dígitos numéricos")
    .max(11, "O CPF deve ter 11 dígitos numéricos")
    .required("Preencha um cpf válido"),
  cep: yup
    .number()
    .typeError("O CEP deve ter 8 dígitos numéricos")
    .positive()
    .min(8, "O CEP deve ter 8 dígitos numéricos")
    .max(8, "O CEP deve ter 8 dígitos numéricos")
    .required("Informe o CEP de sua residencia"),
  street: yup.string().required("Informa seu endereço"),
  number: yup.number().positive(),
  district: yup.string().required("Preencha o bairro"),
  city: yup.string().required("Preencha a cidade"),
  uf: yup.string().required("Preencha o estado"),
});

function FormClient(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
    alert(`O usuário '${user.name}' foi adicionado.`);
    handleModal();
  };

  return (
    <div className="box-model">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="fields-container">
          <fieldset>
            <div className="field">
              <label htmlFor="input-client-name">Nome: </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                id="input-client-name"
                title="Name"
              />
              <p className="field-error">{errors.name?.message}</p>
            </div>

            <div className="field">
              <label htmlFor="input-client-email">Email: </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="input-client-email"
                title="Email"
              />
              <p className="field-error">{errors.email?.message}</p>
            </div>

            <div className="field">
              <label htmlFor="input-client-phone">Telefone: </label>
              <input
                {...register("phone")}
                type="tel"
                name="phone"
                id="input-client-phone"
                title="Phone"
              />
            </div>
            <div className="field">
              <label htmlFor="input-client-cpf">CPF: </label>
              <input
                {...register("cpf")}
                type="number"
                name="cpf"
                id="input-client-cpf"
                title="CPF"
                minLength="11"
                maxLength="11"
              />
              <p className="field-error">{errors.cpf?.message}</p>
            </div>
          </fieldset>

          <fieldset>
            <div className="field">
              <label htmlFor="input-client-cep">CEP: </label>
              <input
                {...register("cep")}
                type="number"
                name="cep"
                id="input-client-cep"
                title="CEP"
              />
              <p className="field-error">{errors.cep?.message}</p>
            </div>

            <div className="field">
              <label htmlFor="input-client-street">Logradouro: </label>
              <input
                {...register("street")}
                type="text"
                name="street"
                id="input-client-street"
                title="Street"
              />
              <p className="field-error">{errors.street?.message}</p>
            </div>

            <div className="field">
              <label htmlFor="input-client-number">Nº: </label>
              <input
                {...register("number")}
                type="number"
                name="number"
                id="input-client-number"
                title="Number"
              />
            </div>

            <div className="field">
              <label htmlFor="input-client-district">Bairro: </label>
              <input
                {...register("district")}
                type="text"
                name="district"
                id="input-client-district"
                title="District"
              />
              <p className="field-error">{errors.district?.message}</p>
            </div>

            <div className="field">
              <label htmlFor="input-client-city">Cidade: </label>
              <input
                {...register("city")}
                type="text"
                name="city"
                id="input-client-city"
                title="City"
              />
              <p className="field-error">{errors.city?.message}</p>
            </div>

            <div className="field">
              <label htmlFor="input-client-uf">Estado: </label>
              <input
                {...register("uf")}
                type="text"
                name="uf"
                id="input-client-uf"
                title="UF"
                minLength="2"
                maxLength="2"
                placeholder="UF"
              />
              <p className="field-error">{errors.uf?.message}</p>
            </div>
          </fieldset>
        </section>
        <button>Cadastrar</button>
      </form>

      <div className="btn-close" onClick={handleModal}>
        X
      </div>
    </div>
  );
}

export default FormClient;
