import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Registration = () => {
    const {createUser,signInWithGoogle} = useContext(AuthContext);
    console.log(createUser);
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);
        //create user in firebase
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })

    }
    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">User Name</span>
                </label>
                <input name="name" type="text" placeholder="User Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p>Already have an account please<Link to="/login">
            <button className="btn btn-link">Login</button>
            </Link></p>
            <p> <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google Login</button></p>
            </div>
        </div>
        </div>
    );
};
export default Registration;