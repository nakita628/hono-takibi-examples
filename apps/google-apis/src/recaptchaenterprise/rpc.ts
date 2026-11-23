import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1KeyRetrieveLegacySecretKey(
  args: InferRequestType<(typeof client.v1)[':key:retrieveLegacySecretKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':key:retrieveLegacySecretKey'].$get(args, options))
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

export async function postV1NameAnnotate(
  args: InferRequestType<(typeof client.v1)[':name:annotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:annotate'].$post(args, options))
}

export async function postV1NameMigrate(
  args: InferRequestType<(typeof client.v1)[':name:migrate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:migrate'].$post(args, options))
}

export async function postV1ParentAssessments(
  args: InferRequestType<(typeof client.v1)[':parent']['assessments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].assessments.$post(args, options))
}

export async function getV1ParentFirewallpolicies(
  args: InferRequestType<(typeof client.v1)[':parent']['firewallpolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].firewallpolicies.$get(args, options))
}

export async function postV1ParentFirewallpolicies(
  args: InferRequestType<(typeof client.v1)[':parent']['firewallpolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].firewallpolicies.$post(args, options))
}

export async function getV1ParentKeys(
  args: InferRequestType<(typeof client.v1)[':parent']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].keys.$get(args, options))
}

export async function postV1ParentKeys(
  args: InferRequestType<(typeof client.v1)[':parent']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].keys.$post(args, options))
}

export async function getV1ParentMemberships(
  args: InferRequestType<(typeof client.v1)[':parent']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].memberships.$get(args, options))
}

export async function getV1ParentRelatedaccountgroups(
  args: InferRequestType<(typeof client.v1)[':parent']['relatedaccountgroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].relatedaccountgroups.$get(args, options))
}

export async function postV1ProjectRelatedaccountgroupmembershipsSearch(
  args: InferRequestType<
    (typeof client.v1)[':project']['relatedaccountgroupmemberships:search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':project']['relatedaccountgroupmemberships:search'].$post(args, options),
  )
}
