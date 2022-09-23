const Fetch = async(url: string) => {
    try{
        const responce = await fetch(url);
        if (!responce.ok){
            throw new Error(`HTTP Error, with status: ${responce.status}`);
        }
        const data = await responce.json();
        return data;
    
    }catch(error){
        if (error instanceof Error) {
            console.log('error message: ', error.message);
            return error.message;
        }else{
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export default Fetch;