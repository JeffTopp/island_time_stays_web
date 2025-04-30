export async function GET() {
  try {
    const response = await fetch(
      `https://api.apify.com/v2/datasets/rbKF01ceGHlXt1Bih/items?token=${process.env.APIFY_TOKEN}`
    );
    const data = await response.json();

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return Response.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
