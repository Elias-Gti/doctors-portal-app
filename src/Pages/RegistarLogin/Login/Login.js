import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser } = useContext(AuthContext);
    const [loginerror,setLoginerror]=useState('')

    //privet route
    const location = useLocation();
    const navigate= useNavigate();

    const from =location.state?.from?.pathname || '/';


    const handelLogin = data => {
        console.log(data);

        loginUser(data.email,data.password)
            .then(result => {
                // Signed in 
                toast.success('Successfully Login!')
                const user = result.user;
                console.log(user)
                navigate(from,{replace:true});
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                 const errorMessage = error.message;
                console.log(error);
                setLoginerror(errorMessage);
            });
    }


    return (

        <div className='w-1/2 mx-auto bg-slate-50 my-8 border-solid border-2 drop-shadow-xl  rounded-md p-16'>
            <form onSubmit={handleSubmit(handelLogin)} >

                <h1 className='text-2xl font-bold text-gray-600 my-6'>Login</h1>

                <div className="relative z-0 mb-6 w-full group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("email", { required: "Email is required" })} />
                    {errors.email && <p className='text-rose-600 my-2' role="alert">{errors.email?.message}</p>}

                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <input type="password" name="password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                        {...register("password", {
                            required: "Password is Required",
                            minLength: { value: 6, message: "Minimum 6 latter" }
                        })} />

                    {errors.password && <p className='text-rose-600 my-2' role="alert">{errors.password?.message}</p>}

                    {/* custom error */}
                    {loginerror && <p>{loginerror}</p>}

                    <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
                </div>

                <input type="submit" className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-secondary" />
            </form>

            <p className='font-bold my-2'>New to Doctors Portal? <Link to={'/signup'} className="text-primary">Create new account</Link></p>
            <div className="divider my-4">OR</div>
            <div className='flex justify-center mt-10'>
                <button className="btn btn-wide btn-outline text-center ">CONTINUE WITH GOOGLE</button>
            </div>
        </div>




    );
};

export default Login;