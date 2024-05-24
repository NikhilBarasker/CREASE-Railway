// import { Link } from 'react-router-dom';
// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
// import DefaultLayout from '../layout/DefaultLayout';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password:'',
});
  
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   };
  console.log('zzzzzzzzzzz',formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      if (response) {
        alert(`Data Saved Successfully`);
      }
    } catch (error) {
      console.error('Error:', error); // Handle error
    }
  };

  return (
    <>
      {/* <Breadcrumb pageName="Form Layout" /> */}

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems:'center'
      }} className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Contact Form
              </h3>
            </div>
            <form style={{
              
            }} action="#">
              <div className="p-6.5" >
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Password <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <button onClick={handleSubmit} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
        </div> 
      </div>
    </>
  );
};

export default Login; 
