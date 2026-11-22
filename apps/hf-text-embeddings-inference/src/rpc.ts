import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDecode(
  args: InferRequestType<typeof client.decode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.decode.$post(args, options))
}

export async function postEmbed(
  args: InferRequestType<typeof client.embed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embed.$post(args, options))
}

export async function postEmbedAll(
  args: InferRequestType<typeof client.embed_all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embed_all.$post(args, options))
}

export async function postEmbedSparse(
  args: InferRequestType<typeof client.embed_sparse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embed_sparse.$post(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.info.$get(undefined, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function postPredict(
  args: InferRequestType<typeof client.predict.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predict.$post(args, options))
}

export async function postRerank(
  args: InferRequestType<typeof client.rerank.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rerank.$post(args, options))
}

export async function postSimilarity(
  args: InferRequestType<typeof client.similarity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.similarity.$post(args, options))
}

export async function postTokenize(
  args: InferRequestType<typeof client.tokenize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokenize.$post(args, options))
}

export async function postV1Embeddings(
  args: InferRequestType<typeof client.v1.embeddings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.embeddings.$post(args, options))
}
