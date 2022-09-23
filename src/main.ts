import Fetch from "./services/fetch";
import {FinalResult} from './types/FinalResult'

let finalResult: FinalResult[] = [];

const createArray = async(url: string) => {
  
  const episodes = await Fetch(url);
 
  for(let i=0 ; i < episodes.results.length ; i++ ){
      for(let j=0 ; j < episodes.results[i].characters.length ; j++){
          const characterObject = await Fetch(episodes.results[i].characters[j]);
          episodes.results[i].characters[j] = characterObject;
      }   
  }

  finalResult = [...finalResult, ...episodes.results];

  if(episodes.info.next !== null){
    createArray(episodes.info.next)
  }
  
  if(episodes.info.count === finalResult.length){
    console.log(finalResult); 
  }
}

createArray("https://rickandmortyapi.com/api/episode");