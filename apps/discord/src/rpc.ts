import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApplicationsMe(options?: ClientRequestOptions) {
  return await parseResponse(client.applications['@me'].$get(undefined, options))
}

export async function patchApplicationsMe(
  args: InferRequestType<(typeof client.applications)['@me']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications['@me'].$patch(args, options))
}

export async function getApplicationsApplicationId(
  args: InferRequestType<(typeof client.applications)[':application_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application_id'].$get(args, options))
}

export async function patchApplicationsApplicationId(
  args: InferRequestType<(typeof client.applications)[':application_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application_id'].$patch(args, options))
}

export async function getApplicationsApplicationIdActivityInstancesInstanceId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['activity-instances'][':instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id']['activity-instances'][':instance_id'].$get(
      args,
      options,
    ),
  )
}

export async function postApplicationsApplicationIdAttachment(
  args: InferRequestType<(typeof client.applications)[':application_id']['attachment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application_id'].attachment.$post(args, options))
}

export async function getApplicationsApplicationIdCommands(
  args: InferRequestType<(typeof client.applications)[':application_id']['commands']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application_id'].commands.$get(args, options))
}

export async function putApplicationsApplicationIdCommands(
  args: InferRequestType<(typeof client.applications)[':application_id']['commands']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application_id'].commands.$put(args, options))
}

export async function postApplicationsApplicationIdCommands(
  args: InferRequestType<(typeof client.applications)[':application_id']['commands']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application_id'].commands.$post(args, options))
}

export async function getApplicationsApplicationIdCommandsCommandId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['commands'][':command_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].commands[':command_id'].$get(args, options),
  )
}

export async function deleteApplicationsApplicationIdCommandsCommandId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['commands'][':command_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].commands[':command_id'].$delete(args, options),
  )
}

export async function patchApplicationsApplicationIdCommandsCommandId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['commands'][':command_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].commands[':command_id'].$patch(args, options),
  )
}

export async function getApplicationsApplicationIdEmojis(
  args: InferRequestType<(typeof client.applications)[':application_id']['emojis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application_id'].emojis.$get(args, options))
}

export async function postApplicationsApplicationIdEmojis(
  args: InferRequestType<(typeof client.applications)[':application_id']['emojis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application_id'].emojis.$post(args, options))
}

export async function getApplicationsApplicationIdEmojisEmojiId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].emojis[':emoji_id'].$get(args, options),
  )
}

export async function deleteApplicationsApplicationIdEmojisEmojiId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].emojis[':emoji_id'].$delete(args, options),
  )
}

export async function patchApplicationsApplicationIdEmojisEmojiId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['emojis'][':emoji_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].emojis[':emoji_id'].$patch(args, options),
  )
}

export async function getApplicationsApplicationIdEntitlements(
  args: InferRequestType<(typeof client.applications)[':application_id']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].entitlements.$get(args, options),
  )
}

export async function postApplicationsApplicationIdEntitlements(
  args: InferRequestType<(typeof client.applications)[':application_id']['entitlements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].entitlements.$post(args, options),
  )
}

export async function getApplicationsApplicationIdEntitlementsEntitlementId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].entitlements[':entitlement_id'].$get(args, options),
  )
}

export async function deleteApplicationsApplicationIdEntitlementsEntitlementId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].entitlements[':entitlement_id'].$delete(args, options),
  )
}

export async function postApplicationsApplicationIdEntitlementsEntitlementIdConsume(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['entitlements'][':entitlement_id']['consume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].entitlements[':entitlement_id'].consume.$post(
      args,
      options,
    ),
  )
}

export async function getApplicationsApplicationIdGuildsGuildIdCommands(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].guilds[':guild_id'].commands.$get(args, options),
  )
}

export async function putApplicationsApplicationIdGuildsGuildIdCommands(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].guilds[':guild_id'].commands.$put(args, options),
  )
}

export async function postApplicationsApplicationIdGuildsGuildIdCommands(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].guilds[':guild_id'].commands.$post(args, options),
  )
}

export async function getApplicationsApplicationIdGuildsGuildIdCommandsPermissions(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].guilds[':guild_id'].commands.permissions.$get(
      args,
      options,
    ),
  )
}

