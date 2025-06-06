// hit axios ke localhost:8000/api/getlistFasility

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function getlistFasility() {
    const [facilities, setFacilities] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchFacilities = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/getlistFasility'); // Directly hit backend on localhost:8000
                setFacilities(response.data);
            } catch (error) {
                console.error('Error fetching facilities:', error);
                toast.error('Failed to load facilities. Please try again later.');
            }
        };

        fetchFacilities();
    }, []);
    console.log("getlistFasility", facilities);
    return facilities;
}

// available_times
        
export{
    getlistFasility
}


