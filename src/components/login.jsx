import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const allValue=watch("passwordInput");
 console.log(allValue)
  const onSubmit = (data) => console.log(data);
  return <>
  
  <form onSubmit={handleSubmit(onSubmit)}>
    <label>Username<input type="text" defaultValue="Mikael" {...register("usernameInput")} /></label>
    <label>Password<input type="password" {...register("passwordInput")}required={true}/></label><input type="submit"/></form></>;
}
