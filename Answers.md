1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

 Map B. Object.assign C. FILTER D. {...spread} || Object.assign

 Actions - As the name implies are the actual actions that we want to perform on the data. B. Reducers - Reducers take the actions and perform the changes to state that one wants. C. Store - The storage of the information in redux. "The application level state".

 Single Source of Truth - The store is called this because it holds all of the state data for the entire application.

Application state is basically on a "Global" scope for the application. Any component can have access to it if provided. Component state exsists only in that component and must be passed down for others to have access to it.

Middleware - Intercepts the actions before they get to the reducer and provides added functionallity to them if needed.

Connect.
