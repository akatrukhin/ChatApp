import { IChatMessage } from "components/chat/types"
import { action, computed, makeObservable, observable } from "mobx"
import api from "../lib/api"

export enum EntitiesApiStatus {
  Loading = "Loading",
  Connected = "Connected",
}

export class ChatEntities {
  // API
  socket?: WebSocket;
  apiStatus: EntitiesApiStatus | string = EntitiesApiStatus.Loading

  // Chat Properties
  author?: string
  isOpen: boolean = false
  messages: IChatMessage[] = []

  constructor() {
    makeObservable(this, {
      apiStatus: observable,
      author: observable,
      isOpen: observable,
      messages: observable,
      sentMessage: action,
      getChatMessages: action,
      joinToChat: action,
      closeChat: action,
      testConnection: action
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

  getChatMessages(): void {
    if (this.socket) {
      this.socket.onmessage = (event) => {
        const json = JSON.parse(event.data)
        if (json.type === "message") {
          this.messages.push(json.data)
        }
      };
    }
  }

  testConnection(): void {
    api
      .test().then(() => {
        this.apiStatus = EntitiesApiStatus.Connected
      })
      .catch((err) => {
        this.apiStatus = err.toString()
      });
  }

  sentMessage(message: { from: string; body: string }): Promise<{ success: Boolean; }> {
    return api
      .postMessage(message)
  }

  joinToChat(userName: string): void {
    api
      .test()
      .then(() => {
        this.author = userName
        this.isOpen = true
      })
      .catch((err) => {
        this.apiStatus = err.toString()
      });
  }

  closeChat(): void {
    this.isOpen = false
  }
};

export const chatEntities = new ChatEntities()