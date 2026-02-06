import { useEffect, useState } from "react";
import axios from "axios";

export default function usefath(){
    const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BURL}/users`);
        setUsers(response.data?.users || []);
      } catch (err) {
        console.error(err);
        setError("فشل في جلب المستخدمين");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);
    return {users , loading , error}
}