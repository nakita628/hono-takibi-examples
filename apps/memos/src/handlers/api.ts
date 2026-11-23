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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiAiTranscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAttachmentsAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAttachmentsAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAttachmentsAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAttachmentsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAttachmentsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthSigninRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthSignoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentityProvidersIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIdentityProvidersIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIdentityProvidersIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInstanceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInstanceSettingsNotificationTestEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInstanceSettingsBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInstanceStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInstanceInstanceStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiInstanceInstanceStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosDashLinkMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMemosDashLinkMetadataBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosMemoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMemosMemoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMemosMemoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosMemoAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMemosMemoAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosMemoReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMemosMemoReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMemosMemoReactionsReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosMemoRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMemosMemoRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMemosMemoSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMemosMemoSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMemosMemoSharesShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSharesShareTokenMemoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSpacesSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSpacesSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesSpaceInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesSpaceInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesSpaceInvitationsInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSpacesSpaceInvitationsInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesSpaceInvitationsInvitationAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesSpaceInvitationsInvitationDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesSpaceMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesSpaceMembersMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSpacesSpaceMembersMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSpacesSpaceMembersMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserLinkedIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserLinkedIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserLinkedIdentitiesLinkedIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserLinkedIdentitiesLinkedIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserNotificationsNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUserNotificationsNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserPersonalAccessTokensPersonalAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserSettingsSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUserSettingsSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserSpaceInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserViewsViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserViewsViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUserViewsViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserViewsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserWebhooksWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUserWebhooksWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserWebhooksWebhookGetSigningSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserGetStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserImportMemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
