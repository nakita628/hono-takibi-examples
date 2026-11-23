import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postVersionsPublishAnon(
  args: InferRequestType<typeof client.versions.publish.anon.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions.publish.anon.$post(args, options))
}

export async function getVersionsVersionIdExportFormat(
  args: InferRequestType<(typeof client.versions)[':versionId']['export'][':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions[':versionId'].export[':format'].$get(args, options))
}

export async function putVersionsVersionIdImport(
  args: InferRequestType<(typeof client.versions)[':versionId']['import']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions[':versionId'].import.$put(args, options))
}

export async function postVersionsVersionIdPublish(
  args: InferRequestType<(typeof client.versions)[':versionId']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions[':versionId'].publish.$post(args, options))
}

export async function putVersionsVersionIdUnpublish(
  args: InferRequestType<(typeof client.versions)[':versionId']['unpublish']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions[':versionId'].unpublish.$put(args, options))
}
