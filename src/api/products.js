const BASE_URL = process.env.REACT_APP_PATH_URL_API;

export const fetchProducts = async () => {
    const response = await fetch(`${BASE_URL}/api/model-sneakers/`);
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных продуктов');
    }
    return await response.json();
  };