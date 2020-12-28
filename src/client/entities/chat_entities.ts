import { makeAutoObservable } from "mobx"
import api from "../lib/api";

export enum EntitiesApiStatus {
  Loading = "Loading",
  Connected = "Connected",
}

export class ChatEntities {
  apiStatus: EntitiesApiStatus | string = EntitiesApiStatus.Loading;
  author?: string;
  isActive: boolean = false;

  constructor() {
    makeAutoObservable(this)

    api
      .test()
      .then(() => this.apiStatus = EntitiesApiStatus.Connected)
      .catch((err) => {
        this.apiStatus = err.toString()
      });
  }

  sentMessage(message: { from: string; body: string }): Promise<{ success: Boolean; }> {
    return api
      .postMessage(message)
  }

  joinToChat(userName: string): void {
    this.author = userName
    this.isActive = true
  }

  closeChat(): void {
    this.isActive = false
  }
};

export const chatEntities = new ChatEntities()