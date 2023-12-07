export const fetchExploreData = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp");
  console.log(
    "🚀 ~ file: fetchExploreData.js:3 ~ fetchExploreData ~ exploreData:",
    exploreData
  );

  const exploreDataJson = await exploreData.json();
  console.log(
    "🚀 ~ file: fetchExploreData.js:6 ~ fetchExploreData ~ exploreDataJson:",
    exploreDataJson
  );
  return exploreDataJson;
};
