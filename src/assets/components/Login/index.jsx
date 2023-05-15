
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Box,TextField,Button,Typography} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({
    firstName: yup.string().min(2, 'must be at least 3 characters long').required("do not keep empty"),
    lastName: yup.string().min(3, 'must be at least 3 characters long').required("do not keep empty"),
    age: yup.number("must be an old number").required("do not keep empty").positive("age must be a positive number").integer("age must be an integer"),
    gmail:  yup.string().email("Invalid email").required("do not keep empty"),
    password: yup.string()
    .required('do not keep empty') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    image:yup.string().url("insert image with url").required("do not keep empty"),
  }).required();


function Login() {
    const navigate=useNavigate()
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => {
        console.log(data)
        localStorage.setItem("user",JSON.stringify(data))
        toast.success("Successfuly Register")
       setTimeout(()=>{
        navigate("/signin")
       },5000)
    };
  return (
    <>
    <ToastContainer />
        <div className="container">
        <Typography variant="h4" component="h2">
            Register
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
      label="lastname" 
      variant="outlined" 
      {...register("lastName")} />
      <p className="error">{errors.lastName?.message}</p>

      <TextField 
      id="outlined-basic" 
      label="age" 
      variant="outlined" 
      type="number" 
      {...register("age")} />
      <p className="error">{errors.age?.message}</p>

      <TextField 
      id="outlined-basic" 
      label="gmail" 
      variant="outlined" 
      {...register("gmail")} />
      <p className="error">{errors.gmail?.message}</p>

      <TextField 
      id="outlined-basic" 
      label="password" 
      variant="outlined" 
      type={"password"} 
      {...register("password")} />
      <p className="error">{errors.password?.message}</p>

      <TextField 
      id="outlined-basic" 
      label="image" 
      variant="outlined" 
      {...register("image")} />
      <p className="error">{errors.image?.message}</p>

      <Button variant="contained" type='submit'>Login</Button>
    </Box>
    </div>
    </>

  )
}

export default Login
