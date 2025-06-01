import type {HttpClientInterface} from "@/core/http-client/HttpClient.interface";
import HttpClientModel from "@/core/http-client/HttpClient.model";

export const HttpClient: HttpClientInterface = new HttpClientModel();
