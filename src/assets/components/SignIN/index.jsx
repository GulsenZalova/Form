import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Box,TextField,Button,Typography} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const schema = yup.object({
    firstName: yup.string().min(2, 'must be at least 3 characters long').required("do not keep empty"),
    password: yup.string()
    .required('do not keep empty') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  }).required();

function SignIn() {
    const navigate=useNavigate()
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => {
        const user= JSON.parse(localStorage.getItem("user"))
        console.log(user)
        if(data.firstName==user.firstName && data.password==user.password){
          toast.success("Successfuly Login")
            setTimeout(()=>{
                navigate("/profile")
               },3000)
        }else{
          toast.error("Invalid firstName or password")
        }
        
    };

  return (
   <>
   <ToastContainer />
   <div className="container">
      <Typography variant="h4" component="h2">
            Login
      </Typography>
       <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      label="firstname" 
      variant="outlined" 
      {...register("firstName")} />
      <p className="error">{errors.firstName?.message}</p>

      <TextField 
      id="outlined-basic" 
      label="password" 
      variant="outlined" 
      type={"password"} 
      {...register("password")} />
      <p className="error">{errors.password?.message}</p>

      <Button variant="contained" type='submit'>Login</Button>
    </Box>
    </div>
   </>
   
  )
}

export default SignIn
