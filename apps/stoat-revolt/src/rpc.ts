import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users['@me'].$get(undefined, options))
}

export async function getUsersTarget(
  args: InferRequestType<(typeof client.users)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].$get(args, options))
}

export async function patchUsersTarget(
  args: InferRequestType<(typeof client.users)[':target']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].$patch(args, options))
}

export async function getUsersTargetFlags(
  args: InferRequestType<(typeof client.users)[':target']['flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].flags.$get(args, options))
}

export async function patchUsersMeUsername(
  args: InferRequestType<(typeof client.users)['@me']['username']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['@me'].username.$patch(args, options))
}

export async function getUsersTargetDefaultAvatar(
  args: InferRequestType<(typeof client.users)[':target']['default_avatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].default_avatar.$get(args, options))
}

export async function getUsersTargetProfile(
  args: InferRequestType<(typeof client.users)[':target']['profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].profile.$get(args, options))
}

export async function getUsersDms(options?: ClientRequestOptions) {
  return await parseResponse(client.users.dms.$get(undefined, options))
}

export async function getUsersTargetDm(
  args: InferRequestType<(typeof client.users)[':target']['dm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].dm.$get(args, options))
}

export async function getUsersTargetMutual(
  args: InferRequestType<(typeof client.users)[':target']['mutual']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].mutual.$get(args, options))
}

export async function putUsersTargetFriend(
  args: InferRequestType<(typeof client.users)[':target']['friend']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].friend.$put(args, options))
}

export async function deleteUsersTargetFriend(
  args: InferRequestType<(typeof client.users)[':target']['friend']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].friend.$delete(args, options))
}

export async function putUsersTargetBlock(
  args: InferRequestType<(typeof client.users)[':target']['block']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].block.$put(args, options))
}

export async function deleteUsersTargetBlock(
  args: InferRequestType<(typeof client.users)[':target']['block']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':target'].block.$delete(args, options))
}

export async function postUsersFriend(
  args: InferRequestType<typeof client.users.friend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.friend.$post(args, options))
}

export async function postBotsCreate(
  args: InferRequestType<typeof client.bots.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots.create.$post(args, options))
}

export async function getBotsTargetInvite(
  args: InferRequestType<(typeof client.bots)[':target']['invite']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':target'].invite.$get(args, options))
}

export async function postBotsTargetInvite(
  args: InferRequestType<(typeof client.bots)[':target']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':target'].invite.$post(args, options))
}

export async function getBotsBotId(
  args: InferRequestType<(typeof client.bots)[':bot_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':bot_id'].$get(args, options))
}

export async function deleteBotsBotId(
  args: InferRequestType<(typeof client.bots)[':bot_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':bot_id'].$delete(args, options))
}

export async function patchBotsBotId(
  args: InferRequestType<(typeof client.bots)[':bot_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':bot_id'].$patch(args, options))
}

export async function getBotsMe(options?: ClientRequestOptions) {
  return await parseResponse(client.bots['@me'].$get(undefined, options))
}

export async function getBotsBotIdDiscover(
  args: InferRequestType<(typeof client.bots)[':bot_id']['discover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':bot_id'].discover.$get(args, options))
}

export async function putBotsBotIdDiscover(
  args: InferRequestType<(typeof client.bots)[':bot_id']['discover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':bot_id'].discover.$put(args, options))
}

export async function deleteBotsBotIdDiscover(
  args: InferRequestType<(typeof client.bots)[':bot_id']['discover']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':bot_id'].discover.$delete(args, options))
}

export async function putChannelsTargetAckMessage(
  args: InferRequestType<(typeof client.channels)[':target']['ack'][':message']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].ack[':message'].$put(args, options))
}

export async function getChannelsTarget(
  args: InferRequestType<(typeof client.channels)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].$get(args, options))
}

export async function deleteChannelsTarget(
  args: InferRequestType<(typeof client.channels)[':target']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].$delete(args, options))
}

export async function patchChannelsTarget(
  args: InferRequestType<(typeof client.channels)[':target']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].$patch(args, options))
}

export async function getChannelsTargetMembers(
  args: InferRequestType<(typeof client.channels)[':target']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].members.$get(args, options))
}

