## Usage

```
yarn install
yarn start
open http://localhost:3000
```

## Tasks

- Please add pagination support to the list when there are more than 2 entries
- Please add option to select sex of a friend male/female and display it
- Please add tests using your preferred testing tool (jest, mocha, should.js ...)

## Objectives

- You have received a working example so please do not upgrade any packages unless you really have to.
- Please check for small things like syntax errors, since details matter.
- Please deliver something that works, non working project is an automatic disqualification

## Notes

### General information on the development

- I have changed, as requested, the versions of existing libraries
- I did install some new libraries though, especially in the area of testing
- Of what I have installed:
  - reselect: This is a library that makes it very comfortable to get redux state into components. It would have worked without (as was already implemented by directly accessing state) but reselect comes with a number of benefits.
  - prop-types: This was part of React 15, but React 15 already asked developers to extract prop-types into a separate library because it has been removed from React 16.
  - enzyme, enzyme-adapter-react-15 and react-test-renderer: Those are testing libraries that work nicely with the already given library Jest.
- I took the libery of adding a .prettierrc file to the root to unify the coding style. I agree on the statement that coding quality matters and prettier has been a beloved companion since its first release.
- All components have been improved on code quality and ES6 standards, also they have been migrated to use PureComponent instead of Component.
- The initial project structure (functional separation) has been refactored to a component based structure, as is promoted by Dan Abramov and utlized in his react-boilerplate repository.

### Regarding the tasks

#### Pagination

- The pagination was implemented by two buttons with which one can move back and forth.
- In the app state one can now define how many items can be seen on one page.

#### Select Sex

I was a bit unsure if I understood the task correctly. What I took from the task was that there should be some means to define the sex. This should then be stored and changeable. And, of course, one should be able to see the sex.

- The FriendItem is now clickable. Doing so will show a new section that contains the sex.
- Setting the sex is stored in the state.

#### Testing

As can be seen in the coverage report I did not succeed in 100% test coverage. But I tried my best in the time given :)
