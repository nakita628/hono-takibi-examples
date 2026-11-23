import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWorkspacesWorkspaceIdAlertmanagerDefinition(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspaceId'].alertmanager.definition.$get(args, options),
  )
}

export async function putWorkspacesWorkspaceIdAlertmanagerDefinition(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspaceId'].alertmanager.definition.$put(args, options),
  )
}

export async function postWorkspacesWorkspaceIdAlertmanagerDefinition(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspaceId'].alertmanager.definition.$post(args, options),
  )
}

export async function deleteWorkspacesWorkspaceIdAlertmanagerDefinition(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspaceId'].alertmanager.definition.$delete(args, options),
  )
}

export async function getWorkspacesWorkspaceIdLogging(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].logging.$get(args, options))
}

export async function putWorkspacesWorkspaceIdLogging(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].logging.$put(args, options))
}

export async function postWorkspacesWorkspaceIdLogging(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].logging.$post(args, options))
}

export async function deleteWorkspacesWorkspaceIdLogging(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].logging.$delete(args, options))
}

export async function getWorkspacesWorkspaceIdRulegroupsnamespaces(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspaceId'].rulegroupsnamespaces.$get(args, options),
  )
}

export async function postWorkspacesWorkspaceIdRulegroupsnamespaces(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspaceId'].rulegroupsnamespaces.$post(args, options),
  )
}

export async function getWorkspaces(
  args: InferRequestType<typeof client.workspaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.$get(args, options))
}

export async function postWorkspaces(
  args: InferRequestType<typeof client.workspaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.$post(args, options))
}

export async function getWorkspacesWorkspaceIdRulegroupsnamespacesName(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspaceId'].rulegroupsnamespaces[':name'].$get(args, options),
  )
}

export async function putWorkspacesWorkspaceIdRulegroupsnamespacesName(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspaceId'].rulegroupsnamespaces[':name'].$put(args, options),
  )
}

export async function deleteWorkspacesWorkspaceIdRulegroupsnamespacesName(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.workspaces[':workspaceId'].rulegroupsnamespaces[':name'].$delete(args, options),
  )
}

export async function getWorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].$get(args, options))
}

export async function deleteWorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].$delete(args, options))
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

export async function postWorkspacesWorkspaceIdAlias(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['alias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspaceId'].alias.$post(args, options))
}
