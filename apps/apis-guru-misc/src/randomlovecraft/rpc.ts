import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBooks(options?: ClientRequestOptions) {
  return await parseResponse(client.books.$get(undefined, options))
}

export async function getBooksIdSentences(
  args: InferRequestType<(typeof client.books)[':id']['sentences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.books[':id'].sentences.$get(args, options))
}

export async function getSentences(
  args: InferRequestType<typeof client.sentences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sentences.$get(args, options))
}

export async function getSentencesId(
  args: InferRequestType<(typeof client.sentences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sentences[':id'].$get(args, options))
}
