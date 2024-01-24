import { SubmitHandler, useForm } from "react-hook-form";
import { InputFields } from "./types/types";

export const CosdenForm = () => {
  const { register, handleSubmit } = useForm<InputFields>();

  const onSubmit: SubmitHandler<InputFields> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="password" placeholder="Password" {...register("password")} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
