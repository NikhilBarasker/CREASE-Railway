import React, { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { UploadButton } from "@bytescale/upload-widget-react";
import QRCode from 'qrcode.react';
import axios from 'axios';

export default function AddContractor() {
  const baseUrl = "https://crease-railway.onrender.com";
  // const baseUrl = process.env.REACT_APP_API_BASE_URL;
  // const clientUrl = process.env.REACT_APP_CLIENT_BASE_URL;
  const clientUrl = "http://crease-railway-8njx.vercel.app"

  const [profilePic, setProfilePic] = useState("");
  const [success, setSuccess] = useState(false);
  const [qrCodeValue, setQRCodeValue] = useState('error');
  const [formData, setFormData] = useState({
    agency: '',
    typeofcontract: '',
    ContractperiodFrom: '',
    ContractperiodTo: '',
    authority: '',
    Licenseename: '',
    Licenseecontactdetails: '',
    VendorsPermitted: '',
    IsStationService: '',
    StationName: '',
    PFPermitted: '',
    profilePic: '',
    qrcode: '',
  });

  const [generatedData, setGeneratedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    const updatedFormData = { ...formData, qrcode: result };

    let result2 = clientUrl + `/contractorDetails/${result}`;
    
    setQRCodeValue(result2);
    setGeneratedData(updatedFormData);
    setSuccess(true);
    setProfilePic(profilePic);
  };

  const handleSave = async () => {
    try {
      if (generatedData) {
        const response = await axios.post(baseUrl + '/contractor/registercontractor', generatedData);
        if (response) {
          console.log(response);
          setSuccess(false);
          alert(`Data saved`)
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    // http://localhost:5173/contractorDetails/K640X3
    // http://localhost:5173/contractorDetails/ZZL52A
  };

  const options = {
    apiKey: "public_12a1yyQ4Dbt9UDABRk4Budpc2L8v",
    maxFileCount: 1
  };

  formData.profilePic = profilePic;

  return (
    <div>
      <DefaultLayout>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
          className="grid grid-cols-1 gap-9 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-9">
            {/* <!-- Contact Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Register Contractor
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Contract allotting Agency
                      </label>
                      <select
                        name="agency"
                        value={formData.agency}
                        onChange={handleChange}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      >
                        <option value="" disabled>Contract Allocating Agency</option>
                        <option value="Railway">Railway</option>
                        <option value="IRCTC">IRCTC</option>
                      </select>
                    </div>
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Type of Contract
                      </label>
                      <select
                        name="typeofcontract"
                        value={formData.typeofcontract}
                        onChange={handleChange}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      >
                        <option value="" disabled>Type of Contract</option>
                        <option value="On board Catering">On board Catering</option>
                        <option value="On board Non–Catering">On board Non–Catering</option>
                        <option value="PF permit">PF permit</option>
                        <option value="Static Unit">Static Unit</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Contract Period From
                    </label>
                    <input
                      type="date"
                      name="ContractperiodFrom"
                      value={formData.ContractperiodFrom}
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Contract Period To
                    </label>
                    <input
                      type="date"
                      name="ContractperiodTo"
                      value={formData.ContractperiodTo}
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Licensee Name
                    </label>
                    <input
                      type="text"
                      name="Licenseename"
                      value={formData.Licenseename}
                      onChange={handleChange}
                      placeholder="Enter Licensee Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Licensee Contact Details
                    </label>
                    <input
                      type="text"
                      name="Licenseecontactdetails"
                      value={formData.Licenseecontactdetails}
                      onChange={handleChange}
                      placeholder="Enter Licensee Contact Details"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Vendors Permitted
                    </label>
                    <input
                      type="number"
                      name="VendorsPermitted"
                      value={formData.VendorsPermitted}
                      onChange={handleChange}
                      placeholder="Enter Vendors Permitted"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Is Station Service
                    </label>
                    <input
                      type="text"
                      name="IsStationService"
                      value={formData.IsStationService}
                      onChange={handleChange}
                      placeholder="Enter Is Station Service"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Station Name
                    </label>
                    <input
                      type="text"
                      name="StationName"
                      value={formData.StationName}
                      onChange={handleChange}
                      placeholder="Enter Station Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      PF Permitted
                    </label>
                    <input
                      type="text"
                      name="PFPermitted"
                      value={formData.PFPermitted}
                      onChange={handleChange}
                      placeholder="Enter PF Permitted"
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
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  >
                    Generate QR Code
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {
          success && qrCodeValue && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>

            <QRCode style={{ margin: '10px 0' }} value={qrCodeValue}
              title="Artifact QR"
            />
            <button
              onClick={handleSave}

              style={{
                margin: '10px',
                width: '150px',
                height: '35px',
                color: 'black',
                borderRadius: '10px',
                backgroundColor: 'white'
              }}
            >
              Save to Database
            </button>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}
