import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/app/lib/dbConnect';
import { UserModel } from '@/app/models/users';
import { authentication, random } from '@/app/utils/authUtil';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, username } = req.body;

  await dbConnect();

  try {
      if (!email || !password || !username) {
        // If some data is missing in the request, the most appropriate HTTP status code to return would be 400 Bad Request. However, some developers prefer to use 422 Unprocessable Entity
        return NextResponse.json({success:false, message : "Email, username or password is missing"},{status: 400})
    }

    const existingUser = await UserModel.findOne({ email });

      if (existingUser) {
        //  major tech companies like Google and Facebook return a 200 OK with a message indicating that the email is already registered1. 
        // return NextResponse.json({success:false, message : "Email already exists!"},{status: 200})
        //   the proper code return for email already exists is 409.
        return NextResponse.json({success:false, message : "Email already exists!"},{status: 409})
    }

    const salt = random();
    const user = await UserModel.create({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
      return NextResponse.json({success:true, message:"Request processed successfully!", user:user}, {status:201})
  } catch (error) {
    console.error(error);
      return NextResponse.json({success:false, message : "Internal Server Error!"},{status: 400})
  }
}
