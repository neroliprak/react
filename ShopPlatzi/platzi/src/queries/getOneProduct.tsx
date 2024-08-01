const getOneProduct = async (id) => {
  const responses = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  const jsonResponses = await responses.json();
  return jsonResponses;
};

export default getOneProduct;
