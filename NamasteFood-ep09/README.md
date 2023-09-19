# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm ( written in C++ )
- Faster builds because of Caching
- Image optimization
- Minification of file
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential bundling
- Diagnostic
- Better Error handling
- HTTPs
- Tree Shaking - remove unused code

# Routing in web apps (2 Types)

- Client Side Routing
- Server Side Routing

# Single Responsibility Principle

- What the single-responsibility principle tells us is that each class or component should have a single purpose of existence.

- Components should do only one thing and do that well.
- This helps in maintaining the code in a modular way.
- Modularity means breaking down the code into smaller modules, so that code becomes more maintainable, reusable and testable.

# Let's learn about CUSTOM HOOKS.

- We use custom hooks to make our code more modular, to abstract the extra responsibility from the component to a different hook.
- Hooks are just utility functions.
- React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
- Creating a custom hook is not mandatory, but it is a good practice to make your code more modular ,readable and reusable.
- Let's consider the RestaurantMenu component. It has two main responsibilities:

  - Fetching the data from the API.
  - Displaying the data to the UI.

- Don't you think RestaurantMenu component is doing more than one thing? Yes, it is. It should only be concerned with displaying the data to the UI. Fetching the data from the API should be the responsibility of a different component.

- RestaurantMenu component does not need to worry about how the data is fetched. It should only be concerned about , i have got the resId, and i will give the resId to the custom hook and it will give me the data.
- RestaurantMenu does not need to worry about the implemenetation of the hook (how we are fetching the data), it is abstracted away from the component.
- Now suppose if there is an issue in fetching the data, we can easily debug it in the custom hook, without worrying about the component.

# Optimizing our app

- Chunking
- Code splitting
- Dynamic bundling
- Dynamic import
- On demand loading
- Lazy Loading ( When our app will load initially, our homepage will load, it will not load the code for grocery, Only when we go to our grocery page, then only the code for grocery will be loaded. )
- Also called on demand loading.
- Upon using lazy wecan see our component will give error, because as soon as we click on Grocery, it will take some time to fetch the data of grocery, react tries to render grocery and it is not there, So we use Suspense.
