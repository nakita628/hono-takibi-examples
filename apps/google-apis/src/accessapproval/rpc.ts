import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function postV1NameApprove(
  args: InferRequestType<(typeof client.v1)[':name:approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:approve'].$post(args, options))
}

export async function postV1NameDismiss(
  args: InferRequestType<(typeof client.v1)[':name:dismiss']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:dismiss'].$post(args, options))
}

export async function postV1NameInvalidate(
  args: InferRequestType<(typeof client.v1)[':name:invalidate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:invalidate'].$post(args, options))
}

export async function getV1ParentApprovalRequests(
  args: InferRequestType<(typeof client.v1)[':parent']['approvalRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].approvalRequests.$get(args, options))
}
