import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postClient(
  args: InferRequestType<typeof client.client.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client.$post(args, options))
}

export async function getClientClientId(
  args: InferRequestType<(typeof client.client)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client[':client_id'].$get(args, options))
}

export async function getClientClientIdTokenKind(
  args: InferRequestType<(typeof client.client)[':client_id']['token'][':kind']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client[':client_id'].token[':kind'].$get(args, options))
}

export async function getDomainDomainname(
  args: InferRequestType<(typeof client.domain)[':domainname']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domain[':domainname'].$get(args, options))
}

export async function getFleetFleetname(
  args: InferRequestType<(typeof client.fleet)[':fleetname']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fleet[':fleetname'].$get(args, options))
}

export async function getTeamTeamname(
  args: InferRequestType<(typeof client.team)[':teamname']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team[':teamname'].$get(args, options))
}

export async function getTenantTenantname(
  args: InferRequestType<(typeof client.tenant)[':tenantname']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenant[':tenantname'].$get(args, options))
}

export async function postUser(
  args: InferRequestType<typeof client.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$post(args, options))
}

export async function getUserUsername(
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':username'].$get(args, options))
}

export async function getUserUsernameTokenKind(
  args: InferRequestType<(typeof client.user)[':username']['token'][':kind']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':username'].token[':kind'].$get(args, options))
}
