import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NameEntitle(
  args: InferRequestType<(typeof client.v1)[':name:entitle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:entitle'].$post(args, options))
}

export async function postV1NameExtend(
  args: InferRequestType<(typeof client.v1)[':name:extend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:extend'].$post(args, options))
}

export async function postV1NameUndoCancel(
  args: InferRequestType<(typeof client.v1)[':name:undoCancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:undoCancel'].$post(args, options))
}

export async function getV1ParentProducts(
  args: InferRequestType<(typeof client.v1)[':parent']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].products.$get(args, options))
}

export async function getV1ParentPromotions(
  args: InferRequestType<(typeof client.v1)[':parent']['promotions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].promotions.$get(args, options))
}

export async function postV1ParentPromotionsFindEligible(
  args: InferRequestType<(typeof client.v1)[':parent']['promotions:findEligible']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['promotions:findEligible'].$post(args, options))
}

export async function postV1ParentSubscriptions(
  args: InferRequestType<(typeof client.v1)[':parent']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].subscriptions.$post(args, options))
}

export async function postV1ParentSubscriptionsProvision(
  args: InferRequestType<(typeof client.v1)[':parent']['subscriptions:provision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['subscriptions:provision'].$post(args, options))
}
