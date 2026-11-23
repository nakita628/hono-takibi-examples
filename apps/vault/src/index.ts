import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAlicloudMountPathConfigRoute,
  deleteAlicloudMountPathRoleNameRoute,
  deleteAuthAlicloudMountPathRoleRoleRoute,
  deleteAuthApproleMountPathRoleRoleNameBindSecretIdRoute,
  deleteAuthApproleMountPathRoleRoleNameBoundCidrListRoute,
  deleteAuthApproleMountPathRoleRoleNamePeriodRoute,
  deleteAuthApproleMountPathRoleRoleNamePoliciesRoute,
  deleteAuthApproleMountPathRoleRoleNameRoute,
  deleteAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRoute,
  deleteAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute,
  deleteAuthApproleMountPathRoleRoleNameSecretIdDestroyRoute,
  deleteAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute,
  deleteAuthApproleMountPathRoleRoleNameSecretIdTtlRoute,
  deleteAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute,
  deleteAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute,
  deleteAuthApproleMountPathRoleRoleNameTokenNumUsesRoute,
  deleteAuthApproleMountPathRoleRoleNameTokenTtlRoute,
  deleteAuthAwsMountPathConfigCertificateCertNameRoute,
  deleteAuthAwsMountPathConfigClientRoute,
  deleteAuthAwsMountPathConfigStsAccountIdRoute,
  deleteAuthAwsMountPathConfigTidyIdentityAccesslistRoute,
  deleteAuthAwsMountPathConfigTidyIdentityWhitelistRoute,
  deleteAuthAwsMountPathConfigTidyRoletagBlacklistRoute,
  deleteAuthAwsMountPathConfigTidyRoletagDenylistRoute,
  deleteAuthAwsMountPathIdentityAccesslistInstanceIdRoute,
  deleteAuthAwsMountPathIdentityWhitelistInstanceIdRoute,
  deleteAuthAwsMountPathRoleRoleRoute,
  deleteAuthAwsMountPathRoletagBlacklistRoleTagRoute,
  deleteAuthAwsMountPathRoletagDenylistRoleTagRoute,
  deleteAuthAzureMountPathConfigRoute,
  deleteAuthAzureMountPathRoleNameRoute,
  deleteAuthCertMountPathCertsNameRoute,
  deleteAuthCertMountPathCrlsNameRoute,
  deleteAuthCfMountPathConfigRoute,
  deleteAuthCfMountPathRolesRoleRoute,
  deleteAuthGcpMountPathRoleNameRoute,
  deleteAuthGithubMountPathMapTeamsKeyRoute,
  deleteAuthGithubMountPathMapUsersKeyRoute,
  deleteAuthJwtMountPathRoleNameRoute,
  deleteAuthKerberosMountPathGroupsNameRoute,
  deleteAuthKubernetesMountPathRoleNameRoute,
  deleteAuthLdapMountPathGroupsNameRoute,
  deleteAuthLdapMountPathUsersNameRoute,
  deleteAuthOciMountPathConfigRoute,
  deleteAuthOciMountPathRoleRoleRoute,
  deleteAuthOktaMountPathGroupsNameRoute,
  deleteAuthOktaMountPathUsersNameRoute,
  deleteAuthRadiusMountPathUsersNameRoute,
  deleteAuthTokenRolesRoleNameRoute,
  deleteAuthUserpassMountPathUsersUsernameRoute,
  deleteAwsMountPathRolesNameRoute,
  deleteAwsMountPathStaticRolesNameRoute,
  deleteAzureMountPathConfigRoute,
  deleteAzureMountPathRolesNameRoute,
  deleteConsulMountPathRolesNameRoute,
  deleteCubbyholePathRoute,
  deleteDatabaseMountPathConfigNameRoute,
  deleteDatabaseMountPathRolesNameRoute,
  deleteDatabaseMountPathStaticRolesNameRoute,
  deleteGcpkmsMountPathConfigRoute,
  deleteGcpkmsMountPathKeysDeregisterKeyRoute,
  deleteGcpkmsMountPathKeysKeyRoute,
  deleteGcpkmsMountPathKeysTrimKeyRoute,
  deleteGcpMountPathImpersonatedAccountNameRoute,
  deleteGcpMountPathRolesetNameRoute,
  deleteGcpMountPathStaticAccountNameRoute,
  deleteIdentityAliasIdIdRoute,
  deleteIdentityEntityAliasIdIdRoute,
  deleteIdentityEntityIdIdRoute,
  deleteIdentityEntityNameNameRoute,
  deleteIdentityGroupAliasIdIdRoute,
  deleteIdentityGroupIdIdRoute,
  deleteIdentityGroupNameNameRoute,
  deleteIdentityMfaLoginEnforcementNameRoute,
  deleteIdentityMfaMethodDuoMethodIdRoute,
  deleteIdentityMfaMethodOktaMethodIdRoute,
  deleteIdentityMfaMethodPingidMethodIdRoute,
  deleteIdentityMfaMethodTotpMethodIdRoute,
  deleteIdentityOidcAssignmentNameRoute,
  deleteIdentityOidcClientNameRoute,
  deleteIdentityOidcKeyNameRoute,
  deleteIdentityOidcProviderNameRoute,
  deleteIdentityOidcRoleNameRoute,
  deleteIdentityOidcScopeNameRoute,
  deleteIdentityPersonaIdIdRoute,
  deleteKubernetesMountPathConfigRoute,
  deleteKubernetesMountPathRolesNameRoute,
  deleteKvV1MountPathPathRoute,
  deleteKvV2MountPathDataPathRoute,
  deleteKvV2MountPathMetadataPathRoute,
  deleteLdapMountPathConfigRoute,
  deleteLdapMountPathLibraryNameRoute,
  deleteLdapMountPathRoleNameRoute,
  deleteLdapMountPathStaticRoleNameRoute,
  deleteMongodbatlasMountPathRolesNameRoute,
  deleteNomadMountPathConfigAccessRoute,
  deleteNomadMountPathConfigLeaseRoute,
  deleteNomadMountPathRoleNameRoute,
  deletePkiMountPathEabKeyIdRoute,
  deletePkiMountPathIssuerIssuerRefRoute,
  deletePkiMountPathKeyKeyRefRoute,
  deletePkiMountPathRolesNameRoute,
  deletePkiMountPathRootRoute,
  deleteRabbitmqMountPathRolesNameRoute,
  deleteSshMountPathConfigCaRoute,
  deleteSshMountPathConfigZeroaddressRoute,
  deleteSshMountPathRolesRoleRoute,
  deleteSshMountPathTidyDynamicKeysRoute,
  deleteSysAuditPathRoute,
  deleteSysAuthPathRoute,
  deleteSysConfigAuditingRequestHeadersHeaderRoute,
  deleteSysConfigControlGroupRoute,
  deleteSysConfigCorsRoute,
  deleteSysConfigUiHeadersHeaderRoute,
  deleteSysGenerateRootAttemptRoute,
  deleteSysGenerateRootRoute,
  deleteSysLoggersNameRoute,
  deleteSysLoggersRoute,
  deleteSysManagedKeysTypeNameRoute,
  deleteSysMfaMethodDuoNameRoute,
  deleteSysMfaMethodOktaNameRoute,
  deleteSysMfaMethodPingidNameRoute,
  deleteSysMfaMethodTotpNameRoute,
  deleteSysMountsPathRoute,
  deleteSysNamespacesPathRoute,
  deleteSysPluginsCatalogNameRoute,
  deleteSysPluginsCatalogTypeNameRoute,
  deleteSysPluginsRuntimesCatalogTypeNameRoute,
  deleteSysPoliciesAclNameRoute,
  deleteSysPoliciesEgpNameRoute,
  deleteSysPoliciesPasswordNameRoute,
  deleteSysPoliciesRgpNameRoute,
  deleteSysPolicyNameRoute,
  deleteSysQuotasLeaseCountNameRoute,
  deleteSysQuotasRateLimitNameRoute,
  deleteSysRawPathRoute,
  deleteSysRekeyBackupRoute,
  deleteSysRekeyInitRoute,
  deleteSysRekeyRecoveryKeyBackupRoute,
  deleteSysRekeyVerifyRoute,
  deleteSysReplicationPerformancePrimaryPathsFilterIdRoute,
  deleteSysStorageRaftSnapshotAutoConfigNameRoute,
  deleteTerraformMountPathConfigRoute,
  deleteTerraformMountPathRoleNameRoute,
  deleteTotpMountPathKeysNameRoute,
  deleteTransitMountPathKeysNameRoute,
  getAlicloudMountPathConfigRoute,
  getAlicloudMountPathCredsNameRoute,
  getAlicloudMountPathRoleIndexRoute,
  getAlicloudMountPathRoleNameRoute,
  getAuthAlicloudMountPathRoleIndexRoute,
  getAuthAlicloudMountPathRoleRoleRoute,
  getAuthAlicloudMountPathRolesIndexRoute,
  getAuthApproleMountPathRoleIndexRoute,
  getAuthApproleMountPathRoleRoleNameBindSecretIdRoute,
  getAuthApproleMountPathRoleRoleNameBoundCidrListRoute,
  getAuthApproleMountPathRoleRoleNameLocalSecretIdsRoute,
  getAuthApproleMountPathRoleRoleNamePeriodRoute,
  getAuthApproleMountPathRoleRoleNamePoliciesRoute,
  getAuthApproleMountPathRoleRoleNameRoleIdRoute,
  getAuthApproleMountPathRoleRoleNameRoute,
  getAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute,
  getAuthApproleMountPathRoleRoleNameSecretIdIndexRoute,
  getAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute,
  getAuthApproleMountPathRoleRoleNameSecretIdTtlRoute,
  getAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute,
  getAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute,
  getAuthApproleMountPathRoleRoleNameTokenNumUsesRoute,
  getAuthApproleMountPathRoleRoleNameTokenTtlRoute,
  getAuthAwsMountPathConfigCertificateCertNameRoute,
  getAuthAwsMountPathConfigCertificatesIndexRoute,
  getAuthAwsMountPathConfigClientRoute,
  getAuthAwsMountPathConfigIdentityRoute,
  getAuthAwsMountPathConfigStsAccountIdRoute,
  getAuthAwsMountPathConfigStsIndexRoute,
  getAuthAwsMountPathConfigTidyIdentityAccesslistRoute,
  getAuthAwsMountPathConfigTidyIdentityWhitelistRoute,
  getAuthAwsMountPathConfigTidyRoletagBlacklistRoute,
  getAuthAwsMountPathConfigTidyRoletagDenylistRoute,
  getAuthAwsMountPathIdentityAccesslistIndexRoute,
  getAuthAwsMountPathIdentityAccesslistInstanceIdRoute,
  getAuthAwsMountPathIdentityWhitelistIndexRoute,
  getAuthAwsMountPathIdentityWhitelistInstanceIdRoute,
  getAuthAwsMountPathRoleIndexRoute,
  getAuthAwsMountPathRoleRoleRoute,
  getAuthAwsMountPathRolesIndexRoute,
  getAuthAwsMountPathRoletagBlacklistIndexRoute,
  getAuthAwsMountPathRoletagBlacklistRoleTagRoute,
  getAuthAwsMountPathRoletagDenylistIndexRoute,
  getAuthAwsMountPathRoletagDenylistRoleTagRoute,
  getAuthAzureMountPathConfigRoute,
  getAuthAzureMountPathRoleIndexRoute,
  getAuthAzureMountPathRoleNameRoute,
  getAuthCentrifyMountPathConfigRoute,
  getAuthCertMountPathCertsIndexRoute,
  getAuthCertMountPathCertsNameRoute,
  getAuthCertMountPathConfigRoute,
  getAuthCertMountPathCrlsIndexRoute,
  getAuthCertMountPathCrlsNameRoute,
  getAuthCfMountPathConfigRoute,
  getAuthCfMountPathRolesIndexRoute,
  getAuthCfMountPathRolesRoleRoute,
  getAuthGcpMountPathConfigRoute,
  getAuthGcpMountPathRoleIndexRoute,
  getAuthGcpMountPathRoleNameRoute,
  getAuthGcpMountPathRolesIndexRoute,
  getAuthGithubMountPathConfigRoute,
  getAuthGithubMountPathMapTeamsIndexRoute,
  getAuthGithubMountPathMapTeamsKeyRoute,
  getAuthGithubMountPathMapTeamsRoute,
  getAuthGithubMountPathMapUsersIndexRoute,
  getAuthGithubMountPathMapUsersKeyRoute,
  getAuthGithubMountPathMapUsersRoute,
  getAuthJwtMountPathConfigRoute,
  getAuthJwtMountPathOidcCallbackRoute,
  getAuthJwtMountPathRoleIndexRoute,
  getAuthJwtMountPathRoleNameRoute,
  getAuthKerberosMountPathConfigLdapRoute,
  getAuthKerberosMountPathConfigRoute,
  getAuthKerberosMountPathGroupsIndexRoute,
  getAuthKerberosMountPathGroupsNameRoute,
  getAuthKerberosMountPathLoginRoute,
  getAuthKubernetesMountPathConfigRoute,
  getAuthKubernetesMountPathRoleIndexRoute,
  getAuthKubernetesMountPathRoleNameRoute,
  getAuthLdapMountPathConfigRoute,
  getAuthLdapMountPathGroupsIndexRoute,
  getAuthLdapMountPathGroupsNameRoute,
  getAuthLdapMountPathUsersIndexRoute,
  getAuthLdapMountPathUsersNameRoute,
  getAuthOciMountPathConfigRoute,
  getAuthOciMountPathRoleIndexRoute,
  getAuthOciMountPathRoleRoleRoute,
  getAuthOktaMountPathConfigRoute,
  getAuthOktaMountPathGroupsIndexRoute,
  getAuthOktaMountPathGroupsNameRoute,
  getAuthOktaMountPathUsersIndexRoute,
  getAuthOktaMountPathUsersNameRoute,
  getAuthOktaMountPathVerifyNonceRoute,
  getAuthRadiusMountPathConfigRoute,
  getAuthRadiusMountPathUsersIndexRoute,
  getAuthRadiusMountPathUsersNameRoute,
  getAuthTokenAccessorsIndexRoute,
  getAuthTokenLookupRoute,
  getAuthTokenLookupSelfRoute,
  getAuthTokenRolesIndexRoute,
  getAuthTokenRolesRoleNameRoute,
  getAuthUserpassMountPathUsersIndexRoute,
  getAuthUserpassMountPathUsersUsernameRoute,
  getAwsMountPathConfigLeaseRoute,
  getAwsMountPathConfigRootRoute,
  getAwsMountPathCredsNameRoute,
  getAwsMountPathRolesIndexRoute,
  getAwsMountPathRolesNameRoute,
  getAwsMountPathStaticCredsNameRoute,
  getAwsMountPathStaticRolesNameRoute,
  getAwsMountPathStsNameRoute,
  getAzureMountPathConfigRoute,
  getAzureMountPathCredsRoleRoute,
  getAzureMountPathRolesIndexRoute,
  getAzureMountPathRolesNameRoute,
  getConsulMountPathConfigAccessRoute,
  getConsulMountPathCredsRoleRoute,
  getConsulMountPathRolesIndexRoute,
  getConsulMountPathRolesNameRoute,
  getCubbyholePathIndexRoute,
  getCubbyholePathRoute,
  getDatabaseMountPathConfigIndexRoute,
  getDatabaseMountPathConfigNameRoute,
  getDatabaseMountPathCredsNameRoute,
  getDatabaseMountPathRolesIndexRoute,
  getDatabaseMountPathRolesNameRoute,
  getDatabaseMountPathStaticCredsNameRoute,
  getDatabaseMountPathStaticRolesIndexRoute,
  getDatabaseMountPathStaticRolesNameRoute,
  getGcpkmsMountPathConfigRoute,
  getGcpkmsMountPathKeysConfigKeyRoute,
  getGcpkmsMountPathKeysIndexRoute,
  getGcpkmsMountPathKeysKeyRoute,
  getGcpkmsMountPathPubkeyKeyRoute,
  getGcpMountPathConfigRoute,
  getGcpMountPathImpersonatedAccountIndexRoute,
  getGcpMountPathImpersonatedAccountNameRoute,
  getGcpMountPathImpersonatedAccountNameTokenRoute,
  getGcpMountPathImpersonatedAccountsIndexRoute,
  getGcpMountPathKeyRolesetRoute,
  getGcpMountPathRolesetIndexRoute,
  getGcpMountPathRolesetNameRoute,
  getGcpMountPathRolesetRolesetKeyRoute,
  getGcpMountPathRolesetRolesetTokenRoute,
  getGcpMountPathRolesetsIndexRoute,
  getGcpMountPathStaticAccountIndexRoute,
  getGcpMountPathStaticAccountNameKeyRoute,
  getGcpMountPathStaticAccountNameRoute,
  getGcpMountPathStaticAccountNameTokenRoute,
  getGcpMountPathStaticAccountsIndexRoute,
  getGcpMountPathTokenRolesetRoute,
  getIdentityAliasIdIdRoute,
  getIdentityAliasIdIndexRoute,
  getIdentityEntityAliasIdIdRoute,
  getIdentityEntityAliasIdIndexRoute,
  getIdentityEntityIdIdRoute,
  getIdentityEntityIdIndexRoute,
  getIdentityEntityNameIndexRoute,
  getIdentityEntityNameNameRoute,
  getIdentityGroupAliasIdIdRoute,
  getIdentityGroupAliasIdIndexRoute,
  getIdentityGroupIdIdRoute,
  getIdentityGroupIdIndexRoute,
  getIdentityGroupNameIndexRoute,
  getIdentityGroupNameNameRoute,
  getIdentityMfaLoginEnforcementIndexRoute,
  getIdentityMfaLoginEnforcementNameRoute,
  getIdentityMfaMethodDuoIndexRoute,
  getIdentityMfaMethodDuoMethodIdRoute,
  getIdentityMfaMethodIndexRoute,
  getIdentityMfaMethodMethodIdRoute,
  getIdentityMfaMethodOktaIndexRoute,
  getIdentityMfaMethodOktaMethodIdRoute,
  getIdentityMfaMethodPingidIndexRoute,
  getIdentityMfaMethodPingidMethodIdRoute,
  getIdentityMfaMethodTotpIndexRoute,
  getIdentityMfaMethodTotpMethodIdRoute,
  getIdentityOidcAssignmentIndexRoute,
  getIdentityOidcAssignmentNameRoute,
  getIdentityOidcClientIndexRoute,
  getIdentityOidcClientNameRoute,
  getIdentityOidcConfigRoute,
  getIdentityOidcKeyIndexRoute,
  getIdentityOidcKeyNameRoute,
  getIdentityOidcProviderIndexRoute,
  getIdentityOidcProviderNameAuthorizeRoute,
  getIdentityOidcProviderNameRoute,
  getIdentityOidcProviderNameUserinfoRoute,
  getIdentityOidcProviderNameWellKnownKeysRoute,
  getIdentityOidcProviderNameWellKnownOpenidConfigurationRoute,
  getIdentityOidcRoleIndexRoute,
  getIdentityOidcRoleNameRoute,
  getIdentityOidcScopeIndexRoute,
  getIdentityOidcScopeNameRoute,
  getIdentityOidcTokenNameRoute,
  getIdentityOidcWellKnownKeysRoute,
  getIdentityOidcWellKnownOpenidConfigurationRoute,
  getIdentityPersonaIdIdRoute,
  getIdentityPersonaIdIndexRoute,
  getKubernetesMountPathCheckRoute,
  getKubernetesMountPathConfigRoute,
  getKubernetesMountPathRolesIndexRoute,
  getKubernetesMountPathRolesNameRoute,
  getKvV1MountPathPathIndexRoute,
  getKvV1MountPathPathRoute,
  getKvV2MountPathConfigRoute,
  getKvV2MountPathDataPathRoute,
  getKvV2MountPathMetadataPathIndexRoute,
  getKvV2MountPathMetadataPathRoute,
  getKvV2MountPathSubkeysPathRoute,
  getLdapMountPathConfigRoute,
  getLdapMountPathCredsNameRoute,
  getLdapMountPathLibraryIndexRoute,
  getLdapMountPathLibraryNameRoute,
  getLdapMountPathLibraryNameStatusRoute,
  getLdapMountPathRoleIndexRoute,
  getLdapMountPathRoleNameRoute,
  getLdapMountPathStaticCredNameRoute,
  getLdapMountPathStaticRoleIndexRoute,
  getLdapMountPathStaticRoleNameRoute,
  getMongodbatlasMountPathConfigRoute,
  getMongodbatlasMountPathCredsNameRoute,
  getMongodbatlasMountPathRolesIndexRoute,
  getMongodbatlasMountPathRolesNameRoute,
  getNomadMountPathConfigAccessRoute,
  getNomadMountPathConfigLeaseRoute,
  getNomadMountPathCredsNameRoute,
  getNomadMountPathRoleIndexRoute,
  getNomadMountPathRoleNameRoute,
  getPkiMountPathAcmeDirectoryRoute,
  getPkiMountPathAcmeNewNonceRoute,
  getPkiMountPathCaChainRoute,
  getPkiMountPathCaPemRoute,
  getPkiMountPathCaRoute,
  getPkiMountPathCertCaChainRoute,
  getPkiMountPathCertCrlRoute,
  getPkiMountPathCertDeltaCrlRoute,
  getPkiMountPathCertSerialRawPemRoute,
  getPkiMountPathCertSerialRawRoute,
  getPkiMountPathCertSerialRoute,
  getPkiMountPathCertsIndexRoute,
  getPkiMountPathCertsRevokedIndexRoute,
  getPkiMountPathConfigAcmeRoute,
  getPkiMountPathConfigAutoTidyRoute,
  getPkiMountPathConfigClusterRoute,
  getPkiMountPathConfigCrlRoute,
  getPkiMountPathConfigIssuersRoute,
  getPkiMountPathConfigKeysRoute,
  getPkiMountPathConfigUrlsRoute,
  getPkiMountPathCrlDeltaPemRoute,
  getPkiMountPathCrlDeltaRoute,
  getPkiMountPathCrlPemRoute,
  getPkiMountPathCrlRotateDeltaRoute,
  getPkiMountPathCrlRotateRoute,
  getPkiMountPathCrlRoute,
  getPkiMountPathEabIndexRoute,
  getPkiMountPathIssuerIssuerRefAcmeDirectoryRoute,
  getPkiMountPathIssuerIssuerRefAcmeNewNonceRoute,
  getPkiMountPathIssuerIssuerRefCrlDeltaDerRoute,
  getPkiMountPathIssuerIssuerRefCrlDeltaPemRoute,
  getPkiMountPathIssuerIssuerRefCrlDeltaRoute,
  getPkiMountPathIssuerIssuerRefCrlDerRoute,
  getPkiMountPathIssuerIssuerRefCrlPemRoute,
  getPkiMountPathIssuerIssuerRefCrlRoute,
  getPkiMountPathIssuerIssuerRefDerRoute,
  getPkiMountPathIssuerIssuerRefJsonRoute,
  getPkiMountPathIssuerIssuerRefPemRoute,
  getPkiMountPathIssuerIssuerRefRolesRoleAcmeDirectoryRoute,
  getPkiMountPathIssuerIssuerRefRolesRoleAcmeNewNonceRoute,
  getPkiMountPathIssuerIssuerRefRoute,
  getPkiMountPathIssuersIndexRoute,
  getPkiMountPathKeyKeyRefRoute,
  getPkiMountPathKeysIndexRoute,
  getPkiMountPathOcspReqRoute,
  getPkiMountPathRolesIndexRoute,
  getPkiMountPathRolesNameRoute,
  getPkiMountPathRolesRoleAcmeDirectoryRoute,
  getPkiMountPathRolesRoleAcmeNewNonceRoute,
  getPkiMountPathTidyStatusRoute,
  getRabbitmqMountPathConfigLeaseRoute,
  getRabbitmqMountPathCredsNameRoute,
  getRabbitmqMountPathRolesIndexRoute,
  getRabbitmqMountPathRolesNameRoute,
  getSshMountPathConfigCaRoute,
  getSshMountPathConfigZeroaddressRoute,
  getSshMountPathPublicKeyRoute,
  getSshMountPathRolesIndexRoute,
  getSshMountPathRolesRoleRoute,
  getSysAuditRoute,
  getSysAuthPathRoute,
  getSysAuthPathTuneRoute,
  getSysAuthRoute,
  getSysConfigAuditingRequestHeadersHeaderRoute,
  getSysConfigAuditingRequestHeadersRoute,
  getSysConfigControlGroupRoute,
  getSysConfigCorsRoute,
  getSysConfigGroupPolicyApplicationRoute,
  getSysConfigStateSanitizedRoute,
  getSysConfigUiHeadersHeaderRoute,
  getSysConfigUiHeadersIndexRoute,
  getSysExperimentsRoute,
  getSysGenerateRootAttemptRoute,
  getSysGenerateRootRoute,
  getSysHaStatusRoute,
  getSysHealthRoute,
  getSysHostInfoRoute,
  getSysInFlightReqRoute,
  getSysInitRoute,
  getSysInternalCountersActivityExportRoute,
  getSysInternalCountersActivityMonthlyRoute,
  getSysInternalCountersActivityRoute,
  getSysInternalCountersConfigRoute,
  getSysInternalCountersEntitiesRoute,
  getSysInternalCountersRequestsRoute,
  getSysInternalCountersTokensRoute,
  getSysInternalInspectRouterTagRoute,
  getSysInternalSpecsOpenapiRoute,
  getSysInternalUiFeatureFlagsRoute,
  getSysInternalUiMountsPathRoute,
  getSysInternalUiMountsRoute,
  getSysInternalUiNamespacesRoute,
  getSysInternalUiResultantAclRoute,
  getSysKeyStatusRoute,
  getSysLeaderRoute,
  getSysLeasesCountRoute,
  getSysLeasesLookupPrefixIndexRoute,
  getSysLeasesRoute,
  getSysLicenseStatusRoute,
  getSysLockedUsersRoute,
  getSysLoggersNameRoute,
  getSysLoggersRoute,
  getSysManagedKeysTypeIndexRoute,
  getSysManagedKeysTypeNameRoute,
  getSysMetricsRoute,
  getSysMfaMethodDuoNameRoute,
  getSysMfaMethodIndexRoute,
  getSysMfaMethodOktaNameRoute,
  getSysMfaMethodPingidNameRoute,
  getSysMfaMethodTotpNameGenerateRoute,
  getSysMfaMethodTotpNameRoute,
  getSysMonitorRoute,
  getSysMountsPathRoute,
  getSysMountsPathTuneRoute,
  getSysMountsRoute,
  getSysNamespacesIndexRoute,
  getSysNamespacesPathRoute,
  getSysPluginsCatalogNameRoute,
  getSysPluginsCatalogRoute,
  getSysPluginsCatalogTypeIndexRoute,
  getSysPluginsCatalogTypeNameRoute,
  getSysPluginsReloadBackendStatusRoute,
  getSysPluginsRuntimesCatalogIndexRoute,
  getSysPluginsRuntimesCatalogTypeNameRoute,
  getSysPoliciesAclIndexRoute,
  getSysPoliciesAclNameRoute,
  getSysPoliciesEgpIndexRoute,
  getSysPoliciesEgpNameRoute,
  getSysPoliciesPasswordIndexRoute,
  getSysPoliciesPasswordNameGenerateRoute,
  getSysPoliciesPasswordNameRoute,
  getSysPoliciesRgpIndexRoute,
  getSysPoliciesRgpNameRoute,
  getSysPolicyIndexRoute,
  getSysPolicyNameRoute,
  getSysPolicyRoute,
  getSysPprofAllocsRoute,
  getSysPprofBlockRoute,
  getSysPprofCmdlineRoute,
  getSysPprofGoroutineRoute,
  getSysPprofHeapRoute,
  getSysPprofMutexRoute,
  getSysPprofProfileRoute,
  getSysPprofRoute,
  getSysPprofSymbolRoute,
  getSysPprofThreadcreateRoute,
  getSysPprofTraceRoute,
  getSysQuotasConfigRoute,
  getSysQuotasLeaseCountIndexRoute,
  getSysQuotasLeaseCountNameRoute,
  getSysQuotasRateLimitIndexRoute,
  getSysQuotasRateLimitNameRoute,
  getSysRawPathIndexRoute,
  getSysRawPathRoute,
  getSysRekeyBackupRoute,
  getSysRekeyInitRoute,
  getSysRekeyRecoveryKeyBackupRoute,
  getSysRekeyVerifyRoute,
  getSysRemountStatusMigrationIdRoute,
  getSysReplicationDrSecondaryLicenseStatusRoute,
  getSysReplicationDrStatusRoute,
  getSysReplicationPerformancePrimaryDynamicFilterIdRoute,
  getSysReplicationPerformancePrimaryPathsFilterIdRoute,
  getSysReplicationPerformanceSecondaryDynamicFilterIdRoute,
  getSysReplicationPerformanceStatusRoute,
  getSysReplicationStatusRoute,
  getSysRotateConfigRoute,
  getSysSealStatusRoute,
  getSysSealwrapRewrapRoute,
  getSysStorageRaftSnapshotAutoConfigIndexRoute,
  getSysStorageRaftSnapshotAutoConfigNameRoute,
  getSysStorageRaftSnapshotAutoStatusNameRoute,
  getSysVersionHistoryIndexRoute,
  getSysWrappingLookupRoute,
  getTerraformMountPathConfigRoute,
  getTerraformMountPathCredsNameRoute,
  getTerraformMountPathRoleIndexRoute,
  getTerraformMountPathRoleNameRoute,
  getTotpMountPathCodeNameRoute,
  getTotpMountPathKeysIndexRoute,
  getTotpMountPathKeysNameRoute,
  getTransitMountPathBackupNameRoute,
  getTransitMountPathByokExportDestinationSourceRoute,
  getTransitMountPathByokExportDestinationSourceVersionRoute,
  getTransitMountPathCacheConfigRoute,
  getTransitMountPathConfigKeysRoute,
  getTransitMountPathExportTypeNameRoute,
  getTransitMountPathExportTypeNameVersionRoute,
  getTransitMountPathKeysIndexRoute,
  getTransitMountPathKeysNameRoute,
  getTransitMountPathWrappingKeyRoute,
  postAlicloudMountPathConfigRoute,
  postAlicloudMountPathRoleNameRoute,
  postAuthAlicloudMountPathLoginRoute,
  postAuthAlicloudMountPathRoleRoleRoute,
  postAuthApproleMountPathLoginRoute,
  postAuthApproleMountPathRoleRoleNameBindSecretIdRoute,
  postAuthApproleMountPathRoleRoleNameBoundCidrListRoute,
  postAuthApproleMountPathRoleRoleNameCustomSecretIdRoute,
  postAuthApproleMountPathRoleRoleNamePeriodRoute,
  postAuthApproleMountPathRoleRoleNamePoliciesRoute,
  postAuthApproleMountPathRoleRoleNameRoleIdRoute,
  postAuthApproleMountPathRoleRoleNameRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdAccessorLookupRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdDestroyRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdLookupRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdRoute,
  postAuthApproleMountPathRoleRoleNameSecretIdTtlRoute,
  postAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute,
  postAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute,
  postAuthApproleMountPathRoleRoleNameTokenNumUsesRoute,
  postAuthApproleMountPathRoleRoleNameTokenTtlRoute,
  postAuthApproleMountPathTidySecretIdRoute,
  postAuthAwsMountPathConfigCertificateCertNameRoute,
  postAuthAwsMountPathConfigClientRoute,
  postAuthAwsMountPathConfigIdentityRoute,
  postAuthAwsMountPathConfigRotateRootRoute,
  postAuthAwsMountPathConfigStsAccountIdRoute,
  postAuthAwsMountPathConfigTidyIdentityAccesslistRoute,
  postAuthAwsMountPathConfigTidyIdentityWhitelistRoute,
  postAuthAwsMountPathConfigTidyRoletagBlacklistRoute,
  postAuthAwsMountPathConfigTidyRoletagDenylistRoute,
  postAuthAwsMountPathLoginRoute,
  postAuthAwsMountPathRoleRoleRoute,
  postAuthAwsMountPathRoleRoleTagRoute,
  postAuthAwsMountPathRoletagBlacklistRoleTagRoute,
  postAuthAwsMountPathRoletagDenylistRoleTagRoute,
  postAuthAwsMountPathTidyIdentityAccesslistRoute,
  postAuthAwsMountPathTidyIdentityWhitelistRoute,
  postAuthAwsMountPathTidyRoletagBlacklistRoute,
  postAuthAwsMountPathTidyRoletagDenylistRoute,
  postAuthAzureMountPathConfigRoute,
  postAuthAzureMountPathLoginRoute,
  postAuthAzureMountPathRoleNameRoute,
  postAuthAzureMountPathRotateRootRoute,
  postAuthCentrifyMountPathConfigRoute,
  postAuthCentrifyMountPathLoginRoute,
  postAuthCertMountPathCertsNameRoute,
  postAuthCertMountPathConfigRoute,
  postAuthCertMountPathCrlsNameRoute,
  postAuthCertMountPathLoginRoute,
  postAuthCfMountPathConfigRoute,
  postAuthCfMountPathLoginRoute,
  postAuthCfMountPathRolesRoleRoute,
  postAuthGcpMountPathConfigRoute,
  postAuthGcpMountPathLoginRoute,
  postAuthGcpMountPathRoleNameLabelsRoute,
  postAuthGcpMountPathRoleNameRoute,
  postAuthGcpMountPathRoleNameServiceAccountsRoute,
  postAuthGithubMountPathConfigRoute,
  postAuthGithubMountPathLoginRoute,
  postAuthGithubMountPathMapTeamsKeyRoute,
  postAuthGithubMountPathMapUsersKeyRoute,
  postAuthJwtMountPathConfigRoute,
  postAuthJwtMountPathLoginRoute,
  postAuthJwtMountPathOidcAuthUrlRoute,
  postAuthJwtMountPathOidcCallbackRoute,
  postAuthJwtMountPathRoleNameRoute,
  postAuthKerberosMountPathConfigLdapRoute,
  postAuthKerberosMountPathConfigRoute,
  postAuthKerberosMountPathGroupsNameRoute,
  postAuthKerberosMountPathLoginRoute,
  postAuthKubernetesMountPathConfigRoute,
  postAuthKubernetesMountPathLoginRoute,
  postAuthKubernetesMountPathRoleNameRoute,
  postAuthLdapMountPathConfigRoute,
  postAuthLdapMountPathGroupsNameRoute,
  postAuthLdapMountPathLoginUsernameRoute,
  postAuthLdapMountPathUsersNameRoute,
  postAuthOciMountPathConfigRoute,
  postAuthOciMountPathLoginRoleRoute,
  postAuthOciMountPathRoleRoleRoute,
  postAuthOktaMountPathConfigRoute,
  postAuthOktaMountPathGroupsNameRoute,
  postAuthOktaMountPathLoginUsernameRoute,
  postAuthOktaMountPathUsersNameRoute,
  postAuthRadiusMountPathConfigRoute,
  postAuthRadiusMountPathLoginRoute,
  postAuthRadiusMountPathLoginUrlusernameRoute,
  postAuthRadiusMountPathUsersNameRoute,
  postAuthTokenCreateOrphanRoute,
  postAuthTokenCreateRoleNameRoute,
  postAuthTokenCreateRoute,
  postAuthTokenLookupAccessorRoute,
  postAuthTokenLookupRoute,
  postAuthTokenLookupSelfRoute,
  postAuthTokenRenewAccessorRoute,
  postAuthTokenRenewRoute,
  postAuthTokenRenewSelfRoute,
  postAuthTokenRevokeAccessorRoute,
  postAuthTokenRevokeOrphanRoute,
  postAuthTokenRevokeRoute,
  postAuthTokenRevokeSelfRoute,
  postAuthTokenRolesRoleNameRoute,
  postAuthTokenTidyRoute,
  postAuthUserpassMountPathLoginUsernameRoute,
  postAuthUserpassMountPathUsersUsernamePasswordRoute,
  postAuthUserpassMountPathUsersUsernamePoliciesRoute,
  postAuthUserpassMountPathUsersUsernameRoute,
  postAwsMountPathConfigLeaseRoute,
  postAwsMountPathConfigRootRoute,
  postAwsMountPathConfigRotateRootRoute,
  postAwsMountPathCredsNameRoute,
  postAwsMountPathRolesNameRoute,
  postAwsMountPathStaticRolesNameRoute,
  postAwsMountPathStsNameRoute,
  postAzureMountPathConfigRoute,
  postAzureMountPathRolesNameRoute,
  postAzureMountPathRotateRootRoute,
  postConsulMountPathConfigAccessRoute,
  postConsulMountPathRolesNameRoute,
  postCubbyholePathRoute,
  postDatabaseMountPathConfigNameRoute,
  postDatabaseMountPathResetNameRoute,
  postDatabaseMountPathRolesNameRoute,
  postDatabaseMountPathRotateRoleNameRoute,
  postDatabaseMountPathRotateRootNameRoute,
  postDatabaseMountPathStaticRolesNameRoute,
  postGcpkmsMountPathConfigRoute,
  postGcpkmsMountPathDecryptKeyRoute,
  postGcpkmsMountPathEncryptKeyRoute,
  postGcpkmsMountPathKeysConfigKeyRoute,
  postGcpkmsMountPathKeysDeregisterKeyRoute,
  postGcpkmsMountPathKeysKeyRoute,
  postGcpkmsMountPathKeysRegisterKeyRoute,
  postGcpkmsMountPathKeysRotateKeyRoute,
  postGcpkmsMountPathKeysTrimKeyRoute,
  postGcpkmsMountPathReencryptKeyRoute,
  postGcpkmsMountPathSignKeyRoute,
  postGcpkmsMountPathVerifyKeyRoute,
  postGcpMountPathConfigRotateRootRoute,
  postGcpMountPathConfigRoute,
  postGcpMountPathImpersonatedAccountNameRoute,
  postGcpMountPathImpersonatedAccountNameTokenRoute,
  postGcpMountPathKeyRolesetRoute,
  postGcpMountPathRolesetNameRotateKeyRoute,
  postGcpMountPathRolesetNameRotateRoute,
  postGcpMountPathRolesetNameRoute,
  postGcpMountPathRolesetRolesetKeyRoute,
  postGcpMountPathRolesetRolesetTokenRoute,
  postGcpMountPathStaticAccountNameKeyRoute,
  postGcpMountPathStaticAccountNameRotateKeyRoute,
  postGcpMountPathStaticAccountNameRoute,
  postGcpMountPathStaticAccountNameTokenRoute,
  postGcpMountPathTokenRolesetRoute,
  postIdentityAliasIdIdRoute,
  postIdentityAliasRoute,
  postIdentityEntityAliasIdIdRoute,
  postIdentityEntityAliasRoute,
  postIdentityEntityBatchDeleteRoute,
  postIdentityEntityIdIdRoute,
  postIdentityEntityMergeRoute,
  postIdentityEntityNameNameRoute,
  postIdentityEntityRoute,
  postIdentityGroupAliasIdIdRoute,
  postIdentityGroupAliasRoute,
  postIdentityGroupIdIdRoute,
  postIdentityGroupNameNameRoute,
  postIdentityGroupRoute,
  postIdentityLookupEntityRoute,
  postIdentityLookupGroupRoute,
  postIdentityMfaLoginEnforcementNameRoute,
  postIdentityMfaMethodDuoMethodIdRoute,
  postIdentityMfaMethodDuoRoute,
  postIdentityMfaMethodOktaMethodIdRoute,
  postIdentityMfaMethodOktaRoute,
  postIdentityMfaMethodPingidMethodIdRoute,
  postIdentityMfaMethodPingidRoute,
  postIdentityMfaMethodTotpAdminDestroyRoute,
  postIdentityMfaMethodTotpAdminGenerateRoute,
  postIdentityMfaMethodTotpGenerateRoute,
  postIdentityMfaMethodTotpMethodIdRoute,
  postIdentityMfaMethodTotpRoute,
  postIdentityOidcAssignmentNameRoute,
  postIdentityOidcClientNameRoute,
  postIdentityOidcConfigRoute,
  postIdentityOidcIntrospectRoute,
  postIdentityOidcKeyNameRotateRoute,
  postIdentityOidcKeyNameRoute,
  postIdentityOidcProviderNameAuthorizeRoute,
  postIdentityOidcProviderNameRoute,
  postIdentityOidcProviderNameTokenRoute,
  postIdentityOidcProviderNameUserinfoRoute,
  postIdentityOidcRoleNameRoute,
  postIdentityOidcScopeNameRoute,
  postIdentityPersonaIdIdRoute,
  postIdentityPersonaRoute,
  postKubernetesMountPathConfigRoute,
  postKubernetesMountPathCredsNameRoute,
  postKubernetesMountPathRolesNameRoute,
  postKvV1MountPathPathRoute,
  postKvV2MountPathConfigRoute,
  postKvV2MountPathDataPathRoute,
  postKvV2MountPathDeletePathRoute,
  postKvV2MountPathDestroyPathRoute,
  postKvV2MountPathMetadataPathRoute,
  postKvV2MountPathUndeletePathRoute,
  postLdapMountPathConfigRoute,
  postLdapMountPathLibraryManageNameCheckInRoute,
  postLdapMountPathLibraryNameCheckInRoute,
  postLdapMountPathLibraryNameCheckOutRoute,
  postLdapMountPathLibraryNameRoute,
  postLdapMountPathRoleNameRoute,
  postLdapMountPathRotateRoleNameRoute,
  postLdapMountPathRotateRootRoute,
  postLdapMountPathStaticRoleNameRoute,
  postMongodbatlasMountPathConfigRoute,
  postMongodbatlasMountPathCredsNameRoute,
  postMongodbatlasMountPathRolesNameRoute,
  postNomadMountPathConfigAccessRoute,
  postNomadMountPathConfigLeaseRoute,
  postNomadMountPathRoleNameRoute,
  postPkiMountPathAcmeAccountKidRoute,
  postPkiMountPathAcmeAuthorizationAuthIdRoute,
  postPkiMountPathAcmeChallengeAuthIdChallengeTypeRoute,
  postPkiMountPathAcmeNewAccountRoute,
  postPkiMountPathAcmeNewEabRoute,
  postPkiMountPathAcmeNewOrderRoute,
  postPkiMountPathAcmeOrderOrderIdCertRoute,
  postPkiMountPathAcmeOrderOrderIdFinalizeRoute,
  postPkiMountPathAcmeOrderOrderIdRoute,
  postPkiMountPathAcmeOrdersRoute,
  postPkiMountPathAcmeRevokeCertRoute,
  postPkiMountPathConfigAcmeRoute,
  postPkiMountPathConfigAutoTidyRoute,
  postPkiMountPathConfigCaRoute,
  postPkiMountPathConfigClusterRoute,
  postPkiMountPathConfigCrlRoute,
  postPkiMountPathConfigIssuersRoute,
  postPkiMountPathConfigKeysRoute,
  postPkiMountPathConfigUrlsRoute,
  postPkiMountPathIntermediateCrossSignRoute,
  postPkiMountPathIntermediateGenerateExportedRoute,
  postPkiMountPathIntermediateSetSignedRoute,
  postPkiMountPathIssuerIssuerRefAcmeAccountKidRoute,
  postPkiMountPathIssuerIssuerRefAcmeAuthorizationAuthIdRoute,
  postPkiMountPathIssuerIssuerRefAcmeChallengeAuthIdChallengeTypeRoute,
  postPkiMountPathIssuerIssuerRefAcmeNewAccountRoute,
  postPkiMountPathIssuerIssuerRefAcmeNewEabRoute,
  postPkiMountPathIssuerIssuerRefAcmeNewOrderRoute,
  postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdCertRoute,
  postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdFinalizeRoute,
  postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdRoute,
  postPkiMountPathIssuerIssuerRefAcmeOrdersRoute,
  postPkiMountPathIssuerIssuerRefAcmeRevokeCertRoute,
  postPkiMountPathIssuerIssuerRefIssueRoleRoute,
  postPkiMountPathIssuerIssuerRefResignCrlsRoute,
  postPkiMountPathIssuerIssuerRefRevokeRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeAccountKidRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeAuthorizationAuthIdRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewAccountRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewEabRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewOrderRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdCertRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrdersRoute,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeRevokeCertRoute,
  postPkiMountPathIssuerIssuerRefRoute,
  postPkiMountPathIssuerIssuerRefSignIntermediateRoute,
  postPkiMountPathIssuerIssuerRefSignRevocationListRoute,
  postPkiMountPathIssuerIssuerRefSignRoleRoute,
  postPkiMountPathIssuerIssuerRefSignSelfIssuedRoute,
  postPkiMountPathIssuerIssuerRefSignVerbatimRoleRoute,
  postPkiMountPathIssuerIssuerRefSignVerbatimRoute,
  postPkiMountPathIssueRoleRoute,
  postPkiMountPathIssuersGenerateIntermediateExportedRoute,
  postPkiMountPathIssuersGenerateRootExportedRoute,
  postPkiMountPathIssuersImportBundleRoute,
  postPkiMountPathIssuersImportCertRoute,
  postPkiMountPathKeyKeyRefRoute,
  postPkiMountPathKeysGenerateExportedRoute,
  postPkiMountPathKeysGenerateInternalRoute,
  postPkiMountPathKeysGenerateKmsRoute,
  postPkiMountPathKeysImportRoute,
  postPkiMountPathOcspRoute,
  postPkiMountPathRevokeRoute,
  postPkiMountPathRevokeWithKeyRoute,
  postPkiMountPathRolesNameRoute,
  postPkiMountPathRolesRoleAcmeAccountKidRoute,
  postPkiMountPathRolesRoleAcmeAuthorizationAuthIdRoute,
  postPkiMountPathRolesRoleAcmeChallengeAuthIdChallengeTypeRoute,
  postPkiMountPathRolesRoleAcmeNewAccountRoute,
  postPkiMountPathRolesRoleAcmeNewEabRoute,
  postPkiMountPathRolesRoleAcmeNewOrderRoute,
  postPkiMountPathRolesRoleAcmeOrderOrderIdCertRoute,
  postPkiMountPathRolesRoleAcmeOrderOrderIdFinalizeRoute,
  postPkiMountPathRolesRoleAcmeOrderOrderIdRoute,
  postPkiMountPathRolesRoleAcmeOrdersRoute,
  postPkiMountPathRolesRoleAcmeRevokeCertRoute,
  postPkiMountPathRootGenerateExportedRoute,
  postPkiMountPathRootReplaceRoute,
  postPkiMountPathRootRotateExportedRoute,
  postPkiMountPathRootSignIntermediateRoute,
  postPkiMountPathRootSignSelfIssuedRoute,
  postPkiMountPathSignRoleRoute,
  postPkiMountPathSignVerbatimRoleRoute,
  postPkiMountPathSignVerbatimRoute,
  postPkiMountPathTidyCancelRoute,
  postPkiMountPathTidyRoute,
  postRabbitmqMountPathConfigConnectionRoute,
  postRabbitmqMountPathConfigLeaseRoute,
  postRabbitmqMountPathRolesNameRoute,
  postSshMountPathConfigCaRoute,
  postSshMountPathConfigZeroaddressRoute,
  postSshMountPathCredsRoleRoute,
  postSshMountPathIssueRoleRoute,
  postSshMountPathLookupRoute,
  postSshMountPathRolesRoleRoute,
  postSshMountPathSignRoleRoute,
  postSshMountPathVerifyRoute,
  postSysAuditHashPathRoute,
  postSysAuditPathRoute,
  postSysAuthPathRoute,
  postSysAuthPathTuneRoute,
  postSysCapabilitiesAccessorRoute,
  postSysCapabilitiesRoute,
  postSysCapabilitiesSelfRoute,
  postSysConfigAuditingRequestHeadersHeaderRoute,
  postSysConfigControlGroupRoute,
  postSysConfigCorsRoute,
  postSysConfigGroupPolicyApplicationRoute,
  postSysConfigReloadSubsystemRoute,
  postSysConfigUiHeadersHeaderRoute,
  postSysControlGroupAuthorizeRoute,
  postSysControlGroupRequestRoute,
  postSysDecodeTokenRoute,
  postSysGenerateRootAttemptRoute,
  postSysGenerateRootRoute,
  postSysGenerateRootUpdateRoute,
  postSysInitRoute,
  postSysInternalCountersConfigRoute,
  postSysInternalSpecsOpenapiRoute,
  postSysLeasesLookupRoute,
  postSysLeasesRenewRoute,
  postSysLeasesRenewUrlLeaseIdRoute,
  postSysLeasesRevokeForcePrefixRoute,
  postSysLeasesRevokePrefixPrefixRoute,
  postSysLeasesRevokeRoute,
  postSysLeasesRevokeUrlLeaseIdRoute,
  postSysLeasesTidyRoute,
  postSysLockedUsersMountAccessorUnlockAliasIdentifierRoute,
  postSysLoggersNameRoute,
  postSysLoggersRoute,
  postSysManagedKeysTypeNameRoute,
  postSysManagedKeysTypeNameTestSignRoute,
  postSysMfaMethodDuoNameRoute,
  postSysMfaMethodOktaNameRoute,
  postSysMfaMethodPingidNameRoute,
  postSysMfaMethodTotpNameAdminDestroyRoute,
  postSysMfaMethodTotpNameAdminGenerateRoute,
  postSysMfaMethodTotpNameRoute,
  postSysMfaValidateRoute,
  postSysMountsPathRoute,
  postSysMountsPathTuneRoute,
  postSysNamespacesApiLockLockPathRoute,
  postSysNamespacesApiLockLockRoute,
  postSysNamespacesApiLockUnlockPathRoute,
  postSysNamespacesApiLockUnlockRoute,
  postSysNamespacesPathRoute,
  postSysPluginsCatalogNameRoute,
  postSysPluginsCatalogTypeNameRoute,
  postSysPluginsReloadBackendRoute,
  postSysPluginsRuntimesCatalogTypeNameRoute,
  postSysPoliciesAclNameRoute,
  postSysPoliciesEgpNameRoute,
  postSysPoliciesPasswordNameRoute,
  postSysPoliciesRgpNameRoute,
  postSysPolicyNameRoute,
  postSysQuotasConfigRoute,
  postSysQuotasLeaseCountNameRoute,
  postSysQuotasRateLimitNameRoute,
  postSysRawPathRoute,
  postSysRekeyInitRoute,
  postSysRekeyUpdateRoute,
  postSysRekeyVerifyRoute,
  postSysRemountRoute,
  postSysRenewRoute,
  postSysRenewUrlLeaseIdRoute,
  postSysReplicationDrPrimaryDemoteRoute,
  postSysReplicationDrPrimaryDisableRoute,
  postSysReplicationDrPrimaryEnableRoute,
  postSysReplicationDrPrimaryRevokeSecondaryRoute,
  postSysReplicationDrPrimarySecondaryTokenRoute,
  postSysReplicationDrSecondaryConfigReloadSubsystemRoute,
  postSysReplicationDrSecondaryDisableRoute,
  postSysReplicationDrSecondaryEnableRoute,
  postSysReplicationDrSecondaryGeneratePublicKeyRoute,
  postSysReplicationDrSecondaryOperationTokenDeleteRoute,
  postSysReplicationDrSecondaryPromoteRoute,
  postSysReplicationDrSecondaryRecoverRoute,
  postSysReplicationDrSecondaryReindexRoute,
  postSysReplicationDrSecondaryUpdatePrimaryRoute,
  postSysReplicationPerformancePrimaryDemoteRoute,
  postSysReplicationPerformancePrimaryDisableRoute,
  postSysReplicationPerformancePrimaryEnableRoute,
  postSysReplicationPerformancePrimaryPathsFilterIdRoute,
  postSysReplicationPerformancePrimaryRevokeSecondaryRoute,
  postSysReplicationPerformancePrimarySecondaryTokenRoute,
  postSysReplicationPerformanceSecondaryDisableRoute,
  postSysReplicationPerformanceSecondaryEnableRoute,
  postSysReplicationPerformanceSecondaryGeneratePublicKeyRoute,
  postSysReplicationPerformanceSecondaryPromoteRoute,
  postSysReplicationPerformanceSecondaryUpdatePrimaryRoute,
  postSysReplicationPrimaryDemoteRoute,
  postSysReplicationPrimaryDisableRoute,
  postSysReplicationPrimaryEnableRoute,
  postSysReplicationPrimaryRevokeSecondaryRoute,
  postSysReplicationPrimarySecondaryTokenRoute,
  postSysReplicationRecoverRoute,
  postSysReplicationReindexRoute,
  postSysReplicationSecondaryDisableRoute,
  postSysReplicationSecondaryEnableRoute,
  postSysReplicationSecondaryPromoteRoute,
  postSysReplicationSecondaryUpdatePrimaryRoute,
  postSysRevokeForcePrefixRoute,
  postSysRevokePrefixPrefixRoute,
  postSysRevokeRoute,
  postSysRevokeUrlLeaseIdRoute,
  postSysRotateConfigRoute,
  postSysRotateRoute,
  postSysSealRoute,
  postSysSealwrapRewrapRoute,
  postSysStepDownRoute,
  postSysStorageRaftSnapshotAutoConfigNameRoute,
  postSysToolsHashRoute,
  postSysToolsHashUrlalgorithmRoute,
  postSysToolsRandomRoute,
  postSysToolsRandomSourceRoute,
  postSysToolsRandomSourceUrlbytesRoute,
  postSysToolsRandomUrlbytesRoute,
  postSysUnsealRoute,
  postSysWrappingLookupRoute,
  postSysWrappingRewrapRoute,
  postSysWrappingUnwrapRoute,
  postSysWrappingWrapRoute,
  postTerraformMountPathConfigRoute,
  postTerraformMountPathCredsNameRoute,
  postTerraformMountPathRoleNameRoute,
  postTerraformMountPathRotateRoleNameRoute,
  postTotpMountPathCodeNameRoute,
  postTotpMountPathKeysNameRoute,
  postTransitMountPathCacheConfigRoute,
  postTransitMountPathConfigKeysRoute,
  postTransitMountPathDatakeyPlaintextNameRoute,
  postTransitMountPathDecryptNameRoute,
  postTransitMountPathEncryptNameRoute,
  postTransitMountPathHashRoute,
  postTransitMountPathHashUrlalgorithmRoute,
  postTransitMountPathHmacNameRoute,
  postTransitMountPathHmacNameUrlalgorithmRoute,
  postTransitMountPathKeysNameConfigRoute,
  postTransitMountPathKeysNameCsrRoute,
  postTransitMountPathKeysNameImportRoute,
  postTransitMountPathKeysNameImportVersionRoute,
  postTransitMountPathKeysNameRotateRoute,
  postTransitMountPathKeysNameRoute,
  postTransitMountPathKeysNameSetCertificateRoute,
  postTransitMountPathKeysNameTrimRoute,
  postTransitMountPathRandomRoute,
  postTransitMountPathRandomSourceRoute,
  postTransitMountPathRandomSourceUrlbytesRoute,
  postTransitMountPathRandomUrlbytesRoute,
  postTransitMountPathRestoreNameRoute,
  postTransitMountPathRestoreRoute,
  postTransitMountPathRewrapNameRoute,
  postTransitMountPathSignNameRoute,
  postTransitMountPathSignNameUrlalgorithmRoute,
  postTransitMountPathVerifyNameRoute,
  postTransitMountPathVerifyNameUrlalgorithmRoute,
} from './routes'
import {
  deleteAlicloudMountPathConfigRouteHandler,
  deleteAlicloudMountPathRoleNameRouteHandler,
  deleteAuthAlicloudMountPathRoleRoleRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameBindSecretIdRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameBoundCidrListRouteHandler,
  deleteAuthApproleMountPathRoleRoleNamePeriodRouteHandler,
  deleteAuthApproleMountPathRoleRoleNamePoliciesRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameSecretIdDestroyRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameSecretIdNumUsesRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameSecretIdTtlRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameTokenBoundCidrsRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameTokenMaxTtlRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameTokenNumUsesRouteHandler,
  deleteAuthApproleMountPathRoleRoleNameTokenTtlRouteHandler,
  deleteAuthAwsMountPathConfigCertificateCertNameRouteHandler,
  deleteAuthAwsMountPathConfigClientRouteHandler,
  deleteAuthAwsMountPathConfigStsAccountIdRouteHandler,
  deleteAuthAwsMountPathConfigTidyIdentityAccesslistRouteHandler,
  deleteAuthAwsMountPathConfigTidyIdentityWhitelistRouteHandler,
  deleteAuthAwsMountPathConfigTidyRoletagBlacklistRouteHandler,
  deleteAuthAwsMountPathConfigTidyRoletagDenylistRouteHandler,
  deleteAuthAwsMountPathIdentityAccesslistInstanceIdRouteHandler,
  deleteAuthAwsMountPathIdentityWhitelistInstanceIdRouteHandler,
  deleteAuthAwsMountPathRoleRoleRouteHandler,
  deleteAuthAwsMountPathRoletagBlacklistRoleTagRouteHandler,
  deleteAuthAwsMountPathRoletagDenylistRoleTagRouteHandler,
  deleteAuthAzureMountPathConfigRouteHandler,
  deleteAuthAzureMountPathRoleNameRouteHandler,
  deleteAuthCertMountPathCertsNameRouteHandler,
  deleteAuthCertMountPathCrlsNameRouteHandler,
  deleteAuthCfMountPathConfigRouteHandler,
  deleteAuthCfMountPathRolesRoleRouteHandler,
  deleteAuthGcpMountPathRoleNameRouteHandler,
  deleteAuthGithubMountPathMapTeamsKeyRouteHandler,
  deleteAuthGithubMountPathMapUsersKeyRouteHandler,
  deleteAuthJwtMountPathRoleNameRouteHandler,
  deleteAuthKerberosMountPathGroupsNameRouteHandler,
  deleteAuthKubernetesMountPathRoleNameRouteHandler,
  deleteAuthLdapMountPathGroupsNameRouteHandler,
  deleteAuthLdapMountPathUsersNameRouteHandler,
  deleteAuthOciMountPathConfigRouteHandler,
  deleteAuthOciMountPathRoleRoleRouteHandler,
  deleteAuthOktaMountPathGroupsNameRouteHandler,
  deleteAuthOktaMountPathUsersNameRouteHandler,
  deleteAuthRadiusMountPathUsersNameRouteHandler,
  deleteAuthTokenRolesRoleNameRouteHandler,
  deleteAuthUserpassMountPathUsersUsernameRouteHandler,
  deleteAwsMountPathRolesNameRouteHandler,
  deleteAwsMountPathStaticRolesNameRouteHandler,
  deleteAzureMountPathConfigRouteHandler,
  deleteAzureMountPathRolesNameRouteHandler,
  deleteConsulMountPathRolesNameRouteHandler,
  deleteCubbyholePathRouteHandler,
  deleteDatabaseMountPathConfigNameRouteHandler,
  deleteDatabaseMountPathRolesNameRouteHandler,
  deleteDatabaseMountPathStaticRolesNameRouteHandler,
  deleteGcpkmsMountPathConfigRouteHandler,
  deleteGcpkmsMountPathKeysDeregisterKeyRouteHandler,
  deleteGcpkmsMountPathKeysKeyRouteHandler,
  deleteGcpkmsMountPathKeysTrimKeyRouteHandler,
  deleteGcpMountPathImpersonatedAccountNameRouteHandler,
  deleteGcpMountPathRolesetNameRouteHandler,
  deleteGcpMountPathStaticAccountNameRouteHandler,
  deleteIdentityAliasIdIdRouteHandler,
  deleteIdentityEntityAliasIdIdRouteHandler,
  deleteIdentityEntityIdIdRouteHandler,
  deleteIdentityEntityNameNameRouteHandler,
  deleteIdentityGroupAliasIdIdRouteHandler,
  deleteIdentityGroupIdIdRouteHandler,
  deleteIdentityGroupNameNameRouteHandler,
  deleteIdentityMfaLoginEnforcementNameRouteHandler,
  deleteIdentityMfaMethodDuoMethodIdRouteHandler,
  deleteIdentityMfaMethodOktaMethodIdRouteHandler,
  deleteIdentityMfaMethodPingidMethodIdRouteHandler,
  deleteIdentityMfaMethodTotpMethodIdRouteHandler,
  deleteIdentityOidcAssignmentNameRouteHandler,
  deleteIdentityOidcClientNameRouteHandler,
  deleteIdentityOidcKeyNameRouteHandler,
  deleteIdentityOidcProviderNameRouteHandler,
  deleteIdentityOidcRoleNameRouteHandler,
  deleteIdentityOidcScopeNameRouteHandler,
  deleteIdentityPersonaIdIdRouteHandler,
  deleteKubernetesMountPathConfigRouteHandler,
  deleteKubernetesMountPathRolesNameRouteHandler,
  deleteKvV1MountPathPathRouteHandler,
  deleteKvV2MountPathDataPathRouteHandler,
  deleteKvV2MountPathMetadataPathRouteHandler,
  deleteLdapMountPathConfigRouteHandler,
  deleteLdapMountPathLibraryNameRouteHandler,
  deleteLdapMountPathRoleNameRouteHandler,
  deleteLdapMountPathStaticRoleNameRouteHandler,
  deleteMongodbatlasMountPathRolesNameRouteHandler,
  deleteNomadMountPathConfigAccessRouteHandler,
  deleteNomadMountPathConfigLeaseRouteHandler,
  deleteNomadMountPathRoleNameRouteHandler,
  deletePkiMountPathEabKeyIdRouteHandler,
  deletePkiMountPathIssuerIssuerRefRouteHandler,
  deletePkiMountPathKeyKeyRefRouteHandler,
  deletePkiMountPathRolesNameRouteHandler,
  deletePkiMountPathRootRouteHandler,
  deleteRabbitmqMountPathRolesNameRouteHandler,
  deleteSshMountPathConfigCaRouteHandler,
  deleteSshMountPathConfigZeroaddressRouteHandler,
  deleteSshMountPathRolesRoleRouteHandler,
  deleteSshMountPathTidyDynamicKeysRouteHandler,
  deleteSysAuditPathRouteHandler,
  deleteSysAuthPathRouteHandler,
  deleteSysConfigAuditingRequestHeadersHeaderRouteHandler,
  deleteSysConfigControlGroupRouteHandler,
  deleteSysConfigCorsRouteHandler,
  deleteSysConfigUiHeadersHeaderRouteHandler,
  deleteSysGenerateRootAttemptRouteHandler,
  deleteSysGenerateRootRouteHandler,
  deleteSysLoggersNameRouteHandler,
  deleteSysLoggersRouteHandler,
  deleteSysManagedKeysTypeNameRouteHandler,
  deleteSysMfaMethodDuoNameRouteHandler,
  deleteSysMfaMethodOktaNameRouteHandler,
  deleteSysMfaMethodPingidNameRouteHandler,
  deleteSysMfaMethodTotpNameRouteHandler,
  deleteSysMountsPathRouteHandler,
  deleteSysNamespacesPathRouteHandler,
  deleteSysPluginsCatalogNameRouteHandler,
  deleteSysPluginsCatalogTypeNameRouteHandler,
  deleteSysPluginsRuntimesCatalogTypeNameRouteHandler,
  deleteSysPoliciesAclNameRouteHandler,
  deleteSysPoliciesEgpNameRouteHandler,
  deleteSysPoliciesPasswordNameRouteHandler,
  deleteSysPoliciesRgpNameRouteHandler,
  deleteSysPolicyNameRouteHandler,
  deleteSysQuotasLeaseCountNameRouteHandler,
  deleteSysQuotasRateLimitNameRouteHandler,
  deleteSysRawPathRouteHandler,
  deleteSysRekeyBackupRouteHandler,
  deleteSysRekeyInitRouteHandler,
  deleteSysRekeyRecoveryKeyBackupRouteHandler,
  deleteSysRekeyVerifyRouteHandler,
  deleteSysReplicationPerformancePrimaryPathsFilterIdRouteHandler,
  deleteSysStorageRaftSnapshotAutoConfigNameRouteHandler,
  deleteTerraformMountPathConfigRouteHandler,
  deleteTerraformMountPathRoleNameRouteHandler,
  deleteTotpMountPathKeysNameRouteHandler,
  deleteTransitMountPathKeysNameRouteHandler,
  getAlicloudMountPathConfigRouteHandler,
  getAlicloudMountPathCredsNameRouteHandler,
  getAlicloudMountPathRoleIndexRouteHandler,
  getAlicloudMountPathRoleNameRouteHandler,
  getAuthAlicloudMountPathRoleIndexRouteHandler,
  getAuthAlicloudMountPathRoleRoleRouteHandler,
  getAuthAlicloudMountPathRolesIndexRouteHandler,
  getAuthApproleMountPathRoleIndexRouteHandler,
  getAuthApproleMountPathRoleRoleNameBindSecretIdRouteHandler,
  getAuthApproleMountPathRoleRoleNameBoundCidrListRouteHandler,
  getAuthApproleMountPathRoleRoleNameLocalSecretIdsRouteHandler,
  getAuthApproleMountPathRoleRoleNamePeriodRouteHandler,
  getAuthApproleMountPathRoleRoleNamePoliciesRouteHandler,
  getAuthApproleMountPathRoleRoleNameRoleIdRouteHandler,
  getAuthApproleMountPathRoleRoleNameRouteHandler,
  getAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRouteHandler,
  getAuthApproleMountPathRoleRoleNameSecretIdIndexRouteHandler,
  getAuthApproleMountPathRoleRoleNameSecretIdNumUsesRouteHandler,
  getAuthApproleMountPathRoleRoleNameSecretIdTtlRouteHandler,
  getAuthApproleMountPathRoleRoleNameTokenBoundCidrsRouteHandler,
  getAuthApproleMountPathRoleRoleNameTokenMaxTtlRouteHandler,
  getAuthApproleMountPathRoleRoleNameTokenNumUsesRouteHandler,
  getAuthApproleMountPathRoleRoleNameTokenTtlRouteHandler,
  getAuthAwsMountPathConfigCertificateCertNameRouteHandler,
  getAuthAwsMountPathConfigCertificatesIndexRouteHandler,
  getAuthAwsMountPathConfigClientRouteHandler,
  getAuthAwsMountPathConfigIdentityRouteHandler,
  getAuthAwsMountPathConfigStsAccountIdRouteHandler,
  getAuthAwsMountPathConfigStsIndexRouteHandler,
  getAuthAwsMountPathConfigTidyIdentityAccesslistRouteHandler,
  getAuthAwsMountPathConfigTidyIdentityWhitelistRouteHandler,
  getAuthAwsMountPathConfigTidyRoletagBlacklistRouteHandler,
  getAuthAwsMountPathConfigTidyRoletagDenylistRouteHandler,
  getAuthAwsMountPathIdentityAccesslistIndexRouteHandler,
  getAuthAwsMountPathIdentityAccesslistInstanceIdRouteHandler,
  getAuthAwsMountPathIdentityWhitelistIndexRouteHandler,
  getAuthAwsMountPathIdentityWhitelistInstanceIdRouteHandler,
  getAuthAwsMountPathRoleIndexRouteHandler,
  getAuthAwsMountPathRoleRoleRouteHandler,
  getAuthAwsMountPathRolesIndexRouteHandler,
  getAuthAwsMountPathRoletagBlacklistIndexRouteHandler,
  getAuthAwsMountPathRoletagBlacklistRoleTagRouteHandler,
  getAuthAwsMountPathRoletagDenylistIndexRouteHandler,
  getAuthAwsMountPathRoletagDenylistRoleTagRouteHandler,
  getAuthAzureMountPathConfigRouteHandler,
  getAuthAzureMountPathRoleIndexRouteHandler,
  getAuthAzureMountPathRoleNameRouteHandler,
  getAuthCentrifyMountPathConfigRouteHandler,
  getAuthCertMountPathCertsIndexRouteHandler,
  getAuthCertMountPathCertsNameRouteHandler,
  getAuthCertMountPathConfigRouteHandler,
  getAuthCertMountPathCrlsIndexRouteHandler,
  getAuthCertMountPathCrlsNameRouteHandler,
  getAuthCfMountPathConfigRouteHandler,
  getAuthCfMountPathRolesIndexRouteHandler,
  getAuthCfMountPathRolesRoleRouteHandler,
  getAuthGcpMountPathConfigRouteHandler,
  getAuthGcpMountPathRoleIndexRouteHandler,
  getAuthGcpMountPathRoleNameRouteHandler,
  getAuthGcpMountPathRolesIndexRouteHandler,
  getAuthGithubMountPathConfigRouteHandler,
  getAuthGithubMountPathMapTeamsIndexRouteHandler,
  getAuthGithubMountPathMapTeamsKeyRouteHandler,
  getAuthGithubMountPathMapTeamsRouteHandler,
  getAuthGithubMountPathMapUsersIndexRouteHandler,
  getAuthGithubMountPathMapUsersKeyRouteHandler,
  getAuthGithubMountPathMapUsersRouteHandler,
  getAuthJwtMountPathConfigRouteHandler,
  getAuthJwtMountPathOidcCallbackRouteHandler,
  getAuthJwtMountPathRoleIndexRouteHandler,
  getAuthJwtMountPathRoleNameRouteHandler,
  getAuthKerberosMountPathConfigLdapRouteHandler,
  getAuthKerberosMountPathConfigRouteHandler,
  getAuthKerberosMountPathGroupsIndexRouteHandler,
  getAuthKerberosMountPathGroupsNameRouteHandler,
  getAuthKerberosMountPathLoginRouteHandler,
  getAuthKubernetesMountPathConfigRouteHandler,
  getAuthKubernetesMountPathRoleIndexRouteHandler,
  getAuthKubernetesMountPathRoleNameRouteHandler,
  getAuthLdapMountPathConfigRouteHandler,
  getAuthLdapMountPathGroupsIndexRouteHandler,
  getAuthLdapMountPathGroupsNameRouteHandler,
  getAuthLdapMountPathUsersIndexRouteHandler,
  getAuthLdapMountPathUsersNameRouteHandler,
  getAuthOciMountPathConfigRouteHandler,
  getAuthOciMountPathRoleIndexRouteHandler,
  getAuthOciMountPathRoleRoleRouteHandler,
  getAuthOktaMountPathConfigRouteHandler,
  getAuthOktaMountPathGroupsIndexRouteHandler,
  getAuthOktaMountPathGroupsNameRouteHandler,
  getAuthOktaMountPathUsersIndexRouteHandler,
  getAuthOktaMountPathUsersNameRouteHandler,
  getAuthOktaMountPathVerifyNonceRouteHandler,
  getAuthRadiusMountPathConfigRouteHandler,
  getAuthRadiusMountPathUsersIndexRouteHandler,
  getAuthRadiusMountPathUsersNameRouteHandler,
  getAuthTokenAccessorsIndexRouteHandler,
  getAuthTokenLookupRouteHandler,
  getAuthTokenLookupSelfRouteHandler,
  getAuthTokenRolesIndexRouteHandler,
  getAuthTokenRolesRoleNameRouteHandler,
  getAuthUserpassMountPathUsersIndexRouteHandler,
  getAuthUserpassMountPathUsersUsernameRouteHandler,
  getAwsMountPathConfigLeaseRouteHandler,
  getAwsMountPathConfigRootRouteHandler,
  getAwsMountPathCredsNameRouteHandler,
  getAwsMountPathRolesIndexRouteHandler,
  getAwsMountPathRolesNameRouteHandler,
  getAwsMountPathStaticCredsNameRouteHandler,
  getAwsMountPathStaticRolesNameRouteHandler,
  getAwsMountPathStsNameRouteHandler,
  getAzureMountPathConfigRouteHandler,
  getAzureMountPathCredsRoleRouteHandler,
  getAzureMountPathRolesIndexRouteHandler,
  getAzureMountPathRolesNameRouteHandler,
  getConsulMountPathConfigAccessRouteHandler,
  getConsulMountPathCredsRoleRouteHandler,
  getConsulMountPathRolesIndexRouteHandler,
  getConsulMountPathRolesNameRouteHandler,
  getCubbyholePathIndexRouteHandler,
  getCubbyholePathRouteHandler,
  getDatabaseMountPathConfigIndexRouteHandler,
  getDatabaseMountPathConfigNameRouteHandler,
  getDatabaseMountPathCredsNameRouteHandler,
  getDatabaseMountPathRolesIndexRouteHandler,
  getDatabaseMountPathRolesNameRouteHandler,
  getDatabaseMountPathStaticCredsNameRouteHandler,
  getDatabaseMountPathStaticRolesIndexRouteHandler,
  getDatabaseMountPathStaticRolesNameRouteHandler,
  getGcpkmsMountPathConfigRouteHandler,
  getGcpkmsMountPathKeysConfigKeyRouteHandler,
  getGcpkmsMountPathKeysIndexRouteHandler,
  getGcpkmsMountPathKeysKeyRouteHandler,
  getGcpkmsMountPathPubkeyKeyRouteHandler,
  getGcpMountPathConfigRouteHandler,
  getGcpMountPathImpersonatedAccountIndexRouteHandler,
  getGcpMountPathImpersonatedAccountNameRouteHandler,
  getGcpMountPathImpersonatedAccountNameTokenRouteHandler,
  getGcpMountPathImpersonatedAccountsIndexRouteHandler,
  getGcpMountPathKeyRolesetRouteHandler,
  getGcpMountPathRolesetIndexRouteHandler,
  getGcpMountPathRolesetNameRouteHandler,
  getGcpMountPathRolesetRolesetKeyRouteHandler,
  getGcpMountPathRolesetRolesetTokenRouteHandler,
  getGcpMountPathRolesetsIndexRouteHandler,
  getGcpMountPathStaticAccountIndexRouteHandler,
  getGcpMountPathStaticAccountNameKeyRouteHandler,
  getGcpMountPathStaticAccountNameRouteHandler,
  getGcpMountPathStaticAccountNameTokenRouteHandler,
  getGcpMountPathStaticAccountsIndexRouteHandler,
  getGcpMountPathTokenRolesetRouteHandler,
  getIdentityAliasIdIdRouteHandler,
  getIdentityAliasIdIndexRouteHandler,
  getIdentityEntityAliasIdIdRouteHandler,
  getIdentityEntityAliasIdIndexRouteHandler,
  getIdentityEntityIdIdRouteHandler,
  getIdentityEntityIdIndexRouteHandler,
  getIdentityEntityNameIndexRouteHandler,
  getIdentityEntityNameNameRouteHandler,
  getIdentityGroupAliasIdIdRouteHandler,
  getIdentityGroupAliasIdIndexRouteHandler,
  getIdentityGroupIdIdRouteHandler,
  getIdentityGroupIdIndexRouteHandler,
  getIdentityGroupNameIndexRouteHandler,
  getIdentityGroupNameNameRouteHandler,
  getIdentityMfaLoginEnforcementIndexRouteHandler,
  getIdentityMfaLoginEnforcementNameRouteHandler,
  getIdentityMfaMethodDuoIndexRouteHandler,
  getIdentityMfaMethodDuoMethodIdRouteHandler,
  getIdentityMfaMethodIndexRouteHandler,
  getIdentityMfaMethodMethodIdRouteHandler,
  getIdentityMfaMethodOktaIndexRouteHandler,
  getIdentityMfaMethodOktaMethodIdRouteHandler,
  getIdentityMfaMethodPingidIndexRouteHandler,
  getIdentityMfaMethodPingidMethodIdRouteHandler,
  getIdentityMfaMethodTotpIndexRouteHandler,
  getIdentityMfaMethodTotpMethodIdRouteHandler,
  getIdentityOidcAssignmentIndexRouteHandler,
  getIdentityOidcAssignmentNameRouteHandler,
  getIdentityOidcClientIndexRouteHandler,
  getIdentityOidcClientNameRouteHandler,
  getIdentityOidcConfigRouteHandler,
  getIdentityOidcKeyIndexRouteHandler,
  getIdentityOidcKeyNameRouteHandler,
  getIdentityOidcProviderIndexRouteHandler,
  getIdentityOidcProviderNameAuthorizeRouteHandler,
  getIdentityOidcProviderNameRouteHandler,
  getIdentityOidcProviderNameUserinfoRouteHandler,
  getIdentityOidcProviderNameWellKnownKeysRouteHandler,
  getIdentityOidcProviderNameWellKnownOpenidConfigurationRouteHandler,
  getIdentityOidcRoleIndexRouteHandler,
  getIdentityOidcRoleNameRouteHandler,
  getIdentityOidcScopeIndexRouteHandler,
  getIdentityOidcScopeNameRouteHandler,
  getIdentityOidcTokenNameRouteHandler,
  getIdentityOidcWellKnownKeysRouteHandler,
  getIdentityOidcWellKnownOpenidConfigurationRouteHandler,
  getIdentityPersonaIdIdRouteHandler,
  getIdentityPersonaIdIndexRouteHandler,
  getKubernetesMountPathCheckRouteHandler,
  getKubernetesMountPathConfigRouteHandler,
  getKubernetesMountPathRolesIndexRouteHandler,
  getKubernetesMountPathRolesNameRouteHandler,
  getKvV1MountPathPathIndexRouteHandler,
  getKvV1MountPathPathRouteHandler,
  getKvV2MountPathConfigRouteHandler,
  getKvV2MountPathDataPathRouteHandler,
  getKvV2MountPathMetadataPathIndexRouteHandler,
  getKvV2MountPathMetadataPathRouteHandler,
  getKvV2MountPathSubkeysPathRouteHandler,
  getLdapMountPathConfigRouteHandler,
  getLdapMountPathCredsNameRouteHandler,
  getLdapMountPathLibraryIndexRouteHandler,
  getLdapMountPathLibraryNameRouteHandler,
  getLdapMountPathLibraryNameStatusRouteHandler,
  getLdapMountPathRoleIndexRouteHandler,
  getLdapMountPathRoleNameRouteHandler,
  getLdapMountPathStaticCredNameRouteHandler,
  getLdapMountPathStaticRoleIndexRouteHandler,
  getLdapMountPathStaticRoleNameRouteHandler,
  getMongodbatlasMountPathConfigRouteHandler,
  getMongodbatlasMountPathCredsNameRouteHandler,
  getMongodbatlasMountPathRolesIndexRouteHandler,
  getMongodbatlasMountPathRolesNameRouteHandler,
  getNomadMountPathConfigAccessRouteHandler,
  getNomadMountPathConfigLeaseRouteHandler,
  getNomadMountPathCredsNameRouteHandler,
  getNomadMountPathRoleIndexRouteHandler,
  getNomadMountPathRoleNameRouteHandler,
  getPkiMountPathAcmeDirectoryRouteHandler,
  getPkiMountPathAcmeNewNonceRouteHandler,
  getPkiMountPathCaChainRouteHandler,
  getPkiMountPathCaPemRouteHandler,
  getPkiMountPathCaRouteHandler,
  getPkiMountPathCertCaChainRouteHandler,
  getPkiMountPathCertCrlRouteHandler,
  getPkiMountPathCertDeltaCrlRouteHandler,
  getPkiMountPathCertSerialRawPemRouteHandler,
  getPkiMountPathCertSerialRawRouteHandler,
  getPkiMountPathCertSerialRouteHandler,
  getPkiMountPathCertsIndexRouteHandler,
  getPkiMountPathCertsRevokedIndexRouteHandler,
  getPkiMountPathConfigAcmeRouteHandler,
  getPkiMountPathConfigAutoTidyRouteHandler,
  getPkiMountPathConfigClusterRouteHandler,
  getPkiMountPathConfigCrlRouteHandler,
  getPkiMountPathConfigIssuersRouteHandler,
  getPkiMountPathConfigKeysRouteHandler,
  getPkiMountPathConfigUrlsRouteHandler,
  getPkiMountPathCrlDeltaPemRouteHandler,
  getPkiMountPathCrlDeltaRouteHandler,
  getPkiMountPathCrlPemRouteHandler,
  getPkiMountPathCrlRotateDeltaRouteHandler,
  getPkiMountPathCrlRotateRouteHandler,
  getPkiMountPathCrlRouteHandler,
  getPkiMountPathEabIndexRouteHandler,
  getPkiMountPathIssuerIssuerRefAcmeDirectoryRouteHandler,
  getPkiMountPathIssuerIssuerRefAcmeNewNonceRouteHandler,
  getPkiMountPathIssuerIssuerRefCrlDeltaDerRouteHandler,
  getPkiMountPathIssuerIssuerRefCrlDeltaPemRouteHandler,
  getPkiMountPathIssuerIssuerRefCrlDeltaRouteHandler,
  getPkiMountPathIssuerIssuerRefCrlDerRouteHandler,
  getPkiMountPathIssuerIssuerRefCrlPemRouteHandler,
  getPkiMountPathIssuerIssuerRefCrlRouteHandler,
  getPkiMountPathIssuerIssuerRefDerRouteHandler,
  getPkiMountPathIssuerIssuerRefJsonRouteHandler,
  getPkiMountPathIssuerIssuerRefPemRouteHandler,
  getPkiMountPathIssuerIssuerRefRolesRoleAcmeDirectoryRouteHandler,
  getPkiMountPathIssuerIssuerRefRolesRoleAcmeNewNonceRouteHandler,
  getPkiMountPathIssuerIssuerRefRouteHandler,
  getPkiMountPathIssuersIndexRouteHandler,
  getPkiMountPathKeyKeyRefRouteHandler,
  getPkiMountPathKeysIndexRouteHandler,
  getPkiMountPathOcspReqRouteHandler,
  getPkiMountPathRolesIndexRouteHandler,
  getPkiMountPathRolesNameRouteHandler,
  getPkiMountPathRolesRoleAcmeDirectoryRouteHandler,
  getPkiMountPathRolesRoleAcmeNewNonceRouteHandler,
  getPkiMountPathTidyStatusRouteHandler,
  getRabbitmqMountPathConfigLeaseRouteHandler,
  getRabbitmqMountPathCredsNameRouteHandler,
  getRabbitmqMountPathRolesIndexRouteHandler,
  getRabbitmqMountPathRolesNameRouteHandler,
  getSshMountPathConfigCaRouteHandler,
  getSshMountPathConfigZeroaddressRouteHandler,
  getSshMountPathPublicKeyRouteHandler,
  getSshMountPathRolesIndexRouteHandler,
  getSshMountPathRolesRoleRouteHandler,
  getSysAuditRouteHandler,
  getSysAuthPathRouteHandler,
  getSysAuthPathTuneRouteHandler,
  getSysAuthRouteHandler,
  getSysConfigAuditingRequestHeadersHeaderRouteHandler,
  getSysConfigAuditingRequestHeadersRouteHandler,
  getSysConfigControlGroupRouteHandler,
  getSysConfigCorsRouteHandler,
  getSysConfigGroupPolicyApplicationRouteHandler,
  getSysConfigStateSanitizedRouteHandler,
  getSysConfigUiHeadersHeaderRouteHandler,
  getSysConfigUiHeadersIndexRouteHandler,
  getSysExperimentsRouteHandler,
  getSysGenerateRootAttemptRouteHandler,
  getSysGenerateRootRouteHandler,
  getSysHaStatusRouteHandler,
  getSysHealthRouteHandler,
  getSysHostInfoRouteHandler,
  getSysInFlightReqRouteHandler,
  getSysInitRouteHandler,
  getSysInternalCountersActivityExportRouteHandler,
  getSysInternalCountersActivityMonthlyRouteHandler,
  getSysInternalCountersActivityRouteHandler,
  getSysInternalCountersConfigRouteHandler,
  getSysInternalCountersEntitiesRouteHandler,
  getSysInternalCountersRequestsRouteHandler,
  getSysInternalCountersTokensRouteHandler,
  getSysInternalInspectRouterTagRouteHandler,
  getSysInternalSpecsOpenapiRouteHandler,
  getSysInternalUiFeatureFlagsRouteHandler,
  getSysInternalUiMountsPathRouteHandler,
  getSysInternalUiMountsRouteHandler,
  getSysInternalUiNamespacesRouteHandler,
  getSysInternalUiResultantAclRouteHandler,
  getSysKeyStatusRouteHandler,
  getSysLeaderRouteHandler,
  getSysLeasesCountRouteHandler,
  getSysLeasesLookupPrefixIndexRouteHandler,
  getSysLeasesRouteHandler,
  getSysLicenseStatusRouteHandler,
  getSysLockedUsersRouteHandler,
  getSysLoggersNameRouteHandler,
  getSysLoggersRouteHandler,
  getSysManagedKeysTypeIndexRouteHandler,
  getSysManagedKeysTypeNameRouteHandler,
  getSysMetricsRouteHandler,
  getSysMfaMethodDuoNameRouteHandler,
  getSysMfaMethodIndexRouteHandler,
  getSysMfaMethodOktaNameRouteHandler,
  getSysMfaMethodPingidNameRouteHandler,
  getSysMfaMethodTotpNameGenerateRouteHandler,
  getSysMfaMethodTotpNameRouteHandler,
  getSysMonitorRouteHandler,
  getSysMountsPathRouteHandler,
  getSysMountsPathTuneRouteHandler,
  getSysMountsRouteHandler,
  getSysNamespacesIndexRouteHandler,
  getSysNamespacesPathRouteHandler,
  getSysPluginsCatalogNameRouteHandler,
  getSysPluginsCatalogRouteHandler,
  getSysPluginsCatalogTypeIndexRouteHandler,
  getSysPluginsCatalogTypeNameRouteHandler,
  getSysPluginsReloadBackendStatusRouteHandler,
  getSysPluginsRuntimesCatalogIndexRouteHandler,
  getSysPluginsRuntimesCatalogTypeNameRouteHandler,
  getSysPoliciesAclIndexRouteHandler,
  getSysPoliciesAclNameRouteHandler,
  getSysPoliciesEgpIndexRouteHandler,
  getSysPoliciesEgpNameRouteHandler,
  getSysPoliciesPasswordIndexRouteHandler,
  getSysPoliciesPasswordNameGenerateRouteHandler,
  getSysPoliciesPasswordNameRouteHandler,
  getSysPoliciesRgpIndexRouteHandler,
  getSysPoliciesRgpNameRouteHandler,
  getSysPolicyIndexRouteHandler,
  getSysPolicyNameRouteHandler,
  getSysPolicyRouteHandler,
  getSysPprofAllocsRouteHandler,
  getSysPprofBlockRouteHandler,
  getSysPprofCmdlineRouteHandler,
  getSysPprofGoroutineRouteHandler,
  getSysPprofHeapRouteHandler,
  getSysPprofMutexRouteHandler,
  getSysPprofProfileRouteHandler,
  getSysPprofRouteHandler,
  getSysPprofSymbolRouteHandler,
  getSysPprofThreadcreateRouteHandler,
  getSysPprofTraceRouteHandler,
  getSysQuotasConfigRouteHandler,
  getSysQuotasLeaseCountIndexRouteHandler,
  getSysQuotasLeaseCountNameRouteHandler,
  getSysQuotasRateLimitIndexRouteHandler,
  getSysQuotasRateLimitNameRouteHandler,
  getSysRawPathIndexRouteHandler,
  getSysRawPathRouteHandler,
  getSysRekeyBackupRouteHandler,
  getSysRekeyInitRouteHandler,
  getSysRekeyRecoveryKeyBackupRouteHandler,
  getSysRekeyVerifyRouteHandler,
  getSysRemountStatusMigrationIdRouteHandler,
  getSysReplicationDrSecondaryLicenseStatusRouteHandler,
  getSysReplicationDrStatusRouteHandler,
  getSysReplicationPerformancePrimaryDynamicFilterIdRouteHandler,
  getSysReplicationPerformancePrimaryPathsFilterIdRouteHandler,
  getSysReplicationPerformanceSecondaryDynamicFilterIdRouteHandler,
  getSysReplicationPerformanceStatusRouteHandler,
  getSysReplicationStatusRouteHandler,
  getSysRotateConfigRouteHandler,
  getSysSealStatusRouteHandler,
  getSysSealwrapRewrapRouteHandler,
  getSysStorageRaftSnapshotAutoConfigIndexRouteHandler,
  getSysStorageRaftSnapshotAutoConfigNameRouteHandler,
  getSysStorageRaftSnapshotAutoStatusNameRouteHandler,
  getSysVersionHistoryIndexRouteHandler,
  getSysWrappingLookupRouteHandler,
  getTerraformMountPathConfigRouteHandler,
  getTerraformMountPathCredsNameRouteHandler,
  getTerraformMountPathRoleIndexRouteHandler,
  getTerraformMountPathRoleNameRouteHandler,
  getTotpMountPathCodeNameRouteHandler,
  getTotpMountPathKeysIndexRouteHandler,
  getTotpMountPathKeysNameRouteHandler,
  getTransitMountPathBackupNameRouteHandler,
  getTransitMountPathByokExportDestinationSourceRouteHandler,
  getTransitMountPathByokExportDestinationSourceVersionRouteHandler,
  getTransitMountPathCacheConfigRouteHandler,
  getTransitMountPathConfigKeysRouteHandler,
  getTransitMountPathExportTypeNameRouteHandler,
  getTransitMountPathExportTypeNameVersionRouteHandler,
  getTransitMountPathKeysIndexRouteHandler,
  getTransitMountPathKeysNameRouteHandler,
  getTransitMountPathWrappingKeyRouteHandler,
  postAlicloudMountPathConfigRouteHandler,
  postAlicloudMountPathRoleNameRouteHandler,
  postAuthAlicloudMountPathLoginRouteHandler,
  postAuthAlicloudMountPathRoleRoleRouteHandler,
  postAuthApproleMountPathLoginRouteHandler,
  postAuthApproleMountPathRoleRoleNameBindSecretIdRouteHandler,
  postAuthApproleMountPathRoleRoleNameBoundCidrListRouteHandler,
  postAuthApproleMountPathRoleRoleNameCustomSecretIdRouteHandler,
  postAuthApproleMountPathRoleRoleNamePeriodRouteHandler,
  postAuthApproleMountPathRoleRoleNamePoliciesRouteHandler,
  postAuthApproleMountPathRoleRoleNameRoleIdRouteHandler,
  postAuthApproleMountPathRoleRoleNameRouteHandler,
  postAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRouteHandler,
  postAuthApproleMountPathRoleRoleNameSecretIdAccessorLookupRouteHandler,
  postAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRouteHandler,
  postAuthApproleMountPathRoleRoleNameSecretIdDestroyRouteHandler,
  postAuthApproleMountPathRoleRoleNameSecretIdLookupRouteHandler,
  postAuthApproleMountPathRoleRoleNameSecretIdNumUsesRouteHandler,
  postAuthApproleMountPathRoleRoleNameSecretIdRouteHandler,
  postAuthApproleMountPathRoleRoleNameSecretIdTtlRouteHandler,
  postAuthApproleMountPathRoleRoleNameTokenBoundCidrsRouteHandler,
  postAuthApproleMountPathRoleRoleNameTokenMaxTtlRouteHandler,
  postAuthApproleMountPathRoleRoleNameTokenNumUsesRouteHandler,
  postAuthApproleMountPathRoleRoleNameTokenTtlRouteHandler,
  postAuthApproleMountPathTidySecretIdRouteHandler,
  postAuthAwsMountPathConfigCertificateCertNameRouteHandler,
  postAuthAwsMountPathConfigClientRouteHandler,
  postAuthAwsMountPathConfigIdentityRouteHandler,
  postAuthAwsMountPathConfigRotateRootRouteHandler,
  postAuthAwsMountPathConfigStsAccountIdRouteHandler,
  postAuthAwsMountPathConfigTidyIdentityAccesslistRouteHandler,
  postAuthAwsMountPathConfigTidyIdentityWhitelistRouteHandler,
  postAuthAwsMountPathConfigTidyRoletagBlacklistRouteHandler,
  postAuthAwsMountPathConfigTidyRoletagDenylistRouteHandler,
  postAuthAwsMountPathLoginRouteHandler,
  postAuthAwsMountPathRoleRoleRouteHandler,
  postAuthAwsMountPathRoleRoleTagRouteHandler,
  postAuthAwsMountPathRoletagBlacklistRoleTagRouteHandler,
  postAuthAwsMountPathRoletagDenylistRoleTagRouteHandler,
  postAuthAwsMountPathTidyIdentityAccesslistRouteHandler,
  postAuthAwsMountPathTidyIdentityWhitelistRouteHandler,
  postAuthAwsMountPathTidyRoletagBlacklistRouteHandler,
  postAuthAwsMountPathTidyRoletagDenylistRouteHandler,
  postAuthAzureMountPathConfigRouteHandler,
  postAuthAzureMountPathLoginRouteHandler,
  postAuthAzureMountPathRoleNameRouteHandler,
  postAuthAzureMountPathRotateRootRouteHandler,
  postAuthCentrifyMountPathConfigRouteHandler,
  postAuthCentrifyMountPathLoginRouteHandler,
  postAuthCertMountPathCertsNameRouteHandler,
  postAuthCertMountPathConfigRouteHandler,
  postAuthCertMountPathCrlsNameRouteHandler,
  postAuthCertMountPathLoginRouteHandler,
  postAuthCfMountPathConfigRouteHandler,
  postAuthCfMountPathLoginRouteHandler,
  postAuthCfMountPathRolesRoleRouteHandler,
  postAuthGcpMountPathConfigRouteHandler,
  postAuthGcpMountPathLoginRouteHandler,
  postAuthGcpMountPathRoleNameLabelsRouteHandler,
  postAuthGcpMountPathRoleNameRouteHandler,
  postAuthGcpMountPathRoleNameServiceAccountsRouteHandler,
  postAuthGithubMountPathConfigRouteHandler,
  postAuthGithubMountPathLoginRouteHandler,
  postAuthGithubMountPathMapTeamsKeyRouteHandler,
  postAuthGithubMountPathMapUsersKeyRouteHandler,
  postAuthJwtMountPathConfigRouteHandler,
  postAuthJwtMountPathLoginRouteHandler,
  postAuthJwtMountPathOidcAuthUrlRouteHandler,
  postAuthJwtMountPathOidcCallbackRouteHandler,
  postAuthJwtMountPathRoleNameRouteHandler,
  postAuthKerberosMountPathConfigLdapRouteHandler,
  postAuthKerberosMountPathConfigRouteHandler,
  postAuthKerberosMountPathGroupsNameRouteHandler,
  postAuthKerberosMountPathLoginRouteHandler,
  postAuthKubernetesMountPathConfigRouteHandler,
  postAuthKubernetesMountPathLoginRouteHandler,
  postAuthKubernetesMountPathRoleNameRouteHandler,
  postAuthLdapMountPathConfigRouteHandler,
  postAuthLdapMountPathGroupsNameRouteHandler,
  postAuthLdapMountPathLoginUsernameRouteHandler,
  postAuthLdapMountPathUsersNameRouteHandler,
  postAuthOciMountPathConfigRouteHandler,
  postAuthOciMountPathLoginRoleRouteHandler,
  postAuthOciMountPathRoleRoleRouteHandler,
  postAuthOktaMountPathConfigRouteHandler,
  postAuthOktaMountPathGroupsNameRouteHandler,
  postAuthOktaMountPathLoginUsernameRouteHandler,
  postAuthOktaMountPathUsersNameRouteHandler,
  postAuthRadiusMountPathConfigRouteHandler,
  postAuthRadiusMountPathLoginRouteHandler,
  postAuthRadiusMountPathLoginUrlusernameRouteHandler,
  postAuthRadiusMountPathUsersNameRouteHandler,
  postAuthTokenCreateOrphanRouteHandler,
  postAuthTokenCreateRoleNameRouteHandler,
  postAuthTokenCreateRouteHandler,
  postAuthTokenLookupAccessorRouteHandler,
  postAuthTokenLookupRouteHandler,
  postAuthTokenLookupSelfRouteHandler,
  postAuthTokenRenewAccessorRouteHandler,
  postAuthTokenRenewRouteHandler,
  postAuthTokenRenewSelfRouteHandler,
  postAuthTokenRevokeAccessorRouteHandler,
  postAuthTokenRevokeOrphanRouteHandler,
  postAuthTokenRevokeRouteHandler,
  postAuthTokenRevokeSelfRouteHandler,
  postAuthTokenRolesRoleNameRouteHandler,
  postAuthTokenTidyRouteHandler,
  postAuthUserpassMountPathLoginUsernameRouteHandler,
  postAuthUserpassMountPathUsersUsernamePasswordRouteHandler,
  postAuthUserpassMountPathUsersUsernamePoliciesRouteHandler,
  postAuthUserpassMountPathUsersUsernameRouteHandler,
  postAwsMountPathConfigLeaseRouteHandler,
  postAwsMountPathConfigRootRouteHandler,
  postAwsMountPathConfigRotateRootRouteHandler,
  postAwsMountPathCredsNameRouteHandler,
  postAwsMountPathRolesNameRouteHandler,
  postAwsMountPathStaticRolesNameRouteHandler,
  postAwsMountPathStsNameRouteHandler,
  postAzureMountPathConfigRouteHandler,
  postAzureMountPathRolesNameRouteHandler,
  postAzureMountPathRotateRootRouteHandler,
  postConsulMountPathConfigAccessRouteHandler,
  postConsulMountPathRolesNameRouteHandler,
  postCubbyholePathRouteHandler,
  postDatabaseMountPathConfigNameRouteHandler,
  postDatabaseMountPathResetNameRouteHandler,
  postDatabaseMountPathRolesNameRouteHandler,
  postDatabaseMountPathRotateRoleNameRouteHandler,
  postDatabaseMountPathRotateRootNameRouteHandler,
  postDatabaseMountPathStaticRolesNameRouteHandler,
  postGcpkmsMountPathConfigRouteHandler,
  postGcpkmsMountPathDecryptKeyRouteHandler,
  postGcpkmsMountPathEncryptKeyRouteHandler,
  postGcpkmsMountPathKeysConfigKeyRouteHandler,
  postGcpkmsMountPathKeysDeregisterKeyRouteHandler,
  postGcpkmsMountPathKeysKeyRouteHandler,
  postGcpkmsMountPathKeysRegisterKeyRouteHandler,
  postGcpkmsMountPathKeysRotateKeyRouteHandler,
  postGcpkmsMountPathKeysTrimKeyRouteHandler,
  postGcpkmsMountPathReencryptKeyRouteHandler,
  postGcpkmsMountPathSignKeyRouteHandler,
  postGcpkmsMountPathVerifyKeyRouteHandler,
  postGcpMountPathConfigRotateRootRouteHandler,
  postGcpMountPathConfigRouteHandler,
  postGcpMountPathImpersonatedAccountNameRouteHandler,
  postGcpMountPathImpersonatedAccountNameTokenRouteHandler,
  postGcpMountPathKeyRolesetRouteHandler,
  postGcpMountPathRolesetNameRotateKeyRouteHandler,
  postGcpMountPathRolesetNameRotateRouteHandler,
  postGcpMountPathRolesetNameRouteHandler,
  postGcpMountPathRolesetRolesetKeyRouteHandler,
  postGcpMountPathRolesetRolesetTokenRouteHandler,
  postGcpMountPathStaticAccountNameKeyRouteHandler,
  postGcpMountPathStaticAccountNameRotateKeyRouteHandler,
  postGcpMountPathStaticAccountNameRouteHandler,
  postGcpMountPathStaticAccountNameTokenRouteHandler,
  postGcpMountPathTokenRolesetRouteHandler,
  postIdentityAliasIdIdRouteHandler,
  postIdentityAliasRouteHandler,
  postIdentityEntityAliasIdIdRouteHandler,
  postIdentityEntityAliasRouteHandler,
  postIdentityEntityBatchDeleteRouteHandler,
  postIdentityEntityIdIdRouteHandler,
  postIdentityEntityMergeRouteHandler,
  postIdentityEntityNameNameRouteHandler,
  postIdentityEntityRouteHandler,
  postIdentityGroupAliasIdIdRouteHandler,
  postIdentityGroupAliasRouteHandler,
  postIdentityGroupIdIdRouteHandler,
  postIdentityGroupNameNameRouteHandler,
  postIdentityGroupRouteHandler,
  postIdentityLookupEntityRouteHandler,
  postIdentityLookupGroupRouteHandler,
  postIdentityMfaLoginEnforcementNameRouteHandler,
  postIdentityMfaMethodDuoMethodIdRouteHandler,
  postIdentityMfaMethodDuoRouteHandler,
  postIdentityMfaMethodOktaMethodIdRouteHandler,
  postIdentityMfaMethodOktaRouteHandler,
  postIdentityMfaMethodPingidMethodIdRouteHandler,
  postIdentityMfaMethodPingidRouteHandler,
  postIdentityMfaMethodTotpAdminDestroyRouteHandler,
  postIdentityMfaMethodTotpAdminGenerateRouteHandler,
  postIdentityMfaMethodTotpGenerateRouteHandler,
  postIdentityMfaMethodTotpMethodIdRouteHandler,
  postIdentityMfaMethodTotpRouteHandler,
  postIdentityOidcAssignmentNameRouteHandler,
  postIdentityOidcClientNameRouteHandler,
  postIdentityOidcConfigRouteHandler,
  postIdentityOidcIntrospectRouteHandler,
  postIdentityOidcKeyNameRotateRouteHandler,
  postIdentityOidcKeyNameRouteHandler,
  postIdentityOidcProviderNameAuthorizeRouteHandler,
  postIdentityOidcProviderNameRouteHandler,
  postIdentityOidcProviderNameTokenRouteHandler,
  postIdentityOidcProviderNameUserinfoRouteHandler,
  postIdentityOidcRoleNameRouteHandler,
  postIdentityOidcScopeNameRouteHandler,
  postIdentityPersonaIdIdRouteHandler,
  postIdentityPersonaRouteHandler,
  postKubernetesMountPathConfigRouteHandler,
  postKubernetesMountPathCredsNameRouteHandler,
  postKubernetesMountPathRolesNameRouteHandler,
  postKvV1MountPathPathRouteHandler,
  postKvV2MountPathConfigRouteHandler,
  postKvV2MountPathDataPathRouteHandler,
  postKvV2MountPathDeletePathRouteHandler,
  postKvV2MountPathDestroyPathRouteHandler,
  postKvV2MountPathMetadataPathRouteHandler,
  postKvV2MountPathUndeletePathRouteHandler,
  postLdapMountPathConfigRouteHandler,
  postLdapMountPathLibraryManageNameCheckInRouteHandler,
  postLdapMountPathLibraryNameCheckInRouteHandler,
  postLdapMountPathLibraryNameCheckOutRouteHandler,
  postLdapMountPathLibraryNameRouteHandler,
  postLdapMountPathRoleNameRouteHandler,
  postLdapMountPathRotateRoleNameRouteHandler,
  postLdapMountPathRotateRootRouteHandler,
  postLdapMountPathStaticRoleNameRouteHandler,
  postMongodbatlasMountPathConfigRouteHandler,
  postMongodbatlasMountPathCredsNameRouteHandler,
  postMongodbatlasMountPathRolesNameRouteHandler,
  postNomadMountPathConfigAccessRouteHandler,
  postNomadMountPathConfigLeaseRouteHandler,
  postNomadMountPathRoleNameRouteHandler,
  postPkiMountPathAcmeAccountKidRouteHandler,
  postPkiMountPathAcmeAuthorizationAuthIdRouteHandler,
  postPkiMountPathAcmeChallengeAuthIdChallengeTypeRouteHandler,
  postPkiMountPathAcmeNewAccountRouteHandler,
  postPkiMountPathAcmeNewEabRouteHandler,
  postPkiMountPathAcmeNewOrderRouteHandler,
  postPkiMountPathAcmeOrderOrderIdCertRouteHandler,
  postPkiMountPathAcmeOrderOrderIdFinalizeRouteHandler,
  postPkiMountPathAcmeOrderOrderIdRouteHandler,
  postPkiMountPathAcmeOrdersRouteHandler,
  postPkiMountPathAcmeRevokeCertRouteHandler,
  postPkiMountPathConfigAcmeRouteHandler,
  postPkiMountPathConfigAutoTidyRouteHandler,
  postPkiMountPathConfigCaRouteHandler,
  postPkiMountPathConfigClusterRouteHandler,
  postPkiMountPathConfigCrlRouteHandler,
  postPkiMountPathConfigIssuersRouteHandler,
  postPkiMountPathConfigKeysRouteHandler,
  postPkiMountPathConfigUrlsRouteHandler,
  postPkiMountPathIntermediateCrossSignRouteHandler,
  postPkiMountPathIntermediateGenerateExportedRouteHandler,
  postPkiMountPathIntermediateSetSignedRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeAccountKidRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeAuthorizationAuthIdRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeChallengeAuthIdChallengeTypeRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeNewAccountRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeNewEabRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeNewOrderRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdCertRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdFinalizeRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeOrdersRouteHandler,
  postPkiMountPathIssuerIssuerRefAcmeRevokeCertRouteHandler,
  postPkiMountPathIssuerIssuerRefIssueRoleRouteHandler,
  postPkiMountPathIssuerIssuerRefResignCrlsRouteHandler,
  postPkiMountPathIssuerIssuerRefRevokeRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeAccountKidRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeAuthorizationAuthIdRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewAccountRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewEabRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewOrderRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdCertRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrdersRouteHandler,
  postPkiMountPathIssuerIssuerRefRolesRoleAcmeRevokeCertRouteHandler,
  postPkiMountPathIssuerIssuerRefRouteHandler,
  postPkiMountPathIssuerIssuerRefSignIntermediateRouteHandler,
  postPkiMountPathIssuerIssuerRefSignRevocationListRouteHandler,
  postPkiMountPathIssuerIssuerRefSignRoleRouteHandler,
  postPkiMountPathIssuerIssuerRefSignSelfIssuedRouteHandler,
  postPkiMountPathIssuerIssuerRefSignVerbatimRoleRouteHandler,
  postPkiMountPathIssuerIssuerRefSignVerbatimRouteHandler,
  postPkiMountPathIssueRoleRouteHandler,
  postPkiMountPathIssuersGenerateIntermediateExportedRouteHandler,
  postPkiMountPathIssuersGenerateRootExportedRouteHandler,
  postPkiMountPathIssuersImportBundleRouteHandler,
  postPkiMountPathIssuersImportCertRouteHandler,
  postPkiMountPathKeyKeyRefRouteHandler,
  postPkiMountPathKeysGenerateExportedRouteHandler,
  postPkiMountPathKeysGenerateInternalRouteHandler,
  postPkiMountPathKeysGenerateKmsRouteHandler,
  postPkiMountPathKeysImportRouteHandler,
  postPkiMountPathOcspRouteHandler,
  postPkiMountPathRevokeRouteHandler,
  postPkiMountPathRevokeWithKeyRouteHandler,
  postPkiMountPathRolesNameRouteHandler,
  postPkiMountPathRolesRoleAcmeAccountKidRouteHandler,
  postPkiMountPathRolesRoleAcmeAuthorizationAuthIdRouteHandler,
  postPkiMountPathRolesRoleAcmeChallengeAuthIdChallengeTypeRouteHandler,
  postPkiMountPathRolesRoleAcmeNewAccountRouteHandler,
  postPkiMountPathRolesRoleAcmeNewEabRouteHandler,
  postPkiMountPathRolesRoleAcmeNewOrderRouteHandler,
  postPkiMountPathRolesRoleAcmeOrderOrderIdCertRouteHandler,
  postPkiMountPathRolesRoleAcmeOrderOrderIdFinalizeRouteHandler,
  postPkiMountPathRolesRoleAcmeOrderOrderIdRouteHandler,
  postPkiMountPathRolesRoleAcmeOrdersRouteHandler,
  postPkiMountPathRolesRoleAcmeRevokeCertRouteHandler,
  postPkiMountPathRootGenerateExportedRouteHandler,
  postPkiMountPathRootReplaceRouteHandler,
  postPkiMountPathRootRotateExportedRouteHandler,
  postPkiMountPathRootSignIntermediateRouteHandler,
  postPkiMountPathRootSignSelfIssuedRouteHandler,
  postPkiMountPathSignRoleRouteHandler,
  postPkiMountPathSignVerbatimRoleRouteHandler,
  postPkiMountPathSignVerbatimRouteHandler,
  postPkiMountPathTidyCancelRouteHandler,
  postPkiMountPathTidyRouteHandler,
  postRabbitmqMountPathConfigConnectionRouteHandler,
  postRabbitmqMountPathConfigLeaseRouteHandler,
  postRabbitmqMountPathRolesNameRouteHandler,
  postSshMountPathConfigCaRouteHandler,
  postSshMountPathConfigZeroaddressRouteHandler,
  postSshMountPathCredsRoleRouteHandler,
  postSshMountPathIssueRoleRouteHandler,
  postSshMountPathLookupRouteHandler,
  postSshMountPathRolesRoleRouteHandler,
  postSshMountPathSignRoleRouteHandler,
  postSshMountPathVerifyRouteHandler,
  postSysAuditHashPathRouteHandler,
  postSysAuditPathRouteHandler,
  postSysAuthPathRouteHandler,
  postSysAuthPathTuneRouteHandler,
  postSysCapabilitiesAccessorRouteHandler,
  postSysCapabilitiesRouteHandler,
  postSysCapabilitiesSelfRouteHandler,
  postSysConfigAuditingRequestHeadersHeaderRouteHandler,
  postSysConfigControlGroupRouteHandler,
  postSysConfigCorsRouteHandler,
  postSysConfigGroupPolicyApplicationRouteHandler,
  postSysConfigReloadSubsystemRouteHandler,
  postSysConfigUiHeadersHeaderRouteHandler,
  postSysControlGroupAuthorizeRouteHandler,
  postSysControlGroupRequestRouteHandler,
  postSysDecodeTokenRouteHandler,
  postSysGenerateRootAttemptRouteHandler,
  postSysGenerateRootRouteHandler,
  postSysGenerateRootUpdateRouteHandler,
  postSysInitRouteHandler,
  postSysInternalCountersConfigRouteHandler,
  postSysInternalSpecsOpenapiRouteHandler,
  postSysLeasesLookupRouteHandler,
  postSysLeasesRenewRouteHandler,
  postSysLeasesRenewUrlLeaseIdRouteHandler,
  postSysLeasesRevokeForcePrefixRouteHandler,
  postSysLeasesRevokePrefixPrefixRouteHandler,
  postSysLeasesRevokeRouteHandler,
  postSysLeasesRevokeUrlLeaseIdRouteHandler,
  postSysLeasesTidyRouteHandler,
  postSysLockedUsersMountAccessorUnlockAliasIdentifierRouteHandler,
  postSysLoggersNameRouteHandler,
  postSysLoggersRouteHandler,
  postSysManagedKeysTypeNameRouteHandler,
  postSysManagedKeysTypeNameTestSignRouteHandler,
  postSysMfaMethodDuoNameRouteHandler,
  postSysMfaMethodOktaNameRouteHandler,
  postSysMfaMethodPingidNameRouteHandler,
  postSysMfaMethodTotpNameAdminDestroyRouteHandler,
  postSysMfaMethodTotpNameAdminGenerateRouteHandler,
  postSysMfaMethodTotpNameRouteHandler,
  postSysMfaValidateRouteHandler,
  postSysMountsPathRouteHandler,
  postSysMountsPathTuneRouteHandler,
  postSysNamespacesApiLockLockPathRouteHandler,
  postSysNamespacesApiLockLockRouteHandler,
  postSysNamespacesApiLockUnlockPathRouteHandler,
  postSysNamespacesApiLockUnlockRouteHandler,
  postSysNamespacesPathRouteHandler,
  postSysPluginsCatalogNameRouteHandler,
  postSysPluginsCatalogTypeNameRouteHandler,
  postSysPluginsReloadBackendRouteHandler,
  postSysPluginsRuntimesCatalogTypeNameRouteHandler,
  postSysPoliciesAclNameRouteHandler,
  postSysPoliciesEgpNameRouteHandler,
  postSysPoliciesPasswordNameRouteHandler,
  postSysPoliciesRgpNameRouteHandler,
  postSysPolicyNameRouteHandler,
  postSysQuotasConfigRouteHandler,
  postSysQuotasLeaseCountNameRouteHandler,
  postSysQuotasRateLimitNameRouteHandler,
  postSysRawPathRouteHandler,
  postSysRekeyInitRouteHandler,
  postSysRekeyUpdateRouteHandler,
  postSysRekeyVerifyRouteHandler,
  postSysRemountRouteHandler,
  postSysRenewRouteHandler,
  postSysRenewUrlLeaseIdRouteHandler,
  postSysReplicationDrPrimaryDemoteRouteHandler,
  postSysReplicationDrPrimaryDisableRouteHandler,
  postSysReplicationDrPrimaryEnableRouteHandler,
  postSysReplicationDrPrimaryRevokeSecondaryRouteHandler,
  postSysReplicationDrPrimarySecondaryTokenRouteHandler,
  postSysReplicationDrSecondaryConfigReloadSubsystemRouteHandler,
  postSysReplicationDrSecondaryDisableRouteHandler,
  postSysReplicationDrSecondaryEnableRouteHandler,
  postSysReplicationDrSecondaryGeneratePublicKeyRouteHandler,
  postSysReplicationDrSecondaryOperationTokenDeleteRouteHandler,
  postSysReplicationDrSecondaryPromoteRouteHandler,
  postSysReplicationDrSecondaryRecoverRouteHandler,
  postSysReplicationDrSecondaryReindexRouteHandler,
  postSysReplicationDrSecondaryUpdatePrimaryRouteHandler,
  postSysReplicationPerformancePrimaryDemoteRouteHandler,
  postSysReplicationPerformancePrimaryDisableRouteHandler,
  postSysReplicationPerformancePrimaryEnableRouteHandler,
  postSysReplicationPerformancePrimaryPathsFilterIdRouteHandler,
  postSysReplicationPerformancePrimaryRevokeSecondaryRouteHandler,
  postSysReplicationPerformancePrimarySecondaryTokenRouteHandler,
  postSysReplicationPerformanceSecondaryDisableRouteHandler,
  postSysReplicationPerformanceSecondaryEnableRouteHandler,
  postSysReplicationPerformanceSecondaryGeneratePublicKeyRouteHandler,
  postSysReplicationPerformanceSecondaryPromoteRouteHandler,
  postSysReplicationPerformanceSecondaryUpdatePrimaryRouteHandler,
  postSysReplicationPrimaryDemoteRouteHandler,
  postSysReplicationPrimaryDisableRouteHandler,
  postSysReplicationPrimaryEnableRouteHandler,
  postSysReplicationPrimaryRevokeSecondaryRouteHandler,
  postSysReplicationPrimarySecondaryTokenRouteHandler,
  postSysReplicationRecoverRouteHandler,
  postSysReplicationReindexRouteHandler,
  postSysReplicationSecondaryDisableRouteHandler,
  postSysReplicationSecondaryEnableRouteHandler,
  postSysReplicationSecondaryPromoteRouteHandler,
  postSysReplicationSecondaryUpdatePrimaryRouteHandler,
  postSysRevokeForcePrefixRouteHandler,
  postSysRevokePrefixPrefixRouteHandler,
  postSysRevokeRouteHandler,
  postSysRevokeUrlLeaseIdRouteHandler,
  postSysRotateConfigRouteHandler,
  postSysRotateRouteHandler,
  postSysSealRouteHandler,
  postSysSealwrapRewrapRouteHandler,
  postSysStepDownRouteHandler,
  postSysStorageRaftSnapshotAutoConfigNameRouteHandler,
  postSysToolsHashRouteHandler,
  postSysToolsHashUrlalgorithmRouteHandler,
  postSysToolsRandomRouteHandler,
  postSysToolsRandomSourceRouteHandler,
  postSysToolsRandomSourceUrlbytesRouteHandler,
  postSysToolsRandomUrlbytesRouteHandler,
  postSysUnsealRouteHandler,
  postSysWrappingLookupRouteHandler,
  postSysWrappingRewrapRouteHandler,
  postSysWrappingUnwrapRouteHandler,
  postSysWrappingWrapRouteHandler,
  postTerraformMountPathConfigRouteHandler,
  postTerraformMountPathCredsNameRouteHandler,
  postTerraformMountPathRoleNameRouteHandler,
  postTerraformMountPathRotateRoleNameRouteHandler,
  postTotpMountPathCodeNameRouteHandler,
  postTotpMountPathKeysNameRouteHandler,
  postTransitMountPathCacheConfigRouteHandler,
  postTransitMountPathConfigKeysRouteHandler,
  postTransitMountPathDatakeyPlaintextNameRouteHandler,
  postTransitMountPathDecryptNameRouteHandler,
  postTransitMountPathEncryptNameRouteHandler,
  postTransitMountPathHashRouteHandler,
  postTransitMountPathHashUrlalgorithmRouteHandler,
  postTransitMountPathHmacNameRouteHandler,
  postTransitMountPathHmacNameUrlalgorithmRouteHandler,
  postTransitMountPathKeysNameConfigRouteHandler,
  postTransitMountPathKeysNameCsrRouteHandler,
  postTransitMountPathKeysNameImportRouteHandler,
  postTransitMountPathKeysNameImportVersionRouteHandler,
  postTransitMountPathKeysNameRotateRouteHandler,
  postTransitMountPathKeysNameRouteHandler,
  postTransitMountPathKeysNameSetCertificateRouteHandler,
  postTransitMountPathKeysNameTrimRouteHandler,
  postTransitMountPathRandomRouteHandler,
  postTransitMountPathRandomSourceRouteHandler,
  postTransitMountPathRandomSourceUrlbytesRouteHandler,
  postTransitMountPathRandomUrlbytesRouteHandler,
  postTransitMountPathRestoreNameRouteHandler,
  postTransitMountPathRestoreRouteHandler,
  postTransitMountPathRewrapNameRouteHandler,
  postTransitMountPathSignNameRouteHandler,
  postTransitMountPathSignNameUrlalgorithmRouteHandler,
  postTransitMountPathVerifyNameRouteHandler,
  postTransitMountPathVerifyNameUrlalgorithmRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAuthTokenAccessorsIndexRoute, getAuthTokenAccessorsIndexRouteHandler)
  .openapi(postAuthTokenCreateRoute, postAuthTokenCreateRouteHandler)
  .openapi(postAuthTokenCreateOrphanRoute, postAuthTokenCreateOrphanRouteHandler)
  .openapi(postAuthTokenCreateRoleNameRoute, postAuthTokenCreateRoleNameRouteHandler)
  .openapi(getAuthTokenLookupRoute, getAuthTokenLookupRouteHandler)
  .openapi(postAuthTokenLookupRoute, postAuthTokenLookupRouteHandler)
  .openapi(postAuthTokenLookupAccessorRoute, postAuthTokenLookupAccessorRouteHandler)
  .openapi(getAuthTokenLookupSelfRoute, getAuthTokenLookupSelfRouteHandler)
  .openapi(postAuthTokenLookupSelfRoute, postAuthTokenLookupSelfRouteHandler)
  .openapi(postAuthTokenRenewRoute, postAuthTokenRenewRouteHandler)
  .openapi(postAuthTokenRenewAccessorRoute, postAuthTokenRenewAccessorRouteHandler)
  .openapi(postAuthTokenRenewSelfRoute, postAuthTokenRenewSelfRouteHandler)
  .openapi(postAuthTokenRevokeRoute, postAuthTokenRevokeRouteHandler)
  .openapi(postAuthTokenRevokeAccessorRoute, postAuthTokenRevokeAccessorRouteHandler)
  .openapi(postAuthTokenRevokeOrphanRoute, postAuthTokenRevokeOrphanRouteHandler)
  .openapi(postAuthTokenRevokeSelfRoute, postAuthTokenRevokeSelfRouteHandler)
  .openapi(getAuthTokenRolesIndexRoute, getAuthTokenRolesIndexRouteHandler)
  .openapi(getAuthTokenRolesRoleNameRoute, getAuthTokenRolesRoleNameRouteHandler)
  .openapi(postAuthTokenRolesRoleNameRoute, postAuthTokenRolesRoleNameRouteHandler)
  .openapi(deleteAuthTokenRolesRoleNameRoute, deleteAuthTokenRolesRoleNameRouteHandler)
  .openapi(postAuthTokenTidyRoute, postAuthTokenTidyRouteHandler)
  .openapi(postAuthAlicloudMountPathLoginRoute, postAuthAlicloudMountPathLoginRouteHandler)
  .openapi(getAuthAlicloudMountPathRoleIndexRoute, getAuthAlicloudMountPathRoleIndexRouteHandler)
  .openapi(getAuthAlicloudMountPathRoleRoleRoute, getAuthAlicloudMountPathRoleRoleRouteHandler)
  .openapi(postAuthAlicloudMountPathRoleRoleRoute, postAuthAlicloudMountPathRoleRoleRouteHandler)
  .openapi(
    deleteAuthAlicloudMountPathRoleRoleRoute,
    deleteAuthAlicloudMountPathRoleRoleRouteHandler,
  )
  .openapi(getAuthAlicloudMountPathRolesIndexRoute, getAuthAlicloudMountPathRolesIndexRouteHandler)
  .openapi(postAuthApproleMountPathLoginRoute, postAuthApproleMountPathLoginRouteHandler)
  .openapi(getAuthApproleMountPathRoleIndexRoute, getAuthApproleMountPathRoleIndexRouteHandler)
  .openapi(
    getAuthApproleMountPathRoleRoleNameRoute,
    getAuthApproleMountPathRoleRoleNameRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameRoute,
    postAuthApproleMountPathRoleRoleNameRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameRoute,
    deleteAuthApproleMountPathRoleRoleNameRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameBindSecretIdRoute,
    getAuthApproleMountPathRoleRoleNameBindSecretIdRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameBindSecretIdRoute,
    postAuthApproleMountPathRoleRoleNameBindSecretIdRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameBindSecretIdRoute,
    deleteAuthApproleMountPathRoleRoleNameBindSecretIdRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameBoundCidrListRoute,
    getAuthApproleMountPathRoleRoleNameBoundCidrListRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameBoundCidrListRoute,
    postAuthApproleMountPathRoleRoleNameBoundCidrListRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameBoundCidrListRoute,
    deleteAuthApproleMountPathRoleRoleNameBoundCidrListRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameCustomSecretIdRoute,
    postAuthApproleMountPathRoleRoleNameCustomSecretIdRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameLocalSecretIdsRoute,
    getAuthApproleMountPathRoleRoleNameLocalSecretIdsRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNamePeriodRoute,
    getAuthApproleMountPathRoleRoleNamePeriodRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNamePeriodRoute,
    postAuthApproleMountPathRoleRoleNamePeriodRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNamePeriodRoute,
    deleteAuthApproleMountPathRoleRoleNamePeriodRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNamePoliciesRoute,
    getAuthApproleMountPathRoleRoleNamePoliciesRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNamePoliciesRoute,
    postAuthApproleMountPathRoleRoleNamePoliciesRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNamePoliciesRoute,
    deleteAuthApproleMountPathRoleRoleNamePoliciesRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameRoleIdRoute,
    getAuthApproleMountPathRoleRoleNameRoleIdRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameRoleIdRoute,
    postAuthApproleMountPathRoleRoleNameRoleIdRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameSecretIdRoute,
    postAuthApproleMountPathRoleRoleNameSecretIdRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRoute,
    postAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRoute,
    deleteAuthApproleMountPathRoleRoleNameSecretIdAccessorDestroyRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameSecretIdAccessorLookupRoute,
    postAuthApproleMountPathRoleRoleNameSecretIdAccessorLookupRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute,
    getAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute,
    postAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRoute,
    deleteAuthApproleMountPathRoleRoleNameSecretIdBoundCidrsRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute,
    getAuthApproleMountPathRoleRoleNameSecretIdNumUsesRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute,
    postAuthApproleMountPathRoleRoleNameSecretIdNumUsesRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameSecretIdNumUsesRoute,
    deleteAuthApproleMountPathRoleRoleNameSecretIdNumUsesRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameSecretIdTtlRoute,
    getAuthApproleMountPathRoleRoleNameSecretIdTtlRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameSecretIdTtlRoute,
    postAuthApproleMountPathRoleRoleNameSecretIdTtlRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameSecretIdTtlRoute,
    deleteAuthApproleMountPathRoleRoleNameSecretIdTtlRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameSecretIdIndexRoute,
    getAuthApproleMountPathRoleRoleNameSecretIdIndexRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameSecretIdDestroyRoute,
    postAuthApproleMountPathRoleRoleNameSecretIdDestroyRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameSecretIdDestroyRoute,
    deleteAuthApproleMountPathRoleRoleNameSecretIdDestroyRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameSecretIdLookupRoute,
    postAuthApproleMountPathRoleRoleNameSecretIdLookupRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute,
    getAuthApproleMountPathRoleRoleNameTokenBoundCidrsRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute,
    postAuthApproleMountPathRoleRoleNameTokenBoundCidrsRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameTokenBoundCidrsRoute,
    deleteAuthApproleMountPathRoleRoleNameTokenBoundCidrsRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute,
    getAuthApproleMountPathRoleRoleNameTokenMaxTtlRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute,
    postAuthApproleMountPathRoleRoleNameTokenMaxTtlRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameTokenMaxTtlRoute,
    deleteAuthApproleMountPathRoleRoleNameTokenMaxTtlRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameTokenNumUsesRoute,
    getAuthApproleMountPathRoleRoleNameTokenNumUsesRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameTokenNumUsesRoute,
    postAuthApproleMountPathRoleRoleNameTokenNumUsesRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameTokenNumUsesRoute,
    deleteAuthApproleMountPathRoleRoleNameTokenNumUsesRouteHandler,
  )
  .openapi(
    getAuthApproleMountPathRoleRoleNameTokenTtlRoute,
    getAuthApproleMountPathRoleRoleNameTokenTtlRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathRoleRoleNameTokenTtlRoute,
    postAuthApproleMountPathRoleRoleNameTokenTtlRouteHandler,
  )
  .openapi(
    deleteAuthApproleMountPathRoleRoleNameTokenTtlRoute,
    deleteAuthApproleMountPathRoleRoleNameTokenTtlRouteHandler,
  )
  .openapi(
    postAuthApproleMountPathTidySecretIdRoute,
    postAuthApproleMountPathTidySecretIdRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathConfigCertificateCertNameRoute,
    getAuthAwsMountPathConfigCertificateCertNameRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathConfigCertificateCertNameRoute,
    postAuthAwsMountPathConfigCertificateCertNameRouteHandler,
  )
  .openapi(
    deleteAuthAwsMountPathConfigCertificateCertNameRoute,
    deleteAuthAwsMountPathConfigCertificateCertNameRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathConfigCertificatesIndexRoute,
    getAuthAwsMountPathConfigCertificatesIndexRouteHandler,
  )
  .openapi(getAuthAwsMountPathConfigClientRoute, getAuthAwsMountPathConfigClientRouteHandler)
  .openapi(postAuthAwsMountPathConfigClientRoute, postAuthAwsMountPathConfigClientRouteHandler)
  .openapi(deleteAuthAwsMountPathConfigClientRoute, deleteAuthAwsMountPathConfigClientRouteHandler)
  .openapi(getAuthAwsMountPathConfigIdentityRoute, getAuthAwsMountPathConfigIdentityRouteHandler)
  .openapi(postAuthAwsMountPathConfigIdentityRoute, postAuthAwsMountPathConfigIdentityRouteHandler)
  .openapi(
    postAuthAwsMountPathConfigRotateRootRoute,
    postAuthAwsMountPathConfigRotateRootRouteHandler,
  )
  .openapi(getAuthAwsMountPathConfigStsIndexRoute, getAuthAwsMountPathConfigStsIndexRouteHandler)
  .openapi(
    getAuthAwsMountPathConfigStsAccountIdRoute,
    getAuthAwsMountPathConfigStsAccountIdRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathConfigStsAccountIdRoute,
    postAuthAwsMountPathConfigStsAccountIdRouteHandler,
  )
  .openapi(
    deleteAuthAwsMountPathConfigStsAccountIdRoute,
    deleteAuthAwsMountPathConfigStsAccountIdRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathConfigTidyIdentityAccesslistRoute,
    getAuthAwsMountPathConfigTidyIdentityAccesslistRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathConfigTidyIdentityAccesslistRoute,
    postAuthAwsMountPathConfigTidyIdentityAccesslistRouteHandler,
  )
  .openapi(
    deleteAuthAwsMountPathConfigTidyIdentityAccesslistRoute,
    deleteAuthAwsMountPathConfigTidyIdentityAccesslistRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathConfigTidyIdentityWhitelistRoute,
    getAuthAwsMountPathConfigTidyIdentityWhitelistRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathConfigTidyIdentityWhitelistRoute,
    postAuthAwsMountPathConfigTidyIdentityWhitelistRouteHandler,
  )
  .openapi(
    deleteAuthAwsMountPathConfigTidyIdentityWhitelistRoute,
    deleteAuthAwsMountPathConfigTidyIdentityWhitelistRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathConfigTidyRoletagBlacklistRoute,
    getAuthAwsMountPathConfigTidyRoletagBlacklistRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathConfigTidyRoletagBlacklistRoute,
    postAuthAwsMountPathConfigTidyRoletagBlacklistRouteHandler,
  )
  .openapi(
    deleteAuthAwsMountPathConfigTidyRoletagBlacklistRoute,
    deleteAuthAwsMountPathConfigTidyRoletagBlacklistRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathConfigTidyRoletagDenylistRoute,
    getAuthAwsMountPathConfigTidyRoletagDenylistRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathConfigTidyRoletagDenylistRoute,
    postAuthAwsMountPathConfigTidyRoletagDenylistRouteHandler,
  )
  .openapi(
    deleteAuthAwsMountPathConfigTidyRoletagDenylistRoute,
    deleteAuthAwsMountPathConfigTidyRoletagDenylistRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathIdentityAccesslistIndexRoute,
    getAuthAwsMountPathIdentityAccesslistIndexRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathIdentityAccesslistInstanceIdRoute,
    getAuthAwsMountPathIdentityAccesslistInstanceIdRouteHandler,
  )
  .openapi(
    deleteAuthAwsMountPathIdentityAccesslistInstanceIdRoute,
    deleteAuthAwsMountPathIdentityAccesslistInstanceIdRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathIdentityWhitelistIndexRoute,
    getAuthAwsMountPathIdentityWhitelistIndexRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathIdentityWhitelistInstanceIdRoute,
    getAuthAwsMountPathIdentityWhitelistInstanceIdRouteHandler,
  )
  .openapi(
    deleteAuthAwsMountPathIdentityWhitelistInstanceIdRoute,
    deleteAuthAwsMountPathIdentityWhitelistInstanceIdRouteHandler,
  )
  .openapi(postAuthAwsMountPathLoginRoute, postAuthAwsMountPathLoginRouteHandler)
  .openapi(getAuthAwsMountPathRoleIndexRoute, getAuthAwsMountPathRoleIndexRouteHandler)
  .openapi(getAuthAwsMountPathRoleRoleRoute, getAuthAwsMountPathRoleRoleRouteHandler)
  .openapi(postAuthAwsMountPathRoleRoleRoute, postAuthAwsMountPathRoleRoleRouteHandler)
  .openapi(deleteAuthAwsMountPathRoleRoleRoute, deleteAuthAwsMountPathRoleRoleRouteHandler)
  .openapi(postAuthAwsMountPathRoleRoleTagRoute, postAuthAwsMountPathRoleRoleTagRouteHandler)
  .openapi(getAuthAwsMountPathRolesIndexRoute, getAuthAwsMountPathRolesIndexRouteHandler)
  .openapi(
    getAuthAwsMountPathRoletagBlacklistIndexRoute,
    getAuthAwsMountPathRoletagBlacklistIndexRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathRoletagBlacklistRoleTagRoute,
    getAuthAwsMountPathRoletagBlacklistRoleTagRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathRoletagBlacklistRoleTagRoute,
    postAuthAwsMountPathRoletagBlacklistRoleTagRouteHandler,
  )
  .openapi(
    deleteAuthAwsMountPathRoletagBlacklistRoleTagRoute,
    deleteAuthAwsMountPathRoletagBlacklistRoleTagRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathRoletagDenylistIndexRoute,
    getAuthAwsMountPathRoletagDenylistIndexRouteHandler,
  )
  .openapi(
    getAuthAwsMountPathRoletagDenylistRoleTagRoute,
    getAuthAwsMountPathRoletagDenylistRoleTagRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathRoletagDenylistRoleTagRoute,
    postAuthAwsMountPathRoletagDenylistRoleTagRouteHandler,
  )
  .openapi(
    deleteAuthAwsMountPathRoletagDenylistRoleTagRoute,
    deleteAuthAwsMountPathRoletagDenylistRoleTagRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathTidyIdentityAccesslistRoute,
    postAuthAwsMountPathTidyIdentityAccesslistRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathTidyIdentityWhitelistRoute,
    postAuthAwsMountPathTidyIdentityWhitelistRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathTidyRoletagBlacklistRoute,
    postAuthAwsMountPathTidyRoletagBlacklistRouteHandler,
  )
  .openapi(
    postAuthAwsMountPathTidyRoletagDenylistRoute,
    postAuthAwsMountPathTidyRoletagDenylistRouteHandler,
  )
  .openapi(getAuthAzureMountPathConfigRoute, getAuthAzureMountPathConfigRouteHandler)
  .openapi(postAuthAzureMountPathConfigRoute, postAuthAzureMountPathConfigRouteHandler)
  .openapi(deleteAuthAzureMountPathConfigRoute, deleteAuthAzureMountPathConfigRouteHandler)
  .openapi(postAuthAzureMountPathLoginRoute, postAuthAzureMountPathLoginRouteHandler)
  .openapi(getAuthAzureMountPathRoleIndexRoute, getAuthAzureMountPathRoleIndexRouteHandler)
  .openapi(getAuthAzureMountPathRoleNameRoute, getAuthAzureMountPathRoleNameRouteHandler)
  .openapi(postAuthAzureMountPathRoleNameRoute, postAuthAzureMountPathRoleNameRouteHandler)
  .openapi(deleteAuthAzureMountPathRoleNameRoute, deleteAuthAzureMountPathRoleNameRouteHandler)
  .openapi(postAuthAzureMountPathRotateRootRoute, postAuthAzureMountPathRotateRootRouteHandler)
  .openapi(getAuthCentrifyMountPathConfigRoute, getAuthCentrifyMountPathConfigRouteHandler)
  .openapi(postAuthCentrifyMountPathConfigRoute, postAuthCentrifyMountPathConfigRouteHandler)
  .openapi(postAuthCentrifyMountPathLoginRoute, postAuthCentrifyMountPathLoginRouteHandler)
  .openapi(getAuthCertMountPathCertsIndexRoute, getAuthCertMountPathCertsIndexRouteHandler)
  .openapi(getAuthCertMountPathCertsNameRoute, getAuthCertMountPathCertsNameRouteHandler)
  .openapi(postAuthCertMountPathCertsNameRoute, postAuthCertMountPathCertsNameRouteHandler)
  .openapi(deleteAuthCertMountPathCertsNameRoute, deleteAuthCertMountPathCertsNameRouteHandler)
  .openapi(getAuthCertMountPathConfigRoute, getAuthCertMountPathConfigRouteHandler)
  .openapi(postAuthCertMountPathConfigRoute, postAuthCertMountPathConfigRouteHandler)
  .openapi(getAuthCertMountPathCrlsIndexRoute, getAuthCertMountPathCrlsIndexRouteHandler)
  .openapi(getAuthCertMountPathCrlsNameRoute, getAuthCertMountPathCrlsNameRouteHandler)
  .openapi(postAuthCertMountPathCrlsNameRoute, postAuthCertMountPathCrlsNameRouteHandler)
  .openapi(deleteAuthCertMountPathCrlsNameRoute, deleteAuthCertMountPathCrlsNameRouteHandler)
  .openapi(postAuthCertMountPathLoginRoute, postAuthCertMountPathLoginRouteHandler)
  .openapi(getAuthCfMountPathConfigRoute, getAuthCfMountPathConfigRouteHandler)
  .openapi(postAuthCfMountPathConfigRoute, postAuthCfMountPathConfigRouteHandler)
  .openapi(deleteAuthCfMountPathConfigRoute, deleteAuthCfMountPathConfigRouteHandler)
  .openapi(postAuthCfMountPathLoginRoute, postAuthCfMountPathLoginRouteHandler)
  .openapi(getAuthCfMountPathRolesIndexRoute, getAuthCfMountPathRolesIndexRouteHandler)
  .openapi(getAuthCfMountPathRolesRoleRoute, getAuthCfMountPathRolesRoleRouteHandler)
  .openapi(postAuthCfMountPathRolesRoleRoute, postAuthCfMountPathRolesRoleRouteHandler)
  .openapi(deleteAuthCfMountPathRolesRoleRoute, deleteAuthCfMountPathRolesRoleRouteHandler)
  .openapi(getAuthGcpMountPathConfigRoute, getAuthGcpMountPathConfigRouteHandler)
  .openapi(postAuthGcpMountPathConfigRoute, postAuthGcpMountPathConfigRouteHandler)
  .openapi(postAuthGcpMountPathLoginRoute, postAuthGcpMountPathLoginRouteHandler)
  .openapi(getAuthGcpMountPathRoleIndexRoute, getAuthGcpMountPathRoleIndexRouteHandler)
  .openapi(getAuthGcpMountPathRoleNameRoute, getAuthGcpMountPathRoleNameRouteHandler)
  .openapi(postAuthGcpMountPathRoleNameRoute, postAuthGcpMountPathRoleNameRouteHandler)
  .openapi(deleteAuthGcpMountPathRoleNameRoute, deleteAuthGcpMountPathRoleNameRouteHandler)
  .openapi(postAuthGcpMountPathRoleNameLabelsRoute, postAuthGcpMountPathRoleNameLabelsRouteHandler)
  .openapi(
    postAuthGcpMountPathRoleNameServiceAccountsRoute,
    postAuthGcpMountPathRoleNameServiceAccountsRouteHandler,
  )
  .openapi(getAuthGcpMountPathRolesIndexRoute, getAuthGcpMountPathRolesIndexRouteHandler)
  .openapi(getAuthGithubMountPathConfigRoute, getAuthGithubMountPathConfigRouteHandler)
  .openapi(postAuthGithubMountPathConfigRoute, postAuthGithubMountPathConfigRouteHandler)
  .openapi(postAuthGithubMountPathLoginRoute, postAuthGithubMountPathLoginRouteHandler)
  .openapi(getAuthGithubMountPathMapTeamsRoute, getAuthGithubMountPathMapTeamsRouteHandler)
  .openapi(
    getAuthGithubMountPathMapTeamsIndexRoute,
    getAuthGithubMountPathMapTeamsIndexRouteHandler,
  )
  .openapi(getAuthGithubMountPathMapTeamsKeyRoute, getAuthGithubMountPathMapTeamsKeyRouteHandler)
  .openapi(postAuthGithubMountPathMapTeamsKeyRoute, postAuthGithubMountPathMapTeamsKeyRouteHandler)
  .openapi(
    deleteAuthGithubMountPathMapTeamsKeyRoute,
    deleteAuthGithubMountPathMapTeamsKeyRouteHandler,
  )
  .openapi(getAuthGithubMountPathMapUsersRoute, getAuthGithubMountPathMapUsersRouteHandler)
  .openapi(
    getAuthGithubMountPathMapUsersIndexRoute,
    getAuthGithubMountPathMapUsersIndexRouteHandler,
  )
  .openapi(getAuthGithubMountPathMapUsersKeyRoute, getAuthGithubMountPathMapUsersKeyRouteHandler)
  .openapi(postAuthGithubMountPathMapUsersKeyRoute, postAuthGithubMountPathMapUsersKeyRouteHandler)
  .openapi(
    deleteAuthGithubMountPathMapUsersKeyRoute,
    deleteAuthGithubMountPathMapUsersKeyRouteHandler,
  )
  .openapi(getAuthJwtMountPathConfigRoute, getAuthJwtMountPathConfigRouteHandler)
  .openapi(postAuthJwtMountPathConfigRoute, postAuthJwtMountPathConfigRouteHandler)
  .openapi(postAuthJwtMountPathLoginRoute, postAuthJwtMountPathLoginRouteHandler)
  .openapi(postAuthJwtMountPathOidcAuthUrlRoute, postAuthJwtMountPathOidcAuthUrlRouteHandler)
  .openapi(getAuthJwtMountPathOidcCallbackRoute, getAuthJwtMountPathOidcCallbackRouteHandler)
  .openapi(postAuthJwtMountPathOidcCallbackRoute, postAuthJwtMountPathOidcCallbackRouteHandler)
  .openapi(getAuthJwtMountPathRoleIndexRoute, getAuthJwtMountPathRoleIndexRouteHandler)
  .openapi(getAuthJwtMountPathRoleNameRoute, getAuthJwtMountPathRoleNameRouteHandler)
  .openapi(postAuthJwtMountPathRoleNameRoute, postAuthJwtMountPathRoleNameRouteHandler)
  .openapi(deleteAuthJwtMountPathRoleNameRoute, deleteAuthJwtMountPathRoleNameRouteHandler)
  .openapi(getAuthKerberosMountPathConfigRoute, getAuthKerberosMountPathConfigRouteHandler)
  .openapi(postAuthKerberosMountPathConfigRoute, postAuthKerberosMountPathConfigRouteHandler)
  .openapi(getAuthKerberosMountPathConfigLdapRoute, getAuthKerberosMountPathConfigLdapRouteHandler)
  .openapi(
    postAuthKerberosMountPathConfigLdapRoute,
    postAuthKerberosMountPathConfigLdapRouteHandler,
  )
  .openapi(
    getAuthKerberosMountPathGroupsIndexRoute,
    getAuthKerberosMountPathGroupsIndexRouteHandler,
  )
  .openapi(getAuthKerberosMountPathGroupsNameRoute, getAuthKerberosMountPathGroupsNameRouteHandler)
  .openapi(
    postAuthKerberosMountPathGroupsNameRoute,
    postAuthKerberosMountPathGroupsNameRouteHandler,
  )
  .openapi(
    deleteAuthKerberosMountPathGroupsNameRoute,
    deleteAuthKerberosMountPathGroupsNameRouteHandler,
  )
  .openapi(getAuthKerberosMountPathLoginRoute, getAuthKerberosMountPathLoginRouteHandler)
  .openapi(postAuthKerberosMountPathLoginRoute, postAuthKerberosMountPathLoginRouteHandler)
  .openapi(getAuthKubernetesMountPathConfigRoute, getAuthKubernetesMountPathConfigRouteHandler)
  .openapi(postAuthKubernetesMountPathConfigRoute, postAuthKubernetesMountPathConfigRouteHandler)
  .openapi(postAuthKubernetesMountPathLoginRoute, postAuthKubernetesMountPathLoginRouteHandler)
  .openapi(
    getAuthKubernetesMountPathRoleIndexRoute,
    getAuthKubernetesMountPathRoleIndexRouteHandler,
  )
  .openapi(getAuthKubernetesMountPathRoleNameRoute, getAuthKubernetesMountPathRoleNameRouteHandler)
  .openapi(
    postAuthKubernetesMountPathRoleNameRoute,
    postAuthKubernetesMountPathRoleNameRouteHandler,
  )
  .openapi(
    deleteAuthKubernetesMountPathRoleNameRoute,
    deleteAuthKubernetesMountPathRoleNameRouteHandler,
  )
  .openapi(getAuthLdapMountPathConfigRoute, getAuthLdapMountPathConfigRouteHandler)
  .openapi(postAuthLdapMountPathConfigRoute, postAuthLdapMountPathConfigRouteHandler)
  .openapi(getAuthLdapMountPathGroupsIndexRoute, getAuthLdapMountPathGroupsIndexRouteHandler)
  .openapi(getAuthLdapMountPathGroupsNameRoute, getAuthLdapMountPathGroupsNameRouteHandler)
  .openapi(postAuthLdapMountPathGroupsNameRoute, postAuthLdapMountPathGroupsNameRouteHandler)
  .openapi(deleteAuthLdapMountPathGroupsNameRoute, deleteAuthLdapMountPathGroupsNameRouteHandler)
  .openapi(postAuthLdapMountPathLoginUsernameRoute, postAuthLdapMountPathLoginUsernameRouteHandler)
  .openapi(getAuthLdapMountPathUsersIndexRoute, getAuthLdapMountPathUsersIndexRouteHandler)
  .openapi(getAuthLdapMountPathUsersNameRoute, getAuthLdapMountPathUsersNameRouteHandler)
  .openapi(postAuthLdapMountPathUsersNameRoute, postAuthLdapMountPathUsersNameRouteHandler)
  .openapi(deleteAuthLdapMountPathUsersNameRoute, deleteAuthLdapMountPathUsersNameRouteHandler)
  .openapi(getAuthOciMountPathConfigRoute, getAuthOciMountPathConfigRouteHandler)
  .openapi(postAuthOciMountPathConfigRoute, postAuthOciMountPathConfigRouteHandler)
  .openapi(deleteAuthOciMountPathConfigRoute, deleteAuthOciMountPathConfigRouteHandler)
  .openapi(postAuthOciMountPathLoginRoleRoute, postAuthOciMountPathLoginRoleRouteHandler)
  .openapi(getAuthOciMountPathRoleIndexRoute, getAuthOciMountPathRoleIndexRouteHandler)
  .openapi(getAuthOciMountPathRoleRoleRoute, getAuthOciMountPathRoleRoleRouteHandler)
  .openapi(postAuthOciMountPathRoleRoleRoute, postAuthOciMountPathRoleRoleRouteHandler)
  .openapi(deleteAuthOciMountPathRoleRoleRoute, deleteAuthOciMountPathRoleRoleRouteHandler)
  .openapi(getAuthOktaMountPathConfigRoute, getAuthOktaMountPathConfigRouteHandler)
  .openapi(postAuthOktaMountPathConfigRoute, postAuthOktaMountPathConfigRouteHandler)
  .openapi(getAuthOktaMountPathGroupsIndexRoute, getAuthOktaMountPathGroupsIndexRouteHandler)
  .openapi(getAuthOktaMountPathGroupsNameRoute, getAuthOktaMountPathGroupsNameRouteHandler)
  .openapi(postAuthOktaMountPathGroupsNameRoute, postAuthOktaMountPathGroupsNameRouteHandler)
  .openapi(deleteAuthOktaMountPathGroupsNameRoute, deleteAuthOktaMountPathGroupsNameRouteHandler)
  .openapi(postAuthOktaMountPathLoginUsernameRoute, postAuthOktaMountPathLoginUsernameRouteHandler)
  .openapi(getAuthOktaMountPathUsersIndexRoute, getAuthOktaMountPathUsersIndexRouteHandler)
  .openapi(getAuthOktaMountPathUsersNameRoute, getAuthOktaMountPathUsersNameRouteHandler)
  .openapi(postAuthOktaMountPathUsersNameRoute, postAuthOktaMountPathUsersNameRouteHandler)
  .openapi(deleteAuthOktaMountPathUsersNameRoute, deleteAuthOktaMountPathUsersNameRouteHandler)
  .openapi(getAuthOktaMountPathVerifyNonceRoute, getAuthOktaMountPathVerifyNonceRouteHandler)
  .openapi(getAuthRadiusMountPathConfigRoute, getAuthRadiusMountPathConfigRouteHandler)
  .openapi(postAuthRadiusMountPathConfigRoute, postAuthRadiusMountPathConfigRouteHandler)
  .openapi(postAuthRadiusMountPathLoginRoute, postAuthRadiusMountPathLoginRouteHandler)
  .openapi(
    postAuthRadiusMountPathLoginUrlusernameRoute,
    postAuthRadiusMountPathLoginUrlusernameRouteHandler,
  )
  .openapi(getAuthRadiusMountPathUsersIndexRoute, getAuthRadiusMountPathUsersIndexRouteHandler)
  .openapi(getAuthRadiusMountPathUsersNameRoute, getAuthRadiusMountPathUsersNameRouteHandler)
  .openapi(postAuthRadiusMountPathUsersNameRoute, postAuthRadiusMountPathUsersNameRouteHandler)
  .openapi(deleteAuthRadiusMountPathUsersNameRoute, deleteAuthRadiusMountPathUsersNameRouteHandler)
  .openapi(
    postAuthUserpassMountPathLoginUsernameRoute,
    postAuthUserpassMountPathLoginUsernameRouteHandler,
  )
  .openapi(getAuthUserpassMountPathUsersIndexRoute, getAuthUserpassMountPathUsersIndexRouteHandler)
  .openapi(
    getAuthUserpassMountPathUsersUsernameRoute,
    getAuthUserpassMountPathUsersUsernameRouteHandler,
  )
  .openapi(
    postAuthUserpassMountPathUsersUsernameRoute,
    postAuthUserpassMountPathUsersUsernameRouteHandler,
  )
  .openapi(
    deleteAuthUserpassMountPathUsersUsernameRoute,
    deleteAuthUserpassMountPathUsersUsernameRouteHandler,
  )
  .openapi(
    postAuthUserpassMountPathUsersUsernamePasswordRoute,
    postAuthUserpassMountPathUsersUsernamePasswordRouteHandler,
  )
  .openapi(
    postAuthUserpassMountPathUsersUsernamePoliciesRoute,
    postAuthUserpassMountPathUsersUsernamePoliciesRouteHandler,
  )
  .openapi(getCubbyholePathRoute, getCubbyholePathRouteHandler)
  .openapi(postCubbyholePathRoute, postCubbyholePathRouteHandler)
  .openapi(deleteCubbyholePathRoute, deleteCubbyholePathRouteHandler)
  .openapi(getCubbyholePathIndexRoute, getCubbyholePathIndexRouteHandler)
  .openapi(postIdentityAliasRoute, postIdentityAliasRouteHandler)
  .openapi(getIdentityAliasIdIndexRoute, getIdentityAliasIdIndexRouteHandler)
  .openapi(getIdentityAliasIdIdRoute, getIdentityAliasIdIdRouteHandler)
  .openapi(postIdentityAliasIdIdRoute, postIdentityAliasIdIdRouteHandler)
  .openapi(deleteIdentityAliasIdIdRoute, deleteIdentityAliasIdIdRouteHandler)
  .openapi(postIdentityEntityRoute, postIdentityEntityRouteHandler)
  .openapi(postIdentityEntityAliasRoute, postIdentityEntityAliasRouteHandler)
  .openapi(getIdentityEntityAliasIdIndexRoute, getIdentityEntityAliasIdIndexRouteHandler)
  .openapi(getIdentityEntityAliasIdIdRoute, getIdentityEntityAliasIdIdRouteHandler)
  .openapi(postIdentityEntityAliasIdIdRoute, postIdentityEntityAliasIdIdRouteHandler)
  .openapi(deleteIdentityEntityAliasIdIdRoute, deleteIdentityEntityAliasIdIdRouteHandler)
  .openapi(postIdentityEntityBatchDeleteRoute, postIdentityEntityBatchDeleteRouteHandler)
  .openapi(getIdentityEntityIdIndexRoute, getIdentityEntityIdIndexRouteHandler)
  .openapi(getIdentityEntityIdIdRoute, getIdentityEntityIdIdRouteHandler)
  .openapi(postIdentityEntityIdIdRoute, postIdentityEntityIdIdRouteHandler)
  .openapi(deleteIdentityEntityIdIdRoute, deleteIdentityEntityIdIdRouteHandler)
  .openapi(postIdentityEntityMergeRoute, postIdentityEntityMergeRouteHandler)
  .openapi(getIdentityEntityNameIndexRoute, getIdentityEntityNameIndexRouteHandler)
  .openapi(getIdentityEntityNameNameRoute, getIdentityEntityNameNameRouteHandler)
  .openapi(postIdentityEntityNameNameRoute, postIdentityEntityNameNameRouteHandler)
  .openapi(deleteIdentityEntityNameNameRoute, deleteIdentityEntityNameNameRouteHandler)
  .openapi(postIdentityGroupRoute, postIdentityGroupRouteHandler)
  .openapi(postIdentityGroupAliasRoute, postIdentityGroupAliasRouteHandler)
  .openapi(getIdentityGroupAliasIdIndexRoute, getIdentityGroupAliasIdIndexRouteHandler)
  .openapi(getIdentityGroupAliasIdIdRoute, getIdentityGroupAliasIdIdRouteHandler)
  .openapi(postIdentityGroupAliasIdIdRoute, postIdentityGroupAliasIdIdRouteHandler)
  .openapi(deleteIdentityGroupAliasIdIdRoute, deleteIdentityGroupAliasIdIdRouteHandler)
  .openapi(getIdentityGroupIdIndexRoute, getIdentityGroupIdIndexRouteHandler)
  .openapi(getIdentityGroupIdIdRoute, getIdentityGroupIdIdRouteHandler)
  .openapi(postIdentityGroupIdIdRoute, postIdentityGroupIdIdRouteHandler)
  .openapi(deleteIdentityGroupIdIdRoute, deleteIdentityGroupIdIdRouteHandler)
  .openapi(getIdentityGroupNameIndexRoute, getIdentityGroupNameIndexRouteHandler)
  .openapi(getIdentityGroupNameNameRoute, getIdentityGroupNameNameRouteHandler)
  .openapi(postIdentityGroupNameNameRoute, postIdentityGroupNameNameRouteHandler)
  .openapi(deleteIdentityGroupNameNameRoute, deleteIdentityGroupNameNameRouteHandler)
  .openapi(postIdentityLookupEntityRoute, postIdentityLookupEntityRouteHandler)
  .openapi(postIdentityLookupGroupRoute, postIdentityLookupGroupRouteHandler)
  .openapi(
    getIdentityMfaLoginEnforcementIndexRoute,
    getIdentityMfaLoginEnforcementIndexRouteHandler,
  )
  .openapi(getIdentityMfaLoginEnforcementNameRoute, getIdentityMfaLoginEnforcementNameRouteHandler)
  .openapi(
    postIdentityMfaLoginEnforcementNameRoute,
    postIdentityMfaLoginEnforcementNameRouteHandler,
  )
  .openapi(
    deleteIdentityMfaLoginEnforcementNameRoute,
    deleteIdentityMfaLoginEnforcementNameRouteHandler,
  )
  .openapi(getIdentityMfaMethodIndexRoute, getIdentityMfaMethodIndexRouteHandler)
  .openapi(postIdentityMfaMethodDuoRoute, postIdentityMfaMethodDuoRouteHandler)
  .openapi(getIdentityMfaMethodDuoIndexRoute, getIdentityMfaMethodDuoIndexRouteHandler)
  .openapi(getIdentityMfaMethodDuoMethodIdRoute, getIdentityMfaMethodDuoMethodIdRouteHandler)
  .openapi(postIdentityMfaMethodDuoMethodIdRoute, postIdentityMfaMethodDuoMethodIdRouteHandler)
  .openapi(deleteIdentityMfaMethodDuoMethodIdRoute, deleteIdentityMfaMethodDuoMethodIdRouteHandler)
  .openapi(postIdentityMfaMethodOktaRoute, postIdentityMfaMethodOktaRouteHandler)
  .openapi(getIdentityMfaMethodOktaIndexRoute, getIdentityMfaMethodOktaIndexRouteHandler)
  .openapi(getIdentityMfaMethodOktaMethodIdRoute, getIdentityMfaMethodOktaMethodIdRouteHandler)
  .openapi(postIdentityMfaMethodOktaMethodIdRoute, postIdentityMfaMethodOktaMethodIdRouteHandler)
  .openapi(
    deleteIdentityMfaMethodOktaMethodIdRoute,
    deleteIdentityMfaMethodOktaMethodIdRouteHandler,
  )
  .openapi(postIdentityMfaMethodPingidRoute, postIdentityMfaMethodPingidRouteHandler)
  .openapi(getIdentityMfaMethodPingidIndexRoute, getIdentityMfaMethodPingidIndexRouteHandler)
  .openapi(getIdentityMfaMethodPingidMethodIdRoute, getIdentityMfaMethodPingidMethodIdRouteHandler)
  .openapi(
    postIdentityMfaMethodPingidMethodIdRoute,
    postIdentityMfaMethodPingidMethodIdRouteHandler,
  )
  .openapi(
    deleteIdentityMfaMethodPingidMethodIdRoute,
    deleteIdentityMfaMethodPingidMethodIdRouteHandler,
  )
  .openapi(postIdentityMfaMethodTotpRoute, postIdentityMfaMethodTotpRouteHandler)
  .openapi(getIdentityMfaMethodTotpIndexRoute, getIdentityMfaMethodTotpIndexRouteHandler)
  .openapi(
    postIdentityMfaMethodTotpAdminDestroyRoute,
    postIdentityMfaMethodTotpAdminDestroyRouteHandler,
  )
  .openapi(
    postIdentityMfaMethodTotpAdminGenerateRoute,
    postIdentityMfaMethodTotpAdminGenerateRouteHandler,
  )
  .openapi(postIdentityMfaMethodTotpGenerateRoute, postIdentityMfaMethodTotpGenerateRouteHandler)
  .openapi(getIdentityMfaMethodTotpMethodIdRoute, getIdentityMfaMethodTotpMethodIdRouteHandler)
  .openapi(postIdentityMfaMethodTotpMethodIdRoute, postIdentityMfaMethodTotpMethodIdRouteHandler)
  .openapi(
    deleteIdentityMfaMethodTotpMethodIdRoute,
    deleteIdentityMfaMethodTotpMethodIdRouteHandler,
  )
  .openapi(getIdentityMfaMethodMethodIdRoute, getIdentityMfaMethodMethodIdRouteHandler)
  .openapi(getIdentityOidcWellKnownKeysRoute, getIdentityOidcWellKnownKeysRouteHandler)
  .openapi(
    getIdentityOidcWellKnownOpenidConfigurationRoute,
    getIdentityOidcWellKnownOpenidConfigurationRouteHandler,
  )
  .openapi(getIdentityOidcAssignmentIndexRoute, getIdentityOidcAssignmentIndexRouteHandler)
  .openapi(getIdentityOidcAssignmentNameRoute, getIdentityOidcAssignmentNameRouteHandler)
  .openapi(postIdentityOidcAssignmentNameRoute, postIdentityOidcAssignmentNameRouteHandler)
  .openapi(deleteIdentityOidcAssignmentNameRoute, deleteIdentityOidcAssignmentNameRouteHandler)
  .openapi(getIdentityOidcClientIndexRoute, getIdentityOidcClientIndexRouteHandler)
  .openapi(getIdentityOidcClientNameRoute, getIdentityOidcClientNameRouteHandler)
  .openapi(postIdentityOidcClientNameRoute, postIdentityOidcClientNameRouteHandler)
  .openapi(deleteIdentityOidcClientNameRoute, deleteIdentityOidcClientNameRouteHandler)
  .openapi(getIdentityOidcConfigRoute, getIdentityOidcConfigRouteHandler)
  .openapi(postIdentityOidcConfigRoute, postIdentityOidcConfigRouteHandler)
  .openapi(postIdentityOidcIntrospectRoute, postIdentityOidcIntrospectRouteHandler)
  .openapi(getIdentityOidcKeyIndexRoute, getIdentityOidcKeyIndexRouteHandler)
  .openapi(getIdentityOidcKeyNameRoute, getIdentityOidcKeyNameRouteHandler)
  .openapi(postIdentityOidcKeyNameRoute, postIdentityOidcKeyNameRouteHandler)
  .openapi(deleteIdentityOidcKeyNameRoute, deleteIdentityOidcKeyNameRouteHandler)
  .openapi(postIdentityOidcKeyNameRotateRoute, postIdentityOidcKeyNameRotateRouteHandler)
  .openapi(getIdentityOidcProviderIndexRoute, getIdentityOidcProviderIndexRouteHandler)
  .openapi(getIdentityOidcProviderNameRoute, getIdentityOidcProviderNameRouteHandler)
  .openapi(postIdentityOidcProviderNameRoute, postIdentityOidcProviderNameRouteHandler)
  .openapi(deleteIdentityOidcProviderNameRoute, deleteIdentityOidcProviderNameRouteHandler)
  .openapi(
    getIdentityOidcProviderNameWellKnownKeysRoute,
    getIdentityOidcProviderNameWellKnownKeysRouteHandler,
  )
  .openapi(
    getIdentityOidcProviderNameWellKnownOpenidConfigurationRoute,
    getIdentityOidcProviderNameWellKnownOpenidConfigurationRouteHandler,
  )
  .openapi(
    getIdentityOidcProviderNameAuthorizeRoute,
    getIdentityOidcProviderNameAuthorizeRouteHandler,
  )
  .openapi(
    postIdentityOidcProviderNameAuthorizeRoute,
    postIdentityOidcProviderNameAuthorizeRouteHandler,
  )
  .openapi(postIdentityOidcProviderNameTokenRoute, postIdentityOidcProviderNameTokenRouteHandler)
  .openapi(
    getIdentityOidcProviderNameUserinfoRoute,
    getIdentityOidcProviderNameUserinfoRouteHandler,
  )
  .openapi(
    postIdentityOidcProviderNameUserinfoRoute,
    postIdentityOidcProviderNameUserinfoRouteHandler,
  )
  .openapi(getIdentityOidcRoleIndexRoute, getIdentityOidcRoleIndexRouteHandler)
  .openapi(getIdentityOidcRoleNameRoute, getIdentityOidcRoleNameRouteHandler)
  .openapi(postIdentityOidcRoleNameRoute, postIdentityOidcRoleNameRouteHandler)
  .openapi(deleteIdentityOidcRoleNameRoute, deleteIdentityOidcRoleNameRouteHandler)
  .openapi(getIdentityOidcScopeIndexRoute, getIdentityOidcScopeIndexRouteHandler)
  .openapi(getIdentityOidcScopeNameRoute, getIdentityOidcScopeNameRouteHandler)
  .openapi(postIdentityOidcScopeNameRoute, postIdentityOidcScopeNameRouteHandler)
  .openapi(deleteIdentityOidcScopeNameRoute, deleteIdentityOidcScopeNameRouteHandler)
  .openapi(getIdentityOidcTokenNameRoute, getIdentityOidcTokenNameRouteHandler)
  .openapi(postIdentityPersonaRoute, postIdentityPersonaRouteHandler)
  .openapi(getIdentityPersonaIdIndexRoute, getIdentityPersonaIdIndexRouteHandler)
  .openapi(getIdentityPersonaIdIdRoute, getIdentityPersonaIdIdRouteHandler)
  .openapi(postIdentityPersonaIdIdRoute, postIdentityPersonaIdIdRouteHandler)
  .openapi(deleteIdentityPersonaIdIdRoute, deleteIdentityPersonaIdIdRouteHandler)
  .openapi(getSysAuditRoute, getSysAuditRouteHandler)
  .openapi(postSysAuditHashPathRoute, postSysAuditHashPathRouteHandler)
  .openapi(postSysAuditPathRoute, postSysAuditPathRouteHandler)
  .openapi(deleteSysAuditPathRoute, deleteSysAuditPathRouteHandler)
  .openapi(getSysAuthRoute, getSysAuthRouteHandler)
  .openapi(getSysAuthPathRoute, getSysAuthPathRouteHandler)
  .openapi(postSysAuthPathRoute, postSysAuthPathRouteHandler)
  .openapi(deleteSysAuthPathRoute, deleteSysAuthPathRouteHandler)
  .openapi(getSysAuthPathTuneRoute, getSysAuthPathTuneRouteHandler)
  .openapi(postSysAuthPathTuneRoute, postSysAuthPathTuneRouteHandler)
  .openapi(postSysCapabilitiesRoute, postSysCapabilitiesRouteHandler)
  .openapi(postSysCapabilitiesAccessorRoute, postSysCapabilitiesAccessorRouteHandler)
  .openapi(postSysCapabilitiesSelfRoute, postSysCapabilitiesSelfRouteHandler)
  .openapi(getSysConfigAuditingRequestHeadersRoute, getSysConfigAuditingRequestHeadersRouteHandler)
  .openapi(
    getSysConfigAuditingRequestHeadersHeaderRoute,
    getSysConfigAuditingRequestHeadersHeaderRouteHandler,
  )
  .openapi(
    postSysConfigAuditingRequestHeadersHeaderRoute,
    postSysConfigAuditingRequestHeadersHeaderRouteHandler,
  )
  .openapi(
    deleteSysConfigAuditingRequestHeadersHeaderRoute,
    deleteSysConfigAuditingRequestHeadersHeaderRouteHandler,
  )
  .openapi(getSysConfigControlGroupRoute, getSysConfigControlGroupRouteHandler)
  .openapi(postSysConfigControlGroupRoute, postSysConfigControlGroupRouteHandler)
  .openapi(deleteSysConfigControlGroupRoute, deleteSysConfigControlGroupRouteHandler)
  .openapi(getSysConfigCorsRoute, getSysConfigCorsRouteHandler)
  .openapi(postSysConfigCorsRoute, postSysConfigCorsRouteHandler)
  .openapi(deleteSysConfigCorsRoute, deleteSysConfigCorsRouteHandler)
  .openapi(getSysConfigGroupPolicyApplicationRoute, getSysConfigGroupPolicyApplicationRouteHandler)
  .openapi(
    postSysConfigGroupPolicyApplicationRoute,
    postSysConfigGroupPolicyApplicationRouteHandler,
  )
  .openapi(postSysConfigReloadSubsystemRoute, postSysConfigReloadSubsystemRouteHandler)
  .openapi(getSysConfigStateSanitizedRoute, getSysConfigStateSanitizedRouteHandler)
  .openapi(getSysConfigUiHeadersIndexRoute, getSysConfigUiHeadersIndexRouteHandler)
  .openapi(getSysConfigUiHeadersHeaderRoute, getSysConfigUiHeadersHeaderRouteHandler)
  .openapi(postSysConfigUiHeadersHeaderRoute, postSysConfigUiHeadersHeaderRouteHandler)
  .openapi(deleteSysConfigUiHeadersHeaderRoute, deleteSysConfigUiHeadersHeaderRouteHandler)
  .openapi(postSysControlGroupAuthorizeRoute, postSysControlGroupAuthorizeRouteHandler)
  .openapi(postSysControlGroupRequestRoute, postSysControlGroupRequestRouteHandler)
  .openapi(postSysDecodeTokenRoute, postSysDecodeTokenRouteHandler)
  .openapi(getSysExperimentsRoute, getSysExperimentsRouteHandler)
  .openapi(getSysGenerateRootRoute, getSysGenerateRootRouteHandler)
  .openapi(postSysGenerateRootRoute, postSysGenerateRootRouteHandler)
  .openapi(deleteSysGenerateRootRoute, deleteSysGenerateRootRouteHandler)
  .openapi(getSysGenerateRootAttemptRoute, getSysGenerateRootAttemptRouteHandler)
  .openapi(postSysGenerateRootAttemptRoute, postSysGenerateRootAttemptRouteHandler)
  .openapi(deleteSysGenerateRootAttemptRoute, deleteSysGenerateRootAttemptRouteHandler)
  .openapi(postSysGenerateRootUpdateRoute, postSysGenerateRootUpdateRouteHandler)
  .openapi(getSysHaStatusRoute, getSysHaStatusRouteHandler)
  .openapi(getSysHealthRoute, getSysHealthRouteHandler)
  .openapi(getSysHostInfoRoute, getSysHostInfoRouteHandler)
  .openapi(getSysInFlightReqRoute, getSysInFlightReqRouteHandler)
  .openapi(getSysInitRoute, getSysInitRouteHandler)
  .openapi(postSysInitRoute, postSysInitRouteHandler)
  .openapi(getSysInternalCountersActivityRoute, getSysInternalCountersActivityRouteHandler)
  .openapi(
    getSysInternalCountersActivityExportRoute,
    getSysInternalCountersActivityExportRouteHandler,
  )
  .openapi(
    getSysInternalCountersActivityMonthlyRoute,
    getSysInternalCountersActivityMonthlyRouteHandler,
  )
  .openapi(getSysInternalCountersConfigRoute, getSysInternalCountersConfigRouteHandler)
  .openapi(postSysInternalCountersConfigRoute, postSysInternalCountersConfigRouteHandler)
  .openapi(getSysInternalCountersEntitiesRoute, getSysInternalCountersEntitiesRouteHandler)
  .openapi(getSysInternalCountersRequestsRoute, getSysInternalCountersRequestsRouteHandler)
  .openapi(getSysInternalCountersTokensRoute, getSysInternalCountersTokensRouteHandler)
  .openapi(getSysInternalInspectRouterTagRoute, getSysInternalInspectRouterTagRouteHandler)
  .openapi(getSysInternalSpecsOpenapiRoute, getSysInternalSpecsOpenapiRouteHandler)
  .openapi(postSysInternalSpecsOpenapiRoute, postSysInternalSpecsOpenapiRouteHandler)
  .openapi(getSysInternalUiFeatureFlagsRoute, getSysInternalUiFeatureFlagsRouteHandler)
  .openapi(getSysInternalUiMountsRoute, getSysInternalUiMountsRouteHandler)
  .openapi(getSysInternalUiMountsPathRoute, getSysInternalUiMountsPathRouteHandler)
  .openapi(getSysInternalUiNamespacesRoute, getSysInternalUiNamespacesRouteHandler)
  .openapi(getSysInternalUiResultantAclRoute, getSysInternalUiResultantAclRouteHandler)
  .openapi(getSysKeyStatusRoute, getSysKeyStatusRouteHandler)
  .openapi(getSysLeaderRoute, getSysLeaderRouteHandler)
  .openapi(getSysLeasesRoute, getSysLeasesRouteHandler)
  .openapi(getSysLeasesCountRoute, getSysLeasesCountRouteHandler)
  .openapi(postSysLeasesLookupRoute, postSysLeasesLookupRouteHandler)
  .openapi(getSysLeasesLookupPrefixIndexRoute, getSysLeasesLookupPrefixIndexRouteHandler)
  .openapi(postSysLeasesRenewRoute, postSysLeasesRenewRouteHandler)
  .openapi(postSysLeasesRenewUrlLeaseIdRoute, postSysLeasesRenewUrlLeaseIdRouteHandler)
  .openapi(postSysLeasesRevokeRoute, postSysLeasesRevokeRouteHandler)
  .openapi(postSysLeasesRevokeForcePrefixRoute, postSysLeasesRevokeForcePrefixRouteHandler)
  .openapi(postSysLeasesRevokePrefixPrefixRoute, postSysLeasesRevokePrefixPrefixRouteHandler)
  .openapi(postSysLeasesRevokeUrlLeaseIdRoute, postSysLeasesRevokeUrlLeaseIdRouteHandler)
  .openapi(postSysLeasesTidyRoute, postSysLeasesTidyRouteHandler)
  .openapi(getSysLicenseStatusRoute, getSysLicenseStatusRouteHandler)
  .openapi(getSysLockedUsersRoute, getSysLockedUsersRouteHandler)
  .openapi(
    postSysLockedUsersMountAccessorUnlockAliasIdentifierRoute,
    postSysLockedUsersMountAccessorUnlockAliasIdentifierRouteHandler,
  )
  .openapi(getSysLoggersRoute, getSysLoggersRouteHandler)
  .openapi(postSysLoggersRoute, postSysLoggersRouteHandler)
  .openapi(deleteSysLoggersRoute, deleteSysLoggersRouteHandler)
  .openapi(getSysLoggersNameRoute, getSysLoggersNameRouteHandler)
  .openapi(postSysLoggersNameRoute, postSysLoggersNameRouteHandler)
  .openapi(deleteSysLoggersNameRoute, deleteSysLoggersNameRouteHandler)
  .openapi(getSysManagedKeysTypeIndexRoute, getSysManagedKeysTypeIndexRouteHandler)
  .openapi(getSysManagedKeysTypeNameRoute, getSysManagedKeysTypeNameRouteHandler)
  .openapi(postSysManagedKeysTypeNameRoute, postSysManagedKeysTypeNameRouteHandler)
  .openapi(deleteSysManagedKeysTypeNameRoute, deleteSysManagedKeysTypeNameRouteHandler)
  .openapi(postSysManagedKeysTypeNameTestSignRoute, postSysManagedKeysTypeNameTestSignRouteHandler)
  .openapi(getSysMetricsRoute, getSysMetricsRouteHandler)
  .openapi(getSysMfaMethodIndexRoute, getSysMfaMethodIndexRouteHandler)
  .openapi(getSysMfaMethodDuoNameRoute, getSysMfaMethodDuoNameRouteHandler)
  .openapi(postSysMfaMethodDuoNameRoute, postSysMfaMethodDuoNameRouteHandler)
  .openapi(deleteSysMfaMethodDuoNameRoute, deleteSysMfaMethodDuoNameRouteHandler)
  .openapi(getSysMfaMethodOktaNameRoute, getSysMfaMethodOktaNameRouteHandler)
  .openapi(postSysMfaMethodOktaNameRoute, postSysMfaMethodOktaNameRouteHandler)
  .openapi(deleteSysMfaMethodOktaNameRoute, deleteSysMfaMethodOktaNameRouteHandler)
  .openapi(getSysMfaMethodPingidNameRoute, getSysMfaMethodPingidNameRouteHandler)
  .openapi(postSysMfaMethodPingidNameRoute, postSysMfaMethodPingidNameRouteHandler)
  .openapi(deleteSysMfaMethodPingidNameRoute, deleteSysMfaMethodPingidNameRouteHandler)
  .openapi(getSysMfaMethodTotpNameRoute, getSysMfaMethodTotpNameRouteHandler)
  .openapi(postSysMfaMethodTotpNameRoute, postSysMfaMethodTotpNameRouteHandler)
  .openapi(deleteSysMfaMethodTotpNameRoute, deleteSysMfaMethodTotpNameRouteHandler)
  .openapi(
    postSysMfaMethodTotpNameAdminDestroyRoute,
    postSysMfaMethodTotpNameAdminDestroyRouteHandler,
  )
  .openapi(
    postSysMfaMethodTotpNameAdminGenerateRoute,
    postSysMfaMethodTotpNameAdminGenerateRouteHandler,
  )
  .openapi(getSysMfaMethodTotpNameGenerateRoute, getSysMfaMethodTotpNameGenerateRouteHandler)
  .openapi(postSysMfaValidateRoute, postSysMfaValidateRouteHandler)
  .openapi(getSysMonitorRoute, getSysMonitorRouteHandler)
  .openapi(getSysMountsRoute, getSysMountsRouteHandler)
  .openapi(getSysMountsPathRoute, getSysMountsPathRouteHandler)
  .openapi(postSysMountsPathRoute, postSysMountsPathRouteHandler)
  .openapi(deleteSysMountsPathRoute, deleteSysMountsPathRouteHandler)
  .openapi(getSysMountsPathTuneRoute, getSysMountsPathTuneRouteHandler)
  .openapi(postSysMountsPathTuneRoute, postSysMountsPathTuneRouteHandler)
  .openapi(getSysNamespacesIndexRoute, getSysNamespacesIndexRouteHandler)
  .openapi(postSysNamespacesApiLockLockRoute, postSysNamespacesApiLockLockRouteHandler)
  .openapi(postSysNamespacesApiLockLockPathRoute, postSysNamespacesApiLockLockPathRouteHandler)
  .openapi(postSysNamespacesApiLockUnlockRoute, postSysNamespacesApiLockUnlockRouteHandler)
  .openapi(postSysNamespacesApiLockUnlockPathRoute, postSysNamespacesApiLockUnlockPathRouteHandler)
  .openapi(getSysNamespacesPathRoute, getSysNamespacesPathRouteHandler)
  .openapi(postSysNamespacesPathRoute, postSysNamespacesPathRouteHandler)
  .openapi(deleteSysNamespacesPathRoute, deleteSysNamespacesPathRouteHandler)
  .openapi(getSysPluginsCatalogRoute, getSysPluginsCatalogRouteHandler)
  .openapi(getSysPluginsCatalogNameRoute, getSysPluginsCatalogNameRouteHandler)
  .openapi(postSysPluginsCatalogNameRoute, postSysPluginsCatalogNameRouteHandler)
  .openapi(deleteSysPluginsCatalogNameRoute, deleteSysPluginsCatalogNameRouteHandler)
  .openapi(getSysPluginsCatalogTypeIndexRoute, getSysPluginsCatalogTypeIndexRouteHandler)
  .openapi(getSysPluginsCatalogTypeNameRoute, getSysPluginsCatalogTypeNameRouteHandler)
  .openapi(postSysPluginsCatalogTypeNameRoute, postSysPluginsCatalogTypeNameRouteHandler)
  .openapi(deleteSysPluginsCatalogTypeNameRoute, deleteSysPluginsCatalogTypeNameRouteHandler)
  .openapi(postSysPluginsReloadBackendRoute, postSysPluginsReloadBackendRouteHandler)
  .openapi(getSysPluginsReloadBackendStatusRoute, getSysPluginsReloadBackendStatusRouteHandler)
  .openapi(getSysPluginsRuntimesCatalogIndexRoute, getSysPluginsRuntimesCatalogIndexRouteHandler)
  .openapi(
    getSysPluginsRuntimesCatalogTypeNameRoute,
    getSysPluginsRuntimesCatalogTypeNameRouteHandler,
  )
  .openapi(
    postSysPluginsRuntimesCatalogTypeNameRoute,
    postSysPluginsRuntimesCatalogTypeNameRouteHandler,
  )
  .openapi(
    deleteSysPluginsRuntimesCatalogTypeNameRoute,
    deleteSysPluginsRuntimesCatalogTypeNameRouteHandler,
  )
  .openapi(getSysPoliciesAclIndexRoute, getSysPoliciesAclIndexRouteHandler)
  .openapi(getSysPoliciesAclNameRoute, getSysPoliciesAclNameRouteHandler)
  .openapi(postSysPoliciesAclNameRoute, postSysPoliciesAclNameRouteHandler)
  .openapi(deleteSysPoliciesAclNameRoute, deleteSysPoliciesAclNameRouteHandler)
  .openapi(getSysPoliciesEgpIndexRoute, getSysPoliciesEgpIndexRouteHandler)
  .openapi(getSysPoliciesEgpNameRoute, getSysPoliciesEgpNameRouteHandler)
  .openapi(postSysPoliciesEgpNameRoute, postSysPoliciesEgpNameRouteHandler)
  .openapi(deleteSysPoliciesEgpNameRoute, deleteSysPoliciesEgpNameRouteHandler)
  .openapi(getSysPoliciesPasswordIndexRoute, getSysPoliciesPasswordIndexRouteHandler)
  .openapi(getSysPoliciesPasswordNameRoute, getSysPoliciesPasswordNameRouteHandler)
  .openapi(postSysPoliciesPasswordNameRoute, postSysPoliciesPasswordNameRouteHandler)
  .openapi(deleteSysPoliciesPasswordNameRoute, deleteSysPoliciesPasswordNameRouteHandler)
  .openapi(getSysPoliciesPasswordNameGenerateRoute, getSysPoliciesPasswordNameGenerateRouteHandler)
  .openapi(getSysPoliciesRgpIndexRoute, getSysPoliciesRgpIndexRouteHandler)
  .openapi(getSysPoliciesRgpNameRoute, getSysPoliciesRgpNameRouteHandler)
  .openapi(postSysPoliciesRgpNameRoute, postSysPoliciesRgpNameRouteHandler)
  .openapi(deleteSysPoliciesRgpNameRoute, deleteSysPoliciesRgpNameRouteHandler)
  .openapi(getSysPolicyRoute, getSysPolicyRouteHandler)
  .openapi(getSysPolicyIndexRoute, getSysPolicyIndexRouteHandler)
  .openapi(getSysPolicyNameRoute, getSysPolicyNameRouteHandler)
  .openapi(postSysPolicyNameRoute, postSysPolicyNameRouteHandler)
  .openapi(deleteSysPolicyNameRoute, deleteSysPolicyNameRouteHandler)
  .openapi(getSysPprofRoute, getSysPprofRouteHandler)
  .openapi(getSysPprofAllocsRoute, getSysPprofAllocsRouteHandler)
  .openapi(getSysPprofBlockRoute, getSysPprofBlockRouteHandler)
  .openapi(getSysPprofCmdlineRoute, getSysPprofCmdlineRouteHandler)
  .openapi(getSysPprofGoroutineRoute, getSysPprofGoroutineRouteHandler)
  .openapi(getSysPprofHeapRoute, getSysPprofHeapRouteHandler)
  .openapi(getSysPprofMutexRoute, getSysPprofMutexRouteHandler)
  .openapi(getSysPprofProfileRoute, getSysPprofProfileRouteHandler)
  .openapi(getSysPprofSymbolRoute, getSysPprofSymbolRouteHandler)
  .openapi(getSysPprofThreadcreateRoute, getSysPprofThreadcreateRouteHandler)
  .openapi(getSysPprofTraceRoute, getSysPprofTraceRouteHandler)
  .openapi(getSysQuotasConfigRoute, getSysQuotasConfigRouteHandler)
  .openapi(postSysQuotasConfigRoute, postSysQuotasConfigRouteHandler)
  .openapi(getSysQuotasLeaseCountIndexRoute, getSysQuotasLeaseCountIndexRouteHandler)
  .openapi(getSysQuotasLeaseCountNameRoute, getSysQuotasLeaseCountNameRouteHandler)
  .openapi(postSysQuotasLeaseCountNameRoute, postSysQuotasLeaseCountNameRouteHandler)
  .openapi(deleteSysQuotasLeaseCountNameRoute, deleteSysQuotasLeaseCountNameRouteHandler)
  .openapi(getSysQuotasRateLimitIndexRoute, getSysQuotasRateLimitIndexRouteHandler)
  .openapi(getSysQuotasRateLimitNameRoute, getSysQuotasRateLimitNameRouteHandler)
  .openapi(postSysQuotasRateLimitNameRoute, postSysQuotasRateLimitNameRouteHandler)
  .openapi(deleteSysQuotasRateLimitNameRoute, deleteSysQuotasRateLimitNameRouteHandler)
  .openapi(getSysRawPathRoute, getSysRawPathRouteHandler)
  .openapi(postSysRawPathRoute, postSysRawPathRouteHandler)
  .openapi(deleteSysRawPathRoute, deleteSysRawPathRouteHandler)
  .openapi(getSysRawPathIndexRoute, getSysRawPathIndexRouteHandler)
  .openapi(getSysRekeyBackupRoute, getSysRekeyBackupRouteHandler)
  .openapi(deleteSysRekeyBackupRoute, deleteSysRekeyBackupRouteHandler)
  .openapi(getSysRekeyInitRoute, getSysRekeyInitRouteHandler)
  .openapi(postSysRekeyInitRoute, postSysRekeyInitRouteHandler)
  .openapi(deleteSysRekeyInitRoute, deleteSysRekeyInitRouteHandler)
  .openapi(getSysRekeyRecoveryKeyBackupRoute, getSysRekeyRecoveryKeyBackupRouteHandler)
  .openapi(deleteSysRekeyRecoveryKeyBackupRoute, deleteSysRekeyRecoveryKeyBackupRouteHandler)
  .openapi(postSysRekeyUpdateRoute, postSysRekeyUpdateRouteHandler)
  .openapi(getSysRekeyVerifyRoute, getSysRekeyVerifyRouteHandler)
  .openapi(postSysRekeyVerifyRoute, postSysRekeyVerifyRouteHandler)
  .openapi(deleteSysRekeyVerifyRoute, deleteSysRekeyVerifyRouteHandler)
  .openapi(postSysRemountRoute, postSysRemountRouteHandler)
  .openapi(getSysRemountStatusMigrationIdRoute, getSysRemountStatusMigrationIdRouteHandler)
  .openapi(postSysRenewRoute, postSysRenewRouteHandler)
  .openapi(postSysRenewUrlLeaseIdRoute, postSysRenewUrlLeaseIdRouteHandler)
  .openapi(postSysReplicationDrPrimaryDemoteRoute, postSysReplicationDrPrimaryDemoteRouteHandler)
  .openapi(postSysReplicationDrPrimaryDisableRoute, postSysReplicationDrPrimaryDisableRouteHandler)
  .openapi(postSysReplicationDrPrimaryEnableRoute, postSysReplicationDrPrimaryEnableRouteHandler)
  .openapi(
    postSysReplicationDrPrimaryRevokeSecondaryRoute,
    postSysReplicationDrPrimaryRevokeSecondaryRouteHandler,
  )
  .openapi(
    postSysReplicationDrPrimarySecondaryTokenRoute,
    postSysReplicationDrPrimarySecondaryTokenRouteHandler,
  )
  .openapi(
    postSysReplicationDrSecondaryConfigReloadSubsystemRoute,
    postSysReplicationDrSecondaryConfigReloadSubsystemRouteHandler,
  )
  .openapi(
    postSysReplicationDrSecondaryDisableRoute,
    postSysReplicationDrSecondaryDisableRouteHandler,
  )
  .openapi(
    postSysReplicationDrSecondaryEnableRoute,
    postSysReplicationDrSecondaryEnableRouteHandler,
  )
  .openapi(
    postSysReplicationDrSecondaryGeneratePublicKeyRoute,
    postSysReplicationDrSecondaryGeneratePublicKeyRouteHandler,
  )
  .openapi(
    getSysReplicationDrSecondaryLicenseStatusRoute,
    getSysReplicationDrSecondaryLicenseStatusRouteHandler,
  )
  .openapi(
    postSysReplicationDrSecondaryOperationTokenDeleteRoute,
    postSysReplicationDrSecondaryOperationTokenDeleteRouteHandler,
  )
  .openapi(
    postSysReplicationDrSecondaryPromoteRoute,
    postSysReplicationDrSecondaryPromoteRouteHandler,
  )
  .openapi(
    postSysReplicationDrSecondaryRecoverRoute,
    postSysReplicationDrSecondaryRecoverRouteHandler,
  )
  .openapi(
    postSysReplicationDrSecondaryReindexRoute,
    postSysReplicationDrSecondaryReindexRouteHandler,
  )
  .openapi(
    postSysReplicationDrSecondaryUpdatePrimaryRoute,
    postSysReplicationDrSecondaryUpdatePrimaryRouteHandler,
  )
  .openapi(getSysReplicationDrStatusRoute, getSysReplicationDrStatusRouteHandler)
  .openapi(
    postSysReplicationPerformancePrimaryDemoteRoute,
    postSysReplicationPerformancePrimaryDemoteRouteHandler,
  )
  .openapi(
    postSysReplicationPerformancePrimaryDisableRoute,
    postSysReplicationPerformancePrimaryDisableRouteHandler,
  )
  .openapi(
    getSysReplicationPerformancePrimaryDynamicFilterIdRoute,
    getSysReplicationPerformancePrimaryDynamicFilterIdRouteHandler,
  )
  .openapi(
    postSysReplicationPerformancePrimaryEnableRoute,
    postSysReplicationPerformancePrimaryEnableRouteHandler,
  )
  .openapi(
    getSysReplicationPerformancePrimaryPathsFilterIdRoute,
    getSysReplicationPerformancePrimaryPathsFilterIdRouteHandler,
  )
  .openapi(
    postSysReplicationPerformancePrimaryPathsFilterIdRoute,
    postSysReplicationPerformancePrimaryPathsFilterIdRouteHandler,
  )
  .openapi(
    deleteSysReplicationPerformancePrimaryPathsFilterIdRoute,
    deleteSysReplicationPerformancePrimaryPathsFilterIdRouteHandler,
  )
  .openapi(
    postSysReplicationPerformancePrimaryRevokeSecondaryRoute,
    postSysReplicationPerformancePrimaryRevokeSecondaryRouteHandler,
  )
  .openapi(
    postSysReplicationPerformancePrimarySecondaryTokenRoute,
    postSysReplicationPerformancePrimarySecondaryTokenRouteHandler,
  )
  .openapi(
    postSysReplicationPerformanceSecondaryDisableRoute,
    postSysReplicationPerformanceSecondaryDisableRouteHandler,
  )
  .openapi(
    getSysReplicationPerformanceSecondaryDynamicFilterIdRoute,
    getSysReplicationPerformanceSecondaryDynamicFilterIdRouteHandler,
  )
  .openapi(
    postSysReplicationPerformanceSecondaryEnableRoute,
    postSysReplicationPerformanceSecondaryEnableRouteHandler,
  )
  .openapi(
    postSysReplicationPerformanceSecondaryGeneratePublicKeyRoute,
    postSysReplicationPerformanceSecondaryGeneratePublicKeyRouteHandler,
  )
  .openapi(
    postSysReplicationPerformanceSecondaryPromoteRoute,
    postSysReplicationPerformanceSecondaryPromoteRouteHandler,
  )
  .openapi(
    postSysReplicationPerformanceSecondaryUpdatePrimaryRoute,
    postSysReplicationPerformanceSecondaryUpdatePrimaryRouteHandler,
  )
  .openapi(getSysReplicationPerformanceStatusRoute, getSysReplicationPerformanceStatusRouteHandler)
  .openapi(postSysReplicationPrimaryDemoteRoute, postSysReplicationPrimaryDemoteRouteHandler)
  .openapi(postSysReplicationPrimaryDisableRoute, postSysReplicationPrimaryDisableRouteHandler)
  .openapi(postSysReplicationPrimaryEnableRoute, postSysReplicationPrimaryEnableRouteHandler)
  .openapi(
    postSysReplicationPrimaryRevokeSecondaryRoute,
    postSysReplicationPrimaryRevokeSecondaryRouteHandler,
  )
  .openapi(
    postSysReplicationPrimarySecondaryTokenRoute,
    postSysReplicationPrimarySecondaryTokenRouteHandler,
  )
  .openapi(postSysReplicationRecoverRoute, postSysReplicationRecoverRouteHandler)
  .openapi(postSysReplicationReindexRoute, postSysReplicationReindexRouteHandler)
  .openapi(postSysReplicationSecondaryDisableRoute, postSysReplicationSecondaryDisableRouteHandler)
  .openapi(postSysReplicationSecondaryEnableRoute, postSysReplicationSecondaryEnableRouteHandler)
  .openapi(postSysReplicationSecondaryPromoteRoute, postSysReplicationSecondaryPromoteRouteHandler)
  .openapi(
    postSysReplicationSecondaryUpdatePrimaryRoute,
    postSysReplicationSecondaryUpdatePrimaryRouteHandler,
  )
  .openapi(getSysReplicationStatusRoute, getSysReplicationStatusRouteHandler)
  .openapi(postSysRevokeRoute, postSysRevokeRouteHandler)
  .openapi(postSysRevokeForcePrefixRoute, postSysRevokeForcePrefixRouteHandler)
  .openapi(postSysRevokePrefixPrefixRoute, postSysRevokePrefixPrefixRouteHandler)
  .openapi(postSysRevokeUrlLeaseIdRoute, postSysRevokeUrlLeaseIdRouteHandler)
  .openapi(postSysRotateRoute, postSysRotateRouteHandler)
  .openapi(getSysRotateConfigRoute, getSysRotateConfigRouteHandler)
  .openapi(postSysRotateConfigRoute, postSysRotateConfigRouteHandler)
  .openapi(postSysSealRoute, postSysSealRouteHandler)
  .openapi(getSysSealStatusRoute, getSysSealStatusRouteHandler)
  .openapi(getSysSealwrapRewrapRoute, getSysSealwrapRewrapRouteHandler)
  .openapi(postSysSealwrapRewrapRoute, postSysSealwrapRewrapRouteHandler)
  .openapi(postSysStepDownRoute, postSysStepDownRouteHandler)
  .openapi(
    getSysStorageRaftSnapshotAutoConfigIndexRoute,
    getSysStorageRaftSnapshotAutoConfigIndexRouteHandler,
  )
  .openapi(
    getSysStorageRaftSnapshotAutoConfigNameRoute,
    getSysStorageRaftSnapshotAutoConfigNameRouteHandler,
  )
  .openapi(
    postSysStorageRaftSnapshotAutoConfigNameRoute,
    postSysStorageRaftSnapshotAutoConfigNameRouteHandler,
  )
  .openapi(
    deleteSysStorageRaftSnapshotAutoConfigNameRoute,
    deleteSysStorageRaftSnapshotAutoConfigNameRouteHandler,
  )
  .openapi(
    getSysStorageRaftSnapshotAutoStatusNameRoute,
    getSysStorageRaftSnapshotAutoStatusNameRouteHandler,
  )
  .openapi(postSysToolsHashRoute, postSysToolsHashRouteHandler)
  .openapi(postSysToolsHashUrlalgorithmRoute, postSysToolsHashUrlalgorithmRouteHandler)
  .openapi(postSysToolsRandomRoute, postSysToolsRandomRouteHandler)
  .openapi(postSysToolsRandomSourceRoute, postSysToolsRandomSourceRouteHandler)
  .openapi(postSysToolsRandomSourceUrlbytesRoute, postSysToolsRandomSourceUrlbytesRouteHandler)
  .openapi(postSysToolsRandomUrlbytesRoute, postSysToolsRandomUrlbytesRouteHandler)
  .openapi(postSysUnsealRoute, postSysUnsealRouteHandler)
  .openapi(getSysVersionHistoryIndexRoute, getSysVersionHistoryIndexRouteHandler)
  .openapi(getSysWrappingLookupRoute, getSysWrappingLookupRouteHandler)
  .openapi(postSysWrappingLookupRoute, postSysWrappingLookupRouteHandler)
  .openapi(postSysWrappingRewrapRoute, postSysWrappingRewrapRouteHandler)
  .openapi(postSysWrappingUnwrapRoute, postSysWrappingUnwrapRouteHandler)
  .openapi(postSysWrappingWrapRoute, postSysWrappingWrapRouteHandler)
  .openapi(getAlicloudMountPathConfigRoute, getAlicloudMountPathConfigRouteHandler)
  .openapi(postAlicloudMountPathConfigRoute, postAlicloudMountPathConfigRouteHandler)
  .openapi(deleteAlicloudMountPathConfigRoute, deleteAlicloudMountPathConfigRouteHandler)
  .openapi(getAlicloudMountPathCredsNameRoute, getAlicloudMountPathCredsNameRouteHandler)
  .openapi(getAlicloudMountPathRoleIndexRoute, getAlicloudMountPathRoleIndexRouteHandler)
  .openapi(getAlicloudMountPathRoleNameRoute, getAlicloudMountPathRoleNameRouteHandler)
  .openapi(postAlicloudMountPathRoleNameRoute, postAlicloudMountPathRoleNameRouteHandler)
  .openapi(deleteAlicloudMountPathRoleNameRoute, deleteAlicloudMountPathRoleNameRouteHandler)
  .openapi(getAwsMountPathConfigLeaseRoute, getAwsMountPathConfigLeaseRouteHandler)
  .openapi(postAwsMountPathConfigLeaseRoute, postAwsMountPathConfigLeaseRouteHandler)
  .openapi(getAwsMountPathConfigRootRoute, getAwsMountPathConfigRootRouteHandler)
  .openapi(postAwsMountPathConfigRootRoute, postAwsMountPathConfigRootRouteHandler)
  .openapi(postAwsMountPathConfigRotateRootRoute, postAwsMountPathConfigRotateRootRouteHandler)
  .openapi(getAwsMountPathCredsNameRoute, getAwsMountPathCredsNameRouteHandler)
  .openapi(postAwsMountPathCredsNameRoute, postAwsMountPathCredsNameRouteHandler)
  .openapi(getAwsMountPathRolesIndexRoute, getAwsMountPathRolesIndexRouteHandler)
  .openapi(getAwsMountPathRolesNameRoute, getAwsMountPathRolesNameRouteHandler)
  .openapi(postAwsMountPathRolesNameRoute, postAwsMountPathRolesNameRouteHandler)
  .openapi(deleteAwsMountPathRolesNameRoute, deleteAwsMountPathRolesNameRouteHandler)
  .openapi(getAwsMountPathStaticCredsNameRoute, getAwsMountPathStaticCredsNameRouteHandler)
  .openapi(getAwsMountPathStaticRolesNameRoute, getAwsMountPathStaticRolesNameRouteHandler)
  .openapi(postAwsMountPathStaticRolesNameRoute, postAwsMountPathStaticRolesNameRouteHandler)
  .openapi(deleteAwsMountPathStaticRolesNameRoute, deleteAwsMountPathStaticRolesNameRouteHandler)
  .openapi(getAwsMountPathStsNameRoute, getAwsMountPathStsNameRouteHandler)
  .openapi(postAwsMountPathStsNameRoute, postAwsMountPathStsNameRouteHandler)
  .openapi(getAzureMountPathConfigRoute, getAzureMountPathConfigRouteHandler)
  .openapi(postAzureMountPathConfigRoute, postAzureMountPathConfigRouteHandler)
  .openapi(deleteAzureMountPathConfigRoute, deleteAzureMountPathConfigRouteHandler)
  .openapi(getAzureMountPathCredsRoleRoute, getAzureMountPathCredsRoleRouteHandler)
  .openapi(getAzureMountPathRolesIndexRoute, getAzureMountPathRolesIndexRouteHandler)
  .openapi(getAzureMountPathRolesNameRoute, getAzureMountPathRolesNameRouteHandler)
  .openapi(postAzureMountPathRolesNameRoute, postAzureMountPathRolesNameRouteHandler)
  .openapi(deleteAzureMountPathRolesNameRoute, deleteAzureMountPathRolesNameRouteHandler)
  .openapi(postAzureMountPathRotateRootRoute, postAzureMountPathRotateRootRouteHandler)
  .openapi(getConsulMountPathConfigAccessRoute, getConsulMountPathConfigAccessRouteHandler)
  .openapi(postConsulMountPathConfigAccessRoute, postConsulMountPathConfigAccessRouteHandler)
  .openapi(getConsulMountPathCredsRoleRoute, getConsulMountPathCredsRoleRouteHandler)
  .openapi(getConsulMountPathRolesIndexRoute, getConsulMountPathRolesIndexRouteHandler)
  .openapi(getConsulMountPathRolesNameRoute, getConsulMountPathRolesNameRouteHandler)
  .openapi(postConsulMountPathRolesNameRoute, postConsulMountPathRolesNameRouteHandler)
  .openapi(deleteConsulMountPathRolesNameRoute, deleteConsulMountPathRolesNameRouteHandler)
  .openapi(getDatabaseMountPathConfigIndexRoute, getDatabaseMountPathConfigIndexRouteHandler)
  .openapi(getDatabaseMountPathConfigNameRoute, getDatabaseMountPathConfigNameRouteHandler)
  .openapi(postDatabaseMountPathConfigNameRoute, postDatabaseMountPathConfigNameRouteHandler)
  .openapi(deleteDatabaseMountPathConfigNameRoute, deleteDatabaseMountPathConfigNameRouteHandler)
  .openapi(getDatabaseMountPathCredsNameRoute, getDatabaseMountPathCredsNameRouteHandler)
  .openapi(postDatabaseMountPathResetNameRoute, postDatabaseMountPathResetNameRouteHandler)
  .openapi(getDatabaseMountPathRolesIndexRoute, getDatabaseMountPathRolesIndexRouteHandler)
  .openapi(getDatabaseMountPathRolesNameRoute, getDatabaseMountPathRolesNameRouteHandler)
  .openapi(postDatabaseMountPathRolesNameRoute, postDatabaseMountPathRolesNameRouteHandler)
  .openapi(deleteDatabaseMountPathRolesNameRoute, deleteDatabaseMountPathRolesNameRouteHandler)
  .openapi(
    postDatabaseMountPathRotateRoleNameRoute,
    postDatabaseMountPathRotateRoleNameRouteHandler,
  )
  .openapi(
    postDatabaseMountPathRotateRootNameRoute,
    postDatabaseMountPathRotateRootNameRouteHandler,
  )
  .openapi(
    getDatabaseMountPathStaticCredsNameRoute,
    getDatabaseMountPathStaticCredsNameRouteHandler,
  )
  .openapi(
    getDatabaseMountPathStaticRolesIndexRoute,
    getDatabaseMountPathStaticRolesIndexRouteHandler,
  )
  .openapi(
    getDatabaseMountPathStaticRolesNameRoute,
    getDatabaseMountPathStaticRolesNameRouteHandler,
  )
  .openapi(
    postDatabaseMountPathStaticRolesNameRoute,
    postDatabaseMountPathStaticRolesNameRouteHandler,
  )
  .openapi(
    deleteDatabaseMountPathStaticRolesNameRoute,
    deleteDatabaseMountPathStaticRolesNameRouteHandler,
  )
  .openapi(getGcpMountPathConfigRoute, getGcpMountPathConfigRouteHandler)
  .openapi(postGcpMountPathConfigRoute, postGcpMountPathConfigRouteHandler)
  .openapi(postGcpMountPathConfigRotateRootRoute, postGcpMountPathConfigRotateRootRouteHandler)
  .openapi(
    getGcpMountPathImpersonatedAccountIndexRoute,
    getGcpMountPathImpersonatedAccountIndexRouteHandler,
  )
  .openapi(
    getGcpMountPathImpersonatedAccountNameRoute,
    getGcpMountPathImpersonatedAccountNameRouteHandler,
  )
  .openapi(
    postGcpMountPathImpersonatedAccountNameRoute,
    postGcpMountPathImpersonatedAccountNameRouteHandler,
  )
  .openapi(
    deleteGcpMountPathImpersonatedAccountNameRoute,
    deleteGcpMountPathImpersonatedAccountNameRouteHandler,
  )
  .openapi(
    getGcpMountPathImpersonatedAccountNameTokenRoute,
    getGcpMountPathImpersonatedAccountNameTokenRouteHandler,
  )
  .openapi(
    postGcpMountPathImpersonatedAccountNameTokenRoute,
    postGcpMountPathImpersonatedAccountNameTokenRouteHandler,
  )
  .openapi(
    getGcpMountPathImpersonatedAccountsIndexRoute,
    getGcpMountPathImpersonatedAccountsIndexRouteHandler,
  )
  .openapi(getGcpMountPathKeyRolesetRoute, getGcpMountPathKeyRolesetRouteHandler)
  .openapi(postGcpMountPathKeyRolesetRoute, postGcpMountPathKeyRolesetRouteHandler)
  .openapi(getGcpMountPathRolesetIndexRoute, getGcpMountPathRolesetIndexRouteHandler)
  .openapi(getGcpMountPathRolesetNameRoute, getGcpMountPathRolesetNameRouteHandler)
  .openapi(postGcpMountPathRolesetNameRoute, postGcpMountPathRolesetNameRouteHandler)
  .openapi(deleteGcpMountPathRolesetNameRoute, deleteGcpMountPathRolesetNameRouteHandler)
  .openapi(postGcpMountPathRolesetNameRotateRoute, postGcpMountPathRolesetNameRotateRouteHandler)
  .openapi(
    postGcpMountPathRolesetNameRotateKeyRoute,
    postGcpMountPathRolesetNameRotateKeyRouteHandler,
  )
  .openapi(getGcpMountPathRolesetRolesetKeyRoute, getGcpMountPathRolesetRolesetKeyRouteHandler)
  .openapi(postGcpMountPathRolesetRolesetKeyRoute, postGcpMountPathRolesetRolesetKeyRouteHandler)
  .openapi(getGcpMountPathRolesetRolesetTokenRoute, getGcpMountPathRolesetRolesetTokenRouteHandler)
  .openapi(
    postGcpMountPathRolesetRolesetTokenRoute,
    postGcpMountPathRolesetRolesetTokenRouteHandler,
  )
  .openapi(getGcpMountPathRolesetsIndexRoute, getGcpMountPathRolesetsIndexRouteHandler)
  .openapi(getGcpMountPathStaticAccountIndexRoute, getGcpMountPathStaticAccountIndexRouteHandler)
  .openapi(getGcpMountPathStaticAccountNameRoute, getGcpMountPathStaticAccountNameRouteHandler)
  .openapi(postGcpMountPathStaticAccountNameRoute, postGcpMountPathStaticAccountNameRouteHandler)
  .openapi(
    deleteGcpMountPathStaticAccountNameRoute,
    deleteGcpMountPathStaticAccountNameRouteHandler,
  )
  .openapi(
    getGcpMountPathStaticAccountNameKeyRoute,
    getGcpMountPathStaticAccountNameKeyRouteHandler,
  )
  .openapi(
    postGcpMountPathStaticAccountNameKeyRoute,
    postGcpMountPathStaticAccountNameKeyRouteHandler,
  )
  .openapi(
    postGcpMountPathStaticAccountNameRotateKeyRoute,
    postGcpMountPathStaticAccountNameRotateKeyRouteHandler,
  )
  .openapi(
    getGcpMountPathStaticAccountNameTokenRoute,
    getGcpMountPathStaticAccountNameTokenRouteHandler,
  )
  .openapi(
    postGcpMountPathStaticAccountNameTokenRoute,
    postGcpMountPathStaticAccountNameTokenRouteHandler,
  )
  .openapi(getGcpMountPathStaticAccountsIndexRoute, getGcpMountPathStaticAccountsIndexRouteHandler)
  .openapi(getGcpMountPathTokenRolesetRoute, getGcpMountPathTokenRolesetRouteHandler)
  .openapi(postGcpMountPathTokenRolesetRoute, postGcpMountPathTokenRolesetRouteHandler)
  .openapi(getGcpkmsMountPathConfigRoute, getGcpkmsMountPathConfigRouteHandler)
  .openapi(postGcpkmsMountPathConfigRoute, postGcpkmsMountPathConfigRouteHandler)
  .openapi(deleteGcpkmsMountPathConfigRoute, deleteGcpkmsMountPathConfigRouteHandler)
  .openapi(postGcpkmsMountPathDecryptKeyRoute, postGcpkmsMountPathDecryptKeyRouteHandler)
  .openapi(postGcpkmsMountPathEncryptKeyRoute, postGcpkmsMountPathEncryptKeyRouteHandler)
  .openapi(getGcpkmsMountPathKeysIndexRoute, getGcpkmsMountPathKeysIndexRouteHandler)
  .openapi(getGcpkmsMountPathKeysConfigKeyRoute, getGcpkmsMountPathKeysConfigKeyRouteHandler)
  .openapi(postGcpkmsMountPathKeysConfigKeyRoute, postGcpkmsMountPathKeysConfigKeyRouteHandler)
  .openapi(
    postGcpkmsMountPathKeysDeregisterKeyRoute,
    postGcpkmsMountPathKeysDeregisterKeyRouteHandler,
  )
  .openapi(
    deleteGcpkmsMountPathKeysDeregisterKeyRoute,
    deleteGcpkmsMountPathKeysDeregisterKeyRouteHandler,
  )
  .openapi(postGcpkmsMountPathKeysRegisterKeyRoute, postGcpkmsMountPathKeysRegisterKeyRouteHandler)
  .openapi(postGcpkmsMountPathKeysRotateKeyRoute, postGcpkmsMountPathKeysRotateKeyRouteHandler)
  .openapi(postGcpkmsMountPathKeysTrimKeyRoute, postGcpkmsMountPathKeysTrimKeyRouteHandler)
  .openapi(deleteGcpkmsMountPathKeysTrimKeyRoute, deleteGcpkmsMountPathKeysTrimKeyRouteHandler)
  .openapi(getGcpkmsMountPathKeysKeyRoute, getGcpkmsMountPathKeysKeyRouteHandler)
  .openapi(postGcpkmsMountPathKeysKeyRoute, postGcpkmsMountPathKeysKeyRouteHandler)
  .openapi(deleteGcpkmsMountPathKeysKeyRoute, deleteGcpkmsMountPathKeysKeyRouteHandler)
  .openapi(getGcpkmsMountPathPubkeyKeyRoute, getGcpkmsMountPathPubkeyKeyRouteHandler)
  .openapi(postGcpkmsMountPathReencryptKeyRoute, postGcpkmsMountPathReencryptKeyRouteHandler)
  .openapi(postGcpkmsMountPathSignKeyRoute, postGcpkmsMountPathSignKeyRouteHandler)
  .openapi(postGcpkmsMountPathVerifyKeyRoute, postGcpkmsMountPathVerifyKeyRouteHandler)
  .openapi(getKubernetesMountPathCheckRoute, getKubernetesMountPathCheckRouteHandler)
  .openapi(getKubernetesMountPathConfigRoute, getKubernetesMountPathConfigRouteHandler)
  .openapi(postKubernetesMountPathConfigRoute, postKubernetesMountPathConfigRouteHandler)
  .openapi(deleteKubernetesMountPathConfigRoute, deleteKubernetesMountPathConfigRouteHandler)
  .openapi(postKubernetesMountPathCredsNameRoute, postKubernetesMountPathCredsNameRouteHandler)
  .openapi(getKubernetesMountPathRolesIndexRoute, getKubernetesMountPathRolesIndexRouteHandler)
  .openapi(getKubernetesMountPathRolesNameRoute, getKubernetesMountPathRolesNameRouteHandler)
  .openapi(postKubernetesMountPathRolesNameRoute, postKubernetesMountPathRolesNameRouteHandler)
  .openapi(deleteKubernetesMountPathRolesNameRoute, deleteKubernetesMountPathRolesNameRouteHandler)
  .openapi(getKvV1MountPathPathRoute, getKvV1MountPathPathRouteHandler)
  .openapi(postKvV1MountPathPathRoute, postKvV1MountPathPathRouteHandler)
  .openapi(deleteKvV1MountPathPathRoute, deleteKvV1MountPathPathRouteHandler)
  .openapi(getKvV1MountPathPathIndexRoute, getKvV1MountPathPathIndexRouteHandler)
  .openapi(getKvV2MountPathConfigRoute, getKvV2MountPathConfigRouteHandler)
  .openapi(postKvV2MountPathConfigRoute, postKvV2MountPathConfigRouteHandler)
  .openapi(getKvV2MountPathDataPathRoute, getKvV2MountPathDataPathRouteHandler)
  .openapi(postKvV2MountPathDataPathRoute, postKvV2MountPathDataPathRouteHandler)
  .openapi(deleteKvV2MountPathDataPathRoute, deleteKvV2MountPathDataPathRouteHandler)
  .openapi(postKvV2MountPathDeletePathRoute, postKvV2MountPathDeletePathRouteHandler)
  .openapi(postKvV2MountPathDestroyPathRoute, postKvV2MountPathDestroyPathRouteHandler)
  .openapi(getKvV2MountPathMetadataPathRoute, getKvV2MountPathMetadataPathRouteHandler)
  .openapi(postKvV2MountPathMetadataPathRoute, postKvV2MountPathMetadataPathRouteHandler)
  .openapi(deleteKvV2MountPathMetadataPathRoute, deleteKvV2MountPathMetadataPathRouteHandler)
  .openapi(getKvV2MountPathMetadataPathIndexRoute, getKvV2MountPathMetadataPathIndexRouteHandler)
  .openapi(getKvV2MountPathSubkeysPathRoute, getKvV2MountPathSubkeysPathRouteHandler)
  .openapi(postKvV2MountPathUndeletePathRoute, postKvV2MountPathUndeletePathRouteHandler)
  .openapi(getLdapMountPathConfigRoute, getLdapMountPathConfigRouteHandler)
  .openapi(postLdapMountPathConfigRoute, postLdapMountPathConfigRouteHandler)
  .openapi(deleteLdapMountPathConfigRoute, deleteLdapMountPathConfigRouteHandler)
  .openapi(getLdapMountPathCredsNameRoute, getLdapMountPathCredsNameRouteHandler)
  .openapi(getLdapMountPathLibraryIndexRoute, getLdapMountPathLibraryIndexRouteHandler)
  .openapi(
    postLdapMountPathLibraryManageNameCheckInRoute,
    postLdapMountPathLibraryManageNameCheckInRouteHandler,
  )
  .openapi(getLdapMountPathLibraryNameRoute, getLdapMountPathLibraryNameRouteHandler)
  .openapi(postLdapMountPathLibraryNameRoute, postLdapMountPathLibraryNameRouteHandler)
  .openapi(deleteLdapMountPathLibraryNameRoute, deleteLdapMountPathLibraryNameRouteHandler)
  .openapi(
    postLdapMountPathLibraryNameCheckInRoute,
    postLdapMountPathLibraryNameCheckInRouteHandler,
  )
  .openapi(
    postLdapMountPathLibraryNameCheckOutRoute,
    postLdapMountPathLibraryNameCheckOutRouteHandler,
  )
  .openapi(getLdapMountPathLibraryNameStatusRoute, getLdapMountPathLibraryNameStatusRouteHandler)
  .openapi(getLdapMountPathRoleIndexRoute, getLdapMountPathRoleIndexRouteHandler)
  .openapi(getLdapMountPathRoleNameRoute, getLdapMountPathRoleNameRouteHandler)
  .openapi(postLdapMountPathRoleNameRoute, postLdapMountPathRoleNameRouteHandler)
  .openapi(deleteLdapMountPathRoleNameRoute, deleteLdapMountPathRoleNameRouteHandler)
  .openapi(postLdapMountPathRotateRoleNameRoute, postLdapMountPathRotateRoleNameRouteHandler)
  .openapi(postLdapMountPathRotateRootRoute, postLdapMountPathRotateRootRouteHandler)
  .openapi(getLdapMountPathStaticCredNameRoute, getLdapMountPathStaticCredNameRouteHandler)
  .openapi(getLdapMountPathStaticRoleIndexRoute, getLdapMountPathStaticRoleIndexRouteHandler)
  .openapi(getLdapMountPathStaticRoleNameRoute, getLdapMountPathStaticRoleNameRouteHandler)
  .openapi(postLdapMountPathStaticRoleNameRoute, postLdapMountPathStaticRoleNameRouteHandler)
  .openapi(deleteLdapMountPathStaticRoleNameRoute, deleteLdapMountPathStaticRoleNameRouteHandler)
  .openapi(getMongodbatlasMountPathConfigRoute, getMongodbatlasMountPathConfigRouteHandler)
  .openapi(postMongodbatlasMountPathConfigRoute, postMongodbatlasMountPathConfigRouteHandler)
  .openapi(getMongodbatlasMountPathCredsNameRoute, getMongodbatlasMountPathCredsNameRouteHandler)
  .openapi(postMongodbatlasMountPathCredsNameRoute, postMongodbatlasMountPathCredsNameRouteHandler)
  .openapi(getMongodbatlasMountPathRolesIndexRoute, getMongodbatlasMountPathRolesIndexRouteHandler)
  .openapi(getMongodbatlasMountPathRolesNameRoute, getMongodbatlasMountPathRolesNameRouteHandler)
  .openapi(postMongodbatlasMountPathRolesNameRoute, postMongodbatlasMountPathRolesNameRouteHandler)
  .openapi(
    deleteMongodbatlasMountPathRolesNameRoute,
    deleteMongodbatlasMountPathRolesNameRouteHandler,
  )
  .openapi(getNomadMountPathConfigAccessRoute, getNomadMountPathConfigAccessRouteHandler)
  .openapi(postNomadMountPathConfigAccessRoute, postNomadMountPathConfigAccessRouteHandler)
  .openapi(deleteNomadMountPathConfigAccessRoute, deleteNomadMountPathConfigAccessRouteHandler)
  .openapi(getNomadMountPathConfigLeaseRoute, getNomadMountPathConfigLeaseRouteHandler)
  .openapi(postNomadMountPathConfigLeaseRoute, postNomadMountPathConfigLeaseRouteHandler)
  .openapi(deleteNomadMountPathConfigLeaseRoute, deleteNomadMountPathConfigLeaseRouteHandler)
  .openapi(getNomadMountPathCredsNameRoute, getNomadMountPathCredsNameRouteHandler)
  .openapi(getNomadMountPathRoleIndexRoute, getNomadMountPathRoleIndexRouteHandler)
  .openapi(getNomadMountPathRoleNameRoute, getNomadMountPathRoleNameRouteHandler)
  .openapi(postNomadMountPathRoleNameRoute, postNomadMountPathRoleNameRouteHandler)
  .openapi(deleteNomadMountPathRoleNameRoute, deleteNomadMountPathRoleNameRouteHandler)
  .openapi(postPkiMountPathAcmeAccountKidRoute, postPkiMountPathAcmeAccountKidRouteHandler)
  .openapi(
    postPkiMountPathAcmeAuthorizationAuthIdRoute,
    postPkiMountPathAcmeAuthorizationAuthIdRouteHandler,
  )
  .openapi(
    postPkiMountPathAcmeChallengeAuthIdChallengeTypeRoute,
    postPkiMountPathAcmeChallengeAuthIdChallengeTypeRouteHandler,
  )
  .openapi(getPkiMountPathAcmeDirectoryRoute, getPkiMountPathAcmeDirectoryRouteHandler)
  .openapi(postPkiMountPathAcmeNewAccountRoute, postPkiMountPathAcmeNewAccountRouteHandler)
  .openapi(postPkiMountPathAcmeNewEabRoute, postPkiMountPathAcmeNewEabRouteHandler)
  .openapi(getPkiMountPathAcmeNewNonceRoute, getPkiMountPathAcmeNewNonceRouteHandler)
  .openapi(postPkiMountPathAcmeNewOrderRoute, postPkiMountPathAcmeNewOrderRouteHandler)
  .openapi(postPkiMountPathAcmeOrderOrderIdRoute, postPkiMountPathAcmeOrderOrderIdRouteHandler)
  .openapi(
    postPkiMountPathAcmeOrderOrderIdCertRoute,
    postPkiMountPathAcmeOrderOrderIdCertRouteHandler,
  )
  .openapi(
    postPkiMountPathAcmeOrderOrderIdFinalizeRoute,
    postPkiMountPathAcmeOrderOrderIdFinalizeRouteHandler,
  )
  .openapi(postPkiMountPathAcmeOrdersRoute, postPkiMountPathAcmeOrdersRouteHandler)
  .openapi(postPkiMountPathAcmeRevokeCertRoute, postPkiMountPathAcmeRevokeCertRouteHandler)
  .openapi(getPkiMountPathCaRoute, getPkiMountPathCaRouteHandler)
  .openapi(getPkiMountPathCaPemRoute, getPkiMountPathCaPemRouteHandler)
  .openapi(getPkiMountPathCaChainRoute, getPkiMountPathCaChainRouteHandler)
  .openapi(getPkiMountPathCertCaChainRoute, getPkiMountPathCertCaChainRouteHandler)
  .openapi(getPkiMountPathCertCrlRoute, getPkiMountPathCertCrlRouteHandler)
  .openapi(getPkiMountPathCertDeltaCrlRoute, getPkiMountPathCertDeltaCrlRouteHandler)
  .openapi(getPkiMountPathCertSerialRoute, getPkiMountPathCertSerialRouteHandler)
  .openapi(getPkiMountPathCertSerialRawRoute, getPkiMountPathCertSerialRawRouteHandler)
  .openapi(getPkiMountPathCertSerialRawPemRoute, getPkiMountPathCertSerialRawPemRouteHandler)
  .openapi(getPkiMountPathCertsIndexRoute, getPkiMountPathCertsIndexRouteHandler)
  .openapi(getPkiMountPathCertsRevokedIndexRoute, getPkiMountPathCertsRevokedIndexRouteHandler)
  .openapi(getPkiMountPathConfigAcmeRoute, getPkiMountPathConfigAcmeRouteHandler)
  .openapi(postPkiMountPathConfigAcmeRoute, postPkiMountPathConfigAcmeRouteHandler)
  .openapi(getPkiMountPathConfigAutoTidyRoute, getPkiMountPathConfigAutoTidyRouteHandler)
  .openapi(postPkiMountPathConfigAutoTidyRoute, postPkiMountPathConfigAutoTidyRouteHandler)
  .openapi(postPkiMountPathConfigCaRoute, postPkiMountPathConfigCaRouteHandler)
  .openapi(getPkiMountPathConfigClusterRoute, getPkiMountPathConfigClusterRouteHandler)
  .openapi(postPkiMountPathConfigClusterRoute, postPkiMountPathConfigClusterRouteHandler)
  .openapi(getPkiMountPathConfigCrlRoute, getPkiMountPathConfigCrlRouteHandler)
  .openapi(postPkiMountPathConfigCrlRoute, postPkiMountPathConfigCrlRouteHandler)
  .openapi(getPkiMountPathConfigIssuersRoute, getPkiMountPathConfigIssuersRouteHandler)
  .openapi(postPkiMountPathConfigIssuersRoute, postPkiMountPathConfigIssuersRouteHandler)
  .openapi(getPkiMountPathConfigKeysRoute, getPkiMountPathConfigKeysRouteHandler)
  .openapi(postPkiMountPathConfigKeysRoute, postPkiMountPathConfigKeysRouteHandler)
  .openapi(getPkiMountPathConfigUrlsRoute, getPkiMountPathConfigUrlsRouteHandler)
  .openapi(postPkiMountPathConfigUrlsRoute, postPkiMountPathConfigUrlsRouteHandler)
  .openapi(getPkiMountPathCrlRoute, getPkiMountPathCrlRouteHandler)
  .openapi(getPkiMountPathCrlDeltaRoute, getPkiMountPathCrlDeltaRouteHandler)
  .openapi(getPkiMountPathCrlDeltaPemRoute, getPkiMountPathCrlDeltaPemRouteHandler)
  .openapi(getPkiMountPathCrlPemRoute, getPkiMountPathCrlPemRouteHandler)
  .openapi(getPkiMountPathCrlRotateRoute, getPkiMountPathCrlRotateRouteHandler)
  .openapi(getPkiMountPathCrlRotateDeltaRoute, getPkiMountPathCrlRotateDeltaRouteHandler)
  .openapi(getPkiMountPathEabIndexRoute, getPkiMountPathEabIndexRouteHandler)
  .openapi(deletePkiMountPathEabKeyIdRoute, deletePkiMountPathEabKeyIdRouteHandler)
  .openapi(
    postPkiMountPathIntermediateCrossSignRoute,
    postPkiMountPathIntermediateCrossSignRouteHandler,
  )
  .openapi(
    postPkiMountPathIntermediateGenerateExportedRoute,
    postPkiMountPathIntermediateGenerateExportedRouteHandler,
  )
  .openapi(
    postPkiMountPathIntermediateSetSignedRoute,
    postPkiMountPathIntermediateSetSignedRouteHandler,
  )
  .openapi(postPkiMountPathIssueRoleRoute, postPkiMountPathIssueRoleRouteHandler)
  .openapi(getPkiMountPathIssuerIssuerRefRoute, getPkiMountPathIssuerIssuerRefRouteHandler)
  .openapi(postPkiMountPathIssuerIssuerRefRoute, postPkiMountPathIssuerIssuerRefRouteHandler)
  .openapi(deletePkiMountPathIssuerIssuerRefRoute, deletePkiMountPathIssuerIssuerRefRouteHandler)
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeAccountKidRoute,
    postPkiMountPathIssuerIssuerRefAcmeAccountKidRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeAuthorizationAuthIdRoute,
    postPkiMountPathIssuerIssuerRefAcmeAuthorizationAuthIdRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeChallengeAuthIdChallengeTypeRoute,
    postPkiMountPathIssuerIssuerRefAcmeChallengeAuthIdChallengeTypeRouteHandler,
  )
  .openapi(
    getPkiMountPathIssuerIssuerRefAcmeDirectoryRoute,
    getPkiMountPathIssuerIssuerRefAcmeDirectoryRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeNewAccountRoute,
    postPkiMountPathIssuerIssuerRefAcmeNewAccountRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeNewEabRoute,
    postPkiMountPathIssuerIssuerRefAcmeNewEabRouteHandler,
  )
  .openapi(
    getPkiMountPathIssuerIssuerRefAcmeNewNonceRoute,
    getPkiMountPathIssuerIssuerRefAcmeNewNonceRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeNewOrderRoute,
    postPkiMountPathIssuerIssuerRefAcmeNewOrderRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdRoute,
    postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdCertRoute,
    postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdCertRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdFinalizeRoute,
    postPkiMountPathIssuerIssuerRefAcmeOrderOrderIdFinalizeRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeOrdersRoute,
    postPkiMountPathIssuerIssuerRefAcmeOrdersRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefAcmeRevokeCertRoute,
    postPkiMountPathIssuerIssuerRefAcmeRevokeCertRouteHandler,
  )
  .openapi(getPkiMountPathIssuerIssuerRefCrlRoute, getPkiMountPathIssuerIssuerRefCrlRouteHandler)
  .openapi(
    getPkiMountPathIssuerIssuerRefCrlDeltaRoute,
    getPkiMountPathIssuerIssuerRefCrlDeltaRouteHandler,
  )
  .openapi(
    getPkiMountPathIssuerIssuerRefCrlDeltaDerRoute,
    getPkiMountPathIssuerIssuerRefCrlDeltaDerRouteHandler,
  )
  .openapi(
    getPkiMountPathIssuerIssuerRefCrlDeltaPemRoute,
    getPkiMountPathIssuerIssuerRefCrlDeltaPemRouteHandler,
  )
  .openapi(
    getPkiMountPathIssuerIssuerRefCrlDerRoute,
    getPkiMountPathIssuerIssuerRefCrlDerRouteHandler,
  )
  .openapi(
    getPkiMountPathIssuerIssuerRefCrlPemRoute,
    getPkiMountPathIssuerIssuerRefCrlPemRouteHandler,
  )
  .openapi(getPkiMountPathIssuerIssuerRefDerRoute, getPkiMountPathIssuerIssuerRefDerRouteHandler)
  .openapi(
    postPkiMountPathIssuerIssuerRefIssueRoleRoute,
    postPkiMountPathIssuerIssuerRefIssueRoleRouteHandler,
  )
  .openapi(getPkiMountPathIssuerIssuerRefJsonRoute, getPkiMountPathIssuerIssuerRefJsonRouteHandler)
  .openapi(getPkiMountPathIssuerIssuerRefPemRoute, getPkiMountPathIssuerIssuerRefPemRouteHandler)
  .openapi(
    postPkiMountPathIssuerIssuerRefResignCrlsRoute,
    postPkiMountPathIssuerIssuerRefResignCrlsRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRevokeRoute,
    postPkiMountPathIssuerIssuerRefRevokeRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeAccountKidRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeAccountKidRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeAuthorizationAuthIdRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeAuthorizationAuthIdRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRouteHandler,
  )
  .openapi(
    getPkiMountPathIssuerIssuerRefRolesRoleAcmeDirectoryRoute,
    getPkiMountPathIssuerIssuerRefRolesRoleAcmeDirectoryRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewAccountRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewAccountRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewEabRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewEabRouteHandler,
  )
  .openapi(
    getPkiMountPathIssuerIssuerRefRolesRoleAcmeNewNonceRoute,
    getPkiMountPathIssuerIssuerRefRolesRoleAcmeNewNonceRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewOrderRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeNewOrderRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdCertRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdCertRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrdersRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeOrdersRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeRevokeCertRoute,
    postPkiMountPathIssuerIssuerRefRolesRoleAcmeRevokeCertRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefSignIntermediateRoute,
    postPkiMountPathIssuerIssuerRefSignIntermediateRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefSignRevocationListRoute,
    postPkiMountPathIssuerIssuerRefSignRevocationListRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefSignSelfIssuedRoute,
    postPkiMountPathIssuerIssuerRefSignSelfIssuedRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefSignVerbatimRoute,
    postPkiMountPathIssuerIssuerRefSignVerbatimRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefSignVerbatimRoleRoute,
    postPkiMountPathIssuerIssuerRefSignVerbatimRoleRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuerIssuerRefSignRoleRoute,
    postPkiMountPathIssuerIssuerRefSignRoleRouteHandler,
  )
  .openapi(getPkiMountPathIssuersIndexRoute, getPkiMountPathIssuersIndexRouteHandler)
  .openapi(
    postPkiMountPathIssuersGenerateIntermediateExportedRoute,
    postPkiMountPathIssuersGenerateIntermediateExportedRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuersGenerateRootExportedRoute,
    postPkiMountPathIssuersGenerateRootExportedRouteHandler,
  )
  .openapi(
    postPkiMountPathIssuersImportBundleRoute,
    postPkiMountPathIssuersImportBundleRouteHandler,
  )
  .openapi(postPkiMountPathIssuersImportCertRoute, postPkiMountPathIssuersImportCertRouteHandler)
  .openapi(getPkiMountPathKeyKeyRefRoute, getPkiMountPathKeyKeyRefRouteHandler)
  .openapi(postPkiMountPathKeyKeyRefRoute, postPkiMountPathKeyKeyRefRouteHandler)
  .openapi(deletePkiMountPathKeyKeyRefRoute, deletePkiMountPathKeyKeyRefRouteHandler)
  .openapi(getPkiMountPathKeysIndexRoute, getPkiMountPathKeysIndexRouteHandler)
  .openapi(
    postPkiMountPathKeysGenerateExportedRoute,
    postPkiMountPathKeysGenerateExportedRouteHandler,
  )
  .openapi(
    postPkiMountPathKeysGenerateInternalRoute,
    postPkiMountPathKeysGenerateInternalRouteHandler,
  )
  .openapi(postPkiMountPathKeysGenerateKmsRoute, postPkiMountPathKeysGenerateKmsRouteHandler)
  .openapi(postPkiMountPathKeysImportRoute, postPkiMountPathKeysImportRouteHandler)
  .openapi(postPkiMountPathOcspRoute, postPkiMountPathOcspRouteHandler)
  .openapi(getPkiMountPathOcspReqRoute, getPkiMountPathOcspReqRouteHandler)
  .openapi(postPkiMountPathRevokeRoute, postPkiMountPathRevokeRouteHandler)
  .openapi(postPkiMountPathRevokeWithKeyRoute, postPkiMountPathRevokeWithKeyRouteHandler)
  .openapi(getPkiMountPathRolesIndexRoute, getPkiMountPathRolesIndexRouteHandler)
  .openapi(getPkiMountPathRolesNameRoute, getPkiMountPathRolesNameRouteHandler)
  .openapi(postPkiMountPathRolesNameRoute, postPkiMountPathRolesNameRouteHandler)
  .openapi(deletePkiMountPathRolesNameRoute, deletePkiMountPathRolesNameRouteHandler)
  .openapi(
    postPkiMountPathRolesRoleAcmeAccountKidRoute,
    postPkiMountPathRolesRoleAcmeAccountKidRouteHandler,
  )
  .openapi(
    postPkiMountPathRolesRoleAcmeAuthorizationAuthIdRoute,
    postPkiMountPathRolesRoleAcmeAuthorizationAuthIdRouteHandler,
  )
  .openapi(
    postPkiMountPathRolesRoleAcmeChallengeAuthIdChallengeTypeRoute,
    postPkiMountPathRolesRoleAcmeChallengeAuthIdChallengeTypeRouteHandler,
  )
  .openapi(
    getPkiMountPathRolesRoleAcmeDirectoryRoute,
    getPkiMountPathRolesRoleAcmeDirectoryRouteHandler,
  )
  .openapi(
    postPkiMountPathRolesRoleAcmeNewAccountRoute,
    postPkiMountPathRolesRoleAcmeNewAccountRouteHandler,
  )
  .openapi(
    postPkiMountPathRolesRoleAcmeNewEabRoute,
    postPkiMountPathRolesRoleAcmeNewEabRouteHandler,
  )
  .openapi(
    getPkiMountPathRolesRoleAcmeNewNonceRoute,
    getPkiMountPathRolesRoleAcmeNewNonceRouteHandler,
  )
  .openapi(
    postPkiMountPathRolesRoleAcmeNewOrderRoute,
    postPkiMountPathRolesRoleAcmeNewOrderRouteHandler,
  )
  .openapi(
    postPkiMountPathRolesRoleAcmeOrderOrderIdRoute,
    postPkiMountPathRolesRoleAcmeOrderOrderIdRouteHandler,
  )
  .openapi(
    postPkiMountPathRolesRoleAcmeOrderOrderIdCertRoute,
    postPkiMountPathRolesRoleAcmeOrderOrderIdCertRouteHandler,
  )
  .openapi(
    postPkiMountPathRolesRoleAcmeOrderOrderIdFinalizeRoute,
    postPkiMountPathRolesRoleAcmeOrderOrderIdFinalizeRouteHandler,
  )
  .openapi(
    postPkiMountPathRolesRoleAcmeOrdersRoute,
    postPkiMountPathRolesRoleAcmeOrdersRouteHandler,
  )
  .openapi(
    postPkiMountPathRolesRoleAcmeRevokeCertRoute,
    postPkiMountPathRolesRoleAcmeRevokeCertRouteHandler,
  )
  .openapi(deletePkiMountPathRootRoute, deletePkiMountPathRootRouteHandler)
  .openapi(
    postPkiMountPathRootGenerateExportedRoute,
    postPkiMountPathRootGenerateExportedRouteHandler,
  )
  .openapi(postPkiMountPathRootReplaceRoute, postPkiMountPathRootReplaceRouteHandler)
  .openapi(postPkiMountPathRootRotateExportedRoute, postPkiMountPathRootRotateExportedRouteHandler)
  .openapi(
    postPkiMountPathRootSignIntermediateRoute,
    postPkiMountPathRootSignIntermediateRouteHandler,
  )
  .openapi(postPkiMountPathRootSignSelfIssuedRoute, postPkiMountPathRootSignSelfIssuedRouteHandler)
  .openapi(postPkiMountPathSignVerbatimRoute, postPkiMountPathSignVerbatimRouteHandler)
  .openapi(postPkiMountPathSignVerbatimRoleRoute, postPkiMountPathSignVerbatimRoleRouteHandler)
  .openapi(postPkiMountPathSignRoleRoute, postPkiMountPathSignRoleRouteHandler)
  .openapi(postPkiMountPathTidyRoute, postPkiMountPathTidyRouteHandler)
  .openapi(postPkiMountPathTidyCancelRoute, postPkiMountPathTidyCancelRouteHandler)
  .openapi(getPkiMountPathTidyStatusRoute, getPkiMountPathTidyStatusRouteHandler)
  .openapi(
    postRabbitmqMountPathConfigConnectionRoute,
    postRabbitmqMountPathConfigConnectionRouteHandler,
  )
  .openapi(getRabbitmqMountPathConfigLeaseRoute, getRabbitmqMountPathConfigLeaseRouteHandler)
  .openapi(postRabbitmqMountPathConfigLeaseRoute, postRabbitmqMountPathConfigLeaseRouteHandler)
  .openapi(getRabbitmqMountPathCredsNameRoute, getRabbitmqMountPathCredsNameRouteHandler)
  .openapi(getRabbitmqMountPathRolesIndexRoute, getRabbitmqMountPathRolesIndexRouteHandler)
  .openapi(getRabbitmqMountPathRolesNameRoute, getRabbitmqMountPathRolesNameRouteHandler)
  .openapi(postRabbitmqMountPathRolesNameRoute, postRabbitmqMountPathRolesNameRouteHandler)
  .openapi(deleteRabbitmqMountPathRolesNameRoute, deleteRabbitmqMountPathRolesNameRouteHandler)
  .openapi(getSshMountPathConfigCaRoute, getSshMountPathConfigCaRouteHandler)
  .openapi(postSshMountPathConfigCaRoute, postSshMountPathConfigCaRouteHandler)
  .openapi(deleteSshMountPathConfigCaRoute, deleteSshMountPathConfigCaRouteHandler)
  .openapi(getSshMountPathConfigZeroaddressRoute, getSshMountPathConfigZeroaddressRouteHandler)
  .openapi(postSshMountPathConfigZeroaddressRoute, postSshMountPathConfigZeroaddressRouteHandler)
  .openapi(
    deleteSshMountPathConfigZeroaddressRoute,
    deleteSshMountPathConfigZeroaddressRouteHandler,
  )
  .openapi(postSshMountPathCredsRoleRoute, postSshMountPathCredsRoleRouteHandler)
  .openapi(postSshMountPathIssueRoleRoute, postSshMountPathIssueRoleRouteHandler)
  .openapi(postSshMountPathLookupRoute, postSshMountPathLookupRouteHandler)
  .openapi(getSshMountPathPublicKeyRoute, getSshMountPathPublicKeyRouteHandler)
  .openapi(getSshMountPathRolesIndexRoute, getSshMountPathRolesIndexRouteHandler)
  .openapi(getSshMountPathRolesRoleRoute, getSshMountPathRolesRoleRouteHandler)
  .openapi(postSshMountPathRolesRoleRoute, postSshMountPathRolesRoleRouteHandler)
  .openapi(deleteSshMountPathRolesRoleRoute, deleteSshMountPathRolesRoleRouteHandler)
  .openapi(postSshMountPathSignRoleRoute, postSshMountPathSignRoleRouteHandler)
  .openapi(deleteSshMountPathTidyDynamicKeysRoute, deleteSshMountPathTidyDynamicKeysRouteHandler)
  .openapi(postSshMountPathVerifyRoute, postSshMountPathVerifyRouteHandler)
  .openapi(getTerraformMountPathConfigRoute, getTerraformMountPathConfigRouteHandler)
  .openapi(postTerraformMountPathConfigRoute, postTerraformMountPathConfigRouteHandler)
  .openapi(deleteTerraformMountPathConfigRoute, deleteTerraformMountPathConfigRouteHandler)
  .openapi(getTerraformMountPathCredsNameRoute, getTerraformMountPathCredsNameRouteHandler)
  .openapi(postTerraformMountPathCredsNameRoute, postTerraformMountPathCredsNameRouteHandler)
  .openapi(getTerraformMountPathRoleIndexRoute, getTerraformMountPathRoleIndexRouteHandler)
  .openapi(getTerraformMountPathRoleNameRoute, getTerraformMountPathRoleNameRouteHandler)
  .openapi(postTerraformMountPathRoleNameRoute, postTerraformMountPathRoleNameRouteHandler)
  .openapi(deleteTerraformMountPathRoleNameRoute, deleteTerraformMountPathRoleNameRouteHandler)
  .openapi(
    postTerraformMountPathRotateRoleNameRoute,
    postTerraformMountPathRotateRoleNameRouteHandler,
  )
  .openapi(getTotpMountPathCodeNameRoute, getTotpMountPathCodeNameRouteHandler)
  .openapi(postTotpMountPathCodeNameRoute, postTotpMountPathCodeNameRouteHandler)
  .openapi(getTotpMountPathKeysIndexRoute, getTotpMountPathKeysIndexRouteHandler)
  .openapi(getTotpMountPathKeysNameRoute, getTotpMountPathKeysNameRouteHandler)
  .openapi(postTotpMountPathKeysNameRoute, postTotpMountPathKeysNameRouteHandler)
  .openapi(deleteTotpMountPathKeysNameRoute, deleteTotpMountPathKeysNameRouteHandler)
  .openapi(getTransitMountPathBackupNameRoute, getTransitMountPathBackupNameRouteHandler)
  .openapi(
    getTransitMountPathByokExportDestinationSourceRoute,
    getTransitMountPathByokExportDestinationSourceRouteHandler,
  )
  .openapi(
    getTransitMountPathByokExportDestinationSourceVersionRoute,
    getTransitMountPathByokExportDestinationSourceVersionRouteHandler,
  )
  .openapi(getTransitMountPathCacheConfigRoute, getTransitMountPathCacheConfigRouteHandler)
  .openapi(postTransitMountPathCacheConfigRoute, postTransitMountPathCacheConfigRouteHandler)
  .openapi(getTransitMountPathConfigKeysRoute, getTransitMountPathConfigKeysRouteHandler)
  .openapi(postTransitMountPathConfigKeysRoute, postTransitMountPathConfigKeysRouteHandler)
  .openapi(
    postTransitMountPathDatakeyPlaintextNameRoute,
    postTransitMountPathDatakeyPlaintextNameRouteHandler,
  )
  .openapi(postTransitMountPathDecryptNameRoute, postTransitMountPathDecryptNameRouteHandler)
  .openapi(postTransitMountPathEncryptNameRoute, postTransitMountPathEncryptNameRouteHandler)
  .openapi(getTransitMountPathExportTypeNameRoute, getTransitMountPathExportTypeNameRouteHandler)
  .openapi(
    getTransitMountPathExportTypeNameVersionRoute,
    getTransitMountPathExportTypeNameVersionRouteHandler,
  )
  .openapi(postTransitMountPathHashRoute, postTransitMountPathHashRouteHandler)
  .openapi(
    postTransitMountPathHashUrlalgorithmRoute,
    postTransitMountPathHashUrlalgorithmRouteHandler,
  )
  .openapi(postTransitMountPathHmacNameRoute, postTransitMountPathHmacNameRouteHandler)
  .openapi(
    postTransitMountPathHmacNameUrlalgorithmRoute,
    postTransitMountPathHmacNameUrlalgorithmRouteHandler,
  )
  .openapi(getTransitMountPathKeysIndexRoute, getTransitMountPathKeysIndexRouteHandler)
  .openapi(getTransitMountPathKeysNameRoute, getTransitMountPathKeysNameRouteHandler)
  .openapi(postTransitMountPathKeysNameRoute, postTransitMountPathKeysNameRouteHandler)
  .openapi(deleteTransitMountPathKeysNameRoute, deleteTransitMountPathKeysNameRouteHandler)
  .openapi(postTransitMountPathKeysNameConfigRoute, postTransitMountPathKeysNameConfigRouteHandler)
  .openapi(postTransitMountPathKeysNameCsrRoute, postTransitMountPathKeysNameCsrRouteHandler)
  .openapi(postTransitMountPathKeysNameImportRoute, postTransitMountPathKeysNameImportRouteHandler)
  .openapi(
    postTransitMountPathKeysNameImportVersionRoute,
    postTransitMountPathKeysNameImportVersionRouteHandler,
  )
  .openapi(postTransitMountPathKeysNameRotateRoute, postTransitMountPathKeysNameRotateRouteHandler)
  .openapi(
    postTransitMountPathKeysNameSetCertificateRoute,
    postTransitMountPathKeysNameSetCertificateRouteHandler,
  )
  .openapi(postTransitMountPathKeysNameTrimRoute, postTransitMountPathKeysNameTrimRouteHandler)
  .openapi(postTransitMountPathRandomRoute, postTransitMountPathRandomRouteHandler)
  .openapi(postTransitMountPathRandomSourceRoute, postTransitMountPathRandomSourceRouteHandler)
  .openapi(
    postTransitMountPathRandomSourceUrlbytesRoute,
    postTransitMountPathRandomSourceUrlbytesRouteHandler,
  )
  .openapi(postTransitMountPathRandomUrlbytesRoute, postTransitMountPathRandomUrlbytesRouteHandler)
  .openapi(postTransitMountPathRestoreRoute, postTransitMountPathRestoreRouteHandler)
  .openapi(postTransitMountPathRestoreNameRoute, postTransitMountPathRestoreNameRouteHandler)
  .openapi(postTransitMountPathRewrapNameRoute, postTransitMountPathRewrapNameRouteHandler)
  .openapi(postTransitMountPathSignNameRoute, postTransitMountPathSignNameRouteHandler)
  .openapi(
    postTransitMountPathSignNameUrlalgorithmRoute,
    postTransitMountPathSignNameUrlalgorithmRouteHandler,
  )
  .openapi(postTransitMountPathVerifyNameRoute, postTransitMountPathVerifyNameRouteHandler)
  .openapi(
    postTransitMountPathVerifyNameUrlalgorithmRoute,
    postTransitMountPathVerifyNameUrlalgorithmRouteHandler,
  )
  .openapi(getTransitMountPathWrappingKeyRoute, getTransitMountPathWrappingKeyRouteHandler)

export default app
