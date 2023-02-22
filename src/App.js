import { Button, Modal, TextField } from '@mui/material';
import React,{useCallback, useEffect,useState} from 'react';
import './App.css';

function App() {
  const [openModal , setOpenModal ] = useState(false);
  const  [name,setName] = useState("");
  const [rollNo,setRollNo] = useState();
  const [rollNoList,SetRollNoList] = useState([]);
  const [studentDetails,setStudentDetails] = useState([]);
  const [studentCnt ,setStudentCnt] = useState(0);
  const handleAdd = () => {
    const obj = {
      name:name,
      rollNo:rollNo,
      checkIn:false,
      checkInTime:"",
      checkOutTime:""

    }

    setStudentDetails((prev)=>[...prev,obj])
    setRollNo();
    setName("");
    setOpenModal(false)

  }
  
 const handleCheckIn= (rollNo)=>{
  var date = new Date();
  var current_time = date.getHours()+":"+date.getMinutes();
  setStudentCnt(studentCnt+1);
 console.log(rollNo)
  setStudentDetails(
    studentDetails.map(item => 
        item.rollNo === rollNo 
        ? {...item, checkIn:true,checkInTime:current_time}
        : item 
))


 }

 const handleCheckOut= (rollNo)=>{
  var date = new Date();
  var current_time = date.getHours()+":"+date.getMinutes();
  const newArr = [...studentDetails];
  setStudentCnt(studentCnt-1);
  setStudentDetails(
    studentDetails.map(item => 
        item.rollNo === rollNo 
        ? {...item, checkIn:false,checkOutTime:current_time}
        : item 
))
  

 }


  useEffect(()=>{
    console.log(rollNoList.includes(rollNo))
},[rollNo])
  return (
    <div className="App">
      {studentCnt}
      {openModal && <Modal
  open={true}>
    <div>
    <TextField id="outlined-basic" type="number" onChange={(e)=>setRollNo(e.target.value)} label="Name" variant="outlined" />
    <TextField id="outlined-basic" onChange={(e)=>setName(e.target.value)} label="Roll No" variant="outlined" />
        <Button variant="contained" color="success" onClick= {()=>handleAdd()}>
      Success
      </Button>
    </div>
    
    </Modal>}
    <Button onClick={()=>setOpenModal(true)}>Add</Button>

    {studentDetails.map((i)=><>{i.name} {i.rollNo} {i.checkInTime} {i.checkOutTime} <br /> 
    {i.checkIn? <button name={i.rollNo} onClick={(e)=>handleCheckOut(e.target.name)}>checkout</button> : <button name={i.rollNo} onClick={(e)=>handleCheckIn(e.target.name)}>checkin</button>} </>)}
    </div>
  );
}

export default App;
