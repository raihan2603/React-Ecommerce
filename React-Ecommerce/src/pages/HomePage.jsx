import React from 'react';
import { toast } from 'react-hot-toast';
const HomePage = () => {

    const handleClick=()=>{
        toast.success("Successfull Installation")
    }

    return (
        <div>
            <button onClick={handleClick} className="btn btn-soft btn-primary">Primary</button>
        </div>
    );
};

export default HomePage;