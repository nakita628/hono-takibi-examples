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

export async function getV1NameLocations(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].locations.$get(args, options))
}

export async function getV1NameOperations(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].operations.$get(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function getV1ParentCertificateIssuanceConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].certificateIssuanceConfigs.$get(args, options))
}

export async function postV1ParentCertificateIssuanceConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateIssuanceConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].certificateIssuanceConfigs.$post(args, options))
}

export async function getV1ParentCertificateMapEntries(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMapEntries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].certificateMapEntries.$get(args, options))
}

export async function postV1ParentCertificateMapEntries(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMapEntries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].certificateMapEntries.$post(args, options))
}

export async function getV1ParentCertificateMaps(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].certificateMaps.$get(args, options))
}

export async function postV1ParentCertificateMaps(
  args: InferRequestType<(typeof client.v1)[':parent']['certificateMaps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].certificateMaps.$post(args, options))
}

export async function getV1ParentCertificates(
  args: InferRequestType<(typeof client.v1)[':parent']['certificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].certificates.$get(args, options))
}

export async function postV1ParentCertificates(
  args: InferRequestType<(typeof client.v1)[':parent']['certificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].certificates.$post(args, options))
}

export async function getV1ParentDnsAuthorizations(
  args: InferRequestType<(typeof client.v1)[':parent']['dnsAuthorizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dnsAuthorizations.$get(args, options))
}

export async function postV1ParentDnsAuthorizations(
  args: InferRequestType<(typeof client.v1)[':parent']['dnsAuthorizations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dnsAuthorizations.$post(args, options))
}

export async function getV1ParentTrustConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['trustConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].trustConfigs.$get(args, options))
}

export async function postV1ParentTrustConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['trustConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].trustConfigs.$post(args, options))
}
