
import { Button, Modal, TextField } from '@mui/material';
import React,{useState} from 'react';




const AddModal = ({handleClose,handleAdd,validateRollNos}) => {
  const  [name,setName] = useState("");
  const [rollNo,setRollNo] = useState("");
 
  const handleSubmit = () =>{
    if(rollNo!="" && name!="") handleAdd(rollNo,name)
    else alert("fields cant be empty")

  }
   
   
    return (
        <Modal className='w-[100vw] h-[100vh] flex justify-center items-center '
        open={true}
        onClose={handleClose}>
   
    <div className='flex flex-col col  gap-4 bg-white w-[350px] justify-center items-center relative h-[250px] rounded-lg '>
    <TextField id="outlined-basic" className='w-[80%] '  onChange={(e)=>setRollNo(e.target.value)} label="Roll No" variant="outlined" />
    <TextField id="outlined-basic" className='w-[80%] ' onChange={(e)=>setName(e.target.value)} label="Name" variant="outlined" />
       
       <div className='flex w-full justify-around '>
        <Button variant="contained"  color="error" onClick= {()=>handleClose()}>
        Cancel
        </Button> 
        <Button variant="contained" disabled={validateRollNos(rollNo)} color="success" onClick= {()=>handleSubmit()}>
      Submit
      </Button>
      </div>
      <div className={`${!validateRollNos(rollNo)?"hidden":"text-[red]"} absolute bottom-[4px] text-xs color-[red]`}>rollno already present</div>
    </div>
  
   
    </Modal>
    )

}

export default AddModal;