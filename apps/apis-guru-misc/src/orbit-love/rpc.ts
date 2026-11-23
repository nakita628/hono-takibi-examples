import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function getWorkspaces(options?: ClientRequestOptions) {
  return await parseResponse(client.workspaces.$get(undefined, options))
}

export async function getWorkspacesWorkspaceSlug(
  args: InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_slug'].$get(args, options))
}

export async function getWorkspaceSlugActivities(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].activities.$get(args, options))
}

export async function postWorkspaceSlugActivities(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].activities.$post(args, options))
}

export async function getWorkspaceSlugActivitiesId(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].activities[':id'].$get(args, options))
}

export async function getWorkspaceSlugActivityTypes(
  args: InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].activity_types.$get(args, options))
}

export async function getWorkspaceSlugMembers(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].members.$get(args, options))
}

export async function postWorkspaceSlugMembers(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].members.$post(args, options))
}

export async function getWorkspaceSlugMembersFind(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].members.find.$get(args, options))
}

export async function getWorkspaceSlugMembersMemberSlug(
  args: InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].members[':member_slug'].$get(args, options))
}

export async function putWorkspaceSlugMembersMemberSlug(
  args: InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].members[':member_slug'].$put(args, options))
}

export async function deleteWorkspaceSlugMembersMemberSlug(
  args: InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].members[':member_slug'].$delete(args, options),
  )
}

export async function getWorkspaceSlugMembersMemberSlugActivities(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].members[':member_slug'].activities.$get(args, options),
  )
}

export async function postWorkspaceSlugMembersMemberSlugActivities(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].members[':member_slug'].activities.$post(args, options),
  )
}

export async function putWorkspaceSlugMembersMemberSlugActivitiesId(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].members[':member_slug'].activities[':id'].$put(args, options),
  )
}

export async function deleteWorkspaceSlugMembersMemberSlugActivitiesId(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].members[':member_slug'].activities[':id'].$delete(args, options),
  )
}

export async function postWorkspaceSlugMembersMemberSlugIdentities(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].members[':member_slug'].identities.$post(args, options),
  )
}

export async function deleteWorkspaceSlugMembersMemberSlugIdentities(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].members[':member_slug'].identities.$delete(args, options),
  )
}

export async function getWorkspaceSlugMembersMemberSlugNotes(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].members[':member_slug'].notes.$get(args, options),
  )
}

export async function postWorkspaceSlugMembersMemberSlugNotes(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].members[':member_slug'].notes.$post(args, options),
  )
}

export async function putWorkspaceSlugMembersMemberSlugNotesId(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['notes'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].members[':member_slug'].notes[':id'].$put(args, options),
  )
}

export async function getWorkspaceSlugOrganizations(
  args: InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].organizations.$get(args, options))
}

export async function getWorkspaceSlugOrganizationsOrganizationId(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].organizations[':organization_id'].$get(args, options),
  )
}

export async function putWorkspaceSlugOrganizationsOrganizationId(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].organizations[':organization_id'].$put(args, options),
  )
}

export async function getWorkspaceSlugOrganizationsOrganizationIdActivities(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].organizations[':organization_id'].activities.$get(args, options),
  )
}

export async function getWorkspaceSlugOrganizationsOrganizationIdMembers(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':workspace_slug'].organizations[':organization_id'].members.$get(args, options),
  )
}

export async function getWorkspaceSlugReports(
  args: InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].reports.$get(args, options))
}

export async function getWorkspaceSlugWebhooks(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].webhooks.$get(args, options))
}

export async function postWorkspaceSlugWebhooks(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].webhooks.$post(args, options))
}

export async function getWorkspaceSlugWebhooksId(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].webhooks[':id'].$get(args, options))
}

export async function putWorkspaceSlugWebhooksId(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].webhooks[':id'].$put(args, options))
}

export async function deleteWorkspaceSlugWebhooksId(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':workspace_slug'].webhooks[':id'].$delete(args, options))
}
