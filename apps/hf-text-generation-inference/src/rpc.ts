import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function post(
  args: InferRequestType<typeof client.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$post(args, options))
}

export async function postChatTokenize(
  args: InferRequestType<typeof client.chat_tokenize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat_tokenize.$post(args, options))
}

export async function postGenerate(
  args: InferRequestType<typeof client.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.generate.$post(args, options))
}

export async function postGenerateStream(
  args: InferRequestType<typeof client.generate_stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.generate_stream.$post(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.info.$get(undefined, options))
}

export async function postInvocations(
  args: InferRequestType<typeof client.invocations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invocations.$post(args, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function postTokenize(
  args: InferRequestType<typeof client.tokenize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokenize.$post(args, options))
}

export async function postV1ChatCompletions(
  args: InferRequestType<typeof client.v1.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chat.completions.$post(args, options))
}

export async function postV1Completions(
  args: InferRequestType<typeof client.v1.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.completions.$post(args, options))
}

export async function getV1Models(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.models.$get(undefined, options))
}
