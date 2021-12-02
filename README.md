
<details>
	<summary>
		<strong>Train of Thought</strong>
	</summary>

> I am trying to build to `resolveDay` and to that end the next piece that I think I need is `Bank`
> So I am working on that. **BUT** I still don't have a way to solve the global state issue, so I am not creating a `bankSlice`
> Rather I am defining the object that would be used in `createSlice` that way if I chose I can work it into a `globalSlice` with the other pieces.

- [x] how do i define selectors
- [x] define a selector that produces the point value of a pizza and amount of pizza
- [ ] should I use selectors in my unit tests?
- [ ] bank unit tests
- [x] create redux slice sandbox for experiments [redux/toolkit sandbox](https://codesandbox.io/s/beautiful-merkle-tw0lo?file=/src/store.js)
- [x] https://redux.js.org/understanding/history-and-design/middleware#the-final-approach
- [x] https://redux-toolkit.js.org/api/getDefaultMiddleware
</details>

<details>
	<summary>
		<strong>Create The Project</strong>
	</summary>

> I don't really want to get too bogged down in the infrastructure, like I would with Bulletproof, this is really to get the thing off the ground. because nothing is more valuable than just using the damn thing. So this is, "just enough to use it" which includes:

- [ ] create repo
- [ ] pick cloud place to work for now
- [x] use `vite` to create a project
- [x] add `readme.md`
- [ ] add `.gitignore`
- [x] add redux toolkit requirements
- [x] add Cypress for unit testing
- [ ] add the fun script to update deps if PRs Pass
- [ ] add .eslint
- [ ] configure prettier-eslint
- [ ] https://docs.cypress.io/guides/continuous-integration/github-actions?utm_source=Test+Runner&utm_medium=CI+Prompt+1&utm_campaign=GitHub&utm_content=Automatic
</details>

<details>
	<summary>
		<strong>Set Up the work</strong>
	</summary>

> This is going to be real TDD. which means I don't write code until there is absolutely no other option. That starts with the "definitions" changes I created in [[problem statement]]. For each entry I will:
- [ ] name the situation
- [ ] define the necessary types
- [ ] give a 1 line description that includes, in, out, why and possible variations.
- [ ] create unit test to exercise the situation.
- [ ] all tests will fail
</details>

<details>
	<summary>
		<strong>Get something on the page</strong>
	</summary>

> Using the unit tests as my strict guide I will start making them pass

- [ ] set up example with [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter)
- [ ] add redux dev tools
- [ ] can I use the redux dev tools as my UI?
- [ ] send "api" to the console
- [ ] subscribe to state change with `console.log`
- [ ] pass initial state
- [ ] pass toggle
- [ ] ...
</details>

<details>
	<summary>
		<strong>Connection</strong>
	</summary>

> Once I have had the satisfaction of getting work done, it's time to make it matter.
> I am going to use supabase as my data store so that I can access it anywhere

- [ ] read the docs
- [ ] update my unit tests to mock supabase (if necessary)
- [ ] persist changes to supabase
- [ ] read state from supabase on start
- [ ] update from supabase when there's a change
</details>

<details>
	<summary>
		<strong>Wishlist</strong>
	</summary>

> This is going to be everything that I would like to do
- [ ] ...

</details>
---
/**
* bank: 0
* - [x] task: [ 1, 2, 3, 4, 5, 🍕]
*
* resolve
*
* bank: 1
* - [ ] task: [ x, 2, 3, 4, 5, 🍕]
*
* when a day resolves
  if a task was marked complete
  then the tasks streak is incremented
  and the task is marked active
  and points are added to the bank
  */
  // I need a way to check if a task was complete
  // I need a way to increment the streak
  // I need a way to mark a task as active
  // I need a way to add a certain amount of points to the bank

/**
* bank: 0
* - [x] task: [ x, 2, 3, 4, 5 🍕]
*
* resolve
*
* bank: 2
* - [ ] task: [ x, x, 3, 4, 5 🍕]
*
* when a day resolves
  if a task was marked complete
  and the task had an active streak
  then the tasks streak is incremented
  and the task is marked active
  and points are added to the bank
  */

/**
* bank: 0
* - [x] task: [ x, x, x, x, x 🍕]
*
* resolve
*
* bank: 0 | 🍕
* - [ ] task: [ 2, 3, 4, 5, 6 🍕]
*
* when a day resolves
  if a task was marked complete
  and the task was at the last entry in the iteration
  then the active streak is reset
  and a special value is added to the bank
  and the entire streaks value is incremented
  */

/**
* bank: 0
* - [ ] task: [ 1, 2, 3, 4, 5, 🍕]
*
* resolve
*
* bank: 0
* - [ ] task: [ 1, 2, 3, 4, 5, 🍕]
*
* When the day resolves
* 	if no tasks were marked complete
	 then no tasks are toggled
	 and no points are added to the bank
	 */

/**
* bank: 0
* - [ ] task: [ x, 3, 4, 5, 6 🍕]
*
* resolve
*
* bank: 0
* - [ ] task: [ 1, 2, 3, 4, 5 🍕]
*
* When the day resolves
  if no tasks were marked complete
  and a task had an active streak
  then the active streak is reset
  **/
