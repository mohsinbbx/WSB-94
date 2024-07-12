import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import axios from 'axios';
import { useNavigate, } from 'react-router';

function Viewcourse() {
  const nav = useNavigate();

  let { changemenu } = useContext(mainContext);
  const [courseData, setCourseData] = useState([]);
  const [filePath, setFilePath] = useState('');
  const [checked, setChecked] = useState([]);


  const handleFatchCourse = async () => {
    try {
      const response = await axios.get('http://localhost:5200/course/read_courses');

      if (response.status !== 200) return alert('something went wrong');

      setFilePath(response.data.filePath);

      setCourseData(response.data.data);

    } catch (error) {
      console.log(error);
      alert('something went wrong');
    }
  };

  useEffect(() => { handleFatchCourse() }, []);

  const handleStatus = async (e) => {
    const statusData = {
      id: e.target.value,
      status: (e.target.textContent === 'Active') ? false : true
    }

    const response = await axios.put('http://localhost:5200/course/change_course_status', statusData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    handleFatchCourse();
  };

  const handleUpdate = (e) => {
    nav(`/addcourse/${e.target.value}`);
  };

  const handleDelete = async (e) => {

    if (!window.confirm('Are You sure to delete')) return;


    try {
      const response = await axios.delete(`http://localhost:5200/course/delete_single_course/${e.target.value}`);
      console.log(response);
      if (response.status !== 200) return alert('something went wrong');

      alert('Course deleted successfully');
      handleFatchCourse();
    }
    catch (error) {
      console.log(error);
      alert('something went wrong');
    }
  }

  

  const handleCheckInput = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);
    if (e.target.checked) {
      const newArr = [...checked, e.target.value];

      setChecked(newArr);
    }
    else {
      const newArr = [...checked];
      const currentIndex = newArr.findIndex((item) => item === e.target.value);
      newArr.splice(currentIndex, 1);
      setChecked(newArr);
    }
  }

  const handleMultiDelete = async () => {
    if (!window.confirm('Are You sure to delete')) return;
    try {
      const response = await axios.delete('http://localhost:5200/course/multi_delete', { data: checked }, {
        headers: {
          'Content-Type': 'application/json'
        }

      });
      if(response.status !== 200) return alert('somthing went wrong');

      handleFatchCourse();
    }
    catch(error){
      alert('somthing went wrong');
    }
  };

  return (
    <div>

      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className={` ${changemenu == true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Course Table
          </h1>
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
              <table >
                <tr>
                  <th>S.no</th>
                  <th>
                    <input type="checkbox" />
                    <button onClick={handleMultiDelete} className='ms-3 p-2 bg-red-600 rounded-lg text-white'>Delete</button>
                  </th>
                  <th>Course Name</th>
                  <th>Fees</th>
                  <th>Duration</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                {
                  courseData.map((course, i) => {
                    return (
                      <tr>
                        <td className='font-bold'>{i + 1}</td>
                        <td>
                          <input className='ms-8 border-2' type="checkbox" onClick={handleCheckInput} value={course._id} />
                        </td>
                        <td className='font-bold'>{course.coursename}</td>
                        <td className='font-bold'>{course.courseprice}</td>
                        <td className='font-bold'>{course.courseduration}</td>
                        <td className='font-bold'>{course.coursedes}</td>
                        <td>
                          <img src={filePath + course.thumbnail} className='w-[100px] rounded-lg' />
                        </td>
                        <td>
                          <button value={course._id} onClick={handleStatus} className={`p-[4px_8px] ${((course.status) ? 'bg-green-700' : 'bg-red-600')} rounded-lg text-white font-bold`}>{(course.status) ? 'Active' : 'Inactive'}</button>
                        </td>
                        <td className='text-center'>

                          <button value={course._id} className='bg-green-700 text-white font-bold px-5 mr-5 py-1 rounded-lg' onClick={handleUpdate}>Edit</button>
                          <button value={course._id} className='bg-red-600 text-white font-bold px-5 py-1 rounded-lg' onClick={handleDelete}>Delete</button>


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

export default Viewcourse