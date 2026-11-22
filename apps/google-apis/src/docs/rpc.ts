import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Documents(
  args: InferRequestType<typeof client.v1.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.documents.$post(args, options))
}

export async function getV1DocumentsDocumentId(
  args: InferRequestType<(typeof client.v1.documents)[':documentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.documents[':documentId'].$get(args, options))
}

export async function postV1DocumentsDocumentIdBatchUpdate(
  args: InferRequestType<(typeof client.v1.documents)[':documentId:batchUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.documents[':documentId:batchUpdate'].$post(args, options))
}
