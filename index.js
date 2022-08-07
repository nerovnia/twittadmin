import dotenv from "dotenv";

dotenv.config();

const ACCESS_TOCKEN = process.env.ACCESS_TOCKEN;
const ACCESS_TOCKEN_SECRET = process.env.ACCESS_TOCKEN_SECRET;
const BEARER_TOCKEN = process.env.BEARER_TOCKEN;
const API_KEY = process.env.API_KEY;
const API_KEY_SECRET = process.env.API_KEY_SECRET;

console.log(API_KEY);
