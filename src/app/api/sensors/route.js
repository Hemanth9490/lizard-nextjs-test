import { connection } from '@/helpers/dbconnection';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const netnum = searchParams.get('netnum');
  try {
    const dbconnection = connection;
    const [rows] = await dbconnection.query(
      `select * from prod.sensor where netnum = ${netnum};`
    );

    return NextResponse.json({ rows });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error });
  }
}
