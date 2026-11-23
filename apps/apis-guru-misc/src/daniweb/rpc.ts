import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApps(
  args: InferRequestType<typeof client.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$get(args, options))
}

export async function getAppsID(
  args: InferRequestType<(typeof client.apps)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':ID'].$get(args, options))
}

export async function getAudiences(
  args: InferRequestType<typeof client.audiences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences.$get(args, options))
}

export async function getAudiencesID(
  args: InferRequestType<(typeof client.audiences)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences[':ID'].$get(args, options))
}

export async function postAudiencesIDMemberships(
  args: InferRequestType<(typeof client.audiences)[':ID']['memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences[':ID'].memberships.$post(args, options))
}

export async function getAutocompletes(
  args: InferRequestType<typeof client.autocompletes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.autocompletes.$get(args, options))
}

export async function postConversationsSchedules(
  args: InferRequestType<typeof client.conversations.schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.schedules.$post(args, options))
}

export async function postConversationsSearches(
  args: InferRequestType<typeof client.conversations.searches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.searches.$post(args, options))
}

export async function getConversationsStatuses(
  args: InferRequestType<typeof client.conversations.statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.statuses.$get(args, options))
}

export async function getConversationsID(
  args: InferRequestType<(typeof client.conversations)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':ID'].$get(args, options))
}

export async function getConversationsIDMessages(
  args: InferRequestType<(typeof client.conversations)[':ID']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':ID'].messages.$get(args, options))
}

export async function postConversationsIDMessages(
  args: InferRequestType<(typeof client.conversations)[':ID']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':ID'].messages.$post(args, options))
}

export async function postConversationsIDSchedules(
  args: InferRequestType<(typeof client.conversations)[':ID']['schedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':ID'].schedules.$post(args, options))
}

export async function postConversationsIDSearches(
  args: InferRequestType<(typeof client.conversations)[':ID']['searches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':ID'].searches.$post(args, options))
}

export async function getConversationsIDStatuses(
  args: InferRequestType<(typeof client.conversations)[':ID']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':ID'].statuses.$get(args, options))
}

export async function patchConversationsIDStatuses(
  args: InferRequestType<(typeof client.conversations)[':ID']['statuses']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':ID'].statuses.$patch(args, options))
}

export async function getGroups(
  args: InferRequestType<typeof client.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$get(args, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
}

export async function postGroupsMessagesMetadataFilters(
  args: InferRequestType<typeof client.groups.messages.metadata.filters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.messages.metadata.filters.$post(args, options))
}

export async function getGroupsMessagesID(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.messages[':ID'].$get(args, options))
}

export async function deleteGroupsMessagesID(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.messages[':ID'].$delete(args, options))
}

export async function getGroupsMessagesIDMetadata(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.messages[':ID'].metadata.$get(args, options))
}

export async function postGroupsMessagesIDMetadata(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.messages[':ID'].metadata.$post(args, options))
}

export async function getGroupsMessagesIDMetadataCollections(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.messages[':ID'].metadata.collections.$get(args, options))
}

export async function postGroupsSchedules(
  args: InferRequestType<typeof client.groups.schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.schedules.$post(args, options))
}

export async function getGroupsStatuses(
  args: InferRequestType<typeof client.groups.statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.statuses.$get(args, options))
}

export async function getGroupsID(
  args: InferRequestType<(typeof client.groups)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':ID'].$get(args, options))
}

export async function patchGroupsID(
  args: InferRequestType<(typeof client.groups)[':ID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':ID'].$patch(args, options))
}

export async function getGroupsIDMemberships(
  args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':ID'].memberships.$get(args, options))
}

export async function postGroupsIDMemberships(
  args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':ID'].memberships.$post(args, options))
}

export async function deleteGroupsIDMemberships(
  args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':ID'].memberships.$delete(args, options))
}

export async function patchGroupsIDMemberships(
  args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':ID'].memberships.$patch(args, options))
}

