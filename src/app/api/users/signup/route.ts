import { initMongoose } from '@/lib/mongoose';
import User from '@/models/User';
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from 'next/server';

initMongoose();

export async function POST(request: NextRequest) {
    try {
       const reqBody = await request.json();
       const {email, password, address} = reqBody;
       console.log(reqBody);

       const user = await User.findOne({email});

       if(user){
            return NextResponse.json({error: "User already exists. Please login"}, {status: 400});
       }

       const salt = await bcryptjs.genSalt(10);
       const hashedPassword = await bcryptjs.hash(password, salt);

       const newUser = await new User({
        email,
        address,
        password : hashedPassword,
       });

       const savedUser = await newUser.save();
        return NextResponse.json({message: "User successfully saved!"}, {status: 201});
        
    } catch (error: any) {
        console.log(error);  
        return NextResponse.json({error: error.message}, {status: 500}); 
    }
}

export async function GET(request: NextRequest) {
    
}

