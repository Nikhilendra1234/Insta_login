# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<h1>
  Frontend of the insta login page using React
</h1>
<h3>project set up</h3>
<ol>
  <li>create project -  npm create vite@latest</li>
  <li>go to project folder - cd project name</li>
  <li>install all the dependencies - npm install</li>
  <li>then run the project - npm run dev</li>
</ol>
<h3>Input component</h3>
<p> create an input component separatelly so that it can be used in both login an signup page so that the component reuseability can be achived.in this functional component also used useState() prebuild Hook
for the continues change of the value in the input element.used onChange method when any changes occurred in the input element then the setter method runs in a callback which set the state of the value of the input component.</p>

<h3>Button component</h3>
<p>created an button componet separatelly so that it can be used in both login an signup page so that the component reuseability can be achived. </p>

<h3>Login component</h3>
<p>Login component is created of multiple input component and button compoent which are imported then it is also exported</p>

<h3>signup component</h3>
<p>signu[ component is created of multiple input component and button compoent which are imported then it is also exported</p>

<h3>Layout componet</h3>
<p>Both the login and signup compoent imported to the layout component and so that in a single both can be rendered conditionally.for the conditional rendering of the component used useState() hook which
initially stores the true value which is used to render the login page. on the click of the signup a method handleOnClick in which the setter method change the boolean value and when the boolean value changed the  page renders again due to the useEffect() Hook and this time it renders with signup page and this process continues</p>

<h3>App component</h3>
<p>At last the layout component imported to the app component and rendered.</p>

<h3>visist site using netlify <a href="https://nikhil-insta-login.netlify.app">visit site</a></h3>
