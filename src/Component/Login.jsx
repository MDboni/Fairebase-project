import { useContext, useState } from "react"
import Header from "./Header"
import { TaskContext } from "../ProviderContext/ProviderContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const[success,setSuccess] = useState(false)
    const[errorMessage,setErrorMessage] = useState('')
    const {SignInUser} = useContext(TaskContext)
    
    const LoginHandel = e=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password);

        // Reset ayer jonnw 
        setSuccess(false)
        setErrorMessage('')

    // input faka thakle
        if (!email || !password) {
            alert("Please fill out all fields.");
            return;
        }
        // loginFaireBAse 
        SignInUser(email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess(true)
            e.target.reset()
            navigate('/')
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
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={LoginHandel}>
                        <fieldset className="fieldset">
                            <div>
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                            </div>
                            <div>
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
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

export default Login