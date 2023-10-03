//melhor maneira de criar um form performático
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  //formState:{errors} acessa os erros
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const watchResponsible = watch("age")
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2>Form bom</h2>
      <form>
        <label>
          <p>Nome</p>
          <input
            type="text"
            name=""
            id=""
            {...register("name", { required: true })}
            style={errors.name && { border: "1px solid red" }}
          />
        </label>
        {errors?.name?.type === "required" && (
          <p style={{ color: "red" }}>Preencha o campo nome</p>
        )}

        <label>
          <p>Email</p>
          <input
            type="email"
            name=""
            id=""
            {...register("email", { required: true })}
            style={errors.email && { border: "1px solid red" }}
          />
        </label>
        {errors?.email?.type === "required" && (
          <p style={{ color: "red" }}>Preencha o campo email</p>
        )}

        <label>
          <p>Senha</p>
          <input
            type="password"
            {...register("password", { minLength: 7, required: true })}
            style={errors.password && { border: "1px solid red" }}
          />
        </label>
        {errors?.password?.type === "minLength" && (
          <p style={{ color: "red" }}>
            A senha deve ter no mínimo 7 caracteres
          </p>
        )}

        <label>
          <p>Idade</p>
          <input
            type="number"
            name=""
            id=""
            {...register("age")}
          />
        </label>
        {watchResponsible < 18 && (
          <label>
            <p>Nome do responsável</p>
            <input type="text" name="" id="" {...register("responsible")} />
          </label>
        )}

        <label>
          <p>Selecione seu sexo</p>
          <select
            name=""
            id=""
            {...register("sexo", { validate: (value) => value !== "0" })}
          >
            <option value="0">Sexo</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </label>
        {errors?.sexo?.type === "validate" && (
          <p style={{ color: "red" }}>O sexo deve ser selecionado</p>
        )}
        <br />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
