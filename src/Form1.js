import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import InPut1 from './Inpu1';

export default function Form1() {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods} > 
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InPut1  name='Name' />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}