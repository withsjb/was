import { useRouter } from "next/router";

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;
  console.log(router.query);

  return (
    <div>
      <h1>UserProfile</h1>
      <p>Hello {username}</p>
    </div>
  );
}
