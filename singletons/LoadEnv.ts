import dotenv from "dotenv";

dotenv.config();

export default {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN ?? "",
    SERVER_ID: process.env.SERVER_ID ?? "",
    CLIENT_ID: process.env.CLIENT_ID ?? "",
    ADMINISTRATOR_IDS: ((): string[] => {
        try {
            return (process.env.ADMINISTRATOR_IDS ? JSON.parse(process.env.ADMINISTRATOR_IDS) : []) as string[];
        }
        catch {
            return [];
        }
    })()
};