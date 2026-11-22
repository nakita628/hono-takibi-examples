import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1ShoppersSubaccount(
  args: InferRequestType<typeof client.v1.shoppers.subaccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shoppers.subaccount.$post(args, options))
}

export async function getV1ShoppersShopperId(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shoppers[':shopperId'].$get(args, options))
}

export async function postV1ShoppersShopperId(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shoppers[':shopperId'].$post(args, options))
}

export async function deleteV1ShoppersShopperId(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shoppers[':shopperId'].$delete(args, options))
}

export async function putV1ShoppersShopperIdFactorsPassword(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['factors']['password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shoppers[':shopperId'].factors.password.$put(args, options))
}

export async function getV1ShoppersShopperIdStatus(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shoppers[':shopperId'].status.$get(args, options))
}
