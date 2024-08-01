const getAllProducts = async () => {
  const responses = await fetch("https://api.escuelajs.co/api/v1/products");
  const jsonResponses = responses.json();
  return jsonResponses;
};

export default getAllProducts;
