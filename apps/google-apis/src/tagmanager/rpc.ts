import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getTagmanagerV2Accounts(
  args: InferRequestType<typeof client.tagmanager.v2.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2.accounts.$get(args, options))
}

export async function getTagmanagerV2AccountsContainersLookup(
  args: InferRequestType<(typeof client.tagmanager.v2.accounts)['containers:lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2.accounts['containers:lookup'].$get(args, options))
}

export async function getTagmanagerV2ParentBuiltInVariables(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].built_in_variables.$get(args, options))
}

export async function postTagmanagerV2ParentBuiltInVariables(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['built_in_variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tagmanager.v2[':parent'].built_in_variables.$post(args, options),
  )
}

export async function getTagmanagerV2ParentClients(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].clients.$get(args, options))
}

export async function postTagmanagerV2ParentClients(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].clients.$post(args, options))
}

export async function getTagmanagerV2ParentContainers(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].containers.$get(args, options))
}

export async function postTagmanagerV2ParentContainers(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['containers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].containers.$post(args, options))
}

export async function getTagmanagerV2ParentDestinations(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].destinations.$get(args, options))
}

export async function postTagmanagerV2ParentDestinationsLink(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['destinations:link']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tagmanager.v2[':parent']['destinations:link'].$post(args, options),
  )
}

export async function getTagmanagerV2ParentEnvironments(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].environments.$get(args, options))
}

export async function postTagmanagerV2ParentEnvironments(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].environments.$post(args, options))
}

export async function getTagmanagerV2ParentFolders(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].folders.$get(args, options))
}

export async function postTagmanagerV2ParentFolders(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['folders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].folders.$post(args, options))
}

export async function getTagmanagerV2ParentGtagConfig(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].gtag_config.$get(args, options))
}

export async function postTagmanagerV2ParentGtagConfig(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['gtag_config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].gtag_config.$post(args, options))
}

export async function getTagmanagerV2ParentTags(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].tags.$get(args, options))
}

export async function postTagmanagerV2ParentTags(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].tags.$post(args, options))
}

export async function getTagmanagerV2ParentTemplates(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].templates.$get(args, options))
}

export async function postTagmanagerV2ParentTemplates(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].templates.$post(args, options))
}

export async function getTagmanagerV2ParentTriggers(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].triggers.$get(args, options))
}

export async function postTagmanagerV2ParentTriggers(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['triggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].triggers.$post(args, options))
}

export async function getTagmanagerV2ParentUserPermissions(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].user_permissions.$get(args, options))
}

export async function postTagmanagerV2ParentUserPermissions(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['user_permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].user_permissions.$post(args, options))
}

export async function getTagmanagerV2ParentVariables(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].variables.$get(args, options))
}

export async function postTagmanagerV2ParentVariables(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].variables.$post(args, options))
}

export async function getTagmanagerV2ParentVersionHeaders(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['version_headers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].version_headers.$get(args, options))
}

export async function getTagmanagerV2ParentVersionHeadersLatest(
  args: InferRequestType<
    (typeof client.tagmanager.v2)[':parent']['version_headers:latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tagmanager.v2[':parent']['version_headers:latest'].$get(args, options),
  )
}

export async function getTagmanagerV2ParentVersionsLive(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['versions:live']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent']['versions:live'].$get(args, options))
}

export async function getTagmanagerV2ParentWorkspaces(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].workspaces.$get(args, options))
}

export async function postTagmanagerV2ParentWorkspaces(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['workspaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].workspaces.$post(args, options))
}

export async function getTagmanagerV2ParentZones(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].zones.$get(args, options))
}

export async function postTagmanagerV2ParentZones(
  args: InferRequestType<(typeof client.tagmanager.v2)[':parent']['zones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':parent'].zones.$post(args, options))
}

export async function getTagmanagerV2Path(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path'].$get(args, options))
}

export async function putTagmanagerV2Path(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path'].$put(args, options))
}

export async function deleteTagmanagerV2Path(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path'].$delete(args, options))
}

export async function postTagmanagerV2PathBuiltInVariablesRevert(
  args: InferRequestType<
    (typeof client.tagmanager.v2)[':path']['built_in_variables:revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tagmanager.v2[':path']['built_in_variables:revert'].$post(args, options),
  )
}

export async function getTagmanagerV2PathStatus(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path'].status.$get(args, options))
}

export async function postTagmanagerV2PathCombine(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:combine']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:combine'].$post(args, options))
}

export async function postTagmanagerV2PathCreateVersion(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:create_version']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:create_version'].$post(args, options))
}

export async function postTagmanagerV2PathEntities(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:entities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:entities'].$post(args, options))
}

export async function postTagmanagerV2PathMoveEntitiesToFolder(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:move_entities_to_folder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tagmanager.v2[':path:move_entities_to_folder'].$post(args, options),
  )
}

export async function postTagmanagerV2PathMoveTagId(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:move_tag_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:move_tag_id'].$post(args, options))
}

export async function postTagmanagerV2PathPublish(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:publish'].$post(args, options))
}

export async function postTagmanagerV2PathQuickPreview(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:quick_preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:quick_preview'].$post(args, options))
}

export async function postTagmanagerV2PathReauthorize(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:reauthorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:reauthorize'].$post(args, options))
}

export async function postTagmanagerV2PathResolveConflict(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:resolve_conflict']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:resolve_conflict'].$post(args, options))
}

export async function postTagmanagerV2PathRevert(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:revert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:revert'].$post(args, options))
}

export async function postTagmanagerV2PathSetLatest(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:set_latest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:set_latest'].$post(args, options))
}

export async function getTagmanagerV2PathSnippet(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:snippet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:snippet'].$get(args, options))
}

export async function postTagmanagerV2PathSync(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:sync'].$post(args, options))
}

export async function postTagmanagerV2PathUndelete(
  args: InferRequestType<(typeof client.tagmanager.v2)[':path:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagmanager.v2[':path:undelete'].$post(args, options))
}
