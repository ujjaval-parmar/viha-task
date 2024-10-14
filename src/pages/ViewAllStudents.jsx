import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

const ViewAllStudents = () => {

  // const isUpdate = useSelector(state=> state.isUpdate);

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log("IsUpdate: ", isUpdate);

  const getStudentsData = async() =>{

    try{
      setLoading(true);
      const response = await fetch('http://localhost:9000/students');

      const data = await response.json();

      console.log(data);
      

      if(data.length<=0){
        // toast('Plese Add Students!')
        return;
      }

      setStudents(data);

    }catch(err){
      toast.error('Error Getting Students Data!');
    }finally{
      setLoading(false)
    }


  }

  useEffect(()=>{

    getStudentsData();

  }, []);

  
  

  return (
    <section className='container mx-auto overflow-x-auto'>

      {loading &&
      
        <h3 className='text-2xl uppercase text-center my-6'>Loading......</h3>
      }


      {(!loading && students.length >0 ) ? <table className='w-full min-w-[900px] overflow-x-auto '>

          <thead className='flex justify-between'>

            <tr >
              <th>First Name</th>
            </tr>

            <tr >
              <th>Last Name</th>
            </tr>

            <tr >
              <th>Father Name</th>
            </tr>

            <tr >
              <th>Email</th>
            </tr>

            <tr >
              <th>Mobile</th>
            </tr>

            <tr >
              <th>Gender</th>
            </tr>

            <tr >
              <th>DOB </th>
            </tr>

            <tr >
              <th>Country</th>
            </tr>

          </thead>

          <tbody className='w-full flex flex-col '>

          {students.length>0 && !loading && students.map(student=>{
            return(
              <tr key={student.id} className='w-full flex justify-between items-center hover:bg-blue-50'>

                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.fatherName}</td>
                <td>{student.email}</td>
                <td>{student.mobile}</td>
                <td>{student.gender}</td>
                <td>{student.DOB}</td>
                <td>{student.country}</td>

              </tr>
            )
          })}



          </tbody>

        </table>
     :
          <h3 className='text-lg text-center my-6 uppercase font-semibold'>Please Add Students!</h3>
     }



    </section>
  )
}

export default ViewAllStudents