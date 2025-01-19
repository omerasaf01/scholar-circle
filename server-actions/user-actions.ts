"use server";

import { PrismaClient } from "@prisma/client"
import { data } from "autoprefixer";
import {createClient} from "@/utils/supabase/server";

const prisma = new PrismaClient();

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: {
      id: id
    }
  });
}

export const createUser = async ({email, name }: { email: string, name: string }) => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user?.id == null)
    return false;

  let user = await getUserById(data.user?.id);

  if (user == null)
    return false;

  await prisma.user.create({
    data: {
      id: data.user?.id,
      email: email,
      name: name,
    }
  });

  return true;
}
