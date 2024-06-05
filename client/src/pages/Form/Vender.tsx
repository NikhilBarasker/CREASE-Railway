import DefaultLayout from '../../layout/DefaultLayout';
import { UploadButton } from "@bytescale/upload-widget-react";
import QRCode from 'qrcode.react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
  
const FormLayout = () => {

  // const baseUrl = "https://crease-railway.onrender.com";
  const baseUrl = "http://localhost:3000";
  // const baseUrl = process.env.REACT_APP_API_BASE_URL;
  // const clientUrl = process.env.REACT_APP_CLIENT_BASE_URL;
  const clientUrl = "http://crease-railway-8njx.vercel.app"

  const [profilePic, setProfilePic] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [policeVarificationDocument, setPoliceVarificationDocument] = useState("");
  const [madicalValidityDocument, setMadicalValidityDocument] = useState("");
  const [success, setSuccess] = useState(false);
  const [qrCodeValue, setQRCodeValue] = useState('');
  const [formData, setFormData] = useState({
    fname: '',
    dob: '',
    mobile: '',
    profilePic:'',
    aadhar:'',
    aadharCard: '',
    policeVarificationDate: '',
    policeVarificationDocument: '',
    medicalValidityDate: '',
    madicalValidityDocument: '',
    validityAuthority: '',
    qrcode:'',
  });

  const [generatedData, setGeneratedData] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateQRCode = (e) => {
    e.preventDefault()
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    const updatedFormData = { ...formData, qrcode: result };

    let result2 = clientUrl + `/#/venderDetails/${result}`;


    setQRCodeValue(result2);
    setGeneratedData(updatedFormData);
    setSuccess(true); 

    setProfilePic(profilePic);
    setAadharCard(aadharCard);
    setPoliceVarificationDocument(policeVarificationDocument);
    setMadicalValidityDocument(madicalValidityDocument);
    console.log('Generated QR Code:', result);
  };

  const handleSave = async (e) => {
    e.preventDefault()
    if (Object.values(generatedData).some(value => value === '')) {
      console.log(generatedData);
      alert('Any of the fields is empty');
      return
    } else {
      try {
        console.log('Submitting formData:', generatedData);
        const response = await axios.post(baseUrl+'/invigilator/registerinvigilator', generatedData);
        alert('Data saved successfully');
      } catch (error) {
        console.error('Error:', error); 
      }
    }
  };

  const options = {
    apiKey: "public_12a1yyQ4Dbt9UDABRk4Budpc2L8v", 
    maxFileCount: 1
  };

  formData.profilePic = profilePic;
  formData.aadharCard = aadharCard;
  formData.madicalValidityDocument = madicalValidityDocument;
  formData.policeVarificationDocument = policeVarificationDocument

  return (
    <DefaultLayout>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems:'center'
      }} className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Register Invigilator
              </h3>
            </div>
            <form style={{}} action="#">
              <div className="p-6.5" >
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      First name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value={formData.fname}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"  // Corrected name attribute
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      name="mobile"  // Corrected name attribute
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Aadhar number <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="number"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    placeholder="Enter your Aadhar number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Upload Aadhar Pic
                    </label>
                    <UploadButton
                      options={options}
                      onComplete={(files) =>
                        setAadharCard(files.map((x) => x.fileUrl).join("\n"))
                      }
                    >
                      {({ onClick }) =>
                        <button onClick={onClick}>
                          Upload a file...
                        </button>
                      }
                    </UploadButton>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Upload PoliceVarification Document
                    </label>
                    <UploadButton
                      options={options}
                      onComplete={(files) =>
                        setPoliceVarificationDocument(files.map((x) => x.fileUrl).join("\n"))
                      }
                    >
                      {({ onClick }) =>
                        <button onClick={onClick}>
                          Upload a file...
                        </button>
                      }
                    </UploadButton>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Upload MadicalValidity Document
                    </label>
                    <UploadButton
                      options={options}
                      onComplete={(files) =>
                        setMadicalValidityDocument(files.map((x) => x.fileUrl).join("\n"))
                      }
                    >
                      {({ onClick }) =>
                        <button onClick={onClick}>
                          Upload a file...
                        </button>
                      }
                    </UploadButton>
                  </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Police Varification Date
                  </label>
                  <input
                    type="date"
                    name="policeVarificationDate"
                    value={formData.policeVarificationDate}
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Medical validity
                  </label>
                  <input
                    type="date"
                    name="medicalValidityDate"  // Corrected name attribute
                    value={formData.medicalValidityDate}
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Validity of Authority
                  </label>
                  <input
                    type="text"
                    name="validityAuthority"
                    value={formData.validityAuthority}
                    onChange={handleChange}
                    placeholder="Enter validity Authority"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Upload Profile Pic
                  </label>
                  <UploadButton
                    options={options}
                    onComplete={(files) =>
                      setProfilePic(files.map((x) => x.fileUrl).join("\n"))
                    }
                  >
                    {({ onClick }) =>
                      <button onClick={onClick}>
                        Upload a file...
                      </button>
                    }
                  </UploadButton>
                </div>
                  <button onClick={generateQRCode} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Generate Qr Code
                </button>
                {success && qrCodeValue && (
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <QRCode value={qrCodeValue} />
                  </div>
                )}
                <button onClick={handleSave} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 mt-4">
                  Save to Database
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-9"></div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
