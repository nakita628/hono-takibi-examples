import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCommunication(
  args: InferRequestType<typeof client.communication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.communication.$post(args, options))
}

export async function postEkmanEmotion(
  args: InferRequestType<(typeof client)['ekman-emotion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ekman-emotion'].$post(args, options))
}

export async function postEmotion(
  args: InferRequestType<typeof client.emotion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emotion.$post(args, options))
}

export async function postLanguageDetection(
  args: InferRequestType<(typeof client)['language-detection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['language-detection'].$post(args, options))
}

export async function postPersonality(
  args: InferRequestType<typeof client.personality.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.personality.$post(args, options))
}

export async function postSentiment(
  args: InferRequestType<typeof client.sentiment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sentiment.$post(args, options))
}

export async function postTopicSentiment(
  args: InferRequestType<(typeof client)['topic-sentiment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['topic-sentiment'].$post(args, options))
}
