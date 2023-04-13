
$(document).on("click", "button.delete-post", async (event) => {
  selectedPost = event.target.getAttribute('data-post_id');
  try {
    const response = await fetch(`/post/${selectedPost}`, {
      method: "DELETE",
    });
    
    if (response.ok) {
      document.location.replace("/user/dashboard");
    } else {
      throw new Error("Failed to delete post");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to delete post. Please try again later.");
  }
});