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

createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("Err!!!! there was something wrong");
      }
    }, 2000);
  });
};
getPosts();
let post = {
  title: "post 3 from user",
  description: "this is desc 3",
};
createPost(post)
  .then(getPosts)
  .catch((error) => console.log(error));
