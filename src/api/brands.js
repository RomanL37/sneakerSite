export const fetchBrands = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/brands/');
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных брендов');
    }
    return await response.json();
  };