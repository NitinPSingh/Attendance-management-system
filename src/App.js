import React,{useState} from 'react';
import './App.css';
import TableContainer from './container/TableContainer';
import AddModal from './components/AddModal';
import MenuBar from './components';


function App() {
  const [openModal , setOpenModal ] = useState(false);
  const [rollNoList,setRollNoList] = useState([]);
  const [studentDetails,setStudentDetails] = useState([]);
  const [studentCnt ,setStudentCnt] = useState(0);
  const [searchData,setSearchData] = useState([]);
  const [search,setSearch] = useState(false);
  const [searchText,setSearchText] = useState("");
  
  const handleAdd = (roll,name) => {
    const obj = {
      name:name,
      rollNo:roll,
      checkIn:"",
      checkInTime:"--:--",
      checkOutTime:"--:--"

    }
    setSearch(false)
    setSearchText("")
    setStudentDetails((prev)=>[...prev,obj])
    setRollNoList((prev)=>[...prev,roll])
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
        ? {...item, checkIn:true,checkInTime:current_time,checkOutTime:"--:--"}
        : item 
      ))
 }

 const handleCheckOut= (rollNo)=>{
  var date = new Date();
  var current_time = date.getHours()+":"+date.getMinutes();
  
  setStudentCnt(studentCnt-1);
  setStudentDetails(
    studentDetails.map(item => 
        item.rollNo === rollNo 
        ? {...item, checkIn:false,checkOutTime:current_time}
        : item 
    ))
 }


const handleSearch = (value)=> {
  setSearchText(value)
  const  baseData = studentDetails;
  const filterTable = baseData.filter(o =>
    Object.keys(o).some(k =>{ 
    
      return (
      String(o[k])
        .toLowerCase()
        .includes(searchText.toLowerCase()))
      }));
     setSearch(true); 
     (value==="") ? setSearchData(baseData) :setSearchData( filterTable );
};

const handleCloseSearch = () =>{
  setSearch(false)
  setSearchText("")
}


 const handleDelete =(rollNo) =>{
  console.log(rollNo)
  setStudentCnt(studentCnt-1)
  setStudentDetails(studentDetails.filter((i)=>i.rollNo!==rollNo))
  setRollNoList(rollNoList.filter((i)=>i!=rollNo))
 }
 
const validateRollNos = (val) =>{
return rollNoList.includes(val)
}

  return (
    <div className="App  flex justify-center items-center flex-col w-[100vw] h-[100vh]">
    
      {openModal && <AddModal  handleClose={()=>setOpenModal(false)} handleAdd={handleAdd} validateRollNos={validateRollNos} />}
      <MenuBar handleSearch={handleSearch} rollNoList={rollNoList}  studentCnt={studentCnt} handleAdd={()=>setOpenModal(true)} handleCloseSearch={handleCloseSearch} searchText={searchText} />
      <TableContainer data={search?searchData:studentDetails} handleDelete={handleDelete} handleCheckIn={handleCheckIn} handleCheckOut={handleCheckOut} />
    </div>
  );
}

export default App;
