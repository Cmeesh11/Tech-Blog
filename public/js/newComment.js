
const createCommentInput = () => {
  const form = document.createElement('form');
  const input = document.createElement('textarea');
  const submit = document.createElement('button');

  form.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4')
  input.setAttribute('placeholder', 'Add Comment Here')
  input.setAttribute('class', 'form-control');
  submit.setAttribute('class', 'btn btn-secondary');

  submit.textContent = "Submit";
  selectedAddComment.style.display = 'none';
  selectedUpdatePost.style.display = 'none';
  selectedDeletePost.style.display = 'none';


  selectedCardBody.appendChild(form);
  form.appendChild(input);
  form.appendChild(submit);

  submit.addEventListener('click', async (event) => {
    const comment = input.value.trim();
    const date = new Date();
    if (comment) {
      const response = await fetch('/user/comment', {
        method: "POST",
        body: JSON.stringify({ post_id: selectedPost, text: comment, date }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace('/user/dashboard');
      } else {
        alert('Error');
      }
    }
  })
}


$(document).on('click', "button.add-comment", (event) => {
  selectedPost = event.target.getAttribute('data-post_id');
  selectedCardBody = document.querySelector(`.card[data-post_id="${selectedPost}"] .card-body`)
  selectedUpdatePost = document.querySelector(`.update-post[data-post_id="${selectedPost}"]`);
  selectedAddComment = document.querySelector(`.add-comment[data-post_id="${selectedPost}"]`)
  selectedDeletePost = document.querySelector(`.delete-post[data-post_id="${selectedPost}"] `);
  createCommentInput();
})