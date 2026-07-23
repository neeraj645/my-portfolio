
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

export const callGeminiChat = async (history: ChatMessage[]): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    You are an AI representative for Alex, a Backend Developer with 2 years of experience.
    Alex's Skills: Go, Python, Node.js, PostgreSQL, Redis, Kubernetes, Docker, gRPC, Kafka.
    Experience: 
    - CloudSystems Inc. (Jan 2023 - Present): API Gateways, Distributed Systems, Go.
    - DataStream Solutions (Jun 2022 - Dec 2022): Python, FastAPI, Kafka.
    Projects: Distributed Log Aggregator, Inventory Cache Sync, AuthGuard Middleware.
    Alex is passionate about system architecture, scalability, and clean code.
    Be concise, technical, and helpful. Keep responses under 3 sentences.
  `;

  const lastMessage = history[history.length - 1];
  const chatHistory = history.slice(0, -1).map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...chatHistory,
        { role: 'user', parts: [{ text: lastMessage.content }] }
      ],
    });

    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The server-side brain is temporarily down. Please try again later.";
  }
};
