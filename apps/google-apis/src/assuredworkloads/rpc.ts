import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function getV1beta1NameOperations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].operations.$get(args, options))
}

export async function postV1beta1NameAcknowledge(
  args: InferRequestType<(typeof client.v1beta1)[':name:acknowledge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:acknowledge'].$post(args, options))
}

export async function postV1beta1NameRestrictAllowedResources(
  args: InferRequestType<(typeof client.v1beta1)[':name:restrictAllowedResources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:restrictAllowedResources'].$post(args, options))
}

export async function getV1beta1ParentViolations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['violations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].violations.$get(args, options))
}

export async function getV1beta1ParentWorkloads(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['workloads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].workloads.$get(args, options))
}

export async function postV1beta1ParentWorkloads(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['workloads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].workloads.$post(args, options))
}

export async function getV1beta1ProjectTargetAnalyzeWorkloadMove(
  args: InferRequestType<
    (typeof client.v1beta1)[':project'][':target:analyzeWorkloadMove']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':project'][':target:analyzeWorkloadMove'].$get(args, options),
  )
}

export async function getV1beta1SourceTargetAnalyzeWorkloadMove(
  args: InferRequestType<(typeof client.v1beta1)[':source'][':target:analyzeWorkloadMove']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':source'][':target:analyzeWorkloadMove'].$get(args, options),
  )
}
