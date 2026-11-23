import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV4GroupsGroupIdRoute,
  deleteV4GroupsGroupIdUsersRoute,
  deleteV4NodesCommentsCommentIdRoute,
  deleteV4NodesDeletedNodesRoute,
  deleteV4NodesFilesUploadsUploadIdRoute,
  deleteV4NodesNodeIdDeletedNodesRoute,
  deleteV4NodesNodeIdFavoriteRoute,
  deleteV4NodesNodeIdRoute,
  deleteV4NodesRoomsRoomIdGroupsRoute,
  deleteV4NodesRoomsRoomIdKeypairRoute,
  deleteV4NodesRoomsRoomIdUsersRoute,
  deleteV4NodesRoute,
  deleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyRoute,
  deleteV4ProvisioningCustomersCustomerIdRoute,
  deleteV4ProvisioningWebhooksWebhookIdRoute,
  deleteV4PublicSharesUploadsAccessKeyUploadIdRoute,
  deleteV4RolesRoleIdGroupsRoute,
  deleteV4RolesRoleIdUsersRoute,
  deleteV4SettingsKeypairRoute,
  deleteV4SettingsWebhooksWebhookIdRoute,
  deleteV4SharesDownloadsRoute,
  deleteV4SharesDownloadsShareIdRoute,
  deleteV4SharesUploadsRoute,
  deleteV4SharesUploadsShareIdRoute,
  deleteV4SystemConfigAuthAdsAdIdRoute,
  deleteV4SystemConfigAuthOpenidIdpsIdpIdRoute,
  deleteV4SystemConfigAuthRadiusRoute,
  deleteV4SystemConfigOauthClientsClientIdRoute,
  deleteV4SystemConfigStorageS3TagsIdRoute,
  deleteV4UploadsTokenRoute,
  deleteV4UserAccountAvatarRoute,
  deleteV4UserAccountKeypairRoute,
  deleteV4UserAccountMfaRoute,
  deleteV4UserAccountMfaTotpIdRoute,
  deleteV4UserOauthApprovalsClientIdRoute,
  deleteV4UserOauthAuthorizationsClientIdAuthorizationIdRoute,
  deleteV4UserOauthAuthorizationsClientIdRoute,
  deleteV4UserProfileAttributesKeyRoute,
  deleteV4UserSubscriptionsDownloadSharesShareIdRoute,
  deleteV4UserSubscriptionsNodesNodeIdRoute,
  deleteV4UserSubscriptionsUploadSharesShareIdRoute,
  deleteV4UsersUserIdRoute,
  deleteV4UsersUserIdUserAttributesKeyRoute,
  getV4AuthOpenidLoginRoute,
  getV4AuthPingRoute,
  getV4AuthResetPasswordTokenRoute,
  getV4ConfigInfoDefaultsRoute,
  getV4ConfigInfoGeneralRoute,
  getV4ConfigInfoInfrastructureRoute,
  getV4ConfigInfoNotificationsChannelsRoute,
  getV4ConfigInfoPoliciesAlgorithmsRoute,
  getV4ConfigInfoPoliciesClassificationsRoute,
  getV4ConfigInfoPoliciesGuestUsersRoute,
  getV4ConfigInfoPoliciesPasswordsRoute,
  getV4ConfigInfoProductPackagesCurrentRoute,
  getV4ConfigInfoProductPackagesRoute,
  getV4ConfigInfoS3TagsRoute,
  getV4ConfigSettingsRoute,
  getV4DownloadsAvatarUserIdUuidRoute,
  getV4DownloadsTokenRoute,
  getV4DownloadsZipTokenRoute,
  getV4EventlogAuditsNodeInfoRoute,
  getV4EventlogAuditsNodesRoute,
  getV4EventlogEventsRoute,
  getV4EventlogOperationsRoute,
  getV4GroupsGroupIdLastAdminRoomsRoute,
  getV4GroupsGroupIdRolesRoute,
  getV4GroupsGroupIdRoomsRoute,
  getV4GroupsGroupIdRoute,
  getV4GroupsGroupIdUsersRoute,
  getV4GroupsRoute,
  getV4InternalTenantSubscriptionPlanRoute,
  getV4NodesDeletedNodesDeletedNodeIdRoute,
  getV4NodesFilesFileIdDataRoomFileKeyRoute,
  getV4NodesFilesFileIdDataSpaceFileKeyRoute,
  getV4NodesFilesFileIdUserFileKeyRoute,
  getV4NodesFilesUploadsUploadIdRoute,
  getV4NodesFilesVersionsReferenceIdRoute,
  getV4NodesMissingFileKeysRoute,
  getV4NodesNodeIdCommentsRoute,
  getV4NodesNodeIdDeletedNodesRoute,
  getV4NodesNodeIdDeletedNodesVersionsRoute,
  getV4NodesNodeIdParentsRoute,
  getV4NodesNodeIdRoute,
  getV4NodesRoomsPendingRoute,
  getV4NodesRoomsRoomIdEventsRoute,
  getV4NodesRoomsRoomIdGroupsRoute,
  getV4NodesRoomsRoomIdKeypairRoute,
  getV4NodesRoomsRoomIdKeypairsRoute,
  getV4NodesRoomsRoomIdPoliciesRoute,
  getV4NodesRoomsRoomIdS3TagsRoute,
  getV4NodesRoomsRoomIdUsersRoute,
  getV4NodesRoomsRoomIdWebhooksRoute,
  getV4NodesRoute,
  getV4NodesSearchRoute,
  getV4ProvisioningCustomersCustomerIdCustomerAttributesRoute,
  getV4ProvisioningCustomersCustomerIdRoute,
  getV4ProvisioningCustomersCustomerIdUsersRoute,
  getV4ProvisioningCustomersRoute,
  getV4ProvisioningWebhooksEventTypesRoute,
  getV4ProvisioningWebhooksRoute,
  getV4ProvisioningWebhooksWebhookIdRoute,
  getV4PublicSharesDownloadsAccessKeyRoute,
  getV4PublicSharesDownloadsAccessKeyTokenRoute,
  getV4PublicSharesUploadsAccessKeyRoute,
  getV4PublicSharesUploadsAccessKeyUploadIdRoute,
  getV4PublicSoftwareThirdPartyDependenciesRoute,
  getV4PublicSoftwareVersionRoute,
  getV4PublicSystemInfoAuthAdRoute,
  getV4PublicSystemInfoAuthOpenidRoute,
  getV4PublicSystemInfoRoute,
  getV4PublicTimeRoute,
  getV4ResourcesUserNotificationsScopesRoute,
  getV4ResourcesUsersUserIdAvatarUuidRoute,
  getV4RolesRoleIdGroupsRoute,
  getV4RolesRoleIdUsersRoute,
  getV4RolesRoute,
  getV4SettingsKeypairRoute,
  getV4SettingsKeypairsRoute,
  getV4SettingsNotificationsChannelsRoute,
  getV4SettingsRoute,
  getV4SettingsWebhooksEventTypesRoute,
  getV4SettingsWebhooksRoute,
  getV4SettingsWebhooksWebhookIdRoute,
  getV4SharesDownloadsRoute,
  getV4SharesDownloadsShareIdQrRoute,
  getV4SharesDownloadsShareIdRoute,
  getV4SharesUploadsRoute,
  getV4SharesUploadsShareIdQrRoute,
  getV4SharesUploadsShareIdRoute,
  getV4SystemConfigAuthAdsAdIdRoute,
  getV4SystemConfigAuthAdsRoute,
  getV4SystemConfigAuthOpenidIdpsIdpIdRoute,
  getV4SystemConfigAuthOpenidIdpsRoute,
  getV4SystemConfigAuthRadiusRoute,
  getV4SystemConfigOauthClientsClientIdRoute,
  getV4SystemConfigOauthClientsRoute,
  getV4SystemConfigPoliciesClassificationsRoute,
  getV4SystemConfigPoliciesGuestUsersRoute,
  getV4SystemConfigPoliciesMfaRoute,
  getV4SystemConfigPoliciesPasswordsPasswordTypeRoute,
  getV4SystemConfigPoliciesPasswordsRoute,
  getV4SystemConfigSettingsAuthRoute,
  getV4SystemConfigSettingsDefaultsRoute,
  getV4SystemConfigSettingsEventlogRoute,
  getV4SystemConfigSettingsGeneralRoute,
  getV4SystemConfigSettingsInfrastructureRoute,
  getV4SystemConfigSettingsSyslogRoute,
  getV4SystemConfigStorageS3Route,
  getV4SystemConfigStorageS3TagsIdRoute,
  getV4SystemConfigStorageS3TagsRoute,
  getV4UserAccountAvatarRoute,
  getV4UserAccountCustomerKeypairRoute,
  getV4UserAccountCustomerRoute,
  getV4UserAccountKeypairRoute,
  getV4UserAccountKeypairsRoute,
  getV4UserAccountMfaRoute,
  getV4UserAccountMfaTotpRoute,
  getV4UserAccountRoute,
  getV4UserNotificationsConfigRoute,
  getV4UserOauthApprovalsRoute,
  getV4UserOauthAuthorizationsRoute,
  getV4UserPingRoute,
  getV4UserProfileAttributesRoute,
  getV4UsersRoute,
  getV4UserSubscriptionsDownloadSharesRoute,
  getV4UserSubscriptionsNodesRoute,
  getV4UserSubscriptionsUploadSharesRoute,
  getV4UsersUserIdGroupsRoute,
  getV4UsersUserIdLastAdminRoomsRoute,
  getV4UsersUserIdRolesRoute,
  getV4UsersUserIdRoomsRoute,
  getV4UsersUserIdRoute,
  getV4UsersUserIdUserAttributesRoute,
  headV4DownloadsTokenRoute,
  headV4PublicSharesDownloadsAccessKeyRoute,
  headV4PublicSharesDownloadsAccessKeyTokenRoute,
  postV4AuthLoginRoute,
  postV4AuthOpenidLoginRoute,
  postV4AuthRecoverUsernameRoute,
  postV4AuthResetPasswordRoute,
  postV4GroupsGroupIdUsersRoute,
  postV4GroupsRoute,
  postV4NodesDeletedNodesActionsRestoreRoute,
  postV4NodesFilesFileIdDownloadsRoute,
  postV4NodesFilesKeysRoute,
  postV4NodesFilesUploadsRoute,
  postV4NodesFilesUploadsUploadIdRoute,
  postV4NodesFilesUploadsUploadIdS3UrlsRoute,
  postV4NodesFoldersRoute,
  postV4NodesNodeIdCommentsRoute,
  postV4NodesNodeIdCopyToRoute,
  postV4NodesNodeIdFavoriteRoute,
  postV4NodesNodeIdMoveToRoute,
  postV4NodesRoomsRoomIdKeypairRoute,
  postV4NodesRoomsRoomIdKeypairsRoute,
  postV4NodesRoomsRoomIdS3TagsRoute,
  postV4NodesRoomsRoute,
  postV4NodesZipDownloadRoute,
  postV4NodesZipRoute,
  postV4ProvisioningCustomersCustomerIdCustomerAttributesRoute,
  postV4ProvisioningCustomersRoute,
  postV4ProvisioningWebhooksRoute,
  postV4ProvisioningWebhooksWebhookIdResetLifetimeRoute,
  postV4PublicSharesDownloadsAccessKeyRoute,
  postV4PublicSharesUploadsAccessKeyRoute,
  postV4PublicSharesUploadsAccessKeyUploadIdRoute,
  postV4PublicSharesUploadsAccessKeyUploadIdS3UrlsRoute,
  postV4RolesRoleIdGroupsRoute,
  postV4RolesRoleIdUsersRoute,
  postV4SettingsKeypairRoute,
  postV4SettingsKeypairsRoute,
  postV4SettingsWebhooksRoute,
  postV4SettingsWebhooksWebhookIdResetLifetimeRoute,
  postV4SharesDownloadsRoute,
  postV4SharesDownloadsShareIdEmailRoute,
  postV4SharesUploadsRoute,
  postV4SharesUploadsShareIdEmailRoute,
  postV4SystemConfigActionsTestAdRoute,
  postV4SystemConfigActionsTestRadiusRoute,
  postV4SystemConfigAuthAdsRoute,
  postV4SystemConfigAuthOpenidIdpsRoute,
  postV4SystemConfigAuthRadiusRoute,
  postV4SystemConfigOauthClientsRoute,
  postV4SystemConfigPoliciesPasswordsEnforceChangeRoute,
  postV4SystemConfigStorageS3Route,
  postV4SystemConfigStorageS3TagsRoute,
  postV4UploadsTokenRoute,
  postV4UserAccountAvatarRoute,
  postV4UserAccountKeypairRoute,
  postV4UserAccountKeypairsRoute,
  postV4UserAccountMfaTotpRoute,
  postV4UserLogoutRoute,
  postV4UserProfileAttributesRoute,
  postV4UsersRoute,
  postV4UserSubscriptionsDownloadSharesShareIdRoute,
  postV4UserSubscriptionsNodesNodeIdRoute,
  postV4UserSubscriptionsUploadSharesShareIdRoute,
  postV4UsersUserIdMfaEmergencyCodeRoute,
  postV4UsersUserIdUserAttributesRoute,
  putV4AuthResetPasswordTokenRoute,
  putV4ConfigSettingsRoute,
  putV4GroupsGroupIdRoute,
  putV4InternalTenantSubscriptionPlanRoute,
  putV4NodesCommentsCommentIdRoute,
  putV4NodesFavoritesRoute,
  putV4NodesFilesFileIdRoute,
  putV4NodesFilesRoute,
  putV4NodesFilesUploadsUploadIdRoute,
  putV4NodesFilesUploadsUploadIdS3Route,
  putV4NodesFoldersFolderIdRoute,
  putV4NodesRoomsPendingRoute,
  putV4NodesRoomsRoomIdConfigRoute,
  putV4NodesRoomsRoomIdEncryptRoute,
  putV4NodesRoomsRoomIdGroupsRoute,
  putV4NodesRoomsRoomIdGuestUsersRoute,
  putV4NodesRoomsRoomIdPoliciesRoute,
  putV4NodesRoomsRoomIdRoute,
  putV4NodesRoomsRoomIdUsersRoute,
  putV4NodesRoomsRoomIdWebhooksRoute,
  putV4ProvisioningCustomersCustomerIdCustomerAttributesRoute,
  putV4ProvisioningCustomersCustomerIdRoute,
  putV4ProvisioningWebhooksWebhookIdRoute,
  putV4PublicSharesUploadsAccessKeyUploadIdRoute,
  putV4PublicSharesUploadsAccessKeyUploadIdS3Route,
  putV4SettingsNotificationsChannelsRoute,
  putV4SettingsRoute,
  putV4SettingsWebhooksWebhookIdRoute,
  putV4SharesDownloadsRoute,
  putV4SharesDownloadsShareIdRoute,
  putV4SharesUploadsRoute,
  putV4SharesUploadsShareIdRoute,
  putV4SystemConfigAuthAdsAdIdRoute,
  putV4SystemConfigAuthOpenidIdpsIdpIdRoute,
  putV4SystemConfigAuthRadiusRoute,
  putV4SystemConfigOauthClientsClientIdRoute,
  putV4SystemConfigPoliciesClassificationsRoute,
  putV4SystemConfigPoliciesGuestUsersRoute,
  putV4SystemConfigPoliciesMfaRoute,
  putV4SystemConfigPoliciesPasswordsRoute,
  putV4SystemConfigSettingsAuthRoute,
  putV4SystemConfigSettingsDefaultsRoute,
  putV4SystemConfigSettingsEventlogRoute,
  putV4SystemConfigSettingsGeneralRoute,
  putV4SystemConfigSettingsSyslogRoute,
  putV4SystemConfigStorageS3Route,
  putV4UploadsTokenRoute,
  putV4UserAccountCustomerRoute,
  putV4UserAccountPasswordRoute,
  putV4UserAccountRoute,
  putV4UserNotificationsConfigIdRoute,
  putV4UserProfileAttributesRoute,
  putV4UserSubscriptionsDownloadSharesRoute,
  putV4UserSubscriptionsNodesRoute,
  putV4UserSubscriptionsUploadSharesRoute,
  putV4UsersUserIdRoute,
  putV4UsersUserIdUserAttributesRoute,
} from '../routes'

