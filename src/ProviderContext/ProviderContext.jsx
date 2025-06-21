import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../FaireBase.init"

export const TaskContext = createContext(null)

const ProviderContext = ({children}) => {
 const[user,setUser]=useState(null)
 const [loading,setLoading] = useState(true)

  // sign UP / Register ayer jonnw 
    const SignUpUser = (email,password)=>{
      setLoading(false)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    
//  const createUser = async (email, password) => {
//   setLoading(true);
//   try {
//     return await createUserWithEmailAndPassword(auth, email, password);
//   } finally {
//     setLoading(false);
//   }
// };

// sign In / Login ayer jonnw 
    const SignInUser = (email,password)=>{
      setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }

//     const signUser = async (email, password) => {
//   setLoading(true);
//   try {
//     return await signInWithEmailAndPassword(auth, email, password);
//   } finally {
//     setLoading(false);
//   }
// };

// sign In / Login Data Dhore Rhakar jonnw  ayer jonnw 
   useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
          console.log("User logged in:",currentUser);
          setUser(currentUser)
        }else{
          console.log('No user logged in');
          setUser(null)
        }
        setLoading(false)
      });
      return () => {
        unsubscribe() ;
      }
    },[])

  //   useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       console.log("User logged in:", currentUser);
  //       setUser(currentUser);
  //       setLoading(false)
  //     } else {
  //       console.log("No user logged in");
  //       setUser(null);
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

    // signOut ayer jonnw 
    const signOutUser = ()=>{
      setLoading(false)
     return signOut(auth)
    }
// const signOutUser = async () => {
//   setLoading(true);
//   try {
//     return await signOut(auth);
//   } finally {
//     setLoading(false);
//   }
// };

    const allDataSend = {
      loading ,
      user,
      SignUpUser,
      SignInUser,
      signOutUser
    }

  return (
    <TaskContext.Provider value={allDataSend}>
        {children}
    </TaskContext.Provider>
  )
}

export default ProviderContext