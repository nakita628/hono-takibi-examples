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

export async function getV1beta1NameOperations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].operations.$get(args, options))
}

export async function postV1beta1NameCancel(
  args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
}

export async function postV1beta1NameWait(
  args: InferRequestType<(typeof client.v1beta1)[':name:wait']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:wait'].$post(args, options))
}

export async function postV1beta1ParentScansAnalyzePackages(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['scans:analyzePackages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['scans:analyzePackages'].$post(args, options),
  )
}

export async function getV1beta1ParentVulnerabilities(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['vulnerabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].vulnerabilities.$get(args, options))
}
