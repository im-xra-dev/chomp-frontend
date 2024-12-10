# Route handling of pages

These are the different URL routes available to the user. Each page is intended to either act as 
an input, allowing the user to enter data into the system, or an output, which displays information
in the system.

Input pages use the content-mid preset. This encapsulates all the relevant fields, ensuring the user 
can see everything without needing to scroll down the page.

Output pages use the content-full preset. This allows the user

> ## / (output page)
> The home page contains a PostList which queries the users customised home feed.

> ## /profile (output page)
> The profile page contains a profile-sidebar and a PostList containing their posts
> It shows the currently logged in users data.
> The profile-sidebar contains:
> - the users profile picture & display name
> - the users score & total posts
> - the users bio
> - the users badges
> - a button to edit the profile
> > #### /profile/:uname (output page)
> > renders the profile page of the given user
> >
> > the edit profile button is replaced by the un/follow button

> ## /s/:secid (output page)
> The sec page contains a sec-sidebar and a PostList for the generated feed of the current sec
> The sec-sidebar contains:
> - The sec name
> - The total members and posts
> - The description for the sec
> - The un/follow button

> ## /posts/:postid (output page)
> The posts page will load the content of a given post, with all its comments below it.
> A button will also be provided for leaving a comment

> ## /recipe/
> Redirects to **/recipe/new**
>
> possibly all recipe subpages contain a sidebar for navigating between the stages
> > #### /recipe/new (input page)
> > This page gets all the required information for a new post
> > - Title and description
> > - Cook time
> > - Serving Size
> > - Cost ($, $$, $$$)
> > - Meal type (breakfast, lunch, dinner, snack)
> > - Relevance Tags
>
> > #### /recipe/ingredients (input page)
> > This page collects information about the ingredients and dietry requirements
> > - Ingredients, qty and measurement type
> > - vegan/ vegetarian checkboxes (with others to be added later)
>
> > #### /recipe/finalize (input page)
> > This page allows the user to finalize their recipe by adding:
> > - The display image for this recipe
> > - A link to their instructions OR the instructions directly to CHOMP

> ## /login (input page)
> Allows the user to enter their username and password
> Displays any errors from the URLs **&err-msg=** parameter if it is present
> Button to reset password and links to privacy policy, TOS and signup page

> ## /signup (input page)
> Allows the user to enter their desired username and password
> Displays any errors from the URLs **&err-msg=** parameter if it is present
> Button to reset password and links to privacy policy, TOS and login page

> ## /post (input page)
> Allows the user to create a new post on the website
> - requires a title
> - optional content (supporting markdown)
> - requires sec to post to

> ## /comment?postid=:postid (input page)
> Allows the user to create a new post on the website
> - requires content (supporting markdown)

> ### todo: document the following
> mealplan flow
> 
> profile picture editor
>
> welcome screen
>
> search page