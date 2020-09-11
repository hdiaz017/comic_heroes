export const queryString = (location) => {
   const locationArray = location.replace('?', '').split('&');
   let result = {};
   locationArray.forEach((e) => {
      const [key, value] = e.split('=');
      result = { ...result, [key]: value };
   });
   return result;
};