export async function postChannelsTargetInvites(
  args: InferRequestType<(typeof client.channels)[':target']['invites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].invites.$post(args, options))
}

export async function getChannelsTargetMessages(
  args: InferRequestType<(typeof client.channels)[':target']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].messages.$get(args, options))
}

export async function postChannelsTargetMessages(
  args: InferRequestType<(typeof client.channels)[':target']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].messages.$post(args, options))
}

export async function postChannelsTargetSearch(
  args: InferRequestType<(typeof client.channels)[':target']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].search.$post(args, options))
}

export async function postChannelsTargetMessagesMsgPin(
  args: InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['pin']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].messages[':msg'].pin.$post(args, options))
}

export async function deleteChannelsTargetMessagesMsgPin(
  args: InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['pin']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].messages[':msg'].pin.$delete(args, options))
}

export async function getChannelsTargetMessagesMsg(
  args: InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].messages[':msg'].$get(args, options))
}

export async function deleteChannelsTargetMessagesMsg(
  args: InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].messages[':msg'].$delete(args, options))
}

export async function patchChannelsTargetMessagesMsg(
  args: InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].messages[':msg'].$patch(args, options))
}

export async function deleteChannelsTargetMessagesBulk(
  args: InferRequestType<(typeof client.channels)[':target']['messages']['bulk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].messages.bulk.$delete(args, options))
}

export async function postChannelsCreate(
  args: InferRequestType<typeof client.channels.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.create.$post(args, options))
}

export async function putChannelsGroupIdRecipientsMemberId(
  args: InferRequestType<(typeof client.channels)[':group_id']['recipients'][':member_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':group_id'].recipients[':member_id'].$put(args, options),
  )
}

export async function deleteChannelsGroupIdRecipientsMemberId(
  args: InferRequestType<
    (typeof client.channels)[':group_id']['recipients'][':member_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':group_id'].recipients[':member_id'].$delete(args, options),
  )
}

export async function postChannelsTargetJoinCall(
  args: InferRequestType<(typeof client.channels)[':target']['join_call']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].join_call.$post(args, options))
}

export async function putChannelsTargetEndRingTargetUser(
  args: InferRequestType<(typeof client.channels)[':target']['end_ring'][':target_user']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':target'].end_ring[':target_user'].$put(args, options),
  )
}

export async function putChannelsTargetPermissionsRoleId(
  args: InferRequestType<(typeof client.channels)[':target']['permissions'][':role_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].permissions[':role_id'].$put(args, options))
}

export async function putChannelsTargetPermissionsDefault(
  args: InferRequestType<(typeof client.channels)[':target']['permissions']['default']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':target'].permissions.default.$put(args, options))
}

export async function putChannelsTargetMessagesMsgReactionsEmoji(
  args: InferRequestType<
    (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':target'].messages[':msg'].reactions[':emoji'].$put(args, options),
  )
}

export async function deleteChannelsTargetMessagesMsgReactionsEmoji(
  args: InferRequestType<
    (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':target'].messages[':msg'].reactions[':emoji'].$delete(args, options),
  )
}

export async function deleteChannelsTargetMessagesMsgReactions(
  args: InferRequestType<
    (typeof client.channels)[':target']['messages'][':msg']['reactions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.channels[':target'].messages[':msg'].reactions.$delete(args, options),
  )
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

export async function postServersCreate(
  args: InferRequestType<typeof client.servers.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers.create.$post(args, options))
}

export async function getServersTarget(
  args: InferRequestType<(typeof client.servers)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].$get(args, options))
}

export async function deleteServersTarget(
  args: InferRequestType<(typeof client.servers)[':target']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].$delete(args, options))
}

export async function patchServersTarget(
  args: InferRequestType<(typeof client.servers)[':target']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].$patch(args, options))
}

export async function putServersTargetAck(
  args: InferRequestType<(typeof client.servers)[':target']['ack']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].ack.$put(args, options))
}

export async function postServersServerChannels(
  args: InferRequestType<(typeof client.servers)[':server']['channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':server'].channels.$post(args, options))
}

export async function getServersTargetMembers(
  args: InferRequestType<(typeof client.servers)[':target']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].members.$get(args, options))
}

export async function getServersServerIdMembersMemberId(
  args: InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':server_id'].members[':member_id'].$get(args, options))
}

export async function deleteServersServerIdMembersMemberId(
  args: InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.servers[':server_id'].members[':member_id'].$delete(args, options),
  )
}

