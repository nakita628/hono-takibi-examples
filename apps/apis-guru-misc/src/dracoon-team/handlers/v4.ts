import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v4Handler = app
  .openapi(postV4AuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AuthOpenidLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4AuthOpenidLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AuthPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4AuthRecoverUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4AuthResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AuthResetPasswordTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4AuthResetPasswordTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoInfrastructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoNotificationsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoPoliciesAlgorithmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoPoliciesClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoPoliciesGuestUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoPoliciesPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoProductPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoProductPackagesCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoS3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4ConfigSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4DownloadsAvatarUserIdUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4DownloadsZipTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4DownloadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV4DownloadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4EventlogAuditsNodeInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4EventlogAuditsNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4EventlogEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4EventlogOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsGroupIdLastAdminRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsGroupIdRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4GroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4GroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4GroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4InternalTenantSubscriptionPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4InternalTenantSubscriptionPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesDeletedNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesDeletedNodesActionsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesDeletedNodesDeletedNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFilesKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFilesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesFilesUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesFilesUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFilesUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFilesUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFilesUploadsUploadIdS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFilesUploadsUploadIdS3UrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesFilesVersionsReferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesFilesFileIdDataRoomFileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesFilesFileIdDataSpaceFileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFilesFileIdDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesFilesFileIdUserFileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesMissingFileKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdEncryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesRoomsRoomIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdGuestUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesRoomsRoomIdKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesRoomsRoomIdKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesRoomsRoomIdKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdS3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesRoomsRoomIdS3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesRoomsRoomIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesZipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesZipDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesNodeIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesNodeIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesNodeIdCopyToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesNodeIdDeletedNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesNodeIdDeletedNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesNodeIdDeletedNodesVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesNodeIdFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesNodeIdFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesNodeIdMoveToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesNodeIdParentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ProvisioningCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4ProvisioningCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4ProvisioningCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningCustomersCustomerIdCustomerAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ProvisioningCustomersCustomerIdCustomerAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4ProvisioningCustomersCustomerIdCustomerAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningCustomersCustomerIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ProvisioningWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningWebhooksEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4ProvisioningWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ProvisioningWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4ProvisioningWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ProvisioningWebhooksWebhookIdResetLifetimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSharesDownloadsAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV4PublicSharesDownloadsAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PublicSharesDownloadsAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSharesDownloadsAccessKeyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV4PublicSharesDownloadsAccessKeyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSharesUploadsAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PublicSharesUploadsAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4PublicSharesUploadsAccessKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSharesUploadsAccessKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PublicSharesUploadsAccessKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4PublicSharesUploadsAccessKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4PublicSharesUploadsAccessKeyUploadIdS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PublicSharesUploadsAccessKeyUploadIdS3UrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSoftwareThirdPartyDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSoftwareVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSystemInfoAuthAdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSystemInfoAuthOpenidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ResourcesUserNotificationsScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ResourcesUsersUserIdAvatarUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4RolesRoleIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4RolesRoleIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4RolesRoleIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4RolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4RolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4RolesRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SettingsKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SettingsKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SettingsKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsNotificationsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SettingsNotificationsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SettingsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsWebhooksEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SettingsWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SettingsWebhooksWebhookIdResetLifetimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SharesDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SharesDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SharesDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SharesDownloadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesDownloadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SharesDownloadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SharesDownloadsShareIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesDownloadsShareIdQrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SharesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SharesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SharesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SharesUploadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesUploadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SharesUploadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SharesUploadsShareIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesUploadsShareIdQrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigActionsTestAdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigActionsTestRadiusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigAuthAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigAuthAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SystemConfigAuthAdsAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigAuthAdsAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigAuthAdsAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigAuthOpenidIdpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigAuthOpenidIdpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SystemConfigAuthOpenidIdpsIdpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigAuthOpenidIdpsIdpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigAuthOpenidIdpsIdpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SystemConfigAuthRadiusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigAuthRadiusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigAuthRadiusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigAuthRadiusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SystemConfigOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigPoliciesClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigPoliciesClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigPoliciesGuestUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigPoliciesGuestUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigPoliciesMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigPoliciesMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigPoliciesPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigPoliciesPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigPoliciesPasswordsEnforceChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigPoliciesPasswordsPasswordTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigSettingsAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigSettingsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsEventlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigSettingsEventlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigSettingsGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsInfrastructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigSettingsSyslogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigSettingsSyslogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigStorageS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigStorageS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigStorageS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigStorageS3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigStorageS3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SystemConfigStorageS3TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigStorageS3TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UploadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UploadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UploadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserAccountAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserAccountAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserAccountCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountCustomerKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserAccountKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserAccountKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserAccountKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserAccountMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserAccountMfaTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserAccountMfaTotpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserAccountMfaTotpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserAccountPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserNotificationsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserNotificationsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserOauthApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserOauthApprovalsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserOauthAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserOauthAuthorizationsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserOauthAuthorizationsClientIdAuthorizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserProfileAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserProfileAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserProfileAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserProfileAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserSubscriptionsDownloadSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserSubscriptionsDownloadSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserSubscriptionsDownloadSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserSubscriptionsDownloadSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserSubscriptionsNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserSubscriptionsNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserSubscriptionsNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserSubscriptionsNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UserSubscriptionsUploadSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UserSubscriptionsUploadSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UserSubscriptionsUploadSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserSubscriptionsUploadSharesShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdLastAdminRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UsersUserIdMfaEmergencyCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdUserAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UsersUserIdUserAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UsersUserIdUserAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UsersUserIdUserAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