export async function getGroupsIDMessages(
  args: InferRequestType<(typeof client.groups)[':ID']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':ID'].messages.$get(args, options))
}

export async function postGroupsIDMessages(
  args: InferRequestType<(typeof client.groups)[':ID']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':ID'].messages.$post(args, options))
}

export async function postGroupsIDSchedules(
  args: InferRequestType<(typeof client.groups)[':ID']['schedules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':ID'].schedules.$post(args, options))
}

export async function getGroupsIDStatuses(
  args: InferRequestType<(typeof client.groups)[':ID']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':ID'].statuses.$get(args, options))
}

export async function getIndustries(options?: ClientRequestOptions) {
  return await parseResponse(client.industries.$get(undefined, options))
}

export async function postMarkdown(
  args: InferRequestType<typeof client.markdown.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.markdown.$post(args, options))
}

export async function getMarkdownEmoticons(options?: ClientRequestOptions) {
  return await parseResponse(client.markdown.emoticons.$get(undefined, options))
}

export async function postMessagesMetadataFilters(
  args: InferRequestType<typeof client.messages.metadata.filters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.metadata.filters.$post(args, options))
}

export async function getMessagesID(
  args: InferRequestType<(typeof client.messages)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':ID'].$get(args, options))
}

export async function getMessagesIDMetadata(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':ID'].metadata.$get(args, options))
}

export async function postMessagesIDMetadata(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':ID'].metadata.$post(args, options))
}

export async function getMessagesIDMetadataCollections(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':ID'].metadata.collections.$get(args, options))
}

export async function postPositions(
  args: InferRequestType<typeof client.positions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.positions.$post(args, options))
}

export async function deletePositionsID(
  args: InferRequestType<(typeof client.positions)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.positions[':ID'].$delete(args, options))
}

export async function patchPositionsID(
  args: InferRequestType<(typeof client.positions)[':ID']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.positions[':ID'].$patch(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsersInvites(
  args: InferRequestType<typeof client.users.invites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.invites.$post(args, options))
}

export async function postUsersMetadataFilters(
  args: InferRequestType<typeof client.users.metadata.filters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.metadata.filters.$post(args, options))
}

export async function getUsersNearby(
  args: InferRequestType<typeof client.users.nearby.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.nearby.$get(args, options))
}

export async function postUsersSearches(
  args: InferRequestType<typeof client.users.searches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.searches.$post(args, options))
}

export async function getUsersID(
  args: InferRequestType<(typeof client.users)[':ID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ID'].$get(args, options))
}

export async function getUsersIDGroups(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ID'].groups.$get(args, options))
}

export async function getUsersIDGroupsMessages(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ID'].groups.messages.$get(args, options))
}

export async function postUsersIDMessages(
  args: InferRequestType<(typeof client.users)[':ID']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ID'].messages.$post(args, options))
}

export async function getUsersIDMetadata(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ID'].metadata.$get(args, options))
}

export async function postUsersIDMetadata(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ID'].metadata.$post(args, options))
}

export async function getUsersIDMetadataCollections(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ID'].metadata.collections.$get(args, options))
}

export async function getUsersIDPositions(
  args: InferRequestType<(typeof client.users)[':ID']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ID'].positions.$get(args, options))
}

export async function getUsersIDSynergies(
  args: InferRequestType<(typeof client.users)[':ID']['synergies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ID'].synergies.$get(args, options))
}

export async function patchUsersIDSynergies(
  args: InferRequestType<(typeof client.users)[':ID']['synergies']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':ID'].synergies.$patch(args, options))
}

export async function getUsersTilde(options?: ClientRequestOptions) {
  return await parseResponse(client.users['~'].$get(undefined, options))
}

export async function patchUsersTilde(
  args: InferRequestType<(typeof client.users)['~']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['~'].$patch(args, options))
}

export async function getWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.$get(undefined, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function deleteWebhooksID(
  args: InferRequestType<(typeof client.webhooks)[':ID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':ID'].$delete(args, options))
}