export async function patchServersServerIdMembersMemberId(
  args: InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.servers[':server_id'].members[':member_id'].$patch(args, options),
  )
}

export async function getServersTargetMembersExperimentalQuery(
  args: InferRequestType<(typeof client.servers)[':target']['members_experimental_query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.servers[':target'].members_experimental_query.$get(args, options),
  )
}

export async function putServersServerBansTarget(
  args: InferRequestType<(typeof client.servers)[':server']['bans'][':target']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':server'].bans[':target'].$put(args, options))
}

export async function deleteServersServerBansTarget(
  args: InferRequestType<(typeof client.servers)[':server']['bans'][':target']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':server'].bans[':target'].$delete(args, options))
}

export async function getServersTargetBans(
  args: InferRequestType<(typeof client.servers)[':target']['bans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].bans.$get(args, options))
}

export async function getServersTargetInvites(
  args: InferRequestType<(typeof client.servers)[':target']['invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].invites.$get(args, options))
}

export async function postServersTargetRoles(
  args: InferRequestType<(typeof client.servers)[':target']['roles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].roles.$post(args, options))
}

export async function getServersTargetRolesRoleId(
  args: InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].roles[':role_id'].$get(args, options))
}

export async function deleteServersTargetRolesRoleId(
  args: InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].roles[':role_id'].$delete(args, options))
}

export async function patchServersTargetRolesRoleId(
  args: InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].roles[':role_id'].$patch(args, options))
}

export async function putServersTargetPermissionsRoleId(
  args: InferRequestType<(typeof client.servers)[':target']['permissions'][':role_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].permissions[':role_id'].$put(args, options))
}

export async function putServersTargetPermissionsDefault(
  args: InferRequestType<(typeof client.servers)[':target']['permissions']['default']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].permissions.default.$put(args, options))
}

export async function getServersTargetEmojis(
  args: InferRequestType<(typeof client.servers)[':target']['emojis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].emojis.$get(args, options))
}

export async function patchServersTargetRolesRanks(
  args: InferRequestType<(typeof client.servers)[':target']['roles']['ranks']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].roles.ranks.$patch(args, options))
}

export async function getServersTargetAuditLogs(
  args: InferRequestType<(typeof client.servers)[':target']['audit_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':target'].audit_logs.$get(args, options))
}

export async function getServersServerDiscover(
  args: InferRequestType<(typeof client.servers)[':server']['discover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':server'].discover.$get(args, options))
}

export async function putServersServerDiscover(
  args: InferRequestType<(typeof client.servers)[':server']['discover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':server'].discover.$put(args, options))
}

export async function deleteServersServerDiscover(
  args: InferRequestType<(typeof client.servers)[':server']['discover']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.servers[':server'].discover.$delete(args, options))
}

export async function getInvitesTarget(
  args: InferRequestType<(typeof client.invites)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites[':target'].$get(args, options))
}

export async function postInvitesTarget(
  args: InferRequestType<(typeof client.invites)[':target']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites[':target'].$post(args, options))
}

export async function deleteInvitesTarget(
  args: InferRequestType<(typeof client.invites)[':target']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites[':target'].$delete(args, options))
}

export async function getCustomEmojiEmojiId(
  args: InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom.emoji[':emoji_id'].$get(args, options))
}

export async function putCustomEmojiEmojiId(
  args: InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom.emoji[':emoji_id'].$put(args, options))
}

export async function deleteCustomEmojiEmojiId(
  args: InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom.emoji[':emoji_id'].$delete(args, options))
}

export async function patchCustomEmojiEmojiId(
  args: InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom.emoji[':emoji_id'].$patch(args, options))
}

export async function postSafetyReport(
  args: InferRequestType<typeof client.safety.report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.safety.report.$post(args, options))
}

export async function postAuthAccountCreate(
  args: InferRequestType<typeof client.auth.account.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.account.create.$post(args, options))
}

export async function postAuthAccountReverify(
  args: InferRequestType<typeof client.auth.account.reverify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.account.reverify.$post(args, options))
}

export async function putAuthAccountDelete(
  args: InferRequestType<typeof client.auth.account.delete.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.account.delete.$put(args, options))
}

export async function postAuthAccountDelete(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.account.delete.$post(undefined, options))
}

export async function getAuthAccountIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.account.index.$get(undefined, options))
}

