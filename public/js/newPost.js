const newPostButton = document.querySelector("#new-post");
const body = document.querySelector("#container");

const generateForm = () => {
  // Creating form
  const form = document.createElement("form");
  const titleDiv = document.createElement("div");
  const contentDiv = document.createElement("div");
  const titleLabel = document.createElement("label");
  const contentLabel = document.createElement("label");
  const titleInput = document.createElement("input");
  const contentInput = document.createElement("input");
  const postButton = document.createElement("button");

  titleDiv.setAttribute("class", "mb-3");
  titleLabel.setAttribute("for", "title");
  titleLabel.setAttribute("class", "form-label");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("class", "form-control");
  titleInput.setAttribute("id", "title");
  contentDiv.setAttribute("class", "mb-3");
  contentLabel.setAttribute("for", "content");
  contentLabel.setAttribute("class", "form-label");
  contentInput.setAttribute("type", "text");
  contentInput.setAttribute("class", "form-control");
  contentInput.setAttribute("id", "content");
  postButton.setAttribute("class", "btn btn-primary");

  titleLabel.textContent = "Title";
  contentLabel.textContent = "Content";
  postButton.textContent = "Post";
  newPostButton.remove();

  body.appendChild(form);
  form.appendChild(titleDiv);
  form.appendChild(contentDiv);
  form.appendChild(postButton);
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);
  contentDiv.appendChild(contentLabel);
  contentDiv.appendChild(contentInput);

  postButton.addEventListener("click", async () => {
    let titleValue = titleInput.value;
    let contentValue = contentInput.value;

    if (titleValue && contentValue) {
      const response = await fetch("/post/newPost", {
        method: "POST",
        body: JSON.stringify({ title: titleValue, text: contentValue }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace("/user/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  });
};

newPostButton.addEventListener("click", generateForm);
