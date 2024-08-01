const getAllCategory = async () => {
  const responses = await fetch("https://api.escuelajs.co/api/v1/categories");
  const JsonResponses = await responses.json();
  return JsonResponses;
};

export default getAllCategory;
