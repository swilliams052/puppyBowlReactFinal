

const fetchPlayers =  async () => {
   try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players');
    
    const data = await response.json();

    return data;
}
    catch (error) {
    console.log(error)
   } 
}
export default fetchPlayers
