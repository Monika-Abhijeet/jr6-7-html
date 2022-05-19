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
      const error = false;
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

async function init() {
  await createPost(post);
  getPosts();
}

init();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "promise1 success");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "promise2 failure");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "promise3 success");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((errors) => console.log(errors));
