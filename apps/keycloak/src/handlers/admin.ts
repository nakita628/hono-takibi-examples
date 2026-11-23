import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdminRealmsRealmAdminEventsRoute,
  deleteAdminRealmsRealmAttackDetectionBruteForceUsersRoute,
  deleteAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute,
  deleteAdminRealmsRealmAuthenticationConfigIdRoute,
  deleteAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute,
  deleteAdminRealmsRealmAuthenticationFlowsIdRoute,
  deleteAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute,
  deleteAdminRealmsRealmAuthenticationRequiredActionsAliasRoute,
  deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute,
  deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute,
  deleteAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute,
  deleteAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute,
  deleteAdminRealmsRealmClientsClientUuidNodesNodeRoute,
  deleteAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute,
  deleteAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute,
  deleteAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute,
  deleteAdminRealmsRealmClientsClientUuidRolesRoleNameRoute,
  deleteAdminRealmsRealmClientsClientUuidRoute,
  deleteAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute,
  deleteAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute,
  deleteAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute,
  deleteAdminRealmsRealmClientScopesClientScopeIdRoute,
  deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute,
  deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute,
  deleteAdminRealmsRealmClientsInitialAccessIdRoute,
  deleteAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute,
  deleteAdminRealmsRealmClientTemplatesClientScopeIdRoute,
  deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute,
  deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute,
  deleteAdminRealmsRealmComponentsIdRoute,
  deleteAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute,
  deleteAdminRealmsRealmDefaultGroupsGroupIdRoute,
  deleteAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute,
  deleteAdminRealmsRealmEventsRoute,
  deleteAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute,
  deleteAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute,
  deleteAdminRealmsRealmGroupsGroupIdRoute,
  deleteAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute,
  deleteAdminRealmsRealmIdentityProviderInstancesAliasRoute,
  deleteAdminRealmsRealmLocalizationLocaleKeyRoute,
  deleteAdminRealmsRealmLocalizationLocaleRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdRoute,
  deleteAdminRealmsRealmRolesByIdRoleIdCompositesRoute,
  deleteAdminRealmsRealmRolesByIdRoleIdRoute,
  deleteAdminRealmsRealmRolesRoleNameCompositesRoute,
  deleteAdminRealmsRealmRolesRoleNameRoute,
  deleteAdminRealmsRealmRoute,
  deleteAdminRealmsRealmSessionsSessionRoute,
  deleteAdminRealmsRealmUsersUserIdConsentsClientRoute,
  deleteAdminRealmsRealmUsersUserIdCredentialsCredentialIdRoute,
  deleteAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute,
  deleteAdminRealmsRealmUsersUserIdGroupsGroupIdRoute,
  deleteAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute,
  deleteAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute,
  deleteAdminRealmsRealmUsersUserIdRoute,
  deleteAdminRealmsRealmWorkflowsIdRoute,
  getAdminRealmsRealmAdminEventsRoute,
  getAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute,
  getAdminRealmsRealmAuthenticationAuthenticatorProvidersRoute,
  getAdminRealmsRealmAuthenticationClientAuthenticatorProvidersRoute,
  getAdminRealmsRealmAuthenticationConfigDescriptionProviderIdRoute,
  getAdminRealmsRealmAuthenticationConfigIdRoute,
  getAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigIdRoute,
  getAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute,
  getAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute,
  getAdminRealmsRealmAuthenticationFlowsIdRoute,
  getAdminRealmsRealmAuthenticationFlowsRoute,
  getAdminRealmsRealmAuthenticationFormActionProvidersRoute,
  getAdminRealmsRealmAuthenticationFormProvidersRoute,
  getAdminRealmsRealmAuthenticationPerClientConfigDescriptionRoute,
  getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigDescriptionRoute,
  getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute,
  getAdminRealmsRealmAuthenticationRequiredActionsAliasRoute,
  getAdminRealmsRealmAuthenticationRequiredActionsRoute,
  getAdminRealmsRealmAuthenticationUnregisteredRequiredActionsRoute,
  getAdminRealmsRealmClientPoliciesPoliciesRoute,
  getAdminRealmsRealmClientPoliciesProfilesRoute,
  getAdminRealmsRealmClientRegistrationPolicyProvidersRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionProvidersRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionSearchRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyProvidersRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicySearchRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdAttributesRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdPermissionsRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdScopesRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceSearchRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdPermissionsRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdResourcesRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeSearchRoute,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerSettingsRoute,
  getAdminRealmsRealmClientsClientUuidCertificatesAttrRoute,
  getAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute,
  getAdminRealmsRealmClientsClientUuidClientSecretRoute,
  getAdminRealmsRealmClientsClientUuidDefaultClientScopesRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleAccessTokenRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleIdTokenRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleSamlResponseRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleUserinfoRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesProtocolMappersRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute,
  getAdminRealmsRealmClientsClientUuidInstallationProvidersProviderIdRoute,
  getAdminRealmsRealmClientsClientUuidManagementPermissionsRoute,
  getAdminRealmsRealmClientsClientUuidOfflineSessionCountRoute,
  getAdminRealmsRealmClientsClientUuidOfflineSessionsRoute,
  getAdminRealmsRealmClientsClientUuidOptionalClientScopesRoute,
  getAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute,
  getAdminRealmsRealmClientsClientUuidProtocolMappersModelsRoute,
  getAdminRealmsRealmClientsClientUuidProtocolMappersProtocolProtocolRoute,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesClientsTargetClientUuidRoute,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRealmRoute,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameGroupsRoute,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissionsRoute,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameRoute,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameUsersRoute,
  getAdminRealmsRealmClientsClientUuidRolesRoute,
  getAdminRealmsRealmClientsClientUuidRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientAvailableRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientCompositeRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRealmAvailableRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRealmCompositeRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRoute,
  getAdminRealmsRealmClientsClientUuidServiceAccountUserRoute,
  getAdminRealmsRealmClientsClientUuidSessionCountRoute,
  getAdminRealmsRealmClientsClientUuidTestNodesAvailableRoute,
  getAdminRealmsRealmClientsClientUuidUserSessionsRoute,
  getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute,
  getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsRoute,
  getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersProtocolProtocolRoute,
  getAdminRealmsRealmClientScopesClientScopeIdRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientAvailableRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientCompositeRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmAvailableRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmCompositeRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRoute,
  getAdminRealmsRealmClientScopesRoute,
  getAdminRealmsRealmClientSessionStatsRoute,
  getAdminRealmsRealmClientsInitialAccessRoute,
  getAdminRealmsRealmClientsRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersProtocolProtocolRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientAvailableRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientCompositeRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmAvailableRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmCompositeRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRoute,
  getAdminRealmsRealmClientTemplatesRoute,
  getAdminRealmsRealmClientTypesRoute,
  getAdminRealmsRealmComponentsIdRoute,
  getAdminRealmsRealmComponentsIdSubComponentTypesRoute,
  getAdminRealmsRealmComponentsRoute,
  getAdminRealmsRealmCredentialRegistratorsRoute,
  getAdminRealmsRealmDefaultDefaultClientScopesRoute,
  getAdminRealmsRealmDefaultGroupsRoute,
  getAdminRealmsRealmDefaultOptionalClientScopesRoute,
  getAdminRealmsRealmEventsConfigRoute,
  getAdminRealmsRealmEventsRoute,
  getAdminRealmsRealmGroupByPathPathRoute,
  getAdminRealmsRealmGroupsCountRoute,
  getAdminRealmsRealmGroupsGroupIdChildrenRoute,
  getAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute,
  getAdminRealmsRealmGroupsGroupIdMembersRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmAvailableRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmCompositeRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRoute,
  getAdminRealmsRealmGroupsGroupIdRoute,
  getAdminRealmsRealmGroupsRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasExportRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasMapperTypesRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasReloadKeysRoute,
  getAdminRealmsRealmIdentityProviderInstancesAliasRoute,
  getAdminRealmsRealmIdentityProviderInstancesRoute,
  getAdminRealmsRealmIdentityProviderProvidersProviderIdRoute,
  getAdminRealmsRealmKeysRoute,
  getAdminRealmsRealmLocalizationLocaleKeyRoute,
  getAdminRealmsRealmLocalizationLocaleRoute,
  getAdminRealmsRealmLocalizationRoute,
  getAdminRealmsRealmOrganizationsCountRoute,
  getAdminRealmsRealmOrganizationsMembersMemberIdOrganizationsRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupByPathPathRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmAvailableRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmCompositeRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsRoute,
  getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasGroupsRoute,
  getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute,
  getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute,
  getAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute,
  getAdminRealmsRealmOrganizationsOrgIdInvitationsRoute,
  getAdminRealmsRealmOrganizationsOrgIdMembersCountRoute,
  getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdGroupsRoute,
  getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdOrganizationsRoute,
  getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute,
  getAdminRealmsRealmOrganizationsOrgIdMembersRoute,
  getAdminRealmsRealmOrganizationsOrgIdRoute,
  getAdminRealmsRealmOrganizationsRoute,
  getAdminRealmsRealmRolesByIdRoleIdCompositesClientsClientUuidRoute,
  getAdminRealmsRealmRolesByIdRoleIdCompositesRealmRoute,
  getAdminRealmsRealmRolesByIdRoleIdCompositesRoute,
  getAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute,
  getAdminRealmsRealmRolesByIdRoleIdRoute,
  getAdminRealmsRealmRolesRoleNameCompositesClientsTargetClientUuidRoute,
  getAdminRealmsRealmRolesRoleNameCompositesRealmRoute,
  getAdminRealmsRealmRolesRoleNameCompositesRoute,
  getAdminRealmsRealmRolesRoleNameGroupsRoute,
  getAdminRealmsRealmRolesRoleNameManagementPermissionsRoute,
  getAdminRealmsRealmRolesRoleNameRoute,
  getAdminRealmsRealmRolesRoleNameUsersRoute,
  getAdminRealmsRealmRolesRoute,
  getAdminRealmsRealmRoute,
  getAdminRealmsRealmUsersCountRoute,
  getAdminRealmsRealmUsersManagementPermissionsRoute,
  getAdminRealmsRealmUsersProfileMetadataRoute,
  getAdminRealmsRealmUsersProfileRoute,
  getAdminRealmsRealmUsersRoute,
  getAdminRealmsRealmUsersUserIdConfiguredUserStorageCredentialTypesRoute,
  getAdminRealmsRealmUsersUserIdConsentsRoute,
  getAdminRealmsRealmUsersUserIdCredentialsRoute,
  getAdminRealmsRealmUsersUserIdFederatedIdentityRoute,
  getAdminRealmsRealmUsersUserIdGroupsCountRoute,
  getAdminRealmsRealmUsersUserIdGroupsRoute,
  getAdminRealmsRealmUsersUserIdOfflineSessionsClientUuidRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdAvailableRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdCompositeRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsRealmAvailableRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsRealmCompositeRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsRoute,
  getAdminRealmsRealmUsersUserIdRoute,
  getAdminRealmsRealmUsersUserIdSessionsRoute,
  getAdminRealmsRealmUsersUserIdUnmanagedAttributesRoute,
  getAdminRealmsRealmWorkflowsIdRoute,
  getAdminRealmsRealmWorkflowsRoute,
  getAdminRealmsRealmWorkflowsScheduledResourceIdRoute,
  getAdminRealmsRoute,
  postAdminRealmsRealmAuthenticationConfigRoute,
  postAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigRoute,
  postAdminRealmsRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute,
  postAdminRealmsRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute,
  postAdminRealmsRealmAuthenticationExecutionsRoute,
  postAdminRealmsRealmAuthenticationFlowsFlowAliasCopyRoute,
  postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute,
  postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute,
  postAdminRealmsRealmAuthenticationFlowsRoute,
  postAdminRealmsRealmAuthenticationRegisterRequiredActionRoute,
  postAdminRealmsRealmAuthenticationRequiredActionsAliasLowerPriorityRoute,
  postAdminRealmsRealmAuthenticationRequiredActionsAliasRaisePriorityRoute,
  postAdminRealmsRealmClientDescriptionConverterRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerImportRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionEvaluateRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyEvaluateRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrDownloadRoute,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateAndDownloadRoute,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateRoute,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadCertificateRoute,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadRoute,
  postAdminRealmsRealmClientsClientUuidClientSecretRoute,
  postAdminRealmsRealmClientsClientUuidNodesRoute,
  postAdminRealmsRealmClientsClientUuidProtocolMappersAddModelsRoute,
  postAdminRealmsRealmClientsClientUuidProtocolMappersModelsRoute,
  postAdminRealmsRealmClientsClientUuidPushRevocationRoute,
  postAdminRealmsRealmClientsClientUuidRegistrationAccessTokenRoute,
  postAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute,
  postAdminRealmsRealmClientsClientUuidRolesRoute,
  postAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute,
  postAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute,
  postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersAddModelsRoute,
  postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsRoute,
  postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute,
  postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute,
  postAdminRealmsRealmClientScopesRoute,
  postAdminRealmsRealmClientsInitialAccessRoute,
  postAdminRealmsRealmClientsRoute,
  postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersAddModelsRoute,
  postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsRoute,
  postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute,
  postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute,
  postAdminRealmsRealmClientTemplatesRoute,
  postAdminRealmsRealmComponentsRoute,
  postAdminRealmsRealmGroupsGroupIdChildrenRoute,
  postAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute,
  postAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute,
  postAdminRealmsRealmGroupsRoute,
  postAdminRealmsRealmIdentityProviderImportConfigRoute,
  postAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute,
  postAdminRealmsRealmIdentityProviderInstancesRoute,
  postAdminRealmsRealmIdentityProviderUploadCertificateRoute,
  postAdminRealmsRealmLocalizationLocaleRoute,
  postAdminRealmsRealmLogoutAllRoute,
  postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute,
  postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
  postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute,
  postAdminRealmsRealmOrganizationsOrgIdGroupsRoute,
  postAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute,
  postAdminRealmsRealmOrganizationsOrgIdInvitationsIdResendRoute,
  postAdminRealmsRealmOrganizationsOrgIdMembersInviteExistingUserRoute,
  postAdminRealmsRealmOrganizationsOrgIdMembersInviteUserRoute,
  postAdminRealmsRealmOrganizationsOrgIdMembersRoute,
  postAdminRealmsRealmOrganizationsRoute,
  postAdminRealmsRealmPartialExportRoute,
  postAdminRealmsRealmPartialImportRoute,
  postAdminRealmsRealmPushRevocationRoute,
  postAdminRealmsRealmRolesByIdRoleIdCompositesRoute,
  postAdminRealmsRealmRolesRoleNameCompositesRoute,
  postAdminRealmsRealmRolesRoute,
  postAdminRealmsRealmTestSMTPConnectionRoute,
  postAdminRealmsRealmUsersRoute,
  postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute,
  postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveToFirstRoute,
  postAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute,
  postAdminRealmsRealmUsersUserIdImpersonationRoute,
  postAdminRealmsRealmUsersUserIdLogoutRoute,
  postAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute,
  postAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute,
  postAdminRealmsRealmWorkflowsIdActivateTypeResourceIdRoute,
  postAdminRealmsRealmWorkflowsIdDeactivateTypeResourceIdRoute,
  postAdminRealmsRealmWorkflowsMigrateRoute,
  postAdminRealmsRealmWorkflowsRoute,
  postAdminRealmsRoute,
  putAdminRealmsRealmAuthenticationConfigIdRoute,
  putAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute,
  putAdminRealmsRealmAuthenticationFlowsIdRoute,
  putAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute,
  putAdminRealmsRealmAuthenticationRequiredActionsAliasRoute,
  putAdminRealmsRealmClientPoliciesPoliciesRoute,
  putAdminRealmsRealmClientPoliciesProfilesRoute,
  putAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute,
  putAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute,
  putAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute,
  putAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute,
  putAdminRealmsRealmClientsClientUuidManagementPermissionsRoute,
  putAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute,
  putAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute,
  putAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissionsRoute,
  putAdminRealmsRealmClientsClientUuidRolesRoleNameRoute,
  putAdminRealmsRealmClientsClientUuidRoute,
  putAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute,
  putAdminRealmsRealmClientScopesClientScopeIdRoute,
  putAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute,
  putAdminRealmsRealmClientTemplatesClientScopeIdRoute,
  putAdminRealmsRealmClientTypesRoute,
  putAdminRealmsRealmComponentsIdRoute,
  putAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute,
  putAdminRealmsRealmDefaultGroupsGroupIdRoute,
  putAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute,
  putAdminRealmsRealmEventsConfigRoute,
  putAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute,
  putAdminRealmsRealmGroupsGroupIdRoute,
  putAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute,
  putAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute,
  putAdminRealmsRealmIdentityProviderInstancesAliasRoute,
  putAdminRealmsRealmLocalizationLocaleKeyRoute,
  putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute,
  putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute,
  putAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute,
  putAdminRealmsRealmOrganizationsOrgIdMembersMemberIdMembershipTypeRoute,
  putAdminRealmsRealmOrganizationsOrgIdRoute,
  putAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute,
  putAdminRealmsRealmRolesByIdRoleIdRoute,
  putAdminRealmsRealmRolesRoleNameManagementPermissionsRoute,
  putAdminRealmsRealmRolesRoleNameRoute,
  putAdminRealmsRealmRoute,
  putAdminRealmsRealmUsersManagementPermissionsRoute,
  putAdminRealmsRealmUsersProfileRoute,
  putAdminRealmsRealmUsersUserIdCredentialsCredentialIdUserLabelRoute,
  putAdminRealmsRealmUsersUserIdDisableCredentialTypesRoute,
  putAdminRealmsRealmUsersUserIdExecuteActionsEmailRoute,
  putAdminRealmsRealmUsersUserIdGroupsGroupIdRoute,
  putAdminRealmsRealmUsersUserIdResetPasswordEmailRoute,
  putAdminRealmsRealmUsersUserIdResetPasswordRoute,
  putAdminRealmsRealmUsersUserIdRoute,
  putAdminRealmsRealmUsersUserIdSendVerifyEmailRoute,
  putAdminRealmsRealmWorkflowsIdRoute,
} from '../routes'

