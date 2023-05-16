import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { password } from "@/databaseconfig/config";
import axios from "axios";
import mysql from "mysql";
import config from "../../../databaseconfig/config";

const executeQuery = (conn, query) => {
  return new Promise((resolve, reject) => {
    conn.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};


const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
        async authorize(credentials) {
          const conn = mysql.createConnection(config);
  
          try {
            const results = await executeQuery(
              conn,
              `SELECT * FROM users WHERE email = '${credentials.email}' AND password = '${credentials.password}'`
            );
            conn.end();
  
            if (results.length === 0) {
              throw new Error("Invalid login");
            } else {
              const user = results[0];
              return { id: user.id, email: user.email, name: user.name };
              console.log(user);
            }
          } catch (err) {
            console.log(err);
            conn.end();
            throw new Error("Internal server error");
          }
        },
      }),
    ],
    
    jwt: {
      secret: "1234",
    },
    session: {
      jwt: true,
    },
    callbacks: {
      async jwt(token, user) {
        if (user) {
          token.id = user.id;
          token.email = user.email;
        }
        return token;
      },
      async session(session, token) {
        if (token) {
          session.user = { id: token.id, email: token.email };
        }
  
        return session;
      },
    },

    
  };

  export default (req, res) => NextAuth(req, res, options);