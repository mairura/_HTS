import sanityClient from "@/libs/sanity";
import { signUpHandler } from "next-auth-sanity";

//TODO: Fix this sanityClient error in the console
export const POST = signUpHandler(sanityClient)