export const postV4AuthLoginRouteHandler: RouteHandler<typeof postV4AuthLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4AuthOpenidLoginRouteHandler: RouteHandler<
  typeof getV4AuthOpenidLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4AuthOpenidLoginRouteHandler: RouteHandler<
  typeof postV4AuthOpenidLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4AuthPingRouteHandler: RouteHandler<typeof getV4AuthPingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4AuthRecoverUsernameRouteHandler: RouteHandler<
  typeof postV4AuthRecoverUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4AuthResetPasswordRouteHandler: RouteHandler<
  typeof postV4AuthResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4AuthResetPasswordTokenRouteHandler: RouteHandler<
  typeof getV4AuthResetPasswordTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4AuthResetPasswordTokenRouteHandler: RouteHandler<
  typeof putV4AuthResetPasswordTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoDefaultsRouteHandler: RouteHandler<
  typeof getV4ConfigInfoDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoGeneralRouteHandler: RouteHandler<
  typeof getV4ConfigInfoGeneralRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoInfrastructureRouteHandler: RouteHandler<
  typeof getV4ConfigInfoInfrastructureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoNotificationsChannelsRouteHandler: RouteHandler<
  typeof getV4ConfigInfoNotificationsChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoPoliciesAlgorithmsRouteHandler: RouteHandler<
  typeof getV4ConfigInfoPoliciesAlgorithmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoPoliciesClassificationsRouteHandler: RouteHandler<
  typeof getV4ConfigInfoPoliciesClassificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoPoliciesGuestUsersRouteHandler: RouteHandler<
  typeof getV4ConfigInfoPoliciesGuestUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoPoliciesPasswordsRouteHandler: RouteHandler<
  typeof getV4ConfigInfoPoliciesPasswordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoProductPackagesRouteHandler: RouteHandler<
  typeof getV4ConfigInfoProductPackagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoProductPackagesCurrentRouteHandler: RouteHandler<
  typeof getV4ConfigInfoProductPackagesCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigInfoS3TagsRouteHandler: RouteHandler<
  typeof getV4ConfigInfoS3TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ConfigSettingsRouteHandler: RouteHandler<
  typeof getV4ConfigSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4ConfigSettingsRouteHandler: RouteHandler<
  typeof putV4ConfigSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4DownloadsAvatarUserIdUuidRouteHandler: RouteHandler<
  typeof getV4DownloadsAvatarUserIdUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4DownloadsZipTokenRouteHandler: RouteHandler<
  typeof getV4DownloadsZipTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4DownloadsTokenRouteHandler: RouteHandler<
  typeof getV4DownloadsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headV4DownloadsTokenRouteHandler: RouteHandler<
  typeof headV4DownloadsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4EventlogAuditsNodeInfoRouteHandler: RouteHandler<
  typeof getV4EventlogAuditsNodeInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4EventlogAuditsNodesRouteHandler: RouteHandler<
  typeof getV4EventlogAuditsNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4EventlogEventsRouteHandler: RouteHandler<
  typeof getV4EventlogEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4EventlogOperationsRouteHandler: RouteHandler<
  typeof getV4EventlogOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4GroupsRouteHandler: RouteHandler<typeof getV4GroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4GroupsRouteHandler: RouteHandler<typeof postV4GroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4GroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteV4GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4GroupsGroupIdRouteHandler: RouteHandler<typeof getV4GroupsGroupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV4GroupsGroupIdRouteHandler: RouteHandler<typeof putV4GroupsGroupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV4GroupsGroupIdLastAdminRoomsRouteHandler: RouteHandler<
  typeof getV4GroupsGroupIdLastAdminRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4GroupsGroupIdRolesRouteHandler: RouteHandler<
  typeof getV4GroupsGroupIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4GroupsGroupIdRoomsRouteHandler: RouteHandler<
  typeof getV4GroupsGroupIdRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4GroupsGroupIdUsersRouteHandler: RouteHandler<
  typeof deleteV4GroupsGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4GroupsGroupIdUsersRouteHandler: RouteHandler<
  typeof getV4GroupsGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4GroupsGroupIdUsersRouteHandler: RouteHandler<
  typeof postV4GroupsGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4InternalTenantSubscriptionPlanRouteHandler: RouteHandler<
  typeof getV4InternalTenantSubscriptionPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4InternalTenantSubscriptionPlanRouteHandler: RouteHandler<
  typeof putV4InternalTenantSubscriptionPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4NodesRouteHandler: RouteHandler<typeof deleteV4NodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesRouteHandler: RouteHandler<typeof getV4NodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4NodesCommentsCommentIdRouteHandler: RouteHandler<
  typeof deleteV4NodesCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesCommentsCommentIdRouteHandler: RouteHandler<
  typeof putV4NodesCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4NodesDeletedNodesRouteHandler: RouteHandler<
  typeof deleteV4NodesDeletedNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesDeletedNodesActionsRestoreRouteHandler: RouteHandler<
  typeof postV4NodesDeletedNodesActionsRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesDeletedNodesDeletedNodeIdRouteHandler: RouteHandler<
  typeof getV4NodesDeletedNodesDeletedNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesFavoritesRouteHandler: RouteHandler<
  typeof putV4NodesFavoritesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesFilesRouteHandler: RouteHandler<typeof putV4NodesFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesFilesKeysRouteHandler: RouteHandler<
  typeof postV4NodesFilesKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesFilesUploadsRouteHandler: RouteHandler<
  typeof postV4NodesFilesUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4NodesFilesUploadsUploadIdRouteHandler: RouteHandler<
  typeof deleteV4NodesFilesUploadsUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesFilesUploadsUploadIdRouteHandler: RouteHandler<
  typeof getV4NodesFilesUploadsUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesFilesUploadsUploadIdRouteHandler: RouteHandler<
  typeof postV4NodesFilesUploadsUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesFilesUploadsUploadIdRouteHandler: RouteHandler<
  typeof putV4NodesFilesUploadsUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesFilesUploadsUploadIdS3RouteHandler: RouteHandler<
  typeof putV4NodesFilesUploadsUploadIdS3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesFilesUploadsUploadIdS3UrlsRouteHandler: RouteHandler<
  typeof postV4NodesFilesUploadsUploadIdS3UrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesFilesVersionsReferenceIdRouteHandler: RouteHandler<
  typeof getV4NodesFilesVersionsReferenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesFilesFileIdRouteHandler: RouteHandler<
  typeof putV4NodesFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesFilesFileIdDataRoomFileKeyRouteHandler: RouteHandler<
  typeof getV4NodesFilesFileIdDataRoomFileKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesFilesFileIdDataSpaceFileKeyRouteHandler: RouteHandler<
  typeof getV4NodesFilesFileIdDataSpaceFileKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesFilesFileIdDownloadsRouteHandler: RouteHandler<
  typeof postV4NodesFilesFileIdDownloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesFilesFileIdUserFileKeyRouteHandler: RouteHandler<
  typeof getV4NodesFilesFileIdUserFileKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesFoldersRouteHandler: RouteHandler<typeof postV4NodesFoldersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV4NodesFoldersFolderIdRouteHandler: RouteHandler<
  typeof putV4NodesFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesMissingFileKeysRouteHandler: RouteHandler<
  typeof getV4NodesMissingFileKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesRoomsRouteHandler: RouteHandler<typeof postV4NodesRoomsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV4NodesRoomsPendingRouteHandler: RouteHandler<
  typeof getV4NodesRoomsPendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesRoomsPendingRouteHandler: RouteHandler<
  typeof putV4NodesRoomsPendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesRoomsRoomIdRouteHandler: RouteHandler<
  typeof putV4NodesRoomsRoomIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesRoomsRoomIdConfigRouteHandler: RouteHandler<
  typeof putV4NodesRoomsRoomIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesRoomsRoomIdEncryptRouteHandler: RouteHandler<
  typeof putV4NodesRoomsRoomIdEncryptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesRoomsRoomIdEventsRouteHandler: RouteHandler<
  typeof getV4NodesRoomsRoomIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4NodesRoomsRoomIdGroupsRouteHandler: RouteHandler<
  typeof deleteV4NodesRoomsRoomIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesRoomsRoomIdGroupsRouteHandler: RouteHandler<
  typeof getV4NodesRoomsRoomIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesRoomsRoomIdGroupsRouteHandler: RouteHandler<
  typeof putV4NodesRoomsRoomIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesRoomsRoomIdGuestUsersRouteHandler: RouteHandler<
  typeof putV4NodesRoomsRoomIdGuestUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4NodesRoomsRoomIdKeypairRouteHandler: RouteHandler<
  typeof deleteV4NodesRoomsRoomIdKeypairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesRoomsRoomIdKeypairRouteHandler: RouteHandler<
  typeof getV4NodesRoomsRoomIdKeypairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesRoomsRoomIdKeypairRouteHandler: RouteHandler<
  typeof postV4NodesRoomsRoomIdKeypairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesRoomsRoomIdKeypairsRouteHandler: RouteHandler<
  typeof getV4NodesRoomsRoomIdKeypairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesRoomsRoomIdKeypairsRouteHandler: RouteHandler<
  typeof postV4NodesRoomsRoomIdKeypairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesRoomsRoomIdPoliciesRouteHandler: RouteHandler<
  typeof getV4NodesRoomsRoomIdPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesRoomsRoomIdPoliciesRouteHandler: RouteHandler<
  typeof putV4NodesRoomsRoomIdPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesRoomsRoomIdS3TagsRouteHandler: RouteHandler<
  typeof getV4NodesRoomsRoomIdS3TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesRoomsRoomIdS3TagsRouteHandler: RouteHandler<
  typeof postV4NodesRoomsRoomIdS3TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4NodesRoomsRoomIdUsersRouteHandler: RouteHandler<
  typeof deleteV4NodesRoomsRoomIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesRoomsRoomIdUsersRouteHandler: RouteHandler<
  typeof getV4NodesRoomsRoomIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesRoomsRoomIdUsersRouteHandler: RouteHandler<
  typeof putV4NodesRoomsRoomIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesRoomsRoomIdWebhooksRouteHandler: RouteHandler<
  typeof getV4NodesRoomsRoomIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4NodesRoomsRoomIdWebhooksRouteHandler: RouteHandler<
  typeof putV4NodesRoomsRoomIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesSearchRouteHandler: RouteHandler<typeof getV4NodesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV4NodesZipRouteHandler: RouteHandler<typeof postV4NodesZipRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesZipDownloadRouteHandler: RouteHandler<
  typeof postV4NodesZipDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4NodesNodeIdRouteHandler: RouteHandler<
  typeof deleteV4NodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesNodeIdRouteHandler: RouteHandler<typeof getV4NodesNodeIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV4NodesNodeIdCommentsRouteHandler: RouteHandler<
  typeof getV4NodesNodeIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesNodeIdCommentsRouteHandler: RouteHandler<
  typeof postV4NodesNodeIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesNodeIdCopyToRouteHandler: RouteHandler<
  typeof postV4NodesNodeIdCopyToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4NodesNodeIdDeletedNodesRouteHandler: RouteHandler<
  typeof deleteV4NodesNodeIdDeletedNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesNodeIdDeletedNodesRouteHandler: RouteHandler<
  typeof getV4NodesNodeIdDeletedNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesNodeIdDeletedNodesVersionsRouteHandler: RouteHandler<
  typeof getV4NodesNodeIdDeletedNodesVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4NodesNodeIdFavoriteRouteHandler: RouteHandler<
  typeof deleteV4NodesNodeIdFavoriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesNodeIdFavoriteRouteHandler: RouteHandler<
  typeof postV4NodesNodeIdFavoriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4NodesNodeIdMoveToRouteHandler: RouteHandler<
  typeof postV4NodesNodeIdMoveToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4NodesNodeIdParentsRouteHandler: RouteHandler<
  typeof getV4NodesNodeIdParentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ProvisioningCustomersRouteHandler: RouteHandler<
  typeof getV4ProvisioningCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4ProvisioningCustomersRouteHandler: RouteHandler<
  typeof postV4ProvisioningCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4ProvisioningCustomersCustomerIdRouteHandler: RouteHandler<
  typeof deleteV4ProvisioningCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ProvisioningCustomersCustomerIdRouteHandler: RouteHandler<
  typeof getV4ProvisioningCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4ProvisioningCustomersCustomerIdRouteHandler: RouteHandler<
  typeof putV4ProvisioningCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ProvisioningCustomersCustomerIdCustomerAttributesRouteHandler: RouteHandler<
  typeof getV4ProvisioningCustomersCustomerIdCustomerAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4ProvisioningCustomersCustomerIdCustomerAttributesRouteHandler: RouteHandler<
  typeof postV4ProvisioningCustomersCustomerIdCustomerAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4ProvisioningCustomersCustomerIdCustomerAttributesRouteHandler: RouteHandler<
  typeof putV4ProvisioningCustomersCustomerIdCustomerAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyRouteHandler: RouteHandler<
  typeof deleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ProvisioningCustomersCustomerIdUsersRouteHandler: RouteHandler<
  typeof getV4ProvisioningCustomersCustomerIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ProvisioningWebhooksRouteHandler: RouteHandler<
  typeof getV4ProvisioningWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4ProvisioningWebhooksRouteHandler: RouteHandler<
  typeof postV4ProvisioningWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ProvisioningWebhooksEventTypesRouteHandler: RouteHandler<
  typeof getV4ProvisioningWebhooksEventTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4ProvisioningWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteV4ProvisioningWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ProvisioningWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getV4ProvisioningWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4ProvisioningWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof putV4ProvisioningWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4ProvisioningWebhooksWebhookIdResetLifetimeRouteHandler: RouteHandler<
  typeof postV4ProvisioningWebhooksWebhookIdResetLifetimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4PublicSharesDownloadsAccessKeyRouteHandler: RouteHandler<
  typeof getV4PublicSharesDownloadsAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headV4PublicSharesDownloadsAccessKeyRouteHandler: RouteHandler<
  typeof headV4PublicSharesDownloadsAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4PublicSharesDownloadsAccessKeyRouteHandler: RouteHandler<
  typeof postV4PublicSharesDownloadsAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4PublicSharesDownloadsAccessKeyTokenRouteHandler: RouteHandler<
  typeof getV4PublicSharesDownloadsAccessKeyTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headV4PublicSharesDownloadsAccessKeyTokenRouteHandler: RouteHandler<
  typeof headV4PublicSharesDownloadsAccessKeyTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4PublicSharesUploadsAccessKeyRouteHandler: RouteHandler<
  typeof getV4PublicSharesUploadsAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4PublicSharesUploadsAccessKeyRouteHandler: RouteHandler<
  typeof postV4PublicSharesUploadsAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4PublicSharesUploadsAccessKeyUploadIdRouteHandler: RouteHandler<
  typeof deleteV4PublicSharesUploadsAccessKeyUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4PublicSharesUploadsAccessKeyUploadIdRouteHandler: RouteHandler<
  typeof getV4PublicSharesUploadsAccessKeyUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4PublicSharesUploadsAccessKeyUploadIdRouteHandler: RouteHandler<
  typeof postV4PublicSharesUploadsAccessKeyUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4PublicSharesUploadsAccessKeyUploadIdRouteHandler: RouteHandler<
  typeof putV4PublicSharesUploadsAccessKeyUploadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4PublicSharesUploadsAccessKeyUploadIdS3RouteHandler: RouteHandler<
  typeof putV4PublicSharesUploadsAccessKeyUploadIdS3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4PublicSharesUploadsAccessKeyUploadIdS3UrlsRouteHandler: RouteHandler<
  typeof postV4PublicSharesUploadsAccessKeyUploadIdS3UrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4PublicSoftwareThirdPartyDependenciesRouteHandler: RouteHandler<
  typeof getV4PublicSoftwareThirdPartyDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4PublicSoftwareVersionRouteHandler: RouteHandler<
  typeof getV4PublicSoftwareVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4PublicSystemInfoRouteHandler: RouteHandler<
  typeof getV4PublicSystemInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4PublicSystemInfoAuthAdRouteHandler: RouteHandler<
  typeof getV4PublicSystemInfoAuthAdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4PublicSystemInfoAuthOpenidRouteHandler: RouteHandler<
  typeof getV4PublicSystemInfoAuthOpenidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4PublicTimeRouteHandler: RouteHandler<typeof getV4PublicTimeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ResourcesUserNotificationsScopesRouteHandler: RouteHandler<
  typeof getV4ResourcesUserNotificationsScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4ResourcesUsersUserIdAvatarUuidRouteHandler: RouteHandler<
  typeof getV4ResourcesUsersUserIdAvatarUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4RolesRouteHandler: RouteHandler<typeof getV4RolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4RolesRoleIdGroupsRouteHandler: RouteHandler<
  typeof deleteV4RolesRoleIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4RolesRoleIdGroupsRouteHandler: RouteHandler<
  typeof getV4RolesRoleIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4RolesRoleIdGroupsRouteHandler: RouteHandler<
  typeof postV4RolesRoleIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4RolesRoleIdUsersRouteHandler: RouteHandler<
  typeof deleteV4RolesRoleIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4RolesRoleIdUsersRouteHandler: RouteHandler<
  typeof getV4RolesRoleIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4RolesRoleIdUsersRouteHandler: RouteHandler<
  typeof postV4RolesRoleIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SettingsRouteHandler: RouteHandler<typeof getV4SettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SettingsRouteHandler: RouteHandler<typeof putV4SettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4SettingsKeypairRouteHandler: RouteHandler<
  typeof deleteV4SettingsKeypairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SettingsKeypairRouteHandler: RouteHandler<
  typeof getV4SettingsKeypairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SettingsKeypairRouteHandler: RouteHandler<
  typeof postV4SettingsKeypairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SettingsKeypairsRouteHandler: RouteHandler<
  typeof getV4SettingsKeypairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SettingsKeypairsRouteHandler: RouteHandler<
  typeof postV4SettingsKeypairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SettingsNotificationsChannelsRouteHandler: RouteHandler<
  typeof getV4SettingsNotificationsChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SettingsNotificationsChannelsRouteHandler: RouteHandler<
  typeof putV4SettingsNotificationsChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SettingsWebhooksRouteHandler: RouteHandler<
  typeof getV4SettingsWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SettingsWebhooksRouteHandler: RouteHandler<
  typeof postV4SettingsWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SettingsWebhooksEventTypesRouteHandler: RouteHandler<
  typeof getV4SettingsWebhooksEventTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4SettingsWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteV4SettingsWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SettingsWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getV4SettingsWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SettingsWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof putV4SettingsWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SettingsWebhooksWebhookIdResetLifetimeRouteHandler: RouteHandler<
  typeof postV4SettingsWebhooksWebhookIdResetLifetimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4SharesDownloadsRouteHandler: RouteHandler<
  typeof deleteV4SharesDownloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SharesDownloadsRouteHandler: RouteHandler<
  typeof getV4SharesDownloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SharesDownloadsRouteHandler: RouteHandler<
  typeof postV4SharesDownloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SharesDownloadsRouteHandler: RouteHandler<
  typeof putV4SharesDownloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4SharesDownloadsShareIdRouteHandler: RouteHandler<
  typeof deleteV4SharesDownloadsShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SharesDownloadsShareIdRouteHandler: RouteHandler<
  typeof getV4SharesDownloadsShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SharesDownloadsShareIdRouteHandler: RouteHandler<
  typeof putV4SharesDownloadsShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SharesDownloadsShareIdEmailRouteHandler: RouteHandler<
  typeof postV4SharesDownloadsShareIdEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SharesDownloadsShareIdQrRouteHandler: RouteHandler<
  typeof getV4SharesDownloadsShareIdQrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4SharesUploadsRouteHandler: RouteHandler<
  typeof deleteV4SharesUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SharesUploadsRouteHandler: RouteHandler<typeof getV4SharesUploadsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV4SharesUploadsRouteHandler: RouteHandler<
  typeof postV4SharesUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SharesUploadsRouteHandler: RouteHandler<typeof putV4SharesUploadsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV4SharesUploadsShareIdRouteHandler: RouteHandler<
  typeof deleteV4SharesUploadsShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SharesUploadsShareIdRouteHandler: RouteHandler<
  typeof getV4SharesUploadsShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SharesUploadsShareIdRouteHandler: RouteHandler<
  typeof putV4SharesUploadsShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SharesUploadsShareIdEmailRouteHandler: RouteHandler<
  typeof postV4SharesUploadsShareIdEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SharesUploadsShareIdQrRouteHandler: RouteHandler<
  typeof getV4SharesUploadsShareIdQrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SystemConfigActionsTestAdRouteHandler: RouteHandler<
  typeof postV4SystemConfigActionsTestAdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SystemConfigActionsTestRadiusRouteHandler: RouteHandler<
  typeof postV4SystemConfigActionsTestRadiusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigAuthAdsRouteHandler: RouteHandler<
  typeof getV4SystemConfigAuthAdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SystemConfigAuthAdsRouteHandler: RouteHandler<
  typeof postV4SystemConfigAuthAdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4SystemConfigAuthAdsAdIdRouteHandler: RouteHandler<
  typeof deleteV4SystemConfigAuthAdsAdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigAuthAdsAdIdRouteHandler: RouteHandler<
  typeof getV4SystemConfigAuthAdsAdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigAuthAdsAdIdRouteHandler: RouteHandler<
  typeof putV4SystemConfigAuthAdsAdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigAuthOpenidIdpsRouteHandler: RouteHandler<
  typeof getV4SystemConfigAuthOpenidIdpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SystemConfigAuthOpenidIdpsRouteHandler: RouteHandler<
  typeof postV4SystemConfigAuthOpenidIdpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4SystemConfigAuthOpenidIdpsIdpIdRouteHandler: RouteHandler<
  typeof deleteV4SystemConfigAuthOpenidIdpsIdpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigAuthOpenidIdpsIdpIdRouteHandler: RouteHandler<
  typeof getV4SystemConfigAuthOpenidIdpsIdpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigAuthOpenidIdpsIdpIdRouteHandler: RouteHandler<
  typeof putV4SystemConfigAuthOpenidIdpsIdpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4SystemConfigAuthRadiusRouteHandler: RouteHandler<
  typeof deleteV4SystemConfigAuthRadiusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigAuthRadiusRouteHandler: RouteHandler<
  typeof getV4SystemConfigAuthRadiusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SystemConfigAuthRadiusRouteHandler: RouteHandler<
  typeof postV4SystemConfigAuthRadiusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigAuthRadiusRouteHandler: RouteHandler<
  typeof putV4SystemConfigAuthRadiusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigOauthClientsRouteHandler: RouteHandler<
  typeof getV4SystemConfigOauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SystemConfigOauthClientsRouteHandler: RouteHandler<
  typeof postV4SystemConfigOauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4SystemConfigOauthClientsClientIdRouteHandler: RouteHandler<
  typeof deleteV4SystemConfigOauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigOauthClientsClientIdRouteHandler: RouteHandler<
  typeof getV4SystemConfigOauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigOauthClientsClientIdRouteHandler: RouteHandler<
  typeof putV4SystemConfigOauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigPoliciesClassificationsRouteHandler: RouteHandler<
  typeof getV4SystemConfigPoliciesClassificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigPoliciesClassificationsRouteHandler: RouteHandler<
  typeof putV4SystemConfigPoliciesClassificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigPoliciesGuestUsersRouteHandler: RouteHandler<
  typeof getV4SystemConfigPoliciesGuestUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigPoliciesGuestUsersRouteHandler: RouteHandler<
  typeof putV4SystemConfigPoliciesGuestUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigPoliciesMfaRouteHandler: RouteHandler<
  typeof getV4SystemConfigPoliciesMfaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigPoliciesMfaRouteHandler: RouteHandler<
  typeof putV4SystemConfigPoliciesMfaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigPoliciesPasswordsRouteHandler: RouteHandler<
  typeof getV4SystemConfigPoliciesPasswordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigPoliciesPasswordsRouteHandler: RouteHandler<
  typeof putV4SystemConfigPoliciesPasswordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SystemConfigPoliciesPasswordsEnforceChangeRouteHandler: RouteHandler<
  typeof postV4SystemConfigPoliciesPasswordsEnforceChangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigPoliciesPasswordsPasswordTypeRouteHandler: RouteHandler<
  typeof getV4SystemConfigPoliciesPasswordsPasswordTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigSettingsAuthRouteHandler: RouteHandler<
  typeof getV4SystemConfigSettingsAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigSettingsAuthRouteHandler: RouteHandler<
  typeof putV4SystemConfigSettingsAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigSettingsDefaultsRouteHandler: RouteHandler<
  typeof getV4SystemConfigSettingsDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigSettingsDefaultsRouteHandler: RouteHandler<
  typeof putV4SystemConfigSettingsDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigSettingsEventlogRouteHandler: RouteHandler<
  typeof getV4SystemConfigSettingsEventlogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigSettingsEventlogRouteHandler: RouteHandler<
  typeof putV4SystemConfigSettingsEventlogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigSettingsGeneralRouteHandler: RouteHandler<
  typeof getV4SystemConfigSettingsGeneralRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigSettingsGeneralRouteHandler: RouteHandler<
  typeof putV4SystemConfigSettingsGeneralRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigSettingsInfrastructureRouteHandler: RouteHandler<
  typeof getV4SystemConfigSettingsInfrastructureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigSettingsSyslogRouteHandler: RouteHandler<
  typeof getV4SystemConfigSettingsSyslogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigSettingsSyslogRouteHandler: RouteHandler<
  typeof putV4SystemConfigSettingsSyslogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigStorageS3RouteHandler: RouteHandler<
  typeof getV4SystemConfigStorageS3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SystemConfigStorageS3RouteHandler: RouteHandler<
  typeof postV4SystemConfigStorageS3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4SystemConfigStorageS3RouteHandler: RouteHandler<
  typeof putV4SystemConfigStorageS3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigStorageS3TagsRouteHandler: RouteHandler<
  typeof getV4SystemConfigStorageS3TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4SystemConfigStorageS3TagsRouteHandler: RouteHandler<
  typeof postV4SystemConfigStorageS3TagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4SystemConfigStorageS3TagsIdRouteHandler: RouteHandler<
  typeof deleteV4SystemConfigStorageS3TagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4SystemConfigStorageS3TagsIdRouteHandler: RouteHandler<
  typeof getV4SystemConfigStorageS3TagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UploadsTokenRouteHandler: RouteHandler<
  typeof deleteV4UploadsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UploadsTokenRouteHandler: RouteHandler<typeof postV4UploadsTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV4UploadsTokenRouteHandler: RouteHandler<typeof putV4UploadsTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV4UserAccountRouteHandler: RouteHandler<typeof getV4UserAccountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV4UserAccountRouteHandler: RouteHandler<typeof putV4UserAccountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV4UserAccountAvatarRouteHandler: RouteHandler<
  typeof deleteV4UserAccountAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserAccountAvatarRouteHandler: RouteHandler<
  typeof getV4UserAccountAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UserAccountAvatarRouteHandler: RouteHandler<
  typeof postV4UserAccountAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserAccountCustomerRouteHandler: RouteHandler<
  typeof getV4UserAccountCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4UserAccountCustomerRouteHandler: RouteHandler<
  typeof putV4UserAccountCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserAccountCustomerKeypairRouteHandler: RouteHandler<
  typeof getV4UserAccountCustomerKeypairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UserAccountKeypairRouteHandler: RouteHandler<
  typeof deleteV4UserAccountKeypairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserAccountKeypairRouteHandler: RouteHandler<
  typeof getV4UserAccountKeypairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UserAccountKeypairRouteHandler: RouteHandler<
  typeof postV4UserAccountKeypairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserAccountKeypairsRouteHandler: RouteHandler<
  typeof getV4UserAccountKeypairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UserAccountKeypairsRouteHandler: RouteHandler<
  typeof postV4UserAccountKeypairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UserAccountMfaRouteHandler: RouteHandler<
  typeof deleteV4UserAccountMfaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserAccountMfaRouteHandler: RouteHandler<
  typeof getV4UserAccountMfaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserAccountMfaTotpRouteHandler: RouteHandler<
  typeof getV4UserAccountMfaTotpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UserAccountMfaTotpRouteHandler: RouteHandler<
  typeof postV4UserAccountMfaTotpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UserAccountMfaTotpIdRouteHandler: RouteHandler<
  typeof deleteV4UserAccountMfaTotpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4UserAccountPasswordRouteHandler: RouteHandler<
  typeof putV4UserAccountPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UserLogoutRouteHandler: RouteHandler<typeof postV4UserLogoutRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV4UserNotificationsConfigRouteHandler: RouteHandler<
  typeof getV4UserNotificationsConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4UserNotificationsConfigIdRouteHandler: RouteHandler<
  typeof putV4UserNotificationsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserOauthApprovalsRouteHandler: RouteHandler<
  typeof getV4UserOauthApprovalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UserOauthApprovalsClientIdRouteHandler: RouteHandler<
  typeof deleteV4UserOauthApprovalsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserOauthAuthorizationsRouteHandler: RouteHandler<
  typeof getV4UserOauthAuthorizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UserOauthAuthorizationsClientIdRouteHandler: RouteHandler<
  typeof deleteV4UserOauthAuthorizationsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UserOauthAuthorizationsClientIdAuthorizationIdRouteHandler: RouteHandler<
  typeof deleteV4UserOauthAuthorizationsClientIdAuthorizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserPingRouteHandler: RouteHandler<typeof getV4UserPingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserProfileAttributesRouteHandler: RouteHandler<
  typeof getV4UserProfileAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UserProfileAttributesRouteHandler: RouteHandler<
  typeof postV4UserProfileAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4UserProfileAttributesRouteHandler: RouteHandler<
  typeof putV4UserProfileAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UserProfileAttributesKeyRouteHandler: RouteHandler<
  typeof deleteV4UserProfileAttributesKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserSubscriptionsDownloadSharesRouteHandler: RouteHandler<
  typeof getV4UserSubscriptionsDownloadSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4UserSubscriptionsDownloadSharesRouteHandler: RouteHandler<
  typeof putV4UserSubscriptionsDownloadSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UserSubscriptionsDownloadSharesShareIdRouteHandler: RouteHandler<
  typeof deleteV4UserSubscriptionsDownloadSharesShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UserSubscriptionsDownloadSharesShareIdRouteHandler: RouteHandler<
  typeof postV4UserSubscriptionsDownloadSharesShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserSubscriptionsNodesRouteHandler: RouteHandler<
  typeof getV4UserSubscriptionsNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4UserSubscriptionsNodesRouteHandler: RouteHandler<
  typeof putV4UserSubscriptionsNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UserSubscriptionsNodesNodeIdRouteHandler: RouteHandler<
  typeof deleteV4UserSubscriptionsNodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UserSubscriptionsNodesNodeIdRouteHandler: RouteHandler<
  typeof postV4UserSubscriptionsNodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UserSubscriptionsUploadSharesRouteHandler: RouteHandler<
  typeof getV4UserSubscriptionsUploadSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4UserSubscriptionsUploadSharesRouteHandler: RouteHandler<
  typeof putV4UserSubscriptionsUploadSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UserSubscriptionsUploadSharesShareIdRouteHandler: RouteHandler<
  typeof deleteV4UserSubscriptionsUploadSharesShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UserSubscriptionsUploadSharesShareIdRouteHandler: RouteHandler<
  typeof postV4UserSubscriptionsUploadSharesShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UsersRouteHandler: RouteHandler<typeof getV4UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UsersRouteHandler: RouteHandler<typeof postV4UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UsersUserIdRouteHandler: RouteHandler<
  typeof deleteV4UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UsersUserIdRouteHandler: RouteHandler<typeof getV4UsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV4UsersUserIdRouteHandler: RouteHandler<typeof putV4UsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV4UsersUserIdGroupsRouteHandler: RouteHandler<
  typeof getV4UsersUserIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UsersUserIdLastAdminRoomsRouteHandler: RouteHandler<
  typeof getV4UsersUserIdLastAdminRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UsersUserIdMfaEmergencyCodeRouteHandler: RouteHandler<
  typeof postV4UsersUserIdMfaEmergencyCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UsersUserIdRolesRouteHandler: RouteHandler<
  typeof getV4UsersUserIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UsersUserIdRoomsRouteHandler: RouteHandler<
  typeof getV4UsersUserIdRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4UsersUserIdUserAttributesRouteHandler: RouteHandler<
  typeof getV4UsersUserIdUserAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4UsersUserIdUserAttributesRouteHandler: RouteHandler<
  typeof postV4UsersUserIdUserAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV4UsersUserIdUserAttributesRouteHandler: RouteHandler<
  typeof putV4UsersUserIdUserAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV4UsersUserIdUserAttributesKeyRouteHandler: RouteHandler<
  typeof deleteV4UsersUserIdUserAttributesKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
