import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function post(
  args: InferRequestType<typeof client.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$post(args, options))
}

export async function postCache(
  args: InferRequestType<typeof client.cache.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cache.$post(args, options))
}

export async function getCacheNonce(
  args: InferRequestType<(typeof client.cache)[':nonce']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cache[':nonce'].$get(args, options))
}

export async function postCollaborators(
  args: InferRequestType<typeof client.collaborators.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaborators.$post(args, options))
}

export async function getEnvironmentIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.environment.index.$get(undefined, options))
}

export async function postFile(
  args: InferRequestType<typeof client.file.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file.$post(args, options))
}

export async function postFileJson(
  args: InferRequestType<typeof client.file.json.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file.json.$post(args, options))
}

export async function getNoTagsSpec(options?: ClientRequestOptions) {
  return await parseResponse(client.no_tags_spec.$get(undefined, options))
}

export async function getOutlineSchemaSchemaVersionStoryOutlineJson(
  args: InferRequestType<
    (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['outline-schema'][':schema_version']['story-outline.json'].$get(args, options),
  )
}

export async function getPermissionTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.permission_types.$get(undefined, options))
}

export async function getSessionsSessionId(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':session_id'].$get(args, options))
}

export async function deleteSessionsSessionId(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':session_id'].$delete(args, options))
}

export async function getSessionsSessionIdViews(
  args: InferRequestType<(typeof client.sessions)[':session_id']['views']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':session_id'].views.$get(args, options))
}

export async function postSessionsSessionIdViews(
  args: InferRequestType<(typeof client.sessions)[':session_id']['views']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':session_id'].views.$post(args, options))
}

export async function getViewsViewId(
  args: InferRequestType<(typeof client.views)[':view_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.views[':view_id'].$get(args, options))
}

export async function deleteViewsViewId(
  args: InferRequestType<(typeof client.views)[':view_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.views[':view_id'].$delete(args, options))
}

export async function getId(
  args: InferRequestType<(typeof client)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].$get(args, options))
}

export async function putId(
  args: InferRequestType<(typeof client)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].$put(args, options))
}

export async function deleteId(
  args: InferRequestType<(typeof client)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].$delete(args, options))
}

export async function getIdAnalytics(
  args: InferRequestType<(typeof client)[':id']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].analytics.$get(args, options))
}

export async function getIdCollaborators(
  args: InferRequestType<(typeof client)[':id']['collaborators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].collaborators.$get(args, options))
}

export async function postIdCollaborators(
  args: InferRequestType<(typeof client)[':id']['collaborators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].collaborators.$post(args, options))
}

export async function getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontype(
  args: InferRequestType<
    (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':id'].collaborators.authorize[':story_collaborator_userid'][':permissiontype'].$get(
      args,
      options,
    ),
  )
}

export async function postIdCollaboratorsInactive(
  args: InferRequestType<(typeof client)[':id']['collaborators']['inactive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].collaborators.inactive.$post(args, options))
}

export async function getIdCollaboratorsStoryCollaboratorUserid(
  args: InferRequestType<
    (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':id'].collaborators[':story_collaborator_userid'].$get(args, options),
  )
}

export async function putIdCollaboratorsStoryCollaboratorUserid(
  args: InferRequestType<
    (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':id'].collaborators[':story_collaborator_userid'].$put(args, options),
  )
}

export async function deleteIdCollaboratorsStoryCollaboratorUserid(
  args: InferRequestType<
    (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':id'].collaborators[':story_collaborator_userid'].$delete(args, options),
  )
}

export async function getIdEvents(
  args: InferRequestType<(typeof client)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].events.$get(args, options))
}

export async function postIdEvents(
  args: InferRequestType<(typeof client)[':id']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].events.$post(args, options))
}

export async function postIdFile(
  args: InferRequestType<(typeof client)[':id']['file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].file.$post(args, options))
}

export async function getIdFileOoxmlAutomationId(
  args: InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].file[':ooxml_automation_id'].$get(args, options))
}

export async function deleteIdFileOoxmlAutomationId(
  args: InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].file[':ooxml_automation_id'].$delete(args, options))
}

export async function getIdMessages(
  args: InferRequestType<(typeof client)[':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].messages.$get(args, options))
}

export async function postIdMessages(
  args: InferRequestType<(typeof client)[':id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].messages.$post(args, options))
}

export async function getIdOutline(
  args: InferRequestType<(typeof client)[':id']['outline']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].outline.$get(args, options))
}

export async function postIdOutline(
  args: InferRequestType<(typeof client)[':id']['outline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].outline.$post(args, options))
}

export async function getIdPublicIndex(
  args: InferRequestType<(typeof client)[':id']['public']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].public.index.$get(args, options))
}

export async function getIdReveal(
  args: InferRequestType<(typeof client)[':id']['reveal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].reveal.$get(args, options))
}

export async function getIdSessions(
  args: InferRequestType<(typeof client)[':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].sessions.$get(args, options))
}

export async function postIdSessions(
  args: InferRequestType<(typeof client)[':id']['sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].sessions.$post(args, options))
}

export async function getIdStatus(
  args: InferRequestType<(typeof client)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':id'].status.$get(args, options))
}
