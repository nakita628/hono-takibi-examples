import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1CreateCorpus(
  args: InferRequestType<(typeof client.v1)['create-corpus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['create-corpus'].$post(args, options))
}

export async function postV1DeleteCorpus(
  args: InferRequestType<(typeof client.v1)['delete-corpus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['delete-corpus'].$post(args, options))
}

export async function postV1DeleteDoc(
  args: InferRequestType<(typeof client.v1)['delete-doc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['delete-doc'].$post(args, options))
}

export async function postV1Index(
  args: InferRequestType<typeof client.v1.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.index.$post(args, options))
}

export async function postV1ListCorpora(
  args: InferRequestType<(typeof client.v1)['list-corpora']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['list-corpora'].$post(args, options))
}

export async function postV1Query(
  args: InferRequestType<typeof client.v1.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.query.$post(args, options))
}

export async function postV1ResetCorpus(
  args: InferRequestType<(typeof client.v1)['reset-corpus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['reset-corpus'].$post(args, options))
}

export async function postV1StreamQuery(
  args: InferRequestType<(typeof client.v1)['stream-query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['stream-query'].$post(args, options))
}

export async function postV1Upload(
  args: InferRequestType<typeof client.v1.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.upload.$post(args, options))
}
