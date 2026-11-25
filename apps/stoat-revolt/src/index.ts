import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoute,
  getUsersMeRoute,
  getUsersTargetRoute,
  patchUsersTargetRoute,
  getUsersTargetFlagsRoute,
  patchUsersMeUsernameRoute,
  getUsersTargetDefaultAvatarRoute,
  getUsersTargetProfileRoute,
  getUsersDmsRoute,
  getUsersTargetDmRoute,
  getUsersTargetMutualRoute,
  putUsersTargetFriendRoute,
  deleteUsersTargetFriendRoute,
  putUsersTargetBlockRoute,
  deleteUsersTargetBlockRoute,
  postUsersFriendRoute,
  postBotsCreateRoute,
  getBotsTargetInviteRoute,
  postBotsTargetInviteRoute,
  getBotsBotIdRoute,
  deleteBotsBotIdRoute,
  patchBotsBotIdRoute,
  getBotsMeRoute,
  getBotsBotIdDiscoverRoute,
  putBotsBotIdDiscoverRoute,
  deleteBotsBotIdDiscoverRoute,
  putChannelsTargetAckMessageRoute,
  getChannelsTargetRoute,
  deleteChannelsTargetRoute,
  patchChannelsTargetRoute,
  getChannelsTargetMembersRoute,
  postChannelsTargetInvitesRoute,
  getChannelsTargetMessagesRoute,
  postChannelsTargetMessagesRoute,
  postChannelsTargetSearchRoute,
  postChannelsTargetMessagesMsgPinRoute,
  deleteChannelsTargetMessagesMsgPinRoute,
  getChannelsTargetMessagesMsgRoute,
  deleteChannelsTargetMessagesMsgRoute,
  patchChannelsTargetMessagesMsgRoute,
  deleteChannelsTargetMessagesBulkRoute,
  postChannelsCreateRoute,
  putChannelsGroupIdRecipientsMemberIdRoute,
  deleteChannelsGroupIdRecipientsMemberIdRoute,
  postChannelsTargetJoinCallRoute,
  putChannelsTargetEndRingTargetUserRoute,
  putChannelsTargetPermissionsRoleIdRoute,
  putChannelsTargetPermissionsDefaultRoute,
  putChannelsTargetMessagesMsgReactionsEmojiRoute,
  deleteChannelsTargetMessagesMsgReactionsEmojiRoute,
  deleteChannelsTargetMessagesMsgReactionsRoute,
  getChannelsChannelIdWebhooksRoute,
  postChannelsChannelIdWebhooksRoute,
  postServersCreateRoute,
  getServersTargetRoute,
  deleteServersTargetRoute,
  patchServersTargetRoute,
  putServersTargetAckRoute,
  postServersServerChannelsRoute,
  getServersTargetMembersRoute,
  getServersServerIdMembersMemberIdRoute,
  deleteServersServerIdMembersMemberIdRoute,
  patchServersServerIdMembersMemberIdRoute,
  getServersTargetMembersExperimentalQueryRoute,
  putServersServerBansTargetRoute,
  deleteServersServerBansTargetRoute,
  getServersTargetBansRoute,
  getServersTargetInvitesRoute,
  postServersTargetRolesRoute,
  getServersTargetRolesRoleIdRoute,
  deleteServersTargetRolesRoleIdRoute,
  patchServersTargetRolesRoleIdRoute,
  putServersTargetPermissionsRoleIdRoute,
  putServersTargetPermissionsDefaultRoute,
  getServersTargetEmojisRoute,
  patchServersTargetRolesRanksRoute,
  getServersTargetAuditLogsRoute,
  getServersServerDiscoverRoute,
  putServersServerDiscoverRoute,
  deleteServersServerDiscoverRoute,
  getInvitesTargetRoute,
  postInvitesTargetRoute,
  deleteInvitesTargetRoute,
  getCustomEmojiEmojiIdRoute,
  putCustomEmojiEmojiIdRoute,
  deleteCustomEmojiEmojiIdRoute,
  patchCustomEmojiEmojiIdRoute,
  postSafetyReportRoute,
  postAuthAccountCreateRoute,
  postAuthAccountReverifyRoute,
  putAuthAccountDeleteRoute,
  postAuthAccountDeleteRoute,
  getAuthAccountIndexRoute,
  postAuthAccountDisableRoute,
  patchAuthAccountChangePasswordRoute,
  patchAuthAccountChangeEmailRoute,
  postAuthAccountVerifyCodeRoute,
  postAuthAccountResetPasswordRoute,
  patchAuthAccountResetPasswordRoute,
  postAuthSessionLoginRoute,
  postAuthSessionLogoutRoute,
  getAuthSessionAllRoute,
  deleteAuthSessionAllRoute,
  deleteAuthSessionIdRoute,
  patchAuthSessionIdRoute,
  putAuthMfaTicketRoute,
  getAuthMfaIndexRoute,
  postAuthMfaRecoveryRoute,
  patchAuthMfaRecoveryRoute,
  getAuthMfaMethodsRoute,
  putAuthMfaTotpRoute,
  postAuthMfaTotpRoute,
  deleteAuthMfaTotpRoute,
  getOnboardHelloRoute,
  postOnboardCompleteRoute,
  postPolicyAcknowledgeRoute,
  postPushSubscribeRoute,
  postPushUnsubscribeRoute,
  postSyncSettingsFetchRoute,
  postSyncSettingsSetRoute,
  getSyncUnreadsRoute,
  deleteWebhooksWebhookIdTokenMessageIdRoute,
  patchWebhooksWebhookIdTokenMessageIdRoute,
  getWebhooksWebhookIdTokenRoute,
  postWebhooksWebhookIdTokenRoute,
  deleteWebhooksWebhookIdTokenRoute,
  patchWebhooksWebhookIdTokenRoute,
  getWebhooksWebhookIdRoute,
  deleteWebhooksWebhookIdRoute,
  patchWebhooksWebhookIdRoute,
  postWebhooksWebhookIdTokenGithubRoute,
} from './routes'
import {
  getRouteHandler,
  getUsersMeRouteHandler,
  getUsersTargetRouteHandler,
  patchUsersTargetRouteHandler,
  getUsersTargetFlagsRouteHandler,
  patchUsersMeUsernameRouteHandler,
  getUsersTargetDefaultAvatarRouteHandler,
  getUsersTargetProfileRouteHandler,
  getUsersDmsRouteHandler,
  getUsersTargetDmRouteHandler,
  getUsersTargetMutualRouteHandler,
  putUsersTargetFriendRouteHandler,
  deleteUsersTargetFriendRouteHandler,
  putUsersTargetBlockRouteHandler,
  deleteUsersTargetBlockRouteHandler,
  postUsersFriendRouteHandler,
  postBotsCreateRouteHandler,
  getBotsTargetInviteRouteHandler,
  postBotsTargetInviteRouteHandler,
  getBotsBotIdRouteHandler,
  deleteBotsBotIdRouteHandler,
  patchBotsBotIdRouteHandler,
  getBotsMeRouteHandler,
  getBotsBotIdDiscoverRouteHandler,
  putBotsBotIdDiscoverRouteHandler,
  deleteBotsBotIdDiscoverRouteHandler,
  putChannelsTargetAckMessageRouteHandler,
  getChannelsTargetRouteHandler,
  deleteChannelsTargetRouteHandler,
  patchChannelsTargetRouteHandler,
  getChannelsTargetMembersRouteHandler,
  postChannelsTargetInvitesRouteHandler,
  getChannelsTargetMessagesRouteHandler,
  postChannelsTargetMessagesRouteHandler,
  postChannelsTargetSearchRouteHandler,
  postChannelsTargetMessagesMsgPinRouteHandler,
  deleteChannelsTargetMessagesMsgPinRouteHandler,
  getChannelsTargetMessagesMsgRouteHandler,
  deleteChannelsTargetMessagesMsgRouteHandler,
  patchChannelsTargetMessagesMsgRouteHandler,
  deleteChannelsTargetMessagesBulkRouteHandler,
  postChannelsCreateRouteHandler,
  putChannelsGroupIdRecipientsMemberIdRouteHandler,
  deleteChannelsGroupIdRecipientsMemberIdRouteHandler,
  postChannelsTargetJoinCallRouteHandler,
  putChannelsTargetEndRingTargetUserRouteHandler,
  putChannelsTargetPermissionsRoleIdRouteHandler,
  putChannelsTargetPermissionsDefaultRouteHandler,
  putChannelsTargetMessagesMsgReactionsEmojiRouteHandler,
  deleteChannelsTargetMessagesMsgReactionsEmojiRouteHandler,
  deleteChannelsTargetMessagesMsgReactionsRouteHandler,
  getChannelsChannelIdWebhooksRouteHandler,
  postChannelsChannelIdWebhooksRouteHandler,
  postServersCreateRouteHandler,
  getServersTargetRouteHandler,
  deleteServersTargetRouteHandler,
  patchServersTargetRouteHandler,
  putServersTargetAckRouteHandler,
  postServersServerChannelsRouteHandler,
  getServersTargetMembersRouteHandler,
  getServersServerIdMembersMemberIdRouteHandler,
  deleteServersServerIdMembersMemberIdRouteHandler,
  patchServersServerIdMembersMemberIdRouteHandler,
  getServersTargetMembersExperimentalQueryRouteHandler,
  putServersServerBansTargetRouteHandler,
  deleteServersServerBansTargetRouteHandler,
  getServersTargetBansRouteHandler,
  getServersTargetInvitesRouteHandler,
  postServersTargetRolesRouteHandler,
  getServersTargetRolesRoleIdRouteHandler,
  deleteServersTargetRolesRoleIdRouteHandler,
  patchServersTargetRolesRoleIdRouteHandler,
  putServersTargetPermissionsRoleIdRouteHandler,
  putServersTargetPermissionsDefaultRouteHandler,
  getServersTargetEmojisRouteHandler,
  patchServersTargetRolesRanksRouteHandler,
  getServersTargetAuditLogsRouteHandler,
  getServersServerDiscoverRouteHandler,
  putServersServerDiscoverRouteHandler,
  deleteServersServerDiscoverRouteHandler,
  getInvitesTargetRouteHandler,
  postInvitesTargetRouteHandler,
  deleteInvitesTargetRouteHandler,
  getCustomEmojiEmojiIdRouteHandler,
  putCustomEmojiEmojiIdRouteHandler,
  deleteCustomEmojiEmojiIdRouteHandler,
  patchCustomEmojiEmojiIdRouteHandler,
  postSafetyReportRouteHandler,
  postAuthAccountCreateRouteHandler,
  postAuthAccountReverifyRouteHandler,
  putAuthAccountDeleteRouteHandler,
  postAuthAccountDeleteRouteHandler,
  getAuthAccountIndexRouteHandler,
  postAuthAccountDisableRouteHandler,
  patchAuthAccountChangePasswordRouteHandler,
  patchAuthAccountChangeEmailRouteHandler,
  postAuthAccountVerifyCodeRouteHandler,
  postAuthAccountResetPasswordRouteHandler,
  patchAuthAccountResetPasswordRouteHandler,
  postAuthSessionLoginRouteHandler,
  postAuthSessionLogoutRouteHandler,
  getAuthSessionAllRouteHandler,
  deleteAuthSessionAllRouteHandler,
  deleteAuthSessionIdRouteHandler,
  patchAuthSessionIdRouteHandler,
  putAuthMfaTicketRouteHandler,
  getAuthMfaIndexRouteHandler,
  postAuthMfaRecoveryRouteHandler,
  patchAuthMfaRecoveryRouteHandler,
  getAuthMfaMethodsRouteHandler,
  putAuthMfaTotpRouteHandler,
  postAuthMfaTotpRouteHandler,
  deleteAuthMfaTotpRouteHandler,
  getOnboardHelloRouteHandler,
  postOnboardCompleteRouteHandler,
  postPolicyAcknowledgeRouteHandler,
  postPushSubscribeRouteHandler,
  postPushUnsubscribeRouteHandler,
  postSyncSettingsFetchRouteHandler,
  postSyncSettingsSetRouteHandler,
  getSyncUnreadsRouteHandler,
  deleteWebhooksWebhookIdTokenMessageIdRouteHandler,
  patchWebhooksWebhookIdTokenMessageIdRouteHandler,
  getWebhooksWebhookIdTokenRouteHandler,
  postWebhooksWebhookIdTokenRouteHandler,
  deleteWebhooksWebhookIdTokenRouteHandler,
  patchWebhooksWebhookIdTokenRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  patchWebhooksWebhookIdRouteHandler,
  postWebhooksWebhookIdTokenGithubRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(getUsersTargetRoute, getUsersTargetRouteHandler)
  .openapi(patchUsersTargetRoute, patchUsersTargetRouteHandler)
  .openapi(getUsersTargetFlagsRoute, getUsersTargetFlagsRouteHandler)
  .openapi(patchUsersMeUsernameRoute, patchUsersMeUsernameRouteHandler)
  .openapi(getUsersTargetDefaultAvatarRoute, getUsersTargetDefaultAvatarRouteHandler)
  .openapi(getUsersTargetProfileRoute, getUsersTargetProfileRouteHandler)
  .openapi(getUsersDmsRoute, getUsersDmsRouteHandler)
  .openapi(getUsersTargetDmRoute, getUsersTargetDmRouteHandler)
  .openapi(getUsersTargetMutualRoute, getUsersTargetMutualRouteHandler)
  .openapi(putUsersTargetFriendRoute, putUsersTargetFriendRouteHandler)
  .openapi(deleteUsersTargetFriendRoute, deleteUsersTargetFriendRouteHandler)
  .openapi(putUsersTargetBlockRoute, putUsersTargetBlockRouteHandler)
  .openapi(deleteUsersTargetBlockRoute, deleteUsersTargetBlockRouteHandler)
  .openapi(postUsersFriendRoute, postUsersFriendRouteHandler)
  .openapi(postBotsCreateRoute, postBotsCreateRouteHandler)
  .openapi(getBotsTargetInviteRoute, getBotsTargetInviteRouteHandler)
  .openapi(postBotsTargetInviteRoute, postBotsTargetInviteRouteHandler)
  .openapi(getBotsBotIdRoute, getBotsBotIdRouteHandler)
  .openapi(deleteBotsBotIdRoute, deleteBotsBotIdRouteHandler)
  .openapi(patchBotsBotIdRoute, patchBotsBotIdRouteHandler)
  .openapi(getBotsMeRoute, getBotsMeRouteHandler)
  .openapi(getBotsBotIdDiscoverRoute, getBotsBotIdDiscoverRouteHandler)
  .openapi(putBotsBotIdDiscoverRoute, putBotsBotIdDiscoverRouteHandler)
  .openapi(deleteBotsBotIdDiscoverRoute, deleteBotsBotIdDiscoverRouteHandler)
  .openapi(putChannelsTargetAckMessageRoute, putChannelsTargetAckMessageRouteHandler)
  .openapi(getChannelsTargetRoute, getChannelsTargetRouteHandler)
  .openapi(deleteChannelsTargetRoute, deleteChannelsTargetRouteHandler)
  .openapi(patchChannelsTargetRoute, patchChannelsTargetRouteHandler)
  .openapi(getChannelsTargetMembersRoute, getChannelsTargetMembersRouteHandler)
  .openapi(postChannelsTargetInvitesRoute, postChannelsTargetInvitesRouteHandler)
  .openapi(getChannelsTargetMessagesRoute, getChannelsTargetMessagesRouteHandler)
  .openapi(postChannelsTargetMessagesRoute, postChannelsTargetMessagesRouteHandler)
  .openapi(postChannelsTargetSearchRoute, postChannelsTargetSearchRouteHandler)
  .openapi(postChannelsTargetMessagesMsgPinRoute, postChannelsTargetMessagesMsgPinRouteHandler)
  .openapi(deleteChannelsTargetMessagesMsgPinRoute, deleteChannelsTargetMessagesMsgPinRouteHandler)
  .openapi(getChannelsTargetMessagesMsgRoute, getChannelsTargetMessagesMsgRouteHandler)
  .openapi(deleteChannelsTargetMessagesMsgRoute, deleteChannelsTargetMessagesMsgRouteHandler)
  .openapi(patchChannelsTargetMessagesMsgRoute, patchChannelsTargetMessagesMsgRouteHandler)
  .openapi(deleteChannelsTargetMessagesBulkRoute, deleteChannelsTargetMessagesBulkRouteHandler)
  .openapi(postChannelsCreateRoute, postChannelsCreateRouteHandler)
  .openapi(
    putChannelsGroupIdRecipientsMemberIdRoute,
    putChannelsGroupIdRecipientsMemberIdRouteHandler,
  )
  .openapi(
    deleteChannelsGroupIdRecipientsMemberIdRoute,
    deleteChannelsGroupIdRecipientsMemberIdRouteHandler,
  )
  .openapi(postChannelsTargetJoinCallRoute, postChannelsTargetJoinCallRouteHandler)
  .openapi(putChannelsTargetEndRingTargetUserRoute, putChannelsTargetEndRingTargetUserRouteHandler)
  .openapi(putChannelsTargetPermissionsRoleIdRoute, putChannelsTargetPermissionsRoleIdRouteHandler)
  .openapi(
    putChannelsTargetPermissionsDefaultRoute,
    putChannelsTargetPermissionsDefaultRouteHandler,
  )
  .openapi(
    putChannelsTargetMessagesMsgReactionsEmojiRoute,
    putChannelsTargetMessagesMsgReactionsEmojiRouteHandler,
  )
  .openapi(
    deleteChannelsTargetMessagesMsgReactionsEmojiRoute,
    deleteChannelsTargetMessagesMsgReactionsEmojiRouteHandler,
  )
  .openapi(
    deleteChannelsTargetMessagesMsgReactionsRoute,
    deleteChannelsTargetMessagesMsgReactionsRouteHandler,
  )
  .openapi(getChannelsChannelIdWebhooksRoute, getChannelsChannelIdWebhooksRouteHandler)
  .openapi(postChannelsChannelIdWebhooksRoute, postChannelsChannelIdWebhooksRouteHandler)
  .openapi(postServersCreateRoute, postServersCreateRouteHandler)
  .openapi(getServersTargetRoute, getServersTargetRouteHandler)
  .openapi(deleteServersTargetRoute, deleteServersTargetRouteHandler)
  .openapi(patchServersTargetRoute, patchServersTargetRouteHandler)
  .openapi(putServersTargetAckRoute, putServersTargetAckRouteHandler)
  .openapi(postServersServerChannelsRoute, postServersServerChannelsRouteHandler)
  .openapi(getServersTargetMembersRoute, getServersTargetMembersRouteHandler)
  .openapi(getServersServerIdMembersMemberIdRoute, getServersServerIdMembersMemberIdRouteHandler)
  .openapi(
    deleteServersServerIdMembersMemberIdRoute,
    deleteServersServerIdMembersMemberIdRouteHandler,
  )
  .openapi(
    patchServersServerIdMembersMemberIdRoute,
    patchServersServerIdMembersMemberIdRouteHandler,
  )
  .openapi(
    getServersTargetMembersExperimentalQueryRoute,
    getServersTargetMembersExperimentalQueryRouteHandler,
  )
  .openapi(putServersServerBansTargetRoute, putServersServerBansTargetRouteHandler)
  .openapi(deleteServersServerBansTargetRoute, deleteServersServerBansTargetRouteHandler)
  .openapi(getServersTargetBansRoute, getServersTargetBansRouteHandler)
  .openapi(getServersTargetInvitesRoute, getServersTargetInvitesRouteHandler)
  .openapi(postServersTargetRolesRoute, postServersTargetRolesRouteHandler)
  .openapi(getServersTargetRolesRoleIdRoute, getServersTargetRolesRoleIdRouteHandler)
  .openapi(deleteServersTargetRolesRoleIdRoute, deleteServersTargetRolesRoleIdRouteHandler)
  .openapi(patchServersTargetRolesRoleIdRoute, patchServersTargetRolesRoleIdRouteHandler)
  .openapi(putServersTargetPermissionsRoleIdRoute, putServersTargetPermissionsRoleIdRouteHandler)
  .openapi(putServersTargetPermissionsDefaultRoute, putServersTargetPermissionsDefaultRouteHandler)
  .openapi(getServersTargetEmojisRoute, getServersTargetEmojisRouteHandler)
  .openapi(patchServersTargetRolesRanksRoute, patchServersTargetRolesRanksRouteHandler)
  .openapi(getServersTargetAuditLogsRoute, getServersTargetAuditLogsRouteHandler)
  .openapi(getServersServerDiscoverRoute, getServersServerDiscoverRouteHandler)
  .openapi(putServersServerDiscoverRoute, putServersServerDiscoverRouteHandler)
  .openapi(deleteServersServerDiscoverRoute, deleteServersServerDiscoverRouteHandler)
  .openapi(getInvitesTargetRoute, getInvitesTargetRouteHandler)
  .openapi(postInvitesTargetRoute, postInvitesTargetRouteHandler)
  .openapi(deleteInvitesTargetRoute, deleteInvitesTargetRouteHandler)
  .openapi(getCustomEmojiEmojiIdRoute, getCustomEmojiEmojiIdRouteHandler)
  .openapi(putCustomEmojiEmojiIdRoute, putCustomEmojiEmojiIdRouteHandler)
  .openapi(deleteCustomEmojiEmojiIdRoute, deleteCustomEmojiEmojiIdRouteHandler)
  .openapi(patchCustomEmojiEmojiIdRoute, patchCustomEmojiEmojiIdRouteHandler)
  .openapi(postSafetyReportRoute, postSafetyReportRouteHandler)
  .openapi(postAuthAccountCreateRoute, postAuthAccountCreateRouteHandler)
  .openapi(postAuthAccountReverifyRoute, postAuthAccountReverifyRouteHandler)
  .openapi(putAuthAccountDeleteRoute, putAuthAccountDeleteRouteHandler)
  .openapi(postAuthAccountDeleteRoute, postAuthAccountDeleteRouteHandler)
  .openapi(getAuthAccountIndexRoute, getAuthAccountIndexRouteHandler)
  .openapi(postAuthAccountDisableRoute, postAuthAccountDisableRouteHandler)
  .openapi(patchAuthAccountChangePasswordRoute, patchAuthAccountChangePasswordRouteHandler)
  .openapi(patchAuthAccountChangeEmailRoute, patchAuthAccountChangeEmailRouteHandler)
  .openapi(postAuthAccountVerifyCodeRoute, postAuthAccountVerifyCodeRouteHandler)
  .openapi(postAuthAccountResetPasswordRoute, postAuthAccountResetPasswordRouteHandler)
  .openapi(patchAuthAccountResetPasswordRoute, patchAuthAccountResetPasswordRouteHandler)
  .openapi(postAuthSessionLoginRoute, postAuthSessionLoginRouteHandler)
  .openapi(postAuthSessionLogoutRoute, postAuthSessionLogoutRouteHandler)
  .openapi(getAuthSessionAllRoute, getAuthSessionAllRouteHandler)
  .openapi(deleteAuthSessionAllRoute, deleteAuthSessionAllRouteHandler)
  .openapi(deleteAuthSessionIdRoute, deleteAuthSessionIdRouteHandler)
  .openapi(patchAuthSessionIdRoute, patchAuthSessionIdRouteHandler)
  .openapi(putAuthMfaTicketRoute, putAuthMfaTicketRouteHandler)
  .openapi(getAuthMfaIndexRoute, getAuthMfaIndexRouteHandler)
  .openapi(postAuthMfaRecoveryRoute, postAuthMfaRecoveryRouteHandler)
  .openapi(patchAuthMfaRecoveryRoute, patchAuthMfaRecoveryRouteHandler)
  .openapi(getAuthMfaMethodsRoute, getAuthMfaMethodsRouteHandler)
  .openapi(putAuthMfaTotpRoute, putAuthMfaTotpRouteHandler)
  .openapi(postAuthMfaTotpRoute, postAuthMfaTotpRouteHandler)
  .openapi(deleteAuthMfaTotpRoute, deleteAuthMfaTotpRouteHandler)
  .openapi(getOnboardHelloRoute, getOnboardHelloRouteHandler)
  .openapi(postOnboardCompleteRoute, postOnboardCompleteRouteHandler)
  .openapi(postPolicyAcknowledgeRoute, postPolicyAcknowledgeRouteHandler)
  .openapi(postPushSubscribeRoute, postPushSubscribeRouteHandler)
  .openapi(postPushUnsubscribeRoute, postPushUnsubscribeRouteHandler)
  .openapi(postSyncSettingsFetchRoute, postSyncSettingsFetchRouteHandler)
  .openapi(postSyncSettingsSetRoute, postSyncSettingsSetRouteHandler)
  .openapi(getSyncUnreadsRoute, getSyncUnreadsRouteHandler)
  .openapi(
    deleteWebhooksWebhookIdTokenMessageIdRoute,
    deleteWebhooksWebhookIdTokenMessageIdRouteHandler,
  )
  .openapi(
    patchWebhooksWebhookIdTokenMessageIdRoute,
    patchWebhooksWebhookIdTokenMessageIdRouteHandler,
  )
  .openapi(getWebhooksWebhookIdTokenRoute, getWebhooksWebhookIdTokenRouteHandler)
  .openapi(postWebhooksWebhookIdTokenRoute, postWebhooksWebhookIdTokenRouteHandler)
  .openapi(deleteWebhooksWebhookIdTokenRoute, deleteWebhooksWebhookIdTokenRouteHandler)
  .openapi(patchWebhooksWebhookIdTokenRoute, patchWebhooksWebhookIdTokenRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(patchWebhooksWebhookIdRoute, patchWebhooksWebhookIdRouteHandler)
  .openapi(postWebhooksWebhookIdTokenGithubRoute, postWebhooksWebhookIdTokenGithubRouteHandler)

export default app
