import React, { useState } from 'react'
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

const StudentRegister = () => {

  
 

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    email: '',
    mobile: '',
    gender: '',
    DOB: '',
    country: ''
  });


  const handleChange = e =>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }


  const handelSubmit = async(e) =>{
    e.preventDefault();

    try{

      const response = await fetch('http://localhost:9000/students',{
        method: 'POST',
        body: JSON.stringify(formData)
      })

      toast.success('Student Register Successfull!');

      
      

      navigate('/')



    }catch(err){
      toast.error(err.message);
    }


  }
  




  return (
    <section>

      <div className='container mx-auto '>
        <h1 className='text-xl uppercase font-semibold text-center my-4'>Register Student</h1>

        <form className='p-4 pb-8   rounded-2xl shadow-2xl flex flex-col gap-5' onSubmit={handelSubmit}>

          <div>
            <input type="text" name='firstName' placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            />

          </div>

          <div>
            <input type="text" name='lastName' placeholder='Last Name'
            value={formData.lastName}
            
            onChange={handleChange}
            />
          </div>

          <div>
            <input type="text" name='fatherName' placeholder='Father Name'
            value={formData.fatherName}

            onChange={handleChange}
            />
          </div>

          <div>
            <input type="email" name="email" placeholder='Email'
            value={formData.email}

            onChange={handleChange}
            />
          </div>

          <div>
            <input type="number" name="mobile" id="" placeholder='Mobile Number'
            value={formData.mobile}

            onChange={handleChange}
            />
          </div>

          <div className='flex gap-4'>

            <div className='flex gap-2 items-center uppercase'>
              <input type="radio" name="gender" value="male"
            

              onChange={handleChange}
              />
              <label htmlFor="gender">Male</label>
            </div>

            <div className='flex gap-2 items-center uppercase'>
              <input type="radio" name="gender" value="female"
              onChange={handleChange}
              />
              <label htmlFor="gender">Female</label>
            </div>

          </div>

          <div>
            <input type="date" name="DOB" id=""
            value={formData.DOB}
            onChange={handleChange}
            />
          </div>

          <div className='w-full my-3'>


            <select name="country" id="country" className='w-full border  p-3 '
            onChange={handleChange} value={formData.country}
            >
              <option value="">--Please choose an country--</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="europe">Europe</option>s
            </select>

          </div>

          <button className='bg-blue-500 w-fit mx-auto p-4 px-6 rounded-2xl uppercase font-bold text-gray-200'>
            Submit
          </button>


        </form>


      </div>



    </section>
  )
}

export default StudentRegister