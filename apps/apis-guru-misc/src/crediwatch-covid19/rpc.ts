import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1StatusCall(
  args: InferRequestType<typeof client.api.v1.status.call.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.status.call.$get(args, options))
}

export async function getApiV1StatusSku(
  args: InferRequestType<typeof client.api.v1.status.sku.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.status.sku.$get(args, options))
}

export async function getApiV1VerifyName(
  args: InferRequestType<typeof client.api.v1.verify.name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.verify.name.$get(args, options))
}

export async function getApiV1VerifyPhone(
  args: InferRequestType<typeof client.api.v1.verify.phone.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.verify.phone.$get(args, options))
}

export async function getApiV1VerifySku(
  args: InferRequestType<typeof client.api.v1.verify.sku.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.verify.sku.$get(args, options))
}
