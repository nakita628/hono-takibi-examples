import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getModels(options?: ClientRequestOptions) {
  return await parseResponse(client.models.$get(undefined, options))
}

export async function postEmbeddings(
  args: InferRequestType<typeof client.embeddings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embeddings.$post(args, options))
}

export async function postRerank(
  args: InferRequestType<typeof client.rerank.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rerank.$post(args, options))
}

export async function postClassify(
  args: InferRequestType<typeof client.classify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classify.$post(args, options))
}

export async function postEmbeddingsImage(
  args: InferRequestType<typeof client.embeddings_image.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embeddings_image.$post(args, options))
}

export async function postEmbeddingsAudio(
  args: InferRequestType<typeof client.embeddings_audio.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embeddings_audio.$post(args, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}
