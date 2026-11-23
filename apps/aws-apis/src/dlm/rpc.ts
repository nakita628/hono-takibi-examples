import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPolicies(
  args: InferRequestType<typeof client.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.$get(args, options))
}

export async function postPolicies(
  args: InferRequestType<typeof client.policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies.$post(args, options))
}

export async function getPoliciesPolicyIdIndex(
  args: InferRequestType<(typeof client.policies)[':policyId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyId'].index.$get(args, options))
}

export async function deletePoliciesPolicyIdIndex(
  args: InferRequestType<(typeof client.policies)[':policyId']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyId'].index.$delete(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function patchPoliciesPolicyId(
  args: InferRequestType<(typeof client.policies)[':policyId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policies[':policyId'].$patch(args, options))
}
