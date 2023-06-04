export  async function getContentFullProfileData(query : any){
    console.log("loggg");
    try{
        const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/0scgrccnnjkw/`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EEgac6T4clmbr8a6euEneXbJdsm2bBYMca4nqWgaz1M",
            },
            // send the GraphQL query
            body: JSON.stringify(query)
        });
        const json = await response.json();
        return json;
    }catch(error : any){
         throw new Error(error.message);
    }
   

}