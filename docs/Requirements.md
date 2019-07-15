### Requirements (functional):

- As a user I want to vote for who I think is going to win a race.
- As a user I want to be able to change my vote after I have already voted.
- As a user I want to be able to see what I have voted for a certain run.
- As a broadcaster I want to be able to get the current status in votes for a certain run.

### Requirements (non functional):

- Users must be authenticated to vote as to prevent spam.
- Users should not be able to see what users voted for what race.
- Vote data should be recoverable even after the program has crashed.

### MVP (minimal viable product)

The minimal viable product will include a way for users to vote (doesn't necessarily have to have user authentication) and a way to fetch the amount of votes via an API for certain runs.

A nice but not must have addition would be a nicely formatted HTML page that shows a percentage bar with the votes.