export async function getApplicationsApplicationIdGuildsGuildIdCommandsCommandId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].guilds[':guild_id'].commands[':command_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApplicationsApplicationIdGuildsGuildIdCommandsCommandId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].guilds[':guild_id'].commands[':command_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApplicationsApplicationIdGuildsGuildIdCommandsCommandId(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].guilds[':guild_id'].commands[':command_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissions(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].guilds[':guild_id'].commands[
      ':command_id'
    ].permissions.$get(args, options),
  )
}

export async function putApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissions(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['guilds'][':guild_id']['commands'][':command_id']['permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id'].guilds[':guild_id'].commands[
      ':command_id'
    ].permissions.$put(args, options),
  )
}

export async function getApplicationsApplicationIdRoleConnectionsMetadata(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['role-connections']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id']['role-connections'].metadata.$get(args, options),
  )
}

export async function putApplicationsApplicationIdRoleConnectionsMetadata(
  args: InferRequestType<
    (typeof client.applications)[':application_id']['role-connections']['metadata']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application_id']['role-connections'].metadata.$put(args, options),
  )
}

export async function getChannelsChannelId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].$get(args, options))
}

export async function deleteChannelsChannelId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].$delete(args, options))
}

export async function patchChannelsChannelId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].$patch(args, options))
}

export async function postChannelsChannelIdFollowers(
  args: InferRequestType<(typeof client.channels)[':channel_id']['followers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].followers.$post(args, options))
}

export async function getChannelsChannelIdInvites(
  args: InferRequestType<(typeof client.channels)[':channel_id']['invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].invites.$get(args, options))
}

export async function postChannelsChannelIdInvites(
  args: InferRequestType<(typeof client.channels)[':channel_id']['invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].invites.$post(args, options))
}

export async function getChannelsChannelIdMessages(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].messages.$get(args, options))
}

export async function postChannelsChannelIdMessages(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].messages.$post(args, options))
}

export async function postChannelsChannelIdMessagesBulkDelete(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages']['bulk-delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages['bulk-delete'].$post(args, options),
  )
}

export async function getChannelsChannelIdMessagesPins(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['pins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].messages.pins.$get(args, options))
}

export async function putChannelsChannelIdMessagesPinsMessageId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages.pins[':message_id'].$put(args, options),
  )
}

export async function deleteChannelsChannelIdMessagesPinsMessageId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages']['pins'][':message_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages.pins[':message_id'].$delete(args, options),
  )
}

export async function getChannelsChannelIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].$get(args, options),
  )
}

export async function deleteChannelsChannelIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].$delete(args, options),
  )
}

export async function patchChannelsChannelIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].$patch(args, options),
  )
}

export async function postChannelsChannelIdMessagesMessageIdCrosspost(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['crosspost']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].crosspost.$post(args, options),
  )
}

export async function deleteChannelsChannelIdMessagesMessageIdReactions(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].reactions.$delete(args, options),
  )
}

export async function getChannelsChannelIdMessagesMessageIdReactionsEmojiName(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'].$get(
      args,
      options,
    ),
  )
}

export async function deleteChannelsChannelIdMessagesMessageIdReactionsEmojiName(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'].$delete(
      args,
      options,
    ),
  )
}

export async function putChannelsChannelIdMessagesMessageIdReactionsEmojiNameMe(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name']['@me'].$put(
      args,
      options,
    ),
  )
}

export async function deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMe(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name']['@me']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name']['@me'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['reactions'][':emoji_name'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].reactions[':emoji_name'][
      ':user_id'
    ].$delete(args, options),
  )
}

export async function postChannelsChannelIdMessagesMessageIdThreads(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['messages'][':message_id']['threads']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].messages[':message_id'].threads.$post(args, options),
  )
}

export async function getChannelsChannelIdPermissionsMemberUserId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['permissions']['member'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].permissions.member[':user_id'].$get(args, options),
  )
}

export async function getChannelsChannelIdPermissionsRoleRoleId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['permissions']['role'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].permissions.role[':role_id'].$get(args, options),
  )
}

export async function putChannelsChannelIdPermissionsOverwriteId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].permissions[':overwrite_id'].$put(args, options),
  )
}

export async function deleteChannelsChannelIdPermissionsOverwriteId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['permissions'][':overwrite_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].permissions[':overwrite_id'].$delete(args, options),
  )
}

