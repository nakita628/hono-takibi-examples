import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAttachmentsAttachmentRoute,
  deleteApiIdentityProvidersIdentityProviderRoute,
  deleteApiMemosMemoReactionsReactionRoute,
  deleteApiMemosMemoRoute,
  deleteApiMemosMemoSharesShareRoute,
  deleteApiSpacesSpaceInvitationsInvitationRoute,
  deleteApiSpacesSpaceMembersMemberRoute,
  deleteApiSpacesSpaceRoute,
  deleteApiUsersUserLinkedIdentitiesLinkedIdentityRoute,
  deleteApiUsersUserNotificationsNotificationRoute,
  deleteApiUsersUserPersonalAccessTokensPersonalAccessTokenRoute,
  deleteApiUsersUserRoute,
  deleteApiUsersUserViewsViewRoute,
  deleteApiUsersUserWebhooksWebhookRoute,
  getApiAttachmentsAttachmentRoute,
  getApiAttachmentsRoute,
  getApiAuthMeRoute,
  getApiIdentityProvidersIdentityProviderRoute,
  getApiIdentityProvidersRoute,
  getApiInstanceConfigurationRoute,
  getApiInstanceInstanceStarRoute,
  getApiInstanceProfileRoute,
  getApiInstanceStatsRoute,
  getApiMemosDashLinkMetadataRoute,
  getApiMemosMemoAttachmentsRoute,
  getApiMemosMemoReactionsRoute,
  getApiMemosMemoRelationsRoute,
  getApiMemosMemoRoute,
  getApiMemosMemoSharesRoute,
  getApiMemosRoute,
  getApiSharesShareTokenMemoRoute,
  getApiSpacesRoute,
  getApiSpacesSpaceInvitationsInvitationRoute,
  getApiSpacesSpaceInvitationsRoute,
  getApiSpacesSpaceMembersMemberRoute,
  getApiSpacesSpaceMembersRoute,
  getApiSpacesSpaceRoute,
  getApiUsersRoute,
  getApiUsersUserGetStatsRoute,
  getApiUsersUserLinkedIdentitiesLinkedIdentityRoute,
  getApiUsersUserLinkedIdentitiesRoute,
  getApiUsersUserNotificationsRoute,
  getApiUsersUserPersonalAccessTokensRoute,
  getApiUsersUserRoute,
  getApiUsersUserSettingsRoute,
  getApiUsersUserSettingsSettingRoute,
  getApiUsersUserSpaceInvitationsRoute,
  getApiUsersUserStatsRoute,
  getApiUsersUserUsageRoute,
  getApiUsersUserViewsRoute,
  getApiUsersUserViewsViewRoute,
  getApiUsersUserWebhooksRoute,
  getApiUsersUserWebhooksWebhookGetSigningSecretRoute,
  patchApiAttachmentsAttachmentRoute,
  patchApiIdentityProvidersIdentityProviderRoute,
  patchApiInstanceInstanceStarRoute,
  patchApiMemosMemoAttachmentsRoute,
  patchApiMemosMemoRelationsRoute,
  patchApiMemosMemoRoute,
  patchApiSpacesSpaceMembersMemberRoute,
  patchApiSpacesSpaceRoute,
  patchApiUsersUserNotificationsNotificationRoute,
  patchApiUsersUserRoute,
  patchApiUsersUserSettingsSettingRoute,
  patchApiUsersUserViewsViewRoute,
  patchApiUsersUserWebhooksWebhookRoute,
  postApiAiTranscribeRoute,
  postApiAttachmentsBatchDeleteRoute,
  postApiAttachmentsRoute,
  postApiAttachmentsUploadRoute,
  postApiAuthRefreshRoute,
  postApiAuthSigninRoute,
  postApiAuthSignoutRoute,
  postApiIdentityProvidersRoute,
  postApiInstanceSettingsBatchGetRoute,
  postApiInstanceSettingsNotificationTestEmailRoute,
  postApiMemosDashLinkMetadataBatchGetRoute,
  postApiMemosMemoReactionsRoute,
  postApiMemosMemoSharesRoute,
  postApiMemosRoute,
  postApiSpacesRoute,
  postApiSpacesSpaceInvitationsInvitationAcceptRoute,
  postApiSpacesSpaceInvitationsInvitationDeclineRoute,
  postApiSpacesSpaceInvitationsRoute,
  postApiUsersBatchGetRoute,
  postApiUsersRoute,
  postApiUsersUserImportMemosRoute,
  postApiUsersUserLinkedIdentitiesRoute,
  postApiUsersUserPersonalAccessTokensRoute,
  postApiUsersUserViewsReorderRoute,
  postApiUsersUserViewsRoute,
  postApiUsersUserWebhooksRoute,
} from './routes'
import {
  deleteApiAttachmentsAttachmentRouteHandler,
  deleteApiIdentityProvidersIdentityProviderRouteHandler,
  deleteApiMemosMemoReactionsReactionRouteHandler,
  deleteApiMemosMemoRouteHandler,
  deleteApiMemosMemoSharesShareRouteHandler,
  deleteApiSpacesSpaceInvitationsInvitationRouteHandler,
  deleteApiSpacesSpaceMembersMemberRouteHandler,
  deleteApiSpacesSpaceRouteHandler,
  deleteApiUsersUserLinkedIdentitiesLinkedIdentityRouteHandler,
  deleteApiUsersUserNotificationsNotificationRouteHandler,
  deleteApiUsersUserPersonalAccessTokensPersonalAccessTokenRouteHandler,
  deleteApiUsersUserRouteHandler,
  deleteApiUsersUserViewsViewRouteHandler,
  deleteApiUsersUserWebhooksWebhookRouteHandler,
  getApiAttachmentsAttachmentRouteHandler,
  getApiAttachmentsRouteHandler,
  getApiAuthMeRouteHandler,
  getApiIdentityProvidersIdentityProviderRouteHandler,
  getApiIdentityProvidersRouteHandler,
  getApiInstanceConfigurationRouteHandler,
  getApiInstanceInstanceStarRouteHandler,
  getApiInstanceProfileRouteHandler,
  getApiInstanceStatsRouteHandler,
  getApiMemosDashLinkMetadataRouteHandler,
  getApiMemosMemoAttachmentsRouteHandler,
  getApiMemosMemoReactionsRouteHandler,
  getApiMemosMemoRelationsRouteHandler,
  getApiMemosMemoRouteHandler,
  getApiMemosMemoSharesRouteHandler,
  getApiMemosRouteHandler,
  getApiSharesShareTokenMemoRouteHandler,
  getApiSpacesRouteHandler,
  getApiSpacesSpaceInvitationsInvitationRouteHandler,
  getApiSpacesSpaceInvitationsRouteHandler,
  getApiSpacesSpaceMembersMemberRouteHandler,
  getApiSpacesSpaceMembersRouteHandler,
  getApiSpacesSpaceRouteHandler,
  getApiUsersRouteHandler,
  getApiUsersUserGetStatsRouteHandler,
  getApiUsersUserLinkedIdentitiesLinkedIdentityRouteHandler,
  getApiUsersUserLinkedIdentitiesRouteHandler,
  getApiUsersUserNotificationsRouteHandler,
  getApiUsersUserPersonalAccessTokensRouteHandler,
  getApiUsersUserRouteHandler,
  getApiUsersUserSettingsRouteHandler,
  getApiUsersUserSettingsSettingRouteHandler,
  getApiUsersUserSpaceInvitationsRouteHandler,
  getApiUsersUserStatsRouteHandler,
  getApiUsersUserUsageRouteHandler,
  getApiUsersUserViewsRouteHandler,
  getApiUsersUserViewsViewRouteHandler,
  getApiUsersUserWebhooksRouteHandler,
  getApiUsersUserWebhooksWebhookGetSigningSecretRouteHandler,
  patchApiAttachmentsAttachmentRouteHandler,
  patchApiIdentityProvidersIdentityProviderRouteHandler,
  patchApiInstanceInstanceStarRouteHandler,
  patchApiMemosMemoAttachmentsRouteHandler,
  patchApiMemosMemoRelationsRouteHandler,
  patchApiMemosMemoRouteHandler,
  patchApiSpacesSpaceMembersMemberRouteHandler,
  patchApiSpacesSpaceRouteHandler,
  patchApiUsersUserNotificationsNotificationRouteHandler,
  patchApiUsersUserRouteHandler,
  patchApiUsersUserSettingsSettingRouteHandler,
  patchApiUsersUserViewsViewRouteHandler,
  patchApiUsersUserWebhooksWebhookRouteHandler,
  postApiAiTranscribeRouteHandler,
  postApiAttachmentsBatchDeleteRouteHandler,
  postApiAttachmentsRouteHandler,
  postApiAttachmentsUploadRouteHandler,
  postApiAuthRefreshRouteHandler,
  postApiAuthSigninRouteHandler,
  postApiAuthSignoutRouteHandler,
  postApiIdentityProvidersRouteHandler,
  postApiInstanceSettingsBatchGetRouteHandler,
  postApiInstanceSettingsNotificationTestEmailRouteHandler,
  postApiMemosDashLinkMetadataBatchGetRouteHandler,
  postApiMemosMemoReactionsRouteHandler,
  postApiMemosMemoSharesRouteHandler,
  postApiMemosRouteHandler,
  postApiSpacesRouteHandler,
  postApiSpacesSpaceInvitationsInvitationAcceptRouteHandler,
  postApiSpacesSpaceInvitationsInvitationDeclineRouteHandler,
  postApiSpacesSpaceInvitationsRouteHandler,
  postApiUsersBatchGetRouteHandler,
  postApiUsersRouteHandler,
  postApiUsersUserImportMemosRouteHandler,
  postApiUsersUserLinkedIdentitiesRouteHandler,
  postApiUsersUserPersonalAccessTokensRouteHandler,
  postApiUsersUserViewsReorderRouteHandler,
  postApiUsersUserViewsRouteHandler,
  postApiUsersUserWebhooksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiAiTranscribeRoute, postApiAiTranscribeRouteHandler)
  .openapi(getApiAttachmentsRoute, getApiAttachmentsRouteHandler)
  .openapi(postApiAttachmentsRoute, postApiAttachmentsRouteHandler)
  .openapi(getApiAttachmentsAttachmentRoute, getApiAttachmentsAttachmentRouteHandler)
  .openapi(deleteApiAttachmentsAttachmentRoute, deleteApiAttachmentsAttachmentRouteHandler)
  .openapi(patchApiAttachmentsAttachmentRoute, patchApiAttachmentsAttachmentRouteHandler)
  .openapi(postApiAttachmentsBatchDeleteRoute, postApiAttachmentsBatchDeleteRouteHandler)
  .openapi(postApiAttachmentsUploadRoute, postApiAttachmentsUploadRouteHandler)
  .openapi(getApiAuthMeRoute, getApiAuthMeRouteHandler)
  .openapi(postApiAuthRefreshRoute, postApiAuthRefreshRouteHandler)
  .openapi(postApiAuthSigninRoute, postApiAuthSigninRouteHandler)
  .openapi(postApiAuthSignoutRoute, postApiAuthSignoutRouteHandler)
  .openapi(getApiIdentityProvidersRoute, getApiIdentityProvidersRouteHandler)
  .openapi(postApiIdentityProvidersRoute, postApiIdentityProvidersRouteHandler)
  .openapi(
    getApiIdentityProvidersIdentityProviderRoute,
    getApiIdentityProvidersIdentityProviderRouteHandler,
  )
  .openapi(
    deleteApiIdentityProvidersIdentityProviderRoute,
    deleteApiIdentityProvidersIdentityProviderRouteHandler,
  )
  .openapi(
    patchApiIdentityProvidersIdentityProviderRoute,
    patchApiIdentityProvidersIdentityProviderRouteHandler,
  )
  .openapi(getApiInstanceConfigurationRoute, getApiInstanceConfigurationRouteHandler)
  .openapi(getApiInstanceProfileRoute, getApiInstanceProfileRouteHandler)
  .openapi(
    postApiInstanceSettingsNotificationTestEmailRoute,
    postApiInstanceSettingsNotificationTestEmailRouteHandler,
  )
  .openapi(postApiInstanceSettingsBatchGetRoute, postApiInstanceSettingsBatchGetRouteHandler)
  .openapi(getApiInstanceStatsRoute, getApiInstanceStatsRouteHandler)
  .openapi(getApiInstanceInstanceStarRoute, getApiInstanceInstanceStarRouteHandler)
  .openapi(patchApiInstanceInstanceStarRoute, patchApiInstanceInstanceStarRouteHandler)
  .openapi(getApiMemosRoute, getApiMemosRouteHandler)
  .openapi(postApiMemosRoute, postApiMemosRouteHandler)
  .openapi(getApiMemosDashLinkMetadataRoute, getApiMemosDashLinkMetadataRouteHandler)
  .openapi(
    postApiMemosDashLinkMetadataBatchGetRoute,
    postApiMemosDashLinkMetadataBatchGetRouteHandler,
  )
  .openapi(getApiMemosMemoRoute, getApiMemosMemoRouteHandler)
  .openapi(deleteApiMemosMemoRoute, deleteApiMemosMemoRouteHandler)
  .openapi(patchApiMemosMemoRoute, patchApiMemosMemoRouteHandler)
  .openapi(getApiMemosMemoAttachmentsRoute, getApiMemosMemoAttachmentsRouteHandler)
  .openapi(patchApiMemosMemoAttachmentsRoute, patchApiMemosMemoAttachmentsRouteHandler)
  .openapi(getApiMemosMemoReactionsRoute, getApiMemosMemoReactionsRouteHandler)
  .openapi(postApiMemosMemoReactionsRoute, postApiMemosMemoReactionsRouteHandler)
  .openapi(
    deleteApiMemosMemoReactionsReactionRoute,
    deleteApiMemosMemoReactionsReactionRouteHandler,
  )
  .openapi(getApiMemosMemoRelationsRoute, getApiMemosMemoRelationsRouteHandler)
  .openapi(patchApiMemosMemoRelationsRoute, patchApiMemosMemoRelationsRouteHandler)
  .openapi(getApiMemosMemoSharesRoute, getApiMemosMemoSharesRouteHandler)
  .openapi(postApiMemosMemoSharesRoute, postApiMemosMemoSharesRouteHandler)
  .openapi(deleteApiMemosMemoSharesShareRoute, deleteApiMemosMemoSharesShareRouteHandler)
  .openapi(getApiSharesShareTokenMemoRoute, getApiSharesShareTokenMemoRouteHandler)
  .openapi(getApiSpacesRoute, getApiSpacesRouteHandler)
  .openapi(postApiSpacesRoute, postApiSpacesRouteHandler)
  .openapi(getApiSpacesSpaceRoute, getApiSpacesSpaceRouteHandler)
  .openapi(deleteApiSpacesSpaceRoute, deleteApiSpacesSpaceRouteHandler)
  .openapi(patchApiSpacesSpaceRoute, patchApiSpacesSpaceRouteHandler)
  .openapi(getApiSpacesSpaceInvitationsRoute, getApiSpacesSpaceInvitationsRouteHandler)
  .openapi(postApiSpacesSpaceInvitationsRoute, postApiSpacesSpaceInvitationsRouteHandler)
  .openapi(
    getApiSpacesSpaceInvitationsInvitationRoute,
    getApiSpacesSpaceInvitationsInvitationRouteHandler,
  )
  .openapi(
    deleteApiSpacesSpaceInvitationsInvitationRoute,
    deleteApiSpacesSpaceInvitationsInvitationRouteHandler,
  )
  .openapi(
    postApiSpacesSpaceInvitationsInvitationAcceptRoute,
    postApiSpacesSpaceInvitationsInvitationAcceptRouteHandler,
  )
  .openapi(
    postApiSpacesSpaceInvitationsInvitationDeclineRoute,
    postApiSpacesSpaceInvitationsInvitationDeclineRouteHandler,
  )
  .openapi(getApiSpacesSpaceMembersRoute, getApiSpacesSpaceMembersRouteHandler)
  .openapi(getApiSpacesSpaceMembersMemberRoute, getApiSpacesSpaceMembersMemberRouteHandler)
  .openapi(deleteApiSpacesSpaceMembersMemberRoute, deleteApiSpacesSpaceMembersMemberRouteHandler)
  .openapi(patchApiSpacesSpaceMembersMemberRoute, patchApiSpacesSpaceMembersMemberRouteHandler)
  .openapi(getApiUsersRoute, getApiUsersRouteHandler)
  .openapi(postApiUsersRoute, postApiUsersRouteHandler)
  .openapi(getApiUsersUserRoute, getApiUsersUserRouteHandler)
  .openapi(deleteApiUsersUserRoute, deleteApiUsersUserRouteHandler)
  .openapi(patchApiUsersUserRoute, patchApiUsersUserRouteHandler)
  .openapi(getApiUsersUserLinkedIdentitiesRoute, getApiUsersUserLinkedIdentitiesRouteHandler)
  .openapi(postApiUsersUserLinkedIdentitiesRoute, postApiUsersUserLinkedIdentitiesRouteHandler)
  .openapi(
    getApiUsersUserLinkedIdentitiesLinkedIdentityRoute,
    getApiUsersUserLinkedIdentitiesLinkedIdentityRouteHandler,
  )
  .openapi(
    deleteApiUsersUserLinkedIdentitiesLinkedIdentityRoute,
    deleteApiUsersUserLinkedIdentitiesLinkedIdentityRouteHandler,
  )
  .openapi(getApiUsersUserNotificationsRoute, getApiUsersUserNotificationsRouteHandler)
  .openapi(
    deleteApiUsersUserNotificationsNotificationRoute,
    deleteApiUsersUserNotificationsNotificationRouteHandler,
  )
  .openapi(
    patchApiUsersUserNotificationsNotificationRoute,
    patchApiUsersUserNotificationsNotificationRouteHandler,
  )
  .openapi(
    getApiUsersUserPersonalAccessTokensRoute,
    getApiUsersUserPersonalAccessTokensRouteHandler,
  )
  .openapi(
    postApiUsersUserPersonalAccessTokensRoute,
    postApiUsersUserPersonalAccessTokensRouteHandler,
  )
  .openapi(
    deleteApiUsersUserPersonalAccessTokensPersonalAccessTokenRoute,
    deleteApiUsersUserPersonalAccessTokensPersonalAccessTokenRouteHandler,
  )
  .openapi(getApiUsersUserSettingsRoute, getApiUsersUserSettingsRouteHandler)
  .openapi(getApiUsersUserSettingsSettingRoute, getApiUsersUserSettingsSettingRouteHandler)
  .openapi(patchApiUsersUserSettingsSettingRoute, patchApiUsersUserSettingsSettingRouteHandler)
  .openapi(getApiUsersUserSpaceInvitationsRoute, getApiUsersUserSpaceInvitationsRouteHandler)
  .openapi(getApiUsersUserStatsRoute, getApiUsersUserStatsRouteHandler)
  .openapi(getApiUsersUserUsageRoute, getApiUsersUserUsageRouteHandler)
  .openapi(getApiUsersUserViewsRoute, getApiUsersUserViewsRouteHandler)
  .openapi(postApiUsersUserViewsRoute, postApiUsersUserViewsRouteHandler)
  .openapi(getApiUsersUserViewsViewRoute, getApiUsersUserViewsViewRouteHandler)
  .openapi(deleteApiUsersUserViewsViewRoute, deleteApiUsersUserViewsViewRouteHandler)
  .openapi(patchApiUsersUserViewsViewRoute, patchApiUsersUserViewsViewRouteHandler)
  .openapi(postApiUsersUserViewsReorderRoute, postApiUsersUserViewsReorderRouteHandler)
  .openapi(getApiUsersUserWebhooksRoute, getApiUsersUserWebhooksRouteHandler)
  .openapi(postApiUsersUserWebhooksRoute, postApiUsersUserWebhooksRouteHandler)
  .openapi(deleteApiUsersUserWebhooksWebhookRoute, deleteApiUsersUserWebhooksWebhookRouteHandler)
  .openapi(patchApiUsersUserWebhooksWebhookRoute, patchApiUsersUserWebhooksWebhookRouteHandler)
  .openapi(
    getApiUsersUserWebhooksWebhookGetSigningSecretRoute,
    getApiUsersUserWebhooksWebhookGetSigningSecretRouteHandler,
  )
  .openapi(getApiUsersUserGetStatsRoute, getApiUsersUserGetStatsRouteHandler)
  .openapi(postApiUsersUserImportMemosRoute, postApiUsersUserImportMemosRouteHandler)
  .openapi(postApiUsersBatchGetRoute, postApiUsersBatchGetRouteHandler)

export default app
