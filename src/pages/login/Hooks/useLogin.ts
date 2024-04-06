import { ChangeEvent, FormEvent, useState } from "react";
import { LoginType } from "../types";

export function useLogin() {
    const [loginData, setLoginData] = useState<LoginType>({
        username:'',
        password:''
    })

    const onchangeData = (event: ChangeEvent<HTMLInputElement>) =>{
        setLoginData({...loginData, [event.target.name]:event.target.value})
    }

    const handleSubmitLogin = (event:FormEvent<HTMLInputElement>) =>{
        event.preventDefault()
        console.log(loginData)
    }

    return {
        values: {
            
        },
        actions: {
            onchangeData,
            handleSubmitLogin
        },
    };

}



