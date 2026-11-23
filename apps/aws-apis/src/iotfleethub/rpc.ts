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

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
