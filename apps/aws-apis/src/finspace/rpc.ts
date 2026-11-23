import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEnvironment(
  args: InferRequestType<typeof client.environment.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environment.$get(args, options))
}

export async function postEnvironment(
  args: InferRequestType<typeof client.environment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environment.$post(args, options))
}

export async function getEnvironmentEnvironmentId(
  args: InferRequestType<(typeof client.environment)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environment[':environmentId'].$get(args, options))
}

export async function putEnvironmentEnvironmentId(
  args: InferRequestType<(typeof client.environment)[':environmentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environment[':environmentId'].$put(args, options))
}

export async function deleteEnvironmentEnvironmentId(
  args: InferRequestType<(typeof client.environment)[':environmentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environment[':environmentId'].$delete(args, options))
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
