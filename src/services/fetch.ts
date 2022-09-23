const fetchData = async(url: string) => {
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`HTTP Error, with status: ${response.status}`);
        }
        const data = await response.json();
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

export default fetchData;