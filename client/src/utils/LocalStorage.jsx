import { localStorageToConversion } from "./Coversion";

export const addConversionToLocalStorage = (conversion) => {
  let savedConversions = getConversionsFromLocalStorage();
  savedConversions.push(conversion);
  localStorage.setItem("savedConversions", JSON.stringify(savedConversions));

  //console.log("newly created", savedConversions);
  //console.log(conversionHistory);
};

export const getConversionsFromLocalStorage = () => {
  const savedConversionsAsString = localStorage.getItem("savedConversions");
  return JSON.parse(
    savedConversionsAsString ? savedConversionsAsString : "[]"
  ).map(localStorageToConversion);
};
