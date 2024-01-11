// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import dbconnect from '../../../../utils/dbConn';
import Contact from '../../models/contact';

export const POST = async (req, res) => {
    const body = await req.json();
    console.log(body);

    try {
        const db = await dbconnect(); // Use the correct function name
        console.log(db);
        // Your database-related logic here using 'db'

        await Contact.create(body);

        return NextResponse.json(
            { message: 'sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing POST request:', error);

        return NextResponse.json(
            { message: 'Error processing the request' },
            { status: 500 }
        );
    }
};