export async function getChannelsChannelIdPins(
  args: InferRequestType<(typeof client.channels)[':channel_id']['pins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].pins.$get(args, options))
}

export async function putChannelsChannelIdPinsMessageId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].pins[':message_id'].$put(args, options))
}

export async function deleteChannelsChannelIdPinsMessageId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['pins'][':message_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].pins[':message_id'].$delete(args, options),
  )
}

export async function getChannelsChannelIdPollsMessageIdAnswersAnswerId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['polls'][':message_id']['answers'][':answer_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].polls[':message_id'].answers[':answer_id'].$get(args, options),
  )
}

export async function postChannelsChannelIdPollsMessageIdExpire(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['polls'][':message_id']['expire']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].polls[':message_id'].expire.$post(args, options),
  )
}

export async function putChannelsChannelIdRecipientsUserId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['recipients'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].recipients[':user_id'].$put(args, options),
  )
}

export async function deleteChannelsChannelIdRecipientsUserId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['recipients'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].recipients[':user_id'].$delete(args, options),
  )
}

export async function postChannelsChannelIdSendSoundboardSound(
  args: InferRequestType<(typeof client.channels)[':channel_id']['send-soundboard-sound']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id']['send-soundboard-sound'].$post(args, options),
  )
}

export async function getChannelsChannelIdThreadMembers(
  args: InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id']['thread-members'].$get(args, options))
}

export async function putChannelsChannelIdThreadMembersMe(
  args: InferRequestType<(typeof client.channels)[':channel_id']['thread-members']['@me']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id']['thread-members']['@me'].$put(args, options),
  )
}

export async function deleteChannelsChannelIdThreadMembersMe(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['thread-members']['@me']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id']['thread-members']['@me'].$delete(args, options),
  )
}

export async function getChannelsChannelIdThreadMembersUserId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id']['thread-members'][':user_id'].$get(args, options),
  )
}

export async function putChannelsChannelIdThreadMembersUserId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id']['thread-members'][':user_id'].$put(args, options),
  )
}

export async function deleteChannelsChannelIdThreadMembersUserId(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['thread-members'][':user_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id']['thread-members'][':user_id'].$delete(args, options),
  )
}

export async function postChannelsChannelIdThreads(
  args: InferRequestType<(typeof client.channels)[':channel_id']['threads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].threads.$post(args, options))
}

export async function getChannelsChannelIdThreadsArchivedPrivate(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['threads']['archived']['private']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].threads.archived.private.$get(args, options),
  )
}

export async function getChannelsChannelIdThreadsArchivedPublic(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['threads']['archived']['public']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].threads.archived.public.$get(args, options),
  )
}

export async function getChannelsChannelIdThreadsSearch(
  args: InferRequestType<(typeof client.channels)[':channel_id']['threads']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].threads.search.$get(args, options))
}

export async function postChannelsChannelIdTyping(
  args: InferRequestType<(typeof client.channels)[':channel_id']['typing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].typing.$post(args, options))
}

export async function getChannelsChannelIdUsersMeThreadsArchivedPrivate(
  args: InferRequestType<
    (typeof client.channels)[':channel_id']['users']['@me']['threads']['archived']['private']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':channel_id'].users['@me'].threads.archived.private.$get(args, options),
  )
}

export async function putChannelsChannelIdVoiceStatus(
  args: InferRequestType<(typeof client.channels)[':channel_id']['voice-status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id']['voice-status'].$put(args, options))
}

export async function getChannelsChannelIdWebhooks(
  args: InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].webhooks.$get(args, options))
}

export async function postChannelsChannelIdWebhooks(
  args: InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].webhooks.$post(args, options))
}

export async function getGateway(options?: ClientRequestOptions) {
  return await parseResponse(client.gateway.$get(undefined, options))
}

export async function getGatewayBot(options?: ClientRequestOptions) {
  return await parseResponse(client.gateway.bot.$get(undefined, options))
}

export async function getGuildsTemplatesCode(
  args: InferRequestType<(typeof client.guilds.templates)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds.templates[':code'].$get(args, options))
}

export async function getGuildsGuildId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].$get(args, options))
}

export async function patchGuildsGuildId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].$patch(args, options))
}

