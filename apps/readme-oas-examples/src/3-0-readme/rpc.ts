import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiRegistryUuid(
  args: InferRequestType<(typeof client)['api-registry'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-registry'][':uuid'].$get(args, options))
}

export async function getApiSpecification(
  args: InferRequestType<(typeof client)['api-specification']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-specification'].$get(args, options))
}

export async function postApiSpecification(
  args: InferRequestType<(typeof client)['api-specification']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-specification'].$post(args, options))
}

export async function putApiSpecificationId(
  args: InferRequestType<(typeof client)['api-specification'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-specification'][':id'].$put(args, options))
}

export async function deleteApiSpecificationId(
  args: InferRequestType<(typeof client)['api-specification'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-specification'][':id'].$delete(args, options))
}

export async function getApply(options?: ClientRequestOptions) {
  return await parseResponse(client.apply.$get(undefined, options))
}

export async function postApply(
  args: InferRequestType<typeof client.apply.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apply.$post(args, options))
}

export async function getCategories(
  args: InferRequestType<typeof client.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.$get(args, options))
}

export async function postCategories(
  args: InferRequestType<typeof client.categories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.$post(args, options))
}

export async function getCategoriesSlug(
  args: InferRequestType<(typeof client.categories)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':slug'].$get(args, options))
}

export async function putCategoriesSlug(
  args: InferRequestType<(typeof client.categories)[':slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':slug'].$put(args, options))
}

export async function deleteCategoriesSlug(
  args: InferRequestType<(typeof client.categories)[':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':slug'].$delete(args, options))
}

export async function getCategoriesSlugDocs(
  args: InferRequestType<(typeof client.categories)[':slug']['docs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':slug'].docs.$get(args, options))
}

export async function getChangelogs(
  args: InferRequestType<typeof client.changelogs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changelogs.$get(args, options))
}

export async function postChangelogs(
  args: InferRequestType<typeof client.changelogs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changelogs.$post(args, options))
}

export async function getChangelogsSlug(
  args: InferRequestType<(typeof client.changelogs)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changelogs[':slug'].$get(args, options))
}

export async function putChangelogsSlug(
  args: InferRequestType<(typeof client.changelogs)[':slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changelogs[':slug'].$put(args, options))
}

export async function deleteChangelogsSlug(
  args: InferRequestType<(typeof client.changelogs)[':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changelogs[':slug'].$delete(args, options))
}

export async function getCustompages(
  args: InferRequestType<typeof client.custompages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custompages.$get(args, options))
}

export async function postCustompages(
  args: InferRequestType<typeof client.custompages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custompages.$post(args, options))
}

export async function getCustompagesSlug(
  args: InferRequestType<(typeof client.custompages)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custompages[':slug'].$get(args, options))
}

export async function putCustompagesSlug(
  args: InferRequestType<(typeof client.custompages)[':slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custompages[':slug'].$put(args, options))
}

export async function deleteCustompagesSlug(
  args: InferRequestType<(typeof client.custompages)[':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custompages[':slug'].$delete(args, options))
}

export async function getDocsSlug(
  args: InferRequestType<(typeof client.docs)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docs[':slug'].$get(args, options))
}

export async function putDocsSlug(
  args: InferRequestType<(typeof client.docs)[':slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docs[':slug'].$put(args, options))
}

export async function deleteDocsSlug(
  args: InferRequestType<(typeof client.docs)[':slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docs[':slug'].$delete(args, options))
}

export async function getDocsSlugProduction(
  args: InferRequestType<(typeof client.docs)[':slug']['production']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docs[':slug'].production.$get(args, options))
}

export async function postDocs(
  args: InferRequestType<typeof client.docs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docs.$post(args, options))
}

export async function postDocsSearch(
  args: InferRequestType<typeof client.docs.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docs.search.$post(args, options))
}

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getSchema(options?: ClientRequestOptions) {
  return await parseResponse(client.schema.$get(undefined, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}

export async function postVersion(
  args: InferRequestType<typeof client.version.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.version.$post(args, options))
}

export async function getVersionVersionId(
  args: InferRequestType<(typeof client.version)[':versionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.version[':versionId'].$get(args, options))
}

export async function putVersionVersionId(
  args: InferRequestType<(typeof client.version)[':versionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.version[':versionId'].$put(args, options))
}

export async function deleteVersionVersionId(
  args: InferRequestType<(typeof client.version)[':versionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.version[':versionId'].$delete(args, options))
}
