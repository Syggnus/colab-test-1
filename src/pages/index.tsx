import ListCard from "@/components/ListCard";
import FooterContainer from "@/components/footer";
import Header from "@/components/header";
import { MultipleRandomUser, User } from "@/interface/IRandomuser";
import { useEffect, useState } from "react";

export default function Home() {
  const urlBase = "https://randomuser.me/api/?results=";
  const [users, setUsers] = useState<User[]>([]);
  const [userAmount, setUserAmount] = useState(16);

  useEffect(() => {
    async function fetchDataAmount() {
      const response = await fetch(`${urlBase}${userAmount}`);
      console.log(response);
      const responseAmount: MultipleRandomUser = await response.json();
      setUsers(responseAmount.results);
    }
    fetchDataAmount();
  }, [userAmount]);

  function handleLoadMoreUsers() {
    setUserAmount(userAmount + 16)
  }

  return (
    <>
      <Header />
      <ListCard users={users} handleLoadMoreUsers={handleLoadMoreUsers} />
      <FooterContainer/> 
    </>
  );
}
