import { FormProvider, useForm } from "react-hook-form";
import InPut1 from "./Inpu1";

export default function Form2() {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods} > 
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InPut1  name='age' />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}