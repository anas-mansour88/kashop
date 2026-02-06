import axios from "axios";

export default function User({ item }) {
    const handledelet=async(id)=>{
        const delet=await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`)
         window.location.reload();

    }
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.imageUrl} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.age}</p>
        <button onClick={()=>handledelet(item.id)} className="btn btn-danger" >delete</button>
      </div>
    </div>
  );
}
