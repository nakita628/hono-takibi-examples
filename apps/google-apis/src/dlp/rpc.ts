import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2InfoTypes(
  args: InferRequestType<typeof client.v2.infoTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.infoTypes.$get(args, options))
}

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}

export async function deleteV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$delete(args, options))
}

export async function patchV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$patch(args, options))
}

export async function postV2NameActivate(
  args: InferRequestType<(typeof client.v2)[':name:activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:activate'].$post(args, options))
}

export async function postV2NameCancel(
  args: InferRequestType<(typeof client.v2)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:cancel'].$post(args, options))
}

export async function postV2NameFinish(
  args: InferRequestType<(typeof client.v2)[':name:finish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:finish'].$post(args, options))
}

export async function postV2NameHybridInspect(
  args: InferRequestType<(typeof client.v2)[':name:hybridInspect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:hybridInspect'].$post(args, options))
}

export async function postV2ParentContentDeidentify(
  args: InferRequestType<(typeof client.v2)[':parent']['content:deidentify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent']['content:deidentify'].$post(args, options))
}

export async function postV2ParentContentInspect(
  args: InferRequestType<(typeof client.v2)[':parent']['content:inspect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent']['content:inspect'].$post(args, options))
}

export async function postV2ParentContentReidentify(
  args: InferRequestType<(typeof client.v2)[':parent']['content:reidentify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent']['content:reidentify'].$post(args, options))
}

export async function getV2ParentDeidentifyTemplates(
  args: InferRequestType<(typeof client.v2)[':parent']['deidentifyTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].deidentifyTemplates.$get(args, options))
}

export async function postV2ParentDeidentifyTemplates(
  args: InferRequestType<(typeof client.v2)[':parent']['deidentifyTemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].deidentifyTemplates.$post(args, options))
}

export async function getV2ParentDlpJobs(
  args: InferRequestType<(typeof client.v2)[':parent']['dlpJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].dlpJobs.$get(args, options))
}

export async function postV2ParentDlpJobs(
  args: InferRequestType<(typeof client.v2)[':parent']['dlpJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].dlpJobs.$post(args, options))
}

export async function postV2ParentImageRedact(
  args: InferRequestType<(typeof client.v2)[':parent']['image:redact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent']['image:redact'].$post(args, options))
}

export async function getV2ParentInfoTypes(
  args: InferRequestType<(typeof client.v2)[':parent']['infoTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].infoTypes.$get(args, options))
}

export async function getV2ParentInspectTemplates(
  args: InferRequestType<(typeof client.v2)[':parent']['inspectTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].inspectTemplates.$get(args, options))
}

export async function postV2ParentInspectTemplates(
  args: InferRequestType<(typeof client.v2)[':parent']['inspectTemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].inspectTemplates.$post(args, options))
}

export async function getV2ParentJobTriggers(
  args: InferRequestType<(typeof client.v2)[':parent']['jobTriggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].jobTriggers.$get(args, options))
}

export async function postV2ParentJobTriggers(
  args: InferRequestType<(typeof client.v2)[':parent']['jobTriggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].jobTriggers.$post(args, options))
}

export async function getV2ParentStoredInfoTypes(
  args: InferRequestType<(typeof client.v2)[':parent']['storedInfoTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].storedInfoTypes.$get(args, options))
}

export async function postV2ParentStoredInfoTypes(
  args: InferRequestType<(typeof client.v2)[':parent']['storedInfoTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].storedInfoTypes.$post(args, options))
}