export async function postAuthAccountDisable(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.account.disable.$post(undefined, options))
}

export async function patchAuthAccountChangePassword(
  args: InferRequestType<typeof client.auth.account.change.password.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.account.change.password.$patch(args, options))
}

export async function patchAuthAccountChangeEmail(
  args: InferRequestType<typeof client.auth.account.change.email.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.account.change.email.$patch(args, options))
}

export async function postAuthAccountVerifyCode(
  args: InferRequestType<(typeof client.auth.account.verify)[':code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.account.verify[':code'].$post(args, options))
}

export async function postAuthAccountResetPassword(
  args: InferRequestType<typeof client.auth.account.reset_password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.account.reset_password.$post(args, options))
}

export async function patchAuthAccountResetPassword(
  args: InferRequestType<typeof client.auth.account.reset_password.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.account.reset_password.$patch(args, options))
}

export async function postAuthSessionLogin(
  args: InferRequestType<typeof client.auth.session.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.session.login.$post(args, options))
}

export async function postAuthSessionLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.session.logout.$post(undefined, options))
}

export async function getAuthSessionAll(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.session.all.$get(undefined, options))
}

export async function deleteAuthSessionAll(
  args: InferRequestType<typeof client.auth.session.all.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.session.all.$delete(args, options))
}

export async function deleteAuthSessionId(
  args: InferRequestType<(typeof client.auth.session)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.session[':id'].$delete(args, options))
}

export async function patchAuthSessionId(
  args: InferRequestType<(typeof client.auth.session)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.session[':id'].$patch(args, options))
}

export async function putAuthMfaTicket(
  args: InferRequestType<typeof client.auth.mfa.ticket.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.mfa.ticket.$put(args, options))
}

export async function getAuthMfaIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.mfa.index.$get(undefined, options))
}

export async function postAuthMfaRecovery(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.mfa.recovery.$post(undefined, options))
}

export async function patchAuthMfaRecovery(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.mfa.recovery.$patch(undefined, options))
}

export async function getAuthMfaMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.mfa.methods.$get(undefined, options))
}

export async function putAuthMfaTotp(
  args: InferRequestType<typeof client.auth.mfa.totp.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.mfa.totp.$put(args, options))
}

export async function postAuthMfaTotp(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.mfa.totp.$post(undefined, options))
}

export async function deleteAuthMfaTotp(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.mfa.totp.$delete(undefined, options))
}

export async function getOnboardHello(options?: ClientRequestOptions) {
  return await parseResponse(client.onboard.hello.$get(undefined, options))
}

export async function postOnboardComplete(
  args: InferRequestType<typeof client.onboard.complete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.onboard.complete.$post(args, options))
}

export async function postPolicyAcknowledge(options?: ClientRequestOptions) {
  return await parseResponse(client.policy.acknowledge.$post(undefined, options))
}

export async function postPushSubscribe(
  args: InferRequestType<typeof client.push.subscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.subscribe.$post(args, options))
}

export async function postPushUnsubscribe(options?: ClientRequestOptions) {
  return await parseResponse(client.push.unsubscribe.$post(undefined, options))
}

export async function postSyncSettingsFetch(
  args: InferRequestType<typeof client.sync.settings.fetch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.settings.fetch.$post(args, options))
}

export async function postSyncSettingsSet(
  args: InferRequestType<typeof client.sync.settings.set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.settings.set.$post(args, options))
}

export async function getSyncUnreads(options?: ClientRequestOptions) {
  return await parseResponse(client.sync.unreads.$get(undefined, options))
}

export async function deleteWebhooksWebhookIdTokenMessageId(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':token'][':message_id'].$delete(args, options),
  )
}

export async function patchWebhooksWebhookIdTokenMessageId(
  args: InferRequestType<
    (typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id'][':token'][':message_id'].$patch(args, options),
  )
}

export async function getWebhooksWebhookIdToken(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'][':token'].$get(args, options))
}

export async function postWebhooksWebhookIdToken(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'][':token'].$post(args, options))
}

export async function deleteWebhooksWebhookIdToken(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'][':token'].$delete(args, options))
}

export async function patchWebhooksWebhookIdToken(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'][':token'].$patch(args, options))
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

export async function postWebhooksWebhookIdTokenGithub(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['github']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'][':token'].github.$post(args, options))
}
