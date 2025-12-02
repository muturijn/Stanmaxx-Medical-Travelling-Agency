import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Stanmaxx Medical Travelling Agency based in Nairobi, Kenya.
Your role is to assist potential patients with information about medical tourism, treatment costs, and logistics.

Key Company Info:
- Name: Stanmaxx Medical Travelling Agency
- Location: Nairobi, Kenya
- Contact: 0799638346 | stanmaxx@gmail.com
- Services: Medical Treatment Abroad (Outbound) and Diaspora Medical Care in Kenya (Inbound).
- Key Treatments: Oncology (Cancer), Kidney/Liver Transplants, Cardiac Surgery, IVF, Cosmetic Surgery, Orthopedics.
- Key Destinations: India (Affordable/Specialized), Turkey (Transplants/Cosmetic), UAE (Luxury/Advanced), South Africa, Egypt.

Guidelines:
- Use SEO-friendly terms like "Affordable medical treatment", "Specialized surgery abroad", "Visa assistance".
- Be empathetic, professional, and reassuring.
- Keep answers concise.
- If a user asks about costs, say that costs vary by case, but Stanmaxx offers free quotes.
- Highlight that Stanmaxx handles the FULL process: Visa, Flights, Accommodation, and Hospital Admission.
- Do not give specific medical diagnoses. Always refer them to a doctor.
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  if (!apiKey) {
    return "I'm sorry, the AI service is currently unavailable (API Key missing). Please contact us directly at 0799638346.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history // Pass previous conversation context
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm having trouble connecting to the server right now. Please try again later or contact our support team.";
  }
};