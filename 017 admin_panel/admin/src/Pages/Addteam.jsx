import React, { useContext, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import prev from '../img/generic-image-file-icon-hi.png'
import axios from 'axios';
import { useNavigate } from 'react-router';

function Addteam() {
  const nav = useNavigate();
  let { changemenu } = useContext(mainContext);
  const [imgPrev,setImgPrev] = useState('');

  const handleAddTeam = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await axios.post('http://localhost:5200/team/add_team', formData, {});

    if (response.status != 200) return alert('something went wrong');

    nav('/viewteam');
  }

  const handleImgPrev = (e) => {
    const reader = new FileReader();

    console.log(reader);

    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onload = ()=>{
      setImgPrev(reader.result);
    }
  }
  return (
    <div>

      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className={` ${changemenu == true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] pt-[20px] pb-[60px]  bg-[#F5F7FF]`}>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Team
          </h1>
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px] '>
              <form action="" onSubmit={handleAddTeam}>
                Team Member Name
                <input type="text" name='team_member_name' className='border border-gray-400 px-4 w-full h-[50px] mb-3 mt-2 ' />
                Category
                <input type="text" name='category' className='border border-gray-400 w-full h-[50px] mb-3 mt-2 px-4 ' />
                Member Image
                <input type="file" onChange={handleImgPrev} name='thumbnail' id='file-input' className='border hidden border-gray-400 w-full h-[50px] mb-3 mt-2 ' />
                <div className='flex items-center gap-0 mt-[80px]'>
                  <div className='w-full flex items-center'>
                    <input type="text" readOnly placeholder='Upload File' className=' px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]' />
                    <label id="file-input-label" for="file-input" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  '>Upload</label>
                  </div>
                  <div className=''>
                    <img src={imgPrev || prev} alt="" width={150} />
                  </div>
                </div>

                Slider Status
                <div className='flex items-center mt-5  mb-8 gap-2'>
                  <input type="radio" value={true} name='status' className='mx-2 w-[20px] h-[20px] text-[20px]' /> Active
                  <input type="radio" value={false} name='status' className='mx-2 w-[20px] h-[20px] text-[20px]' /> Deactive
                </div>

                <input type="submit" className='bg-[#4B49AC] mb-8 mt-7 text-[18px] px-8 py-2 rounded-[10px] text-white' />
                <input type="reset" value="Cancel" className='bg-[#F8F9FA] ml-4  text-[18px] px-8 py-2 rounded-[10px] text-black' />
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Addteam