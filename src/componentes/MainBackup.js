const Main = (props) => {
  
    return (
      <main>
        <h2>{props.titulo}</h2>
        <section className="productos" onClick={()=>{console.log("click")}}>
          {/* <button className="btn btn-primary">click</button> */}
          {/* <Button>click pero con react-bootstrap</Button> */}
          {/* <img src="/images/logo192.png" alt="" /> */}
          {/* <button onClick={handleClick}>click</button> */}
        </section>
      </main>
    )
  }
  
  export default Main;
  
  
  
  
  
