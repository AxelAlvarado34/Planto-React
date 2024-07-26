import { useState } from "react";

export const useEmail = ()=>{
    const[message, setMessage] = useState('');
    const[alert, setAlert] = useState(false);
    const[success, setSuccess] = useState(false);
    const[spinner, setSpinner] = useState(false);

    const handleSubmit = (e)=> {
        e.preventDefault();

        if (message === '') {
            setAlert(true)
            return
        }

        setAlert(false);
        setSpinner(true);

        setTimeout(() => {
            setSpinner(false);
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false)
                setMessage('');
            }, 5000);
        }, 3000);
    }

    return{
        message, setMessage,
        alert, setAlert,
        success, setSuccess,
        spinner, setSpinner,
        handleSubmit
    }
}