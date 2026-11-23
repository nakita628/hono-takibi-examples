import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminRealmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAdminEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAdminEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAttackDetectionBruteForceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationAuthenticatorProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationClientAuthenticatorProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationConfigDescriptionProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationFlowsFlowAliasCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationFormActionProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationFormProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationPerClientConfigDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationRegisterRequiredActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationRequiredActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationRequiredActionsAliasLowerPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmAuthenticationRequiredActionsAliasRaisePriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmAuthenticationUnregisteredRequiredActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientDescriptionConverterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientPoliciesPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientPoliciesPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientPoliciesProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientPoliciesProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientRegistrationPolicyProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersAddModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersProtocolProtocolRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientAvailableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientCompositeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientSessionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientTemplatesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientTemplatesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersAddModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersProtocolProtocolRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientAvailableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientCompositeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsInitialAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsInitialAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsInitialAccessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdAttributesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdScopesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdResourcesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidAuthzResourceServerSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidCertificatesAttrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidCertificatesAttrDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateAndDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidClientSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidClientSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidDefaultClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleAccessTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleSamlResponseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleUserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidEvaluateScopesProtocolMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidInstallationProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidNodesNodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidOfflineSessionCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidOfflineSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidOptionalClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidProtocolMappersAddModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidProtocolMappersProtocolProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidPushRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidRegistrationAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesClientsTargetClientUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidRolesRoleNameGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidRolesRoleNameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidScopeMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidServiceAccountUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidSessionCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidTestNodesAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientsClientUuidUserSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmComponentsIdSubComponentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmCredentialRegistratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmDefaultDefaultClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmDefaultGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmDefaultGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmDefaultGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmDefaultOptionalClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmEventsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmEventsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupByPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmGroupsGroupIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmIdentityProviderImportConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmIdentityProviderInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasMapperTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderInstancesAliasReloadKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmIdentityProviderProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmIdentityProviderUploadCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmLocalizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmLocalizationLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmLocalizationLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmLocalizationLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmLocalizationLocaleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmLocalizationLocaleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmLocalizationLocaleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmLogoutAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsMembersMemberIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmOrganizationsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupByPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmAvailableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmCompositeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdInvitationsIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdMembersInviteExistingUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdMembersInviteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmOrganizationsOrgIdMembersMemberIdMembershipTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmPartialExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmPartialImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmPushRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesByIdRoleIdCompositesClientsClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesByIdRoleIdCompositesRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesRoleNameCompositesClientsTargetClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesRoleNameCompositesRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesRoleNameGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmRolesRoleNameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmSessionsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmTestSMTPConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersProfileMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdConfiguredUserStorageCredentialTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdConsentsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveToFirstRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdCredentialsCredentialIdUserLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdDisableCredentialTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdExecuteActionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdFederatedIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersUserIdImpersonationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersUserIdLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdOfflineSessionsClientUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdResetPasswordEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmUsersUserIdSendVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdUnmanagedAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmWorkflowsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmWorkflowsScheduledResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmWorkflowsIdActivateTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmWorkflowsIdDeactivateTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
