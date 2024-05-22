import { deleteUser } from "@/lib/action";
import { getUsers } from "@/lib/data";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div>
      <h1>users</h1>
      {users.map((user) => (
        <div className="" key={user.id}>
          <div className="">
            <Image
              src={user.img || "/noavatar.png"}
              alt={user.username}
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            {/* <form action={() => deleteuserWithId(user.id)}> */}
            <input type="hidden" name="id" value={user.id} />
            <button>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
