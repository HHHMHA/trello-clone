import type {AppConfig} from "@/core/types/config";

const config: AppConfig = {
    api_client_mode: import.meta.env.VITE_API_CLIENT,
    api_token_key: import.meta.env.VUE_APP_TOKEN_KEY || "trello-token",
}

export default config;