export async function getGuildsGuildIdAuditLogs(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['audit-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['audit-logs'].$get(args, options))
}

export async function getGuildsGuildIdAutoModerationRules(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['auto-moderation'].rules.$get(args, options),
  )
}

export async function postGuildsGuildIdAutoModerationRules(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['auto-moderation']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['auto-moderation'].rules.$post(args, options),
  )
}

export async function getGuildsGuildIdAutoModerationRulesRuleId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$get(args, options),
  )
}

export async function deleteGuildsGuildIdAutoModerationRulesRuleId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$delete(args, options),
  )
}

export async function patchGuildsGuildIdAutoModerationRulesRuleId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['auto-moderation']['rules'][':rule_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['auto-moderation'].rules[':rule_id'].$patch(args, options),
  )
}

export async function getGuildsGuildIdBans(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].bans.$get(args, options))
}

export async function getGuildsGuildIdBansUserId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].bans[':user_id'].$get(args, options))
}

export async function putGuildsGuildIdBansUserId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].bans[':user_id'].$put(args, options))
}

export async function deleteGuildsGuildIdBansUserId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bans'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].bans[':user_id'].$delete(args, options))
}

export async function postGuildsGuildIdBulkBan(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['bulk-ban']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['bulk-ban'].$post(args, options))
}

export async function getGuildsGuildIdChannels(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].channels.$get(args, options))
}

export async function postGuildsGuildIdChannels(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].channels.$post(args, options))
}

export async function patchGuildsGuildIdChannels(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['channels']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].channels.$patch(args, options))
}

export async function getGuildsGuildIdEmojis(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].emojis.$get(args, options))
}

export async function postGuildsGuildIdEmojis(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].emojis.$post(args, options))
}

export async function getGuildsGuildIdEmojisEmojiId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].emojis[':emoji_id'].$get(args, options))
}

export async function deleteGuildsGuildIdEmojisEmojiId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].emojis[':emoji_id'].$delete(args, options))
}

export async function patchGuildsGuildIdEmojisEmojiId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['emojis'][':emoji_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].emojis[':emoji_id'].$patch(args, options))
}

export async function putGuildsGuildIdIncidentActions(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['incident-actions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['incident-actions'].$put(args, options))
}

export async function getGuildsGuildIdIntegrations(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].integrations.$get(args, options))
}

export async function deleteGuildsGuildIdIntegrationsIntegrationId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['integrations'][':integration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id'].integrations[':integration_id'].$delete(args, options),
  )
}

export async function getGuildsGuildIdInvites(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].invites.$get(args, options))
}

export async function getGuildsGuildIdMembers(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].members.$get(args, options))
}

export async function patchGuildsGuildIdMembersMe(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members']['@me']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].members['@me'].$patch(args, options))
}

export async function getGuildsGuildIdMembersSearch(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].members.search.$get(args, options))
}

export async function getGuildsGuildIdMembersUserId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].members[':user_id'].$get(args, options))
}

export async function putGuildsGuildIdMembersUserId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].members[':user_id'].$put(args, options))
}

export async function deleteGuildsGuildIdMembersUserId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].members[':user_id'].$delete(args, options))
}

export async function patchGuildsGuildIdMembersUserId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['members'][':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].members[':user_id'].$patch(args, options))
}

export async function putGuildsGuildIdMembersUserIdRolesRoleId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id'].members[':user_id'].roles[':role_id'].$put(args, options),
  )
}

export async function deleteGuildsGuildIdMembersUserIdRolesRoleId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['members'][':user_id']['roles'][':role_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id'].members[':user_id'].roles[':role_id'].$delete(args, options),
  )
}

export async function getGuildsGuildIdMessagesSearch(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['messages']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].messages.search.$get(args, options))
}

export async function getGuildsGuildIdNewMemberWelcome(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['new-member-welcome']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['new-member-welcome'].$get(args, options))
}

export async function getGuildsGuildIdOnboarding(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].onboarding.$get(args, options))
}

export async function putGuildsGuildIdOnboarding(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['onboarding']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].onboarding.$put(args, options))
}

export async function getGuildsGuildIdPermissionsMemberUserId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['permissions']['member'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id'].permissions.member[':user_id'].$get(args, options),
  )
}

