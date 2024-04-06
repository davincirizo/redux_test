import { useNotification } from "../../../context/notification.context";

export function useHomePage(){
    const {getError} = useNotification()

    const handleClik = () =>{
        getError("Hola mundo")
    }

    return{
        values:{},
        actions:{handleClik}
    }

} 