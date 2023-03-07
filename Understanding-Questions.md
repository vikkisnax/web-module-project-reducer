# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.

- - App file
- there's an onClick event handler that dispatches the action type "ADD_ONE" if the button is clicked
- in the onClick, the {} in dispatch is the ACTION OBJECT
- the reducer function gets called

- - action file
- Actions tell the reducer function what event just took place and tells it how to update state based on that event/action. Must be objects and have a 'type' property. can also have a payload/data property
- addOne returns the type property, ADD_ONE, so go to the reducer to see what it does.

- - reducers file
- this handles the action
- there is a case for each action type that could be passed into the reducer (it's 'action' param)
- IF the action.type equals the ADD_ONE case (so, if ADD_ONE, then...), we do what's in the return --> spread/make a copy of the state (which is the initialState/state) and update the 'total' property... we add one to the total property in the initialState/state
- so we'll get a new state object bc of the ...

- - App file
- We passed in a 'value' prop to the TotalDisplay component.
- That 'value' prop has the value for state.total -- which we updated above
- - TotalDisplay shows the total plus 1.

-
-

- reference: https://youtu.be/-CvvExOPfj8?t=5308

- https://www.notion.so/chocolate-chip-cookie-8415/The-Reducer-Pattern-438064412455435da21125ab71b50e4c?pvs=4#0cdbd5cab8234dbe8d36fa9843066593 -> action def

- how things work https://youtu.be/-CvvExOPfj8?t=5832