export async function getGuildsGuildIdPermissionsRoleRoleId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['permissions']['role'][':role_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id'].permissions.role[':role_id'].$get(args, options),
  )
}

export async function getGuildsGuildIdPreview(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].preview.$get(args, options))
}

export async function getGuildsGuildIdPrune(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].prune.$get(args, options))
}

export async function postGuildsGuildIdPrune(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['prune']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].prune.$post(args, options))
}

export async function getGuildsGuildIdRegions(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].regions.$get(args, options))
}

export async function getGuildsGuildIdRequests(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].requests.$get(args, options))
}

export async function patchGuildsGuildIdRequestsRequestId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['requests'][':request_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id'].requests[':request_id'].$patch(args, options),
  )
}

export async function getGuildsGuildIdRoles(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].roles.$get(args, options))
}

export async function postGuildsGuildIdRoles(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].roles.$post(args, options))
}

export async function patchGuildsGuildIdRoles(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].roles.$patch(args, options))
}

export async function getGuildsGuildIdRolesMemberCounts(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles']['member-counts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].roles['member-counts'].$get(args, options))
}

export async function getGuildsGuildIdRolesRoleId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].roles[':role_id'].$get(args, options))
}

export async function deleteGuildsGuildIdRolesRoleId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].roles[':role_id'].$delete(args, options))
}

export async function patchGuildsGuildIdRolesRoleId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['roles'][':role_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].roles[':role_id'].$patch(args, options))
}

export async function getGuildsGuildIdScheduledEvents(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['scheduled-events'].$get(args, options))
}

export async function postGuildsGuildIdScheduledEvents(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['scheduled-events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['scheduled-events'].$post(args, options))
}

export async function getGuildsGuildIdScheduledEventsGuildScheduledEventId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$get(args, options),
  )
}

export async function deleteGuildsGuildIdScheduledEventsGuildScheduledEventId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchGuildsGuildIdScheduledEventsGuildScheduledEventId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].$patch(
      args,
      options,
    ),
  )
}

export async function postGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptions(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].exceptions.$post(
      args,
      options,
    ),
  )
}

export async function deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].exceptions[
      ':exception_id'
    ].$delete(args, options),
  )
}

export async function patchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['exceptions'][':exception_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].exceptions[
      ':exception_id'
    ].$patch(args, options),
  )
}

export async function getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsers(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].users.$get(
      args,
      options,
    ),
  )
}

export async function getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCounts(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id']['users']['counts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'].users.counts.$get(
      args,
      options,
    ),
  )
}

export async function getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsers(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][':guild_scheduled_event_exception_id']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['scheduled-events'][':guild_scheduled_event_id'][
      ':guild_scheduled_event_exception_id'
    ].users.$get(args, options),
  )
}

export async function getGuildsGuildIdSoundboardSounds(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['soundboard-sounds'].$get(args, options))
}

export async function postGuildsGuildIdSoundboardSounds(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['soundboard-sounds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['soundboard-sounds'].$post(args, options))
}

export async function getGuildsGuildIdSoundboardSoundsSoundId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$get(args, options),
  )
}

export async function deleteGuildsGuildIdSoundboardSoundsSoundId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$delete(args, options),
  )
}

export async function patchGuildsGuildIdSoundboardSoundsSoundId(
  args: InferRequestType<
    (typeof client.guilds)[':guild_id']['soundboard-sounds'][':sound_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['soundboard-sounds'][':sound_id'].$patch(args, options),
  )
}

export async function getGuildsGuildIdStickers(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].stickers.$get(args, options))
}

export async function postGuildsGuildIdStickers(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].stickers.$post(args, options))
}

export async function getGuildsGuildIdStickersStickerId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].stickers[':sticker_id'].$get(args, options))
}

export async function deleteGuildsGuildIdStickersStickerId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id'].stickers[':sticker_id'].$delete(args, options),
  )
}

export async function patchGuildsGuildIdStickersStickerId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['stickers'][':sticker_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id'].stickers[':sticker_id'].$patch(args, options),
  )
}

export async function getGuildsGuildIdTemplates(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].templates.$get(args, options))
}

export async function postGuildsGuildIdTemplates(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].templates.$post(args, options))
}

