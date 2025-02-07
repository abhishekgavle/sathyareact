import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

 function Notfound()
 {

      const navigate=useNavigate()
       useEffect(()=>{setTimeout(()=>{
         navigate("/home")
       },5000)
    },[])
    



     return(
<>
        <h1>  404 page not found 
        </h1>
      </>
     )   
 }
  export default Notfound;