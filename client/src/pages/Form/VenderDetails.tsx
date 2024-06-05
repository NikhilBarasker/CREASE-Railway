import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const VenderDetails = () => {
    // const baseUrl = process.env.REACT_APP_API_BASE_URL
    const baseUrl = "https://crease-railway.onrender.com"
    const { qrcode } = useParams();
    const [invigilatorData, setInvigilatorData] = useState(null);

    const getUser = async () => {
        try {
            let response = await axios.post(baseUrl + '/invigilator/fetchInvigilatorDataByQR', { qrcode });
            console.log("response ", response)
            setInvigilatorData(response.data);
        } catch (error) {
            console.error('Error fetching Invigilator data:', error);
        }
    };

    useEffect(() => {
        getUser();
    }, [qrcode]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div>
            hi
        </div>
    )
}

export default VenderDetails
