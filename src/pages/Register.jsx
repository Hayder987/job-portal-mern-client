import { useContext } from "react";
import { AuthContext } from "../context/Context";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Register = () => {
      const {registerUser, updateUser} = useContext(AuthContext)
      const navigate = useNavigate()

    const registerHandler =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name  = form.name.value;
        const imgPath = form.imgPath.value;
        const email = form.email.value;
        const password = form.password.value;

        registerUser(email, password)
        .then(()=>{
            updateUser(name, imgPath)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration Success",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
        })
        .catch(err=>{
            
        })
    }

  return (
    <div className="p-6 md:p-12">
        <h1 className="text-4xl font-semibold text-center mb-8">Register For Job Portal</h1>
      <div className="max-w-[500px] mx-auto p-6 rounded-xl bg-slate-200">
        
        <form onSubmit={registerHandler} className="">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            <input
              type="url"
              name='imgPath'
              placeholder="Img-Url"
              className="input input-bordered"
              required
            />
          </div>
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
          <input type="submit" value="Register" className="bg-blue-500 rounded-xl w-full text-white py-3 px-6"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