export async function putGuildsGuildIdTemplatesCode(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].templates[':code'].$put(args, options))
}

export async function deleteGuildsGuildIdTemplatesCode(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].templates[':code'].$delete(args, options))
}

export async function patchGuildsGuildIdTemplatesCode(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['templates'][':code']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].templates[':code'].$patch(args, options))
}

export async function getGuildsGuildIdThreadsActive(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['threads']['active']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].threads.active.$get(args, options))
}

export async function getGuildsGuildIdVanityUrl(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['vanity-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['vanity-url'].$get(args, options))
}

export async function getGuildsGuildIdVoiceStatesMe(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['voice-states']['@me'].$get(args, options))
}

export async function patchGuildsGuildIdVoiceStatesMe(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states']['@me']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['voice-states']['@me'].$patch(args, options),
  )
}

export async function getGuildsGuildIdVoiceStatesUserId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['voice-states'][':user_id'].$get(args, options),
  )
}

export async function patchGuildsGuildIdVoiceStatesUserId(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['voice-states'][':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.guilds[':guild_id']['voice-states'][':user_id'].$patch(args, options),
  )
}

export async function getGuildsGuildIdWebhooks(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].webhooks.$get(args, options))
}

export async function getGuildsGuildIdWelcomeScreen(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['welcome-screen'].$get(args, options))
}

export async function patchGuildsGuildIdWelcomeScreen(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['welcome-screen']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['welcome-screen'].$patch(args, options))
}

export async function getGuildsGuildIdWidget(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].widget.$get(args, options))
}

export async function patchGuildsGuildIdWidget(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id'].widget.$patch(args, options))
}

export async function getGuildsGuildIdWidgetJson(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['widget.json'].$get(args, options))
}

export async function getGuildsGuildIdWidgetPng(
  args: InferRequestType<(typeof client.guilds)[':guild_id']['widget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.guilds[':guild_id']['widget.png'].$get(args, options))
}

export async function postInteractionsInteractionIdInteractionTokenCallback(
  args: InferRequestType<
    (typeof client.interactions)[':interaction_id'][':interaction_token']['callback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.interactions[':interaction_id'][':interaction_token'].callback.$post(args, options),
  )
}

export async function getInvitesCode(
  args: InferRequestType<(typeof client.invites)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites[':code'].$get(args, options))
}

export async function deleteInvitesCode(
  args: InferRequestType<(typeof client.invites)[':code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites[':code'].$delete(args, options))
}

export async function getInvitesCodeTargetUsers(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites[':code']['target-users'].$get(args, options))
}

export async function putInvitesCodeTargetUsers(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites[':code']['target-users'].$put(args, options))
}

export async function postInvitesCodeTargetUsersBulkAdd(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['bulk-add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invites[':code']['target-users']['bulk-add'].$post(args, options),
  )
}

export async function postInvitesCodeTargetUsersBulkDelete(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['bulk-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invites[':code']['target-users']['bulk-delete'].$post(args, options),
  )
}

export async function getInvitesCodeTargetUsersJobStatus(
  args: InferRequestType<(typeof client.invites)[':code']['target-users']['job-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invites[':code']['target-users']['job-status'].$get(args, options),
  )
}

export async function putInvitesCodeTargetUsersUserId(
  args: InferRequestType<(typeof client.invites)[':code']['target-users'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invites[':code']['target-users'][':user_id'].$put(args, options),
  )
}

export async function deleteInvitesCodeTargetUsersUserId(
  args: InferRequestType<(typeof client.invites)[':code']['target-users'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invites[':code']['target-users'][':user_id'].$delete(args, options),
  )
}

export async function putLobbies(
  args: InferRequestType<typeof client.lobbies.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies.$put(args, options))
}

export async function postLobbies(
  args: InferRequestType<typeof client.lobbies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies.$post(args, options))
}

export async function getLobbiesLobbyId(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies[':lobby_id'].$get(args, options))
}

export async function deleteLobbiesLobbyId(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies[':lobby_id'].$delete(args, options))
}

export async function patchLobbiesLobbyId(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies[':lobby_id'].$patch(args, options))
}

export async function patchLobbiesLobbyIdChannelLinking(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['channel-linking']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies[':lobby_id']['channel-linking'].$patch(args, options))
}

