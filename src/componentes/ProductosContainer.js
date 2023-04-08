import { useState } from "react"
import Producto from "./Producto"

const ProductosContainer = () => {

    const resultadoDelHook = useState(1.3)//[a,b]
    const numero = resultadoDelHook[0]//1
    const setNumero = resultadoDelHook[1] //fn() es asincronica
  
    const [dark, setDark] = useState(true)
    const [nombre, setNombre] = useState("Horacio")
  
  
    function handleClick(){
      setNumero(numero + 1)
    }
  
    const handleChangeDark = () => {
      setDark(!dark)
    }
  
  
    return (
      <Producto
        dark={dark}
        numero={numero}
        nombre={nombre}
        handleClick={handleClick}
        handleChangeDark={handleChangeDark}
      />
    )
  }
  
  export default ProductosContainer