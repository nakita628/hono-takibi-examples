import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGuildsGuildIdAutoModerationRulesRuleIdRoute,
  deleteGuildsGuildIdBansUserIdRoute,
  deleteGuildsGuildIdEmojisEmojiIdRoute,
  deleteGuildsGuildIdIntegrationsIntegrationIdRoute,
  deleteGuildsGuildIdMembersUserIdRolesRoleIdRoute,
  deleteGuildsGuildIdMembersUserIdRoute,
  deleteGuildsGuildIdRolesRoleIdRoute,
  deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRoute,
  deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
  deleteGuildsGuildIdSoundboardSoundsSoundIdRoute,
  deleteGuildsGuildIdStickersStickerIdRoute,
  deleteGuildsGuildIdTemplatesCodeRoute,
  getGuildsGuildIdAuditLogsRoute,
  getGuildsGuildIdAutoModerationRulesRoute,
  getGuildsGuildIdAutoModerationRulesRuleIdRoute,
  getGuildsGuildIdBansRoute,
  getGuildsGuildIdBansUserIdRoute,
  getGuildsGuildIdChannelsRoute,
  getGuildsGuildIdEmojisEmojiIdRoute,
  getGuildsGuildIdEmojisRoute,
  getGuildsGuildIdIntegrationsRoute,
  getGuildsGuildIdInvitesRoute,
  getGuildsGuildIdMembersRoute,
  getGuildsGuildIdMembersSearchRoute,
  getGuildsGuildIdMembersUserIdRoute,
  getGuildsGuildIdMessagesSearchRoute,
  getGuildsGuildIdNewMemberWelcomeRoute,
  getGuildsGuildIdOnboardingRoute,
  getGuildsGuildIdPermissionsMemberUserIdRoute,
  getGuildsGuildIdPermissionsRoleRoleIdRoute,
  getGuildsGuildIdPreviewRoute,
  getGuildsGuildIdPruneRoute,
  getGuildsGuildIdRegionsRoute,
  getGuildsGuildIdRequestsRoute,
  getGuildsGuildIdRolesMemberCountsRoute,
  getGuildsGuildIdRolesRoleIdRoute,
  getGuildsGuildIdRolesRoute,
  getGuildsGuildIdRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersRoute,
  getGuildsGuildIdScheduledEventsRoute,
  getGuildsGuildIdSoundboardSoundsRoute,
  getGuildsGuildIdSoundboardSoundsSoundIdRoute,
  getGuildsGuildIdStickersRoute,
  getGuildsGuildIdStickersStickerIdRoute,
  getGuildsGuildIdTemplatesRoute,
  getGuildsGuildIdThreadsActiveRoute,
  getGuildsGuildIdVanityUrlRoute,
  getGuildsGuildIdVoiceStatesMeRoute,
  getGuildsGuildIdVoiceStatesUserIdRoute,
  getGuildsGuildIdWebhooksRoute,
  getGuildsGuildIdWelcomeScreenRoute,
  getGuildsGuildIdWidgetJsonRoute,
  getGuildsGuildIdWidgetPngRoute,
  getGuildsGuildIdWidgetRoute,
  getGuildsTemplatesCodeRoute,
  patchGuildsGuildIdAutoModerationRulesRuleIdRoute,
  patchGuildsGuildIdChannelsRoute,
  patchGuildsGuildIdEmojisEmojiIdRoute,
  patchGuildsGuildIdMembersMeRoute,
  patchGuildsGuildIdMembersUserIdRoute,
  patchGuildsGuildIdRequestsRequestIdRoute,
  patchGuildsGuildIdRolesRoleIdRoute,
  patchGuildsGuildIdRolesRoute,
  patchGuildsGuildIdRoute,
  patchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRoute,
  patchGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
  patchGuildsGuildIdSoundboardSoundsSoundIdRoute,
  patchGuildsGuildIdStickersStickerIdRoute,
  patchGuildsGuildIdTemplatesCodeRoute,
  patchGuildsGuildIdVoiceStatesMeRoute,
  patchGuildsGuildIdVoiceStatesUserIdRoute,
  patchGuildsGuildIdWelcomeScreenRoute,
  patchGuildsGuildIdWidgetRoute,
  postGuildsGuildIdAutoModerationRulesRoute,
  postGuildsGuildIdBulkBanRoute,
  postGuildsGuildIdChannelsRoute,
  postGuildsGuildIdEmojisRoute,
  postGuildsGuildIdPruneRoute,
  postGuildsGuildIdRolesRoute,
  postGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsRoute,
  postGuildsGuildIdScheduledEventsRoute,
  postGuildsGuildIdSoundboardSoundsRoute,
  postGuildsGuildIdStickersRoute,
  postGuildsGuildIdTemplatesRoute,
  putGuildsGuildIdBansUserIdRoute,
  putGuildsGuildIdIncidentActionsRoute,
  putGuildsGuildIdMembersUserIdRolesRoleIdRoute,
  putGuildsGuildIdMembersUserIdRoute,
  putGuildsGuildIdOnboardingRoute,
  putGuildsGuildIdTemplatesCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guildsHandler = app
  .openapi(getGuildsTemplatesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdAutoModerationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdAutoModerationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdAutoModerationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdAutoModerationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdAutoModerationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdBansUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGuildsGuildIdBansUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdBansUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdBulkBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdEmojisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdEmojisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdEmojisEmojiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdEmojisEmojiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdEmojisEmojiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGuildsGuildIdIncidentActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdMembersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdMembersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGuildsGuildIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGuildsGuildIdMembersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdMembersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdMessagesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdNewMemberWelcomeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGuildsGuildIdOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdPermissionsMemberUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdPermissionsRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdPruneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdPruneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdRolesMemberCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdScheduledEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdScheduledEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGuildsGuildIdSoundboardSoundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdSoundboardSoundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdSoundboardSoundsSoundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdSoundboardSoundsSoundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdSoundboardSoundsSoundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdStickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdStickersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdStickersStickerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdStickersStickerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdStickersStickerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuildsGuildIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGuildsGuildIdTemplatesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuildsGuildIdTemplatesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdTemplatesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdThreadsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdVanityUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdVoiceStatesMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdVoiceStatesMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdVoiceStatesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdVoiceStatesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdWelcomeScreenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdWelcomeScreenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuildsGuildIdWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdWidgetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuildsGuildIdWidgetPngRoute, (c) => {
    throw new Error('Not implemented')
  })
