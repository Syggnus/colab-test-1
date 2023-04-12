import { User } from "@/interface/IRandomuser";
import { Button, Card, Tooltip } from "flowbite-react";
import Image from "next/image";
import { ReactEventHandler } from "react";

interface PropsCard {
  users: User[]
  handleLoadMoreUsers: ReactEventHandler
}

export default function ListCard({users, handleLoadMoreUsers}: PropsCard) {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 grid-rows-4 gap-4">
          {users.map((user: User) => {
            return (
              <>
                <div className="max-w-sm">
                  <Card>
                    <div className="flex flex-col items-center pb-10 px-4 pt-4">
                      <Image
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src={user.picture.large}
                        alt="Bonnie image"
                        width={150}
                        height={150}
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {user.name.first} {user.name.last}
                      </h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {user.gender == "female" ? "Feminino" : "Masculino"} -{" "}
                        {user.dob.age} anos
                      </span>
                      <div className="mt-4 flex space-x-3 lg:mt-6">
                        <Tooltip
                          trigger="hover"
                          content={`Endereço: ${user.location.street.name}  ${user.location.street.number}, ${user.location.city} - ${user.location.state} - ${user.location.country}`}
                        >
                          <div className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Localização
                          </div>
                        </Tooltip>
                        <Tooltip
                          trigger="hover"
                          content={`Telefone: ${user.phone} - Celular: ${user.cell}`}
                        >
                          <div className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            Contato
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-8 mb-10">
          <Button onClick={handleLoadMoreUsers}>
            Carregar Mais Usuários
          </Button>
        </div>
      </div>
    </>
  );
}
