// A user should be able to delete their own comments only.
// Things to consider:
// - How will a user know they can delete that comment?
// - How will a user know that a comment has been deleted?
// - It may take some time for API request to fulfil, how can we be sure that the user doesn't get impatient and try and send a second request before the response comes back?