// given an array of user objects with `name` and `posts`, return an array of objects where each object contains the user's name and an array of post titles
// [{name: "Alice", posts: [{title: "Post 1"}, {title: "Post 2"}]}, {name: "Bob", posts: [{title: "Post 3"}]}] 
// => [{name: "Alice", posts: ["Post 1", "Post 2"]}, {name: "Bob", posts: ["Post 3"]}]

const nameAndPost = [{name: "Alice", posts: [{title: "Post 1"}, {title: "Post 2"}]}, {name: "Bob", posts: [{title: "Post 3"}]}];

const allTitles = function(post) {
  return
}

const getUserPostTitles = function (users) { 
  const object = {};
  object["name"] = users.name;
  object["posts"] = users.post.map(allTitles);
  return object;
};

nameAndPost.map(getUserPostTitles);