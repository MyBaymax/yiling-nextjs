export async function GET(
    request: Request
) {
  const a = 1
  return new Response(JSON.stringify({
    a
  }), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    }
  })
}
