import { useForm } from "react-hook-form";
import axios from "axios";

export default function Create() {
  const { register, handleSubmit } = useForm();

  const createUser = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("age", Number(data.age));
    formData.append("image", data.image[0]); // 👈 مهم جدًا

    try {
      await axios.post(
        `${import.meta.env.VITE_BURL}/users`,
        formData
      );
      alert("User created successfully");
    } catch (error) {
      console.log(error.response?.data);
      alert("Failed to create user");
    }
  };

  return (
    <form onSubmit={handleSubmit(createUser)} className="w-75 m-auto gap-3">

      <div className="form-floating mb-3">
        <input
          {...register("name", { required: true })}
          type="text"
          className="form-control"
          placeholder="name"
        />
        <label>Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          {...register("email", { required: true })}
          type="email"
          className="form-control"
          placeholder="email"
        />
        <label>Email</label>
      </div>

      <div className="form-floating mb-3">
        <input
          {...register("age", { required: true, valueAsNumber: true })}
          type="number"
          className="form-control"
          placeholder="age"
        />
        <label>Age</label>
      </div>

      <div className="mb-3">
        <input
          {...register("image", { required: true })}
          type="file"
          accept="image/*"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create User
      </button>

    </form>
  );
}
