# ChatApp

<img src="https://i.ibb.co/b7R4Mnc/Screen-Shot-2020-12-28-at-12-26-32-PM.png">

## Requirements

- Node 10+ (check with `node --version`)
- NPM 6+ (check with `npm --version`)

## Running the project

- `npm install` to get all of the dependencies
- `npm start` to run the API and webpack servers

A webpage should open up for you automatically.

## Core Goals

- [x] Write clear and concise code
- [x] Implement the wireframes
- [x] Basic styling
- [x] Handle any server communication errors that could come from regular user interaction, ideally informing the user of the errors
  - e.g. going offline, messages failing to send
- [x] Work within the existing codebase to meet the requirements
  - Minor alterations to the existing structure are OK, but you should not be re-writing the whole app or server from the ground up
- [x] Implements client-side validation:
  - Messages must be between 1 and 200 characters
  - Usernames must be alphanumeric and between 3 and 20 characters
  - The user should be informed when their input is invalid

## Stretch Goals

- [ ] Make the username persist between sessions
- [ ] Add HTML5 notifications
- [ ] Implement rate limiting to prevent spamming the chat
- [x] Go all out on the styling (animations)
