import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Viewvideo() {
  const nav = useNavigate();

  let { changemenu } = useContext(mainContext);
  const [videoData, setVideoData] = useState([]);

  console.log(videoData);

  const handleFetchVideo = async () => {
    try {
      const response = await axios.get('http://localhost:5200/videos/read_video');

      if (response.status !== 200) return alert('something went wrong');

      setVideoData(response.data.data);
    }
    catch (error) {
      console.log(error);
      alert('something went wrong');
    }
  };

  useEffect(() => { handleFetchVideo() }, []);

  const handleStatus = async (e) => {
    const statusData = {
      id: e.target.value,
      status: (e.target.textContent === 'Active') ? false : true
    }

    const response = await axios.put('http://localhost:5200/videos/update_status', statusData, {
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    handleFetchVideo();
  };

  const handleUpdate = (e)=>{
    nav(`/addvideo/${e.target.value}`);
  };

  return (
    <div>

      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className={` ${changemenu == true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Video Table
          </h1>
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
              <table >
                <tr>
                  <th>S.no</th>
                  <th>Course Name</th>
                  <th>Video Topic</th>
                  <th>Video </th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                {
                  videoData.map((video, i) => {
                    return (
                      <tr>
                        <td className='font-bold'>{i + 1}</td>
                        <td className='font-bold'>{video.coursecat.coursename}</td>
                        <td className='font-bold'>{video.videotopic}</td>
                        <td className='font-bold'>{video.videourl}</td>
                        <td>
                          <button value={video._id} onClick={handleStatus} className={`p-[4px_8px] ${((video.status) ? 'bg-green-700' : 'bg-red-600')} rounded-lg text-white font-bold`}>{(video.status) ? 'Active' : 'Inactive'}</button>
                        </td>
                        <td className='text-center'>
                          <button value={video._id} className='bg-green-700 text-white font-bold px-5 mr-5 py-1 rounded-lg' onClick={handleUpdate}>Edit</button>
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

export default Viewvideo