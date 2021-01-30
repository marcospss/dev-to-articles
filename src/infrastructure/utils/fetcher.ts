const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url);
  if (!response?.ok) {
    throw new Error('404 - Not Found');
  }
  return response?.json();
};

export default fetcher;
