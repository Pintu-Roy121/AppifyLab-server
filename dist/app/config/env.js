"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const loadEnvVariable = () => {
    const requiredEnvVariables = ["PORT", "DB_URL"];
    const missing = requiredEnvVariables.filter((key) => !process.env[key]);
    if (missing.length > 0) {
        throw new Error(`Missing environment variables: ${missing.join(", ")}.\n` +
            "Create a .env file (see .env.example) or export these vars before running.");
    }
    return {
        PORT: process.env.PORT,
        DB_URL: process.env.DB_URL,
    };
};
exports.envVars = loadEnvVariable();
