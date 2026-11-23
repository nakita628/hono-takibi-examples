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
  getIdNameRoute,
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
  getRoute,
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
  postRoute,
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
} from './routes'
import {
  deleteRealmAdminEventsRouteHandler,
  deleteRealmAttackDetectionBruteForceUsersRouteHandler,
  deleteRealmAttackDetectionBruteForceUsersUserIdRouteHandler,
  deleteRealmAuthenticationConfigIdRouteHandler,
  deleteRealmAuthenticationExecutionsExecutionIdRouteHandler,
  deleteRealmAuthenticationFlowsIdRouteHandler,
  deleteRealmAuthenticationRequiredActionsAliasRouteHandler,
  deleteRealmClientScopesId1ProtocolMappersModelsId2RouteHandler,
  deleteRealmClientScopesIdRouteHandler,
  deleteRealmClientScopesIdScopeMappingsClientsClientRouteHandler,
  deleteRealmClientScopesIdScopeMappingsRealmRouteHandler,
  deleteRealmClientsId1ProtocolMappersModelsId2RouteHandler,
  deleteRealmClientsIdDefaultClientScopesClientScopeIdRouteHandler,
  deleteRealmClientsIdNodesNodeRouteHandler,
  deleteRealmClientsIdOptionalClientScopesClientScopeIdRouteHandler,
  deleteRealmClientsIdRolesRoleNameCompositesRouteHandler,
  deleteRealmClientsIdRolesRoleNameRouteHandler,
  deleteRealmClientsIdRouteHandler,
  deleteRealmClientsIdScopeMappingsClientsClientRouteHandler,
  deleteRealmClientsIdScopeMappingsRealmRouteHandler,
  deleteRealmClientsInitialAccessIdRouteHandler,
  deleteRealmComponentsIdRouteHandler,
  deleteRealmDefaultDefaultClientScopesClientScopeIdRouteHandler,
  deleteRealmDefaultGroupsGroupIdRouteHandler,
  deleteRealmDefaultOptionalClientScopesClientScopeIdRouteHandler,
  deleteRealmEventsRouteHandler,
  deleteRealmGroupsIdRoleMappingsClientsClientRouteHandler,
  deleteRealmGroupsIdRoleMappingsRealmRouteHandler,
  deleteRealmGroupsIdRouteHandler,
  deleteRealmIdentityProviderInstancesAliasMappersIdRouteHandler,
  deleteRealmIdentityProviderInstancesAliasRouteHandler,
  deleteRealmRolesByIdRoleIdCompositesRouteHandler,
  deleteRealmRolesByIdRoleIdRouteHandler,
  deleteRealmRolesRoleNameCompositesRouteHandler,
  deleteRealmRolesRoleNameRouteHandler,
  deleteRealmRouteHandler,
  deleteRealmSessionsSessionRouteHandler,
  deleteRealmUsersIdConsentsClientRouteHandler,
  deleteRealmUsersIdCredentialsCredentialIdRouteHandler,
  deleteRealmUsersIdFederatedIdentityProviderRouteHandler,
  deleteRealmUsersIdGroupsGroupIdRouteHandler,
  deleteRealmUsersIdRoleMappingsClientsClientRouteHandler,
  deleteRealmUsersIdRoleMappingsRealmRouteHandler,
  deleteRealmUsersIdRouteHandler,
  getIdNameRouteHandler,
  getRealmAdminEventsRouteHandler,
  getRealmAttackDetectionBruteForceUsersUserIdRouteHandler,
  getRealmAuthenticationAuthenticatorProvidersRouteHandler,
  getRealmAuthenticationClientAuthenticatorProvidersRouteHandler,
  getRealmAuthenticationConfigDescriptionProviderIdRouteHandler,
  getRealmAuthenticationConfigIdRouteHandler,
  getRealmAuthenticationExecutionsExecutionIdRouteHandler,
  getRealmAuthenticationFlowsFlowAliasExecutionsRouteHandler,
  getRealmAuthenticationFlowsIdRouteHandler,
  getRealmAuthenticationFlowsRouteHandler,
  getRealmAuthenticationFormActionProvidersRouteHandler,
  getRealmAuthenticationFormProvidersRouteHandler,
  getRealmAuthenticationPerClientConfigDescriptionRouteHandler,
  getRealmAuthenticationRequiredActionsAliasRouteHandler,
  getRealmAuthenticationRequiredActionsRouteHandler,
  getRealmAuthenticationUnregisteredRequiredActionsRouteHandler,
  getRealmClientRegistrationPolicyProvidersRouteHandler,
  getRealmClientScopesId1ProtocolMappersModelsId2RouteHandler,
  getRealmClientScopesIdProtocolMappersModelsRouteHandler,
  getRealmClientScopesIdProtocolMappersProtocolProtocolRouteHandler,
  getRealmClientScopesIdRouteHandler,
  getRealmClientScopesIdScopeMappingsClientsClientAvailableRouteHandler,
  getRealmClientScopesIdScopeMappingsClientsClientCompositeRouteHandler,
  getRealmClientScopesIdScopeMappingsClientsClientRouteHandler,
  getRealmClientScopesIdScopeMappingsRealmAvailableRouteHandler,
  getRealmClientScopesIdScopeMappingsRealmCompositeRouteHandler,
  getRealmClientScopesIdScopeMappingsRealmRouteHandler,
  getRealmClientScopesIdScopeMappingsRouteHandler,
  getRealmClientScopesRouteHandler,
  getRealmClientSessionStatsRouteHandler,
  getRealmClientsId1ProtocolMappersModelsId2RouteHandler,
  getRealmClientsIdCertificatesAttrRouteHandler,
  getRealmClientsIdClientSecretRouteHandler,
  getRealmClientsIdDefaultClientScopesRouteHandler,
  getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRouteHandler,
  getRealmClientsIdEvaluateScopesProtocolMappersRouteHandler,
  getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRouteHandler,
  getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRouteHandler,
  getRealmClientsIdInstallationProvidersProviderIdRouteHandler,
  getRealmClientsIdManagementPermissionsRouteHandler,
  getRealmClientsIdOfflineSessionCountRouteHandler,
  getRealmClientsIdOfflineSessionsRouteHandler,
  getRealmClientsIdOptionalClientScopesRouteHandler,
  getRealmClientsIdProtocolMappersModelsRouteHandler,
  getRealmClientsIdProtocolMappersProtocolProtocolRouteHandler,
  getRealmClientsIdRolesRoleNameCompositesClientsClientRouteHandler,
  getRealmClientsIdRolesRoleNameCompositesRealmRouteHandler,
  getRealmClientsIdRolesRoleNameCompositesRouteHandler,
  getRealmClientsIdRolesRoleNameGroupsRouteHandler,
  getRealmClientsIdRolesRoleNameManagementPermissionsRouteHandler,
  getRealmClientsIdRolesRoleNameRouteHandler,
  getRealmClientsIdRolesRoleNameUsersRouteHandler,
  getRealmClientsIdRolesRouteHandler,
  getRealmClientsIdRouteHandler,
  getRealmClientsIdScopeMappingsClientsClientAvailableRouteHandler,
  getRealmClientsIdScopeMappingsClientsClientCompositeRouteHandler,
  getRealmClientsIdScopeMappingsClientsClientRouteHandler,
  getRealmClientsIdScopeMappingsRealmAvailableRouteHandler,
  getRealmClientsIdScopeMappingsRealmCompositeRouteHandler,
  getRealmClientsIdScopeMappingsRealmRouteHandler,
  getRealmClientsIdScopeMappingsRouteHandler,
  getRealmClientsIdServiceAccountUserRouteHandler,
  getRealmClientsIdSessionCountRouteHandler,
  getRealmClientsIdTestNodesAvailableRouteHandler,
  getRealmClientsIdUserSessionsRouteHandler,
  getRealmClientsInitialAccessRouteHandler,
  getRealmClientsRouteHandler,
  getRealmComponentsIdRouteHandler,
  getRealmComponentsIdSubComponentTypesRouteHandler,
  getRealmComponentsRouteHandler,
  getRealmCredentialRegistratorsRouteHandler,
  getRealmDefaultDefaultClientScopesRouteHandler,
  getRealmDefaultGroupsRouteHandler,
  getRealmDefaultOptionalClientScopesRouteHandler,
  getRealmEventsConfigRouteHandler,
  getRealmEventsRouteHandler,
  getRealmGroupByPathPathRouteHandler,
  getRealmGroupsCountRouteHandler,
  getRealmGroupsIdManagementPermissionsRouteHandler,
  getRealmGroupsIdMembersRouteHandler,
  getRealmGroupsIdRoleMappingsClientsClientAvailableRouteHandler,
  getRealmGroupsIdRoleMappingsClientsClientCompositeRouteHandler,
  getRealmGroupsIdRoleMappingsClientsClientRouteHandler,
  getRealmGroupsIdRoleMappingsRealmAvailableRouteHandler,
  getRealmGroupsIdRoleMappingsRealmCompositeRouteHandler,
  getRealmGroupsIdRoleMappingsRealmRouteHandler,
  getRealmGroupsIdRoleMappingsRouteHandler,
  getRealmGroupsIdRouteHandler,
  getRealmGroupsRouteHandler,
  getRealmIdentityProviderInstancesAliasExportRouteHandler,
  getRealmIdentityProviderInstancesAliasManagementPermissionsRouteHandler,
  getRealmIdentityProviderInstancesAliasMappersIdRouteHandler,
  getRealmIdentityProviderInstancesAliasMappersRouteHandler,
  getRealmIdentityProviderInstancesAliasMapperTypesRouteHandler,
  getRealmIdentityProviderInstancesAliasRouteHandler,
  getRealmIdentityProviderInstancesRouteHandler,
  getRealmIdentityProviderProvidersProviderIdRouteHandler,
  getRealmKeysRouteHandler,
  getRealmRolesByIdRoleIdCompositesClientsClientRouteHandler,
  getRealmRolesByIdRoleIdCompositesRealmRouteHandler,
  getRealmRolesByIdRoleIdCompositesRouteHandler,
  getRealmRolesByIdRoleIdManagementPermissionsRouteHandler,
  getRealmRolesByIdRoleIdRouteHandler,
  getRealmRolesRoleNameCompositesClientsClientRouteHandler,
  getRealmRolesRoleNameCompositesRealmRouteHandler,
  getRealmRolesRoleNameCompositesRouteHandler,
  getRealmRolesRoleNameGroupsRouteHandler,
  getRealmRolesRoleNameManagementPermissionsRouteHandler,
  getRealmRolesRoleNameRouteHandler,
  getRealmRolesRoleNameUsersRouteHandler,
  getRealmRolesRouteHandler,
  getRealmRouteHandler,
  getRealmUsersCountRouteHandler,
  getRealmUsersIdConfiguredUserStorageCredentialTypesRouteHandler,
  getRealmUsersIdConsentsRouteHandler,
  getRealmUsersIdCredentialsRouteHandler,
  getRealmUsersIdFederatedIdentityRouteHandler,
  getRealmUsersIdGroupsCountRouteHandler,
  getRealmUsersIdGroupsRouteHandler,
  getRealmUsersIdOfflineSessionsClientIdRouteHandler,
  getRealmUsersIdRoleMappingsClientsClientAvailableRouteHandler,
  getRealmUsersIdRoleMappingsClientsClientCompositeRouteHandler,
  getRealmUsersIdRoleMappingsClientsClientRouteHandler,
  getRealmUsersIdRoleMappingsRealmAvailableRouteHandler,
  getRealmUsersIdRoleMappingsRealmCompositeRouteHandler,
  getRealmUsersIdRoleMappingsRealmRouteHandler,
  getRealmUsersIdRoleMappingsRouteHandler,
  getRealmUsersIdRouteHandler,
  getRealmUsersIdSessionsRouteHandler,
  getRealmUsersManagementPermissionsRouteHandler,
  getRealmUsersRouteHandler,
  getRealmUserStorageIdNameRouteHandler,
  getRouteHandler,
  postRealmAuthenticationExecutionsExecutionIdConfigRouteHandler,
  postRealmAuthenticationExecutionsExecutionIdLowerPriorityRouteHandler,
  postRealmAuthenticationExecutionsExecutionIdRaisePriorityRouteHandler,
  postRealmAuthenticationExecutionsRouteHandler,
  postRealmAuthenticationFlowsFlowAliasCopyRouteHandler,
  postRealmAuthenticationFlowsFlowAliasExecutionsExecutionRouteHandler,
  postRealmAuthenticationFlowsFlowAliasExecutionsFlowRouteHandler,
  postRealmAuthenticationFlowsRouteHandler,
  postRealmAuthenticationRegisterRequiredActionRouteHandler,
  postRealmAuthenticationRequiredActionsAliasLowerPriorityRouteHandler,
  postRealmAuthenticationRequiredActionsAliasRaisePriorityRouteHandler,
  postRealmClearKeysCacheRouteHandler,
  postRealmClearRealmCacheRouteHandler,
  postRealmClearUserCacheRouteHandler,
  postRealmClientDescriptionConverterRouteHandler,
  postRealmClientScopesIdProtocolMappersAddModelsRouteHandler,
  postRealmClientScopesIdProtocolMappersModelsRouteHandler,
  postRealmClientScopesIdScopeMappingsClientsClientRouteHandler,
  postRealmClientScopesIdScopeMappingsRealmRouteHandler,
  postRealmClientScopesRouteHandler,
  postRealmClientsIdCertificatesAttrDownloadRouteHandler,
  postRealmClientsIdCertificatesAttrGenerateAndDownloadRouteHandler,
  postRealmClientsIdCertificatesAttrGenerateRouteHandler,
  postRealmClientsIdCertificatesAttrUploadCertificateRouteHandler,
  postRealmClientsIdCertificatesAttrUploadRouteHandler,
  postRealmClientsIdClientSecretRouteHandler,
  postRealmClientsIdNodesRouteHandler,
  postRealmClientsIdProtocolMappersAddModelsRouteHandler,
  postRealmClientsIdProtocolMappersModelsRouteHandler,
  postRealmClientsIdPushRevocationRouteHandler,
  postRealmClientsIdRegistrationAccessTokenRouteHandler,
  postRealmClientsIdRolesRoleNameCompositesRouteHandler,
  postRealmClientsIdRolesRouteHandler,
  postRealmClientsIdScopeMappingsClientsClientRouteHandler,
  postRealmClientsIdScopeMappingsRealmRouteHandler,
  postRealmClientsInitialAccessRouteHandler,
  postRealmClientsRouteHandler,
  postRealmComponentsRouteHandler,
  postRealmGroupsIdChildrenRouteHandler,
  postRealmGroupsIdRoleMappingsClientsClientRouteHandler,
  postRealmGroupsIdRoleMappingsRealmRouteHandler,
  postRealmGroupsRouteHandler,
  postRealmIdentityProviderImportConfigRouteHandler,
  postRealmIdentityProviderInstancesAliasMappersRouteHandler,
  postRealmIdentityProviderInstancesRouteHandler,
  postRealmLogoutAllRouteHandler,
  postRealmPartialExportRouteHandler,
  postRealmPartialImportRouteHandler,
  postRealmPushRevocationRouteHandler,
  postRealmRolesByIdRoleIdCompositesRouteHandler,
  postRealmRolesRoleNameCompositesRouteHandler,
  postRealmRolesRouteHandler,
  postRealmTestLDAPConnectionRouteHandler,
  postRealmTestSMTPConnectionRouteHandler,
  postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRouteHandler,
  postRealmUsersIdCredentialsCredentialIdMoveToFirstRouteHandler,
  postRealmUsersIdFederatedIdentityProviderRouteHandler,
  postRealmUsersIdImpersonationRouteHandler,
  postRealmUsersIdLogoutRouteHandler,
  postRealmUsersIdRoleMappingsClientsClientRouteHandler,
  postRealmUsersIdRoleMappingsRealmRouteHandler,
  postRealmUsersRouteHandler,
  postRealmUserStorageIdRemoveImportedUsersRouteHandler,
  postRealmUserStorageIdSyncRouteHandler,
  postRealmUserStorageIdUnlinkUsersRouteHandler,
  postRealmUserStorageParentIdMappersIdSyncRouteHandler,
  postRouteHandler,
  putRealmAuthenticationConfigIdRouteHandler,
  putRealmAuthenticationFlowsFlowAliasExecutionsRouteHandler,
  putRealmAuthenticationFlowsIdRouteHandler,
  putRealmAuthenticationRequiredActionsAliasRouteHandler,
  putRealmClientScopesId1ProtocolMappersModelsId2RouteHandler,
  putRealmClientScopesIdRouteHandler,
  putRealmClientsId1ProtocolMappersModelsId2RouteHandler,
  putRealmClientsIdDefaultClientScopesClientScopeIdRouteHandler,
  putRealmClientsIdManagementPermissionsRouteHandler,
  putRealmClientsIdOptionalClientScopesClientScopeIdRouteHandler,
  putRealmClientsIdRolesRoleNameManagementPermissionsRouteHandler,
  putRealmClientsIdRolesRoleNameRouteHandler,
  putRealmClientsIdRouteHandler,
  putRealmComponentsIdRouteHandler,
  putRealmDefaultDefaultClientScopesClientScopeIdRouteHandler,
  putRealmDefaultGroupsGroupIdRouteHandler,
  putRealmDefaultOptionalClientScopesClientScopeIdRouteHandler,
  putRealmEventsConfigRouteHandler,
  putRealmGroupsIdManagementPermissionsRouteHandler,
  putRealmGroupsIdRouteHandler,
  putRealmIdentityProviderInstancesAliasManagementPermissionsRouteHandler,
  putRealmIdentityProviderInstancesAliasMappersIdRouteHandler,
  putRealmIdentityProviderInstancesAliasRouteHandler,
  putRealmRolesByIdRoleIdManagementPermissionsRouteHandler,
  putRealmRolesByIdRoleIdRouteHandler,
  putRealmRolesRoleNameManagementPermissionsRouteHandler,
  putRealmRolesRoleNameRouteHandler,
  putRealmRouteHandler,
  putRealmUsersIdCredentialsCredentialIdUserLabelRouteHandler,
  putRealmUsersIdDisableCredentialTypesRouteHandler,
  putRealmUsersIdExecuteActionsEmailRouteHandler,
  putRealmUsersIdGroupsGroupIdRouteHandler,
  putRealmUsersIdResetPasswordRouteHandler,
  putRealmUsersIdRouteHandler,
  putRealmUsersIdSendVerifyEmailRouteHandler,
  putRealmUsersManagementPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(postRoute, postRouteHandler)
  .openapi(getIdNameRoute, getIdNameRouteHandler)
  .openapi(deleteRealmRoute, deleteRealmRouteHandler)
  .openapi(getRealmRoute, getRealmRouteHandler)
  .openapi(putRealmRoute, putRealmRouteHandler)
  .openapi(deleteRealmAdminEventsRoute, deleteRealmAdminEventsRouteHandler)
  .openapi(getRealmAdminEventsRoute, getRealmAdminEventsRouteHandler)
  .openapi(
    deleteRealmAttackDetectionBruteForceUsersRoute,
    deleteRealmAttackDetectionBruteForceUsersRouteHandler,
  )
  .openapi(
    deleteRealmAttackDetectionBruteForceUsersUserIdRoute,
    deleteRealmAttackDetectionBruteForceUsersUserIdRouteHandler,
  )
  .openapi(
    getRealmAttackDetectionBruteForceUsersUserIdRoute,
    getRealmAttackDetectionBruteForceUsersUserIdRouteHandler,
  )
  .openapi(
    getRealmAuthenticationAuthenticatorProvidersRoute,
    getRealmAuthenticationAuthenticatorProvidersRouteHandler,
  )
  .openapi(
    getRealmAuthenticationClientAuthenticatorProvidersRoute,
    getRealmAuthenticationClientAuthenticatorProvidersRouteHandler,
  )
  .openapi(
    getRealmAuthenticationConfigDescriptionProviderIdRoute,
    getRealmAuthenticationConfigDescriptionProviderIdRouteHandler,
  )
  .openapi(deleteRealmAuthenticationConfigIdRoute, deleteRealmAuthenticationConfigIdRouteHandler)
  .openapi(getRealmAuthenticationConfigIdRoute, getRealmAuthenticationConfigIdRouteHandler)
  .openapi(putRealmAuthenticationConfigIdRoute, putRealmAuthenticationConfigIdRouteHandler)
  .openapi(postRealmAuthenticationExecutionsRoute, postRealmAuthenticationExecutionsRouteHandler)
  .openapi(
    deleteRealmAuthenticationExecutionsExecutionIdRoute,
    deleteRealmAuthenticationExecutionsExecutionIdRouteHandler,
  )
  .openapi(
    getRealmAuthenticationExecutionsExecutionIdRoute,
    getRealmAuthenticationExecutionsExecutionIdRouteHandler,
  )
  .openapi(
    postRealmAuthenticationExecutionsExecutionIdConfigRoute,
    postRealmAuthenticationExecutionsExecutionIdConfigRouteHandler,
  )
  .openapi(
    postRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute,
    postRealmAuthenticationExecutionsExecutionIdLowerPriorityRouteHandler,
  )
  .openapi(
    postRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute,
    postRealmAuthenticationExecutionsExecutionIdRaisePriorityRouteHandler,
  )
  .openapi(getRealmAuthenticationFlowsRoute, getRealmAuthenticationFlowsRouteHandler)
  .openapi(postRealmAuthenticationFlowsRoute, postRealmAuthenticationFlowsRouteHandler)
  .openapi(
    postRealmAuthenticationFlowsFlowAliasCopyRoute,
    postRealmAuthenticationFlowsFlowAliasCopyRouteHandler,
  )
  .openapi(
    getRealmAuthenticationFlowsFlowAliasExecutionsRoute,
    getRealmAuthenticationFlowsFlowAliasExecutionsRouteHandler,
  )
  .openapi(
    putRealmAuthenticationFlowsFlowAliasExecutionsRoute,
    putRealmAuthenticationFlowsFlowAliasExecutionsRouteHandler,
  )
  .openapi(
    postRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute,
    postRealmAuthenticationFlowsFlowAliasExecutionsExecutionRouteHandler,
  )
  .openapi(
    postRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute,
    postRealmAuthenticationFlowsFlowAliasExecutionsFlowRouteHandler,
  )
  .openapi(deleteRealmAuthenticationFlowsIdRoute, deleteRealmAuthenticationFlowsIdRouteHandler)
  .openapi(getRealmAuthenticationFlowsIdRoute, getRealmAuthenticationFlowsIdRouteHandler)
  .openapi(putRealmAuthenticationFlowsIdRoute, putRealmAuthenticationFlowsIdRouteHandler)
  .openapi(
    getRealmAuthenticationFormActionProvidersRoute,
    getRealmAuthenticationFormActionProvidersRouteHandler,
  )
  .openapi(
    getRealmAuthenticationFormProvidersRoute,
    getRealmAuthenticationFormProvidersRouteHandler,
  )
  .openapi(
    getRealmAuthenticationPerClientConfigDescriptionRoute,
    getRealmAuthenticationPerClientConfigDescriptionRouteHandler,
  )
  .openapi(
    postRealmAuthenticationRegisterRequiredActionRoute,
    postRealmAuthenticationRegisterRequiredActionRouteHandler,
  )
  .openapi(
    getRealmAuthenticationRequiredActionsRoute,
    getRealmAuthenticationRequiredActionsRouteHandler,
  )
  .openapi(
    deleteRealmAuthenticationRequiredActionsAliasRoute,
    deleteRealmAuthenticationRequiredActionsAliasRouteHandler,
  )
  .openapi(
    getRealmAuthenticationRequiredActionsAliasRoute,
    getRealmAuthenticationRequiredActionsAliasRouteHandler,
  )
  .openapi(
    putRealmAuthenticationRequiredActionsAliasRoute,
    putRealmAuthenticationRequiredActionsAliasRouteHandler,
  )
  .openapi(
    postRealmAuthenticationRequiredActionsAliasLowerPriorityRoute,
    postRealmAuthenticationRequiredActionsAliasLowerPriorityRouteHandler,
  )
  .openapi(
    postRealmAuthenticationRequiredActionsAliasRaisePriorityRoute,
    postRealmAuthenticationRequiredActionsAliasRaisePriorityRouteHandler,
  )
  .openapi(
    getRealmAuthenticationUnregisteredRequiredActionsRoute,
    getRealmAuthenticationUnregisteredRequiredActionsRouteHandler,
  )
  .openapi(postRealmClearKeysCacheRoute, postRealmClearKeysCacheRouteHandler)
  .openapi(postRealmClearRealmCacheRoute, postRealmClearRealmCacheRouteHandler)
  .openapi(postRealmClearUserCacheRoute, postRealmClearUserCacheRouteHandler)
  .openapi(
    postRealmClientDescriptionConverterRoute,
    postRealmClientDescriptionConverterRouteHandler,
  )
  .openapi(
    getRealmClientRegistrationPolicyProvidersRoute,
    getRealmClientRegistrationPolicyProvidersRouteHandler,
  )
  .openapi(getRealmClientScopesRoute, getRealmClientScopesRouteHandler)
  .openapi(postRealmClientScopesRoute, postRealmClientScopesRouteHandler)
  .openapi(
    deleteRealmClientScopesId1ProtocolMappersModelsId2Route,
    deleteRealmClientScopesId1ProtocolMappersModelsId2RouteHandler,
  )
  .openapi(
    getRealmClientScopesId1ProtocolMappersModelsId2Route,
    getRealmClientScopesId1ProtocolMappersModelsId2RouteHandler,
  )
  .openapi(
    putRealmClientScopesId1ProtocolMappersModelsId2Route,
    putRealmClientScopesId1ProtocolMappersModelsId2RouteHandler,
  )
  .openapi(deleteRealmClientScopesIdRoute, deleteRealmClientScopesIdRouteHandler)
  .openapi(getRealmClientScopesIdRoute, getRealmClientScopesIdRouteHandler)
  .openapi(putRealmClientScopesIdRoute, putRealmClientScopesIdRouteHandler)
  .openapi(
    postRealmClientScopesIdProtocolMappersAddModelsRoute,
    postRealmClientScopesIdProtocolMappersAddModelsRouteHandler,
  )
  .openapi(
    getRealmClientScopesIdProtocolMappersModelsRoute,
    getRealmClientScopesIdProtocolMappersModelsRouteHandler,
  )
  .openapi(
    postRealmClientScopesIdProtocolMappersModelsRoute,
    postRealmClientScopesIdProtocolMappersModelsRouteHandler,
  )
  .openapi(
    getRealmClientScopesIdProtocolMappersProtocolProtocolRoute,
    getRealmClientScopesIdProtocolMappersProtocolProtocolRouteHandler,
  )
  .openapi(
    getRealmClientScopesIdScopeMappingsRoute,
    getRealmClientScopesIdScopeMappingsRouteHandler,
  )
  .openapi(
    deleteRealmClientScopesIdScopeMappingsClientsClientRoute,
    deleteRealmClientScopesIdScopeMappingsClientsClientRouteHandler,
  )
  .openapi(
    getRealmClientScopesIdScopeMappingsClientsClientRoute,
    getRealmClientScopesIdScopeMappingsClientsClientRouteHandler,
  )
  .openapi(
    postRealmClientScopesIdScopeMappingsClientsClientRoute,
    postRealmClientScopesIdScopeMappingsClientsClientRouteHandler,
  )
  .openapi(
    getRealmClientScopesIdScopeMappingsClientsClientAvailableRoute,
    getRealmClientScopesIdScopeMappingsClientsClientAvailableRouteHandler,
  )
  .openapi(
    getRealmClientScopesIdScopeMappingsClientsClientCompositeRoute,
    getRealmClientScopesIdScopeMappingsClientsClientCompositeRouteHandler,
  )
  .openapi(
    deleteRealmClientScopesIdScopeMappingsRealmRoute,
    deleteRealmClientScopesIdScopeMappingsRealmRouteHandler,
  )
  .openapi(
    getRealmClientScopesIdScopeMappingsRealmRoute,
    getRealmClientScopesIdScopeMappingsRealmRouteHandler,
  )
  .openapi(
    postRealmClientScopesIdScopeMappingsRealmRoute,
    postRealmClientScopesIdScopeMappingsRealmRouteHandler,
  )
  .openapi(
    getRealmClientScopesIdScopeMappingsRealmAvailableRoute,
    getRealmClientScopesIdScopeMappingsRealmAvailableRouteHandler,
  )
  .openapi(
    getRealmClientScopesIdScopeMappingsRealmCompositeRoute,
    getRealmClientScopesIdScopeMappingsRealmCompositeRouteHandler,
  )
  .openapi(getRealmClientSessionStatsRoute, getRealmClientSessionStatsRouteHandler)
  .openapi(getRealmClientsRoute, getRealmClientsRouteHandler)
  .openapi(postRealmClientsRoute, postRealmClientsRouteHandler)
  .openapi(getRealmClientsInitialAccessRoute, getRealmClientsInitialAccessRouteHandler)
  .openapi(postRealmClientsInitialAccessRoute, postRealmClientsInitialAccessRouteHandler)
  .openapi(deleteRealmClientsInitialAccessIdRoute, deleteRealmClientsInitialAccessIdRouteHandler)
  .openapi(
    deleteRealmClientsId1ProtocolMappersModelsId2Route,
    deleteRealmClientsId1ProtocolMappersModelsId2RouteHandler,
  )
  .openapi(
    getRealmClientsId1ProtocolMappersModelsId2Route,
    getRealmClientsId1ProtocolMappersModelsId2RouteHandler,
  )
  .openapi(
    putRealmClientsId1ProtocolMappersModelsId2Route,
    putRealmClientsId1ProtocolMappersModelsId2RouteHandler,
  )
  .openapi(deleteRealmClientsIdRoute, deleteRealmClientsIdRouteHandler)
  .openapi(getRealmClientsIdRoute, getRealmClientsIdRouteHandler)
  .openapi(putRealmClientsIdRoute, putRealmClientsIdRouteHandler)
  .openapi(getRealmClientsIdCertificatesAttrRoute, getRealmClientsIdCertificatesAttrRouteHandler)
  .openapi(
    postRealmClientsIdCertificatesAttrDownloadRoute,
    postRealmClientsIdCertificatesAttrDownloadRouteHandler,
  )
  .openapi(
    postRealmClientsIdCertificatesAttrGenerateRoute,
    postRealmClientsIdCertificatesAttrGenerateRouteHandler,
  )
  .openapi(
    postRealmClientsIdCertificatesAttrGenerateAndDownloadRoute,
    postRealmClientsIdCertificatesAttrGenerateAndDownloadRouteHandler,
  )
  .openapi(
    postRealmClientsIdCertificatesAttrUploadRoute,
    postRealmClientsIdCertificatesAttrUploadRouteHandler,
  )
  .openapi(
    postRealmClientsIdCertificatesAttrUploadCertificateRoute,
    postRealmClientsIdCertificatesAttrUploadCertificateRouteHandler,
  )
  .openapi(getRealmClientsIdClientSecretRoute, getRealmClientsIdClientSecretRouteHandler)
  .openapi(postRealmClientsIdClientSecretRoute, postRealmClientsIdClientSecretRouteHandler)
  .openapi(
    getRealmClientsIdDefaultClientScopesRoute,
    getRealmClientsIdDefaultClientScopesRouteHandler,
  )
  .openapi(
    deleteRealmClientsIdDefaultClientScopesClientScopeIdRoute,
    deleteRealmClientsIdDefaultClientScopesClientScopeIdRouteHandler,
  )
  .openapi(
    putRealmClientsIdDefaultClientScopesClientScopeIdRoute,
    putRealmClientsIdDefaultClientScopesClientScopeIdRouteHandler,
  )
  .openapi(
    getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRoute,
    getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRouteHandler,
  )
  .openapi(
    getRealmClientsIdEvaluateScopesProtocolMappersRoute,
    getRealmClientsIdEvaluateScopesProtocolMappersRouteHandler,
  )
  .openapi(
    getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute,
    getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRouteHandler,
  )
  .openapi(
    getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute,
    getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRouteHandler,
  )
  .openapi(
    getRealmClientsIdInstallationProvidersProviderIdRoute,
    getRealmClientsIdInstallationProvidersProviderIdRouteHandler,
  )
  .openapi(
    getRealmClientsIdManagementPermissionsRoute,
    getRealmClientsIdManagementPermissionsRouteHandler,
  )
  .openapi(
    putRealmClientsIdManagementPermissionsRoute,
    putRealmClientsIdManagementPermissionsRouteHandler,
  )
  .openapi(postRealmClientsIdNodesRoute, postRealmClientsIdNodesRouteHandler)
  .openapi(deleteRealmClientsIdNodesNodeRoute, deleteRealmClientsIdNodesNodeRouteHandler)
  .openapi(
    getRealmClientsIdOfflineSessionCountRoute,
    getRealmClientsIdOfflineSessionCountRouteHandler,
  )
  .openapi(getRealmClientsIdOfflineSessionsRoute, getRealmClientsIdOfflineSessionsRouteHandler)
  .openapi(
    getRealmClientsIdOptionalClientScopesRoute,
    getRealmClientsIdOptionalClientScopesRouteHandler,
  )
  .openapi(
    deleteRealmClientsIdOptionalClientScopesClientScopeIdRoute,
    deleteRealmClientsIdOptionalClientScopesClientScopeIdRouteHandler,
  )
  .openapi(
    putRealmClientsIdOptionalClientScopesClientScopeIdRoute,
    putRealmClientsIdOptionalClientScopesClientScopeIdRouteHandler,
  )
  .openapi(
    postRealmClientsIdProtocolMappersAddModelsRoute,
    postRealmClientsIdProtocolMappersAddModelsRouteHandler,
  )
  .openapi(
    getRealmClientsIdProtocolMappersModelsRoute,
    getRealmClientsIdProtocolMappersModelsRouteHandler,
  )
  .openapi(
    postRealmClientsIdProtocolMappersModelsRoute,
    postRealmClientsIdProtocolMappersModelsRouteHandler,
  )
  .openapi(
    getRealmClientsIdProtocolMappersProtocolProtocolRoute,
    getRealmClientsIdProtocolMappersProtocolProtocolRouteHandler,
  )
  .openapi(postRealmClientsIdPushRevocationRoute, postRealmClientsIdPushRevocationRouteHandler)
  .openapi(
    postRealmClientsIdRegistrationAccessTokenRoute,
    postRealmClientsIdRegistrationAccessTokenRouteHandler,
  )
  .openapi(getRealmClientsIdRolesRoute, getRealmClientsIdRolesRouteHandler)
  .openapi(postRealmClientsIdRolesRoute, postRealmClientsIdRolesRouteHandler)
  .openapi(deleteRealmClientsIdRolesRoleNameRoute, deleteRealmClientsIdRolesRoleNameRouteHandler)
  .openapi(getRealmClientsIdRolesRoleNameRoute, getRealmClientsIdRolesRoleNameRouteHandler)
  .openapi(putRealmClientsIdRolesRoleNameRoute, putRealmClientsIdRolesRoleNameRouteHandler)
  .openapi(
    deleteRealmClientsIdRolesRoleNameCompositesRoute,
    deleteRealmClientsIdRolesRoleNameCompositesRouteHandler,
  )
  .openapi(
    getRealmClientsIdRolesRoleNameCompositesRoute,
    getRealmClientsIdRolesRoleNameCompositesRouteHandler,
  )
  .openapi(
    postRealmClientsIdRolesRoleNameCompositesRoute,
    postRealmClientsIdRolesRoleNameCompositesRouteHandler,
  )
  .openapi(
    getRealmClientsIdRolesRoleNameCompositesClientsClientRoute,
    getRealmClientsIdRolesRoleNameCompositesClientsClientRouteHandler,
  )
  .openapi(
    getRealmClientsIdRolesRoleNameCompositesRealmRoute,
    getRealmClientsIdRolesRoleNameCompositesRealmRouteHandler,
  )
  .openapi(
    getRealmClientsIdRolesRoleNameGroupsRoute,
    getRealmClientsIdRolesRoleNameGroupsRouteHandler,
  )
  .openapi(
    getRealmClientsIdRolesRoleNameManagementPermissionsRoute,
    getRealmClientsIdRolesRoleNameManagementPermissionsRouteHandler,
  )
  .openapi(
    putRealmClientsIdRolesRoleNameManagementPermissionsRoute,
    putRealmClientsIdRolesRoleNameManagementPermissionsRouteHandler,
  )
  .openapi(
    getRealmClientsIdRolesRoleNameUsersRoute,
    getRealmClientsIdRolesRoleNameUsersRouteHandler,
  )
  .openapi(getRealmClientsIdScopeMappingsRoute, getRealmClientsIdScopeMappingsRouteHandler)
  .openapi(
    deleteRealmClientsIdScopeMappingsClientsClientRoute,
    deleteRealmClientsIdScopeMappingsClientsClientRouteHandler,
  )
  .openapi(
    getRealmClientsIdScopeMappingsClientsClientRoute,
    getRealmClientsIdScopeMappingsClientsClientRouteHandler,
  )
  .openapi(
    postRealmClientsIdScopeMappingsClientsClientRoute,
    postRealmClientsIdScopeMappingsClientsClientRouteHandler,
  )
  .openapi(
    getRealmClientsIdScopeMappingsClientsClientAvailableRoute,
    getRealmClientsIdScopeMappingsClientsClientAvailableRouteHandler,
  )
  .openapi(
    getRealmClientsIdScopeMappingsClientsClientCompositeRoute,
    getRealmClientsIdScopeMappingsClientsClientCompositeRouteHandler,
  )
  .openapi(
    deleteRealmClientsIdScopeMappingsRealmRoute,
    deleteRealmClientsIdScopeMappingsRealmRouteHandler,
  )
  .openapi(
    getRealmClientsIdScopeMappingsRealmRoute,
    getRealmClientsIdScopeMappingsRealmRouteHandler,
  )
  .openapi(
    postRealmClientsIdScopeMappingsRealmRoute,
    postRealmClientsIdScopeMappingsRealmRouteHandler,
  )
  .openapi(
    getRealmClientsIdScopeMappingsRealmAvailableRoute,
    getRealmClientsIdScopeMappingsRealmAvailableRouteHandler,
  )
  .openapi(
    getRealmClientsIdScopeMappingsRealmCompositeRoute,
    getRealmClientsIdScopeMappingsRealmCompositeRouteHandler,
  )
  .openapi(
    getRealmClientsIdServiceAccountUserRoute,
    getRealmClientsIdServiceAccountUserRouteHandler,
  )
  .openapi(getRealmClientsIdSessionCountRoute, getRealmClientsIdSessionCountRouteHandler)
  .openapi(
    getRealmClientsIdTestNodesAvailableRoute,
    getRealmClientsIdTestNodesAvailableRouteHandler,
  )
  .openapi(getRealmClientsIdUserSessionsRoute, getRealmClientsIdUserSessionsRouteHandler)
  .openapi(getRealmComponentsRoute, getRealmComponentsRouteHandler)
  .openapi(postRealmComponentsRoute, postRealmComponentsRouteHandler)
  .openapi(deleteRealmComponentsIdRoute, deleteRealmComponentsIdRouteHandler)
  .openapi(getRealmComponentsIdRoute, getRealmComponentsIdRouteHandler)
  .openapi(putRealmComponentsIdRoute, putRealmComponentsIdRouteHandler)
  .openapi(
    getRealmComponentsIdSubComponentTypesRoute,
    getRealmComponentsIdSubComponentTypesRouteHandler,
  )
  .openapi(getRealmCredentialRegistratorsRoute, getRealmCredentialRegistratorsRouteHandler)
  .openapi(getRealmDefaultDefaultClientScopesRoute, getRealmDefaultDefaultClientScopesRouteHandler)
  .openapi(
    deleteRealmDefaultDefaultClientScopesClientScopeIdRoute,
    deleteRealmDefaultDefaultClientScopesClientScopeIdRouteHandler,
  )
  .openapi(
    putRealmDefaultDefaultClientScopesClientScopeIdRoute,
    putRealmDefaultDefaultClientScopesClientScopeIdRouteHandler,
  )
  .openapi(getRealmDefaultGroupsRoute, getRealmDefaultGroupsRouteHandler)
  .openapi(deleteRealmDefaultGroupsGroupIdRoute, deleteRealmDefaultGroupsGroupIdRouteHandler)
  .openapi(putRealmDefaultGroupsGroupIdRoute, putRealmDefaultGroupsGroupIdRouteHandler)
  .openapi(
    getRealmDefaultOptionalClientScopesRoute,
    getRealmDefaultOptionalClientScopesRouteHandler,
  )
  .openapi(
    deleteRealmDefaultOptionalClientScopesClientScopeIdRoute,
    deleteRealmDefaultOptionalClientScopesClientScopeIdRouteHandler,
  )
  .openapi(
    putRealmDefaultOptionalClientScopesClientScopeIdRoute,
    putRealmDefaultOptionalClientScopesClientScopeIdRouteHandler,
  )
  .openapi(deleteRealmEventsRoute, deleteRealmEventsRouteHandler)
  .openapi(getRealmEventsRoute, getRealmEventsRouteHandler)
  .openapi(getRealmEventsConfigRoute, getRealmEventsConfigRouteHandler)
  .openapi(putRealmEventsConfigRoute, putRealmEventsConfigRouteHandler)
  .openapi(getRealmGroupByPathPathRoute, getRealmGroupByPathPathRouteHandler)
  .openapi(getRealmGroupsRoute, getRealmGroupsRouteHandler)
  .openapi(postRealmGroupsRoute, postRealmGroupsRouteHandler)
  .openapi(getRealmGroupsCountRoute, getRealmGroupsCountRouteHandler)
  .openapi(deleteRealmGroupsIdRoute, deleteRealmGroupsIdRouteHandler)
  .openapi(getRealmGroupsIdRoute, getRealmGroupsIdRouteHandler)
  .openapi(putRealmGroupsIdRoute, putRealmGroupsIdRouteHandler)
  .openapi(postRealmGroupsIdChildrenRoute, postRealmGroupsIdChildrenRouteHandler)
  .openapi(
    getRealmGroupsIdManagementPermissionsRoute,
    getRealmGroupsIdManagementPermissionsRouteHandler,
  )
  .openapi(
    putRealmGroupsIdManagementPermissionsRoute,
    putRealmGroupsIdManagementPermissionsRouteHandler,
  )
  .openapi(getRealmGroupsIdMembersRoute, getRealmGroupsIdMembersRouteHandler)
  .openapi(getRealmGroupsIdRoleMappingsRoute, getRealmGroupsIdRoleMappingsRouteHandler)
  .openapi(
    deleteRealmGroupsIdRoleMappingsClientsClientRoute,
    deleteRealmGroupsIdRoleMappingsClientsClientRouteHandler,
  )
  .openapi(
    getRealmGroupsIdRoleMappingsClientsClientRoute,
    getRealmGroupsIdRoleMappingsClientsClientRouteHandler,
  )
  .openapi(
    postRealmGroupsIdRoleMappingsClientsClientRoute,
    postRealmGroupsIdRoleMappingsClientsClientRouteHandler,
  )
  .openapi(
    getRealmGroupsIdRoleMappingsClientsClientAvailableRoute,
    getRealmGroupsIdRoleMappingsClientsClientAvailableRouteHandler,
  )
  .openapi(
    getRealmGroupsIdRoleMappingsClientsClientCompositeRoute,
    getRealmGroupsIdRoleMappingsClientsClientCompositeRouteHandler,
  )
  .openapi(
    deleteRealmGroupsIdRoleMappingsRealmRoute,
    deleteRealmGroupsIdRoleMappingsRealmRouteHandler,
  )
  .openapi(getRealmGroupsIdRoleMappingsRealmRoute, getRealmGroupsIdRoleMappingsRealmRouteHandler)
  .openapi(postRealmGroupsIdRoleMappingsRealmRoute, postRealmGroupsIdRoleMappingsRealmRouteHandler)
  .openapi(
    getRealmGroupsIdRoleMappingsRealmAvailableRoute,
    getRealmGroupsIdRoleMappingsRealmAvailableRouteHandler,
  )
  .openapi(
    getRealmGroupsIdRoleMappingsRealmCompositeRoute,
    getRealmGroupsIdRoleMappingsRealmCompositeRouteHandler,
  )
  .openapi(
    postRealmIdentityProviderImportConfigRoute,
    postRealmIdentityProviderImportConfigRouteHandler,
  )
  .openapi(getRealmIdentityProviderInstancesRoute, getRealmIdentityProviderInstancesRouteHandler)
  .openapi(postRealmIdentityProviderInstancesRoute, postRealmIdentityProviderInstancesRouteHandler)
  .openapi(
    deleteRealmIdentityProviderInstancesAliasRoute,
    deleteRealmIdentityProviderInstancesAliasRouteHandler,
  )
  .openapi(
    getRealmIdentityProviderInstancesAliasRoute,
    getRealmIdentityProviderInstancesAliasRouteHandler,
  )
  .openapi(
    putRealmIdentityProviderInstancesAliasRoute,
    putRealmIdentityProviderInstancesAliasRouteHandler,
  )
  .openapi(
    getRealmIdentityProviderInstancesAliasExportRoute,
    getRealmIdentityProviderInstancesAliasExportRouteHandler,
  )
  .openapi(
    getRealmIdentityProviderInstancesAliasManagementPermissionsRoute,
    getRealmIdentityProviderInstancesAliasManagementPermissionsRouteHandler,
  )
  .openapi(
    putRealmIdentityProviderInstancesAliasManagementPermissionsRoute,
    putRealmIdentityProviderInstancesAliasManagementPermissionsRouteHandler,
  )
  .openapi(
    getRealmIdentityProviderInstancesAliasMapperTypesRoute,
    getRealmIdentityProviderInstancesAliasMapperTypesRouteHandler,
  )
  .openapi(
    getRealmIdentityProviderInstancesAliasMappersRoute,
    getRealmIdentityProviderInstancesAliasMappersRouteHandler,
  )
  .openapi(
    postRealmIdentityProviderInstancesAliasMappersRoute,
    postRealmIdentityProviderInstancesAliasMappersRouteHandler,
  )
  .openapi(
    deleteRealmIdentityProviderInstancesAliasMappersIdRoute,
    deleteRealmIdentityProviderInstancesAliasMappersIdRouteHandler,
  )
  .openapi(
    getRealmIdentityProviderInstancesAliasMappersIdRoute,
    getRealmIdentityProviderInstancesAliasMappersIdRouteHandler,
  )
  .openapi(
    putRealmIdentityProviderInstancesAliasMappersIdRoute,
    putRealmIdentityProviderInstancesAliasMappersIdRouteHandler,
  )
  .openapi(
    getRealmIdentityProviderProvidersProviderIdRoute,
    getRealmIdentityProviderProvidersProviderIdRouteHandler,
  )
  .openapi(getRealmKeysRoute, getRealmKeysRouteHandler)
  .openapi(postRealmLogoutAllRoute, postRealmLogoutAllRouteHandler)
  .openapi(postRealmPartialExportRoute, postRealmPartialExportRouteHandler)
  .openapi(postRealmPartialImportRoute, postRealmPartialImportRouteHandler)
  .openapi(postRealmPushRevocationRoute, postRealmPushRevocationRouteHandler)
  .openapi(getRealmRolesRoute, getRealmRolesRouteHandler)
  .openapi(postRealmRolesRoute, postRealmRolesRouteHandler)
  .openapi(deleteRealmRolesByIdRoleIdRoute, deleteRealmRolesByIdRoleIdRouteHandler)
  .openapi(getRealmRolesByIdRoleIdRoute, getRealmRolesByIdRoleIdRouteHandler)
  .openapi(putRealmRolesByIdRoleIdRoute, putRealmRolesByIdRoleIdRouteHandler)
  .openapi(
    deleteRealmRolesByIdRoleIdCompositesRoute,
    deleteRealmRolesByIdRoleIdCompositesRouteHandler,
  )
  .openapi(getRealmRolesByIdRoleIdCompositesRoute, getRealmRolesByIdRoleIdCompositesRouteHandler)
  .openapi(postRealmRolesByIdRoleIdCompositesRoute, postRealmRolesByIdRoleIdCompositesRouteHandler)
  .openapi(
    getRealmRolesByIdRoleIdCompositesClientsClientRoute,
    getRealmRolesByIdRoleIdCompositesClientsClientRouteHandler,
  )
  .openapi(
    getRealmRolesByIdRoleIdCompositesRealmRoute,
    getRealmRolesByIdRoleIdCompositesRealmRouteHandler,
  )
  .openapi(
    getRealmRolesByIdRoleIdManagementPermissionsRoute,
    getRealmRolesByIdRoleIdManagementPermissionsRouteHandler,
  )
  .openapi(
    putRealmRolesByIdRoleIdManagementPermissionsRoute,
    putRealmRolesByIdRoleIdManagementPermissionsRouteHandler,
  )
  .openapi(deleteRealmRolesRoleNameRoute, deleteRealmRolesRoleNameRouteHandler)
  .openapi(getRealmRolesRoleNameRoute, getRealmRolesRoleNameRouteHandler)
  .openapi(putRealmRolesRoleNameRoute, putRealmRolesRoleNameRouteHandler)
  .openapi(deleteRealmRolesRoleNameCompositesRoute, deleteRealmRolesRoleNameCompositesRouteHandler)
  .openapi(getRealmRolesRoleNameCompositesRoute, getRealmRolesRoleNameCompositesRouteHandler)
  .openapi(postRealmRolesRoleNameCompositesRoute, postRealmRolesRoleNameCompositesRouteHandler)
  .openapi(
    getRealmRolesRoleNameCompositesClientsClientRoute,
    getRealmRolesRoleNameCompositesClientsClientRouteHandler,
  )
  .openapi(
    getRealmRolesRoleNameCompositesRealmRoute,
    getRealmRolesRoleNameCompositesRealmRouteHandler,
  )
  .openapi(getRealmRolesRoleNameGroupsRoute, getRealmRolesRoleNameGroupsRouteHandler)
  .openapi(
    getRealmRolesRoleNameManagementPermissionsRoute,
    getRealmRolesRoleNameManagementPermissionsRouteHandler,
  )
  .openapi(
    putRealmRolesRoleNameManagementPermissionsRoute,
    putRealmRolesRoleNameManagementPermissionsRouteHandler,
  )
  .openapi(getRealmRolesRoleNameUsersRoute, getRealmRolesRoleNameUsersRouteHandler)
  .openapi(deleteRealmSessionsSessionRoute, deleteRealmSessionsSessionRouteHandler)
  .openapi(postRealmTestLDAPConnectionRoute, postRealmTestLDAPConnectionRouteHandler)
  .openapi(postRealmTestSMTPConnectionRoute, postRealmTestSMTPConnectionRouteHandler)
  .openapi(getRealmUserStorageIdNameRoute, getRealmUserStorageIdNameRouteHandler)
  .openapi(
    postRealmUserStorageIdRemoveImportedUsersRoute,
    postRealmUserStorageIdRemoveImportedUsersRouteHandler,
  )
  .openapi(postRealmUserStorageIdSyncRoute, postRealmUserStorageIdSyncRouteHandler)
  .openapi(postRealmUserStorageIdUnlinkUsersRoute, postRealmUserStorageIdUnlinkUsersRouteHandler)
  .openapi(
    postRealmUserStorageParentIdMappersIdSyncRoute,
    postRealmUserStorageParentIdMappersIdSyncRouteHandler,
  )
  .openapi(getRealmUsersRoute, getRealmUsersRouteHandler)
  .openapi(postRealmUsersRoute, postRealmUsersRouteHandler)
  .openapi(getRealmUsersManagementPermissionsRoute, getRealmUsersManagementPermissionsRouteHandler)
  .openapi(putRealmUsersManagementPermissionsRoute, putRealmUsersManagementPermissionsRouteHandler)
  .openapi(getRealmUsersCountRoute, getRealmUsersCountRouteHandler)
  .openapi(deleteRealmUsersIdRoute, deleteRealmUsersIdRouteHandler)
  .openapi(getRealmUsersIdRoute, getRealmUsersIdRouteHandler)
  .openapi(putRealmUsersIdRoute, putRealmUsersIdRouteHandler)
  .openapi(
    getRealmUsersIdConfiguredUserStorageCredentialTypesRoute,
    getRealmUsersIdConfiguredUserStorageCredentialTypesRouteHandler,
  )
  .openapi(getRealmUsersIdConsentsRoute, getRealmUsersIdConsentsRouteHandler)
  .openapi(deleteRealmUsersIdConsentsClientRoute, deleteRealmUsersIdConsentsClientRouteHandler)
  .openapi(getRealmUsersIdCredentialsRoute, getRealmUsersIdCredentialsRouteHandler)
  .openapi(
    deleteRealmUsersIdCredentialsCredentialIdRoute,
    deleteRealmUsersIdCredentialsCredentialIdRouteHandler,
  )
  .openapi(
    postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute,
    postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRouteHandler,
  )
  .openapi(
    postRealmUsersIdCredentialsCredentialIdMoveToFirstRoute,
    postRealmUsersIdCredentialsCredentialIdMoveToFirstRouteHandler,
  )
  .openapi(
    putRealmUsersIdCredentialsCredentialIdUserLabelRoute,
    putRealmUsersIdCredentialsCredentialIdUserLabelRouteHandler,
  )
  .openapi(
    putRealmUsersIdDisableCredentialTypesRoute,
    putRealmUsersIdDisableCredentialTypesRouteHandler,
  )
  .openapi(putRealmUsersIdExecuteActionsEmailRoute, putRealmUsersIdExecuteActionsEmailRouteHandler)
  .openapi(getRealmUsersIdFederatedIdentityRoute, getRealmUsersIdFederatedIdentityRouteHandler)
  .openapi(
    deleteRealmUsersIdFederatedIdentityProviderRoute,
    deleteRealmUsersIdFederatedIdentityProviderRouteHandler,
  )
  .openapi(
    postRealmUsersIdFederatedIdentityProviderRoute,
    postRealmUsersIdFederatedIdentityProviderRouteHandler,
  )
  .openapi(getRealmUsersIdGroupsRoute, getRealmUsersIdGroupsRouteHandler)
  .openapi(getRealmUsersIdGroupsCountRoute, getRealmUsersIdGroupsCountRouteHandler)
  .openapi(deleteRealmUsersIdGroupsGroupIdRoute, deleteRealmUsersIdGroupsGroupIdRouteHandler)
  .openapi(putRealmUsersIdGroupsGroupIdRoute, putRealmUsersIdGroupsGroupIdRouteHandler)
  .openapi(postRealmUsersIdImpersonationRoute, postRealmUsersIdImpersonationRouteHandler)
  .openapi(postRealmUsersIdLogoutRoute, postRealmUsersIdLogoutRouteHandler)
  .openapi(
    getRealmUsersIdOfflineSessionsClientIdRoute,
    getRealmUsersIdOfflineSessionsClientIdRouteHandler,
  )
  .openapi(putRealmUsersIdResetPasswordRoute, putRealmUsersIdResetPasswordRouteHandler)
  .openapi(getRealmUsersIdRoleMappingsRoute, getRealmUsersIdRoleMappingsRouteHandler)
  .openapi(
    deleteRealmUsersIdRoleMappingsClientsClientRoute,
    deleteRealmUsersIdRoleMappingsClientsClientRouteHandler,
  )
  .openapi(
    getRealmUsersIdRoleMappingsClientsClientRoute,
    getRealmUsersIdRoleMappingsClientsClientRouteHandler,
  )
  .openapi(
    postRealmUsersIdRoleMappingsClientsClientRoute,
    postRealmUsersIdRoleMappingsClientsClientRouteHandler,
  )
  .openapi(
    getRealmUsersIdRoleMappingsClientsClientAvailableRoute,
    getRealmUsersIdRoleMappingsClientsClientAvailableRouteHandler,
  )
  .openapi(
    getRealmUsersIdRoleMappingsClientsClientCompositeRoute,
    getRealmUsersIdRoleMappingsClientsClientCompositeRouteHandler,
  )
  .openapi(
    deleteRealmUsersIdRoleMappingsRealmRoute,
    deleteRealmUsersIdRoleMappingsRealmRouteHandler,
  )
  .openapi(getRealmUsersIdRoleMappingsRealmRoute, getRealmUsersIdRoleMappingsRealmRouteHandler)
  .openapi(postRealmUsersIdRoleMappingsRealmRoute, postRealmUsersIdRoleMappingsRealmRouteHandler)
  .openapi(
    getRealmUsersIdRoleMappingsRealmAvailableRoute,
    getRealmUsersIdRoleMappingsRealmAvailableRouteHandler,
  )
  .openapi(
    getRealmUsersIdRoleMappingsRealmCompositeRoute,
    getRealmUsersIdRoleMappingsRealmCompositeRouteHandler,
  )
  .openapi(putRealmUsersIdSendVerifyEmailRoute, putRealmUsersIdSendVerifyEmailRouteHandler)
  .openapi(getRealmUsersIdSessionsRoute, getRealmUsersIdSessionsRouteHandler)

export default app
