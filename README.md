## Requirements

- Node 10+ (check with `node --version`)
- NPM 6+ (check with `npm --version`)

## Running the project

- `npm install` to get all of the dependencies
- `npm start` to run the API and webpack servers

A webpage should open up for you automatically. Hot module replacement is configured, so just save your code and changes should show up!

## Core Goals

- [x] Write clear and concise code that succesfully compiles without errors (compile time or run time)
- [x] Implement the wireframes at a minimum as shown
  - You can change things to improve user experience and interface as you see fit, as long as the app functions as expected
- [x] Add some basic styling to the application to make it usable
- [x] Handle any server communication errors that could come from regular user interaction, ideally informing the user of the errors
  - e.g. going offline, messages failing to send
- [x] Work within the existing codebase to meet the requirements
  - Minor alterations to the existing structure are OK, but you should not be re-writing the whole app or server from the ground up
- [x] Implements client-side validation:
  - Messages must be between 1 and 200 characters
  - Usernames must be alphanumeric and between 3 and 20 characters
  - The user should be informed when their input is invalid

## Stretch Goals

If you finish with some time to spare and want to add a little flair, you could implement the following:

- Make the username persist between sessions
- Add HTML5 notifications
- Implement rate limiting to prevent spamming the chat
- Go all out on the styling (animations are a plus!)
- Add a custom feature of your own choosing (Be sure to describe it to us!)
