import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContextProvider";

const Register = () => {

    const {createUser}=useContext(AuthContext);
    // console.log(createUser);

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // const name=form.get("name");
    const email=form.get("email");
    const password=form.get("password");
    // console.log(name,email,password);

    createUser(email,password)
    .then(registeredUserCredential=>{
        console.log(registeredUserCredential.user);
    })
    .catch(error=>{
        console.error(error);
    })
  };
  return (
    <div>
      <div className="mt-4">
        <Navbar></Navbar>
      </div>
      <h2 className="text-3xl font-bold text-center mb-6 mt-14">
        Please register your account
      </h2>
      <div className="card shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Your name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
      <p className="text-center mt-4 mb-8">
        Already have an account? Please{" "}
        <Link
          className="text-blue-600 font-semibold hover:underline"
          to="/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