export async function deleteLobbiesLobbyIdMembersMe(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['@me']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies[':lobby_id'].members['@me'].$delete(args, options))
}

export async function postLobbiesLobbyIdMembersMeInvites(
  args: InferRequestType<
    (typeof client.lobbies)[':lobby_id']['members']['@me']['invites']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lobbies[':lobby_id'].members['@me'].invites.$post(args, options),
  )
}

export async function postLobbiesLobbyIdMembersBulk(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['members']['bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies[':lobby_id'].members.bulk.$post(args, options))
}

export async function putLobbiesLobbyIdMembersUserId(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies[':lobby_id'].members[':user_id'].$put(args, options))
}

export async function deleteLobbiesLobbyIdMembersUserId(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['members'][':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies[':lobby_id'].members[':user_id'].$delete(args, options))
}

export async function postLobbiesLobbyIdMembersUserIdInvites(
  args: InferRequestType<
    (typeof client.lobbies)[':lobby_id']['members'][':user_id']['invites']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lobbies[':lobby_id'].members[':user_id'].invites.$post(args, options),
  )
}

export async function getLobbiesLobbyIdMessages(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies[':lobby_id'].messages.$get(args, options))
}

export async function postLobbiesLobbyIdMessages(
  args: InferRequestType<(typeof client.lobbies)[':lobby_id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lobbies[':lobby_id'].messages.$post(args, options))
}

export async function putLobbiesLobbyIdMessagesMessageIdModerationMetadata(
  args: InferRequestType<
    (typeof client.lobbies)[':lobby_id']['messages'][':message_id']['moderation-metadata']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lobbies[':lobby_id'].messages[':message_id']['moderation-metadata'].$put(args, options),
  )
}

export async function getOauth2Me(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2['@me'].$get(undefined, options))
}

export async function getOauth2ApplicationsMe(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2.applications['@me'].$get(undefined, options))
}

export async function getOauth2Keys(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2.keys.$get(undefined, options))
}

export async function getOauth2Userinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth2.userinfo.$get(undefined, options))
}

export async function putPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadata(
  args: InferRequestType<
    (typeof client)['partner-sdk']['dms'][':user_id_1'][':user_id_2']['messages'][':message_id']['moderation-metadata']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['partner-sdk'].dms[':user_id_1'][':user_id_2'].messages[':message_id'][
      'moderation-metadata'
    ].$put(args, options),
  )
}

export async function postPartnerSdkProvisionalAccountsUnmerge(
  args: InferRequestType<
    (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['partner-sdk']['provisional-accounts'].unmerge.$post(args, options),
  )
}

export async function postPartnerSdkProvisionalAccountsUnmergeBot(
  args: InferRequestType<
    (typeof client)['partner-sdk']['provisional-accounts']['unmerge']['bot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['partner-sdk']['provisional-accounts'].unmerge.bot.$post(args, options),
  )
}

export async function postPartnerSdkToken(
  args: InferRequestType<(typeof client)['partner-sdk']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['partner-sdk'].token.$post(args, options))
}

export async function postPartnerSdkTokenBot(
  args: InferRequestType<(typeof client)['partner-sdk']['token']['bot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['partner-sdk'].token.bot.$post(args, options))
}

export async function getSkusSkuIdSubscriptions(
  args: InferRequestType<(typeof client.skus)[':sku_id']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skus[':sku_id'].subscriptions.$get(args, options))
}

export async function getSkusSkuIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.skus)[':sku_id']['subscriptions'][':subscription_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.skus[':sku_id'].subscriptions[':subscription_id'].$get(args, options),
  )
}

export async function getSoundboardDefaultSounds(options?: ClientRequestOptions) {
  return await parseResponse(client['soundboard-default-sounds'].$get(undefined, options))
}

export async function postStageInstances(
  args: InferRequestType<(typeof client)['stage-instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stage-instances'].$post(args, options))
}

export async function getStageInstancesChannelId(
  args: InferRequestType<(typeof client)['stage-instances'][':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stage-instances'][':channel_id'].$get(args, options))
}

export async function deleteStageInstancesChannelId(
  args: InferRequestType<(typeof client)['stage-instances'][':channel_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stage-instances'][':channel_id'].$delete(args, options))
}

