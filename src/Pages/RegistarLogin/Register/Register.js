import React, { useContext } from 'react';
import { useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {

    const {register,handleSubmit,formState: { errors }}= useForm();
    const {createUser,userInfo}=useContext(AuthContext);

    const handleSingup=(data)=>{
        console.log(data);
        createUser(data.email,data.password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            toast.success('User create successfully')
            // ...
            const updateInfo={
                displayName: data.name,
            }

            userInfo(updateInfo)
            .then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(error);
            // ..
          });
    }

    

    return (
        <div className='w-1/2 mx-auto bg-slate-50 my-8 border-solid border-2 drop-shadow-xl  rounded-md p-16'>
            <form onSubmit={handleSubmit(handleSingup)}>

                <h1 className='text-2xl font-bold text-gray-600 my-6'>Sing up</h1>

                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("name",{ required: "Name is required" })} />

                    {errors.name && <p className='text-rose-600 my-2' role="alert">{errors.name?.message}</p>}

                    <label for="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("email",{ required: "Email is required" })} />

                    {errors.email && <p className='text-rose-600 my-2' role="alert">{errors.email?.message}</p>}
                    

                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <input type="password" name="password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("password",{ required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 latter" } }
                    
                    )}
                        />
                        {errors.password && <p className='text-rose-600 my-2' role="alert">{errors.password?.message}</p>}
                    

                    <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
                </div>





                <input type="submit" className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-secondary" />
            </form>

            <p className='font-bold my-2'>You Already Register? <Link to={'/login'} className="text-primary">Go to sing in</Link></p>
            <div className="divider my-4">OR</div>
            
            <div className='flex justify-center mt-10'>
                <button className="btn btn-wide btn-outline text-center ">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;