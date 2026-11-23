import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta1MigrationJobGenerateSshScript(
  args: InferRequestType<(typeof client.v1beta1)[':migrationJob:generateSshScript']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':migrationJob:generateSshScript'].$post(args, options))
}

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

export async function getV1beta1NameLocations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].locations.$get(args, options))
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

export async function postV1beta1NamePromote(
  args: InferRequestType<(typeof client.v1beta1)[':name:promote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:promote'].$post(args, options))
}

export async function postV1beta1NameRestart(
  args: InferRequestType<(typeof client.v1beta1)[':name:restart']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:restart'].$post(args, options))
}

export async function postV1beta1NameResume(
  args: InferRequestType<(typeof client.v1beta1)[':name:resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:resume'].$post(args, options))
}

export async function postV1beta1NameStart(
  args: InferRequestType<(typeof client.v1beta1)[':name:start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:start'].$post(args, options))
}

export async function postV1beta1NameStop(
  args: InferRequestType<(typeof client.v1beta1)[':name:stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:stop'].$post(args, options))
}

export async function postV1beta1NameVerify(
  args: InferRequestType<(typeof client.v1beta1)[':name:verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:verify'].$post(args, options))
}

export async function getV1beta1ParentConnectionProfiles(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['connectionProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].connectionProfiles.$get(args, options))
}

export async function postV1beta1ParentConnectionProfiles(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['connectionProfiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].connectionProfiles.$post(args, options))
}

export async function getV1beta1ParentMigrationJobs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['migrationJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].migrationJobs.$get(args, options))
}

export async function postV1beta1ParentMigrationJobs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['migrationJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].migrationJobs.$post(args, options))
}

export async function getV1beta1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1beta1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1beta1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
}
