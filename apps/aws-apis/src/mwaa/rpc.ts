import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postClitokenName(
  args: InferRequestType<(typeof client.clitoken)[':Name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clitoken[':Name'].$post(args, options))
}

export async function getEnvironmentsName(
  args: InferRequestType<(typeof client.environments)[':Name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':Name'].$get(args, options))
}

export async function putEnvironmentsName(
  args: InferRequestType<(typeof client.environments)[':Name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':Name'].$put(args, options))
}

export async function deleteEnvironmentsName(
  args: InferRequestType<(typeof client.environments)[':Name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':Name'].$delete(args, options))
}

export async function patchEnvironmentsName(
  args: InferRequestType<(typeof client.environments)[':Name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':Name'].$patch(args, options))
}

export async function postWebtokenName(
  args: InferRequestType<(typeof client.webtoken)[':Name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webtoken[':Name'].$post(args, options))
}

export async function getEnvironments(
  args: InferRequestType<typeof client.environments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$post(args, options))
}

export async function postMetricsEnvironmentsEnvironmentName(
  args: InferRequestType<(typeof client.metrics.environments)[':EnvironmentName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.environments[':EnvironmentName'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
}
