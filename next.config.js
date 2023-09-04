/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: "mongodb://localhost:27017/next-auth",
    NEXTAUTH_SECRET: "nnnn",

    GOOGLE_ID: "",
    GOOGLE_SECRET: "",
    GITHUB_ID: "d63bc96af805f2915947",
    GITHUB_SECRET: "856b2962e847e9318367978b0682c1b61bd290fd",
  },
};

module.exports = nextConfig;
