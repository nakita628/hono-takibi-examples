import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiPolicyEngineEvaluate(
  args: InferRequestType<(typeof client.api)['policy-engine']['evaluate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['policy-engine'].evaluate.$post(args, options))
}

export async function getApiPolicyEnginePolicies(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['policy-engine'].policies.$get(args, options))
}

export async function getApiPolicyEnginePoliciesId(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['policy-engine'].policies[':id'].$get(args, options))
}

export async function putApiPolicyEnginePoliciesId(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['policy-engine'].policies[':id'].$put(args, options))
}

export async function postApiPolicyEnginePoliciesId(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['policy-engine'].policies[':id'].$post(args, options))
}

export async function deleteApiPolicyEnginePoliciesId(
  args: InferRequestType<(typeof client.api)['policy-engine']['policies'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['policy-engine'].policies[':id'].$delete(args, options))
}
