import { AlertColor } from "@mui/material";
import { useState } from "react";

export function useNotificationProvider(){
    
    const [msg,setMsg] = useState("")
    const [open,setOpen] = useState(false)
    const [severity,setSeverity] = useState<AlertColor | undefined>(undefined)

    const getError = (message:string) =>{
        setOpen(true)
        setMsg(message)
        setSeverity("error")
    }

    const handleClose = () =>{
        setOpen(false)
    }

    const value = {
        getError
    }

    return {
        values: {
            value,
            open,
            severity,
            msg,
        },
        actions: {
            handleClose,
            getError
        },
    };
}