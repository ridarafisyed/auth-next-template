import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import dbConnect from '@/app/lib/dbConnect'
import { UserModel } from '@/app/models/users'
import { authentication, random } from '@/app/utils/authUtil';

// route for login 
export async function POST(req: NextApiRequest, res: NextResponse) {
    console.log("here in login")
    const { email, password } = req.body;
    await dbConnect();
    try {
        if (!email || !password) {
        // If some data is missing in the request, the most appropriate HTTP status code to return would be 400 Bad Request. However, some developers prefer to use 422 Unprocessable Entity
            return NextResponse.json({success:false, message : "Email or password is missing"},{status: 400}) 
        }

        const user = await UserModel.findOne(email).select('+authentication.salt +authentication.password');

        if (!user) {
            // If a user tries to log in with an email that does not exist in the system, the most appropriate HTTP status code to return would be 401 Unauthorized, However, some developers prefer to use 403 Forbidden.
            return NextResponse.json({success:false, message : "Invalid Authentication Details."},{status: 400})
        }
        if (user && user.authentication) {
            const userSalt:string|any = user.authentication.salt
            const expectedHash = authentication(userSalt, password);
            
            if (user.authentication.password != expectedHash) {
                return NextResponse.json({success:false, message : "Invalid Authentication Details."},{status: 400})
            }

            const salt = random();
            user.authentication.sessionToken = authentication(salt, user._id.toString());

            await user.save();
            cookies().set('BLOGGING-APP-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/' });
            return NextResponse.json({success:true, message : "Request processed successfully!"},{status: 200})
        }

    
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({success:false, message : "Internal Server Error!"},{status: 500})
  }
}