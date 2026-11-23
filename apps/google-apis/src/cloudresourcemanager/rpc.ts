import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV3EffectiveTags(
  args: InferRequestType<typeof client.v3.effectiveTags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.effectiveTags.$get(args, options))
}

export async function getV3Folders(
  args: InferRequestType<typeof client.v3.folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.folders.$get(args, options))
}

export async function postV3Folders(
  args: InferRequestType<typeof client.v3.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.folders.$post(args, options))
}

export async function getV3FoldersSearch(
  args: InferRequestType<(typeof client.v3)['folders:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['folders:search'].$get(args, options))
}

export async function getV3Liens(
  args: InferRequestType<typeof client.v3.liens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.liens.$get(args, options))
}

export async function postV3Liens(
  args: InferRequestType<typeof client.v3.liens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.liens.$post(args, options))
}

export async function getV3OrganizationsSearch(
  args: InferRequestType<(typeof client.v3)['organizations:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['organizations:search'].$get(args, options))
}

export async function getV3Projects(
  args: InferRequestType<typeof client.v3.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.projects.$get(args, options))
}

export async function postV3Projects(
  args: InferRequestType<typeof client.v3.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.projects.$post(args, options))
}

export async function getV3ProjectsSearch(
  args: InferRequestType<(typeof client.v3)['projects:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['projects:search'].$get(args, options))
}

export async function getV3TagBindings(
  args: InferRequestType<typeof client.v3.tagBindings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.tagBindings.$get(args, options))
}

export async function postV3TagBindings(
  args: InferRequestType<typeof client.v3.tagBindings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.tagBindings.$post(args, options))
}

export async function getV3TagKeys(
  args: InferRequestType<typeof client.v3.tagKeys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.tagKeys.$get(args, options))
}

export async function postV3TagKeys(
  args: InferRequestType<typeof client.v3.tagKeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.tagKeys.$post(args, options))
}

export async function getV3TagKeysNamespaced(
  args: InferRequestType<typeof client.v3.tagKeys.namespaced.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.tagKeys.namespaced.$get(args, options))
}

export async function getV3TagValues(
  args: InferRequestType<typeof client.v3.tagValues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.tagValues.$get(args, options))
}

export async function postV3TagValues(
  args: InferRequestType<typeof client.v3.tagValues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.tagValues.$post(args, options))
}

export async function getV3TagValuesNamespaced(
  args: InferRequestType<typeof client.v3.tagValues.namespaced.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.tagValues.namespaced.$get(args, options))
}

export async function getV3Name(
  args: InferRequestType<(typeof client.v3)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].$get(args, options))
}

export async function deleteV3Name(
  args: InferRequestType<(typeof client.v3)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].$delete(args, options))
}

export async function patchV3Name(
  args: InferRequestType<(typeof client.v3)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name'].$patch(args, options))
}

export async function postV3NameMove(
  args: InferRequestType<(typeof client.v3)[':name:move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name:move'].$post(args, options))
}

export async function postV3NameUndelete(
  args: InferRequestType<(typeof client.v3)[':name:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':name:undelete'].$post(args, options))
}

export async function getV3ParentTagHolds(
  args: InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].tagHolds.$get(args, options))
}

export async function postV3ParentTagHolds(
  args: InferRequestType<(typeof client.v3)[':parent']['tagHolds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':parent'].tagHolds.$post(args, options))
}

export async function postV3ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v3)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':resource:getIamPolicy'].$post(args, options))
}

export async function postV3ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v3)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':resource:setIamPolicy'].$post(args, options))
}

export async function postV3ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v3)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3[':resource:testIamPermissions'].$post(args, options))
}
