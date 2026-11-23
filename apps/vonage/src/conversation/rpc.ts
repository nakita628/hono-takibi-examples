import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConversations(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.$get(args, options))
}

export async function postConversations(
  args: InferRequestType<typeof client.conversations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.$post(args, options))
}

export async function getConversationsConversationId(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].$get(args, options))
}

export async function putConversationsConversationId(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].$put(args, options))
}

export async function deleteConversationsConversationId(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].$delete(args, options))
}

export async function getConversationsConversationIdEvents(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].events.$get(args, options))
}

export async function postConversationsConversationIdEvents(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].events.$post(args, options))
}

export async function getConversationsConversationIdEventsEventId(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['events'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id'].events[':event_id'].$get(args, options),
  )
}

export async function deleteConversationsConversationIdEventsEventId(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['events'][':event_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id'].events[':event_id'].$delete(args, options),
  )
}

export async function getConversationsConversationIdMembers(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].members.$get(args, options))
}

export async function postConversationsConversationIdMembers(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].members.$post(args, options))
}

export async function getConversationsConversationIdMembersMemberId(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['members'][':member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id'].members[':member_id'].$get(args, options),
  )
}

export async function putConversationsConversationIdMembersMemberId(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['members'][':member_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id'].members[':member_id'].$put(args, options),
  )
}

export async function deleteConversationsConversationIdMembersMemberId(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['members'][':member_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id'].members[':member_id'].$delete(args, options),
  )
}

export async function putConversationsConversationIdRecord(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['record']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].record.$put(args, options))
}

export async function getLegs(options?: ClientRequestOptions) {
  return await parseResponse(client.legs.$get(undefined, options))
}

export async function deleteLegsLegId(
  args: InferRequestType<(typeof client.legs)[':leg_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legs[':leg_id'].$delete(args, options))
}

export async function getUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.users.$get(undefined, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function putUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$put(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$delete(args, options))
}

export async function getUsersUserIdConversations(
  args: InferRequestType<(typeof client.users)[':user_id']['conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].conversations.$get(args, options))
}
