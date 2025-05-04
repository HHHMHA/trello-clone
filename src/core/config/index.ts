import type {AppConfig} from "@/core/types/config";

const config: AppConfig = {
    api_client_mode: import.meta.env.VITE_API_CLIENT
}

export default config;