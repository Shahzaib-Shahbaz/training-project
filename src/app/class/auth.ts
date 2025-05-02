import authdata from "../[locale]/types/auth";

const API_URL= "http://127.0.0.1:8000/api"

export default class Auth{

    // static async Signin(data: authdata) {
    //     try {
    //       const response = await fetch(`${API_URL}/register`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json', // Important for Laravel to return JSON
    //         },
    //         body: JSON.stringify(data),
    //       });
          
    //       const textResponse = await response.text();
    //       console.log('Raw response:', textResponse);
          
    //       try {
    //         return JSON.parse(textResponse);
    //       } catch (e) {
    //         console.error('Failed to parse JSON:', e);
    //         throw new Error(`Server returned non-JSON response: ${textResponse.substring(0, 100)}`);
    //       }
    //     } catch (error) {
    //       console.error('Fetch error:', error);
    //       throw error;
    //     }
    //   }
      
      

    static async Signup(data: authdata){
        try {
            const response = await fetch(`${API_URL}/register`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', // Important for Laravel to return JSON
              },
              body: JSON.stringify(data),
            });
            
            const textResponse = await response.text();
            console.log('Raw response:', textResponse);
            
            try {
              return JSON.parse(textResponse);
            } catch (e) {
              console.error('Failed to parse JSON:', e);
              throw new Error(`Server returned non-JSON response: ${textResponse.substring(0, 100)}`);
            }
          } catch (error) {
            console.error('Fetch error:', error);
            throw error;
          }
        }
    static async signout(){
        console.log("signout");
    }
}