export const getAbsoluteUrl = (relativeUrl: string) =>{
    if(process.env.NODE_ENV === 'development'){
        return `http://localhost:3000/api${relativeUrl}`;
    } else{
        return `https://uncheatable.vercel.app/api${relativeUrl}`
    }
}