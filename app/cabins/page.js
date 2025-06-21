import Counter from "../_components/Counter";

export const metadata = {
    title:"Guest Area"
}

export default async function Page(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);  

    return <div>
        <h1>Cabins in Oasis</h1>
        <ul>{data.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
        </ul>

        <Counter users={data}/>
        </div>
}