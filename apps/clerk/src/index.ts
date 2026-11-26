import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPublicInterstitialRoute,
  getJwksRoute,
  getClientsRoute,
  postClientsVerifyRoute,
  getClientsClientIdRoute,
  postClientsClientIdRevokeRoute,
  postEmailAddressesRoute,
  getEmailAddressesEmailAddressIdRoute,
  deleteEmailAddressesEmailAddressIdRoute,
  patchEmailAddressesEmailAddressIdRoute,
  postEmailAddressesEmailAddressIdPrepareVerificationRoute,
  postEmailAddressesEmailAddressIdAttemptVerificationRoute,
  putUsersUserIdEmailAddressRoute,
  postPhoneNumbersRoute,
  getPhoneNumbersPhoneNumberIdRoute,
  deletePhoneNumbersPhoneNumberIdRoute,
  patchPhoneNumbersPhoneNumberIdRoute,
  postPhoneNumbersPhoneNumberIdPrepareVerificationRoute,
  postPhoneNumbersPhoneNumberIdAttemptVerificationRoute,
  putUsersUserIdPhoneNumberRoute,
  getSessionsRoute,
  postSessionsRoute,
  getSessionsSessionIdRoute,
  patchSessionsSessionIdRoute,
  postSessionsSessionIdRefreshRoute,
  getSessionsSessionIdReverificationsReverificationIdRoute,
  postSessionsSessionIdRevokeRoute,
  postSessionsSessionIdTokensRoute,
  postSessionsSessionIdTokensTemplateNameRoute,
  getTemplatesTemplateTypeRoute,
  getTemplatesTemplateTypeSlugRoute,
  putTemplatesTemplateTypeSlugRoute,
  postTemplatesTemplateTypeSlugRevertRoute,
  postTemplatesTemplateTypeSlugPreviewRoute,
  postTemplatesTemplateTypeSlugToggleDeliveryRoute,
  getUsersRoute,
  postUsersRoute,
  getUsersCountRoute,
  getUsersUserIdRoute,
  patchUsersUserIdRoute,
  deleteUsersUserIdRoute,
  postUsersUserIdBanRoute,
  postUsersUserIdUnbanRoute,
  postUsersBanRoute,
  postUsersUnbanRoute,
  postUsersUserIdLockRoute,
  postUsersUserIdUnlockRoute,
  postUsersUserIdMergeRoute,
  postUsersUserIdProfileImageRoute,
  deleteUsersUserIdProfileImageRoute,
  patchUsersUserIdMetadataRoute,
  putUsersUserIdMetadataRoute,
  getUsersUserIdBillingSubscriptionRoute,
  getUsersUserIdBillingCreditsRoute,
  postUsersUserIdBillingCreditsRoute,
  getUsersUserIdOauthAccessTokensProviderRoute,
  getUsersUserIdOrganizationMembershipsRoute,
  getUsersUserIdOrganizationInvitationsRoute,
  postUsersUserIdRemovePasswordRoute,
  postUsersUserIdVerifyPasswordRoute,
  postUsersUserIdVerifyTotpRoute,
  deleteUsersUserIdMfaRoute,
  deleteUsersUserIdBackupCodeRoute,
  deleteUsersUserIdPasskeysPasskeyIdentificationIdRoute,
  getUsersUserIdTrustedDevicesRoute,
  deleteUsersUserIdTrustedDevicesTrustedDeviceIdRoute,
  deleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdRoute,
  deleteUsersUserIdTotpRoute,
  deleteUsersUserIdExternalAccountsExternalAccountIdRoute,
  postInvitationsRoute,
  getInvitationsRoute,
  postInvitationsBulkRoute,
  deleteInvitationsInvitationIdRoute,
  postInvitationsInvitationIdRevokeRoute,
  getOrganizationInvitationsRoute,
  getAllowlistIdentifiersRoute,
  postAllowlistIdentifiersRoute,
  deleteAllowlistIdentifiersIdentifierIdRoute,
  getBlocklistIdentifiersRoute,
  postBlocklistIdentifiersRoute,
  deleteBlocklistIdentifiersIdentifierIdRoute,
  patchBetaFeaturesInstanceSettingsRoute,
  putBetaFeaturesDomainRoute,
  postActorTokensRoute,
  postActorTokensActorTokenIdRevokeRoute,
  getDomainsRoute,
  postDomainsRoute,
  deleteDomainsDomainIdRoute,
  patchDomainsDomainIdRoute,
  getInstanceRoute,
  patchInstanceRoute,
  patchInstanceRestrictionsRoute,
  getInstanceProtectRoute,
  patchInstanceProtectRoute,
  getInstanceCommunicationRoute,
  patchInstanceCommunicationRoute,
  getInstanceOauthApplicationSettingsRoute,
  patchInstanceOauthApplicationSettingsRoute,
  postInstanceChangeDomainRoute,
  getInstanceOrganizationSettingsRoute,
  patchInstanceOrganizationSettingsRoute,
  postWebhooksSvixRoute,
  deleteWebhooksSvixRoute,
  postWebhooksSvixUrlRoute,
  getJwtTemplatesRoute,
  postJwtTemplatesRoute,
  getJwtTemplatesTemplateIdRoute,
  patchJwtTemplatesTemplateIdRoute,
  deleteJwtTemplatesTemplateIdRoute,
  getMachinesRoute,
  postMachinesRoute,
  getMachinesMachineIdRoute,
  patchMachinesMachineIdRoute,
  deleteMachinesMachineIdRoute,
  getMachinesMachineIdSecretKeyRoute,
  postMachinesMachineIdSecretKeyRotateRoute,
  postMachinesMachineIdScopesRoute,
  deleteMachinesMachineIdScopesOtherMachineIdRoute,
  getOrganizationsRoute,
  postOrganizationsRoute,
  getOrganizationsOrganizationIdRoute,
  patchOrganizationsOrganizationIdRoute,
  deleteOrganizationsOrganizationIdRoute,
  patchOrganizationsOrganizationIdMetadataRoute,
  putOrganizationsOrganizationIdMetadataRoute,
  putOrganizationsOrganizationIdLogoRoute,
  deleteOrganizationsOrganizationIdLogoRoute,
  getOrganizationsOrganizationIdBillingSubscriptionRoute,
  getOrganizationsOrganizationIdBillingCreditsRoute,
  postOrganizationsOrganizationIdBillingCreditsRoute,
  postOrganizationsOrganizationIdInvitationsRoute,
  getOrganizationsOrganizationIdInvitationsRoute,
  postOrganizationsOrganizationIdInvitationsBulkRoute,
  getOrganizationsOrganizationIdInvitationsPendingRoute,
  getOrganizationsOrganizationIdInvitationsInvitationIdRoute,
  postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRoute,
  getOrganizationRolesRoute,
  postOrganizationRolesRoute,
  getOrganizationRolesOrganizationRoleIdRoute,
  patchOrganizationRolesOrganizationRoleIdRoute,
  deleteOrganizationRolesOrganizationRoleIdRoute,
  postOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute,
  deleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute,
  postOrganizationsOrganizationIdMembershipsRoute,
  getOrganizationsOrganizationIdMembershipsRoute,
  patchOrganizationsOrganizationIdMembershipsUserIdRoute,
  deleteOrganizationsOrganizationIdMembershipsUserIdRoute,
  patchOrganizationsOrganizationIdMembershipsUserIdMetadataRoute,
  postOrganizationsOrganizationIdDomainsRoute,
  getOrganizationsOrganizationIdDomainsRoute,
  patchOrganizationsOrganizationIdDomainsDomainIdRoute,
  deleteOrganizationsOrganizationIdDomainsDomainIdRoute,
  postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRoute,
  getOrganizationDomainsRoute,
  postProxyChecksRoute,
  getRedirectUrlsRoute,
  postRedirectUrlsRoute,
  getRedirectUrlsIdRoute,
  deleteRedirectUrlsIdRoute,
  postSignInTokensRoute,
  postSignInTokensSignInTokenIdRevokeRoute,
  getSignUpsIdRoute,
  patchSignUpsIdRoute,
  getOauthApplicationsRoute,
  postOauthApplicationsRoute,
  getOauthApplicationsOauthApplicationIdRoute,
  patchOauthApplicationsOauthApplicationIdRoute,
  deleteOauthApplicationsOauthApplicationIdRoute,
  putOauthApplicationsOauthApplicationIdLogoRoute,
  postOauthApplicationsOauthApplicationIdRotateSecretRoute,
  postOauthApplicationsOauthApplicationIdRevokeTokenRoute,
  getSamlConnectionsRoute,
  postSamlConnectionsRoute,
  getSamlConnectionsSamlConnectionIdRoute,
  patchSamlConnectionsSamlConnectionIdRoute,
  deleteSamlConnectionsSamlConnectionIdRoute,
  getEnterpriseConnectionsRoute,
  postEnterpriseConnectionsRoute,
  getEnterpriseConnectionsEnterpriseConnectionIdRoute,
  patchEnterpriseConnectionsEnterpriseConnectionIdRoute,
  deleteEnterpriseConnectionsEnterpriseConnectionIdRoute,
  getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute,
  postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute,
  postTestingTokensRoute,
  getOrganizationMembershipsRoute,
  getWaitlistEntriesRoute,
  postWaitlistEntriesRoute,
  deleteWaitlistEntriesWaitlistEntryIdRoute,
  postWaitlistEntriesWaitlistEntryIdInviteRoute,
  postWaitlistEntriesWaitlistEntryIdRejectRoute,
  getCommercePlansRoute,
  getCommerceSubscriptionItemsRoute,
  deleteCommerceSubscriptionItemsSubscriptionItemIdRoute,
  postBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialRoute,
  postBillingSubscriptionItemsSubscriptionItemIdPriceTransitionRoute,
  postBillingSubscriptionItemsSubscriptionItemIdDiscountsRoute,
  deleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdRoute,
  getOrganizationPermissionsRoute,
  postOrganizationPermissionsRoute,
  getOrganizationPermissionsPermissionIdRoute,
  patchOrganizationPermissionsPermissionIdRoute,
  deleteOrganizationPermissionsPermissionIdRoute,
  getRoleSetsRoute,
  postRoleSetsRoute,
  getRoleSetsRoleSetKeyOrIdRoute,
  patchRoleSetsRoleSetKeyOrIdRoute,
  postRoleSetsRoleSetKeyOrIdReplaceRoute,
  postRoleSetsRoleSetKeyOrIdRolesRoute,
  postRoleSetsRoleSetKeyOrIdRolesReplaceRoute,
  getLogsRoute,
  getLogsSchemasRoute,
  getLogsTypesRoute,
  getLogsGroupsGroupIdEventsRoute,
  getLogsEventTimeAndIdRoute,
  postAdminPortalLinkTokensRoute,
  postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRoute,
  postApiKeysRoute,
  getApiKeysRoute,
  getApiKeysApiKeyIDRoute,
  patchApiKeysApiKeyIDRoute,
  deleteApiKeysApiKeyIDRoute,
  getApiKeysApiKeyIDSecretRoute,
  postApiKeysApiKeyIDRevokeRoute,
  postApiKeysVerifyRoute,
  postM2mTokensRoute,
  getM2mTokensRoute,
  postM2mTokensM2mTokenIdRevokeRoute,
  postM2mTokensVerifyRoute,
  postOauthApplicationsAccessTokensVerifyRoute,
} from './routes'
import {
  getPublicInterstitialRouteHandler,
  getJwksRouteHandler,
  getClientsRouteHandler,
  postClientsVerifyRouteHandler,
  getClientsClientIdRouteHandler,
  postClientsClientIdRevokeRouteHandler,
  postEmailAddressesRouteHandler,
  getEmailAddressesEmailAddressIdRouteHandler,
  deleteEmailAddressesEmailAddressIdRouteHandler,
  patchEmailAddressesEmailAddressIdRouteHandler,
  postEmailAddressesEmailAddressIdPrepareVerificationRouteHandler,
  postEmailAddressesEmailAddressIdAttemptVerificationRouteHandler,
  putUsersUserIdEmailAddressRouteHandler,
  postPhoneNumbersRouteHandler,
  getPhoneNumbersPhoneNumberIdRouteHandler,
  deletePhoneNumbersPhoneNumberIdRouteHandler,
  patchPhoneNumbersPhoneNumberIdRouteHandler,
  postPhoneNumbersPhoneNumberIdPrepareVerificationRouteHandler,
  postPhoneNumbersPhoneNumberIdAttemptVerificationRouteHandler,
  putUsersUserIdPhoneNumberRouteHandler,
  getSessionsRouteHandler,
  postSessionsRouteHandler,
  getSessionsSessionIdRouteHandler,
  patchSessionsSessionIdRouteHandler,
  postSessionsSessionIdRefreshRouteHandler,
  getSessionsSessionIdReverificationsReverificationIdRouteHandler,
  postSessionsSessionIdRevokeRouteHandler,
  postSessionsSessionIdTokensRouteHandler,
  postSessionsSessionIdTokensTemplateNameRouteHandler,
  getTemplatesTemplateTypeRouteHandler,
  getTemplatesTemplateTypeSlugRouteHandler,
  putTemplatesTemplateTypeSlugRouteHandler,
  postTemplatesTemplateTypeSlugRevertRouteHandler,
  postTemplatesTemplateTypeSlugPreviewRouteHandler,
  postTemplatesTemplateTypeSlugToggleDeliveryRouteHandler,
  getUsersRouteHandler,
  postUsersRouteHandler,
  getUsersCountRouteHandler,
  getUsersUserIdRouteHandler,
  patchUsersUserIdRouteHandler,
  deleteUsersUserIdRouteHandler,
  postUsersUserIdBanRouteHandler,
  postUsersUserIdUnbanRouteHandler,
  postUsersBanRouteHandler,
  postUsersUnbanRouteHandler,
  postUsersUserIdLockRouteHandler,
  postUsersUserIdUnlockRouteHandler,
  postUsersUserIdMergeRouteHandler,
  postUsersUserIdProfileImageRouteHandler,
  deleteUsersUserIdProfileImageRouteHandler,
  patchUsersUserIdMetadataRouteHandler,
  putUsersUserIdMetadataRouteHandler,
  getUsersUserIdBillingSubscriptionRouteHandler,
  getUsersUserIdBillingCreditsRouteHandler,
  postUsersUserIdBillingCreditsRouteHandler,
  getUsersUserIdOauthAccessTokensProviderRouteHandler,
  getUsersUserIdOrganizationMembershipsRouteHandler,
  getUsersUserIdOrganizationInvitationsRouteHandler,
  postUsersUserIdRemovePasswordRouteHandler,
  postUsersUserIdVerifyPasswordRouteHandler,
  postUsersUserIdVerifyTotpRouteHandler,
  deleteUsersUserIdMfaRouteHandler,
  deleteUsersUserIdBackupCodeRouteHandler,
  deleteUsersUserIdPasskeysPasskeyIdentificationIdRouteHandler,
  getUsersUserIdTrustedDevicesRouteHandler,
  deleteUsersUserIdTrustedDevicesTrustedDeviceIdRouteHandler,
  deleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdRouteHandler,
  deleteUsersUserIdTotpRouteHandler,
  deleteUsersUserIdExternalAccountsExternalAccountIdRouteHandler,
  postInvitationsRouteHandler,
  getInvitationsRouteHandler,
  postInvitationsBulkRouteHandler,
  deleteInvitationsInvitationIdRouteHandler,
  postInvitationsInvitationIdRevokeRouteHandler,
  getOrganizationInvitationsRouteHandler,
  getAllowlistIdentifiersRouteHandler,
  postAllowlistIdentifiersRouteHandler,
  deleteAllowlistIdentifiersIdentifierIdRouteHandler,
  getBlocklistIdentifiersRouteHandler,
  postBlocklistIdentifiersRouteHandler,
  deleteBlocklistIdentifiersIdentifierIdRouteHandler,
  patchBetaFeaturesInstanceSettingsRouteHandler,
  putBetaFeaturesDomainRouteHandler,
  postActorTokensRouteHandler,
  postActorTokensActorTokenIdRevokeRouteHandler,
  getDomainsRouteHandler,
  postDomainsRouteHandler,
  deleteDomainsDomainIdRouteHandler,
  patchDomainsDomainIdRouteHandler,
  getInstanceRouteHandler,
  patchInstanceRouteHandler,
  patchInstanceRestrictionsRouteHandler,
  getInstanceProtectRouteHandler,
  patchInstanceProtectRouteHandler,
  getInstanceCommunicationRouteHandler,
  patchInstanceCommunicationRouteHandler,
  getInstanceOauthApplicationSettingsRouteHandler,
  patchInstanceOauthApplicationSettingsRouteHandler,
  postInstanceChangeDomainRouteHandler,
  getInstanceOrganizationSettingsRouteHandler,
  patchInstanceOrganizationSettingsRouteHandler,
  postWebhooksSvixRouteHandler,
  deleteWebhooksSvixRouteHandler,
  postWebhooksSvixUrlRouteHandler,
  getJwtTemplatesRouteHandler,
  postJwtTemplatesRouteHandler,
  getJwtTemplatesTemplateIdRouteHandler,
  patchJwtTemplatesTemplateIdRouteHandler,
  deleteJwtTemplatesTemplateIdRouteHandler,
  getMachinesRouteHandler,
  postMachinesRouteHandler,
  getMachinesMachineIdRouteHandler,
  patchMachinesMachineIdRouteHandler,
  deleteMachinesMachineIdRouteHandler,
  getMachinesMachineIdSecretKeyRouteHandler,
  postMachinesMachineIdSecretKeyRotateRouteHandler,
  postMachinesMachineIdScopesRouteHandler,
  deleteMachinesMachineIdScopesOtherMachineIdRouteHandler,
  getOrganizationsRouteHandler,
  postOrganizationsRouteHandler,
  getOrganizationsOrganizationIdRouteHandler,
  patchOrganizationsOrganizationIdRouteHandler,
  deleteOrganizationsOrganizationIdRouteHandler,
  patchOrganizationsOrganizationIdMetadataRouteHandler,
  putOrganizationsOrganizationIdMetadataRouteHandler,
  putOrganizationsOrganizationIdLogoRouteHandler,
  deleteOrganizationsOrganizationIdLogoRouteHandler,
  getOrganizationsOrganizationIdBillingSubscriptionRouteHandler,
  getOrganizationsOrganizationIdBillingCreditsRouteHandler,
  postOrganizationsOrganizationIdBillingCreditsRouteHandler,
  postOrganizationsOrganizationIdInvitationsRouteHandler,
  getOrganizationsOrganizationIdInvitationsRouteHandler,
  postOrganizationsOrganizationIdInvitationsBulkRouteHandler,
  getOrganizationsOrganizationIdInvitationsPendingRouteHandler,
  getOrganizationsOrganizationIdInvitationsInvitationIdRouteHandler,
  postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRouteHandler,
  getOrganizationRolesRouteHandler,
  postOrganizationRolesRouteHandler,
  getOrganizationRolesOrganizationRoleIdRouteHandler,
  patchOrganizationRolesOrganizationRoleIdRouteHandler,
  deleteOrganizationRolesOrganizationRoleIdRouteHandler,
  postOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRouteHandler,
  deleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRouteHandler,
  postOrganizationsOrganizationIdMembershipsRouteHandler,
  getOrganizationsOrganizationIdMembershipsRouteHandler,
  patchOrganizationsOrganizationIdMembershipsUserIdRouteHandler,
  deleteOrganizationsOrganizationIdMembershipsUserIdRouteHandler,
  patchOrganizationsOrganizationIdMembershipsUserIdMetadataRouteHandler,
  postOrganizationsOrganizationIdDomainsRouteHandler,
  getOrganizationsOrganizationIdDomainsRouteHandler,
  patchOrganizationsOrganizationIdDomainsDomainIdRouteHandler,
  deleteOrganizationsOrganizationIdDomainsDomainIdRouteHandler,
  postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRouteHandler,
  getOrganizationDomainsRouteHandler,
  postProxyChecksRouteHandler,
  getRedirectUrlsRouteHandler,
  postRedirectUrlsRouteHandler,
  getRedirectUrlsIdRouteHandler,
  deleteRedirectUrlsIdRouteHandler,
  postSignInTokensRouteHandler,
  postSignInTokensSignInTokenIdRevokeRouteHandler,
  getSignUpsIdRouteHandler,
  patchSignUpsIdRouteHandler,
  getOauthApplicationsRouteHandler,
  postOauthApplicationsRouteHandler,
  getOauthApplicationsOauthApplicationIdRouteHandler,
  patchOauthApplicationsOauthApplicationIdRouteHandler,
  deleteOauthApplicationsOauthApplicationIdRouteHandler,
  putOauthApplicationsOauthApplicationIdLogoRouteHandler,
  postOauthApplicationsOauthApplicationIdRotateSecretRouteHandler,
  postOauthApplicationsOauthApplicationIdRevokeTokenRouteHandler,
  getSamlConnectionsRouteHandler,
  postSamlConnectionsRouteHandler,
  getSamlConnectionsSamlConnectionIdRouteHandler,
  patchSamlConnectionsSamlConnectionIdRouteHandler,
  deleteSamlConnectionsSamlConnectionIdRouteHandler,
  getEnterpriseConnectionsRouteHandler,
  postEnterpriseConnectionsRouteHandler,
  getEnterpriseConnectionsEnterpriseConnectionIdRouteHandler,
  patchEnterpriseConnectionsEnterpriseConnectionIdRouteHandler,
  deleteEnterpriseConnectionsEnterpriseConnectionIdRouteHandler,
  getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRouteHandler,
  postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRouteHandler,
  postTestingTokensRouteHandler,
  getOrganizationMembershipsRouteHandler,
  getWaitlistEntriesRouteHandler,
  postWaitlistEntriesRouteHandler,
  deleteWaitlistEntriesWaitlistEntryIdRouteHandler,
  postWaitlistEntriesWaitlistEntryIdInviteRouteHandler,
  postWaitlistEntriesWaitlistEntryIdRejectRouteHandler,
  getCommercePlansRouteHandler,
  getCommerceSubscriptionItemsRouteHandler,
  deleteCommerceSubscriptionItemsSubscriptionItemIdRouteHandler,
  postBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialRouteHandler,
  postBillingSubscriptionItemsSubscriptionItemIdPriceTransitionRouteHandler,
  postBillingSubscriptionItemsSubscriptionItemIdDiscountsRouteHandler,
  deleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdRouteHandler,
  getOrganizationPermissionsRouteHandler,
  postOrganizationPermissionsRouteHandler,
  getOrganizationPermissionsPermissionIdRouteHandler,
  patchOrganizationPermissionsPermissionIdRouteHandler,
  deleteOrganizationPermissionsPermissionIdRouteHandler,
  getRoleSetsRouteHandler,
  postRoleSetsRouteHandler,
  getRoleSetsRoleSetKeyOrIdRouteHandler,
  patchRoleSetsRoleSetKeyOrIdRouteHandler,
  postRoleSetsRoleSetKeyOrIdReplaceRouteHandler,
  postRoleSetsRoleSetKeyOrIdRolesRouteHandler,
  postRoleSetsRoleSetKeyOrIdRolesReplaceRouteHandler,
  getLogsRouteHandler,
  getLogsSchemasRouteHandler,
  getLogsTypesRouteHandler,
  getLogsGroupsGroupIdEventsRouteHandler,
  getLogsEventTimeAndIdRouteHandler,
  postAdminPortalLinkTokensRouteHandler,
  postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRouteHandler,
  postApiKeysRouteHandler,
  getApiKeysRouteHandler,
  getApiKeysApiKeyIDRouteHandler,
  patchApiKeysApiKeyIDRouteHandler,
  deleteApiKeysApiKeyIDRouteHandler,
  getApiKeysApiKeyIDSecretRouteHandler,
  postApiKeysApiKeyIDRevokeRouteHandler,
  postApiKeysVerifyRouteHandler,
  postM2mTokensRouteHandler,
  getM2mTokensRouteHandler,
  postM2mTokensM2mTokenIdRevokeRouteHandler,
  postM2mTokensVerifyRouteHandler,
  postOauthApplicationsAccessTokensVerifyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPublicInterstitialRoute, getPublicInterstitialRouteHandler)
  .openapi(getJwksRoute, getJwksRouteHandler)
  .openapi(getClientsRoute, getClientsRouteHandler)
  .openapi(postClientsVerifyRoute, postClientsVerifyRouteHandler)
  .openapi(getClientsClientIdRoute, getClientsClientIdRouteHandler)
  .openapi(postClientsClientIdRevokeRoute, postClientsClientIdRevokeRouteHandler)
  .openapi(postEmailAddressesRoute, postEmailAddressesRouteHandler)
  .openapi(getEmailAddressesEmailAddressIdRoute, getEmailAddressesEmailAddressIdRouteHandler)
  .openapi(deleteEmailAddressesEmailAddressIdRoute, deleteEmailAddressesEmailAddressIdRouteHandler)
  .openapi(patchEmailAddressesEmailAddressIdRoute, patchEmailAddressesEmailAddressIdRouteHandler)
  .openapi(
    postEmailAddressesEmailAddressIdPrepareVerificationRoute,
    postEmailAddressesEmailAddressIdPrepareVerificationRouteHandler,
  )
  .openapi(
    postEmailAddressesEmailAddressIdAttemptVerificationRoute,
    postEmailAddressesEmailAddressIdAttemptVerificationRouteHandler,
  )
  .openapi(putUsersUserIdEmailAddressRoute, putUsersUserIdEmailAddressRouteHandler)
  .openapi(postPhoneNumbersRoute, postPhoneNumbersRouteHandler)
  .openapi(getPhoneNumbersPhoneNumberIdRoute, getPhoneNumbersPhoneNumberIdRouteHandler)
  .openapi(deletePhoneNumbersPhoneNumberIdRoute, deletePhoneNumbersPhoneNumberIdRouteHandler)
  .openapi(patchPhoneNumbersPhoneNumberIdRoute, patchPhoneNumbersPhoneNumberIdRouteHandler)
  .openapi(
    postPhoneNumbersPhoneNumberIdPrepareVerificationRoute,
    postPhoneNumbersPhoneNumberIdPrepareVerificationRouteHandler,
  )
  .openapi(
    postPhoneNumbersPhoneNumberIdAttemptVerificationRoute,
    postPhoneNumbersPhoneNumberIdAttemptVerificationRouteHandler,
  )
  .openapi(putUsersUserIdPhoneNumberRoute, putUsersUserIdPhoneNumberRouteHandler)
  .openapi(getSessionsRoute, getSessionsRouteHandler)
  .openapi(postSessionsRoute, postSessionsRouteHandler)
  .openapi(getSessionsSessionIdRoute, getSessionsSessionIdRouteHandler)
  .openapi(patchSessionsSessionIdRoute, patchSessionsSessionIdRouteHandler)
  .openapi(postSessionsSessionIdRefreshRoute, postSessionsSessionIdRefreshRouteHandler)
  .openapi(
    getSessionsSessionIdReverificationsReverificationIdRoute,
    getSessionsSessionIdReverificationsReverificationIdRouteHandler,
  )
  .openapi(postSessionsSessionIdRevokeRoute, postSessionsSessionIdRevokeRouteHandler)
  .openapi(postSessionsSessionIdTokensRoute, postSessionsSessionIdTokensRouteHandler)
  .openapi(
    postSessionsSessionIdTokensTemplateNameRoute,
    postSessionsSessionIdTokensTemplateNameRouteHandler,
  )
  .openapi(getTemplatesTemplateTypeRoute, getTemplatesTemplateTypeRouteHandler)
  .openapi(getTemplatesTemplateTypeSlugRoute, getTemplatesTemplateTypeSlugRouteHandler)
  .openapi(putTemplatesTemplateTypeSlugRoute, putTemplatesTemplateTypeSlugRouteHandler)
  .openapi(
    postTemplatesTemplateTypeSlugRevertRoute,
    postTemplatesTemplateTypeSlugRevertRouteHandler,
  )
  .openapi(
    postTemplatesTemplateTypeSlugPreviewRoute,
    postTemplatesTemplateTypeSlugPreviewRouteHandler,
  )
  .openapi(
    postTemplatesTemplateTypeSlugToggleDeliveryRoute,
    postTemplatesTemplateTypeSlugToggleDeliveryRouteHandler,
  )
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersCountRoute, getUsersCountRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(patchUsersUserIdRoute, patchUsersUserIdRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(postUsersUserIdBanRoute, postUsersUserIdBanRouteHandler)
  .openapi(postUsersUserIdUnbanRoute, postUsersUserIdUnbanRouteHandler)
  .openapi(postUsersBanRoute, postUsersBanRouteHandler)
  .openapi(postUsersUnbanRoute, postUsersUnbanRouteHandler)
  .openapi(postUsersUserIdLockRoute, postUsersUserIdLockRouteHandler)
  .openapi(postUsersUserIdUnlockRoute, postUsersUserIdUnlockRouteHandler)
  .openapi(postUsersUserIdMergeRoute, postUsersUserIdMergeRouteHandler)
  .openapi(postUsersUserIdProfileImageRoute, postUsersUserIdProfileImageRouteHandler)
  .openapi(deleteUsersUserIdProfileImageRoute, deleteUsersUserIdProfileImageRouteHandler)
  .openapi(patchUsersUserIdMetadataRoute, patchUsersUserIdMetadataRouteHandler)
  .openapi(putUsersUserIdMetadataRoute, putUsersUserIdMetadataRouteHandler)
  .openapi(getUsersUserIdBillingSubscriptionRoute, getUsersUserIdBillingSubscriptionRouteHandler)
  .openapi(getUsersUserIdBillingCreditsRoute, getUsersUserIdBillingCreditsRouteHandler)
  .openapi(postUsersUserIdBillingCreditsRoute, postUsersUserIdBillingCreditsRouteHandler)
  .openapi(
    getUsersUserIdOauthAccessTokensProviderRoute,
    getUsersUserIdOauthAccessTokensProviderRouteHandler,
  )
  .openapi(
    getUsersUserIdOrganizationMembershipsRoute,
    getUsersUserIdOrganizationMembershipsRouteHandler,
  )
  .openapi(
    getUsersUserIdOrganizationInvitationsRoute,
    getUsersUserIdOrganizationInvitationsRouteHandler,
  )
  .openapi(postUsersUserIdRemovePasswordRoute, postUsersUserIdRemovePasswordRouteHandler)
  .openapi(postUsersUserIdVerifyPasswordRoute, postUsersUserIdVerifyPasswordRouteHandler)
  .openapi(postUsersUserIdVerifyTotpRoute, postUsersUserIdVerifyTotpRouteHandler)
  .openapi(deleteUsersUserIdMfaRoute, deleteUsersUserIdMfaRouteHandler)
  .openapi(deleteUsersUserIdBackupCodeRoute, deleteUsersUserIdBackupCodeRouteHandler)
  .openapi(
    deleteUsersUserIdPasskeysPasskeyIdentificationIdRoute,
    deleteUsersUserIdPasskeysPasskeyIdentificationIdRouteHandler,
  )
  .openapi(getUsersUserIdTrustedDevicesRoute, getUsersUserIdTrustedDevicesRouteHandler)
  .openapi(
    deleteUsersUserIdTrustedDevicesTrustedDeviceIdRoute,
    deleteUsersUserIdTrustedDevicesTrustedDeviceIdRouteHandler,
  )
  .openapi(
    deleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdRoute,
    deleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdRouteHandler,
  )
  .openapi(deleteUsersUserIdTotpRoute, deleteUsersUserIdTotpRouteHandler)
  .openapi(
    deleteUsersUserIdExternalAccountsExternalAccountIdRoute,
    deleteUsersUserIdExternalAccountsExternalAccountIdRouteHandler,
  )
  .openapi(postInvitationsRoute, postInvitationsRouteHandler)
  .openapi(getInvitationsRoute, getInvitationsRouteHandler)
  .openapi(postInvitationsBulkRoute, postInvitationsBulkRouteHandler)
  .openapi(deleteInvitationsInvitationIdRoute, deleteInvitationsInvitationIdRouteHandler)
  .openapi(postInvitationsInvitationIdRevokeRoute, postInvitationsInvitationIdRevokeRouteHandler)
  .openapi(getOrganizationInvitationsRoute, getOrganizationInvitationsRouteHandler)
  .openapi(getAllowlistIdentifiersRoute, getAllowlistIdentifiersRouteHandler)
  .openapi(postAllowlistIdentifiersRoute, postAllowlistIdentifiersRouteHandler)
  .openapi(
    deleteAllowlistIdentifiersIdentifierIdRoute,
    deleteAllowlistIdentifiersIdentifierIdRouteHandler,
  )
  .openapi(getBlocklistIdentifiersRoute, getBlocklistIdentifiersRouteHandler)
  .openapi(postBlocklistIdentifiersRoute, postBlocklistIdentifiersRouteHandler)
  .openapi(
    deleteBlocklistIdentifiersIdentifierIdRoute,
    deleteBlocklistIdentifiersIdentifierIdRouteHandler,
  )
  .openapi(patchBetaFeaturesInstanceSettingsRoute, patchBetaFeaturesInstanceSettingsRouteHandler)
  .openapi(putBetaFeaturesDomainRoute, putBetaFeaturesDomainRouteHandler)
  .openapi(postActorTokensRoute, postActorTokensRouteHandler)
  .openapi(postActorTokensActorTokenIdRevokeRoute, postActorTokensActorTokenIdRevokeRouteHandler)
  .openapi(getDomainsRoute, getDomainsRouteHandler)
  .openapi(postDomainsRoute, postDomainsRouteHandler)
  .openapi(deleteDomainsDomainIdRoute, deleteDomainsDomainIdRouteHandler)
  .openapi(patchDomainsDomainIdRoute, patchDomainsDomainIdRouteHandler)
  .openapi(getInstanceRoute, getInstanceRouteHandler)
  .openapi(patchInstanceRoute, patchInstanceRouteHandler)
  .openapi(patchInstanceRestrictionsRoute, patchInstanceRestrictionsRouteHandler)
  .openapi(getInstanceProtectRoute, getInstanceProtectRouteHandler)
  .openapi(patchInstanceProtectRoute, patchInstanceProtectRouteHandler)
  .openapi(getInstanceCommunicationRoute, getInstanceCommunicationRouteHandler)
  .openapi(patchInstanceCommunicationRoute, patchInstanceCommunicationRouteHandler)
  .openapi(
    getInstanceOauthApplicationSettingsRoute,
    getInstanceOauthApplicationSettingsRouteHandler,
  )
  .openapi(
    patchInstanceOauthApplicationSettingsRoute,
    patchInstanceOauthApplicationSettingsRouteHandler,
  )
  .openapi(postInstanceChangeDomainRoute, postInstanceChangeDomainRouteHandler)
  .openapi(getInstanceOrganizationSettingsRoute, getInstanceOrganizationSettingsRouteHandler)
  .openapi(patchInstanceOrganizationSettingsRoute, patchInstanceOrganizationSettingsRouteHandler)
  .openapi(postWebhooksSvixRoute, postWebhooksSvixRouteHandler)
  .openapi(deleteWebhooksSvixRoute, deleteWebhooksSvixRouteHandler)
  .openapi(postWebhooksSvixUrlRoute, postWebhooksSvixUrlRouteHandler)
  .openapi(getJwtTemplatesRoute, getJwtTemplatesRouteHandler)
  .openapi(postJwtTemplatesRoute, postJwtTemplatesRouteHandler)
  .openapi(getJwtTemplatesTemplateIdRoute, getJwtTemplatesTemplateIdRouteHandler)
  .openapi(patchJwtTemplatesTemplateIdRoute, patchJwtTemplatesTemplateIdRouteHandler)
  .openapi(deleteJwtTemplatesTemplateIdRoute, deleteJwtTemplatesTemplateIdRouteHandler)
  .openapi(getMachinesRoute, getMachinesRouteHandler)
  .openapi(postMachinesRoute, postMachinesRouteHandler)
  .openapi(getMachinesMachineIdRoute, getMachinesMachineIdRouteHandler)
  .openapi(patchMachinesMachineIdRoute, patchMachinesMachineIdRouteHandler)
  .openapi(deleteMachinesMachineIdRoute, deleteMachinesMachineIdRouteHandler)
  .openapi(getMachinesMachineIdSecretKeyRoute, getMachinesMachineIdSecretKeyRouteHandler)
  .openapi(
    postMachinesMachineIdSecretKeyRotateRoute,
    postMachinesMachineIdSecretKeyRotateRouteHandler,
  )
  .openapi(postMachinesMachineIdScopesRoute, postMachinesMachineIdScopesRouteHandler)
  .openapi(
    deleteMachinesMachineIdScopesOtherMachineIdRoute,
    deleteMachinesMachineIdScopesOtherMachineIdRouteHandler,
  )
  .openapi(getOrganizationsRoute, getOrganizationsRouteHandler)
  .openapi(postOrganizationsRoute, postOrganizationsRouteHandler)
  .openapi(getOrganizationsOrganizationIdRoute, getOrganizationsOrganizationIdRouteHandler)
  .openapi(patchOrganizationsOrganizationIdRoute, patchOrganizationsOrganizationIdRouteHandler)
  .openapi(deleteOrganizationsOrganizationIdRoute, deleteOrganizationsOrganizationIdRouteHandler)
  .openapi(
    patchOrganizationsOrganizationIdMetadataRoute,
    patchOrganizationsOrganizationIdMetadataRouteHandler,
  )
  .openapi(
    putOrganizationsOrganizationIdMetadataRoute,
    putOrganizationsOrganizationIdMetadataRouteHandler,
  )
  .openapi(putOrganizationsOrganizationIdLogoRoute, putOrganizationsOrganizationIdLogoRouteHandler)
  .openapi(
    deleteOrganizationsOrganizationIdLogoRoute,
    deleteOrganizationsOrganizationIdLogoRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdBillingSubscriptionRoute,
    getOrganizationsOrganizationIdBillingSubscriptionRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdBillingCreditsRoute,
    getOrganizationsOrganizationIdBillingCreditsRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdBillingCreditsRoute,
    postOrganizationsOrganizationIdBillingCreditsRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdInvitationsRoute,
    postOrganizationsOrganizationIdInvitationsRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdInvitationsRoute,
    getOrganizationsOrganizationIdInvitationsRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdInvitationsBulkRoute,
    postOrganizationsOrganizationIdInvitationsBulkRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdInvitationsPendingRoute,
    getOrganizationsOrganizationIdInvitationsPendingRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdInvitationsInvitationIdRoute,
    getOrganizationsOrganizationIdInvitationsInvitationIdRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRoute,
    postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRouteHandler,
  )
  .openapi(getOrganizationRolesRoute, getOrganizationRolesRouteHandler)
  .openapi(postOrganizationRolesRoute, postOrganizationRolesRouteHandler)
  .openapi(
    getOrganizationRolesOrganizationRoleIdRoute,
    getOrganizationRolesOrganizationRoleIdRouteHandler,
  )
  .openapi(
    patchOrganizationRolesOrganizationRoleIdRoute,
    patchOrganizationRolesOrganizationRoleIdRouteHandler,
  )
  .openapi(
    deleteOrganizationRolesOrganizationRoleIdRoute,
    deleteOrganizationRolesOrganizationRoleIdRouteHandler,
  )
  .openapi(
    postOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute,
    postOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRouteHandler,
  )
  .openapi(
    deleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute,
    deleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdMembershipsRoute,
    postOrganizationsOrganizationIdMembershipsRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdMembershipsRoute,
    getOrganizationsOrganizationIdMembershipsRouteHandler,
  )
  .openapi(
    patchOrganizationsOrganizationIdMembershipsUserIdRoute,
    patchOrganizationsOrganizationIdMembershipsUserIdRouteHandler,
  )
  .openapi(
    deleteOrganizationsOrganizationIdMembershipsUserIdRoute,
    deleteOrganizationsOrganizationIdMembershipsUserIdRouteHandler,
  )
  .openapi(
    patchOrganizationsOrganizationIdMembershipsUserIdMetadataRoute,
    patchOrganizationsOrganizationIdMembershipsUserIdMetadataRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdDomainsRoute,
    postOrganizationsOrganizationIdDomainsRouteHandler,
  )
  .openapi(
    getOrganizationsOrganizationIdDomainsRoute,
    getOrganizationsOrganizationIdDomainsRouteHandler,
  )
  .openapi(
    patchOrganizationsOrganizationIdDomainsDomainIdRoute,
    patchOrganizationsOrganizationIdDomainsDomainIdRouteHandler,
  )
  .openapi(
    deleteOrganizationsOrganizationIdDomainsDomainIdRoute,
    deleteOrganizationsOrganizationIdDomainsDomainIdRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRoute,
    postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRouteHandler,
  )
  .openapi(getOrganizationDomainsRoute, getOrganizationDomainsRouteHandler)
  .openapi(postProxyChecksRoute, postProxyChecksRouteHandler)
  .openapi(getRedirectUrlsRoute, getRedirectUrlsRouteHandler)
  .openapi(postRedirectUrlsRoute, postRedirectUrlsRouteHandler)
  .openapi(getRedirectUrlsIdRoute, getRedirectUrlsIdRouteHandler)
  .openapi(deleteRedirectUrlsIdRoute, deleteRedirectUrlsIdRouteHandler)
  .openapi(postSignInTokensRoute, postSignInTokensRouteHandler)
  .openapi(
    postSignInTokensSignInTokenIdRevokeRoute,
    postSignInTokensSignInTokenIdRevokeRouteHandler,
  )
  .openapi(getSignUpsIdRoute, getSignUpsIdRouteHandler)
  .openapi(patchSignUpsIdRoute, patchSignUpsIdRouteHandler)
  .openapi(getOauthApplicationsRoute, getOauthApplicationsRouteHandler)
  .openapi(postOauthApplicationsRoute, postOauthApplicationsRouteHandler)
  .openapi(
    getOauthApplicationsOauthApplicationIdRoute,
    getOauthApplicationsOauthApplicationIdRouteHandler,
  )
  .openapi(
    patchOauthApplicationsOauthApplicationIdRoute,
    patchOauthApplicationsOauthApplicationIdRouteHandler,
  )
  .openapi(
    deleteOauthApplicationsOauthApplicationIdRoute,
    deleteOauthApplicationsOauthApplicationIdRouteHandler,
  )
  .openapi(
    putOauthApplicationsOauthApplicationIdLogoRoute,
    putOauthApplicationsOauthApplicationIdLogoRouteHandler,
  )
  .openapi(
    postOauthApplicationsOauthApplicationIdRotateSecretRoute,
    postOauthApplicationsOauthApplicationIdRotateSecretRouteHandler,
  )
  .openapi(
    postOauthApplicationsOauthApplicationIdRevokeTokenRoute,
    postOauthApplicationsOauthApplicationIdRevokeTokenRouteHandler,
  )
  .openapi(getSamlConnectionsRoute, getSamlConnectionsRouteHandler)
  .openapi(postSamlConnectionsRoute, postSamlConnectionsRouteHandler)
  .openapi(getSamlConnectionsSamlConnectionIdRoute, getSamlConnectionsSamlConnectionIdRouteHandler)
  .openapi(
    patchSamlConnectionsSamlConnectionIdRoute,
    patchSamlConnectionsSamlConnectionIdRouteHandler,
  )
  .openapi(
    deleteSamlConnectionsSamlConnectionIdRoute,
    deleteSamlConnectionsSamlConnectionIdRouteHandler,
  )
  .openapi(getEnterpriseConnectionsRoute, getEnterpriseConnectionsRouteHandler)
  .openapi(postEnterpriseConnectionsRoute, postEnterpriseConnectionsRouteHandler)
  .openapi(
    getEnterpriseConnectionsEnterpriseConnectionIdRoute,
    getEnterpriseConnectionsEnterpriseConnectionIdRouteHandler,
  )
  .openapi(
    patchEnterpriseConnectionsEnterpriseConnectionIdRoute,
    patchEnterpriseConnectionsEnterpriseConnectionIdRouteHandler,
  )
  .openapi(
    deleteEnterpriseConnectionsEnterpriseConnectionIdRoute,
    deleteEnterpriseConnectionsEnterpriseConnectionIdRouteHandler,
  )
  .openapi(
    getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute,
    getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRouteHandler,
  )
  .openapi(
    postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute,
    postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRouteHandler,
  )
  .openapi(postTestingTokensRoute, postTestingTokensRouteHandler)
  .openapi(getOrganizationMembershipsRoute, getOrganizationMembershipsRouteHandler)
  .openapi(getWaitlistEntriesRoute, getWaitlistEntriesRouteHandler)
  .openapi(postWaitlistEntriesRoute, postWaitlistEntriesRouteHandler)
  .openapi(
    deleteWaitlistEntriesWaitlistEntryIdRoute,
    deleteWaitlistEntriesWaitlistEntryIdRouteHandler,
  )
  .openapi(
    postWaitlistEntriesWaitlistEntryIdInviteRoute,
    postWaitlistEntriesWaitlistEntryIdInviteRouteHandler,
  )
  .openapi(
    postWaitlistEntriesWaitlistEntryIdRejectRoute,
    postWaitlistEntriesWaitlistEntryIdRejectRouteHandler,
  )
  .openapi(getCommercePlansRoute, getCommercePlansRouteHandler)
  .openapi(getCommerceSubscriptionItemsRoute, getCommerceSubscriptionItemsRouteHandler)
  .openapi(
    deleteCommerceSubscriptionItemsSubscriptionItemIdRoute,
    deleteCommerceSubscriptionItemsSubscriptionItemIdRouteHandler,
  )
  .openapi(
    postBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialRoute,
    postBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialRouteHandler,
  )
  .openapi(
    postBillingSubscriptionItemsSubscriptionItemIdPriceTransitionRoute,
    postBillingSubscriptionItemsSubscriptionItemIdPriceTransitionRouteHandler,
  )
  .openapi(
    postBillingSubscriptionItemsSubscriptionItemIdDiscountsRoute,
    postBillingSubscriptionItemsSubscriptionItemIdDiscountsRouteHandler,
  )
  .openapi(
    deleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdRoute,
    deleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdRouteHandler,
  )
  .openapi(getOrganizationPermissionsRoute, getOrganizationPermissionsRouteHandler)
  .openapi(postOrganizationPermissionsRoute, postOrganizationPermissionsRouteHandler)
  .openapi(
    getOrganizationPermissionsPermissionIdRoute,
    getOrganizationPermissionsPermissionIdRouteHandler,
  )
  .openapi(
    patchOrganizationPermissionsPermissionIdRoute,
    patchOrganizationPermissionsPermissionIdRouteHandler,
  )
  .openapi(
    deleteOrganizationPermissionsPermissionIdRoute,
    deleteOrganizationPermissionsPermissionIdRouteHandler,
  )
  .openapi(getRoleSetsRoute, getRoleSetsRouteHandler)
  .openapi(postRoleSetsRoute, postRoleSetsRouteHandler)
  .openapi(getRoleSetsRoleSetKeyOrIdRoute, getRoleSetsRoleSetKeyOrIdRouteHandler)
  .openapi(patchRoleSetsRoleSetKeyOrIdRoute, patchRoleSetsRoleSetKeyOrIdRouteHandler)
  .openapi(postRoleSetsRoleSetKeyOrIdReplaceRoute, postRoleSetsRoleSetKeyOrIdReplaceRouteHandler)
  .openapi(postRoleSetsRoleSetKeyOrIdRolesRoute, postRoleSetsRoleSetKeyOrIdRolesRouteHandler)
  .openapi(
    postRoleSetsRoleSetKeyOrIdRolesReplaceRoute,
    postRoleSetsRoleSetKeyOrIdRolesReplaceRouteHandler,
  )
  .openapi(getLogsRoute, getLogsRouteHandler)
  .openapi(getLogsSchemasRoute, getLogsSchemasRouteHandler)
  .openapi(getLogsTypesRoute, getLogsTypesRouteHandler)
  .openapi(getLogsGroupsGroupIdEventsRoute, getLogsGroupsGroupIdEventsRouteHandler)
  .openapi(getLogsEventTimeAndIdRoute, getLogsEventTimeAndIdRouteHandler)
  .openapi(postAdminPortalLinkTokensRoute, postAdminPortalLinkTokensRouteHandler)
  .openapi(
    postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRoute,
    postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRouteHandler,
  )
  .openapi(postApiKeysRoute, postApiKeysRouteHandler)
  .openapi(getApiKeysRoute, getApiKeysRouteHandler)
  .openapi(getApiKeysApiKeyIDRoute, getApiKeysApiKeyIDRouteHandler)
  .openapi(patchApiKeysApiKeyIDRoute, patchApiKeysApiKeyIDRouteHandler)
  .openapi(deleteApiKeysApiKeyIDRoute, deleteApiKeysApiKeyIDRouteHandler)
  .openapi(getApiKeysApiKeyIDSecretRoute, getApiKeysApiKeyIDSecretRouteHandler)
  .openapi(postApiKeysApiKeyIDRevokeRoute, postApiKeysApiKeyIDRevokeRouteHandler)
  .openapi(postApiKeysVerifyRoute, postApiKeysVerifyRouteHandler)
  .openapi(postM2mTokensRoute, postM2mTokensRouteHandler)
  .openapi(getM2mTokensRoute, getM2mTokensRouteHandler)
  .openapi(postM2mTokensM2mTokenIdRevokeRoute, postM2mTokensM2mTokenIdRevokeRouteHandler)
  .openapi(postM2mTokensVerifyRoute, postM2mTokensVerifyRouteHandler)
  .openapi(
    postOauthApplicationsAccessTokensVerifyRoute,
    postOauthApplicationsAccessTokensVerifyRouteHandler,
  )

export default app
