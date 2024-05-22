import AdminPostForm from "@/components/adminPostForm/AdminPostForm";
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import AdminUsers from "@/components/adminUsers/AdminUsers";
import { auth } from "@/lib/auth";
import { Suspense } from "react";

const AdminPage = async () => {
  const session= await auth()
  return (
    <div>
      <div className="">
        <div className="">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="">
          <AdminPostForm userId= {session.user.id} />
        </div>
      </div>
      <div className="">
        <div className="">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="">
          <AdminUserForm userId= {session.user.id}/>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
