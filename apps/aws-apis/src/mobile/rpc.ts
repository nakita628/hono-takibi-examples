import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function deleteProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$delete(args, options))
}

export async function getBundlesBundleId(
  args: InferRequestType<(typeof client.bundles)[':bundleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundles[':bundleId'].$get(args, options))
}

export async function postBundlesBundleId(
  args: InferRequestType<(typeof client.bundles)[':bundleId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundles[':bundleId'].$post(args, options))
}

export async function getProjectProjectId(
  args: InferRequestType<(typeof client)['project#projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['project#projectId'].$get(args, options))
}

export async function postExportsProjectId(
  args: InferRequestType<(typeof client.exports)[':projectId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':projectId'].$post(args, options))
}

export async function getBundles(
  args: InferRequestType<typeof client.bundles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bundles.$get(args, options))
}

export async function postUpdateProjectId(
  args: InferRequestType<(typeof client)['update#projectId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['update#projectId'].$post(args, options))
}
