function App() {
const baseUrl = import.meta.env.VITE_BASE_URL
const endPoint = "Clients"

const getClients = async ()=>{

    const url= `${baseUrl}${endPoint}`
    console.log(url)
    const result= await fetch(url)
    const data = result.json()
    console.log(data)
}
useEffect(()=>{
getClients()
},[])

return(
    <div>TableClient</div>
)
}

export default App