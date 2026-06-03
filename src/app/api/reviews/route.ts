import { NextResponse } from 'next/server'

export const revalidate = 3600 // refresh once per hour

export async function GET() {
  try {
    const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.GOOGLE_PLACES_API_KEY!,
        'X-Goog-FieldMask': 'places.displayName,places.rating,places.userRatingCount,places.reviews',
      },
      body: JSON.stringify({
        textQuery: 'Unique Steam Cleaning Windsor Colorado',
        maxResultCount: 1,
      }),
      next: { revalidate: 3600 },
    })

    if (!res.ok) throw new Error(`Places API error: ${res.status}`)

    const data = await res.json()
    const place = data.places?.[0]

    if (!place?.reviews?.length) {
      return NextResponse.json({ reviews: [] })
    }

    const reviews = place.reviews
      .filter((r: any) => r.rating >= 4)
      .map((r: any) => ({
        name: r.authorAttribution?.displayName ?? 'Google Reviewer',
        text: r.text?.text ?? '',
        rating: r.rating,
        time: r.relativePublishTimeDescription ?? '',
        photo: r.authorAttribution?.photoUri ?? null,
      }))

    return NextResponse.json({
      reviews,
      overall: place.rating,
      total: place.userRatingCount,
    })
  } catch (err) {
    console.error('Google Places error:', err)
    return NextResponse.json({ reviews: [] }, { status: 500 })
  }
}
