export const fetchData = async (tags, price, subscription) => {
  const fetchResponse = await fetch(
    `http://localhost:3000/products?${tags ? `tags_like=${tags}` : ""}${
      subscription ? `&subscription=${subscription}` : ""
    }`
  );
  const json = await fetchResponse.json();
  return json.filter((i) => i.price <= (price !== null ? price : 10000));
};

export const fetchTags = async () => {
  const fetchResponse = await fetch(`http://localhost:3000/products`);
  const json = await fetchResponse.json();
  return json;
};
