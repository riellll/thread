import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/model/User";
// import connect from "@/utils/db";
// import bcrypt from "bcryptjs";

import { NextAuthOptions } from "next-auth";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
  
      // console.log(user);
        if (user?.id) {
           token.id = user.id
       }
      //  if (user?.userName) {
      //      token.userName = user.userName;
      //  }
       return token 
    },
    async session({session, token}) {
        session.user.id = token.id;
        // session.userName = token.userName;
        // console.log(token,session);
        return session;
    }
  },
 /*  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      try{

        const [sessionUser] = await User.find({ email: session.user.email });
        //   console.log(sessionUser);
        session.user.id = sessionUser._id.toString();
        console.log(session);
  
        return session;
      }catch(error){
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connect();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });
        // console.log({ account, profile, user, credentials });
        // if not, create a new document and save user in MongoDB
        // console.log(profile)
        if (!userExists) {
          await User.create({
            name: profile.name.replace(" ", "").toLowerCase(),
            email: profile.email,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  }, */
  pages: {
    error: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

