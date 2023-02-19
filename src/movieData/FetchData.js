export const getData = () => {
  fetch("movies.json").then(function (response) {
    console.log(response);
    return response.json;
  });
};
