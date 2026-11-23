import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHypernyms(
  args: InferRequestType<typeof client.hypernyms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hypernyms.$get(args, options))
}

export async function getHyponyms(
  args: InferRequestType<typeof client.hyponyms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hyponyms.$get(args, options))
}

export async function getInflections(
  args: InferRequestType<typeof client.inflections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inflections.$get(args, options))
}

export async function getLmFamily(
  args: InferRequestType<typeof client.lm.family.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lm.family.$get(args, options))
}

export async function getSenses(
  args: InferRequestType<typeof client.senses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senses.$get(args, options))
}

export async function getValues(
  args: InferRequestType<typeof client.values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.values.$get(args, options))
}
