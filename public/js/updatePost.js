let selectedPost;
let selectedCardBody;
let selectedUpdatePost;
let selectedAddComment;
let selectedDeletePost;

const createPostInput = () => {
  const form = document.createElement('form');
  const titleInput = document.createElement('input');
  const bodyInput = document.createElement('textarea');
  const submit = document.createElement('button');


  form.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4')
  titleInput.setAttribute('placeholder', 'Title')
  titleInput.setAttribute('class', 'form-control');
  bodyInput.setAttribute('placeholder', 'Add Comment Here')
  bodyInput.setAttribute('class', 'form-control');
  submit.setAttribute('class', 'btn btn-primary mt-2');


  submit.textContent = "Update";
  selectedUpdatePost.style.display = 'none';
  selectedDeletePost.style.display = 'none';
  selectedAddComment.style.display = 'none';

  selectedCardBody.appendChild(form);
  form.appendChild(titleInput);
  form.appendChild(bodyInput);
  form.appendChild(submit);
  

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    const id = selectedPost;
    if (title) {
      const response = await fetch('/post/updatePost', {
        method: "PUT",
        body: JSON.stringify({ id, title, text: body }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace('/user/dashboard');
      } else {
        alert('Error');
      }
    }
  });
}


$(document).on('click', "button.update-post", (event) => {
  selectedPost = event.target.getAttribute('data-post_id');
  selectedCardBody = document.querySelector(`.card[data-post_id="${selectedPost}"] .card-body`)
  selectedUpdatePost = document.querySelector(`.update-post[data-post_id="${selectedPost}"]`);
  selectedAddComment = document.querySelector(`.add-comment[data-post_id="${selectedPost}"]`)
  selectedDeletePost = document.querySelector(`.delete-post[data-post_id="${selectedPost}"] `);
  createPostInput();
})


