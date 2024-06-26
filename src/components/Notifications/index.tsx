import { Alert, Snackbar, Typography } from "@mui/material";
import { FC } from "react";
import { NotificationProps } from "./types";

export const Notification: FC<NotificationProps> = ({open,msg,severity,handleClose}) =>{
    
    return(
        <Snackbar 
        anchorOrigin={{vertical:"top",horizontal:"center"}} 
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                <Typography>
                    {msg}
                </Typography>
            </Alert>
        </Snackbar>

    )
}