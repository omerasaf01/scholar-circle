import CompleteSignup from "@/components/sections/complete-signup";
import { getUserById } from "@/server-actions/user-actions";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    return redirect("/sign-in");
  }

  let user = await getUserById(data.user?.id.toString() ?? "");
  console.log(user);
  return (
    <div className="col-span-12 mt-3 flex-1 w-full flex flex-col gap-12">
      <CompleteSignup status={user == null} />
    </div>
  );
}

