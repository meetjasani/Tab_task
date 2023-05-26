import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Company from './component/comapany';
import Location from './component/loaction';
import { useState } from 'react';
// import close_img from '../public/Close-icon.png'
function App() {
  const [closeIcon, setCloseicon] = useState(false)
  const [allData, setAllData] = useState(["Employee", "Company", "Locations"])
  const [selectedData, setSelectedData] = useState([])
  const [currentTab, setCurrentTab] = useState("")
  // const [openIcon, setOpen] = useState(false)
  console.log(selectedData)
  const handleSelect = (name) => {
    let temp = [...selectedData];
    if (!(temp.some(item => item == name))) {
      temp = [...temp, name]
    }
    setSelectedData(temp)
    setCurrentTab(name)
  }
  const handleRemove = (name) => {
    let temp = [...selectedData];
    temp = temp.filter(item => item != name)
    setSelectedData(temp)
    if (temp.length > 0) {
      setCurrentTab(temp[0])
    } else {
      setCurrentTab("")
    }
  }
  return (
    <div className="flex">
      <>
        {closeIcon ?
          <>
            <svg onClick={() => { setCloseicon(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </>
          :
          <div className='w-[200px] h-screen bg-[#252525] flex flex-col gap-3 text-white pt-5 items-center'>
            <div className='w-full flex items-center justify-end'>
              <svg className='w-6 h-6 mr-2' onClick={() => { setCloseicon(true) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {allData.map((list, i) => (
              <span className='cursor-pointer rounded-md px-14 py-2 bg-slate-400' onClick={() => handleSelect(list)}>{list}</span>
            ))}
          </div>
        }
      </>
      <div className='w-full flex flex-col'>
        <div className='flex gap-2 mt-2 ml-2'>
          {selectedData.map((list, i) => (
            <div key={list + i} className={`flex items-center border-2 border-slate-600 rounded p-2 gap-2 ${currentTab == list ? "bg-[#00000050] text-white" : ""} hover:bg-[#00000050] hover:text-white`}>
              <p onClick={() => setCurrentTab(list)} className='cursor-pointer'>{list}</p>
              <svg onClick={() => handleRemove(list)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          ))}
        </div>
        <div className='w-full flex '>
          {currentTab == "Employee" ?
            <div className='pl-2 w-full '>
              <Home />
            </div>
            : null}
          {currentTab == "Company" ?
            <div className='pl-2 w-full '>
              <Company />
            </div>
            : null}
          {currentTab == "Location" ?
            <div className='pl-2 w-full '>
              <Location />
            </div>
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
