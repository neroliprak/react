const getAllProducts = async () => {
  const responses = await fetch(
    "https://fake-store-api.mock.beeceptor.com/api/products"
  );
  const jsonResponses = await responses.json();
  return jsonResponses;
};

export default getAllProducts;
