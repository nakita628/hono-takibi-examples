import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmAdminEventsRoute,
  deleteRealmAttackDetectionBruteForceUsersRoute,
  deleteRealmAttackDetectionBruteForceUsersUserIdRoute,
  deleteRealmAuthenticationConfigIdRoute,
  deleteRealmAuthenticationExecutionsExecutionIdRoute,
  deleteRealmAuthenticationFlowsIdRoute,
  deleteRealmAuthenticationRequiredActionsAliasRoute,
  deleteRealmClientScopesId1ProtocolMappersModelsId2Route,
  deleteRealmClientScopesIdRoute,
  deleteRealmClientScopesIdScopeMappingsClientsClientRoute,
  deleteRealmClientScopesIdScopeMappingsRealmRoute,
  deleteRealmClientsId1ProtocolMappersModelsId2Route,
  deleteRealmClientsIdDefaultClientScopesClientScopeIdRoute,
  deleteRealmClientsIdNodesNodeRoute,
  deleteRealmClientsIdOptionalClientScopesClientScopeIdRoute,
  deleteRealmClientsIdRolesRoleNameCompositesRoute,
  deleteRealmClientsIdRolesRoleNameRoute,
  deleteRealmClientsIdRoute,
  deleteRealmClientsIdScopeMappingsClientsClientRoute,
  deleteRealmClientsIdScopeMappingsRealmRoute,
  deleteRealmClientsInitialAccessIdRoute,
  deleteRealmComponentsIdRoute,
  deleteRealmDefaultDefaultClientScopesClientScopeIdRoute,
  deleteRealmDefaultGroupsGroupIdRoute,
  deleteRealmDefaultOptionalClientScopesClientScopeIdRoute,
  deleteRealmEventsRoute,
  deleteRealmGroupsIdRoleMappingsClientsClientRoute,
  deleteRealmGroupsIdRoleMappingsRealmRoute,
  deleteRealmGroupsIdRoute,
  deleteRealmIdentityProviderInstancesAliasMappersIdRoute,
  deleteRealmIdentityProviderInstancesAliasRoute,
  deleteRealmRolesByIdRoleIdCompositesRoute,
  deleteRealmRolesByIdRoleIdRoute,
  deleteRealmRolesRoleNameCompositesRoute,
  deleteRealmRolesRoleNameRoute,
  deleteRealmRoute,
  deleteRealmSessionsSessionRoute,
  deleteRealmUsersIdConsentsClientRoute,
  deleteRealmUsersIdCredentialsCredentialIdRoute,
  deleteRealmUsersIdFederatedIdentityProviderRoute,
  deleteRealmUsersIdGroupsGroupIdRoute,
  deleteRealmUsersIdRoleMappingsClientsClientRoute,
  deleteRealmUsersIdRoleMappingsRealmRoute,
  deleteRealmUsersIdRoute,
  getRealmAdminEventsRoute,
  getRealmAttackDetectionBruteForceUsersUserIdRoute,
  getRealmAuthenticationAuthenticatorProvidersRoute,
  getRealmAuthenticationClientAuthenticatorProvidersRoute,
  getRealmAuthenticationConfigDescriptionProviderIdRoute,
  getRealmAuthenticationConfigIdRoute,
  getRealmAuthenticationExecutionsExecutionIdRoute,
  getRealmAuthenticationFlowsFlowAliasExecutionsRoute,
  getRealmAuthenticationFlowsIdRoute,
  getRealmAuthenticationFlowsRoute,
  getRealmAuthenticationFormActionProvidersRoute,
  getRealmAuthenticationFormProvidersRoute,
  getRealmAuthenticationPerClientConfigDescriptionRoute,
  getRealmAuthenticationRequiredActionsAliasRoute,
  getRealmAuthenticationRequiredActionsRoute,
  getRealmAuthenticationUnregisteredRequiredActionsRoute,
  getRealmClientRegistrationPolicyProvidersRoute,
  getRealmClientScopesId1ProtocolMappersModelsId2Route,
  getRealmClientScopesIdProtocolMappersModelsRoute,
  getRealmClientScopesIdProtocolMappersProtocolProtocolRoute,
  getRealmClientScopesIdRoute,
  getRealmClientScopesIdScopeMappingsClientsClientAvailableRoute,
  getRealmClientScopesIdScopeMappingsClientsClientCompositeRoute,
  getRealmClientScopesIdScopeMappingsClientsClientRoute,
  getRealmClientScopesIdScopeMappingsRealmAvailableRoute,
  getRealmClientScopesIdScopeMappingsRealmCompositeRoute,
  getRealmClientScopesIdScopeMappingsRealmRoute,
  getRealmClientScopesIdScopeMappingsRoute,
  getRealmClientScopesRoute,
  getRealmClientSessionStatsRoute,
  getRealmClientsId1ProtocolMappersModelsId2Route,
  getRealmClientsIdCertificatesAttrRoute,
  getRealmClientsIdClientSecretRoute,
  getRealmClientsIdDefaultClientScopesRoute,
  getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRoute,
  getRealmClientsIdEvaluateScopesProtocolMappersRoute,
  getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute,
  getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute,
  getRealmClientsIdInstallationProvidersProviderIdRoute,
  getRealmClientsIdManagementPermissionsRoute,
  getRealmClientsIdOfflineSessionCountRoute,
  getRealmClientsIdOfflineSessionsRoute,
  getRealmClientsIdOptionalClientScopesRoute,
  getRealmClientsIdProtocolMappersModelsRoute,
  getRealmClientsIdProtocolMappersProtocolProtocolRoute,
  getRealmClientsIdRolesRoleNameCompositesClientsClientRoute,
  getRealmClientsIdRolesRoleNameCompositesRealmRoute,
  getRealmClientsIdRolesRoleNameCompositesRoute,
  getRealmClientsIdRolesRoleNameGroupsRoute,
  getRealmClientsIdRolesRoleNameManagementPermissionsRoute,
  getRealmClientsIdRolesRoleNameRoute,
  getRealmClientsIdRolesRoleNameUsersRoute,
  getRealmClientsIdRolesRoute,
  getRealmClientsIdRoute,
  getRealmClientsIdScopeMappingsClientsClientAvailableRoute,
  getRealmClientsIdScopeMappingsClientsClientCompositeRoute,
  getRealmClientsIdScopeMappingsClientsClientRoute,
  getRealmClientsIdScopeMappingsRealmAvailableRoute,
  getRealmClientsIdScopeMappingsRealmCompositeRoute,
  getRealmClientsIdScopeMappingsRealmRoute,
  getRealmClientsIdScopeMappingsRoute,
  getRealmClientsIdServiceAccountUserRoute,
  getRealmClientsIdSessionCountRoute,
  getRealmClientsIdTestNodesAvailableRoute,
  getRealmClientsIdUserSessionsRoute,
  getRealmClientsInitialAccessRoute,
  getRealmClientsRoute,
  getRealmComponentsIdRoute,
  getRealmComponentsIdSubComponentTypesRoute,
  getRealmComponentsRoute,
  getRealmCredentialRegistratorsRoute,
  getRealmDefaultDefaultClientScopesRoute,
  getRealmDefaultGroupsRoute,
  getRealmDefaultOptionalClientScopesRoute,
  getRealmEventsConfigRoute,
  getRealmEventsRoute,
  getRealmGroupByPathPathRoute,
  getRealmGroupsCountRoute,
  getRealmGroupsIdManagementPermissionsRoute,
  getRealmGroupsIdMembersRoute,
  getRealmGroupsIdRoleMappingsClientsClientAvailableRoute,
  getRealmGroupsIdRoleMappingsClientsClientCompositeRoute,
  getRealmGroupsIdRoleMappingsClientsClientRoute,
  getRealmGroupsIdRoleMappingsRealmAvailableRoute,
  getRealmGroupsIdRoleMappingsRealmCompositeRoute,
  getRealmGroupsIdRoleMappingsRealmRoute,
  getRealmGroupsIdRoleMappingsRoute,
  getRealmGroupsIdRoute,
  getRealmGroupsRoute,
  getRealmIdentityProviderInstancesAliasExportRoute,
  getRealmIdentityProviderInstancesAliasManagementPermissionsRoute,
  getRealmIdentityProviderInstancesAliasMappersIdRoute,
  getRealmIdentityProviderInstancesAliasMappersRoute,
  getRealmIdentityProviderInstancesAliasMapperTypesRoute,
  getRealmIdentityProviderInstancesAliasRoute,
  getRealmIdentityProviderInstancesRoute,
  getRealmIdentityProviderProvidersProviderIdRoute,
  getRealmKeysRoute,
  getRealmRolesByIdRoleIdCompositesClientsClientRoute,
  getRealmRolesByIdRoleIdCompositesRealmRoute,
  getRealmRolesByIdRoleIdCompositesRoute,
  getRealmRolesByIdRoleIdManagementPermissionsRoute,
  getRealmRolesByIdRoleIdRoute,
  getRealmRolesRoleNameCompositesClientsClientRoute,
  getRealmRolesRoleNameCompositesRealmRoute,
  getRealmRolesRoleNameCompositesRoute,
  getRealmRolesRoleNameGroupsRoute,
  getRealmRolesRoleNameManagementPermissionsRoute,
  getRealmRolesRoleNameRoute,
  getRealmRolesRoleNameUsersRoute,
  getRealmRolesRoute,
  getRealmRoute,
  getRealmUsersCountRoute,
  getRealmUsersIdConfiguredUserStorageCredentialTypesRoute,
  getRealmUsersIdConsentsRoute,
  getRealmUsersIdCredentialsRoute,
  getRealmUsersIdFederatedIdentityRoute,
  getRealmUsersIdGroupsCountRoute,
  getRealmUsersIdGroupsRoute,
  getRealmUsersIdOfflineSessionsClientIdRoute,
  getRealmUsersIdRoleMappingsClientsClientAvailableRoute,
  getRealmUsersIdRoleMappingsClientsClientCompositeRoute,
  getRealmUsersIdRoleMappingsClientsClientRoute,
  getRealmUsersIdRoleMappingsRealmAvailableRoute,
  getRealmUsersIdRoleMappingsRealmCompositeRoute,
  getRealmUsersIdRoleMappingsRealmRoute,
  getRealmUsersIdRoleMappingsRoute,
  getRealmUsersIdRoute,
  getRealmUsersIdSessionsRoute,
  getRealmUsersManagementPermissionsRoute,
  getRealmUsersRoute,
  getRealmUserStorageIdNameRoute,
  postRealmAuthenticationExecutionsExecutionIdConfigRoute,
  postRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute,
  postRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute,
  postRealmAuthenticationExecutionsRoute,
  postRealmAuthenticationFlowsFlowAliasCopyRoute,
  postRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute,
  postRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute,
  postRealmAuthenticationFlowsRoute,
  postRealmAuthenticationRegisterRequiredActionRoute,
  postRealmAuthenticationRequiredActionsAliasLowerPriorityRoute,
  postRealmAuthenticationRequiredActionsAliasRaisePriorityRoute,
  postRealmClearKeysCacheRoute,
  postRealmClearRealmCacheRoute,
  postRealmClearUserCacheRoute,
  postRealmClientDescriptionConverterRoute,
  postRealmClientScopesIdProtocolMappersAddModelsRoute,
  postRealmClientScopesIdProtocolMappersModelsRoute,
  postRealmClientScopesIdScopeMappingsClientsClientRoute,
  postRealmClientScopesIdScopeMappingsRealmRoute,
  postRealmClientScopesRoute,
  postRealmClientsIdCertificatesAttrDownloadRoute,
  postRealmClientsIdCertificatesAttrGenerateAndDownloadRoute,
  postRealmClientsIdCertificatesAttrGenerateRoute,
  postRealmClientsIdCertificatesAttrUploadCertificateRoute,
  postRealmClientsIdCertificatesAttrUploadRoute,
  postRealmClientsIdClientSecretRoute,
  postRealmClientsIdNodesRoute,
  postRealmClientsIdProtocolMappersAddModelsRoute,
  postRealmClientsIdProtocolMappersModelsRoute,
  postRealmClientsIdPushRevocationRoute,
  postRealmClientsIdRegistrationAccessTokenRoute,
  postRealmClientsIdRolesRoleNameCompositesRoute,
  postRealmClientsIdRolesRoute,
  postRealmClientsIdScopeMappingsClientsClientRoute,
  postRealmClientsIdScopeMappingsRealmRoute,
  postRealmClientsInitialAccessRoute,
  postRealmClientsRoute,
  postRealmComponentsRoute,
  postRealmGroupsIdChildrenRoute,
  postRealmGroupsIdRoleMappingsClientsClientRoute,
  postRealmGroupsIdRoleMappingsRealmRoute,
  postRealmGroupsRoute,
  postRealmIdentityProviderImportConfigRoute,
  postRealmIdentityProviderInstancesAliasMappersRoute,
  postRealmIdentityProviderInstancesRoute,
  postRealmLogoutAllRoute,
  postRealmPartialExportRoute,
  postRealmPartialImportRoute,
  postRealmPushRevocationRoute,
  postRealmRolesByIdRoleIdCompositesRoute,
  postRealmRolesRoleNameCompositesRoute,
  postRealmRolesRoute,
  postRealmTestLDAPConnectionRoute,
  postRealmTestSMTPConnectionRoute,
  postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute,
  postRealmUsersIdCredentialsCredentialIdMoveToFirstRoute,
  postRealmUsersIdFederatedIdentityProviderRoute,
  postRealmUsersIdImpersonationRoute,
  postRealmUsersIdLogoutRoute,
  postRealmUsersIdRoleMappingsClientsClientRoute,
  postRealmUsersIdRoleMappingsRealmRoute,
  postRealmUsersRoute,
  postRealmUserStorageIdRemoveImportedUsersRoute,
  postRealmUserStorageIdSyncRoute,
  postRealmUserStorageIdUnlinkUsersRoute,
  postRealmUserStorageParentIdMappersIdSyncRoute,
  putRealmAuthenticationConfigIdRoute,
  putRealmAuthenticationFlowsFlowAliasExecutionsRoute,
  putRealmAuthenticationFlowsIdRoute,
  putRealmAuthenticationRequiredActionsAliasRoute,
  putRealmClientScopesId1ProtocolMappersModelsId2Route,
  putRealmClientScopesIdRoute,
  putRealmClientsId1ProtocolMappersModelsId2Route,
  putRealmClientsIdDefaultClientScopesClientScopeIdRoute,
  putRealmClientsIdManagementPermissionsRoute,
  putRealmClientsIdOptionalClientScopesClientScopeIdRoute,
  putRealmClientsIdRolesRoleNameManagementPermissionsRoute,
  putRealmClientsIdRolesRoleNameRoute,
  putRealmClientsIdRoute,
  putRealmComponentsIdRoute,
  putRealmDefaultDefaultClientScopesClientScopeIdRoute,
  putRealmDefaultGroupsGroupIdRoute,
  putRealmDefaultOptionalClientScopesClientScopeIdRoute,
  putRealmEventsConfigRoute,
  putRealmGroupsIdManagementPermissionsRoute,
  putRealmGroupsIdRoute,
  putRealmIdentityProviderInstancesAliasManagementPermissionsRoute,
  putRealmIdentityProviderInstancesAliasMappersIdRoute,
  putRealmIdentityProviderInstancesAliasRoute,
  putRealmRolesByIdRoleIdManagementPermissionsRoute,
  putRealmRolesByIdRoleIdRoute,
  putRealmRolesRoleNameManagementPermissionsRoute,
  putRealmRolesRoleNameRoute,
  putRealmRoute,
  putRealmUsersIdCredentialsCredentialIdUserLabelRoute,
  putRealmUsersIdDisableCredentialTypesRoute,
  putRealmUsersIdExecuteActionsEmailRoute,
  putRealmUsersIdGroupsGroupIdRoute,
  putRealmUsersIdResetPasswordRoute,
  putRealmUsersIdRoute,
  putRealmUsersIdSendVerifyEmailRoute,
  putRealmUsersManagementPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realmHandler = app
  .openapi(deleteRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAdminEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAdminEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAttackDetectionBruteForceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAttackDetectionBruteForceUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAttackDetectionBruteForceUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationAuthenticatorProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationClientAuthenticatorProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationConfigDescriptionProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmAuthenticationConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAuthenticationExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationExecutionsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationExecutionsExecutionIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationFlowsFlowAliasCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationFlowsFlowAliasExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmAuthenticationFlowsFlowAliasExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmAuthenticationFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationFormActionProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationFormProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationPerClientConfigDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationRegisterRequiredActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationRequiredActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmAuthenticationRequiredActionsAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationRequiredActionsAliasLowerPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmAuthenticationRequiredActionsAliasRaisePriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmAuthenticationUnregisteredRequiredActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClearKeysCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClearRealmCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClearUserCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientDescriptionConverterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientRegistrationPolicyProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientScopesId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientScopesId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientScopesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientScopesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientScopesIdProtocolMappersAddModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientScopesIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdProtocolMappersProtocolProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdScopeMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientScopesIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientScopesIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdScopeMappingsClientsClientAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdScopeMappingsClientsClientCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientScopesIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientScopesIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdScopeMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientScopesIdScopeMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientSessionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsInitialAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsInitialAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsInitialAccessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsId1ProtocolMappersModelsId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdCertificatesAttrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdCertificatesAttrDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdCertificatesAttrGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdCertificatesAttrGenerateAndDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdCertificatesAttrUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdCertificatesAttrUploadCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdClientSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdClientSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdDefaultClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdEvaluateScopesProtocolMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdInstallationProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdNodesNodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdOfflineSessionCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdOfflineSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdOptionalClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdProtocolMappersAddModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdProtocolMappersModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdProtocolMappersProtocolProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdPushRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdRegistrationAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameCompositesClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameCompositesRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdScopeMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdScopeMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdScopeMappingsClientsClientAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdScopeMappingsClientsClientCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdScopeMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdScopeMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdScopeMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdServiceAccountUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdSessionCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdTestNodesAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdUserSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmComponentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmComponentsIdSubComponentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmCredentialRegistratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmDefaultDefaultClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmDefaultDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmDefaultDefaultClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmDefaultGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmDefaultGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmDefaultGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmDefaultOptionalClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmDefaultOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmDefaultOptionalClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmEventsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmEventsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupByPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmGroupsIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmGroupsIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmGroupsIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmGroupsIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsClientsClientAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsClientsClientCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmGroupsIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmGroupsIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmIdentityProviderImportConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmIdentityProviderInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmIdentityProviderInstancesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmIdentityProviderInstancesAliasManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasMapperTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmIdentityProviderInstancesAliasMappersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmIdentityProviderInstancesAliasMappersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmIdentityProviderProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmLogoutAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmPartialExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmPartialImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmPushRevocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmRolesByIdRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmRolesByIdRoleIdCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesByIdRoleIdCompositesClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesByIdRoleIdCompositesRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesByIdRoleIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmRolesByIdRoleIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameCompositesClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameCompositesRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmSessionsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmTestLDAPConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmTestSMTPConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUserStorageIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUserStorageIdRemoveImportedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUserStorageIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUserStorageIdUnlinkUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUserStorageParentIdMappersIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdConfiguredUserStorageCredentialTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdConsentsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdCredentialsCredentialIdMoveToFirstRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdCredentialsCredentialIdUserLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdDisableCredentialTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdExecuteActionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdFederatedIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdFederatedIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdFederatedIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdImpersonationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdOfflineSessionsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsClientsClientAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsClientsClientCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmUsersIdSendVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