export async function patchStageInstancesChannelId(
  args: InferRequestType<(typeof client)['stage-instances'][':channel_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stage-instances'][':channel_id'].$patch(args, options))
}

export async function getStickerPacks(options?: ClientRequestOptions) {
  return await parseResponse(client['sticker-packs'].$get(undefined, options))
}

export async function getStickerPacksPackId(
  args: InferRequestType<(typeof client)['sticker-packs'][':pack_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sticker-packs'][':pack_id'].$get(args, options))
}

export async function getStickersStickerId(
  args: InferRequestType<(typeof client.stickers)[':sticker_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stickers[':sticker_id'].$get(args, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users['@me'].$get(undefined, options))
}

export async function patchUsersMe(
  args: InferRequestType<(typeof client.users)['@me']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['@me'].$patch(args, options))
}

export async function getUsersMeApplicationsApplicationIdEntitlements(
  args: InferRequestType<
    (typeof client.users)['@me']['applications'][':application_id']['entitlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users['@me'].applications[':application_id'].entitlements.$get(args, options),
  )
}

export async function getUsersMeApplicationsApplicationIdRoleConnection(
  args: InferRequestType<
    (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users['@me'].applications[':application_id']['role-connection'].$get(args, options),
  )
}

export async function putUsersMeApplicationsApplicationIdRoleConnection(
  args: InferRequestType<
    (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users['@me'].applications[':application_id']['role-connection'].$put(args, options),
  )
}

export async function deleteUsersMeApplicationsApplicationIdRoleConnection(
  args: InferRequestType<
    (typeof client.users)['@me']['applications'][':application_id']['role-connection']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users['@me'].applications[':application_id']['role-connection'].$delete(args, options),
  )
}

export async function postUsersMeChannels(
  args: InferRequestType<(typeof client.users)['@me']['channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['@me'].channels.$post(args, options))
}

export async function getUsersMeConnections(options?: ClientRequestOptions) {
  return await parseResponse(client.users['@me'].connections.$get(undefined, options))
}

export async function getUsersMeGuilds(
  args: InferRequestType<(typeof client.users)['@me']['guilds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['@me'].guilds.$get(args, options))
}

export async function deleteUsersMeGuildsGuildId(
  args: InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['@me'].guilds[':guild_id'].$delete(args, options))
}

export async function getUsersMeGuildsGuildIdMember(
  args: InferRequestType<(typeof client.users)['@me']['guilds'][':guild_id']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['@me'].guilds[':guild_id'].member.$get(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function getVoiceRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.voice.regions.$get(undefined, options))
}

export async function getWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$get(args, options))
}

export async function deleteWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$delete(args, options))
}

export async function patchWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$patch(args, options))
}

export async function getWebhooksWebhookIdWebhookToken(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$get(args, options))
}

export async function postWebhooksWebhookIdWebhookToken(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$post(args, options))
}

export async function deleteWebhooksWebhookIdWebhookToken(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':webhook_token'].$delete(args, options),
  )
}

export async function patchWebhooksWebhookIdWebhookToken(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':webhook_token']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'][':webhook_token'].$patch(args, options))
}

export async function postWebhooksWebhookIdWebhookTokenGithub(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['github']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':webhook_token'].github.$post(args, options),
  )
}

export async function getWebhooksWebhookIdWebhookTokenMessagesOriginal(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$get(args, options),
  )
}

export async function deleteWebhooksWebhookIdWebhookTokenMessagesOriginal(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$delete(args, options),
  )
}

export async function patchWebhooksWebhookIdWebhookTokenMessagesOriginal(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages']['@original']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':webhook_token'].messages['@original'].$patch(args, options),
  )
}

export async function getWebhooksWebhookIdWebhookTokenMessagesMessageId(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$get(args, options),
  )
}

export async function deleteWebhooksWebhookIdWebhookTokenMessagesMessageId(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$delete(args, options),
  )
}

export async function patchWebhooksWebhookIdWebhookTokenMessagesMessageId(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['messages'][':message_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':webhook_token'].messages[':message_id'].$patch(args, options),
  )
}

export async function postWebhooksWebhookIdWebhookTokenSlack(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':webhook_token']['slack']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':webhook_token'].slack.$post(args, options),
  )
}
