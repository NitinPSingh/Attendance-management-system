import { Button, IconButton, InputBase } from '@mui/material';
import React,{ useEffect,useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';

const MenuBar = ({studentCnt,handleAdd,handleSearch,handleCloseSearch,searchText,rollNoList}) =>{
    
    const [toogle,setToogle] = useState(false)

    useEffect(()=>{
      var root = document.getElementById("root")
      if(toogle)
      root.classList.add("dark")
      else
      root.classList.remove("dark")
    },[toogle,searchText])

    return (
        <div className='w-full mb-2  flex justify-between items-center max-[450px]:flex-col max-[450px]:gap-y-2 lg:w-[70vw] md:w-[80vw] w-[95vw] '>

        <div className='border-2 max-[450px]:w-full flex justify-between'>
        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e)=>handleSearch(e.target.value)}
        value = {searchText}
        
      />

      <IconButton type="button" onClick={()=>handleCloseSearch()} sx={{ p: '10px' }} aria-label="search" >
     { searchText!=""?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>:<SearchIcon />}

      </ IconButton>
      </div>
        
       <div className='flex relative items-center px-1 max-[450px]:w-full justify-between'>
       <div className='text-lg rounded-full px-2 border-2 flex items-center px-2'>
        Active : <span className='text-[green] font-bold'>{studentCnt}</span>/<span className='dark:text-[gray]'>{rollNoList.length}</span> 
        </div>

        <div className='px-2'> <Button variant="contained" onClick={handleAdd} endIcon={<AddIcon />}>
        Add 
        </Button></div>
       <IconButton className="!rounded-full px-2 w-[3vw] h-[3vw] " onClick={()=>setToogle(!toogle)} > 
        {toogle ?<LightModeIcon className='!fill-amber' />:<DarkModeIcon />}</IconButton>
       </div>
        
        
        
</div>
    )
}

export default MenuBar;