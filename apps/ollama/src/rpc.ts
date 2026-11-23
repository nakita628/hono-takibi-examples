import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Systemone(
  args: InferRequestType<typeof client.v1.systemone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.systemone.$post(args, options))
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

export async function postApiEmbed(
  args: InferRequestType<typeof client.api.embed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.embed.$post(args, options))
}

export async function getApiTags(options?: ClientRequestOptions) {
  return await parseResponse(client.api.tags.$get(undefined, options))
}

export async function getApiPs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.ps.$get(undefined, options))
}

export async function postApiShow(
  args: InferRequestType<typeof client.api.show.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.show.$post(args, options))
}

export async function postApiCreate(
  args: InferRequestType<typeof client.api.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.create.$post(args, options))
}

export async function postApiBlobsDigest(
  args: InferRequestType<(typeof client.api.blobs)[':digest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.blobs[':digest'].$post(args, options))
}

export async function headApiBlobsDigest(
  args: InferRequestType<(typeof client.api.blobs)[':digest']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.blobs[':digest'].$head(args, options))
}

export async function postApiCopy(
  args: InferRequestType<typeof client.api.copy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.copy.$post(args, options))
}

export async function postApiPull(
  args: InferRequestType<typeof client.api.pull.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pull.$post(args, options))
}

export async function postApiPush(
  args: InferRequestType<typeof client.api.push.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.push.$post(args, options))
}

export async function deleteApiDelete(
  args: InferRequestType<typeof client.api.delete.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.delete.$delete(args, options))
}

export async function getApiVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.api.version.$get(undefined, options))
}

export async function getApiUsage(
  args: InferRequestType<typeof client.api.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.usage.$get(args, options))
}

export async function getApiBalance(options?: ClientRequestOptions) {
  return await parseResponse(client.api.balance.$get(undefined, options))
}
