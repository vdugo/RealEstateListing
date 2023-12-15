const PROXY_CONFIG = [
  {
    context: [
      "/api/properties", // Adjust this to the endpoints you use
      // Add other API endpoints as needed
    ],
    target: "https://localhost:40443",
    secure: false // Set to true if you trust the SSL certificate, e.g., in production
  }
]

module.exports = PROXY_CONFIG;
