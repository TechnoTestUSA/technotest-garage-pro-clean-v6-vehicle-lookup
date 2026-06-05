import { NextRequest, NextResponse } from 'next/server';

const RESOURCE_ID = '053cea08-09bc-40ec-8f7a-156f0677aff3';

function compactRecord(record: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(record).filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
  );
}

function normalizePlate(value: string | null) {
  return String(value ?? '').replace(/\D/g, '');
}

export async function GET(request: NextRequest) {
  try {
    const plate = normalizePlate(request.nextUrl.searchParams.get('plate'));

    if (!plate || plate.length < 5 || plate.length > 8) {
      return NextResponse.json({ found: false, error: 'Invalid plate number' }, { status: 400 });
    }

    const params = new URLSearchParams({
      resource_id: RESOURCE_ID,
      limit: '1',
      filters: JSON.stringify({ mispar_rechev: Number(plate) }),
    });

    const response = await fetch(`https://data.gov.il/api/3/action/datastore_search?${params.toString()}`, {
      headers: { 'User-Agent': 'TechnoTestGarage/1.0' },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return NextResponse.json({ found: false, error: 'Government API error' }, { status: 502 });
    }

    const data = await response.json();
    const record = data?.result?.records?.[0];

    if (!record) {
      return NextResponse.json({ found: false, vehicle: null }, { status: 404 });
    }

    const allFields = compactRecord(record);

    return NextResponse.json({
      found: true,
      vehicle: {
        plate: record.mispar_rechev,
        manufacturer: record.tozeret_nm,
        model: record.degem_nm,
        commercialName: record.kinuy_mishari,
        year: record.shnat_yitzur,
        color: record.tzeva_rechev,
        fuel: record.sug_delek_nm,
        lastTestDate: record.mivchan_acharon_dt,
        licenseValidUntil: record.tokef_dt,
        ownership: record.baalut,
        chassis: record.misgeret,
        frontTire: record.zmig_kidmi,
        rearTire: record.zmig_ahori,
        pollutionGroup: record.kvutzat_zihum,
        safetyLevel: record.ramat_eivzur_betihuty,
        raw: record,
        allFields,
      },
    });
  } catch {
    return NextResponse.json({ found: false, error: 'Internal server error' }, { status: 500 });
  }
}
