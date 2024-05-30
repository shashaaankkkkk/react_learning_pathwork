export default function Object_array_ren(){
    const somehow= [{fname:"shashank",lname:"shekhar",age:"19", emoji:"😭"},{fname:"shekhar",lname:"shashank",age:"19",emoji:"💀"}]
    return(
        <div>
            <ul>
                {somehow.map((person)=>(<li key={person.fname}>{person.fname} {person.lname}{person.age}{person.emoji}</li>))}
            </ul>
        </div>
    )
} 

// here we learn how to render array of objects basically the list of objects and first we iterate it using map function then we call it using . 