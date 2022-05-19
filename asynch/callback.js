const posts = [
  {
    title: "Post one",
    description: "This is a post one description",
  },
  {
    title: "Post two",
    description: "This is a post two description",
  },
];

getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.map((post) => {
      output = output + `<li>${post.title}</li>`;
    });
    document.getElementById("container").innerHTML = output;
  }, 1000);
};

createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    console.log(posts);
    callback();
  }, 4000);
};
getPosts();
let post = {
  title: "post 3 from user",
  description: "this is desc 3",
};
createPost(post, getPosts);
