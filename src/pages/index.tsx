import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function Home() {
  const urlBase = "https://randomuser.me/api/?results=";
  const [users, setUsers] = useState([]);
  const [userAmount, setUserAmount] = useState(2);
  
  useEffect(() => {
    async function fetchDataAmount() {
      const response = await fetch(`${urlBase}${userAmount}`);
      const responseAmount = await response.json();
      setUsers(responseAmount.results);
    }
    fetchDataAmount();
  }, [userAmount]);

  console.log(users)

  return (
    <>
      <Header />
    </>
  );
}
