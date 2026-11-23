import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const sysHandler = app
  .openapi(getSysAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysAuditHashPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysAuditPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysAuditPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysAuthPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysAuthPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysAuthPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysAuthPathTuneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysAuthPathTuneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysCapabilitiesAccessorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysCapabilitiesSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysConfigAuditingRequestHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysConfigAuditingRequestHeadersHeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysConfigAuditingRequestHeadersHeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysConfigAuditingRequestHeadersHeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysConfigControlGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysConfigControlGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysConfigControlGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysConfigCorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysConfigCorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysConfigCorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysConfigGroupPolicyApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysConfigGroupPolicyApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysConfigReloadSubsystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysConfigStateSanitizedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysConfigUiHeadersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysConfigUiHeadersHeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysConfigUiHeadersHeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysConfigUiHeadersHeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysControlGroupAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysControlGroupRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysDecodeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysGenerateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysGenerateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysGenerateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysGenerateRootAttemptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysGenerateRootAttemptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysGenerateRootAttemptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysGenerateRootUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysHaStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysHostInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInFlightReqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalCountersActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalCountersActivityExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalCountersActivityMonthlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalCountersConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysInternalCountersConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalCountersEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalCountersRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalCountersTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalInspectRouterTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalSpecsOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysInternalSpecsOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalUiFeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalUiMountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalUiMountsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalUiNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysInternalUiResultantAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysKeyStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysLeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysLeasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysLeasesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLeasesLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysLeasesLookupPrefixIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLeasesRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLeasesRenewUrlLeaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLeasesRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLeasesRevokeForcePrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLeasesRevokePrefixPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLeasesRevokeUrlLeaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLeasesTidyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysLicenseStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysLockedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLockedUsersMountAccessorUnlockAliasIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysLoggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLoggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysLoggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysLoggersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysLoggersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysLoggersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysManagedKeysTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysManagedKeysTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysManagedKeysTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysManagedKeysTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysManagedKeysTypeNameTestSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMfaMethodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMfaMethodDuoNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysMfaMethodDuoNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysMfaMethodDuoNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMfaMethodOktaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysMfaMethodOktaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysMfaMethodOktaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMfaMethodPingidNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysMfaMethodPingidNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysMfaMethodPingidNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMfaMethodTotpNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysMfaMethodTotpNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysMfaMethodTotpNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysMfaMethodTotpNameAdminDestroyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysMfaMethodTotpNameAdminGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMfaMethodTotpNameGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysMfaValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMountsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysMountsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysMountsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysMountsPathTuneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysMountsPathTuneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysNamespacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysNamespacesApiLockLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysNamespacesApiLockLockPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysNamespacesApiLockUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysNamespacesApiLockUnlockPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysNamespacesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysNamespacesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysNamespacesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPluginsCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPluginsCatalogNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysPluginsCatalogNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysPluginsCatalogNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPluginsCatalogTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPluginsCatalogTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysPluginsCatalogTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysPluginsCatalogTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysPluginsReloadBackendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPluginsReloadBackendStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPluginsRuntimesCatalogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPluginsRuntimesCatalogTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysPluginsRuntimesCatalogTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysPluginsRuntimesCatalogTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPoliciesAclIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPoliciesAclNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysPoliciesAclNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysPoliciesAclNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPoliciesEgpIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPoliciesEgpNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysPoliciesEgpNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysPoliciesEgpNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPoliciesPasswordIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPoliciesPasswordNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysPoliciesPasswordNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysPoliciesPasswordNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPoliciesPasswordNameGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPoliciesRgpIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPoliciesRgpNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysPoliciesRgpNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysPoliciesRgpNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPolicyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofAllocsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofCmdlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofGoroutineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofHeapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofMutexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofSymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofThreadcreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysPprofTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysQuotasConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysQuotasConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysQuotasLeaseCountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysQuotasLeaseCountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysQuotasLeaseCountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysQuotasLeaseCountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysQuotasRateLimitIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysQuotasRateLimitNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysQuotasRateLimitNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysQuotasRateLimitNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysRawPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRawPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysRawPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysRawPathIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysRekeyBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysRekeyBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysRekeyInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRekeyInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysRekeyInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysRekeyRecoveryKeyBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysRekeyRecoveryKeyBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRekeyUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysRekeyVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRekeyVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysRekeyVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRemountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysRemountStatusMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRenewUrlLeaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrPrimaryDemoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrPrimaryDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrPrimaryEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrPrimaryRevokeSecondaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrPrimarySecondaryTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrSecondaryConfigReloadSubsystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrSecondaryDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrSecondaryEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrSecondaryGeneratePublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysReplicationDrSecondaryLicenseStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrSecondaryOperationTokenDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrSecondaryPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrSecondaryRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrSecondaryReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationDrSecondaryUpdatePrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysReplicationDrStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformancePrimaryDemoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformancePrimaryDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysReplicationPerformancePrimaryDynamicFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformancePrimaryEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysReplicationPerformancePrimaryPathsFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformancePrimaryPathsFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysReplicationPerformancePrimaryPathsFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformancePrimaryRevokeSecondaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformancePrimarySecondaryTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformanceSecondaryDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysReplicationPerformanceSecondaryDynamicFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformanceSecondaryEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformanceSecondaryGeneratePublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformanceSecondaryPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPerformanceSecondaryUpdatePrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysReplicationPerformanceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPrimaryDemoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPrimaryDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPrimaryEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPrimaryRevokeSecondaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationPrimarySecondaryTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationSecondaryDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationSecondaryEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationSecondaryPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysReplicationSecondaryUpdatePrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysReplicationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRevokeForcePrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRevokePrefixPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRevokeUrlLeaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysRotateConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysRotateConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysSealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysSealStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysSealwrapRewrapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysSealwrapRewrapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysStepDownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysStorageRaftSnapshotAutoConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysStorageRaftSnapshotAutoConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysStorageRaftSnapshotAutoConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSysStorageRaftSnapshotAutoConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysStorageRaftSnapshotAutoStatusNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysToolsHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysToolsHashUrlalgorithmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysToolsRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysToolsRandomSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysToolsRandomSourceUrlbytesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysToolsRandomUrlbytesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysUnsealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysVersionHistoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSysWrappingLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysWrappingLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysWrappingRewrapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysWrappingUnwrapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSysWrappingWrapRoute, (c) => {
    throw new Error('Not implemented')
  })
