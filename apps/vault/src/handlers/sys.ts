import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const getSysAuditRouteHandler: RouteHandler<typeof getSysAuditRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysAuditHashPathRouteHandler: RouteHandler<
  typeof postSysAuditHashPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysAuditPathRouteHandler: RouteHandler<typeof postSysAuditPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSysAuditPathRouteHandler: RouteHandler<typeof deleteSysAuditPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysAuthRouteHandler: RouteHandler<typeof getSysAuthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysAuthPathRouteHandler: RouteHandler<typeof getSysAuthPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysAuthPathRouteHandler: RouteHandler<typeof postSysAuthPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysAuthPathRouteHandler: RouteHandler<typeof deleteSysAuthPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysAuthPathTuneRouteHandler: RouteHandler<typeof getSysAuthPathTuneRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysAuthPathTuneRouteHandler: RouteHandler<
  typeof postSysAuthPathTuneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysCapabilitiesRouteHandler: RouteHandler<
  typeof postSysCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysCapabilitiesAccessorRouteHandler: RouteHandler<
  typeof postSysCapabilitiesAccessorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysCapabilitiesSelfRouteHandler: RouteHandler<
  typeof postSysCapabilitiesSelfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysConfigAuditingRequestHeadersRouteHandler: RouteHandler<
  typeof getSysConfigAuditingRequestHeadersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysConfigAuditingRequestHeadersHeaderRouteHandler: RouteHandler<
  typeof getSysConfigAuditingRequestHeadersHeaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysConfigAuditingRequestHeadersHeaderRouteHandler: RouteHandler<
  typeof postSysConfigAuditingRequestHeadersHeaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysConfigAuditingRequestHeadersHeaderRouteHandler: RouteHandler<
  typeof deleteSysConfigAuditingRequestHeadersHeaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysConfigControlGroupRouteHandler: RouteHandler<
  typeof getSysConfigControlGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysConfigControlGroupRouteHandler: RouteHandler<
  typeof postSysConfigControlGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysConfigControlGroupRouteHandler: RouteHandler<
  typeof deleteSysConfigControlGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysConfigCorsRouteHandler: RouteHandler<typeof getSysConfigCorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysConfigCorsRouteHandler: RouteHandler<typeof postSysConfigCorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSysConfigCorsRouteHandler: RouteHandler<
  typeof deleteSysConfigCorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysConfigGroupPolicyApplicationRouteHandler: RouteHandler<
  typeof getSysConfigGroupPolicyApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysConfigGroupPolicyApplicationRouteHandler: RouteHandler<
  typeof postSysConfigGroupPolicyApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysConfigReloadSubsystemRouteHandler: RouteHandler<
  typeof postSysConfigReloadSubsystemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysConfigStateSanitizedRouteHandler: RouteHandler<
  typeof getSysConfigStateSanitizedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysConfigUiHeadersIndexRouteHandler: RouteHandler<
  typeof getSysConfigUiHeadersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysConfigUiHeadersHeaderRouteHandler: RouteHandler<
  typeof getSysConfigUiHeadersHeaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysConfigUiHeadersHeaderRouteHandler: RouteHandler<
  typeof postSysConfigUiHeadersHeaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysConfigUiHeadersHeaderRouteHandler: RouteHandler<
  typeof deleteSysConfigUiHeadersHeaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysControlGroupAuthorizeRouteHandler: RouteHandler<
  typeof postSysControlGroupAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysControlGroupRequestRouteHandler: RouteHandler<
  typeof postSysControlGroupRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysDecodeTokenRouteHandler: RouteHandler<typeof postSysDecodeTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysExperimentsRouteHandler: RouteHandler<typeof getSysExperimentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysGenerateRootRouteHandler: RouteHandler<typeof getSysGenerateRootRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysGenerateRootRouteHandler: RouteHandler<
  typeof postSysGenerateRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysGenerateRootRouteHandler: RouteHandler<
  typeof deleteSysGenerateRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysGenerateRootAttemptRouteHandler: RouteHandler<
  typeof getSysGenerateRootAttemptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysGenerateRootAttemptRouteHandler: RouteHandler<
  typeof postSysGenerateRootAttemptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysGenerateRootAttemptRouteHandler: RouteHandler<
  typeof deleteSysGenerateRootAttemptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysGenerateRootUpdateRouteHandler: RouteHandler<
  typeof postSysGenerateRootUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysHaStatusRouteHandler: RouteHandler<typeof getSysHaStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysHealthRouteHandler: RouteHandler<typeof getSysHealthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysHostInfoRouteHandler: RouteHandler<typeof getSysHostInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInFlightReqRouteHandler: RouteHandler<typeof getSysInFlightReqRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysInitRouteHandler: RouteHandler<typeof getSysInitRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysInitRouteHandler: RouteHandler<typeof postSysInitRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalCountersActivityRouteHandler: RouteHandler<
  typeof getSysInternalCountersActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalCountersActivityExportRouteHandler: RouteHandler<
  typeof getSysInternalCountersActivityExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalCountersActivityMonthlyRouteHandler: RouteHandler<
  typeof getSysInternalCountersActivityMonthlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalCountersConfigRouteHandler: RouteHandler<
  typeof getSysInternalCountersConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysInternalCountersConfigRouteHandler: RouteHandler<
  typeof postSysInternalCountersConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalCountersEntitiesRouteHandler: RouteHandler<
  typeof getSysInternalCountersEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalCountersRequestsRouteHandler: RouteHandler<
  typeof getSysInternalCountersRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalCountersTokensRouteHandler: RouteHandler<
  typeof getSysInternalCountersTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalInspectRouterTagRouteHandler: RouteHandler<
  typeof getSysInternalInspectRouterTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalSpecsOpenapiRouteHandler: RouteHandler<
  typeof getSysInternalSpecsOpenapiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysInternalSpecsOpenapiRouteHandler: RouteHandler<
  typeof postSysInternalSpecsOpenapiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalUiFeatureFlagsRouteHandler: RouteHandler<
  typeof getSysInternalUiFeatureFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalUiMountsRouteHandler: RouteHandler<
  typeof getSysInternalUiMountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalUiMountsPathRouteHandler: RouteHandler<
  typeof getSysInternalUiMountsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalUiNamespacesRouteHandler: RouteHandler<
  typeof getSysInternalUiNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysInternalUiResultantAclRouteHandler: RouteHandler<
  typeof getSysInternalUiResultantAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysKeyStatusRouteHandler: RouteHandler<typeof getSysKeyStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysLeaderRouteHandler: RouteHandler<typeof getSysLeaderRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysLeasesRouteHandler: RouteHandler<typeof getSysLeasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysLeasesCountRouteHandler: RouteHandler<typeof getSysLeasesCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysLeasesLookupRouteHandler: RouteHandler<
  typeof postSysLeasesLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysLeasesLookupPrefixIndexRouteHandler: RouteHandler<
  typeof getSysLeasesLookupPrefixIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysLeasesRenewRouteHandler: RouteHandler<typeof postSysLeasesRenewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysLeasesRenewUrlLeaseIdRouteHandler: RouteHandler<
  typeof postSysLeasesRenewUrlLeaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysLeasesRevokeRouteHandler: RouteHandler<
  typeof postSysLeasesRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysLeasesRevokeForcePrefixRouteHandler: RouteHandler<
  typeof postSysLeasesRevokeForcePrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysLeasesRevokePrefixPrefixRouteHandler: RouteHandler<
  typeof postSysLeasesRevokePrefixPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysLeasesRevokeUrlLeaseIdRouteHandler: RouteHandler<
  typeof postSysLeasesRevokeUrlLeaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysLeasesTidyRouteHandler: RouteHandler<typeof postSysLeasesTidyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysLicenseStatusRouteHandler: RouteHandler<
  typeof getSysLicenseStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysLockedUsersRouteHandler: RouteHandler<typeof getSysLockedUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysLockedUsersMountAccessorUnlockAliasIdentifierRouteHandler: RouteHandler<
  typeof postSysLockedUsersMountAccessorUnlockAliasIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysLoggersRouteHandler: RouteHandler<typeof getSysLoggersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysLoggersRouteHandler: RouteHandler<typeof postSysLoggersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysLoggersRouteHandler: RouteHandler<typeof deleteSysLoggersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysLoggersNameRouteHandler: RouteHandler<typeof getSysLoggersNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysLoggersNameRouteHandler: RouteHandler<typeof postSysLoggersNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSysLoggersNameRouteHandler: RouteHandler<
  typeof deleteSysLoggersNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysManagedKeysTypeIndexRouteHandler: RouteHandler<
  typeof getSysManagedKeysTypeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysManagedKeysTypeNameRouteHandler: RouteHandler<
  typeof getSysManagedKeysTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysManagedKeysTypeNameRouteHandler: RouteHandler<
  typeof postSysManagedKeysTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysManagedKeysTypeNameRouteHandler: RouteHandler<
  typeof deleteSysManagedKeysTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysManagedKeysTypeNameTestSignRouteHandler: RouteHandler<
  typeof postSysManagedKeysTypeNameTestSignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysMetricsRouteHandler: RouteHandler<typeof getSysMetricsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysMfaMethodIndexRouteHandler: RouteHandler<
  typeof getSysMfaMethodIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysMfaMethodDuoNameRouteHandler: RouteHandler<
  typeof getSysMfaMethodDuoNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysMfaMethodDuoNameRouteHandler: RouteHandler<
  typeof postSysMfaMethodDuoNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysMfaMethodDuoNameRouteHandler: RouteHandler<
  typeof deleteSysMfaMethodDuoNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysMfaMethodOktaNameRouteHandler: RouteHandler<
  typeof getSysMfaMethodOktaNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysMfaMethodOktaNameRouteHandler: RouteHandler<
  typeof postSysMfaMethodOktaNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysMfaMethodOktaNameRouteHandler: RouteHandler<
  typeof deleteSysMfaMethodOktaNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysMfaMethodPingidNameRouteHandler: RouteHandler<
  typeof getSysMfaMethodPingidNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysMfaMethodPingidNameRouteHandler: RouteHandler<
  typeof postSysMfaMethodPingidNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysMfaMethodPingidNameRouteHandler: RouteHandler<
  typeof deleteSysMfaMethodPingidNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysMfaMethodTotpNameRouteHandler: RouteHandler<
  typeof getSysMfaMethodTotpNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysMfaMethodTotpNameRouteHandler: RouteHandler<
  typeof postSysMfaMethodTotpNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysMfaMethodTotpNameRouteHandler: RouteHandler<
  typeof deleteSysMfaMethodTotpNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysMfaMethodTotpNameAdminDestroyRouteHandler: RouteHandler<
  typeof postSysMfaMethodTotpNameAdminDestroyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysMfaMethodTotpNameAdminGenerateRouteHandler: RouteHandler<
  typeof postSysMfaMethodTotpNameAdminGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysMfaMethodTotpNameGenerateRouteHandler: RouteHandler<
  typeof getSysMfaMethodTotpNameGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysMfaValidateRouteHandler: RouteHandler<typeof postSysMfaValidateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysMonitorRouteHandler: RouteHandler<typeof getSysMonitorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysMountsRouteHandler: RouteHandler<typeof getSysMountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysMountsPathRouteHandler: RouteHandler<typeof getSysMountsPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysMountsPathRouteHandler: RouteHandler<typeof postSysMountsPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSysMountsPathRouteHandler: RouteHandler<
  typeof deleteSysMountsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysMountsPathTuneRouteHandler: RouteHandler<
  typeof getSysMountsPathTuneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysMountsPathTuneRouteHandler: RouteHandler<
  typeof postSysMountsPathTuneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysNamespacesIndexRouteHandler: RouteHandler<
  typeof getSysNamespacesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysNamespacesApiLockLockRouteHandler: RouteHandler<
  typeof postSysNamespacesApiLockLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysNamespacesApiLockLockPathRouteHandler: RouteHandler<
  typeof postSysNamespacesApiLockLockPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysNamespacesApiLockUnlockRouteHandler: RouteHandler<
  typeof postSysNamespacesApiLockUnlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysNamespacesApiLockUnlockPathRouteHandler: RouteHandler<
  typeof postSysNamespacesApiLockUnlockPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysNamespacesPathRouteHandler: RouteHandler<
  typeof getSysNamespacesPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysNamespacesPathRouteHandler: RouteHandler<
  typeof postSysNamespacesPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysNamespacesPathRouteHandler: RouteHandler<
  typeof deleteSysNamespacesPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPluginsCatalogRouteHandler: RouteHandler<
  typeof getSysPluginsCatalogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPluginsCatalogNameRouteHandler: RouteHandler<
  typeof getSysPluginsCatalogNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysPluginsCatalogNameRouteHandler: RouteHandler<
  typeof postSysPluginsCatalogNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysPluginsCatalogNameRouteHandler: RouteHandler<
  typeof deleteSysPluginsCatalogNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPluginsCatalogTypeIndexRouteHandler: RouteHandler<
  typeof getSysPluginsCatalogTypeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPluginsCatalogTypeNameRouteHandler: RouteHandler<
  typeof getSysPluginsCatalogTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysPluginsCatalogTypeNameRouteHandler: RouteHandler<
  typeof postSysPluginsCatalogTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysPluginsCatalogTypeNameRouteHandler: RouteHandler<
  typeof deleteSysPluginsCatalogTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysPluginsReloadBackendRouteHandler: RouteHandler<
  typeof postSysPluginsReloadBackendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPluginsReloadBackendStatusRouteHandler: RouteHandler<
  typeof getSysPluginsReloadBackendStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPluginsRuntimesCatalogIndexRouteHandler: RouteHandler<
  typeof getSysPluginsRuntimesCatalogIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPluginsRuntimesCatalogTypeNameRouteHandler: RouteHandler<
  typeof getSysPluginsRuntimesCatalogTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysPluginsRuntimesCatalogTypeNameRouteHandler: RouteHandler<
  typeof postSysPluginsRuntimesCatalogTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysPluginsRuntimesCatalogTypeNameRouteHandler: RouteHandler<
  typeof deleteSysPluginsRuntimesCatalogTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPoliciesAclIndexRouteHandler: RouteHandler<
  typeof getSysPoliciesAclIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPoliciesAclNameRouteHandler: RouteHandler<
  typeof getSysPoliciesAclNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysPoliciesAclNameRouteHandler: RouteHandler<
  typeof postSysPoliciesAclNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysPoliciesAclNameRouteHandler: RouteHandler<
  typeof deleteSysPoliciesAclNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPoliciesEgpIndexRouteHandler: RouteHandler<
  typeof getSysPoliciesEgpIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPoliciesEgpNameRouteHandler: RouteHandler<
  typeof getSysPoliciesEgpNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysPoliciesEgpNameRouteHandler: RouteHandler<
  typeof postSysPoliciesEgpNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysPoliciesEgpNameRouteHandler: RouteHandler<
  typeof deleteSysPoliciesEgpNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPoliciesPasswordIndexRouteHandler: RouteHandler<
  typeof getSysPoliciesPasswordIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPoliciesPasswordNameRouteHandler: RouteHandler<
  typeof getSysPoliciesPasswordNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysPoliciesPasswordNameRouteHandler: RouteHandler<
  typeof postSysPoliciesPasswordNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysPoliciesPasswordNameRouteHandler: RouteHandler<
  typeof deleteSysPoliciesPasswordNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPoliciesPasswordNameGenerateRouteHandler: RouteHandler<
  typeof getSysPoliciesPasswordNameGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPoliciesRgpIndexRouteHandler: RouteHandler<
  typeof getSysPoliciesRgpIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPoliciesRgpNameRouteHandler: RouteHandler<
  typeof getSysPoliciesRgpNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysPoliciesRgpNameRouteHandler: RouteHandler<
  typeof postSysPoliciesRgpNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysPoliciesRgpNameRouteHandler: RouteHandler<
  typeof deleteSysPoliciesRgpNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPolicyRouteHandler: RouteHandler<typeof getSysPolicyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPolicyIndexRouteHandler: RouteHandler<typeof getSysPolicyIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysPolicyNameRouteHandler: RouteHandler<typeof getSysPolicyNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysPolicyNameRouteHandler: RouteHandler<typeof postSysPolicyNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSysPolicyNameRouteHandler: RouteHandler<
  typeof deleteSysPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPprofRouteHandler: RouteHandler<typeof getSysPprofRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPprofAllocsRouteHandler: RouteHandler<typeof getSysPprofAllocsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysPprofBlockRouteHandler: RouteHandler<typeof getSysPprofBlockRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysPprofCmdlineRouteHandler: RouteHandler<typeof getSysPprofCmdlineRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysPprofGoroutineRouteHandler: RouteHandler<
  typeof getSysPprofGoroutineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPprofHeapRouteHandler: RouteHandler<typeof getSysPprofHeapRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPprofMutexRouteHandler: RouteHandler<typeof getSysPprofMutexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysPprofProfileRouteHandler: RouteHandler<typeof getSysPprofProfileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysPprofSymbolRouteHandler: RouteHandler<typeof getSysPprofSymbolRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysPprofThreadcreateRouteHandler: RouteHandler<
  typeof getSysPprofThreadcreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysPprofTraceRouteHandler: RouteHandler<typeof getSysPprofTraceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysQuotasConfigRouteHandler: RouteHandler<typeof getSysQuotasConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysQuotasConfigRouteHandler: RouteHandler<
  typeof postSysQuotasConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysQuotasLeaseCountIndexRouteHandler: RouteHandler<
  typeof getSysQuotasLeaseCountIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysQuotasLeaseCountNameRouteHandler: RouteHandler<
  typeof getSysQuotasLeaseCountNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysQuotasLeaseCountNameRouteHandler: RouteHandler<
  typeof postSysQuotasLeaseCountNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysQuotasLeaseCountNameRouteHandler: RouteHandler<
  typeof deleteSysQuotasLeaseCountNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysQuotasRateLimitIndexRouteHandler: RouteHandler<
  typeof getSysQuotasRateLimitIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysQuotasRateLimitNameRouteHandler: RouteHandler<
  typeof getSysQuotasRateLimitNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysQuotasRateLimitNameRouteHandler: RouteHandler<
  typeof postSysQuotasRateLimitNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysQuotasRateLimitNameRouteHandler: RouteHandler<
  typeof deleteSysQuotasRateLimitNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysRawPathRouteHandler: RouteHandler<typeof getSysRawPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRawPathRouteHandler: RouteHandler<typeof postSysRawPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysRawPathRouteHandler: RouteHandler<typeof deleteSysRawPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysRawPathIndexRouteHandler: RouteHandler<typeof getSysRawPathIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysRekeyBackupRouteHandler: RouteHandler<typeof getSysRekeyBackupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSysRekeyBackupRouteHandler: RouteHandler<
  typeof deleteSysRekeyBackupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysRekeyInitRouteHandler: RouteHandler<typeof getSysRekeyInitRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRekeyInitRouteHandler: RouteHandler<typeof postSysRekeyInitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSysRekeyInitRouteHandler: RouteHandler<typeof deleteSysRekeyInitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysRekeyRecoveryKeyBackupRouteHandler: RouteHandler<
  typeof getSysRekeyRecoveryKeyBackupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysRekeyRecoveryKeyBackupRouteHandler: RouteHandler<
  typeof deleteSysRekeyRecoveryKeyBackupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRekeyUpdateRouteHandler: RouteHandler<typeof postSysRekeyUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysRekeyVerifyRouteHandler: RouteHandler<typeof getSysRekeyVerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysRekeyVerifyRouteHandler: RouteHandler<typeof postSysRekeyVerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSysRekeyVerifyRouteHandler: RouteHandler<
  typeof deleteSysRekeyVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRemountRouteHandler: RouteHandler<typeof postSysRemountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysRemountStatusMigrationIdRouteHandler: RouteHandler<
  typeof getSysRemountStatusMigrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRenewRouteHandler: RouteHandler<typeof postSysRenewRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRenewUrlLeaseIdRouteHandler: RouteHandler<
  typeof postSysRenewUrlLeaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrPrimaryDemoteRouteHandler: RouteHandler<
  typeof postSysReplicationDrPrimaryDemoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrPrimaryDisableRouteHandler: RouteHandler<
  typeof postSysReplicationDrPrimaryDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrPrimaryEnableRouteHandler: RouteHandler<
  typeof postSysReplicationDrPrimaryEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrPrimaryRevokeSecondaryRouteHandler: RouteHandler<
  typeof postSysReplicationDrPrimaryRevokeSecondaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrPrimarySecondaryTokenRouteHandler: RouteHandler<
  typeof postSysReplicationDrPrimarySecondaryTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrSecondaryConfigReloadSubsystemRouteHandler: RouteHandler<
  typeof postSysReplicationDrSecondaryConfigReloadSubsystemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrSecondaryDisableRouteHandler: RouteHandler<
  typeof postSysReplicationDrSecondaryDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrSecondaryEnableRouteHandler: RouteHandler<
  typeof postSysReplicationDrSecondaryEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrSecondaryGeneratePublicKeyRouteHandler: RouteHandler<
  typeof postSysReplicationDrSecondaryGeneratePublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysReplicationDrSecondaryLicenseStatusRouteHandler: RouteHandler<
  typeof getSysReplicationDrSecondaryLicenseStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrSecondaryOperationTokenDeleteRouteHandler: RouteHandler<
  typeof postSysReplicationDrSecondaryOperationTokenDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrSecondaryPromoteRouteHandler: RouteHandler<
  typeof postSysReplicationDrSecondaryPromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrSecondaryRecoverRouteHandler: RouteHandler<
  typeof postSysReplicationDrSecondaryRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrSecondaryReindexRouteHandler: RouteHandler<
  typeof postSysReplicationDrSecondaryReindexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationDrSecondaryUpdatePrimaryRouteHandler: RouteHandler<
  typeof postSysReplicationDrSecondaryUpdatePrimaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysReplicationDrStatusRouteHandler: RouteHandler<
  typeof getSysReplicationDrStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformancePrimaryDemoteRouteHandler: RouteHandler<
  typeof postSysReplicationPerformancePrimaryDemoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformancePrimaryDisableRouteHandler: RouteHandler<
  typeof postSysReplicationPerformancePrimaryDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysReplicationPerformancePrimaryDynamicFilterIdRouteHandler: RouteHandler<
  typeof getSysReplicationPerformancePrimaryDynamicFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformancePrimaryEnableRouteHandler: RouteHandler<
  typeof postSysReplicationPerformancePrimaryEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysReplicationPerformancePrimaryPathsFilterIdRouteHandler: RouteHandler<
  typeof getSysReplicationPerformancePrimaryPathsFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformancePrimaryPathsFilterIdRouteHandler: RouteHandler<
  typeof postSysReplicationPerformancePrimaryPathsFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysReplicationPerformancePrimaryPathsFilterIdRouteHandler: RouteHandler<
  typeof deleteSysReplicationPerformancePrimaryPathsFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformancePrimaryRevokeSecondaryRouteHandler: RouteHandler<
  typeof postSysReplicationPerformancePrimaryRevokeSecondaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformancePrimarySecondaryTokenRouteHandler: RouteHandler<
  typeof postSysReplicationPerformancePrimarySecondaryTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformanceSecondaryDisableRouteHandler: RouteHandler<
  typeof postSysReplicationPerformanceSecondaryDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysReplicationPerformanceSecondaryDynamicFilterIdRouteHandler: RouteHandler<
  typeof getSysReplicationPerformanceSecondaryDynamicFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformanceSecondaryEnableRouteHandler: RouteHandler<
  typeof postSysReplicationPerformanceSecondaryEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformanceSecondaryGeneratePublicKeyRouteHandler: RouteHandler<
  typeof postSysReplicationPerformanceSecondaryGeneratePublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformanceSecondaryPromoteRouteHandler: RouteHandler<
  typeof postSysReplicationPerformanceSecondaryPromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPerformanceSecondaryUpdatePrimaryRouteHandler: RouteHandler<
  typeof postSysReplicationPerformanceSecondaryUpdatePrimaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysReplicationPerformanceStatusRouteHandler: RouteHandler<
  typeof getSysReplicationPerformanceStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPrimaryDemoteRouteHandler: RouteHandler<
  typeof postSysReplicationPrimaryDemoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPrimaryDisableRouteHandler: RouteHandler<
  typeof postSysReplicationPrimaryDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPrimaryEnableRouteHandler: RouteHandler<
  typeof postSysReplicationPrimaryEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPrimaryRevokeSecondaryRouteHandler: RouteHandler<
  typeof postSysReplicationPrimaryRevokeSecondaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationPrimarySecondaryTokenRouteHandler: RouteHandler<
  typeof postSysReplicationPrimarySecondaryTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationRecoverRouteHandler: RouteHandler<
  typeof postSysReplicationRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationReindexRouteHandler: RouteHandler<
  typeof postSysReplicationReindexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationSecondaryDisableRouteHandler: RouteHandler<
  typeof postSysReplicationSecondaryDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationSecondaryEnableRouteHandler: RouteHandler<
  typeof postSysReplicationSecondaryEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationSecondaryPromoteRouteHandler: RouteHandler<
  typeof postSysReplicationSecondaryPromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysReplicationSecondaryUpdatePrimaryRouteHandler: RouteHandler<
  typeof postSysReplicationSecondaryUpdatePrimaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysReplicationStatusRouteHandler: RouteHandler<
  typeof getSysReplicationStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRevokeRouteHandler: RouteHandler<typeof postSysRevokeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRevokeForcePrefixRouteHandler: RouteHandler<
  typeof postSysRevokeForcePrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRevokePrefixPrefixRouteHandler: RouteHandler<
  typeof postSysRevokePrefixPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRevokeUrlLeaseIdRouteHandler: RouteHandler<
  typeof postSysRevokeUrlLeaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysRotateRouteHandler: RouteHandler<typeof postSysRotateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysRotateConfigRouteHandler: RouteHandler<typeof getSysRotateConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysRotateConfigRouteHandler: RouteHandler<
  typeof postSysRotateConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysSealRouteHandler: RouteHandler<typeof postSysSealRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysSealStatusRouteHandler: RouteHandler<typeof getSysSealStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSysSealwrapRewrapRouteHandler: RouteHandler<
  typeof getSysSealwrapRewrapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysSealwrapRewrapRouteHandler: RouteHandler<
  typeof postSysSealwrapRewrapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysStepDownRouteHandler: RouteHandler<typeof postSysStepDownRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysStorageRaftSnapshotAutoConfigIndexRouteHandler: RouteHandler<
  typeof getSysStorageRaftSnapshotAutoConfigIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysStorageRaftSnapshotAutoConfigNameRouteHandler: RouteHandler<
  typeof getSysStorageRaftSnapshotAutoConfigNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysStorageRaftSnapshotAutoConfigNameRouteHandler: RouteHandler<
  typeof postSysStorageRaftSnapshotAutoConfigNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSysStorageRaftSnapshotAutoConfigNameRouteHandler: RouteHandler<
  typeof deleteSysStorageRaftSnapshotAutoConfigNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysStorageRaftSnapshotAutoStatusNameRouteHandler: RouteHandler<
  typeof getSysStorageRaftSnapshotAutoStatusNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysToolsHashRouteHandler: RouteHandler<typeof postSysToolsHashRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysToolsHashUrlalgorithmRouteHandler: RouteHandler<
  typeof postSysToolsHashUrlalgorithmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysToolsRandomRouteHandler: RouteHandler<typeof postSysToolsRandomRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSysToolsRandomSourceRouteHandler: RouteHandler<
  typeof postSysToolsRandomSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysToolsRandomSourceUrlbytesRouteHandler: RouteHandler<
  typeof postSysToolsRandomSourceUrlbytesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysToolsRandomUrlbytesRouteHandler: RouteHandler<
  typeof postSysToolsRandomUrlbytesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysUnsealRouteHandler: RouteHandler<typeof postSysUnsealRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysVersionHistoryIndexRouteHandler: RouteHandler<
  typeof getSysVersionHistoryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSysWrappingLookupRouteHandler: RouteHandler<
  typeof getSysWrappingLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysWrappingLookupRouteHandler: RouteHandler<
  typeof postSysWrappingLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysWrappingRewrapRouteHandler: RouteHandler<
  typeof postSysWrappingRewrapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysWrappingUnwrapRouteHandler: RouteHandler<
  typeof postSysWrappingUnwrapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSysWrappingWrapRouteHandler: RouteHandler<
  typeof postSysWrappingWrapRoute
> = async (c) => {
  throw new Error('Not implemented')
}
