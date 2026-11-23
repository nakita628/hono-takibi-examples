import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function putV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$put(args, options))
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

export async function deleteV1NameDeleteRevision(
  args: InferRequestType<(typeof client.v1)[':name:deleteRevision']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:deleteRevision'].$delete(args, options))
}

export async function getV1NameGetContents(
  args: InferRequestType<(typeof client.v1)[':name:getContents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:getContents'].$get(args, options))
}

export async function getV1NameListRevisions(
  args: InferRequestType<(typeof client.v1)[':name:listRevisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:listRevisions'].$get(args, options))
}

export async function postV1NameRollback(
  args: InferRequestType<(typeof client.v1)[':name:rollback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:rollback'].$post(args, options))
}

export async function postV1NameTagRevision(
  args: InferRequestType<(typeof client.v1)[':name:tagRevision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:tagRevision'].$post(args, options))
}

export async function getV1ParentApis(
  args: InferRequestType<(typeof client.v1)[':parent']['apis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].apis.$get(args, options))
}

export async function postV1ParentApis(
  args: InferRequestType<(typeof client.v1)[':parent']['apis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].apis.$post(args, options))
}

export async function getV1ParentArtifacts(
  args: InferRequestType<(typeof client.v1)[':parent']['artifacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].artifacts.$get(args, options))
}

export async function postV1ParentArtifacts(
  args: InferRequestType<(typeof client.v1)[':parent']['artifacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].artifacts.$post(args, options))
}

export async function getV1ParentDeployments(
  args: InferRequestType<(typeof client.v1)[':parent']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].deployments.$get(args, options))
}

export async function postV1ParentDeployments(
  args: InferRequestType<(typeof client.v1)[':parent']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].deployments.$post(args, options))
}

export async function postV1ParentInstances(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].instances.$post(args, options))
}

export async function getV1ParentSpecs(
  args: InferRequestType<(typeof client.v1)[':parent']['specs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].specs.$get(args, options))
}

export async function postV1ParentSpecs(
  args: InferRequestType<(typeof client.v1)[':parent']['specs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].specs.$post(args, options))
}

export async function getV1ParentVersions(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].versions.$get(args, options))
}

export async function postV1ParentVersions(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].versions.$post(args, options))
}

export async function getV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}
