import { Link,useLocation,useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContextProvider";

const Login = () => {

    const{logInUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    console.log(location);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email=form.get("email");
    const password=form.get("password");

    logInUser(email,password)
    .then(logInUserCredential=>{
        console.log(logInUserCredential.user);
        navigate(location?.state? location.state:"/")
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
        Please login your account
      </h2>
      <div className="card shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
        <form onSubmit={handleLogIn} className="card-body">
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      <p className="text-center mt-4">
        Do not have an account? Please{" "}
        <Link
          className="text-blue-600 font-semibold hover:underline"
          to="/register"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
