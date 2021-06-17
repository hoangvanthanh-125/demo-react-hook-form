import { useFormContext } from "react-hook-form"
 const InPut1 = ({name}) => {
  const {register} = useFormContext();
  return <input {...register(name)}  />
}
export default InPut1;