import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1KeysApiCurrentSerial(
  args: InferRequestType<(typeof client.v1.KeysApi.Current)[':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.KeysApi.Current[':serial'].$get(args, options))
}

export async function getV1KeysApiCustomSerial(
  args: InferRequestType<(typeof client.v1.KeysApi.Custom)[':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.KeysApi.Custom[':serial'].$get(args, options))
}

export async function getV1KeysApiExpirySerial(
  args: InferRequestType<(typeof client.v1.KeysApi.Expiry)[':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.KeysApi.Expiry[':serial'].$get(args, options))
}

export async function getV1KeysApiFindSerial(
  args: InferRequestType<(typeof client.v1.KeysApi.Find)[':serial']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.KeysApi.Find[':serial'].$get(args, options))
}

export async function postV1ProductsApi(
  args: InferRequestType<typeof client.v1.ProductsApi.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ProductsApi.$post(args, options))
}

export async function patchV1ProductsApi(
  args: InferRequestType<typeof client.v1.ProductsApi.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ProductsApi.$patch(args, options))
}

export async function postV1ProductsApiCount(
  args: InferRequestType<typeof client.v1.ProductsApi.Count.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ProductsApi.Count.$post(args, options))
}

export async function postV1ProductsApiFind(
  args: InferRequestType<typeof client.v1.ProductsApi.Find.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ProductsApi.Find.$post(args, options))
}

export async function postV1ProductsApiList(
  args: InferRequestType<typeof client.v1.ProductsApi.List.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ProductsApi.List.$post(args, options))
}

export async function postV1ProductsApiSave(
  args: InferRequestType<typeof client.v1.ProductsApi.Save.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ProductsApi.Save.$post(args, options))
}

export async function postV1ProductsApiSerial(
  args: InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ProductsApi[':serial'].$post(args, options))
}

export async function deleteV1ProductsApiSerial(
  args: InferRequestType<(typeof client.v1.ProductsApi)[':serial']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ProductsApi[':serial'].$delete(args, options))
}

export async function putV1SubscriptionsApi(
  args: InferRequestType<typeof client.v1.SubscriptionsApi.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi.$put(args, options))
}

export async function postV1SubscriptionsApi(
  args: InferRequestType<typeof client.v1.SubscriptionsApi.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi.$post(args, options))
}

export async function postV1SubscriptionsApiCount(
  args: InferRequestType<typeof client.v1.SubscriptionsApi.Count.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi.Count.$post(args, options))
}

export async function postV1SubscriptionsApiDisable(
  args: InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi.Disable.$post(args, options))
}

export async function patchV1SubscriptionsApiDisable(
  args: InferRequestType<typeof client.v1.SubscriptionsApi.Disable.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi.Disable.$patch(args, options))
}

export async function postV1SubscriptionsApiEnable(
  args: InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi.Enable.$post(args, options))
}

export async function patchV1SubscriptionsApiEnable(
  args: InferRequestType<typeof client.v1.SubscriptionsApi.Enable.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi.Enable.$patch(args, options))
}

export async function postV1SubscriptionsApiFind(
  args: InferRequestType<typeof client.v1.SubscriptionsApi.Find.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi.Find.$post(args, options))
}

export async function postV1SubscriptionsApiList(
  args: InferRequestType<typeof client.v1.SubscriptionsApi.List.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi.List.$post(args, options))
}

export async function postV1SubscriptionsApiSave(
  args: InferRequestType<typeof client.v1.SubscriptionsApi.Save.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi.Save.$post(args, options))
}

export async function postV1SubscriptionsApiSerial(
  args: InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi[':serial'].$post(args, options))
}

export async function deleteV1SubscriptionsApiSerial(
  args: InferRequestType<(typeof client.v1.SubscriptionsApi)[':serial']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.SubscriptionsApi[':serial'].$delete(args, options))
}
