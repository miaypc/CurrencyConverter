export const addConversion = (conversion) => {
  let savedConversions = getConversions();
  savedConversions.push(conversion);
  localStorage.setItem("savedConversions", JSON.stringify(savedConversions));
  let conversionHistory = JSON.parse(localStorage.getItem("savedConversions"));

  console.log("newly created", savedConversions);
  console.log(conversionHistory);
};

export const getConversions = () => {
  const savedConversionsAsString = localStorage.getItem("savedConversions");
  return JSON.parse(savedConversionsAsString ? savedConversionsAsString : "[]");
};
