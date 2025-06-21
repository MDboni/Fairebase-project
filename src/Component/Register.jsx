import { useContext, useState } from "react"
import Header from "./Header"
import { TaskContext } from "../ProviderContext/ProviderContext"
import { FaRegEye ,FaRegEyeSlash} from "react-icons/fa";

const Register = () => {

    const { SignUpUser } = useContext(TaskContext)
    const[errorMessage,setErrorMessage] =useState('')
    const[success,setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const FormHandel = e=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const terms = e.target.terms.checked;

        console.log(name,email,password);

        // reseat ayer jonnw 
        setErrorMessage('')
        setSuccess(false)

        // faka input tahkle
        if (!name || !email || !password ) {
            alert("Please fill out all fields.");
            return;
        }
        // password ayer jonnw 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
          alert("Password must contain at least 1 uppercase, 1 lowercase letter, and be minimum 6 characters long.");
        return;
        }

        // Terms ayer jonnw 
        if (!terms) {
            alert("Please accept the terms and conditions.");
            return;
        }

        // FaireBAse SignUp 
        SignUpUser(email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess(true)
            e.target.reset()
        })
        .catch(error=>{
            console.log(error.message);
            setErrorMessage(error.message)
        })
        
    }
  return (
    <Header>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={FormHandel}>
                        <fieldset className="fieldset">
                            <div>
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input w-full" placeholder="Email" />
                            </div>
                            <div>
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input w-full" placeholder="Email" />
                            </div>
                            <div className="relative">
                                <label className="label">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="input input-bordered w-full pr-10"
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-7 text-xl text-gray-600"
                                >
                                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <label className="label">
                                <input type="checkbox" name="terms" defaultChecked className="checkbox" />
                                Accept All & termsCondition
                            </label>
                            <button className="btn btn-neutral mt-4">Register</button>
                         </fieldset>
                    </form>
                    {
                        success && <h2>Login Successfull!..</h2>
                    }
                    {
                        errorMessage && <h2> {errorMessage} </h2>
                    }
                </div>
                </div>
            </div>
        </div>
    </Header>
  )
}

export default Register