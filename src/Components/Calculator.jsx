// import React, {useState} from 'react'
// import './Calculator.css'

// const Calculator = () => {

// const [value,setvalue]=useState('')


// const Deletevalue = ()=>{
//    setvalue(value.slice(0,-1));
// }


// const handleequalclick=()=>{
//   try{
//     const result = (eval(value));
//     setvalue(String(result))
//   }
//   catch (error){
//       setvalue(Error)
//   }

// }




//   return (
//     <div>
// <form action="">
// <div className="container">
  
// <div>
//     <h1>Calculator</h1>
//     <div className='underline'></div>
//     </div>

// <div className="input-container">

//      <div className="input-monitor">
//         <input type="monitor" value={value}/>
//      </div>

//       <div className='input-style'>
//      <input type="text" value='AC' className='AC' onClick={s=> setvalue(' ')}/>
//      <input type="text" value='DE' className='DE' onClick={Deletevalue()}/>
//      <input type="text" value='%'  onClick={s=> setvalue(value+ s.target.value)}/>
//      <input type="text" value='/'  onClick={s=> setvalue(value+ s.target.value)}/>
//      </div>

//      <div>
//      <input type="text" value='7'  onClick={s => setvalue(value+ s.target.value)}/>
//      <input type="text" value='8'  onClick={s => setvalue(value+ s.target.value)}/>

//      <input type="text" value='9'  onClick={s => setvalue(value+ s.target.value)}/>
//      <input type="text" value='*'  onClick={s=> setvalue(value+ s.target.value)}/>
//      </div>

//      <div>
//      <input type="text" value='4'  onClick={s=> setvalue(value+ s.target.value)}/>
//      <input type="text" value='5'  onClick={s=> setvalue(value+ s.target.value)}/>
//      <input type="text" value='6'  onClick={s=> setvalue(value+ s.target.value)}/>
//      <input type="text" value='+'  onClick={s=> setvalue(value+ s.target.value)}/>
//      </div>

//      <div>
//      <input type="text" value='1'  onClick={s=> setvalue(value+ s.target.value)}/>
//      <input type="text" value='2'  onClick={s=> setvalue(value+ s.target.value)}/>
//      <input type="text" value='3'  onClick={s=> setvalue(value+ s.target.value)}/>
//      <input type="text" value='-'  onClick={s=> setvalue(value+ s.target.value)}/>
//      </div>

//      <div>
//      <input type="text" value='0'  onClick={s=> setvalue(value+ s.target.value)}/>
//      <input type="text" value='00'  onClick={s=> setvalue(value+ s.target.value)}/>
//      <input type="text" value='.'  onClick={s=> setvalue(value+ s.target.value)}/>
//      <input type="text" value='=' className='equal' onClick={handleequalclick}/>
//      </div>

//     </div>
// </div >
// </form>
//     </div>




//   )
// }

// export default Calculator


