import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { CheckBoxField, InputField, SelectField } from "../formHelper";
import "./../style/index.css";
import * as yup from "yup";

function Singup(props) {
  const options = [
    {
      label:'Nam',
      value:1,
    },
    {
      label:'Nữ',
      value:0
    }
  ]
  const schema = yup.object().shape({
    Email: yup.string().required('Nhập Email').email('Nhập đúng định dạng'),
    PassWord: yup.string().required('Nhập mật khẩu'),
    Sex:yup.number('Chọn giới tính').required('Chọn giới tính'),
    check:yup.boolean().required()
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form className="Sigin" onSubmit={handleSubmit(onSubmit)}>
        <h2>Đăng kí</h2>
        <div className="Sigin_wrapInput">
          <InputField
            label="Email"
            className="Sigin_Input"
            name="Email"
            control={control}
          />
          {errors.Email && (
            <span className="error_message">{errors.Email.message}</span>
          )}
        </div>
        <div className="Sigin_wrapInput">
          <InputField
            label="Mật khẩu"
            type="password"
            className="Sigin_Input"
            name="PassWord"
            control={control}
          />
          {errors.PassWord && (
            <span className="error_message">{errors.PassWord.message}</span>
          )}
        </div>
        <div className="Sigin_wrapInput">
          <InputField
            label="Nhập lại mật khẩu"
            type="password"
            className="Sigin_Input"
            name="Enter_PassWord"
            control={control}
          />
          {errors.PassWord && (
            <span className="error_message">{errors.PassWord.message}</span>
          )}
        </div>
        <div className="Sigin_wrapInput">
          <SelectField
            className="Sigin_Input"
            name="Sex"
            control={control}
            options={options}
            label='Giới tính'
            defaultValue={1}
          />
          {errors.Sex && (
            <div className="error_message">{errors.Sex.message}</div>
          )}
        </div>
        <div className="Sigin_wrapInput">
          <CheckBoxField
            className="Sigin_Input"
            name="check"
            control={control}
            label='Đồng ý điều khoản'
          />
          {errors.check && (
            <div className="error_message">{errors.check.message}</div>
          )}
        </div>
         
        <button
          className="Sigin_Button"
          variant="contained"
          color="secondary"
          type="submit"
        >
          Đăng kí
        </button>
      </form>
    </>
  );
}

export default Singup;
