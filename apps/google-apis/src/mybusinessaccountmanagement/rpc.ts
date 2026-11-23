import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Accounts(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.$get(args, options))
}

export async function postV1Accounts(
  args: InferRequestType<typeof client.v1.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.$post(args, options))
}

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

export async function postV1NameAccept(
  args: InferRequestType<(typeof client.v1)[':name:accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:accept'].$post(args, options))
}

export async function postV1NameDecline(
  args: InferRequestType<(typeof client.v1)[':name:decline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:decline'].$post(args, options))
}

export async function postV1NameTransfer(
  args: InferRequestType<(typeof client.v1)[':name:transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:transfer'].$post(args, options))
}

export async function getV1ParentAdmins(
  args: InferRequestType<(typeof client.v1)[':parent']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].admins.$get(args, options))
}

export async function postV1ParentAdmins(
  args: InferRequestType<(typeof client.v1)[':parent']['admins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].admins.$post(args, options))
}

export async function getV1ParentInvitations(
  args: InferRequestType<(typeof client.v1)[':parent']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].invitations.$get(args, options))
}
