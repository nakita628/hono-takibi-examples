import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const deleteRealmRouteHandler: RouteHandler<typeof deleteRealmRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRouteHandler: RouteHandler<typeof getRealmRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmRouteHandler: RouteHandler<typeof putRealmRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmAdminEventsRouteHandler: RouteHandler<
  typeof deleteRealmAdminEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAdminEventsRouteHandler: RouteHandler<
  typeof getRealmAdminEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmAttackDetectionBruteForceUsersRouteHandler: RouteHandler<
  typeof deleteRealmAttackDetectionBruteForceUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmAttackDetectionBruteForceUsersUserIdRouteHandler: RouteHandler<
  typeof deleteRealmAttackDetectionBruteForceUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAttackDetectionBruteForceUsersUserIdRouteHandler: RouteHandler<
  typeof getRealmAttackDetectionBruteForceUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationAuthenticatorProvidersRouteHandler: RouteHandler<
  typeof getRealmAuthenticationAuthenticatorProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationClientAuthenticatorProvidersRouteHandler: RouteHandler<
  typeof getRealmAuthenticationClientAuthenticatorProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationConfigDescriptionProviderIdRouteHandler: RouteHandler<
  typeof getRealmAuthenticationConfigDescriptionProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmAuthenticationConfigIdRouteHandler: RouteHandler<
  typeof deleteRealmAuthenticationConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationConfigIdRouteHandler: RouteHandler<
  typeof getRealmAuthenticationConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmAuthenticationConfigIdRouteHandler: RouteHandler<
  typeof putRealmAuthenticationConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationExecutionsRouteHandler: RouteHandler<
  typeof postRealmAuthenticationExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmAuthenticationExecutionsExecutionIdRouteHandler: RouteHandler<
  typeof deleteRealmAuthenticationExecutionsExecutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationExecutionsExecutionIdRouteHandler: RouteHandler<
  typeof getRealmAuthenticationExecutionsExecutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationExecutionsExecutionIdConfigRouteHandler: RouteHandler<
  typeof postRealmAuthenticationExecutionsExecutionIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationExecutionsExecutionIdLowerPriorityRouteHandler: RouteHandler<
  typeof postRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationExecutionsExecutionIdRaisePriorityRouteHandler: RouteHandler<
  typeof postRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationFlowsRouteHandler: RouteHandler<
  typeof getRealmAuthenticationFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationFlowsRouteHandler: RouteHandler<
  typeof postRealmAuthenticationFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationFlowsFlowAliasCopyRouteHandler: RouteHandler<
  typeof postRealmAuthenticationFlowsFlowAliasCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationFlowsFlowAliasExecutionsRouteHandler: RouteHandler<
  typeof getRealmAuthenticationFlowsFlowAliasExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmAuthenticationFlowsFlowAliasExecutionsRouteHandler: RouteHandler<
  typeof putRealmAuthenticationFlowsFlowAliasExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationFlowsFlowAliasExecutionsExecutionRouteHandler: RouteHandler<
  typeof postRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationFlowsFlowAliasExecutionsFlowRouteHandler: RouteHandler<
  typeof postRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmAuthenticationFlowsIdRouteHandler: RouteHandler<
  typeof deleteRealmAuthenticationFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationFlowsIdRouteHandler: RouteHandler<
  typeof getRealmAuthenticationFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmAuthenticationFlowsIdRouteHandler: RouteHandler<
  typeof putRealmAuthenticationFlowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationFormActionProvidersRouteHandler: RouteHandler<
  typeof getRealmAuthenticationFormActionProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationFormProvidersRouteHandler: RouteHandler<
  typeof getRealmAuthenticationFormProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationPerClientConfigDescriptionRouteHandler: RouteHandler<
  typeof getRealmAuthenticationPerClientConfigDescriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationRegisterRequiredActionRouteHandler: RouteHandler<
  typeof postRealmAuthenticationRegisterRequiredActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationRequiredActionsRouteHandler: RouteHandler<
  typeof getRealmAuthenticationRequiredActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmAuthenticationRequiredActionsAliasRouteHandler: RouteHandler<
  typeof deleteRealmAuthenticationRequiredActionsAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationRequiredActionsAliasRouteHandler: RouteHandler<
  typeof getRealmAuthenticationRequiredActionsAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmAuthenticationRequiredActionsAliasRouteHandler: RouteHandler<
  typeof putRealmAuthenticationRequiredActionsAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationRequiredActionsAliasLowerPriorityRouteHandler: RouteHandler<
  typeof postRealmAuthenticationRequiredActionsAliasLowerPriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmAuthenticationRequiredActionsAliasRaisePriorityRouteHandler: RouteHandler<
  typeof postRealmAuthenticationRequiredActionsAliasRaisePriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmAuthenticationUnregisteredRequiredActionsRouteHandler: RouteHandler<
  typeof getRealmAuthenticationUnregisteredRequiredActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClearKeysCacheRouteHandler: RouteHandler<
  typeof postRealmClearKeysCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClearRealmCacheRouteHandler: RouteHandler<
  typeof postRealmClearRealmCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClearUserCacheRouteHandler: RouteHandler<
  typeof postRealmClearUserCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientDescriptionConverterRouteHandler: RouteHandler<
  typeof postRealmClientDescriptionConverterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientRegistrationPolicyProvidersRouteHandler: RouteHandler<
  typeof getRealmClientRegistrationPolicyProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesRouteHandler: RouteHandler<
  typeof getRealmClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientScopesRouteHandler: RouteHandler<
  typeof postRealmClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientScopesId1ProtocolMappersModelsId2RouteHandler: RouteHandler<
  typeof deleteRealmClientScopesId1ProtocolMappersModelsId2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesId1ProtocolMappersModelsId2RouteHandler: RouteHandler<
  typeof getRealmClientScopesId1ProtocolMappersModelsId2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmClientScopesId1ProtocolMappersModelsId2RouteHandler: RouteHandler<
  typeof putRealmClientScopesId1ProtocolMappersModelsId2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientScopesIdRouteHandler: RouteHandler<
  typeof deleteRealmClientScopesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesIdRouteHandler: RouteHandler<
  typeof getRealmClientScopesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmClientScopesIdRouteHandler: RouteHandler<
  typeof putRealmClientScopesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientScopesIdProtocolMappersAddModelsRouteHandler: RouteHandler<
  typeof postRealmClientScopesIdProtocolMappersAddModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesIdProtocolMappersModelsRouteHandler: RouteHandler<
  typeof getRealmClientScopesIdProtocolMappersModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientScopesIdProtocolMappersModelsRouteHandler: RouteHandler<
  typeof postRealmClientScopesIdProtocolMappersModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesIdProtocolMappersProtocolProtocolRouteHandler: RouteHandler<
  typeof getRealmClientScopesIdProtocolMappersProtocolProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesIdScopeMappingsRouteHandler: RouteHandler<
  typeof getRealmClientScopesIdScopeMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientScopesIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof deleteRealmClientScopesIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof getRealmClientScopesIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientScopesIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof postRealmClientScopesIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesIdScopeMappingsClientsClientAvailableRouteHandler: RouteHandler<
  typeof getRealmClientScopesIdScopeMappingsClientsClientAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesIdScopeMappingsClientsClientCompositeRouteHandler: RouteHandler<
  typeof getRealmClientScopesIdScopeMappingsClientsClientCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientScopesIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof deleteRealmClientScopesIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof getRealmClientScopesIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientScopesIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof postRealmClientScopesIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesIdScopeMappingsRealmAvailableRouteHandler: RouteHandler<
  typeof getRealmClientScopesIdScopeMappingsRealmAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientScopesIdScopeMappingsRealmCompositeRouteHandler: RouteHandler<
  typeof getRealmClientScopesIdScopeMappingsRealmCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientSessionStatsRouteHandler: RouteHandler<
  typeof getRealmClientSessionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsRouteHandler: RouteHandler<typeof getRealmClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsRouteHandler: RouteHandler<typeof postRealmClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRealmClientsInitialAccessRouteHandler: RouteHandler<
  typeof getRealmClientsInitialAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsInitialAccessRouteHandler: RouteHandler<
  typeof postRealmClientsInitialAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientsInitialAccessIdRouteHandler: RouteHandler<
  typeof deleteRealmClientsInitialAccessIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientsId1ProtocolMappersModelsId2RouteHandler: RouteHandler<
  typeof deleteRealmClientsId1ProtocolMappersModelsId2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsId1ProtocolMappersModelsId2RouteHandler: RouteHandler<
  typeof getRealmClientsId1ProtocolMappersModelsId2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmClientsId1ProtocolMappersModelsId2RouteHandler: RouteHandler<
  typeof putRealmClientsId1ProtocolMappersModelsId2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientsIdRouteHandler: RouteHandler<
  typeof deleteRealmClientsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdRouteHandler: RouteHandler<typeof getRealmClientsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putRealmClientsIdRouteHandler: RouteHandler<typeof putRealmClientsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdCertificatesAttrRouteHandler: RouteHandler<
  typeof getRealmClientsIdCertificatesAttrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdCertificatesAttrDownloadRouteHandler: RouteHandler<
  typeof postRealmClientsIdCertificatesAttrDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdCertificatesAttrGenerateRouteHandler: RouteHandler<
  typeof postRealmClientsIdCertificatesAttrGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdCertificatesAttrGenerateAndDownloadRouteHandler: RouteHandler<
  typeof postRealmClientsIdCertificatesAttrGenerateAndDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdCertificatesAttrUploadRouteHandler: RouteHandler<
  typeof postRealmClientsIdCertificatesAttrUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdCertificatesAttrUploadCertificateRouteHandler: RouteHandler<
  typeof postRealmClientsIdCertificatesAttrUploadCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdClientSecretRouteHandler: RouteHandler<
  typeof getRealmClientsIdClientSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdClientSecretRouteHandler: RouteHandler<
  typeof postRealmClientsIdClientSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdDefaultClientScopesRouteHandler: RouteHandler<
  typeof getRealmClientsIdDefaultClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientsIdDefaultClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof deleteRealmClientsIdDefaultClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmClientsIdDefaultClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof putRealmClientsIdDefaultClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRouteHandler: RouteHandler<
  typeof getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdEvaluateScopesProtocolMappersRouteHandler: RouteHandler<
  typeof getRealmClientsIdEvaluateScopesProtocolMappersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRouteHandler: RouteHandler<
  typeof getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRouteHandler: RouteHandler<
  typeof getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdInstallationProvidersProviderIdRouteHandler: RouteHandler<
  typeof getRealmClientsIdInstallationProvidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdManagementPermissionsRouteHandler: RouteHandler<
  typeof getRealmClientsIdManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmClientsIdManagementPermissionsRouteHandler: RouteHandler<
  typeof putRealmClientsIdManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdNodesRouteHandler: RouteHandler<
  typeof postRealmClientsIdNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientsIdNodesNodeRouteHandler: RouteHandler<
  typeof deleteRealmClientsIdNodesNodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdOfflineSessionCountRouteHandler: RouteHandler<
  typeof getRealmClientsIdOfflineSessionCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdOfflineSessionsRouteHandler: RouteHandler<
  typeof getRealmClientsIdOfflineSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdOptionalClientScopesRouteHandler: RouteHandler<
  typeof getRealmClientsIdOptionalClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientsIdOptionalClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof deleteRealmClientsIdOptionalClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmClientsIdOptionalClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof putRealmClientsIdOptionalClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdProtocolMappersAddModelsRouteHandler: RouteHandler<
  typeof postRealmClientsIdProtocolMappersAddModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdProtocolMappersModelsRouteHandler: RouteHandler<
  typeof getRealmClientsIdProtocolMappersModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdProtocolMappersModelsRouteHandler: RouteHandler<
  typeof postRealmClientsIdProtocolMappersModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdProtocolMappersProtocolProtocolRouteHandler: RouteHandler<
  typeof getRealmClientsIdProtocolMappersProtocolProtocolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdPushRevocationRouteHandler: RouteHandler<
  typeof postRealmClientsIdPushRevocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdRegistrationAccessTokenRouteHandler: RouteHandler<
  typeof postRealmClientsIdRegistrationAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdRolesRouteHandler: RouteHandler<
  typeof getRealmClientsIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdRolesRouteHandler: RouteHandler<
  typeof postRealmClientsIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientsIdRolesRoleNameRouteHandler: RouteHandler<
  typeof deleteRealmClientsIdRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdRolesRoleNameRouteHandler: RouteHandler<
  typeof getRealmClientsIdRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmClientsIdRolesRoleNameRouteHandler: RouteHandler<
  typeof putRealmClientsIdRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientsIdRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof deleteRealmClientsIdRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof getRealmClientsIdRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof postRealmClientsIdRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdRolesRoleNameCompositesClientsClientRouteHandler: RouteHandler<
  typeof getRealmClientsIdRolesRoleNameCompositesClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdRolesRoleNameCompositesRealmRouteHandler: RouteHandler<
  typeof getRealmClientsIdRolesRoleNameCompositesRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdRolesRoleNameGroupsRouteHandler: RouteHandler<
  typeof getRealmClientsIdRolesRoleNameGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdRolesRoleNameManagementPermissionsRouteHandler: RouteHandler<
  typeof getRealmClientsIdRolesRoleNameManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmClientsIdRolesRoleNameManagementPermissionsRouteHandler: RouteHandler<
  typeof putRealmClientsIdRolesRoleNameManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdRolesRoleNameUsersRouteHandler: RouteHandler<
  typeof getRealmClientsIdRolesRoleNameUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdScopeMappingsRouteHandler: RouteHandler<
  typeof getRealmClientsIdScopeMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientsIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof deleteRealmClientsIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof getRealmClientsIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdScopeMappingsClientsClientRouteHandler: RouteHandler<
  typeof postRealmClientsIdScopeMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdScopeMappingsClientsClientAvailableRouteHandler: RouteHandler<
  typeof getRealmClientsIdScopeMappingsClientsClientAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdScopeMappingsClientsClientCompositeRouteHandler: RouteHandler<
  typeof getRealmClientsIdScopeMappingsClientsClientCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmClientsIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof deleteRealmClientsIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof getRealmClientsIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmClientsIdScopeMappingsRealmRouteHandler: RouteHandler<
  typeof postRealmClientsIdScopeMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdScopeMappingsRealmAvailableRouteHandler: RouteHandler<
  typeof getRealmClientsIdScopeMappingsRealmAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdScopeMappingsRealmCompositeRouteHandler: RouteHandler<
  typeof getRealmClientsIdScopeMappingsRealmCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdServiceAccountUserRouteHandler: RouteHandler<
  typeof getRealmClientsIdServiceAccountUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdSessionCountRouteHandler: RouteHandler<
  typeof getRealmClientsIdSessionCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdTestNodesAvailableRouteHandler: RouteHandler<
  typeof getRealmClientsIdTestNodesAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmClientsIdUserSessionsRouteHandler: RouteHandler<
  typeof getRealmClientsIdUserSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmComponentsRouteHandler: RouteHandler<typeof getRealmComponentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRealmComponentsRouteHandler: RouteHandler<
  typeof postRealmComponentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmComponentsIdRouteHandler: RouteHandler<
  typeof deleteRealmComponentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmComponentsIdRouteHandler: RouteHandler<
  typeof getRealmComponentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmComponentsIdRouteHandler: RouteHandler<
  typeof putRealmComponentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmComponentsIdSubComponentTypesRouteHandler: RouteHandler<
  typeof getRealmComponentsIdSubComponentTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmCredentialRegistratorsRouteHandler: RouteHandler<
  typeof getRealmCredentialRegistratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmDefaultDefaultClientScopesRouteHandler: RouteHandler<
  typeof getRealmDefaultDefaultClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmDefaultDefaultClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof deleteRealmDefaultDefaultClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmDefaultDefaultClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof putRealmDefaultDefaultClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmDefaultGroupsRouteHandler: RouteHandler<
  typeof getRealmDefaultGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmDefaultGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteRealmDefaultGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmDefaultGroupsGroupIdRouteHandler: RouteHandler<
  typeof putRealmDefaultGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmDefaultOptionalClientScopesRouteHandler: RouteHandler<
  typeof getRealmDefaultOptionalClientScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmDefaultOptionalClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof deleteRealmDefaultOptionalClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmDefaultOptionalClientScopesClientScopeIdRouteHandler: RouteHandler<
  typeof putRealmDefaultOptionalClientScopesClientScopeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmEventsRouteHandler: RouteHandler<typeof deleteRealmEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRealmEventsRouteHandler: RouteHandler<typeof getRealmEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmEventsConfigRouteHandler: RouteHandler<
  typeof getRealmEventsConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmEventsConfigRouteHandler: RouteHandler<
  typeof putRealmEventsConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupByPathPathRouteHandler: RouteHandler<
  typeof getRealmGroupByPathPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsRouteHandler: RouteHandler<typeof getRealmGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmGroupsRouteHandler: RouteHandler<typeof postRealmGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsCountRouteHandler: RouteHandler<
  typeof getRealmGroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmGroupsIdRouteHandler: RouteHandler<
  typeof deleteRealmGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsIdRouteHandler: RouteHandler<typeof getRealmGroupsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putRealmGroupsIdRouteHandler: RouteHandler<typeof putRealmGroupsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRealmGroupsIdChildrenRouteHandler: RouteHandler<
  typeof postRealmGroupsIdChildrenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsIdManagementPermissionsRouteHandler: RouteHandler<
  typeof getRealmGroupsIdManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmGroupsIdManagementPermissionsRouteHandler: RouteHandler<
  typeof putRealmGroupsIdManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsIdMembersRouteHandler: RouteHandler<
  typeof getRealmGroupsIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsIdRoleMappingsRouteHandler: RouteHandler<
  typeof getRealmGroupsIdRoleMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmGroupsIdRoleMappingsClientsClientRouteHandler: RouteHandler<
  typeof deleteRealmGroupsIdRoleMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsIdRoleMappingsClientsClientRouteHandler: RouteHandler<
  typeof getRealmGroupsIdRoleMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmGroupsIdRoleMappingsClientsClientRouteHandler: RouteHandler<
  typeof postRealmGroupsIdRoleMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsIdRoleMappingsClientsClientAvailableRouteHandler: RouteHandler<
  typeof getRealmGroupsIdRoleMappingsClientsClientAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsIdRoleMappingsClientsClientCompositeRouteHandler: RouteHandler<
  typeof getRealmGroupsIdRoleMappingsClientsClientCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmGroupsIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof deleteRealmGroupsIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof getRealmGroupsIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmGroupsIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof postRealmGroupsIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsIdRoleMappingsRealmAvailableRouteHandler: RouteHandler<
  typeof getRealmGroupsIdRoleMappingsRealmAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmGroupsIdRoleMappingsRealmCompositeRouteHandler: RouteHandler<
  typeof getRealmGroupsIdRoleMappingsRealmCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmIdentityProviderImportConfigRouteHandler: RouteHandler<
  typeof postRealmIdentityProviderImportConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmIdentityProviderInstancesRouteHandler: RouteHandler<
  typeof getRealmIdentityProviderInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmIdentityProviderInstancesRouteHandler: RouteHandler<
  typeof postRealmIdentityProviderInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmIdentityProviderInstancesAliasRouteHandler: RouteHandler<
  typeof deleteRealmIdentityProviderInstancesAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmIdentityProviderInstancesAliasRouteHandler: RouteHandler<
  typeof getRealmIdentityProviderInstancesAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmIdentityProviderInstancesAliasRouteHandler: RouteHandler<
  typeof putRealmIdentityProviderInstancesAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmIdentityProviderInstancesAliasExportRouteHandler: RouteHandler<
  typeof getRealmIdentityProviderInstancesAliasExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmIdentityProviderInstancesAliasManagementPermissionsRouteHandler: RouteHandler<
  typeof getRealmIdentityProviderInstancesAliasManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmIdentityProviderInstancesAliasManagementPermissionsRouteHandler: RouteHandler<
  typeof putRealmIdentityProviderInstancesAliasManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmIdentityProviderInstancesAliasMapperTypesRouteHandler: RouteHandler<
  typeof getRealmIdentityProviderInstancesAliasMapperTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmIdentityProviderInstancesAliasMappersRouteHandler: RouteHandler<
  typeof getRealmIdentityProviderInstancesAliasMappersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmIdentityProviderInstancesAliasMappersRouteHandler: RouteHandler<
  typeof postRealmIdentityProviderInstancesAliasMappersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmIdentityProviderInstancesAliasMappersIdRouteHandler: RouteHandler<
  typeof deleteRealmIdentityProviderInstancesAliasMappersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmIdentityProviderInstancesAliasMappersIdRouteHandler: RouteHandler<
  typeof getRealmIdentityProviderInstancesAliasMappersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmIdentityProviderInstancesAliasMappersIdRouteHandler: RouteHandler<
  typeof putRealmIdentityProviderInstancesAliasMappersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmIdentityProviderProvidersProviderIdRouteHandler: RouteHandler<
  typeof getRealmIdentityProviderProvidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmKeysRouteHandler: RouteHandler<typeof getRealmKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmLogoutAllRouteHandler: RouteHandler<typeof postRealmLogoutAllRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRealmPartialExportRouteHandler: RouteHandler<
  typeof postRealmPartialExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmPartialImportRouteHandler: RouteHandler<
  typeof postRealmPartialImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmPushRevocationRouteHandler: RouteHandler<
  typeof postRealmPushRevocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesRouteHandler: RouteHandler<typeof getRealmRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmRolesRouteHandler: RouteHandler<typeof postRealmRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmRolesByIdRoleIdRouteHandler: RouteHandler<
  typeof deleteRealmRolesByIdRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesByIdRoleIdRouteHandler: RouteHandler<
  typeof getRealmRolesByIdRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmRolesByIdRoleIdRouteHandler: RouteHandler<
  typeof putRealmRolesByIdRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmRolesByIdRoleIdCompositesRouteHandler: RouteHandler<
  typeof deleteRealmRolesByIdRoleIdCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesByIdRoleIdCompositesRouteHandler: RouteHandler<
  typeof getRealmRolesByIdRoleIdCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmRolesByIdRoleIdCompositesRouteHandler: RouteHandler<
  typeof postRealmRolesByIdRoleIdCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesByIdRoleIdCompositesClientsClientRouteHandler: RouteHandler<
  typeof getRealmRolesByIdRoleIdCompositesClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesByIdRoleIdCompositesRealmRouteHandler: RouteHandler<
  typeof getRealmRolesByIdRoleIdCompositesRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesByIdRoleIdManagementPermissionsRouteHandler: RouteHandler<
  typeof getRealmRolesByIdRoleIdManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmRolesByIdRoleIdManagementPermissionsRouteHandler: RouteHandler<
  typeof putRealmRolesByIdRoleIdManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmRolesRoleNameRouteHandler: RouteHandler<
  typeof deleteRealmRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesRoleNameRouteHandler: RouteHandler<
  typeof getRealmRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmRolesRoleNameRouteHandler: RouteHandler<
  typeof putRealmRolesRoleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof deleteRealmRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof getRealmRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmRolesRoleNameCompositesRouteHandler: RouteHandler<
  typeof postRealmRolesRoleNameCompositesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesRoleNameCompositesClientsClientRouteHandler: RouteHandler<
  typeof getRealmRolesRoleNameCompositesClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesRoleNameCompositesRealmRouteHandler: RouteHandler<
  typeof getRealmRolesRoleNameCompositesRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesRoleNameGroupsRouteHandler: RouteHandler<
  typeof getRealmRolesRoleNameGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesRoleNameManagementPermissionsRouteHandler: RouteHandler<
  typeof getRealmRolesRoleNameManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmRolesRoleNameManagementPermissionsRouteHandler: RouteHandler<
  typeof putRealmRolesRoleNameManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmRolesRoleNameUsersRouteHandler: RouteHandler<
  typeof getRealmRolesRoleNameUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmSessionsSessionRouteHandler: RouteHandler<
  typeof deleteRealmSessionsSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmTestLDAPConnectionRouteHandler: RouteHandler<
  typeof postRealmTestLDAPConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmTestSMTPConnectionRouteHandler: RouteHandler<
  typeof postRealmTestSMTPConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUserStorageIdNameRouteHandler: RouteHandler<
  typeof getRealmUserStorageIdNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUserStorageIdRemoveImportedUsersRouteHandler: RouteHandler<
  typeof postRealmUserStorageIdRemoveImportedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUserStorageIdSyncRouteHandler: RouteHandler<
  typeof postRealmUserStorageIdSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUserStorageIdUnlinkUsersRouteHandler: RouteHandler<
  typeof postRealmUserStorageIdUnlinkUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUserStorageParentIdMappersIdSyncRouteHandler: RouteHandler<
  typeof postRealmUserStorageParentIdMappersIdSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersRouteHandler: RouteHandler<typeof getRealmUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUsersRouteHandler: RouteHandler<typeof postRealmUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersManagementPermissionsRouteHandler: RouteHandler<
  typeof getRealmUsersManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmUsersManagementPermissionsRouteHandler: RouteHandler<
  typeof putRealmUsersManagementPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersCountRouteHandler: RouteHandler<typeof getRealmUsersCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRealmUsersIdRouteHandler: RouteHandler<typeof deleteRealmUsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdRouteHandler: RouteHandler<typeof getRealmUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmUsersIdRouteHandler: RouteHandler<typeof putRealmUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdConfiguredUserStorageCredentialTypesRouteHandler: RouteHandler<
  typeof getRealmUsersIdConfiguredUserStorageCredentialTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdConsentsRouteHandler: RouteHandler<
  typeof getRealmUsersIdConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmUsersIdConsentsClientRouteHandler: RouteHandler<
  typeof deleteRealmUsersIdConsentsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdCredentialsRouteHandler: RouteHandler<
  typeof getRealmUsersIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmUsersIdCredentialsCredentialIdRouteHandler: RouteHandler<
  typeof deleteRealmUsersIdCredentialsCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRouteHandler: RouteHandler<
  typeof postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUsersIdCredentialsCredentialIdMoveToFirstRouteHandler: RouteHandler<
  typeof postRealmUsersIdCredentialsCredentialIdMoveToFirstRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmUsersIdCredentialsCredentialIdUserLabelRouteHandler: RouteHandler<
  typeof putRealmUsersIdCredentialsCredentialIdUserLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmUsersIdDisableCredentialTypesRouteHandler: RouteHandler<
  typeof putRealmUsersIdDisableCredentialTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmUsersIdExecuteActionsEmailRouteHandler: RouteHandler<
  typeof putRealmUsersIdExecuteActionsEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdFederatedIdentityRouteHandler: RouteHandler<
  typeof getRealmUsersIdFederatedIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmUsersIdFederatedIdentityProviderRouteHandler: RouteHandler<
  typeof deleteRealmUsersIdFederatedIdentityProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUsersIdFederatedIdentityProviderRouteHandler: RouteHandler<
  typeof postRealmUsersIdFederatedIdentityProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdGroupsRouteHandler: RouteHandler<
  typeof getRealmUsersIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdGroupsCountRouteHandler: RouteHandler<
  typeof getRealmUsersIdGroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmUsersIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteRealmUsersIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmUsersIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof putRealmUsersIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUsersIdImpersonationRouteHandler: RouteHandler<
  typeof postRealmUsersIdImpersonationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUsersIdLogoutRouteHandler: RouteHandler<
  typeof postRealmUsersIdLogoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdOfflineSessionsClientIdRouteHandler: RouteHandler<
  typeof getRealmUsersIdOfflineSessionsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmUsersIdResetPasswordRouteHandler: RouteHandler<
  typeof putRealmUsersIdResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdRoleMappingsRouteHandler: RouteHandler<
  typeof getRealmUsersIdRoleMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmUsersIdRoleMappingsClientsClientRouteHandler: RouteHandler<
  typeof deleteRealmUsersIdRoleMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdRoleMappingsClientsClientRouteHandler: RouteHandler<
  typeof getRealmUsersIdRoleMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUsersIdRoleMappingsClientsClientRouteHandler: RouteHandler<
  typeof postRealmUsersIdRoleMappingsClientsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdRoleMappingsClientsClientAvailableRouteHandler: RouteHandler<
  typeof getRealmUsersIdRoleMappingsClientsClientAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdRoleMappingsClientsClientCompositeRouteHandler: RouteHandler<
  typeof getRealmUsersIdRoleMappingsClientsClientCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRealmUsersIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof deleteRealmUsersIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof getRealmUsersIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealmUsersIdRoleMappingsRealmRouteHandler: RouteHandler<
  typeof postRealmUsersIdRoleMappingsRealmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdRoleMappingsRealmAvailableRouteHandler: RouteHandler<
  typeof getRealmUsersIdRoleMappingsRealmAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdRoleMappingsRealmCompositeRouteHandler: RouteHandler<
  typeof getRealmUsersIdRoleMappingsRealmCompositeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRealmUsersIdSendVerifyEmailRouteHandler: RouteHandler<
  typeof putRealmUsersIdSendVerifyEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRealmUsersIdSessionsRouteHandler: RouteHandler<
  typeof getRealmUsersIdSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
