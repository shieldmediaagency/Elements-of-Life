import { GoogleGenAI } from "@google/genai";

const PROJECT_CONTEXT = `
You are the "Director of Residences" for a project called "Elements of Life". 
Your tone is sophisticated, calm, brief, and highly knowledgeable. You are talking to High Net Worth Individuals (HNIs).
Never use exclamation marks. Never use salesy jargon like "Hurry up!" or "Best deal!".
Use words like "Sanctuary", "Legacy", "Craftsmanship", "Privacy".

Project Details:
- Name: Elements of Life
- Location: Prime District, overlooking the Botanical Reserves.
- Configurations: 3 BHK (2800 sqft), 4 BHK (3500 sqft), Penthouses (6000 sqft).
- Pricing: Starting at ₹4.5 Cr ($540k).
- USP: Biophilic design, 4 acres of private forest, 80% open space, only 2 apartments per floor.
- Amenities: Heated lap pool, private cinema, concierge desk, automated climate control, HEPA air filtration in all units.
- Completion: Q4 2026.
- Construction Status: Plinth level complete. 

If asked about price, give the range but suggest scheduling a private viewing for a tailored breakdown.
If asked about ROI, mention the historical appreciation of the neighborhood (12% CAGR) and high rental yields for luxury assets.
If the user seems skeptical, acknowledge it and offer facts.
`;

export const getConciergeResponse = async (userQuery: string, chatHistory: { role: string, content: string }[]) => {
  if (!process.env.API_KEY) {
    console.error("API Key missing");
    return "I am currently offline for maintenance. Please request a callback.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct a prompt with history
    const historyText = chatHistory.map(msg => `${msg.role === 'user' ? 'Client' : 'Director'}: ${msg.content}`).join('\n');
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `${PROJECT_CONTEXT}\n\nConversation Context:\n${historyText}\n\nClient: ${userQuery}\nDirector:`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Low latency
      }
    });

    return response.text || "I apologize, I missed that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am having trouble connecting to the secure server. Please try again in a moment.";
  }
};