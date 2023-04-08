const Producto = (props) => {
  
    
    if (props.dark) {
      return (
        <div className={`${props.dark}`}>
          <p>{props.numero}</p>
          <p>{`${props.dark}`}</p>
          <p> otro resultado posible</p>
          <button id="btn" onClick={props.handleClick}>Comprar</button>
          <button onClick={props.handleChangeDark}>Volver Inicio</button>
        </div>
      )
    } else {
      return (
        <div className={`${props.dark}`}>
          <p>{props.numero}</p>
          <p>{`${props.dark}`}</p>
          <button id="btn" onClick={props.handleClick}>Ver productos</button>
          <button onClick={props.handleChangeDark}>Eliminar carrito</button>
        </div>
      )
    }
  }
  
  export default Producto