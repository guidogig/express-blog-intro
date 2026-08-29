fetch("/bacheca")
  .then(res => res.json())
  .then(posts => {
    return (document.body.innerHTML = posts
      .map(
        post =>
          `
            <h2>${post.id}) ${post.title}</h2>
            <img src='/${post.img}' alt='${post.title}'>
            <p>${post.content}</p>
          `,
      )
      .join(""));
  });
