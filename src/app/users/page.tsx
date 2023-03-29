import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import { User } from "@/entities";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  //console.log('Hello') // Did you find where this appears?

  return (
    <section>
      <h2>Uživatelé</h2>
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
}
