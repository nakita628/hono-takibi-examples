import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV3p1beta1Name(
  args: InferRequestType<(typeof client.v3p1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':name'].$get(args, options))
}

export async function deleteV3p1beta1Name(
  args: InferRequestType<(typeof client.v3p1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':name'].$delete(args, options))
}

export async function patchV3p1beta1Name(
  args: InferRequestType<(typeof client.v3p1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':name'].$patch(args, options))
}

export async function getV3p1beta1NameComplete(
  args: InferRequestType<(typeof client.v3p1beta1)[':name:complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':name:complete'].$get(args, options))
}

export async function postV3p1beta1ParentClientEvents(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['clientEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':parent'].clientEvents.$post(args, options))
}

export async function getV3p1beta1ParentCompanies(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':parent'].companies.$get(args, options))
}

export async function postV3p1beta1ParentCompanies(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['companies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':parent'].companies.$post(args, options))
}

export async function getV3p1beta1ParentJobs(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':parent'].jobs.$get(args, options))
}

export async function postV3p1beta1ParentJobs(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':parent'].jobs.$post(args, options))
}

export async function postV3p1beta1ParentJobsBatchDelete(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':parent']['jobs:batchDelete'].$post(args, options))
}

export async function postV3p1beta1ParentJobsSearch(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3p1beta1[':parent']['jobs:search'].$post(args, options))
}

export async function postV3p1beta1ParentJobsSearchForAlert(
  args: InferRequestType<(typeof client.v3p1beta1)[':parent']['jobs:searchForAlert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3p1beta1[':parent']['jobs:searchForAlert'].$post(args, options),
  )
}
