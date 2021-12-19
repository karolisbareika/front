import './register.css';

export default function Register() {
    
    // const nameRef = useRef()
    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newUser = {
    //         username: nameRef.current.value,
    //         email: emailRef.current.value,
    //         password: passwordRef.current.value,
    //     };
    // }
    return (
        <div className='registerWrapper'>
            <form >
                <input type='text' placeholder='username' ></input>
                <input type='email' placeholder='email' ></input>
                <input type='password' placeholder='password' ></input>
                <button>Submit</button>
                
            </form>
        </div>
    )
}