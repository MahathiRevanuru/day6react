import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<p><b>1.What is an event in react?</b></p>
<p>An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.
An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.
Handling events with react have some syntactic differences from handling events on DOM. These are:
1.React events are named as camelCase instead of lowercase.
2.With JSX, a function is passed as the event handler instead of a string.
</p>
<p><b>2.What is memory leak and how to overcome?</b></p>
<p>Memory leak occurs when programmers create a memory in heap and forget to delete it. 
The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory. Eventually, in the worst case, too much of the available memory may become allocated and all or part of the system or device stops working correctly, the application fails, or the system slows down vastly .
Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate.</p>
<p><b>3.Do you prefer function-based or class component and why ?</b></p>
<p>Class Component: This is the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application).
Functional Components: Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function.
so it is preferd to use functional component than that of class component because the babel traspiler code will aslo easily understandable by user for fc,not for cc,
and in future they r going to dimnish the cc so it is better practice if we use fc more than cc.
</p>
<p><b>4.Explain reducer as pure function in redux</b></p>
<p>USES OF REDUX: With the help of redux it is easy to manage state and data. As the complexity of our application increases. At the start, it is hard to understand but it really helps to build complex applications. In starting, it feels like a lot of work, but it is really helpful.
This was the small brief about redux. Now, we will discuss the reducer function.</p>
<p><b>5.Why do we use redux thunk?</b></p>
<p>. Thunk allows us to dispatch actions manually, which gives us the power to incorporate some logic or run some asynchronous code before dispatching an action. The function returned from action is called a thunk function which is called with two arguments : 
1. dispatch: It is a method used to dispatch actions, that can be received by reducers. 
2. getState: It gives access to store inside the thunk function.</p>
<p><b>6.What do you know about NPM?</b></p>    
<p>npm is the world's largest Software Registry.
The registry contains over 800,000 code packages.
Open-source developers use npm to share software.
Many organizations also use npm to manage private development.</p>


</div>
  );
}

export default App;
