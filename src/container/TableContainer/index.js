import { Button, IconButton, Modal, TextField } from '@mui/material';
import React,{useCallback, useEffect,useState} from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddIcon from '@mui/icons-material/Add';
import CircleIcon from '@mui/icons-material/Circle';
import PushPinIcon from '@mui/icons-material/PushPin';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const TableContainer = ({data,handleDelete,handleCheckIn,handleCheckOut}) =>{

    const [isSticky,setIsSticky] =useState(true)

    useEffect(()=>{},[data])
    return (
        <div style={{overflow:"scroll"}} className="flex border-2  detailTable flex-col lg:w-[70vw] md:w-[80vw] w-[95vw] md:max-h-[75vh] md:h-[75vh] max-h-[80vh] h-[80vh]">
     
        
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-base z-[60] text-gray-700 sticky top-0 font-bold uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                  
                                  <td className={`px-4 py-3 z-[60] text-center w-[15%] bg-gray-50 dark:bg-gray-700 ${isSticky?"sticky left-[0]":""}`}>Roll No  <PushPinIcon className='absolute top-[0] h-[1vh] transform rotate-45 ' onClick={()=>setIsSticky(!isSticky)} color={isSticky ?'primary':''}  /> </td>
                                  <td className='px-4 py-3 w-[25%]'>Name</td>
                                  <td className='px-4 py-3 text-center w-[14%]'>Status</td>
                                  <td className='px-4 py-3 text-center w-[12%]'>Check in</td>
                                  <td className='px-4 py-3 text-center w-[14%]'>Check out</td>
                                  <td className='px-4 py-3 text-center w-[20%]'>Actions</td>
                                  
                                   </tr>
                            </thead>
        <tbody>
        
          
        {data.map((i)=><>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class={`w-4 p-4   ${isSticky?"sticky z-[50] left-[0] dark:bg-gray-800 bg-white":""}`}>
            <div class="flex items-center justify-center">
              {i.rollNo}
            </div>
        </td>
        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {i.name}
        </th>
        <td class="px-4 py-4 text-center">
            <div>
            {i.checkIn? <Button variant="outlined" className='!text-[0.5rem] !rounded-full' color='success' startIcon={<CircleIcon color='success' fontSize='small'/>} > Active</Button>  :
             <Button variant="outlined" color='error' className='!text-[0.5rem] !rounded-full'  startIcon={<CircleIcon color='error' fontSize='small'/>} > Inactive</Button>  }
             </div>
        </td>
        <td class="px-2 py-4 text-center">
           {i.checkInTime}
        </td>
        <td class="px-2 py-4 text-center">
            {i.checkOutTime}
        </td>
        <td class="px-4 py-4 flex justify-around">
     

{!i.checkIn?
        <Button name={i.rollNo} variant="contained" className='!text-[0.6rem]  !rounded-full w-[70%]' size="small" color="success" onClick={(e)=>handleCheckIn(e.target.name)}>
        CheckIn
            </Button>:
            <Button name={i.rollNo} variant="contained" className='!text-[0.6rem] !rounded-full w-[70%]' size="small" color="error" onClick={(e)=>handleCheckOut(e.target.name)}>
        CheckOut
            </Button> }
           
            <IconButton className='cursor-pointer'   onClick={()=>handleDelete(i.rollNo)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-6 h-6 dark:stroke-white stroke-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

              
            </IconButton>
        </td>
    </tr>
        
        </>
        )}
      
        </tbody>
        </table>
        </div>
    )
}

export default TableContainer;