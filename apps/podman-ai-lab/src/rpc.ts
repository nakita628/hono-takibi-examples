import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.api.version.$get(undefined, options))
}

export async function getApiTags(options?: ClientRequestOptions) {
  return await parseResponse(client.api.tags.$get(undefined, options))
}

export async function postApiPull(
  args: InferRequestType<typeof client.api.pull.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pull.$post(args, options))
}

export async function postApiShow(
  args: InferRequestType<typeof client.api.show.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.show.$post(args, options))
}

export async function postApiGenerate(
  args: InferRequestType<typeof client.api.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.generate.$post(args, options))
}

export async function postApiChat(
  args: InferRequestType<typeof client.api.chat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.chat.$post(args, options))
}

export async function getApiPs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.ps.$get(undefined, options))
}

export async function getV1Models(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.models.$get(undefined, options))
}

export async function postV1ChatCompletions(
  args: InferRequestType<typeof client.v1.chat.completions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chat.completions.$post(args, options))
}
