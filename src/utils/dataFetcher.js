// inside dataFetcher.js
export const fetchTmuxData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export const validateData = (data) => {
    // Validates the structure of the data
    // Returns true if valid, throws error if not
  };