export default function Array_ren(){
    const somehow2 =["apple","tree","something"]
    return(
        <div>
       <ul>
        {somehow2.map(somehow2=><li>{somehow2}</li>)}</ul>
        </div>
        )
}
// here we learn how to use map function to iterate the list and render it to the app
//  map() function executes a specified function for each item in an iterable. The item is sent to the function as a parameter.
// Arrow function {()=>} is concise way of writing JavaScript functions in shorter way. Arrow functions were introduced in the ES6 version. 