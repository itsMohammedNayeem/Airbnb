export const fetchCardsData = async () => {
  const cardsData = await fetch("https://links.papareact.com/zp1");
  console.log(
    "🚀 ~ file: fetchCardsData.js:3 ~ fetchCardsData ~ cardsData:",
    cardsData
  );

  const cardsDataJson = await cardsData.json();
  console.log(
    "🚀 ~ file: fetchCardsData.js:6 ~ fetchCardsData ~ cardsDataJson:",
    cardsDataJson
  );
  return cardsDataJson;
};
