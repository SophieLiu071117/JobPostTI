export let companyData =
   {Scotiabank: {rating: null} }
    

export const updateRating = (company, newRating) => {
  companyData[company].rating = newRating
}

