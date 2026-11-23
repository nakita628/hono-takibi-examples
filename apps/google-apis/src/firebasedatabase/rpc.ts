import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$get(args, options))
}

export async function deleteV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$delete(args, options))
}

export async function postV1betaNameDisable(
  args: InferRequestType<(typeof client.v1beta)[':name:disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:disable'].$post(args, options))
}

export async function postV1betaNameReenable(
  args: InferRequestType<(typeof client.v1beta)[':name:reenable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:reenable'].$post(args, options))
}

export async function postV1betaNameUndelete(
  args: InferRequestType<(typeof client.v1beta)[':name:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name:undelete'].$post(args, options))
}

export async function getV1betaParentInstances(
  args: InferRequestType<(typeof client.v1beta)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].instances.$get(args, options))
}

export async function postV1betaParentInstances(
  args: InferRequestType<(typeof client.v1beta)[':parent']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].instances.$post(args, options))
}
