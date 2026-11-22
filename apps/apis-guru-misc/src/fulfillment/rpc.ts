import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounting(
  args: InferRequestType<typeof client.accounting.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounting.$get(args, options))
}

export async function getInventory(
  args: InferRequestType<typeof client.inventory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory.$get(args, options))
}

export async function postOauthAccessToken(
  args: InferRequestType<typeof client.oauth.access_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.access_token.$post(args, options))
}

export async function getOrders(
  args: InferRequestType<typeof client.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.$get(args, options))
}

export async function postOrders(
  args: InferRequestType<typeof client.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.$post(args, options))
}

export async function getOrdersId(
  args: InferRequestType<(typeof client.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':id'].$get(args, options))
}

export async function deleteOrdersId(
  args: InferRequestType<(typeof client.orders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':id'].$delete(args, options))
}

export async function putOrdersIdShip(
  args: InferRequestType<(typeof client.orders)[':id']['ship']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':id'].ship.$put(args, options))
}

export async function putOrdersIdStatus(
  args: InferRequestType<(typeof client.orders)[':id']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':id'].status.$put(args, options))
}

export async function getReturns(
  args: InferRequestType<typeof client.returns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.returns.$get(args, options))
}

export async function putReturns(
  args: InferRequestType<typeof client.returns.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.returns.$put(args, options))
}

export async function getTrack(
  args: InferRequestType<typeof client.track.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.track.$get(args, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$get(undefined, options))
}
