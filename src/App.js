import logo from './logo.svg';
import './App.css';
// import { Select } from './formHelper';
import { Controller, FormProvider, useController, useForm } from "react-hook-form";
import { useEffect, useRef, useState } from 'react';
import Input from "@material-ui/core/Input";
import Co from './Co'
import Select from '@material-ui/core/Select';
import { FormControl, MenuItem ,InputLabel} from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { InputC, SelectC } from './formHelper';
import Form1 from './Form1';
import Form2 from './Form2'
import Auth from './auth/Auth';
function App() {
  const schema = yup.object().shape({
  lastName:yup.string().required(),
  age:yup.number().positive().integer()
  })
  const { register,handleSubmit,formState:{ errors },control,formState ,watch,reset} = useForm({
    // resolver:yupResolver(schema),
    mode:'onChange',
    defaultValues:{
      Age:23,
     
    }

  });
  const onSubmit = data =>{
    console.log(data);
  }
  
  return (
    <div>
     <Auth />
    </div>
  )
}

export default App;
