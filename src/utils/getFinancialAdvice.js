// utils/getFinancialAdvice.js
import OpenAI from "openai";

let openai = null;

// Initialize the OpenAI client ONLY if the API key is provided
const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

if (apiKey && apiKey.trim() !== "") {
  openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true, // Only use this in public apps IF you understand the risks!
  });
} else {
  console.warn("⚠️ OpenAI API key is missing or empty. Using mock financial advice.");
}

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log("User Financials:", { totalBudget, totalIncome, totalSpend });

  // Mock fallback
  if (!openai) {
    return `💡 Mock Advice:
Based on your income of $${totalIncome}, expenses of $${totalSpend}, and a budget of $${totalBudget}, you should aim to reduce unnecessary spending and consider saving at least 20% of your income for future needs. Try categorizing your expenses to find areas where you can cut back.`;
  }

  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `;

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: userPrompt }],
    });

    const advice = chatCompletion.choices[0].message.content;
    console.log("AI Advice:", advice);
    return advice;
  } catch (error) {
    console.error("❌ Error fetching financial advice:", error.message);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
