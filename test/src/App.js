import Button from "./components/Button/Button";

function App() {
  const buttons = [
    {value: "AC", type:"symbol"},
    {value: "+/-", type:"symbol"},
    {value: "%", type:"symbol"},
    {value: "/", type:"symbolAccent"},
    {value: 7, type:"number"},
    {value: 8, type:"number"},
    {value: 9, type:"number"},
    {value: "*", type:"symbolAccent"},
    {value: 4, type:"number"},
    {value: 5, type:"number"},
    {value: 6, type:"number"},
    {value: "-", type:"symbolAccent"},
    {value: 3, type:"number"},
    {value: 2, type:"number"},
    {value: 1, type:"number"},
    {value: "+", type:"symbolAccent"},
    {value: 0, type:"number0"},
    {value: ".", type:"number"},
    {value: "=",type:"symbolAccent"}
  ];

  const handButtonClick = (value) =>{
    console.log(value)
  };

  const styleCalcu ={
    width: "60%",
  };

  return (
    <center>
    
    <div className="App" style={styleCalcu}>
    <label style={{padding: "120px"}}>0</label><br/>
      {
        buttons.map(buttonProps => 
        <Button {...buttonProps} 
          key={buttonProps.value} 
          onClick={handButtonClick} />)
      }
    </div>
    </center>
  );
}

export default App;
