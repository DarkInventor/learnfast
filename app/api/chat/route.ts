import { OpenAIClient, AzureKeyCredential } from '@azure/openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

// Create an OpenAI API client
const client = new OpenAIClient(
  'https://veryopenai.openai.azure.com/',
  new AzureKeyCredential(process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY || '')
)

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Ask Azure OpenAI for a streaming chat completion given the prompt
  const response = await client.streamChatCompletions(
    'VeryOpenAI',
    messages
  )

  // Convert the response into a friendly text-stream
//   @ts-ignore
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}