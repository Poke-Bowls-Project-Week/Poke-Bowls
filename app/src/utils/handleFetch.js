export const handleFetch = async (url, options = {}, debug = false) => {
  if (debug) console.log("Fetching URL:", url, "Options:", options);

  // Validate URL
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    throw new Error("Invalid URL: Protocol (http:// or https://) is required.");
  }

  // Add timeout
  const timeout = 5000; // 5 seconds
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (debug) console.log("Response:", response);

    const { ok, status, statusText, headers } = response;

    if (!ok)
      throw new Error(`Fetch failed with status - ${status}, ${statusText}`);

    // Check if response is JSON
    const isJson = (headers.get("content-type") || "").startsWith(
      "application/json"
    );
    const responseData = await (isJson ? response.json() : response.text());

    if (debug) console.log("Response Data:", responseData);
    return [responseData, null];
  } catch (error) {
    clearTimeout(timeoutId);

    if (debug) console.warn("Fetch Error:", error);

    if (error.name === "AbortError") {
      return [null, new Error("Request timed out")];
    }
    return [null, error];
  }
};
