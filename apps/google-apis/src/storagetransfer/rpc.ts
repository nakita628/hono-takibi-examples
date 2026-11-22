import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1GoogleServiceAccountsProjectId(
  args: InferRequestType<(typeof client.v1.googleServiceAccounts)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.googleServiceAccounts[':projectId'].$get(args, options))
}

export async function getV1ProjectsProjectIdAgentPools(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['agentPools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].agentPools.$get(args, options))
}

export async function postV1ProjectsProjectIdAgentPools(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['agentPools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].agentPools.$post(args, options))
}

export async function getV1TransferJobs(
  args: InferRequestType<typeof client.v1.transferJobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transferJobs.$get(args, options))
}

export async function postV1TransferJobs(
  args: InferRequestType<typeof client.v1.transferJobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transferJobs.$post(args, options))
}

export async function getV1JobName(
  args: InferRequestType<(typeof client.v1)[':jobName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':jobName'].$get(args, options))
}

export async function deleteV1JobName(
  args: InferRequestType<(typeof client.v1)[':jobName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':jobName'].$delete(args, options))
}

export async function patchV1JobName(
  args: InferRequestType<(typeof client.v1)[':jobName']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':jobName'].$patch(args, options))
}

export async function postV1JobNameRun(
  args: InferRequestType<(typeof client.v1)[':jobName:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':jobName:run'].$post(args, options))
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

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NamePause(
  args: InferRequestType<(typeof client.v1)[':name:pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:pause'].$post(args, options))
}

export async function postV1NameResume(
  args: InferRequestType<(typeof client.v1)[':name:resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:resume'].$post(args, options))
}
