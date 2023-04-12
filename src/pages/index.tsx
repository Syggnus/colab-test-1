import ListCard from "@/components/ListCard";
import Header from "@/components/header";
import { MultipleRandomUser, User } from "@/interface/IRandomuser";
import { useEffect, useState } from "react";

export default function Home() {
  const urlBase = "https://randomuser.me/api/?results=";
  const [users, setUsers] = useState<User[]>([]);
  const [userAmount, setUserAmount] = useState(10);

  useEffect(() => {
    async function fetchDataAmount() {
      const response = await fetch(`${urlBase}${userAmount}`);
      console.log(response);
      const responseAmount: MultipleRandomUser = await response.json();
      setUsers(responseAmount.results);
    }
    fetchDataAmount();
  }, [userAmount]);

  return (
    <>
      <Header />
      <ListCard users={users} />
    </>
  );
}
