import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2betaCaseClassificationsSearch(
  args: InferRequestType<(typeof client.v2beta)['caseClassifications:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta['caseClassifications:search'].$get(args, options))
}

export async function getV2betaCasesSearch(
  args: InferRequestType<(typeof client.v2beta)['cases:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta['cases:search'].$get(args, options))
}

export async function getV2betaName(
  args: InferRequestType<(typeof client.v2beta)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name'].$get(args, options))
}

export async function patchV2betaName(
  args: InferRequestType<(typeof client.v2beta)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name'].$patch(args, options))
}

export async function postV2betaNameClose(
  args: InferRequestType<(typeof client.v2beta)[':name:close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name:close'].$post(args, options))
}

export async function getV2betaNameDownload(
  args: InferRequestType<(typeof client.v2beta)[':name:download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name:download'].$get(args, options))
}

export async function postV2betaNameEscalate(
  args: InferRequestType<(typeof client.v2beta)[':name:escalate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':name:escalate'].$post(args, options))
}

export async function getV2betaParentAttachments(
  args: InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent'].attachments.$get(args, options))
}

export async function postV2betaParentAttachments(
  args: InferRequestType<(typeof client.v2beta)[':parent']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent'].attachments.$post(args, options))
}

export async function getV2betaParentCases(
  args: InferRequestType<(typeof client.v2beta)[':parent']['cases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent'].cases.$get(args, options))
}

export async function postV2betaParentCases(
  args: InferRequestType<(typeof client.v2beta)[':parent']['cases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent'].cases.$post(args, options))
}

export async function getV2betaParentComments(
  args: InferRequestType<(typeof client.v2beta)[':parent']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent'].comments.$get(args, options))
}

export async function postV2betaParentComments(
  args: InferRequestType<(typeof client.v2beta)[':parent']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta[':parent'].comments.$post(args, options))
}
