import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getExperimentTemplates(
  args: InferRequestType<typeof client.experimentTemplates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.experimentTemplates.$get(args, options))
}

export async function postExperimentTemplates(
  args: InferRequestType<typeof client.experimentTemplates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.experimentTemplates.$post(args, options))
}

export async function getExperimentTemplatesId(
  args: InferRequestType<(typeof client.experimentTemplates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.experimentTemplates[':id'].$get(args, options))
}

export async function deleteExperimentTemplatesId(
  args: InferRequestType<(typeof client.experimentTemplates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.experimentTemplates[':id'].$delete(args, options))
}

export async function patchExperimentTemplatesId(
  args: InferRequestType<(typeof client.experimentTemplates)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.experimentTemplates[':id'].$patch(args, options))
}

export async function getActionsId(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].$get(args, options))
}

export async function getExperimentsId(
  args: InferRequestType<(typeof client.experiments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.experiments[':id'].$get(args, options))
}

export async function deleteExperimentsId(
  args: InferRequestType<(typeof client.experiments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.experiments[':id'].$delete(args, options))
}

export async function getTargetResourceTypesResourceType(
  args: InferRequestType<(typeof client.targetResourceTypes)[':resourceType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targetResourceTypes[':resourceType'].$get(args, options))
}

export async function getActions(
  args: InferRequestType<typeof client.actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions.$get(args, options))
}

export async function getExperiments(
  args: InferRequestType<typeof client.experiments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.experiments.$get(args, options))
}

export async function postExperiments(
  args: InferRequestType<typeof client.experiments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.experiments.$post(args, options))
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

export async function deleteTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$delete(args, options))
}

export async function getTargetResourceTypes(
  args: InferRequestType<typeof client.targetResourceTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.targetResourceTypes.$get(args, options))
}
