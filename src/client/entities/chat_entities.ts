import { IChatMessage } from "components/chat/types"
import { action, computed, makeObservable, observable } from "mobx"
import api from "../lib/api"

export enum EntitiesApiStatus {
  Loading = "Loading",
  Connected = "Connected",
}

export class ChatEntities {
  // API
  socket: WebSocket | undefined;
  apiStatus: EntitiesApiStatus | string = EntitiesApiStatus.Loading

  // Chat Properties
  author?: string
  isActive: boolean = false
  messages: IChatMessage[] = []

  constructor() {
    makeObservable(this, {
      apiStatus: observable,
      author: observable,
      isActive: observable,
      messages: observable,
      sentMessage: action,
      getChatMessages: action,
      joinToChat: action,
      closeChat: action
    })

    api
      .test()
      .then(() => {
        this.apiStatus = EntitiesApiStatus.Connected
        this.socket = api.openMessageSocket();
        this.getChatMessages();
      })
      .catch((err) => {
        this.apiStatus = err.toString()
      });
  }

  getChatMessages() {
    if (this.socket) {
      this.socket.onmessage = (event) => {
        const json = JSON.parse(event.data)
        if (json.type === "message") {
          this.messages.push(json.data)
        }
      };
    }
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