export default function (posts = [], action) {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_CREATE":
      return posts;
    default:
      return posts;
  }
}
