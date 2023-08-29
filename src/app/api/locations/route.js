import { connection } from '@/helpers/dbconnection';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const netnum = searchParams.get('netnum');
  try {
    const dbconnection = connection;
    const [rows] = await dbconnection.query(
      `SELECT *, (SELECT count(*) FROM prod.location WHERE parentId = l2.id) AS childCount FROM prod.location l2 WHERE netnum =  ${netnum} UNION SELECT *, (SELECT count(*) FROM prod.location WHERE parentId = l1.id) AS childCount FROM prod.location l1 WHERE parentId = (SELECT id FROM prod.location WHERE netnum = ${netnum});`
    );
    const subLocationsList = [];
    let active = 0;
    let open = 0;
    rows.map((eachLocation) => {
      active = active + eachLocation.active;
      open = active + eachLocation.unacknowledged_alert_count;
      subLocationsList.push({
        unacknowledgedAlertCount: eachLocation.unacknowledged_alert_count,
        activeAlertCount: eachLocation.active,
        lastCommunication: eachLocation.last_communication,
        netnum: eachLocation.netnum,
        address: eachLocation.address,
        name: eachLocation.name,
        subLocationCount: eachLocation.childCount,
      });
    });
    const locationDetails = rows.find(
      (eachLocation) => eachLocation.netnum == netnum
    );

    subLocationsList.shift();
    return NextResponse.json({ subLocationsList, locationDetails });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error });
  }
}
