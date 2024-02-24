export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const data = [
            "First Post", "Second Post", "Third Post"
        ]
    return Response.json(data)
}