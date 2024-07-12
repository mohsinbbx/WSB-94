import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import axios from 'axios';

function Viewslider() {
  let { changemenu } = useContext(mainContext);
  const [sliderData, setSliderData] = useState([]);
  const [filePath, setFilePath] = useState('');

  console.log(sliderData);

  const handleFetchSlider = async () => {
    try {
      const response = await axios.get('http://localhost:5200/slider/read_slider');

      if (response.status !== 200) return alert('something went wrong');

      setFilePath(response.data.filePath);

      setSliderData(response.data.data);
    }
    catch (error) {
      console.log(error);
      alert('something went wrong');
    }
  };

  useEffect(() => { handleFetchSlider() }, []);

  const handleStatus = async (e) => {
    const statusData = {
      id: e.target.value,
      status: (e.target.textContent === 'Active') ? false : true 
    }

    const response = await axios.put('http://localhost:5200/slider/update_status', statusData, {
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    handleFetchSlider();
  };

  return (
    <div>

      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className={` ${changemenu == true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Slider Table
          </h1>
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
              <table >
                <tr>
                  <th>S.no</th>
                  <th>Slider Heading</th>
                  <th>Slider sub-heading</th>
                  <th>Slider Description</th>
                  <th>Slider Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                {
                  sliderData.map((slider, i) => {
                    return (
                      <tr>
                        <td className='font-bold'>{i + 1}</td>
                        <td className='font-bold'>{slider.sliderheading}</td>
                        <td className='font-bold'>{slider.slidersubheading}</td>
                        <td className='font-bold'>{slider.sliderdes}</td>
                        <td>
                          <img src={filePath + slider.thumbnail} className='w-[100px] rounded-lg' />
                        </td>
                        <td>
                          <button value={slider._id} onClick={handleStatus} className={`p-[4px_8px] ${((slider.status) ? 'bg-[green]' : 'bg-[red]')} rounded text-white font-bold`}>{(slider.status) ? 'Active' : 'Inactive'}</button>
                        </td>
                        <td className='text-center'>
                          <button className='bg-green-700 text-white font-bold px-5 mr-5 py-1 rounded-lg'>Edit</button>
                          <button className='bg-red-600 text-white font-bold px-5 py-1 rounded-lg'>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }

              </table>
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Viewslider