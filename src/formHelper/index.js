import { MenuItem, TextField,Select, FormControl ,InputLabel,Checkbox, FormControlLabel} from "@material-ui/core"
import { useController } from "react-hook-form"

export const InputField = ({control,name,type,label}) => {
  const {
    field:{ref,...inputProps} 
  } = useController({
    name,
    control,
    defaultValue:''
  })
  return (
    <TextField placeholder={label} type={type} className='FormHelper_Input' {...inputProps} inputRef={ref} />
  )
}
export const SelectField = ({control,name,type,label,options,defaultValue}) => {
  const {
    field:{ref,...selectProps} 
  } = useController({
    name,
    control,
    defaultValue:parseInt(defaultValue)
  })
  return (
    <FormControl style={{width:'100%'}}> 
      <InputLabel>
      {label}
      </InputLabel>
      <Select
   {...selectProps}
   inputRef={ref}
  >
    {options.map((item,index) => (
      <MenuItem key ={index} value = {item.value}>{item.label}</MenuItem>
    ))}
  </Select>
    </FormControl>
  )
}
export const CheckBoxField = ( {control,name ,label} ) => {
  const {
    field:{ref,...CheckBoxProps} 
  } = useController({
    name,
    control,
    defaultValue:false
  })
  return (
    <FormControlLabel control={<Checkbox {...CheckBoxProps} />} label={label} />
  )
}