import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta1CatalogSearch(
  args: InferRequestType<(typeof client.v1beta1)['catalog:search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['catalog:search'].$post(args, options))
}

export async function getV1beta1EntriesLookup(
  args: InferRequestType<(typeof client.v1beta1)['entries:lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['entries:lookup'].$get(args, options))
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

export async function postV1beta1NameRename(
  args: InferRequestType<(typeof client.v1beta1)[':name:rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:rename'].$post(args, options))
}

export async function getV1beta1ParentEntries(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].entries.$get(args, options))
}

export async function postV1beta1ParentEntries(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['entries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].entries.$post(args, options))
}

export async function getV1beta1ParentEntryGroups(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['entryGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].entryGroups.$get(args, options))
}

export async function postV1beta1ParentEntryGroups(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['entryGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].entryGroups.$post(args, options))
}

export async function postV1beta1ParentFields(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['fields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].fields.$post(args, options))
}

export async function getV1beta1ParentPolicyTags(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['policyTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].policyTags.$get(args, options))
}

export async function postV1beta1ParentPolicyTags(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['policyTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].policyTags.$post(args, options))
}

export async function postV1beta1ParentTagTemplates(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['tagTemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].tagTemplates.$post(args, options))
}

export async function getV1beta1ParentTags(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].tags.$get(args, options))
}

export async function postV1beta1ParentTags(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].tags.$post(args, options))
}

export async function getV1beta1ParentTaxonomies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['taxonomies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].taxonomies.$get(args, options))
}

export async function postV1beta1ParentTaxonomies(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['taxonomies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].taxonomies.$post(args, options))
}

export async function getV1beta1ParentTaxonomiesExport(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['taxonomies:export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['taxonomies:export'].$get(args, options))
}

export async function postV1beta1ParentTaxonomiesImport(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['taxonomies:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['taxonomies:import'].$post(args, options))
}

export async function postV1beta1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:getIamPolicy'].$post(args, options))
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
