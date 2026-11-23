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
} from './routes'
import {
  deleteV4GroupsGroupIdRouteHandler,
  deleteV4GroupsGroupIdUsersRouteHandler,
  deleteV4NodesCommentsCommentIdRouteHandler,
  deleteV4NodesDeletedNodesRouteHandler,
  deleteV4NodesFilesUploadsUploadIdRouteHandler,
  deleteV4NodesNodeIdDeletedNodesRouteHandler,
  deleteV4NodesNodeIdFavoriteRouteHandler,
  deleteV4NodesNodeIdRouteHandler,
  deleteV4NodesRoomsRoomIdGroupsRouteHandler,
  deleteV4NodesRoomsRoomIdKeypairRouteHandler,
  deleteV4NodesRoomsRoomIdUsersRouteHandler,
  deleteV4NodesRouteHandler,
  deleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyRouteHandler,
  deleteV4ProvisioningCustomersCustomerIdRouteHandler,
  deleteV4ProvisioningWebhooksWebhookIdRouteHandler,
  deleteV4PublicSharesUploadsAccessKeyUploadIdRouteHandler,
  deleteV4RolesRoleIdGroupsRouteHandler,
  deleteV4RolesRoleIdUsersRouteHandler,
  deleteV4SettingsKeypairRouteHandler,
  deleteV4SettingsWebhooksWebhookIdRouteHandler,
  deleteV4SharesDownloadsRouteHandler,
  deleteV4SharesDownloadsShareIdRouteHandler,
  deleteV4SharesUploadsRouteHandler,
  deleteV4SharesUploadsShareIdRouteHandler,
  deleteV4SystemConfigAuthAdsAdIdRouteHandler,
  deleteV4SystemConfigAuthOpenidIdpsIdpIdRouteHandler,
  deleteV4SystemConfigAuthRadiusRouteHandler,
  deleteV4SystemConfigOauthClientsClientIdRouteHandler,
  deleteV4SystemConfigStorageS3TagsIdRouteHandler,
  deleteV4UploadsTokenRouteHandler,
  deleteV4UserAccountAvatarRouteHandler,
  deleteV4UserAccountKeypairRouteHandler,
  deleteV4UserAccountMfaRouteHandler,
  deleteV4UserAccountMfaTotpIdRouteHandler,
  deleteV4UserOauthApprovalsClientIdRouteHandler,
  deleteV4UserOauthAuthorizationsClientIdAuthorizationIdRouteHandler,
  deleteV4UserOauthAuthorizationsClientIdRouteHandler,
  deleteV4UserProfileAttributesKeyRouteHandler,
  deleteV4UserSubscriptionsDownloadSharesShareIdRouteHandler,
  deleteV4UserSubscriptionsNodesNodeIdRouteHandler,
  deleteV4UserSubscriptionsUploadSharesShareIdRouteHandler,
  deleteV4UsersUserIdRouteHandler,
  deleteV4UsersUserIdUserAttributesKeyRouteHandler,
  getV4AuthOpenidLoginRouteHandler,
  getV4AuthPingRouteHandler,
  getV4AuthResetPasswordTokenRouteHandler,
  getV4ConfigInfoDefaultsRouteHandler,
  getV4ConfigInfoGeneralRouteHandler,
  getV4ConfigInfoInfrastructureRouteHandler,
  getV4ConfigInfoNotificationsChannelsRouteHandler,
  getV4ConfigInfoPoliciesAlgorithmsRouteHandler,
  getV4ConfigInfoPoliciesClassificationsRouteHandler,
  getV4ConfigInfoPoliciesGuestUsersRouteHandler,
  getV4ConfigInfoPoliciesPasswordsRouteHandler,
  getV4ConfigInfoProductPackagesCurrentRouteHandler,
  getV4ConfigInfoProductPackagesRouteHandler,
  getV4ConfigInfoS3TagsRouteHandler,
  getV4ConfigSettingsRouteHandler,
  getV4DownloadsAvatarUserIdUuidRouteHandler,
  getV4DownloadsTokenRouteHandler,
  getV4DownloadsZipTokenRouteHandler,
  getV4EventlogAuditsNodeInfoRouteHandler,
  getV4EventlogAuditsNodesRouteHandler,
  getV4EventlogEventsRouteHandler,
  getV4EventlogOperationsRouteHandler,
  getV4GroupsGroupIdLastAdminRoomsRouteHandler,
  getV4GroupsGroupIdRolesRouteHandler,
  getV4GroupsGroupIdRoomsRouteHandler,
  getV4GroupsGroupIdRouteHandler,
  getV4GroupsGroupIdUsersRouteHandler,
  getV4GroupsRouteHandler,
  getV4InternalTenantSubscriptionPlanRouteHandler,
  getV4NodesDeletedNodesDeletedNodeIdRouteHandler,
  getV4NodesFilesFileIdDataRoomFileKeyRouteHandler,
  getV4NodesFilesFileIdDataSpaceFileKeyRouteHandler,
  getV4NodesFilesFileIdUserFileKeyRouteHandler,
  getV4NodesFilesUploadsUploadIdRouteHandler,
  getV4NodesFilesVersionsReferenceIdRouteHandler,
  getV4NodesMissingFileKeysRouteHandler,
  getV4NodesNodeIdCommentsRouteHandler,
  getV4NodesNodeIdDeletedNodesRouteHandler,
  getV4NodesNodeIdDeletedNodesVersionsRouteHandler,
  getV4NodesNodeIdParentsRouteHandler,
  getV4NodesNodeIdRouteHandler,
  getV4NodesRoomsPendingRouteHandler,
  getV4NodesRoomsRoomIdEventsRouteHandler,
  getV4NodesRoomsRoomIdGroupsRouteHandler,
  getV4NodesRoomsRoomIdKeypairRouteHandler,
  getV4NodesRoomsRoomIdKeypairsRouteHandler,
  getV4NodesRoomsRoomIdPoliciesRouteHandler,
  getV4NodesRoomsRoomIdS3TagsRouteHandler,
  getV4NodesRoomsRoomIdUsersRouteHandler,
  getV4NodesRoomsRoomIdWebhooksRouteHandler,
  getV4NodesRouteHandler,
  getV4NodesSearchRouteHandler,
  getV4ProvisioningCustomersCustomerIdCustomerAttributesRouteHandler,
  getV4ProvisioningCustomersCustomerIdRouteHandler,
  getV4ProvisioningCustomersCustomerIdUsersRouteHandler,
  getV4ProvisioningCustomersRouteHandler,
  getV4ProvisioningWebhooksEventTypesRouteHandler,
  getV4ProvisioningWebhooksRouteHandler,
  getV4ProvisioningWebhooksWebhookIdRouteHandler,
  getV4PublicSharesDownloadsAccessKeyRouteHandler,
  getV4PublicSharesDownloadsAccessKeyTokenRouteHandler,
  getV4PublicSharesUploadsAccessKeyRouteHandler,
  getV4PublicSharesUploadsAccessKeyUploadIdRouteHandler,
  getV4PublicSoftwareThirdPartyDependenciesRouteHandler,
  getV4PublicSoftwareVersionRouteHandler,
  getV4PublicSystemInfoAuthAdRouteHandler,
  getV4PublicSystemInfoAuthOpenidRouteHandler,
  getV4PublicSystemInfoRouteHandler,
  getV4PublicTimeRouteHandler,
  getV4ResourcesUserNotificationsScopesRouteHandler,
  getV4ResourcesUsersUserIdAvatarUuidRouteHandler,
  getV4RolesRoleIdGroupsRouteHandler,
  getV4RolesRoleIdUsersRouteHandler,
  getV4RolesRouteHandler,
  getV4SettingsKeypairRouteHandler,
  getV4SettingsKeypairsRouteHandler,
  getV4SettingsNotificationsChannelsRouteHandler,
  getV4SettingsRouteHandler,
  getV4SettingsWebhooksEventTypesRouteHandler,
  getV4SettingsWebhooksRouteHandler,
  getV4SettingsWebhooksWebhookIdRouteHandler,
  getV4SharesDownloadsRouteHandler,
  getV4SharesDownloadsShareIdQrRouteHandler,
  getV4SharesDownloadsShareIdRouteHandler,
  getV4SharesUploadsRouteHandler,
  getV4SharesUploadsShareIdQrRouteHandler,
  getV4SharesUploadsShareIdRouteHandler,
  getV4SystemConfigAuthAdsAdIdRouteHandler,
  getV4SystemConfigAuthAdsRouteHandler,
  getV4SystemConfigAuthOpenidIdpsIdpIdRouteHandler,
  getV4SystemConfigAuthOpenidIdpsRouteHandler,
  getV4SystemConfigAuthRadiusRouteHandler,
  getV4SystemConfigOauthClientsClientIdRouteHandler,
  getV4SystemConfigOauthClientsRouteHandler,
  getV4SystemConfigPoliciesClassificationsRouteHandler,
  getV4SystemConfigPoliciesGuestUsersRouteHandler,
  getV4SystemConfigPoliciesMfaRouteHandler,
  getV4SystemConfigPoliciesPasswordsPasswordTypeRouteHandler,
  getV4SystemConfigPoliciesPasswordsRouteHandler,
  getV4SystemConfigSettingsAuthRouteHandler,
  getV4SystemConfigSettingsDefaultsRouteHandler,
  getV4SystemConfigSettingsEventlogRouteHandler,
  getV4SystemConfigSettingsGeneralRouteHandler,
  getV4SystemConfigSettingsInfrastructureRouteHandler,
  getV4SystemConfigSettingsSyslogRouteHandler,
  getV4SystemConfigStorageS3RouteHandler,
  getV4SystemConfigStorageS3TagsIdRouteHandler,
  getV4SystemConfigStorageS3TagsRouteHandler,
  getV4UserAccountAvatarRouteHandler,
  getV4UserAccountCustomerKeypairRouteHandler,
  getV4UserAccountCustomerRouteHandler,
  getV4UserAccountKeypairRouteHandler,
  getV4UserAccountKeypairsRouteHandler,
  getV4UserAccountMfaRouteHandler,
  getV4UserAccountMfaTotpRouteHandler,
  getV4UserAccountRouteHandler,
  getV4UserNotificationsConfigRouteHandler,
  getV4UserOauthApprovalsRouteHandler,
  getV4UserOauthAuthorizationsRouteHandler,
  getV4UserPingRouteHandler,
  getV4UserProfileAttributesRouteHandler,
  getV4UsersRouteHandler,
  getV4UserSubscriptionsDownloadSharesRouteHandler,
  getV4UserSubscriptionsNodesRouteHandler,
  getV4UserSubscriptionsUploadSharesRouteHandler,
  getV4UsersUserIdGroupsRouteHandler,
  getV4UsersUserIdLastAdminRoomsRouteHandler,
  getV4UsersUserIdRolesRouteHandler,
  getV4UsersUserIdRoomsRouteHandler,
  getV4UsersUserIdRouteHandler,
  getV4UsersUserIdUserAttributesRouteHandler,
  headV4DownloadsTokenRouteHandler,
  headV4PublicSharesDownloadsAccessKeyRouteHandler,
  headV4PublicSharesDownloadsAccessKeyTokenRouteHandler,
  postV4AuthLoginRouteHandler,
  postV4AuthOpenidLoginRouteHandler,
  postV4AuthRecoverUsernameRouteHandler,
  postV4AuthResetPasswordRouteHandler,
  postV4GroupsGroupIdUsersRouteHandler,
  postV4GroupsRouteHandler,
  postV4NodesDeletedNodesActionsRestoreRouteHandler,
  postV4NodesFilesFileIdDownloadsRouteHandler,
  postV4NodesFilesKeysRouteHandler,
  postV4NodesFilesUploadsRouteHandler,
  postV4NodesFilesUploadsUploadIdRouteHandler,
  postV4NodesFilesUploadsUploadIdS3UrlsRouteHandler,
  postV4NodesFoldersRouteHandler,
  postV4NodesNodeIdCommentsRouteHandler,
  postV4NodesNodeIdCopyToRouteHandler,
  postV4NodesNodeIdFavoriteRouteHandler,
  postV4NodesNodeIdMoveToRouteHandler,
  postV4NodesRoomsRoomIdKeypairRouteHandler,
  postV4NodesRoomsRoomIdKeypairsRouteHandler,
  postV4NodesRoomsRoomIdS3TagsRouteHandler,
  postV4NodesRoomsRouteHandler,
  postV4NodesZipDownloadRouteHandler,
  postV4NodesZipRouteHandler,
  postV4ProvisioningCustomersCustomerIdCustomerAttributesRouteHandler,
  postV4ProvisioningCustomersRouteHandler,
  postV4ProvisioningWebhooksRouteHandler,
  postV4ProvisioningWebhooksWebhookIdResetLifetimeRouteHandler,
  postV4PublicSharesDownloadsAccessKeyRouteHandler,
  postV4PublicSharesUploadsAccessKeyRouteHandler,
  postV4PublicSharesUploadsAccessKeyUploadIdRouteHandler,
  postV4PublicSharesUploadsAccessKeyUploadIdS3UrlsRouteHandler,
  postV4RolesRoleIdGroupsRouteHandler,
  postV4RolesRoleIdUsersRouteHandler,
  postV4SettingsKeypairRouteHandler,
  postV4SettingsKeypairsRouteHandler,
  postV4SettingsWebhooksRouteHandler,
  postV4SettingsWebhooksWebhookIdResetLifetimeRouteHandler,
  postV4SharesDownloadsRouteHandler,
  postV4SharesDownloadsShareIdEmailRouteHandler,
  postV4SharesUploadsRouteHandler,
  postV4SharesUploadsShareIdEmailRouteHandler,
  postV4SystemConfigActionsTestAdRouteHandler,
  postV4SystemConfigActionsTestRadiusRouteHandler,
  postV4SystemConfigAuthAdsRouteHandler,
  postV4SystemConfigAuthOpenidIdpsRouteHandler,
  postV4SystemConfigAuthRadiusRouteHandler,
  postV4SystemConfigOauthClientsRouteHandler,
  postV4SystemConfigPoliciesPasswordsEnforceChangeRouteHandler,
  postV4SystemConfigStorageS3RouteHandler,
  postV4SystemConfigStorageS3TagsRouteHandler,
  postV4UploadsTokenRouteHandler,
  postV4UserAccountAvatarRouteHandler,
  postV4UserAccountKeypairRouteHandler,
  postV4UserAccountKeypairsRouteHandler,
  postV4UserAccountMfaTotpRouteHandler,
  postV4UserLogoutRouteHandler,
  postV4UserProfileAttributesRouteHandler,
  postV4UsersRouteHandler,
  postV4UserSubscriptionsDownloadSharesShareIdRouteHandler,
  postV4UserSubscriptionsNodesNodeIdRouteHandler,
  postV4UserSubscriptionsUploadSharesShareIdRouteHandler,
  postV4UsersUserIdMfaEmergencyCodeRouteHandler,
  postV4UsersUserIdUserAttributesRouteHandler,
  putV4AuthResetPasswordTokenRouteHandler,
  putV4ConfigSettingsRouteHandler,
  putV4GroupsGroupIdRouteHandler,
  putV4InternalTenantSubscriptionPlanRouteHandler,
  putV4NodesCommentsCommentIdRouteHandler,
  putV4NodesFavoritesRouteHandler,
  putV4NodesFilesFileIdRouteHandler,
  putV4NodesFilesRouteHandler,
  putV4NodesFilesUploadsUploadIdRouteHandler,
  putV4NodesFilesUploadsUploadIdS3RouteHandler,
  putV4NodesFoldersFolderIdRouteHandler,
  putV4NodesRoomsPendingRouteHandler,
  putV4NodesRoomsRoomIdConfigRouteHandler,
  putV4NodesRoomsRoomIdEncryptRouteHandler,
  putV4NodesRoomsRoomIdGroupsRouteHandler,
  putV4NodesRoomsRoomIdGuestUsersRouteHandler,
  putV4NodesRoomsRoomIdPoliciesRouteHandler,
  putV4NodesRoomsRoomIdRouteHandler,
  putV4NodesRoomsRoomIdUsersRouteHandler,
  putV4NodesRoomsRoomIdWebhooksRouteHandler,
  putV4ProvisioningCustomersCustomerIdCustomerAttributesRouteHandler,
  putV4ProvisioningCustomersCustomerIdRouteHandler,
  putV4ProvisioningWebhooksWebhookIdRouteHandler,
  putV4PublicSharesUploadsAccessKeyUploadIdRouteHandler,
  putV4PublicSharesUploadsAccessKeyUploadIdS3RouteHandler,
  putV4SettingsNotificationsChannelsRouteHandler,
  putV4SettingsRouteHandler,
  putV4SettingsWebhooksWebhookIdRouteHandler,
  putV4SharesDownloadsRouteHandler,
  putV4SharesDownloadsShareIdRouteHandler,
  putV4SharesUploadsRouteHandler,
  putV4SharesUploadsShareIdRouteHandler,
  putV4SystemConfigAuthAdsAdIdRouteHandler,
  putV4SystemConfigAuthOpenidIdpsIdpIdRouteHandler,
  putV4SystemConfigAuthRadiusRouteHandler,
  putV4SystemConfigOauthClientsClientIdRouteHandler,
  putV4SystemConfigPoliciesClassificationsRouteHandler,
  putV4SystemConfigPoliciesGuestUsersRouteHandler,
  putV4SystemConfigPoliciesMfaRouteHandler,
  putV4SystemConfigPoliciesPasswordsRouteHandler,
  putV4SystemConfigSettingsAuthRouteHandler,
  putV4SystemConfigSettingsDefaultsRouteHandler,
  putV4SystemConfigSettingsEventlogRouteHandler,
  putV4SystemConfigSettingsGeneralRouteHandler,
  putV4SystemConfigSettingsSyslogRouteHandler,
  putV4SystemConfigStorageS3RouteHandler,
  putV4UploadsTokenRouteHandler,
  putV4UserAccountCustomerRouteHandler,
  putV4UserAccountPasswordRouteHandler,
  putV4UserAccountRouteHandler,
  putV4UserNotificationsConfigIdRouteHandler,
  putV4UserProfileAttributesRouteHandler,
  putV4UserSubscriptionsDownloadSharesRouteHandler,
  putV4UserSubscriptionsNodesRouteHandler,
  putV4UserSubscriptionsUploadSharesRouteHandler,
  putV4UsersUserIdRouteHandler,
  putV4UsersUserIdUserAttributesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV4AuthLoginRoute, postV4AuthLoginRouteHandler)
  .openapi(getV4AuthOpenidLoginRoute, getV4AuthOpenidLoginRouteHandler)
  .openapi(postV4AuthOpenidLoginRoute, postV4AuthOpenidLoginRouteHandler)
  .openapi(getV4AuthPingRoute, getV4AuthPingRouteHandler)
  .openapi(postV4AuthRecoverUsernameRoute, postV4AuthRecoverUsernameRouteHandler)
  .openapi(postV4AuthResetPasswordRoute, postV4AuthResetPasswordRouteHandler)
  .openapi(getV4AuthResetPasswordTokenRoute, getV4AuthResetPasswordTokenRouteHandler)
  .openapi(putV4AuthResetPasswordTokenRoute, putV4AuthResetPasswordTokenRouteHandler)
  .openapi(getV4ConfigInfoDefaultsRoute, getV4ConfigInfoDefaultsRouteHandler)
  .openapi(getV4ConfigInfoGeneralRoute, getV4ConfigInfoGeneralRouteHandler)
  .openapi(getV4ConfigInfoInfrastructureRoute, getV4ConfigInfoInfrastructureRouteHandler)
  .openapi(
    getV4ConfigInfoNotificationsChannelsRoute,
    getV4ConfigInfoNotificationsChannelsRouteHandler,
  )
  .openapi(getV4ConfigInfoPoliciesAlgorithmsRoute, getV4ConfigInfoPoliciesAlgorithmsRouteHandler)
  .openapi(
    getV4ConfigInfoPoliciesClassificationsRoute,
    getV4ConfigInfoPoliciesClassificationsRouteHandler,
  )
  .openapi(getV4ConfigInfoPoliciesGuestUsersRoute, getV4ConfigInfoPoliciesGuestUsersRouteHandler)
  .openapi(getV4ConfigInfoPoliciesPasswordsRoute, getV4ConfigInfoPoliciesPasswordsRouteHandler)
  .openapi(getV4ConfigInfoProductPackagesRoute, getV4ConfigInfoProductPackagesRouteHandler)
  .openapi(
    getV4ConfigInfoProductPackagesCurrentRoute,
    getV4ConfigInfoProductPackagesCurrentRouteHandler,
  )
  .openapi(getV4ConfigInfoS3TagsRoute, getV4ConfigInfoS3TagsRouteHandler)
  .openapi(getV4ConfigSettingsRoute, getV4ConfigSettingsRouteHandler)
  .openapi(putV4ConfigSettingsRoute, putV4ConfigSettingsRouteHandler)
  .openapi(getV4DownloadsAvatarUserIdUuidRoute, getV4DownloadsAvatarUserIdUuidRouteHandler)
  .openapi(getV4DownloadsZipTokenRoute, getV4DownloadsZipTokenRouteHandler)
  .openapi(getV4DownloadsTokenRoute, getV4DownloadsTokenRouteHandler)
  .openapi(headV4DownloadsTokenRoute, headV4DownloadsTokenRouteHandler)
  .openapi(getV4EventlogAuditsNodeInfoRoute, getV4EventlogAuditsNodeInfoRouteHandler)
  .openapi(getV4EventlogAuditsNodesRoute, getV4EventlogAuditsNodesRouteHandler)
  .openapi(getV4EventlogEventsRoute, getV4EventlogEventsRouteHandler)
  .openapi(getV4EventlogOperationsRoute, getV4EventlogOperationsRouteHandler)
  .openapi(getV4GroupsRoute, getV4GroupsRouteHandler)
  .openapi(postV4GroupsRoute, postV4GroupsRouteHandler)
  .openapi(deleteV4GroupsGroupIdRoute, deleteV4GroupsGroupIdRouteHandler)
  .openapi(getV4GroupsGroupIdRoute, getV4GroupsGroupIdRouteHandler)
  .openapi(putV4GroupsGroupIdRoute, putV4GroupsGroupIdRouteHandler)
  .openapi(getV4GroupsGroupIdLastAdminRoomsRoute, getV4GroupsGroupIdLastAdminRoomsRouteHandler)
  .openapi(getV4GroupsGroupIdRolesRoute, getV4GroupsGroupIdRolesRouteHandler)
  .openapi(getV4GroupsGroupIdRoomsRoute, getV4GroupsGroupIdRoomsRouteHandler)
  .openapi(deleteV4GroupsGroupIdUsersRoute, deleteV4GroupsGroupIdUsersRouteHandler)
  .openapi(getV4GroupsGroupIdUsersRoute, getV4GroupsGroupIdUsersRouteHandler)
  .openapi(postV4GroupsGroupIdUsersRoute, postV4GroupsGroupIdUsersRouteHandler)
  .openapi(
    getV4InternalTenantSubscriptionPlanRoute,
    getV4InternalTenantSubscriptionPlanRouteHandler,
  )
  .openapi(
    putV4InternalTenantSubscriptionPlanRoute,
    putV4InternalTenantSubscriptionPlanRouteHandler,
  )
  .openapi(deleteV4NodesRoute, deleteV4NodesRouteHandler)
  .openapi(getV4NodesRoute, getV4NodesRouteHandler)
  .openapi(deleteV4NodesCommentsCommentIdRoute, deleteV4NodesCommentsCommentIdRouteHandler)
  .openapi(putV4NodesCommentsCommentIdRoute, putV4NodesCommentsCommentIdRouteHandler)
  .openapi(deleteV4NodesDeletedNodesRoute, deleteV4NodesDeletedNodesRouteHandler)
  .openapi(
    postV4NodesDeletedNodesActionsRestoreRoute,
    postV4NodesDeletedNodesActionsRestoreRouteHandler,
  )
  .openapi(
    getV4NodesDeletedNodesDeletedNodeIdRoute,
    getV4NodesDeletedNodesDeletedNodeIdRouteHandler,
  )
  .openapi(putV4NodesFavoritesRoute, putV4NodesFavoritesRouteHandler)
  .openapi(putV4NodesFilesRoute, putV4NodesFilesRouteHandler)
  .openapi(postV4NodesFilesKeysRoute, postV4NodesFilesKeysRouteHandler)
  .openapi(postV4NodesFilesUploadsRoute, postV4NodesFilesUploadsRouteHandler)
  .openapi(deleteV4NodesFilesUploadsUploadIdRoute, deleteV4NodesFilesUploadsUploadIdRouteHandler)
  .openapi(getV4NodesFilesUploadsUploadIdRoute, getV4NodesFilesUploadsUploadIdRouteHandler)
  .openapi(postV4NodesFilesUploadsUploadIdRoute, postV4NodesFilesUploadsUploadIdRouteHandler)
  .openapi(putV4NodesFilesUploadsUploadIdRoute, putV4NodesFilesUploadsUploadIdRouteHandler)
  .openapi(putV4NodesFilesUploadsUploadIdS3Route, putV4NodesFilesUploadsUploadIdS3RouteHandler)
  .openapi(
    postV4NodesFilesUploadsUploadIdS3UrlsRoute,
    postV4NodesFilesUploadsUploadIdS3UrlsRouteHandler,
  )
  .openapi(getV4NodesFilesVersionsReferenceIdRoute, getV4NodesFilesVersionsReferenceIdRouteHandler)
  .openapi(putV4NodesFilesFileIdRoute, putV4NodesFilesFileIdRouteHandler)
  .openapi(
    getV4NodesFilesFileIdDataRoomFileKeyRoute,
    getV4NodesFilesFileIdDataRoomFileKeyRouteHandler,
  )
  .openapi(
    getV4NodesFilesFileIdDataSpaceFileKeyRoute,
    getV4NodesFilesFileIdDataSpaceFileKeyRouteHandler,
  )
  .openapi(postV4NodesFilesFileIdDownloadsRoute, postV4NodesFilesFileIdDownloadsRouteHandler)
  .openapi(getV4NodesFilesFileIdUserFileKeyRoute, getV4NodesFilesFileIdUserFileKeyRouteHandler)
  .openapi(postV4NodesFoldersRoute, postV4NodesFoldersRouteHandler)
  .openapi(putV4NodesFoldersFolderIdRoute, putV4NodesFoldersFolderIdRouteHandler)
  .openapi(getV4NodesMissingFileKeysRoute, getV4NodesMissingFileKeysRouteHandler)
  .openapi(postV4NodesRoomsRoute, postV4NodesRoomsRouteHandler)
  .openapi(getV4NodesRoomsPendingRoute, getV4NodesRoomsPendingRouteHandler)
  .openapi(putV4NodesRoomsPendingRoute, putV4NodesRoomsPendingRouteHandler)
  .openapi(putV4NodesRoomsRoomIdRoute, putV4NodesRoomsRoomIdRouteHandler)
  .openapi(putV4NodesRoomsRoomIdConfigRoute, putV4NodesRoomsRoomIdConfigRouteHandler)
  .openapi(putV4NodesRoomsRoomIdEncryptRoute, putV4NodesRoomsRoomIdEncryptRouteHandler)
  .openapi(getV4NodesRoomsRoomIdEventsRoute, getV4NodesRoomsRoomIdEventsRouteHandler)
  .openapi(deleteV4NodesRoomsRoomIdGroupsRoute, deleteV4NodesRoomsRoomIdGroupsRouteHandler)
  .openapi(getV4NodesRoomsRoomIdGroupsRoute, getV4NodesRoomsRoomIdGroupsRouteHandler)
  .openapi(putV4NodesRoomsRoomIdGroupsRoute, putV4NodesRoomsRoomIdGroupsRouteHandler)
  .openapi(putV4NodesRoomsRoomIdGuestUsersRoute, putV4NodesRoomsRoomIdGuestUsersRouteHandler)
  .openapi(deleteV4NodesRoomsRoomIdKeypairRoute, deleteV4NodesRoomsRoomIdKeypairRouteHandler)
  .openapi(getV4NodesRoomsRoomIdKeypairRoute, getV4NodesRoomsRoomIdKeypairRouteHandler)
  .openapi(postV4NodesRoomsRoomIdKeypairRoute, postV4NodesRoomsRoomIdKeypairRouteHandler)
  .openapi(getV4NodesRoomsRoomIdKeypairsRoute, getV4NodesRoomsRoomIdKeypairsRouteHandler)
  .openapi(postV4NodesRoomsRoomIdKeypairsRoute, postV4NodesRoomsRoomIdKeypairsRouteHandler)
  .openapi(getV4NodesRoomsRoomIdPoliciesRoute, getV4NodesRoomsRoomIdPoliciesRouteHandler)
  .openapi(putV4NodesRoomsRoomIdPoliciesRoute, putV4NodesRoomsRoomIdPoliciesRouteHandler)
  .openapi(getV4NodesRoomsRoomIdS3TagsRoute, getV4NodesRoomsRoomIdS3TagsRouteHandler)
  .openapi(postV4NodesRoomsRoomIdS3TagsRoute, postV4NodesRoomsRoomIdS3TagsRouteHandler)
  .openapi(deleteV4NodesRoomsRoomIdUsersRoute, deleteV4NodesRoomsRoomIdUsersRouteHandler)
  .openapi(getV4NodesRoomsRoomIdUsersRoute, getV4NodesRoomsRoomIdUsersRouteHandler)
  .openapi(putV4NodesRoomsRoomIdUsersRoute, putV4NodesRoomsRoomIdUsersRouteHandler)
  .openapi(getV4NodesRoomsRoomIdWebhooksRoute, getV4NodesRoomsRoomIdWebhooksRouteHandler)
  .openapi(putV4NodesRoomsRoomIdWebhooksRoute, putV4NodesRoomsRoomIdWebhooksRouteHandler)
  .openapi(getV4NodesSearchRoute, getV4NodesSearchRouteHandler)
  .openapi(postV4NodesZipRoute, postV4NodesZipRouteHandler)
  .openapi(postV4NodesZipDownloadRoute, postV4NodesZipDownloadRouteHandler)
  .openapi(deleteV4NodesNodeIdRoute, deleteV4NodesNodeIdRouteHandler)
  .openapi(getV4NodesNodeIdRoute, getV4NodesNodeIdRouteHandler)
  .openapi(getV4NodesNodeIdCommentsRoute, getV4NodesNodeIdCommentsRouteHandler)
  .openapi(postV4NodesNodeIdCommentsRoute, postV4NodesNodeIdCommentsRouteHandler)
  .openapi(postV4NodesNodeIdCopyToRoute, postV4NodesNodeIdCopyToRouteHandler)
  .openapi(deleteV4NodesNodeIdDeletedNodesRoute, deleteV4NodesNodeIdDeletedNodesRouteHandler)
  .openapi(getV4NodesNodeIdDeletedNodesRoute, getV4NodesNodeIdDeletedNodesRouteHandler)
  .openapi(
    getV4NodesNodeIdDeletedNodesVersionsRoute,
    getV4NodesNodeIdDeletedNodesVersionsRouteHandler,
  )
  .openapi(deleteV4NodesNodeIdFavoriteRoute, deleteV4NodesNodeIdFavoriteRouteHandler)
  .openapi(postV4NodesNodeIdFavoriteRoute, postV4NodesNodeIdFavoriteRouteHandler)
  .openapi(postV4NodesNodeIdMoveToRoute, postV4NodesNodeIdMoveToRouteHandler)
  .openapi(getV4NodesNodeIdParentsRoute, getV4NodesNodeIdParentsRouteHandler)
  .openapi(getV4ProvisioningCustomersRoute, getV4ProvisioningCustomersRouteHandler)
  .openapi(postV4ProvisioningCustomersRoute, postV4ProvisioningCustomersRouteHandler)
  .openapi(
    deleteV4ProvisioningCustomersCustomerIdRoute,
    deleteV4ProvisioningCustomersCustomerIdRouteHandler,
  )
  .openapi(
    getV4ProvisioningCustomersCustomerIdRoute,
    getV4ProvisioningCustomersCustomerIdRouteHandler,
  )
  .openapi(
    putV4ProvisioningCustomersCustomerIdRoute,
    putV4ProvisioningCustomersCustomerIdRouteHandler,
  )
  .openapi(
    getV4ProvisioningCustomersCustomerIdCustomerAttributesRoute,
    getV4ProvisioningCustomersCustomerIdCustomerAttributesRouteHandler,
  )
  .openapi(
    postV4ProvisioningCustomersCustomerIdCustomerAttributesRoute,
    postV4ProvisioningCustomersCustomerIdCustomerAttributesRouteHandler,
  )
  .openapi(
    putV4ProvisioningCustomersCustomerIdCustomerAttributesRoute,
    putV4ProvisioningCustomersCustomerIdCustomerAttributesRouteHandler,
  )
  .openapi(
    deleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyRoute,
    deleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyRouteHandler,
  )
  .openapi(
    getV4ProvisioningCustomersCustomerIdUsersRoute,
    getV4ProvisioningCustomersCustomerIdUsersRouteHandler,
  )
  .openapi(getV4ProvisioningWebhooksRoute, getV4ProvisioningWebhooksRouteHandler)
  .openapi(postV4ProvisioningWebhooksRoute, postV4ProvisioningWebhooksRouteHandler)
  .openapi(
    getV4ProvisioningWebhooksEventTypesRoute,
    getV4ProvisioningWebhooksEventTypesRouteHandler,
  )
  .openapi(
    deleteV4ProvisioningWebhooksWebhookIdRoute,
    deleteV4ProvisioningWebhooksWebhookIdRouteHandler,
  )
  .openapi(getV4ProvisioningWebhooksWebhookIdRoute, getV4ProvisioningWebhooksWebhookIdRouteHandler)
  .openapi(putV4ProvisioningWebhooksWebhookIdRoute, putV4ProvisioningWebhooksWebhookIdRouteHandler)
  .openapi(
    postV4ProvisioningWebhooksWebhookIdResetLifetimeRoute,
    postV4ProvisioningWebhooksWebhookIdResetLifetimeRouteHandler,
  )
  .openapi(
    getV4PublicSharesDownloadsAccessKeyRoute,
    getV4PublicSharesDownloadsAccessKeyRouteHandler,
  )
  .openapi(
    headV4PublicSharesDownloadsAccessKeyRoute,
    headV4PublicSharesDownloadsAccessKeyRouteHandler,
  )
  .openapi(
    postV4PublicSharesDownloadsAccessKeyRoute,
    postV4PublicSharesDownloadsAccessKeyRouteHandler,
  )
  .openapi(
    getV4PublicSharesDownloadsAccessKeyTokenRoute,
    getV4PublicSharesDownloadsAccessKeyTokenRouteHandler,
  )
  .openapi(
    headV4PublicSharesDownloadsAccessKeyTokenRoute,
    headV4PublicSharesDownloadsAccessKeyTokenRouteHandler,
  )
  .openapi(getV4PublicSharesUploadsAccessKeyRoute, getV4PublicSharesUploadsAccessKeyRouteHandler)
  .openapi(postV4PublicSharesUploadsAccessKeyRoute, postV4PublicSharesUploadsAccessKeyRouteHandler)
  .openapi(
    deleteV4PublicSharesUploadsAccessKeyUploadIdRoute,
    deleteV4PublicSharesUploadsAccessKeyUploadIdRouteHandler,
  )
  .openapi(
    getV4PublicSharesUploadsAccessKeyUploadIdRoute,
    getV4PublicSharesUploadsAccessKeyUploadIdRouteHandler,
  )
  .openapi(
    postV4PublicSharesUploadsAccessKeyUploadIdRoute,
    postV4PublicSharesUploadsAccessKeyUploadIdRouteHandler,
  )
  .openapi(
    putV4PublicSharesUploadsAccessKeyUploadIdRoute,
    putV4PublicSharesUploadsAccessKeyUploadIdRouteHandler,
  )
  .openapi(
    putV4PublicSharesUploadsAccessKeyUploadIdS3Route,
    putV4PublicSharesUploadsAccessKeyUploadIdS3RouteHandler,
  )
  .openapi(
    postV4PublicSharesUploadsAccessKeyUploadIdS3UrlsRoute,
    postV4PublicSharesUploadsAccessKeyUploadIdS3UrlsRouteHandler,
  )
  .openapi(
    getV4PublicSoftwareThirdPartyDependenciesRoute,
    getV4PublicSoftwareThirdPartyDependenciesRouteHandler,
  )
  .openapi(getV4PublicSoftwareVersionRoute, getV4PublicSoftwareVersionRouteHandler)
  .openapi(getV4PublicSystemInfoRoute, getV4PublicSystemInfoRouteHandler)
  .openapi(getV4PublicSystemInfoAuthAdRoute, getV4PublicSystemInfoAuthAdRouteHandler)
  .openapi(getV4PublicSystemInfoAuthOpenidRoute, getV4PublicSystemInfoAuthOpenidRouteHandler)
  .openapi(getV4PublicTimeRoute, getV4PublicTimeRouteHandler)
  .openapi(
    getV4ResourcesUserNotificationsScopesRoute,
    getV4ResourcesUserNotificationsScopesRouteHandler,
  )
  .openapi(
    getV4ResourcesUsersUserIdAvatarUuidRoute,
    getV4ResourcesUsersUserIdAvatarUuidRouteHandler,
  )
  .openapi(getV4RolesRoute, getV4RolesRouteHandler)
  .openapi(deleteV4RolesRoleIdGroupsRoute, deleteV4RolesRoleIdGroupsRouteHandler)
  .openapi(getV4RolesRoleIdGroupsRoute, getV4RolesRoleIdGroupsRouteHandler)
  .openapi(postV4RolesRoleIdGroupsRoute, postV4RolesRoleIdGroupsRouteHandler)
  .openapi(deleteV4RolesRoleIdUsersRoute, deleteV4RolesRoleIdUsersRouteHandler)
  .openapi(getV4RolesRoleIdUsersRoute, getV4RolesRoleIdUsersRouteHandler)
  .openapi(postV4RolesRoleIdUsersRoute, postV4RolesRoleIdUsersRouteHandler)
  .openapi(getV4SettingsRoute, getV4SettingsRouteHandler)
  .openapi(putV4SettingsRoute, putV4SettingsRouteHandler)
  .openapi(deleteV4SettingsKeypairRoute, deleteV4SettingsKeypairRouteHandler)
  .openapi(getV4SettingsKeypairRoute, getV4SettingsKeypairRouteHandler)
  .openapi(postV4SettingsKeypairRoute, postV4SettingsKeypairRouteHandler)
  .openapi(getV4SettingsKeypairsRoute, getV4SettingsKeypairsRouteHandler)
  .openapi(postV4SettingsKeypairsRoute, postV4SettingsKeypairsRouteHandler)
  .openapi(getV4SettingsNotificationsChannelsRoute, getV4SettingsNotificationsChannelsRouteHandler)
  .openapi(putV4SettingsNotificationsChannelsRoute, putV4SettingsNotificationsChannelsRouteHandler)
  .openapi(getV4SettingsWebhooksRoute, getV4SettingsWebhooksRouteHandler)
  .openapi(postV4SettingsWebhooksRoute, postV4SettingsWebhooksRouteHandler)
  .openapi(getV4SettingsWebhooksEventTypesRoute, getV4SettingsWebhooksEventTypesRouteHandler)
  .openapi(deleteV4SettingsWebhooksWebhookIdRoute, deleteV4SettingsWebhooksWebhookIdRouteHandler)
  .openapi(getV4SettingsWebhooksWebhookIdRoute, getV4SettingsWebhooksWebhookIdRouteHandler)
  .openapi(putV4SettingsWebhooksWebhookIdRoute, putV4SettingsWebhooksWebhookIdRouteHandler)
  .openapi(
    postV4SettingsWebhooksWebhookIdResetLifetimeRoute,
    postV4SettingsWebhooksWebhookIdResetLifetimeRouteHandler,
  )
  .openapi(deleteV4SharesDownloadsRoute, deleteV4SharesDownloadsRouteHandler)
  .openapi(getV4SharesDownloadsRoute, getV4SharesDownloadsRouteHandler)
  .openapi(postV4SharesDownloadsRoute, postV4SharesDownloadsRouteHandler)
  .openapi(putV4SharesDownloadsRoute, putV4SharesDownloadsRouteHandler)
  .openapi(deleteV4SharesDownloadsShareIdRoute, deleteV4SharesDownloadsShareIdRouteHandler)
  .openapi(getV4SharesDownloadsShareIdRoute, getV4SharesDownloadsShareIdRouteHandler)
  .openapi(putV4SharesDownloadsShareIdRoute, putV4SharesDownloadsShareIdRouteHandler)
  .openapi(postV4SharesDownloadsShareIdEmailRoute, postV4SharesDownloadsShareIdEmailRouteHandler)
  .openapi(getV4SharesDownloadsShareIdQrRoute, getV4SharesDownloadsShareIdQrRouteHandler)
  .openapi(deleteV4SharesUploadsRoute, deleteV4SharesUploadsRouteHandler)
  .openapi(getV4SharesUploadsRoute, getV4SharesUploadsRouteHandler)
  .openapi(postV4SharesUploadsRoute, postV4SharesUploadsRouteHandler)
  .openapi(putV4SharesUploadsRoute, putV4SharesUploadsRouteHandler)
  .openapi(deleteV4SharesUploadsShareIdRoute, deleteV4SharesUploadsShareIdRouteHandler)
  .openapi(getV4SharesUploadsShareIdRoute, getV4SharesUploadsShareIdRouteHandler)
  .openapi(putV4SharesUploadsShareIdRoute, putV4SharesUploadsShareIdRouteHandler)
  .openapi(postV4SharesUploadsShareIdEmailRoute, postV4SharesUploadsShareIdEmailRouteHandler)
  .openapi(getV4SharesUploadsShareIdQrRoute, getV4SharesUploadsShareIdQrRouteHandler)
  .openapi(postV4SystemConfigActionsTestAdRoute, postV4SystemConfigActionsTestAdRouteHandler)
  .openapi(
    postV4SystemConfigActionsTestRadiusRoute,
    postV4SystemConfigActionsTestRadiusRouteHandler,
  )
  .openapi(getV4SystemConfigAuthAdsRoute, getV4SystemConfigAuthAdsRouteHandler)
  .openapi(postV4SystemConfigAuthAdsRoute, postV4SystemConfigAuthAdsRouteHandler)
  .openapi(deleteV4SystemConfigAuthAdsAdIdRoute, deleteV4SystemConfigAuthAdsAdIdRouteHandler)
  .openapi(getV4SystemConfigAuthAdsAdIdRoute, getV4SystemConfigAuthAdsAdIdRouteHandler)
  .openapi(putV4SystemConfigAuthAdsAdIdRoute, putV4SystemConfigAuthAdsAdIdRouteHandler)
  .openapi(getV4SystemConfigAuthOpenidIdpsRoute, getV4SystemConfigAuthOpenidIdpsRouteHandler)
  .openapi(postV4SystemConfigAuthOpenidIdpsRoute, postV4SystemConfigAuthOpenidIdpsRouteHandler)
  .openapi(
    deleteV4SystemConfigAuthOpenidIdpsIdpIdRoute,
    deleteV4SystemConfigAuthOpenidIdpsIdpIdRouteHandler,
  )
  .openapi(
    getV4SystemConfigAuthOpenidIdpsIdpIdRoute,
    getV4SystemConfigAuthOpenidIdpsIdpIdRouteHandler,
  )
  .openapi(
    putV4SystemConfigAuthOpenidIdpsIdpIdRoute,
    putV4SystemConfigAuthOpenidIdpsIdpIdRouteHandler,
  )
  .openapi(deleteV4SystemConfigAuthRadiusRoute, deleteV4SystemConfigAuthRadiusRouteHandler)
  .openapi(getV4SystemConfigAuthRadiusRoute, getV4SystemConfigAuthRadiusRouteHandler)
  .openapi(postV4SystemConfigAuthRadiusRoute, postV4SystemConfigAuthRadiusRouteHandler)
  .openapi(putV4SystemConfigAuthRadiusRoute, putV4SystemConfigAuthRadiusRouteHandler)
  .openapi(getV4SystemConfigOauthClientsRoute, getV4SystemConfigOauthClientsRouteHandler)
  .openapi(postV4SystemConfigOauthClientsRoute, postV4SystemConfigOauthClientsRouteHandler)
  .openapi(
    deleteV4SystemConfigOauthClientsClientIdRoute,
    deleteV4SystemConfigOauthClientsClientIdRouteHandler,
  )
  .openapi(
    getV4SystemConfigOauthClientsClientIdRoute,
    getV4SystemConfigOauthClientsClientIdRouteHandler,
  )
  .openapi(
    putV4SystemConfigOauthClientsClientIdRoute,
    putV4SystemConfigOauthClientsClientIdRouteHandler,
  )
  .openapi(
    getV4SystemConfigPoliciesClassificationsRoute,
    getV4SystemConfigPoliciesClassificationsRouteHandler,
  )
  .openapi(
    putV4SystemConfigPoliciesClassificationsRoute,
    putV4SystemConfigPoliciesClassificationsRouteHandler,
  )
  .openapi(
    getV4SystemConfigPoliciesGuestUsersRoute,
    getV4SystemConfigPoliciesGuestUsersRouteHandler,
  )
  .openapi(
    putV4SystemConfigPoliciesGuestUsersRoute,
    putV4SystemConfigPoliciesGuestUsersRouteHandler,
  )
  .openapi(getV4SystemConfigPoliciesMfaRoute, getV4SystemConfigPoliciesMfaRouteHandler)
  .openapi(putV4SystemConfigPoliciesMfaRoute, putV4SystemConfigPoliciesMfaRouteHandler)
  .openapi(getV4SystemConfigPoliciesPasswordsRoute, getV4SystemConfigPoliciesPasswordsRouteHandler)
  .openapi(putV4SystemConfigPoliciesPasswordsRoute, putV4SystemConfigPoliciesPasswordsRouteHandler)
  .openapi(
    postV4SystemConfigPoliciesPasswordsEnforceChangeRoute,
    postV4SystemConfigPoliciesPasswordsEnforceChangeRouteHandler,
  )
  .openapi(
    getV4SystemConfigPoliciesPasswordsPasswordTypeRoute,
    getV4SystemConfigPoliciesPasswordsPasswordTypeRouteHandler,
  )
  .openapi(getV4SystemConfigSettingsAuthRoute, getV4SystemConfigSettingsAuthRouteHandler)
  .openapi(putV4SystemConfigSettingsAuthRoute, putV4SystemConfigSettingsAuthRouteHandler)
  .openapi(getV4SystemConfigSettingsDefaultsRoute, getV4SystemConfigSettingsDefaultsRouteHandler)
  .openapi(putV4SystemConfigSettingsDefaultsRoute, putV4SystemConfigSettingsDefaultsRouteHandler)
  .openapi(getV4SystemConfigSettingsEventlogRoute, getV4SystemConfigSettingsEventlogRouteHandler)
  .openapi(putV4SystemConfigSettingsEventlogRoute, putV4SystemConfigSettingsEventlogRouteHandler)
  .openapi(getV4SystemConfigSettingsGeneralRoute, getV4SystemConfigSettingsGeneralRouteHandler)
  .openapi(putV4SystemConfigSettingsGeneralRoute, putV4SystemConfigSettingsGeneralRouteHandler)
  .openapi(
    getV4SystemConfigSettingsInfrastructureRoute,
    getV4SystemConfigSettingsInfrastructureRouteHandler,
  )
  .openapi(getV4SystemConfigSettingsSyslogRoute, getV4SystemConfigSettingsSyslogRouteHandler)
  .openapi(putV4SystemConfigSettingsSyslogRoute, putV4SystemConfigSettingsSyslogRouteHandler)
  .openapi(getV4SystemConfigStorageS3Route, getV4SystemConfigStorageS3RouteHandler)
  .openapi(postV4SystemConfigStorageS3Route, postV4SystemConfigStorageS3RouteHandler)
  .openapi(putV4SystemConfigStorageS3Route, putV4SystemConfigStorageS3RouteHandler)
  .openapi(getV4SystemConfigStorageS3TagsRoute, getV4SystemConfigStorageS3TagsRouteHandler)
  .openapi(postV4SystemConfigStorageS3TagsRoute, postV4SystemConfigStorageS3TagsRouteHandler)
  .openapi(
    deleteV4SystemConfigStorageS3TagsIdRoute,
    deleteV4SystemConfigStorageS3TagsIdRouteHandler,
  )
  .openapi(getV4SystemConfigStorageS3TagsIdRoute, getV4SystemConfigStorageS3TagsIdRouteHandler)
  .openapi(deleteV4UploadsTokenRoute, deleteV4UploadsTokenRouteHandler)
  .openapi(postV4UploadsTokenRoute, postV4UploadsTokenRouteHandler)
  .openapi(putV4UploadsTokenRoute, putV4UploadsTokenRouteHandler)
  .openapi(getV4UserAccountRoute, getV4UserAccountRouteHandler)
  .openapi(putV4UserAccountRoute, putV4UserAccountRouteHandler)
  .openapi(deleteV4UserAccountAvatarRoute, deleteV4UserAccountAvatarRouteHandler)
  .openapi(getV4UserAccountAvatarRoute, getV4UserAccountAvatarRouteHandler)
  .openapi(postV4UserAccountAvatarRoute, postV4UserAccountAvatarRouteHandler)
  .openapi(getV4UserAccountCustomerRoute, getV4UserAccountCustomerRouteHandler)
  .openapi(putV4UserAccountCustomerRoute, putV4UserAccountCustomerRouteHandler)
  .openapi(getV4UserAccountCustomerKeypairRoute, getV4UserAccountCustomerKeypairRouteHandler)
  .openapi(deleteV4UserAccountKeypairRoute, deleteV4UserAccountKeypairRouteHandler)
  .openapi(getV4UserAccountKeypairRoute, getV4UserAccountKeypairRouteHandler)
  .openapi(postV4UserAccountKeypairRoute, postV4UserAccountKeypairRouteHandler)
  .openapi(getV4UserAccountKeypairsRoute, getV4UserAccountKeypairsRouteHandler)
  .openapi(postV4UserAccountKeypairsRoute, postV4UserAccountKeypairsRouteHandler)
  .openapi(deleteV4UserAccountMfaRoute, deleteV4UserAccountMfaRouteHandler)
  .openapi(getV4UserAccountMfaRoute, getV4UserAccountMfaRouteHandler)
  .openapi(getV4UserAccountMfaTotpRoute, getV4UserAccountMfaTotpRouteHandler)
  .openapi(postV4UserAccountMfaTotpRoute, postV4UserAccountMfaTotpRouteHandler)
  .openapi(deleteV4UserAccountMfaTotpIdRoute, deleteV4UserAccountMfaTotpIdRouteHandler)
  .openapi(putV4UserAccountPasswordRoute, putV4UserAccountPasswordRouteHandler)
  .openapi(postV4UserLogoutRoute, postV4UserLogoutRouteHandler)
  .openapi(getV4UserNotificationsConfigRoute, getV4UserNotificationsConfigRouteHandler)
  .openapi(putV4UserNotificationsConfigIdRoute, putV4UserNotificationsConfigIdRouteHandler)
  .openapi(getV4UserOauthApprovalsRoute, getV4UserOauthApprovalsRouteHandler)
  .openapi(deleteV4UserOauthApprovalsClientIdRoute, deleteV4UserOauthApprovalsClientIdRouteHandler)
  .openapi(getV4UserOauthAuthorizationsRoute, getV4UserOauthAuthorizationsRouteHandler)
  .openapi(
    deleteV4UserOauthAuthorizationsClientIdRoute,
    deleteV4UserOauthAuthorizationsClientIdRouteHandler,
  )
  .openapi(
    deleteV4UserOauthAuthorizationsClientIdAuthorizationIdRoute,
    deleteV4UserOauthAuthorizationsClientIdAuthorizationIdRouteHandler,
  )
  .openapi(getV4UserPingRoute, getV4UserPingRouteHandler)
  .openapi(getV4UserProfileAttributesRoute, getV4UserProfileAttributesRouteHandler)
  .openapi(postV4UserProfileAttributesRoute, postV4UserProfileAttributesRouteHandler)
  .openapi(putV4UserProfileAttributesRoute, putV4UserProfileAttributesRouteHandler)
  .openapi(deleteV4UserProfileAttributesKeyRoute, deleteV4UserProfileAttributesKeyRouteHandler)
  .openapi(
    getV4UserSubscriptionsDownloadSharesRoute,
    getV4UserSubscriptionsDownloadSharesRouteHandler,
  )
  .openapi(
    putV4UserSubscriptionsDownloadSharesRoute,
    putV4UserSubscriptionsDownloadSharesRouteHandler,
  )
  .openapi(
    deleteV4UserSubscriptionsDownloadSharesShareIdRoute,
    deleteV4UserSubscriptionsDownloadSharesShareIdRouteHandler,
  )
  .openapi(
    postV4UserSubscriptionsDownloadSharesShareIdRoute,
    postV4UserSubscriptionsDownloadSharesShareIdRouteHandler,
  )
  .openapi(getV4UserSubscriptionsNodesRoute, getV4UserSubscriptionsNodesRouteHandler)
  .openapi(putV4UserSubscriptionsNodesRoute, putV4UserSubscriptionsNodesRouteHandler)
  .openapi(
    deleteV4UserSubscriptionsNodesNodeIdRoute,
    deleteV4UserSubscriptionsNodesNodeIdRouteHandler,
  )
  .openapi(postV4UserSubscriptionsNodesNodeIdRoute, postV4UserSubscriptionsNodesNodeIdRouteHandler)
  .openapi(getV4UserSubscriptionsUploadSharesRoute, getV4UserSubscriptionsUploadSharesRouteHandler)
  .openapi(putV4UserSubscriptionsUploadSharesRoute, putV4UserSubscriptionsUploadSharesRouteHandler)
  .openapi(
    deleteV4UserSubscriptionsUploadSharesShareIdRoute,
    deleteV4UserSubscriptionsUploadSharesShareIdRouteHandler,
  )
  .openapi(
    postV4UserSubscriptionsUploadSharesShareIdRoute,
    postV4UserSubscriptionsUploadSharesShareIdRouteHandler,
  )
  .openapi(getV4UsersRoute, getV4UsersRouteHandler)
  .openapi(postV4UsersRoute, postV4UsersRouteHandler)
  .openapi(deleteV4UsersUserIdRoute, deleteV4UsersUserIdRouteHandler)
  .openapi(getV4UsersUserIdRoute, getV4UsersUserIdRouteHandler)
  .openapi(putV4UsersUserIdRoute, putV4UsersUserIdRouteHandler)
  .openapi(getV4UsersUserIdGroupsRoute, getV4UsersUserIdGroupsRouteHandler)
  .openapi(getV4UsersUserIdLastAdminRoomsRoute, getV4UsersUserIdLastAdminRoomsRouteHandler)
  .openapi(postV4UsersUserIdMfaEmergencyCodeRoute, postV4UsersUserIdMfaEmergencyCodeRouteHandler)
  .openapi(getV4UsersUserIdRolesRoute, getV4UsersUserIdRolesRouteHandler)
  .openapi(getV4UsersUserIdRoomsRoute, getV4UsersUserIdRoomsRouteHandler)
  .openapi(getV4UsersUserIdUserAttributesRoute, getV4UsersUserIdUserAttributesRouteHandler)
  .openapi(postV4UsersUserIdUserAttributesRoute, postV4UsersUserIdUserAttributesRouteHandler)
  .openapi(putV4UsersUserIdUserAttributesRoute, putV4UsersUserIdUserAttributesRouteHandler)
  .openapi(
    deleteV4UsersUserIdUserAttributesKeyRoute,
    deleteV4UsersUserIdUserAttributesKeyRouteHandler,
  )

export default app
