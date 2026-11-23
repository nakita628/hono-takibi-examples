import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAllowlistIdentifiersIdentifierIdRoute,
  deleteApiKeysApiKeyIDRoute,
  deleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdRoute,
  deleteBlocklistIdentifiersIdentifierIdRoute,
  deleteCommerceSubscriptionItemsSubscriptionItemIdRoute,
  deleteDomainsDomainIdRoute,
  deleteEmailAddressesEmailAddressIdRoute,
  deleteEnterpriseConnectionsEnterpriseConnectionIdRoute,
  deleteInvitationsInvitationIdRoute,
  deleteJwtTemplatesTemplateIdRoute,
  deleteMachinesMachineIdRoute,
  deleteMachinesMachineIdScopesOtherMachineIdRoute,
  deleteOauthApplicationsOauthApplicationIdRoute,
  deleteOrganizationPermissionsPermissionIdRoute,
  deleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute,
  deleteOrganizationRolesOrganizationRoleIdRoute,
  deleteOrganizationsOrganizationIdDomainsDomainIdRoute,
  deleteOrganizationsOrganizationIdLogoRoute,
  deleteOrganizationsOrganizationIdMembershipsUserIdRoute,
  deleteOrganizationsOrganizationIdRoute,
  deletePhoneNumbersPhoneNumberIdRoute,
  deleteRedirectUrlsIdRoute,
  deleteSamlConnectionsSamlConnectionIdRoute,
  deleteUsersUserIdBackupCodeRoute,
  deleteUsersUserIdExternalAccountsExternalAccountIdRoute,
  deleteUsersUserIdMfaRoute,
  deleteUsersUserIdPasskeysPasskeyIdentificationIdRoute,
  deleteUsersUserIdProfileImageRoute,
  deleteUsersUserIdRoute,
  deleteUsersUserIdTotpRoute,
  deleteUsersUserIdTrustedDevicesTrustedDeviceIdRoute,
  deleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdRoute,
  deleteWaitlistEntriesWaitlistEntryIdRoute,
  deleteWebhooksSvixRoute,
  getAllowlistIdentifiersRoute,
  getApiKeysApiKeyIDRoute,
  getApiKeysApiKeyIDSecretRoute,
  getApiKeysRoute,
  getBlocklistIdentifiersRoute,
  getClientsClientIdRoute,
  getClientsRoute,
  getCommercePlansRoute,
  getCommerceSubscriptionItemsRoute,
  getDomainsRoute,
  getEmailAddressesEmailAddressIdRoute,
  getEnterpriseConnectionsEnterpriseConnectionIdRoute,
  getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute,
  getEnterpriseConnectionsRoute,
  getInstanceCommunicationRoute,
  getInstanceOauthApplicationSettingsRoute,
  getInstanceOrganizationSettingsRoute,
  getInstanceProtectRoute,
  getInstanceRoute,
  getInvitationsRoute,
  getJwksRoute,
  getJwtTemplatesRoute,
  getJwtTemplatesTemplateIdRoute,
  getLogsEventTimeAndIdRoute,
  getLogsGroupsGroupIdEventsRoute,
  getLogsRoute,
  getLogsSchemasRoute,
  getLogsTypesRoute,
  getM2mTokensRoute,
  getMachinesMachineIdRoute,
  getMachinesMachineIdSecretKeyRoute,
  getMachinesRoute,
  getOauthApplicationsOauthApplicationIdRoute,
  getOauthApplicationsRoute,
  getOrganizationDomainsRoute,
  getOrganizationInvitationsRoute,
  getOrganizationMembershipsRoute,
  getOrganizationPermissionsPermissionIdRoute,
  getOrganizationPermissionsRoute,
  getOrganizationRolesOrganizationRoleIdRoute,
  getOrganizationRolesRoute,
  getOrganizationsOrganizationIdBillingCreditsRoute,
  getOrganizationsOrganizationIdBillingSubscriptionRoute,
  getOrganizationsOrganizationIdDomainsRoute,
  getOrganizationsOrganizationIdInvitationsInvitationIdRoute,
  getOrganizationsOrganizationIdInvitationsPendingRoute,
  getOrganizationsOrganizationIdInvitationsRoute,
  getOrganizationsOrganizationIdMembershipsRoute,
  getOrganizationsOrganizationIdRoute,
  getOrganizationsRoute,
  getPhoneNumbersPhoneNumberIdRoute,
  getPublicInterstitialRoute,
  getRedirectUrlsIdRoute,
  getRedirectUrlsRoute,
  getRoleSetsRoleSetKeyOrIdRoute,
  getRoleSetsRoute,
  getSamlConnectionsRoute,
  getSamlConnectionsSamlConnectionIdRoute,
  getSessionsRoute,
  getSessionsSessionIdReverificationsReverificationIdRoute,
  getSessionsSessionIdRoute,
  getSignUpsIdRoute,
  getTemplatesTemplateTypeRoute,
  getTemplatesTemplateTypeSlugRoute,
  getUsersCountRoute,
  getUsersRoute,
  getUsersUserIdBillingCreditsRoute,
  getUsersUserIdBillingSubscriptionRoute,
  getUsersUserIdOauthAccessTokensProviderRoute,
  getUsersUserIdOrganizationInvitationsRoute,
  getUsersUserIdOrganizationMembershipsRoute,
  getUsersUserIdRoute,
  getUsersUserIdTrustedDevicesRoute,
  getWaitlistEntriesRoute,
  patchApiKeysApiKeyIDRoute,
  patchBetaFeaturesInstanceSettingsRoute,
  patchDomainsDomainIdRoute,
  patchEmailAddressesEmailAddressIdRoute,
  patchEnterpriseConnectionsEnterpriseConnectionIdRoute,
  patchInstanceCommunicationRoute,
  patchInstanceOauthApplicationSettingsRoute,
  patchInstanceOrganizationSettingsRoute,
  patchInstanceProtectRoute,
  patchInstanceRestrictionsRoute,
  patchInstanceRoute,
  patchJwtTemplatesTemplateIdRoute,
  patchMachinesMachineIdRoute,
  patchOauthApplicationsOauthApplicationIdRoute,
  patchOrganizationPermissionsPermissionIdRoute,
  patchOrganizationRolesOrganizationRoleIdRoute,
  patchOrganizationsOrganizationIdDomainsDomainIdRoute,
  patchOrganizationsOrganizationIdMembershipsUserIdMetadataRoute,
  patchOrganizationsOrganizationIdMembershipsUserIdRoute,
  patchOrganizationsOrganizationIdMetadataRoute,
  patchOrganizationsOrganizationIdRoute,
  patchPhoneNumbersPhoneNumberIdRoute,
  patchRoleSetsRoleSetKeyOrIdRoute,
  patchSamlConnectionsSamlConnectionIdRoute,
  patchSessionsSessionIdRoute,
  patchSignUpsIdRoute,
  patchUsersUserIdMetadataRoute,
  patchUsersUserIdRoute,
  postActorTokensActorTokenIdRevokeRoute,
  postActorTokensRoute,
  postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRoute,
  postAdminPortalLinkTokensRoute,
  postAllowlistIdentifiersRoute,
  postApiKeysApiKeyIDRevokeRoute,
  postApiKeysRoute,
  postApiKeysVerifyRoute,
  postBillingSubscriptionItemsSubscriptionItemIdDiscountsRoute,
  postBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialRoute,
  postBillingSubscriptionItemsSubscriptionItemIdPriceTransitionRoute,
  postBlocklistIdentifiersRoute,
  postClientsClientIdRevokeRoute,
  postClientsVerifyRoute,
  postDomainsRoute,
  postEmailAddressesEmailAddressIdAttemptVerificationRoute,
  postEmailAddressesEmailAddressIdPrepareVerificationRoute,
  postEmailAddressesRoute,
  postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRoute,
  postEnterpriseConnectionsRoute,
  postInstanceChangeDomainRoute,
  postInvitationsBulkRoute,
  postInvitationsInvitationIdRevokeRoute,
  postInvitationsRoute,
  postJwtTemplatesRoute,
  postM2mTokensM2mTokenIdRevokeRoute,
  postM2mTokensRoute,
  postM2mTokensVerifyRoute,
  postMachinesMachineIdScopesRoute,
  postMachinesMachineIdSecretKeyRotateRoute,
  postMachinesRoute,
  postOauthApplicationsAccessTokensVerifyRoute,
  postOauthApplicationsOauthApplicationIdRevokeTokenRoute,
  postOauthApplicationsOauthApplicationIdRotateSecretRoute,
  postOauthApplicationsRoute,
  postOrganizationPermissionsRoute,
  postOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRoute,
  postOrganizationRolesRoute,
  postOrganizationsOrganizationIdBillingCreditsRoute,
  postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRoute,
  postOrganizationsOrganizationIdDomainsRoute,
  postOrganizationsOrganizationIdInvitationsBulkRoute,
  postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRoute,
  postOrganizationsOrganizationIdInvitationsRoute,
  postOrganizationsOrganizationIdMembershipsRoute,
  postOrganizationsRoute,
  postPhoneNumbersPhoneNumberIdAttemptVerificationRoute,
  postPhoneNumbersPhoneNumberIdPrepareVerificationRoute,
  postPhoneNumbersRoute,
  postProxyChecksRoute,
  postRedirectUrlsRoute,
  postRoleSetsRoleSetKeyOrIdReplaceRoute,
  postRoleSetsRoleSetKeyOrIdRolesReplaceRoute,
  postRoleSetsRoleSetKeyOrIdRolesRoute,
  postRoleSetsRoute,
  postSamlConnectionsRoute,
  postSessionsRoute,
  postSessionsSessionIdRefreshRoute,
  postSessionsSessionIdRevokeRoute,
  postSessionsSessionIdTokensRoute,
  postSessionsSessionIdTokensTemplateNameRoute,
  postSignInTokensRoute,
  postSignInTokensSignInTokenIdRevokeRoute,
  postTemplatesTemplateTypeSlugPreviewRoute,
  postTemplatesTemplateTypeSlugRevertRoute,
  postTemplatesTemplateTypeSlugToggleDeliveryRoute,
  postTestingTokensRoute,
  postUsersBanRoute,
  postUsersRoute,
  postUsersUnbanRoute,
  postUsersUserIdBanRoute,
  postUsersUserIdBillingCreditsRoute,
  postUsersUserIdLockRoute,
  postUsersUserIdMergeRoute,
  postUsersUserIdProfileImageRoute,
  postUsersUserIdRemovePasswordRoute,
  postUsersUserIdUnbanRoute,
  postUsersUserIdUnlockRoute,
  postUsersUserIdVerifyPasswordRoute,
  postUsersUserIdVerifyTotpRoute,
  postWaitlistEntriesRoute,
  postWaitlistEntriesWaitlistEntryIdInviteRoute,
  postWaitlistEntriesWaitlistEntryIdRejectRoute,
  postWebhooksSvixRoute,
  postWebhooksSvixUrlRoute,
  putBetaFeaturesDomainRoute,
  putOauthApplicationsOauthApplicationIdLogoRoute,
  putOrganizationsOrganizationIdLogoRoute,
  putOrganizationsOrganizationIdMetadataRoute,
  putTemplatesTemplateTypeSlugRoute,
  putUsersUserIdEmailAddressRoute,
  putUsersUserIdMetadataRoute,
  putUsersUserIdPhoneNumberRoute,
} from './routes'
import {
  deleteAllowlistIdentifiersIdentifierIdRouteHandler,
  deleteApiKeysApiKeyIDRouteHandler,
  deleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdRouteHandler,
  deleteBlocklistIdentifiersIdentifierIdRouteHandler,
  deleteCommerceSubscriptionItemsSubscriptionItemIdRouteHandler,
  deleteDomainsDomainIdRouteHandler,
  deleteEmailAddressesEmailAddressIdRouteHandler,
  deleteEnterpriseConnectionsEnterpriseConnectionIdRouteHandler,
  deleteInvitationsInvitationIdRouteHandler,
  deleteJwtTemplatesTemplateIdRouteHandler,
  deleteMachinesMachineIdRouteHandler,
  deleteMachinesMachineIdScopesOtherMachineIdRouteHandler,
  deleteOauthApplicationsOauthApplicationIdRouteHandler,
  deleteOrganizationPermissionsPermissionIdRouteHandler,
  deleteOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRouteHandler,
  deleteOrganizationRolesOrganizationRoleIdRouteHandler,
  deleteOrganizationsOrganizationIdDomainsDomainIdRouteHandler,
  deleteOrganizationsOrganizationIdLogoRouteHandler,
  deleteOrganizationsOrganizationIdMembershipsUserIdRouteHandler,
  deleteOrganizationsOrganizationIdRouteHandler,
  deletePhoneNumbersPhoneNumberIdRouteHandler,
  deleteRedirectUrlsIdRouteHandler,
  deleteSamlConnectionsSamlConnectionIdRouteHandler,
  deleteUsersUserIdBackupCodeRouteHandler,
  deleteUsersUserIdExternalAccountsExternalAccountIdRouteHandler,
  deleteUsersUserIdMfaRouteHandler,
  deleteUsersUserIdPasskeysPasskeyIdentificationIdRouteHandler,
  deleteUsersUserIdProfileImageRouteHandler,
  deleteUsersUserIdRouteHandler,
  deleteUsersUserIdTotpRouteHandler,
  deleteUsersUserIdTrustedDevicesTrustedDeviceIdRouteHandler,
  deleteUsersUserIdWeb3WalletsWeb3WalletIdentificationIdRouteHandler,
  deleteWaitlistEntriesWaitlistEntryIdRouteHandler,
  deleteWebhooksSvixRouteHandler,
  getAllowlistIdentifiersRouteHandler,
  getApiKeysApiKeyIDRouteHandler,
  getApiKeysApiKeyIDSecretRouteHandler,
  getApiKeysRouteHandler,
  getBlocklistIdentifiersRouteHandler,
  getClientsClientIdRouteHandler,
  getClientsRouteHandler,
  getCommercePlansRouteHandler,
  getCommerceSubscriptionItemsRouteHandler,
  getDomainsRouteHandler,
  getEmailAddressesEmailAddressIdRouteHandler,
  getEnterpriseConnectionsEnterpriseConnectionIdRouteHandler,
  getEnterpriseConnectionsEnterpriseConnectionIdTestRunsRouteHandler,
  getEnterpriseConnectionsRouteHandler,
  getInstanceCommunicationRouteHandler,
  getInstanceOauthApplicationSettingsRouteHandler,
  getInstanceOrganizationSettingsRouteHandler,
  getInstanceProtectRouteHandler,
  getInstanceRouteHandler,
  getInvitationsRouteHandler,
  getJwksRouteHandler,
  getJwtTemplatesRouteHandler,
  getJwtTemplatesTemplateIdRouteHandler,
  getLogsEventTimeAndIdRouteHandler,
  getLogsGroupsGroupIdEventsRouteHandler,
  getLogsRouteHandler,
  getLogsSchemasRouteHandler,
  getLogsTypesRouteHandler,
  getM2mTokensRouteHandler,
  getMachinesMachineIdRouteHandler,
  getMachinesMachineIdSecretKeyRouteHandler,
  getMachinesRouteHandler,
  getOauthApplicationsOauthApplicationIdRouteHandler,
  getOauthApplicationsRouteHandler,
  getOrganizationDomainsRouteHandler,
  getOrganizationInvitationsRouteHandler,
  getOrganizationMembershipsRouteHandler,
  getOrganizationPermissionsPermissionIdRouteHandler,
  getOrganizationPermissionsRouteHandler,
  getOrganizationRolesOrganizationRoleIdRouteHandler,
  getOrganizationRolesRouteHandler,
  getOrganizationsOrganizationIdBillingCreditsRouteHandler,
  getOrganizationsOrganizationIdBillingSubscriptionRouteHandler,
  getOrganizationsOrganizationIdDomainsRouteHandler,
  getOrganizationsOrganizationIdInvitationsInvitationIdRouteHandler,
  getOrganizationsOrganizationIdInvitationsPendingRouteHandler,
  getOrganizationsOrganizationIdInvitationsRouteHandler,
  getOrganizationsOrganizationIdMembershipsRouteHandler,
  getOrganizationsOrganizationIdRouteHandler,
  getOrganizationsRouteHandler,
  getPhoneNumbersPhoneNumberIdRouteHandler,
  getPublicInterstitialRouteHandler,
  getRedirectUrlsIdRouteHandler,
  getRedirectUrlsRouteHandler,
  getRoleSetsRoleSetKeyOrIdRouteHandler,
  getRoleSetsRouteHandler,
  getSamlConnectionsRouteHandler,
  getSamlConnectionsSamlConnectionIdRouteHandler,
  getSessionsRouteHandler,
  getSessionsSessionIdReverificationsReverificationIdRouteHandler,
  getSessionsSessionIdRouteHandler,
  getSignUpsIdRouteHandler,
  getTemplatesTemplateTypeRouteHandler,
  getTemplatesTemplateTypeSlugRouteHandler,
  getUsersCountRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdBillingCreditsRouteHandler,
  getUsersUserIdBillingSubscriptionRouteHandler,
  getUsersUserIdOauthAccessTokensProviderRouteHandler,
  getUsersUserIdOrganizationInvitationsRouteHandler,
  getUsersUserIdOrganizationMembershipsRouteHandler,
  getUsersUserIdRouteHandler,
  getUsersUserIdTrustedDevicesRouteHandler,
  getWaitlistEntriesRouteHandler,
  patchApiKeysApiKeyIDRouteHandler,
  patchBetaFeaturesInstanceSettingsRouteHandler,
  patchDomainsDomainIdRouteHandler,
  patchEmailAddressesEmailAddressIdRouteHandler,
  patchEnterpriseConnectionsEnterpriseConnectionIdRouteHandler,
  patchInstanceCommunicationRouteHandler,
  patchInstanceOauthApplicationSettingsRouteHandler,
  patchInstanceOrganizationSettingsRouteHandler,
  patchInstanceProtectRouteHandler,
  patchInstanceRestrictionsRouteHandler,
  patchInstanceRouteHandler,
  patchJwtTemplatesTemplateIdRouteHandler,
  patchMachinesMachineIdRouteHandler,
  patchOauthApplicationsOauthApplicationIdRouteHandler,
  patchOrganizationPermissionsPermissionIdRouteHandler,
  patchOrganizationRolesOrganizationRoleIdRouteHandler,
  patchOrganizationsOrganizationIdDomainsDomainIdRouteHandler,
  patchOrganizationsOrganizationIdMembershipsUserIdMetadataRouteHandler,
  patchOrganizationsOrganizationIdMembershipsUserIdRouteHandler,
  patchOrganizationsOrganizationIdMetadataRouteHandler,
  patchOrganizationsOrganizationIdRouteHandler,
  patchPhoneNumbersPhoneNumberIdRouteHandler,
  patchRoleSetsRoleSetKeyOrIdRouteHandler,
  patchSamlConnectionsSamlConnectionIdRouteHandler,
  patchSessionsSessionIdRouteHandler,
  patchSignUpsIdRouteHandler,
  patchUsersUserIdMetadataRouteHandler,
  patchUsersUserIdRouteHandler,
  postActorTokensActorTokenIdRevokeRouteHandler,
  postActorTokensRouteHandler,
  postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRouteHandler,
  postAdminPortalLinkTokensRouteHandler,
  postAllowlistIdentifiersRouteHandler,
  postApiKeysApiKeyIDRevokeRouteHandler,
  postApiKeysRouteHandler,
  postApiKeysVerifyRouteHandler,
  postBillingSubscriptionItemsSubscriptionItemIdDiscountsRouteHandler,
  postBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialRouteHandler,
  postBillingSubscriptionItemsSubscriptionItemIdPriceTransitionRouteHandler,
  postBlocklistIdentifiersRouteHandler,
  postClientsClientIdRevokeRouteHandler,
  postClientsVerifyRouteHandler,
  postDomainsRouteHandler,
  postEmailAddressesEmailAddressIdAttemptVerificationRouteHandler,
  postEmailAddressesEmailAddressIdPrepareVerificationRouteHandler,
  postEmailAddressesRouteHandler,
  postEnterpriseConnectionsEnterpriseConnectionIdTestRunsRouteHandler,
  postEnterpriseConnectionsRouteHandler,
  postInstanceChangeDomainRouteHandler,
  postInvitationsBulkRouteHandler,
  postInvitationsInvitationIdRevokeRouteHandler,
  postInvitationsRouteHandler,
  postJwtTemplatesRouteHandler,
  postM2mTokensM2mTokenIdRevokeRouteHandler,
  postM2mTokensRouteHandler,
  postM2mTokensVerifyRouteHandler,
  postMachinesMachineIdScopesRouteHandler,
  postMachinesMachineIdSecretKeyRotateRouteHandler,
  postMachinesRouteHandler,
  postOauthApplicationsAccessTokensVerifyRouteHandler,
  postOauthApplicationsOauthApplicationIdRevokeTokenRouteHandler,
  postOauthApplicationsOauthApplicationIdRotateSecretRouteHandler,
  postOauthApplicationsRouteHandler,
  postOrganizationPermissionsRouteHandler,
  postOrganizationRolesOrganizationRoleIdPermissionsPermissionIdRouteHandler,
  postOrganizationRolesRouteHandler,
  postOrganizationsOrganizationIdBillingCreditsRouteHandler,
  postOrganizationsOrganizationIdDomainsDomainIdVerifyOwnershipRouteHandler,
  postOrganizationsOrganizationIdDomainsRouteHandler,
  postOrganizationsOrganizationIdInvitationsBulkRouteHandler,
  postOrganizationsOrganizationIdInvitationsInvitationIdRevokeRouteHandler,
  postOrganizationsOrganizationIdInvitationsRouteHandler,
  postOrganizationsOrganizationIdMembershipsRouteHandler,
  postOrganizationsRouteHandler,
  postPhoneNumbersPhoneNumberIdAttemptVerificationRouteHandler,
  postPhoneNumbersPhoneNumberIdPrepareVerificationRouteHandler,
  postPhoneNumbersRouteHandler,
  postProxyChecksRouteHandler,
  postRedirectUrlsRouteHandler,
  postRoleSetsRoleSetKeyOrIdReplaceRouteHandler,
  postRoleSetsRoleSetKeyOrIdRolesReplaceRouteHandler,
  postRoleSetsRoleSetKeyOrIdRolesRouteHandler,
  postRoleSetsRouteHandler,
  postSamlConnectionsRouteHandler,
  postSessionsRouteHandler,
  postSessionsSessionIdRefreshRouteHandler,
  postSessionsSessionIdRevokeRouteHandler,
  postSessionsSessionIdTokensRouteHandler,
  postSessionsSessionIdTokensTemplateNameRouteHandler,
  postSignInTokensRouteHandler,
  postSignInTokensSignInTokenIdRevokeRouteHandler,
  postTemplatesTemplateTypeSlugPreviewRouteHandler,
  postTemplatesTemplateTypeSlugRevertRouteHandler,
  postTemplatesTemplateTypeSlugToggleDeliveryRouteHandler,
  postTestingTokensRouteHandler,
  postUsersBanRouteHandler,
  postUsersRouteHandler,
  postUsersUnbanRouteHandler,
  postUsersUserIdBanRouteHandler,
  postUsersUserIdBillingCreditsRouteHandler,
  postUsersUserIdLockRouteHandler,
  postUsersUserIdMergeRouteHandler,
  postUsersUserIdProfileImageRouteHandler,
  postUsersUserIdRemovePasswordRouteHandler,
  postUsersUserIdUnbanRouteHandler,
  postUsersUserIdUnlockRouteHandler,
  postUsersUserIdVerifyPasswordRouteHandler,
  postUsersUserIdVerifyTotpRouteHandler,
  postWaitlistEntriesRouteHandler,
  postWaitlistEntriesWaitlistEntryIdInviteRouteHandler,
  postWaitlistEntriesWaitlistEntryIdRejectRouteHandler,
  postWebhooksSvixRouteHandler,
  postWebhooksSvixUrlRouteHandler,
  putBetaFeaturesDomainRouteHandler,
  putOauthApplicationsOauthApplicationIdLogoRouteHandler,
  putOrganizationsOrganizationIdLogoRouteHandler,
  putOrganizationsOrganizationIdMetadataRouteHandler,
  putTemplatesTemplateTypeSlugRouteHandler,
  putUsersUserIdEmailAddressRouteHandler,
  putUsersUserIdMetadataRouteHandler,
  putUsersUserIdPhoneNumberRouteHandler,
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
