import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1betaName(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].$get(args, options))
}

export async function patchV1betaNameConnections(
  args: InferRequestType<(typeof client.v1beta)[':name']['connections']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':name'].connections.$patch(args, options))
}

export async function getV1betaParentConnections(
  args: InferRequestType<(typeof client.v1beta)[':parent']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].connections.$get(args, options))
}

export async function postV1betaParentConnections(
  args: InferRequestType<(typeof client.v1beta)[':parent']['connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent'].connections.$post(args, options))
}

export async function postV1betaParentAddSubnetwork(
  args: InferRequestType<(typeof client.v1beta)[':parent:addSubnetwork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent:addSubnetwork'].$post(args, options))
}

export async function postV1betaParentSearchRange(
  args: InferRequestType<(typeof client.v1beta)[':parent:searchRange']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta[':parent:searchRange'].$post(args, options))
}
