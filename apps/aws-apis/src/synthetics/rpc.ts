import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function patchGroupGroupIdentifierAssociate(
  args: InferRequestType<(typeof client.group)[':groupIdentifier']['associate']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupIdentifier'].associate.$patch(args, options))
}

export async function postCanary(
  args: InferRequestType<typeof client.canary.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canary.$post(args, options))
}

export async function postGroup(
  args: InferRequestType<typeof client.group.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group.$post(args, options))
}

export async function getCanaryName(
  args: InferRequestType<(typeof client.canary)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canary[':name'].$get(args, options))
}

export async function deleteCanaryName(
  args: InferRequestType<(typeof client.canary)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canary[':name'].$delete(args, options))
}

export async function patchCanaryName(
  args: InferRequestType<(typeof client.canary)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canary[':name'].$patch(args, options))
}

export async function getGroupGroupIdentifier(
  args: InferRequestType<(typeof client.group)[':groupIdentifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupIdentifier'].$get(args, options))
}

export async function deleteGroupGroupIdentifier(
  args: InferRequestType<(typeof client.group)[':groupIdentifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupIdentifier'].$delete(args, options))
}

export async function postCanaries(
  args: InferRequestType<typeof client.canaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canaries.$post(args, options))
}

export async function postCanariesLastRun(
  args: InferRequestType<(typeof client.canaries)['last-run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canaries['last-run'].$post(args, options))
}

export async function postRuntimeVersions(
  args: InferRequestType<(typeof client)['runtime-versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['runtime-versions'].$post(args, options))
}

export async function patchGroupGroupIdentifierDisassociate(
  args: InferRequestType<(typeof client.group)[':groupIdentifier']['disassociate']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupIdentifier'].disassociate.$patch(args, options))
}

export async function postCanaryNameRuns(
  args: InferRequestType<(typeof client.canary)[':name']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canary[':name'].runs.$post(args, options))
}

export async function postResourceResourceArnGroups(
  args: InferRequestType<(typeof client.resource)[':resourceArn']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource[':resourceArn'].groups.$post(args, options))
}

export async function postGroupGroupIdentifierResources(
  args: InferRequestType<(typeof client.group)[':groupIdentifier']['resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':groupIdentifier'].resources.$post(args, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
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

export async function postCanaryNameStart(
  args: InferRequestType<(typeof client.canary)[':name']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canary[':name'].start.$post(args, options))
}

export async function postCanaryNameStop(
  args: InferRequestType<(typeof client.canary)[':name']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.canary[':name'].stop.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
