import fetchData from "./services/fetch";
import {FinalResult} from './types/FinalResult'

let finalResult: FinalResult[] = [];

const changeResult = async(url: string) => {
  
  const episodes = await fetchData(url);

  for(let i=0 ; i < episodes.results.length ; i++ ){
    for(let j=0 ; j < episodes.results[i].characters.length ; j++){
      episodes.results[i].characters[j] = await fetchData(episodes.results[i].characters[j]);
    }   
  }

  finalResult = [...finalResult, ...episodes.results];

  if(episodes.info.next !== null){
    changeResult(episodes.info.next)
  }
  
  if(episodes.info.count === finalResult.length){
    console.log(finalResult); 
  }
}

changeResult("https://rickandmortyapi.com/api/episode");