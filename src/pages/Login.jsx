import { useContext } from "react";
import { AuthContext } from "../context/Context";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";


const Login = () => {
   const {logInUser} = useContext(AuthContext)
   const navigate = useNavigate()

    const loginHandler= e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then(()=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login SuccessFully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
        })
    }

    return (
        <div className="p-6 md:p-12">
        <h1 className="text-4xl font-semibold text-center mb-8">Login For Job Portal</h1>
      <div className="max-w-[500px] mx-auto p-6 rounded-xl bg-slate-200">
        
        <form onSubmit={loginHandler} className="">
        
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="mt-6">
          <input type="submit" value="Login" className="bg-blue-500 rounded-xl w-full text-white py-3 px-6"/>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Login;