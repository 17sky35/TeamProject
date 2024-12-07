import axios from "axios";

export async function call(api,method,request,user){

    let headers = new Headers({
        "Content-Type": "application/json"
    })

    //user.token 이 존재하면
    if(user.token && user.token !== null){
        headers.append("Authorization", `Bearer ${user.token}`);
    }

    try {
        // 동적으로 메서드를 호출
        const response = await axios({
            method: method,
            url: `http://localhost:9090${api}`,
            data: request,
            headers: headers
        });

        if (response) {
            return response.data;
        } else {
            return false;

        }
        
    } catch (error) {
        console.error('API 호출 중 오류 발생', error);
        return false;
    }

}//call