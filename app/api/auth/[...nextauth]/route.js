import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({


    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })

    ],
    /*
    callbacks: {


            
        async session({session}) {

            const sessionUser = await User.findOne({
                email: session.User.email
            })
            session.User.id = sessionUser._id.toString();

            return session;

        },
        async signIn({profile}) {
          try {
                await connectToDB();
                const userExist = await User.findOne({
                    email:profile.email
                });
                if(!userExist) {
                    await User.create({
                        email:profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }

            }
            catch (error) {
                console.log(error)
            }
        }

    }*/

});

export { handler as GET , handler as POST } ;