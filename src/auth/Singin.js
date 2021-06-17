import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../formHelper';
import './../style/index.css'
import * as yup from "yup";


function Singin(props) {
  const schema = yup.object().shape({
    Email:yup.string().required().email(),
    PassWord:yup.string().required()
  })
  const {control,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form className='Sigin' onSubmit={handleSubmit(onSubmit)}>
        <h2>Đăng nhập</h2>
        <div className='Sigin_wrapInput'>
        <InputField label='Email'  className='Sigin_Input' name='Email' control={control} />
        {errors.Email && <span className='error_message'>{errors.Email.message}</span>}
        </div>
       <div className='Sigin_wrapInput'>
       <InputField label='PassWord' type='password' className='Sigin_Input'  name = 'PassWord' control={control} />
        {errors.PassWord && <span className='error_message'>{errors.PassWord.message}</span>}
       </div>
        <button className='Sigin_Button' variant='contained' color='secondary' type='submit'>
          Đăng nhập
        </button>
      </form>
    </>
  );
}

export default Singin;