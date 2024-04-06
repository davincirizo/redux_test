import  { FC, createContext, useContext } from "react";
import { ContextProps } from "./types";
import { Notification } from "../components";
import { useNotificationProvider } from "./hooks/useNotificationProvider";

const NotificationContext = createContext<ContextProps | null>(null)

export const NotificationProvider: FC<{children: JSX.Element}> = ({children}) =>{
    const  {
        values : {
            value,
            open,
            severity,
            msg,
        },
        actions : {
            handleClose,
            getError,
        }
    } = useNotificationProvider()
    return(
        <NotificationContext.Provider value={value}>
            <Notification 
            handleClose={handleClose} 
            open={open} 
            severity={severity} 
            msg={msg}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () =>{
    const context = useContext(NotificationContext)
    if(!context) throw new Error("no existe")
    return context
} 