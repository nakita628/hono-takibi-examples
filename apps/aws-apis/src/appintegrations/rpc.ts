import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDataIntegrations(
  args: InferRequestType<typeof client.dataIntegrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataIntegrations.$get(args, options))
}

export async function postDataIntegrations(
  args: InferRequestType<typeof client.dataIntegrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataIntegrations.$post(args, options))
}

export async function getEventIntegrations(
  args: InferRequestType<typeof client.eventIntegrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventIntegrations.$get(args, options))
}

export async function postEventIntegrations(
  args: InferRequestType<typeof client.eventIntegrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventIntegrations.$post(args, options))
}

export async function getDataIntegrationsIdentifier(
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataIntegrations[':Identifier'].$get(args, options))
}

export async function deleteDataIntegrationsIdentifier(
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataIntegrations[':Identifier'].$delete(args, options))
}

export async function patchDataIntegrationsIdentifier(
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataIntegrations[':Identifier'].$patch(args, options))
}

export async function getEventIntegrationsName(
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventIntegrations[':Name'].$get(args, options))
}

export async function deleteEventIntegrationsName(
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventIntegrations[':Name'].$delete(args, options))
}

export async function patchEventIntegrationsName(
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventIntegrations[':Name'].$patch(args, options))
}

export async function getDataIntegrationsIdentifierAssociations(
  args: InferRequestType<(typeof client.dataIntegrations)[':Identifier']['associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dataIntegrations[':Identifier'].associations.$get(args, options),
  )
}

export async function getEventIntegrationsNameAssociations(
  args: InferRequestType<(typeof client.eventIntegrations)[':Name']['associations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventIntegrations[':Name'].associations.$get(args, options))
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
