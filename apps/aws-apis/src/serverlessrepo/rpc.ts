import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApplications(
  args: InferRequestType<typeof client.applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications.$get(args, options))
}

export async function postApplications(
  args: InferRequestType<typeof client.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications.$post(args, options))
}

export async function putApplicationsApplicationIdVersionsSemanticVersion(
  args: InferRequestType<
    (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':applicationId'].versions[':semanticVersion'].$put(args, options),
  )
}

export async function postApplicationsApplicationIdChangesets(
  args: InferRequestType<(typeof client.applications)[':applicationId']['changesets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].changesets.$post(args, options))
}

export async function postApplicationsApplicationIdTemplates(
  args: InferRequestType<(typeof client.applications)[':applicationId']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].templates.$post(args, options))
}

export async function getApplicationsApplicationId(
  args: InferRequestType<(typeof client.applications)[':applicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].$get(args, options))
}

export async function deleteApplicationsApplicationId(
  args: InferRequestType<(typeof client.applications)[':applicationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].$delete(args, options))
}

export async function patchApplicationsApplicationId(
  args: InferRequestType<(typeof client.applications)[':applicationId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].$patch(args, options))
}

export async function getApplicationsApplicationIdPolicy(
  args: InferRequestType<(typeof client.applications)[':applicationId']['policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].policy.$get(args, options))
}

export async function putApplicationsApplicationIdPolicy(
  args: InferRequestType<(typeof client.applications)[':applicationId']['policy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].policy.$put(args, options))
}

export async function getApplicationsApplicationIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':applicationId'].templates[':templateId'].$get(args, options),
  )
}

export async function getApplicationsApplicationIdDependencies(
  args: InferRequestType<(typeof client.applications)[':applicationId']['dependencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].dependencies.$get(args, options))
}

export async function getApplicationsApplicationIdVersions(
  args: InferRequestType<(typeof client.applications)[':applicationId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].versions.$get(args, options))
}

export async function postApplicationsApplicationIdUnshare(
  args: InferRequestType<(typeof client.applications)[':applicationId']['unshare']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].unshare.$post(args, options))
}
