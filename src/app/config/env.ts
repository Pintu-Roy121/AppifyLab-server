import dotenv from "dotenv";

dotenv.config();

interface IEnvConfig {
  PORT: string;
  DB_URL: string;
  BCRYPT_SALT_ROUND: string;
}

const loadEnvVariable = (): IEnvConfig => {
  const requiredEnvVariables: string[] = [
    "PORT",
    "DB_URL",
    "BCRYPT_SALT_ROUND",
  ];

  const missing = requiredEnvVariables.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `Missing environment variables: ${missing.join(", ")}.\n` +
        "Create a .env file (see .env.example) or export these vars before running.",
    );
  }

  return {
    PORT: process.env.PORT as string,
    DB_URL: process.env.DB_URL as string,
    BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
  };
};

export const envVars = loadEnvVariable();
