import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$get(args, options))
}

export async function putV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$put(args, options))
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

export async function getV2NameLocations(
  args: InferRequestType<(typeof client.v2)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].locations.$get(args, options))
}

export async function getV2NameOperations(
  args: InferRequestType<(typeof client.v2)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].operations.$get(args, options))
}

export async function postV2NameCancel(
  args: InferRequestType<(typeof client.v2)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:cancel'].$post(args, options))
}

export async function postV2NameCheckConsistency(
  args: InferRequestType<(typeof client.v2)[':name:checkConsistency']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:checkConsistency'].$post(args, options))
}

export async function postV2NameDropRowRange(
  args: InferRequestType<(typeof client.v2)[':name:dropRowRange']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:dropRowRange'].$post(args, options))
}

export async function postV2NameGenerateConsistencyToken(
  args: InferRequestType<(typeof client.v2)[':name:generateConsistencyToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:generateConsistencyToken'].$post(args, options))
}

export async function postV2NameModifyColumnFamilies(
  args: InferRequestType<(typeof client.v2)[':name:modifyColumnFamilies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:modifyColumnFamilies'].$post(args, options))
}

export async function postV2NameUndelete(
  args: InferRequestType<(typeof client.v2)[':name:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name:undelete'].$post(args, options))
}

export async function getV2ParentAppProfiles(
  args: InferRequestType<(typeof client.v2)[':parent']['appProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].appProfiles.$get(args, options))
}

export async function postV2ParentAppProfiles(
  args: InferRequestType<(typeof client.v2)[':parent']['appProfiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].appProfiles.$post(args, options))
}

export async function getV2ParentBackups(
  args: InferRequestType<(typeof client.v2)[':parent']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].backups.$get(args, options))
}

export async function postV2ParentBackups(
  args: InferRequestType<(typeof client.v2)[':parent']['backups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].backups.$post(args, options))
}

export async function postV2ParentBackupsCopy(
  args: InferRequestType<(typeof client.v2)[':parent']['backups:copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent']['backups:copy'].$post(args, options))
}

export async function getV2ParentClusters(
  args: InferRequestType<(typeof client.v2)[':parent']['clusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].clusters.$get(args, options))
}

export async function postV2ParentClusters(
  args: InferRequestType<(typeof client.v2)[':parent']['clusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].clusters.$post(args, options))
}

export async function getV2ParentHotTablets(
  args: InferRequestType<(typeof client.v2)[':parent']['hotTablets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].hotTablets.$get(args, options))
}

export async function getV2ParentInstances(
  args: InferRequestType<(typeof client.v2)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].instances.$get(args, options))
}

export async function postV2ParentInstances(
  args: InferRequestType<(typeof client.v2)[':parent']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].instances.$post(args, options))
}

export async function getV2ParentTables(
  args: InferRequestType<(typeof client.v2)[':parent']['tables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].tables.$get(args, options))
}

export async function postV2ParentTables(
  args: InferRequestType<(typeof client.v2)[':parent']['tables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].tables.$post(args, options))
}

export async function postV2ParentTablesRestore(
  args: InferRequestType<(typeof client.v2)[':parent']['tables:restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent']['tables:restore'].$post(args, options))
}

export async function postV2ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v2)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':resource:getIamPolicy'].$post(args, options))
}

export async function postV2ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v2)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':resource:setIamPolicy'].$post(args, options))
}

export async function postV2ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v2)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':resource:testIamPermissions'].$post(args, options))
}