export const getAdminRealmsRouteHandler: RouteHandler<typeof getAdminRealmsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRouteHandler: RouteHandler<typeof postAdminRealmsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAdminEventsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAdminEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmAdminEventsRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmAdminEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmAttackDetectionBruteForceUsersRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmAttackDetectionBruteForceUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationAuthenticatorProvidersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationAuthenticatorProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationClientAuthenticatorProvidersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationClientAuthenticatorProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationConfigRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationConfigDescriptionProviderIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationConfigDescriptionProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationConfigIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmAuthenticationConfigIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmAuthenticationConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmAuthenticationConfigIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmAuthenticationConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationExecutionsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationExecutionsExecutionIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmAuthenticationExecutionsExecutionIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationExecutionsExecutionIdLowerPriorityRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationExecutionsExecutionIdRaisePriorityRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationFlowsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationFlowsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationFlowsFlowAliasCopyRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationFlowsFlowAliasCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsExecutionRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsFlowRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationFlowsIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmAuthenticationFlowsIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmAuthenticationFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmAuthenticationFlowsIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmAuthenticationFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationFormActionProvidersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationFormActionProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationFormProvidersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationFormProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationPerClientConfigDescriptionRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationPerClientConfigDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationRegisterRequiredActionRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationRegisterRequiredActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationRequiredActionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationRequiredActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationRequiredActionsAliasRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationRequiredActionsAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmAuthenticationRequiredActionsAliasRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmAuthenticationRequiredActionsAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmAuthenticationRequiredActionsAliasRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmAuthenticationRequiredActionsAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigDescriptionRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationRequiredActionsAliasLowerPriorityRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationRequiredActionsAliasLowerPriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmAuthenticationRequiredActionsAliasRaisePriorityRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmAuthenticationRequiredActionsAliasRaisePriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmAuthenticationUnregisteredRequiredActionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmAuthenticationUnregisteredRequiredActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientDescriptionConverterRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientDescriptionConverterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientPoliciesPoliciesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientPoliciesPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientPoliciesPoliciesRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientPoliciesPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientPoliciesProfilesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientPoliciesProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientPoliciesProfilesRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientPoliciesProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientRegistrationPolicyProvidersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientRegistrationPolicyProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientScopesRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersAddModelsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersAddModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersProtocolProtocolRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersProtocolProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientSessionStatsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientSessionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientTemplatesRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientTemplatesClientScopeIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientTemplatesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientTemplatesClientScopeIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientTemplatesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersAddModelsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersAddModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersProtocolProtocolRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersProtocolProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientTypesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientTypesRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsInitialAccessRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsInitialAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsInitialAccessRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsInitialAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsInitialAccessIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsInitialAccessIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientsClientUuidRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientsClientUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientsClientUuidAuthzResourceServerRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerImportRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidAuthzResourceServerImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionEvaluateRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionEvaluateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionProvidersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionSearchRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyEvaluateRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyEvaluateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyProvidersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicySearchRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceSearchRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdAttributesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdPermissionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdScopesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeSearchRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdPermissionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdResourcesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerSettingsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidAuthzResourceServerSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidCertificatesAttrRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidCertificatesAttrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidCertificatesAttrDownloadRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidCertificatesAttrDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateAndDownloadRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateAndDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadCertificateRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidClientSecretRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidClientSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidClientSecretRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidClientSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidClientSecretRotatedRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidClientSecretRotatedRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidDefaultClientScopesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidDefaultClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleAccessTokenRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleIdTokenRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleIdTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleSamlResponseRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleSamlResponseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleUserinfoRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleUserinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesProtocolMappersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidEvaluateScopesProtocolMappersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdGrantedRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidInstallationProvidersProviderIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidInstallationProvidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidManagementPermissionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientsClientUuidManagementPermissionsRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientsClientUuidManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidNodesRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidNodesNodeRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidNodesNodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidOfflineSessionCountRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidOfflineSessionCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidOfflineSessionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidOfflineSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidOptionalClientScopesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidOptionalClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidProtocolMappersAddModelsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidProtocolMappersAddModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidProtocolMappersModelsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidProtocolMappersModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidProtocolMappersModelsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidProtocolMappersModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidProtocolMappersProtocolProtocolRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidProtocolMappersProtocolProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidPushRevocationRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidPushRevocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidRegistrationAccessTokenRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidRegistrationAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidRolesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidRolesRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientsClientUuidRolesRoleNameRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientsClientUuidRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidRolesRoleNameRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesClientsTargetClientUuidRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesClientsTargetClientUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRealmRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameGroupsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidRolesRoleNameGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissionsRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameUsersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidRolesRoleNameUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidScopeMappingsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidScopeMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidScopeMappingsRealmRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmClientsClientUuidScopeMappingsRealmRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmClientsClientUuidScopeMappingsRealmRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidScopeMappingsRealmAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidScopeMappingsRealmAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidScopeMappingsRealmCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidScopeMappingsRealmCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidServiceAccountUserRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidServiceAccountUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidSessionCountRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidSessionCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidTestNodesAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidTestNodesAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmClientsClientUuidUserSessionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmClientsClientUuidUserSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmComponentsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmComponentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmComponentsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmComponentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmComponentsIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmComponentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmComponentsIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmComponentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmComponentsIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmComponentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmComponentsIdSubComponentTypesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmComponentsIdSubComponentTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmCredentialRegistratorsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmCredentialRegistratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmDefaultDefaultClientScopesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmDefaultDefaultClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmDefaultGroupsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmDefaultGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmDefaultGroupsGroupIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmDefaultGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmDefaultGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmDefaultGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmDefaultOptionalClientScopesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmDefaultOptionalClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmEventsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmEventsRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmEventsConfigRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmEventsConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmEventsConfigRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmEventsConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupByPathPathRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupByPathPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmGroupsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsCountRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmGroupsGroupIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdChildrenRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdChildrenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmGroupsGroupIdChildrenRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmGroupsGroupIdChildrenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdManagementPermissionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmGroupsGroupIdManagementPermissionsRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdMembersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdRoleMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmIdentityProviderImportConfigRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmIdentityProviderImportConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmIdentityProviderInstancesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmIdentityProviderInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmIdentityProviderInstancesRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmIdentityProviderInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmIdentityProviderInstancesAliasRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmIdentityProviderInstancesAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmIdentityProviderInstancesAliasRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmIdentityProviderInstancesAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmIdentityProviderInstancesAliasRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmIdentityProviderInstancesAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmIdentityProviderInstancesAliasExportRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmIdentityProviderInstancesAliasExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmIdentityProviderInstancesAliasMapperTypesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmIdentityProviderInstancesAliasMapperTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmIdentityProviderInstancesAliasMappersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmIdentityProviderInstancesAliasMappersRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmIdentityProviderInstancesAliasReloadKeysRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmIdentityProviderInstancesAliasReloadKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmIdentityProviderProvidersProviderIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmIdentityProviderProvidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmIdentityProviderUploadCertificateRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmIdentityProviderUploadCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmKeysRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmLocalizationRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmLocalizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmLocalizationLocaleRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmLocalizationLocaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmLocalizationLocaleRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmLocalizationLocaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmLocalizationLocaleRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmLocalizationLocaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmLocalizationLocaleKeyRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmLocalizationLocaleKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmLocalizationLocaleKeyRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmLocalizationLocaleKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmLocalizationLocaleKeyRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmLocalizationLocaleKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmLogoutAllRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmLogoutAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmOrganizationsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsCountRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsMembersMemberIdOrganizationsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsMembersMemberIdOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmOrganizationsOrgIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmOrganizationsOrgIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmOrganizationsOrgIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmOrganizationsOrgIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmOrganizationsOrgIdGroupsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmOrganizationsOrgIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupByPathPathRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupByPathPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasGroupsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdInvitationsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdInvitationsIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmOrganizationsOrgIdInvitationsIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmOrganizationsOrgIdInvitationsIdResendRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmOrganizationsOrgIdInvitationsIdResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdMembersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmOrganizationsOrgIdMembersRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmOrganizationsOrgIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdMembersCountRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdMembersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmOrganizationsOrgIdMembersInviteExistingUserRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmOrganizationsOrgIdMembersInviteExistingUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmOrganizationsOrgIdMembersInviteUserRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmOrganizationsOrgIdMembersInviteUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdGroupsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmOrganizationsOrgIdMembersMemberIdMembershipTypeRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmOrganizationsOrgIdMembersMemberIdMembershipTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdOrganizationsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmPartialExportRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmPartialExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmPartialImportRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmPartialImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmPushRevocationRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmPushRevocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmRolesRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesByIdRoleIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesByIdRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmRolesByIdRoleIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmRolesByIdRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmRolesByIdRoleIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmRolesByIdRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesByIdRoleIdCompositesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesByIdRoleIdCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmRolesByIdRoleIdCompositesRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmRolesByIdRoleIdCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmRolesByIdRoleIdCompositesRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmRolesByIdRoleIdCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesByIdRoleIdCompositesClientsClientUuidRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesByIdRoleIdCompositesClientsClientUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesByIdRoleIdCompositesRealmRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesByIdRoleIdCompositesRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesRoleNameRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmRolesRoleNameRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmRolesRoleNameRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesRoleNameCompositesClientsTargetClientUuidRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesRoleNameCompositesClientsTargetClientUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesRoleNameCompositesRealmRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesRoleNameCompositesRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesRoleNameGroupsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesRoleNameGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesRoleNameManagementPermissionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesRoleNameManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmRolesRoleNameManagementPermissionsRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmRolesRoleNameManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmRolesRoleNameUsersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmRolesRoleNameUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmSessionsSessionRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmSessionsSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmTestSMTPConnectionRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmTestSMTPConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmUsersRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersManagementPermissionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmUsersManagementPermissionsRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmUsersManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersCountRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersProfileRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmUsersProfileRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmUsersProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersProfileMetadataRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersProfileMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmUsersUserIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmUsersUserIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdConfiguredUserStorageCredentialTypesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdConfiguredUserStorageCredentialTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdConsentsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmUsersUserIdConsentsClientRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmUsersUserIdConsentsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdCredentialsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmUsersUserIdCredentialsCredentialIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmUsersUserIdCredentialsCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveToFirstRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveToFirstRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmUsersUserIdCredentialsCredentialIdUserLabelRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmUsersUserIdCredentialsCredentialIdUserLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmUsersUserIdDisableCredentialTypesRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmUsersUserIdDisableCredentialTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmUsersUserIdExecuteActionsEmailRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmUsersUserIdExecuteActionsEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdFederatedIdentityRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdFederatedIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmUsersUserIdFederatedIdentityProviderRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmUsersUserIdFederatedIdentityProviderRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdGroupsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdGroupsCountRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdGroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmUsersUserIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmUsersUserIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmUsersUserIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmUsersUserIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmUsersUserIdImpersonationRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmUsersUserIdImpersonationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmUsersUserIdLogoutRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmUsersUserIdLogoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdOfflineSessionsClientUuidRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdOfflineSessionsClientUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmUsersUserIdResetPasswordRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmUsersUserIdResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmUsersUserIdResetPasswordEmailRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmUsersUserIdResetPasswordEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdRoleMappingsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdRoleMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmUsersUserIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmUsersUserIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdRoleMappingsRealmAvailableRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdRoleMappingsRealmAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdRoleMappingsRealmCompositeRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdRoleMappingsRealmCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmUsersUserIdSendVerifyEmailRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmUsersUserIdSendVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdSessionsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmUsersUserIdUnmanagedAttributesRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmUsersUserIdUnmanagedAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmWorkflowsRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmWorkflowsRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmWorkflowsMigrateRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmWorkflowsMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmWorkflowsScheduledResourceIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmWorkflowsScheduledResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRealmsRealmWorkflowsIdRouteHandler: RouteHandler<
  typeof getAdminRealmsRealmWorkflowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminRealmsRealmWorkflowsIdRouteHandler: RouteHandler<
  typeof putAdminRealmsRealmWorkflowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRealmsRealmWorkflowsIdRouteHandler: RouteHandler<
  typeof deleteAdminRealmsRealmWorkflowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmWorkflowsIdActivateTypeResourceIdRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmWorkflowsIdActivateTypeResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRealmsRealmWorkflowsIdDeactivateTypeResourceIdRouteHandler: RouteHandler<
  typeof postAdminRealmsRealmWorkflowsIdDeactivateTypeResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
