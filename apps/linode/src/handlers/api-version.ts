import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiVersionAccountEntityTransfersTokenRoute,
  deleteApiVersionAccountOauthClientsClientIdRoute,
  deleteApiVersionAccountPaymentMethodsPaymentMethodIdRoute,
  deleteApiVersionAccountServiceTransfersTokenRoute,
  deleteApiVersionAccountUsersUsernameRoute,
  deleteApiVersionDatabasesMysqlInstancesInstanceIdRoute,
  deleteApiVersionDatabasesPostgresqlInstancesInstanceIdRoute,
  deleteApiVersionDomainsDomainIdRecordsRecordIdRoute,
  deleteApiVersionDomainsDomainIdRoute,
  deleteApiVersionImagesImageIdRoute,
  deleteApiVersionImagesSharegroupsSharegroupIdImagesImageIdRoute,
  deleteApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute,
  deleteApiVersionImagesSharegroupsSharegroupIdRoute,
  deleteApiVersionImagesSharegroupsTokensTokenUuidRoute,
  deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute,
  deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute,
  deleteApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute,
  deleteApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute,
  deleteApiVersionLinodeInstancesLinodeIdIpsAddressRoute,
  deleteApiVersionLinodeInstancesLinodeIdRoute,
  deleteApiVersionLinodeStackscriptsStackscriptIdRoute,
  deleteApiVersionLkeClustersClusterIdControlPlaneAclRoute,
  deleteApiVersionLkeClustersClusterIdKubeconfigRoute,
  deleteApiVersionLkeClustersClusterIdNodesNodeIdRoute,
  deleteApiVersionLkeClustersClusterIdPoolsPoolIdRoute,
  deleteApiVersionLkeClustersClusterIdRoute,
  deleteApiVersionLkeClustersClusterIdServicetokenRoute,
  deleteApiVersionLongviewClientsClientIdRoute,
  deleteApiVersionManagedContactsContactIdRoute,
  deleteApiVersionManagedServicesServiceIdRoute,
  deleteApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute,
  deleteApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRoute,
  deleteApiVersionNetworkingFirewallsFirewallIdRoute,
  deleteApiVersionNetworkingIpv6RangesRangeRoute,
  deleteApiVersionNetworkingVlansRegionIdLabelRoute,
  deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  deleteApiVersionNodebalancersNodeBalancerIdRoute,
  deleteApiVersionObjectStorageBucketsRegionIdBucketRoute,
  deleteApiVersionObjectStorageBucketsRegionIdBucketSslRoute,
  deleteApiVersionObjectStorageKeysKeyIdRoute,
  deleteApiVersionPlacementGroupsGroupIdRoute,
  deleteApiVersionProfileAppsAppIdRoute,
  deleteApiVersionProfileDevicesDeviceIdRoute,
  deleteApiVersionProfilePhoneNumberRoute,
  deleteApiVersionProfileSshkeysSshKeyIdRoute,
  deleteApiVersionProfileTokensTokenIdRoute,
  deleteApiVersionTagsTagLabelRoute,
  deleteApiVersionVolumesVolumeIdRoute,
  deleteApiVersionVpcsVpcIdRoute,
  deleteApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute,
  getApiVersionAccountAgreementsRoute,
  getApiVersionAccountAvailabilityRegionIdRoute,
  getApiVersionAccountAvailabilityRoute,
  getApiVersionAccountBetasBetaIdRoute,
  getApiVersionAccountBetasRoute,
  getApiVersionAccountChildAccountsEuuIdRoute,
  getApiVersionAccountChildAccountsRoute,
  getApiVersionAccountEntityTransfersRoute,
  getApiVersionAccountEntityTransfersTokenRoute,
  getApiVersionAccountEventsEventIdRoute,
  getApiVersionAccountEventsRoute,
  getApiVersionAccountInvoicesInvoiceIdItemsRoute,
  getApiVersionAccountInvoicesInvoiceIdRoute,
  getApiVersionAccountInvoicesRoute,
  getApiVersionAccountLoginsLoginIdRoute,
  getApiVersionAccountLoginsRoute,
  getApiVersionAccountMaintenanceRoute,
  getApiVersionAccountNotificationsRoute,
  getApiVersionAccountOauthClientsClientIdRoute,
  getApiVersionAccountOauthClientsClientIdThumbnailRoute,
  getApiVersionAccountOauthClientsRoute,
  getApiVersionAccountPaymentMethodsPaymentMethodIdRoute,
  getApiVersionAccountPaymentMethodsRoute,
  getApiVersionAccountPaymentsPaymentIdRoute,
  getApiVersionAccountPaymentsRoute,
  getApiVersionAccountRoute,
  getApiVersionAccountServiceTransfersRoute,
  getApiVersionAccountServiceTransfersTokenRoute,
  getApiVersionAccountSettingsRoute,
  getApiVersionAccountTransferRoute,
  getApiVersionAccountUsersRoute,
  getApiVersionAccountUsersUsernameGrantsRoute,
  getApiVersionAccountUsersUsernameRoute,
  getApiVersionBetasBetaIdRoute,
  getApiVersionBetasRoute,
  getApiVersionDatabasesEnginesEngineIdRoute,
  getApiVersionDatabasesEnginesRoute,
  getApiVersionDatabasesInstancesRoute,
  getApiVersionDatabasesMysqlConfigRoute,
  getApiVersionDatabasesMysqlInstancesInstanceIdCredentialsRoute,
  getApiVersionDatabasesMysqlInstancesInstanceIdRoute,
  getApiVersionDatabasesMysqlInstancesInstanceIdSslRoute,
  getApiVersionDatabasesMysqlInstancesRoute,
  getApiVersionDatabasesPostgresqlConfigRoute,
  getApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsRoute,
  getApiVersionDatabasesPostgresqlInstancesInstanceIdRoute,
  getApiVersionDatabasesPostgresqlInstancesInstanceIdSslRoute,
  getApiVersionDatabasesPostgresqlInstancesRoute,
  getApiVersionDatabasesTypesRoute,
  getApiVersionDatabasesTypesTypeIdRoute,
  getApiVersionDomainsDomainIdRecordsRecordIdRoute,
  getApiVersionDomainsDomainIdRecordsRoute,
  getApiVersionDomainsDomainIdRoute,
  getApiVersionDomainsDomainIdZoneFileRoute,
  getApiVersionDomainsRoute,
  getApiVersionImagesImageIdRoute,
  getApiVersionImagesImageIdSharegroupsRoute,
  getApiVersionImagesRoute,
  getApiVersionImagesSharegroupsRoute,
  getApiVersionImagesSharegroupsSharegroupIdImagesRoute,
  getApiVersionImagesSharegroupsSharegroupIdMembersRoute,
  getApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute,
  getApiVersionImagesSharegroupsSharegroupIdRoute,
  getApiVersionImagesSharegroupsTokensRoute,
  getApiVersionImagesSharegroupsTokensTokenUuidRoute,
  getApiVersionImagesSharegroupsTokensTokenUuidSharegroupImagesRoute,
  getApiVersionImagesSharegroupsTokensTokenUuidSharegroupRoute,
  getApiVersionLinodeInstancesLinodeIdBackupsBackupIdRoute,
  getApiVersionLinodeInstancesLinodeIdBackupsRoute,
  getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute,
  getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRoute,
  getApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute,
  getApiVersionLinodeInstancesLinodeIdConfigsRoute,
  getApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute,
  getApiVersionLinodeInstancesLinodeIdDisksRoute,
  getApiVersionLinodeInstancesLinodeIdFirewallsRoute,
  getApiVersionLinodeInstancesLinodeIdInterfacesHistoryRoute,
  getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewallsRoute,
  getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute,
  getApiVersionLinodeInstancesLinodeIdInterfacesRoute,
  getApiVersionLinodeInstancesLinodeIdInterfacesSettingsRoute,
  getApiVersionLinodeInstancesLinodeIdIpsAddressRoute,
  getApiVersionLinodeInstancesLinodeIdIpsRoute,
  getApiVersionLinodeInstancesLinodeIdNodebalancersRoute,
  getApiVersionLinodeInstancesLinodeIdRoute,
  getApiVersionLinodeInstancesLinodeIdStatsRoute,
  getApiVersionLinodeInstancesLinodeIdStatsYearMonthRoute,
  getApiVersionLinodeInstancesLinodeIdTransferRoute,
  getApiVersionLinodeInstancesLinodeIdTransferYearMonthRoute,
  getApiVersionLinodeInstancesLinodeIdVolumesRoute,
  getApiVersionLinodeInstancesRoute,
  getApiVersionLinodeKernelsKernelIdRoute,
  getApiVersionLinodeKernelsRoute,
  getApiVersionLinodeStackscriptsRoute,
  getApiVersionLinodeStackscriptsStackscriptIdRoute,
  getApiVersionLinodeTypesRoute,
  getApiVersionLinodeTypesTypeIdRoute,
  getApiVersionLkeClustersClusterIdApiEndpointsRoute,
  getApiVersionLkeClustersClusterIdControlPlaneAclRoute,
  getApiVersionLkeClustersClusterIdDashboardRoute,
  getApiVersionLkeClustersClusterIdKubeconfigRoute,
  getApiVersionLkeClustersClusterIdNodesNodeIdRoute,
  getApiVersionLkeClustersClusterIdPoolsPoolIdRoute,
  getApiVersionLkeClustersClusterIdPoolsRoute,
  getApiVersionLkeClustersClusterIdRoute,
  getApiVersionLkeClustersRoute,
  getApiVersionLkeTiersTierVersionsRoute,
  getApiVersionLkeTiersTierVersionsVersionRoute,
  getApiVersionLkeTypesRoute,
  getApiVersionLkeVersionsRoute,
  getApiVersionLkeVersionsVersionRoute,
  getApiVersionLongviewClientsClientIdRoute,
  getApiVersionLongviewClientsRoute,
  getApiVersionLongviewPlanRoute,
  getApiVersionLongviewSubscriptionsRoute,
  getApiVersionLongviewSubscriptionsSubscriptionIdRoute,
  getApiVersionLongviewTypesRoute,
  getApiVersionMaintenancePoliciesRoute,
  getApiVersionManagedContactsContactIdRoute,
  getApiVersionManagedContactsRoute,
  getApiVersionManagedCredentialsCredentialIdRoute,
  getApiVersionManagedCredentialsRoute,
  getApiVersionManagedCredentialsSshkeyRoute,
  getApiVersionManagedIssuesIssueIdRoute,
  getApiVersionManagedIssuesRoute,
  getApiVersionManagedLinodeSettingsLinodeIdRoute,
  getApiVersionManagedLinodeSettingsRoute,
  getApiVersionManagedServicesRoute,
  getApiVersionManagedServicesServiceIdRoute,
  getApiVersionManagedStatsRoute,
  getApiVersionMonitorAlertChannelsRoute,
  getApiVersionMonitorAlertDefinitionsRoute,
  getApiVersionMonitorDashboardsDashboardIdRoute,
  getApiVersionMonitorDashboardsRoute,
  getApiVersionMonitorServicesRoute,
  getApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute,
  getApiVersionMonitorServicesServiceTypeAlertDefinitionsRoute,
  getApiVersionMonitorServicesServiceTypeDashboardsRoute,
  getApiVersionMonitorServicesServiceTypeMetricDefinitionsRoute,
  getApiVersionMonitorServicesServiceTypeRoute,
  getApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRoute,
  getApiVersionNetworkingFirewallsFirewallIdDevicesRoute,
  getApiVersionNetworkingFirewallsFirewallIdHistoryRoute,
  getApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersionRoute,
  getApiVersionNetworkingFirewallsFirewallIdRoute,
  getApiVersionNetworkingFirewallsFirewallIdRulesRoute,
  getApiVersionNetworkingFirewallsRoute,
  getApiVersionNetworkingFirewallsSettingsRoute,
  getApiVersionNetworkingFirewallsTemplatesRoute,
  getApiVersionNetworkingFirewallsTemplatesSlugRoute,
  getApiVersionNetworkingIpsAddressRoute,
  getApiVersionNetworkingIpsRoute,
  getApiVersionNetworkingIpv6PoolsRoute,
  getApiVersionNetworkingIpv6RangesRangeRoute,
  getApiVersionNetworkingIpv6RangesRoute,
  getApiVersionNetworkingVlansRoute,
  getApiVersionNetworkTransferPricesRoute,
  getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute,
  getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  getApiVersionNodebalancersNodeBalancerIdConfigsRoute,
  getApiVersionNodebalancersNodeBalancerIdFirewallsRoute,
  getApiVersionNodebalancersNodeBalancerIdRoute,
  getApiVersionNodebalancersNodeBalancerIdStatsRoute,
  getApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigIdRoute,
  getApiVersionNodebalancersNodeBalancerIdVpcsRoute,
  getApiVersionNodebalancersRoute,
  getApiVersionNodebalancersTypesRoute,
  getApiVersionObjectStorageBucketsRegionIdBucketAccessRoute,
  getApiVersionObjectStorageBucketsRegionIdBucketObjectAclRoute,
  getApiVersionObjectStorageBucketsRegionIdBucketObjectListRoute,
  getApiVersionObjectStorageBucketsRegionIdBucketRoute,
  getApiVersionObjectStorageBucketsRegionIdBucketSslRoute,
  getApiVersionObjectStorageBucketsRegionIdRoute,
  getApiVersionObjectStorageBucketsRoute,
  getApiVersionObjectStorageClustersClusterIdRoute,
  getApiVersionObjectStorageClustersRoute,
  getApiVersionObjectStorageEndpointsRoute,
  getApiVersionObjectStorageKeysKeyIdRoute,
  getApiVersionObjectStorageKeysRoute,
  getApiVersionObjectStorageQuotasObjQuotaIdRoute,
  getApiVersionObjectStorageQuotasObjQuotaIdUsageRoute,
  getApiVersionObjectStorageQuotasRoute,
  getApiVersionObjectStorageTransferRoute,
  getApiVersionObjectStorageTypesRoute,
  getApiVersionPlacementGroupsGroupIdRoute,
  getApiVersionPlacementGroupsRoute,
  getApiVersionProfileAppsAppIdRoute,
  getApiVersionProfileAppsRoute,
  getApiVersionProfileDevicesDeviceIdRoute,
  getApiVersionProfileDevicesRoute,
  getApiVersionProfileGrantsRoute,
  getApiVersionProfileLoginsLoginIdRoute,
  getApiVersionProfileLoginsRoute,
  getApiVersionProfilePreferencesRoute,
  getApiVersionProfileRoute,
  getApiVersionProfileSecurityQuestionsRoute,
  getApiVersionProfileSshkeysRoute,
  getApiVersionProfileSshkeysSshKeyIdRoute,
  getApiVersionProfileTokensRoute,
  getApiVersionProfileTokensTokenIdRoute,
  getApiVersionRegionsAvailabilityRoute,
  getApiVersionRegionsRegionIdAvailabilityRoute,
  getApiVersionRegionsRegionIdRoute,
  getApiVersionRegionsRoute,
  getApiVersionSupportTicketsRoute,
  getApiVersionSupportTicketsTicketIdRepliesRoute,
  getApiVersionSupportTicketsTicketIdRoute,
  getApiVersionTagsRoute,
  getApiVersionTagsTagLabelRoute,
  getApiVersionVolumesRoute,
  getApiVersionVolumesTypesRoute,
  getApiVersionVolumesVolumeIdRoute,
  getApiVersionVpcsIpsRoute,
  getApiVersionVpcsRoute,
  getApiVersionVpcsVpcIdIpsRoute,
  getApiVersionVpcsVpcIdRoute,
  getApiVersionVpcsVpcIdSubnetsRoute,
  getApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute,
  postApiVersionAccountAgreementsRoute,
  postApiVersionAccountBetasRoute,
  postApiVersionAccountCancelRoute,
  postApiVersionAccountChildAccountsEuuIdTokenRoute,
  postApiVersionAccountCreditCardRoute,
  postApiVersionAccountEntityTransfersRoute,
  postApiVersionAccountEntityTransfersTokenAcceptRoute,
  postApiVersionAccountEventsEventIdSeenRoute,
  postApiVersionAccountOauthClientsClientIdResetSecretRoute,
  postApiVersionAccountOauthClientsRoute,
  postApiVersionAccountPaymentMethodsPaymentMethodIdMakeDefaultRoute,
  postApiVersionAccountPaymentMethodsRoute,
  postApiVersionAccountPaymentsPaypalExecuteRoute,
  postApiVersionAccountPaymentsPaypalRoute,
  postApiVersionAccountPaymentsRoute,
  postApiVersionAccountPromoCodesRoute,
  postApiVersionAccountServiceTransfersRoute,
  postApiVersionAccountServiceTransfersTokenAcceptRoute,
  postApiVersionAccountSettingsManagedEnableRoute,
  postApiVersionAccountUsersRoute,
  postApiVersionDatabasesMysqlInstancesInstanceIdCredentialsResetRoute,
  postApiVersionDatabasesMysqlInstancesInstanceIdPatchRoute,
  postApiVersionDatabasesMysqlInstancesInstanceIdResumeRoute,
  postApiVersionDatabasesMysqlInstancesInstanceIdSuspendRoute,
  postApiVersionDatabasesMysqlInstancesRoute,
  postApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsResetRoute,
  postApiVersionDatabasesPostgresqlInstancesInstanceIdPatchRoute,
  postApiVersionDatabasesPostgresqlInstancesInstanceIdResumeRoute,
  postApiVersionDatabasesPostgresqlInstancesInstanceIdSuspendRoute,
  postApiVersionDatabasesPostgresqlInstancesRoute,
  postApiVersionDomainsDomainIdCloneRoute,
  postApiVersionDomainsDomainIdRecordsRoute,
  postApiVersionDomainsImportRoute,
  postApiVersionDomainsRoute,
  postApiVersionImagesImageIdRegionsRoute,
  postApiVersionImagesRoute,
  postApiVersionImagesSharegroupsRoute,
  postApiVersionImagesSharegroupsSharegroupIdImagesRoute,
  postApiVersionImagesSharegroupsSharegroupIdMembersRoute,
  postApiVersionImagesSharegroupsTokensRoute,
  postApiVersionImagesUploadRoute,
  postApiVersionLinodeInstancesLinodeIdBackupsBackupIdRestoreRoute,
  postApiVersionLinodeInstancesLinodeIdBackupsCancelRoute,
  postApiVersionLinodeInstancesLinodeIdBackupsEnableRoute,
  postApiVersionLinodeInstancesLinodeIdBackupsRoute,
  postApiVersionLinodeInstancesLinodeIdBootRoute,
  postApiVersionLinodeInstancesLinodeIdCloneRoute,
  postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesOrderRoute,
  postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRoute,
  postApiVersionLinodeInstancesLinodeIdConfigsRoute,
  postApiVersionLinodeInstancesLinodeIdDisksDiskIdCloneRoute,
  postApiVersionLinodeInstancesLinodeIdDisksDiskIdPasswordRoute,
  postApiVersionLinodeInstancesLinodeIdDisksDiskIdResizeRoute,
  postApiVersionLinodeInstancesLinodeIdDisksRoute,
  postApiVersionLinodeInstancesLinodeIdFirewallsApplyRoute,
  postApiVersionLinodeInstancesLinodeIdInterfacesRoute,
  postApiVersionLinodeInstancesLinodeIdIpsRoute,
  postApiVersionLinodeInstancesLinodeIdMigrateRoute,
  postApiVersionLinodeInstancesLinodeIdMutateRoute,
  postApiVersionLinodeInstancesLinodeIdPasswordRoute,
  postApiVersionLinodeInstancesLinodeIdRebootRoute,
  postApiVersionLinodeInstancesLinodeIdRebuildRoute,
  postApiVersionLinodeInstancesLinodeIdRescueRoute,
  postApiVersionLinodeInstancesLinodeIdResizeRoute,
  postApiVersionLinodeInstancesLinodeIdShutdownRoute,
  postApiVersionLinodeInstancesLinodeIdUpgradeInterfacesRoute,
  postApiVersionLinodeInstancesRoute,
  postApiVersionLinodeStackscriptsRoute,
  postApiVersionLkeClustersClusterIdNodesNodeIdRecycleRoute,
  postApiVersionLkeClustersClusterIdPoolsPoolIdRecycleRoute,
  postApiVersionLkeClustersClusterIdPoolsRoute,
  postApiVersionLkeClustersClusterIdRecycleRoute,
  postApiVersionLkeClustersClusterIdRegenerateRoute,
  postApiVersionLkeClustersRoute,
  postApiVersionLongviewClientsRoute,
  postApiVersionManagedContactsRoute,
  postApiVersionManagedCredentialsCredentialIdRevokeRoute,
  postApiVersionManagedCredentialsCredentialIdUpdateRoute,
  postApiVersionManagedCredentialsRoute,
  postApiVersionManagedServicesRoute,
  postApiVersionManagedServicesServiceIdDisableRoute,
  postApiVersionManagedServicesServiceIdEnableRoute,
  postApiVersionMonitorServicesServiceTypeAlertDefinitionsRoute,
  postApiVersionMonitorServicesServiceTypeMetricsRoute,
  postApiVersionMonitorServicesServiceTypeTokenRoute,
  postApiVersionNetworkingFirewallsFirewallIdDevicesRoute,
  postApiVersionNetworkingFirewallsRoute,
  postApiVersionNetworkingIpsAssignRoute,
  postApiVersionNetworkingIpsRoute,
  postApiVersionNetworkingIpsShareRoute,
  postApiVersionNetworkingIpv4AssignRoute,
  postApiVersionNetworkingIpv4ShareRoute,
  postApiVersionNetworkingIpv6RangesRoute,
  postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute,
  postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRebuildRoute,
  postApiVersionNodebalancersNodeBalancerIdConfigsRoute,
  postApiVersionNodebalancersRoute,
  postApiVersionObjectStorageBucketsRegionIdBucketAccessRoute,
  postApiVersionObjectStorageBucketsRegionIdBucketObjectUrlRoute,
  postApiVersionObjectStorageBucketsRegionIdBucketSslRoute,
  postApiVersionObjectStorageBucketsRoute,
  postApiVersionObjectStorageCancelRoute,
  postApiVersionObjectStorageKeysRoute,
  postApiVersionPlacementGroupsGroupIdAssignRoute,
  postApiVersionPlacementGroupsGroupIdUnassignRoute,
  postApiVersionPlacementGroupsRoute,
  postApiVersionProfilePhoneNumberRoute,
  postApiVersionProfilePhoneNumberVerifyRoute,
  postApiVersionProfileSecurityQuestionsRoute,
  postApiVersionProfileSshkeysRoute,
  postApiVersionProfileTfaDisableRoute,
  postApiVersionProfileTfaEnableConfirmRoute,
  postApiVersionProfileTfaEnableRoute,
  postApiVersionProfileTokensRoute,
  postApiVersionSupportTicketsRoute,
  postApiVersionSupportTicketsTicketIdAttachmentsRoute,
  postApiVersionSupportTicketsTicketIdCloseRoute,
  postApiVersionSupportTicketsTicketIdRepliesRoute,
  postApiVersionTagsRoute,
  postApiVersionVolumesRoute,
  postApiVersionVolumesVolumeIdAttachRoute,
  postApiVersionVolumesVolumeIdCloneRoute,
  postApiVersionVolumesVolumeIdDetachRoute,
  postApiVersionVolumesVolumeIdResizeRoute,
  postApiVersionVpcsRoute,
  postApiVersionVpcsVpcIdSubnetsRoute,
  putApiVersionAccountOauthClientsClientIdRoute,
  putApiVersionAccountOauthClientsClientIdThumbnailRoute,
  putApiVersionAccountRoute,
  putApiVersionAccountSettingsRoute,
  putApiVersionAccountUsersUsernameGrantsRoute,
  putApiVersionAccountUsersUsernameRoute,
  putApiVersionDatabasesMysqlInstancesInstanceIdRoute,
  putApiVersionDatabasesPostgresqlInstancesInstanceIdRoute,
  putApiVersionDomainsDomainIdRecordsRecordIdRoute,
  putApiVersionDomainsDomainIdRoute,
  putApiVersionImagesImageIdRoute,
  putApiVersionImagesSharegroupsSharegroupIdImagesImageIdRoute,
  putApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute,
  putApiVersionImagesSharegroupsSharegroupIdRoute,
  putApiVersionImagesSharegroupsTokensTokenUuidRoute,
  putApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute,
  putApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute,
  putApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute,
  putApiVersionLinodeInstancesLinodeIdFirewallsRoute,
  putApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute,
  putApiVersionLinodeInstancesLinodeIdInterfacesSettingsRoute,
  putApiVersionLinodeInstancesLinodeIdIpsAddressRoute,
  putApiVersionLinodeInstancesLinodeIdRoute,
  putApiVersionLinodeStackscriptsStackscriptIdRoute,
  putApiVersionLkeClustersClusterIdControlPlaneAclRoute,
  putApiVersionLkeClustersClusterIdPoolsPoolIdRoute,
  putApiVersionLkeClustersClusterIdRoute,
  putApiVersionLongviewClientsClientIdRoute,
  putApiVersionLongviewPlanRoute,
  putApiVersionManagedContactsContactIdRoute,
  putApiVersionManagedCredentialsCredentialIdRoute,
  putApiVersionManagedLinodeSettingsLinodeIdRoute,
  putApiVersionManagedServicesServiceIdRoute,
  putApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute,
  putApiVersionNetworkingFirewallsFirewallIdRoute,
  putApiVersionNetworkingFirewallsFirewallIdRulesRoute,
  putApiVersionNetworkingFirewallsSettingsRoute,
  putApiVersionNetworkingIpsAddressRoute,
  putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  putApiVersionNodebalancersNodeBalancerIdFirewallsRoute,
  putApiVersionNodebalancersNodeBalancerIdRoute,
  putApiVersionObjectStorageBucketsRegionIdBucketAccessRoute,
  putApiVersionObjectStorageBucketsRegionIdBucketObjectAclRoute,
  putApiVersionObjectStorageKeysKeyIdRoute,
  putApiVersionPlacementGroupsGroupIdRoute,
  putApiVersionProfilePreferencesRoute,
  putApiVersionProfileRoute,
  putApiVersionProfileSshkeysSshKeyIdRoute,
  putApiVersionProfileTokensTokenIdRoute,
  putApiVersionVolumesVolumeIdRoute,
  putApiVersionVpcsVpcIdRoute,
  putApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute,
} from '../routes'

export const getApiVersionAccountRouteHandler: RouteHandler<
  typeof getApiVersionAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionAccountRouteHandler: RouteHandler<
  typeof putApiVersionAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountAgreementsRouteHandler: RouteHandler<
  typeof postApiVersionAccountAgreementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountAgreementsRouteHandler: RouteHandler<
  typeof getApiVersionAccountAgreementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountAvailabilityRouteHandler: RouteHandler<
  typeof getApiVersionAccountAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountAvailabilityRegionIdRouteHandler: RouteHandler<
  typeof getApiVersionAccountAvailabilityRegionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountBetasRouteHandler: RouteHandler<
  typeof postApiVersionAccountBetasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountBetasRouteHandler: RouteHandler<
  typeof getApiVersionAccountBetasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountBetasBetaIdRouteHandler: RouteHandler<
  typeof getApiVersionAccountBetasBetaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountCancelRouteHandler: RouteHandler<
  typeof postApiVersionAccountCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountChildAccountsRouteHandler: RouteHandler<
  typeof getApiVersionAccountChildAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountChildAccountsEuuIdRouteHandler: RouteHandler<
  typeof getApiVersionAccountChildAccountsEuuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountChildAccountsEuuIdTokenRouteHandler: RouteHandler<
  typeof postApiVersionAccountChildAccountsEuuIdTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountCreditCardRouteHandler: RouteHandler<
  typeof postApiVersionAccountCreditCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountEntityTransfersRouteHandler: RouteHandler<
  typeof postApiVersionAccountEntityTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountEntityTransfersRouteHandler: RouteHandler<
  typeof getApiVersionAccountEntityTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountEntityTransfersTokenRouteHandler: RouteHandler<
  typeof getApiVersionAccountEntityTransfersTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionAccountEntityTransfersTokenRouteHandler: RouteHandler<
  typeof deleteApiVersionAccountEntityTransfersTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountEntityTransfersTokenAcceptRouteHandler: RouteHandler<
  typeof postApiVersionAccountEntityTransfersTokenAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountEventsRouteHandler: RouteHandler<
  typeof getApiVersionAccountEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountEventsEventIdRouteHandler: RouteHandler<
  typeof getApiVersionAccountEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountEventsEventIdSeenRouteHandler: RouteHandler<
  typeof postApiVersionAccountEventsEventIdSeenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountInvoicesRouteHandler: RouteHandler<
  typeof getApiVersionAccountInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof getApiVersionAccountInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountInvoicesInvoiceIdItemsRouteHandler: RouteHandler<
  typeof getApiVersionAccountInvoicesInvoiceIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountLoginsRouteHandler: RouteHandler<
  typeof getApiVersionAccountLoginsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountLoginsLoginIdRouteHandler: RouteHandler<
  typeof getApiVersionAccountLoginsLoginIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountMaintenanceRouteHandler: RouteHandler<
  typeof getApiVersionAccountMaintenanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountNotificationsRouteHandler: RouteHandler<
  typeof getApiVersionAccountNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountOauthClientsRouteHandler: RouteHandler<
  typeof postApiVersionAccountOauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountOauthClientsRouteHandler: RouteHandler<
  typeof getApiVersionAccountOauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountOauthClientsClientIdRouteHandler: RouteHandler<
  typeof getApiVersionAccountOauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionAccountOauthClientsClientIdRouteHandler: RouteHandler<
  typeof putApiVersionAccountOauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionAccountOauthClientsClientIdRouteHandler: RouteHandler<
  typeof deleteApiVersionAccountOauthClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountOauthClientsClientIdResetSecretRouteHandler: RouteHandler<
  typeof postApiVersionAccountOauthClientsClientIdResetSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountOauthClientsClientIdThumbnailRouteHandler: RouteHandler<
  typeof getApiVersionAccountOauthClientsClientIdThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionAccountOauthClientsClientIdThumbnailRouteHandler: RouteHandler<
  typeof putApiVersionAccountOauthClientsClientIdThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountPaymentMethodsRouteHandler: RouteHandler<
  typeof postApiVersionAccountPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountPaymentMethodsRouteHandler: RouteHandler<
  typeof getApiVersionAccountPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountPaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof getApiVersionAccountPaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionAccountPaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof deleteApiVersionAccountPaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountPaymentMethodsPaymentMethodIdMakeDefaultRouteHandler: RouteHandler<
  typeof postApiVersionAccountPaymentMethodsPaymentMethodIdMakeDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountPaymentsRouteHandler: RouteHandler<
  typeof postApiVersionAccountPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountPaymentsRouteHandler: RouteHandler<
  typeof getApiVersionAccountPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountPaymentsPaypalRouteHandler: RouteHandler<
  typeof postApiVersionAccountPaymentsPaypalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountPaymentsPaypalExecuteRouteHandler: RouteHandler<
  typeof postApiVersionAccountPaymentsPaypalExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountPaymentsPaymentIdRouteHandler: RouteHandler<
  typeof getApiVersionAccountPaymentsPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountPromoCodesRouteHandler: RouteHandler<
  typeof postApiVersionAccountPromoCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountServiceTransfersRouteHandler: RouteHandler<
  typeof postApiVersionAccountServiceTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountServiceTransfersRouteHandler: RouteHandler<
  typeof getApiVersionAccountServiceTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountServiceTransfersTokenRouteHandler: RouteHandler<
  typeof getApiVersionAccountServiceTransfersTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionAccountServiceTransfersTokenRouteHandler: RouteHandler<
  typeof deleteApiVersionAccountServiceTransfersTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountServiceTransfersTokenAcceptRouteHandler: RouteHandler<
  typeof postApiVersionAccountServiceTransfersTokenAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountSettingsRouteHandler: RouteHandler<
  typeof getApiVersionAccountSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionAccountSettingsRouteHandler: RouteHandler<
  typeof putApiVersionAccountSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountSettingsManagedEnableRouteHandler: RouteHandler<
  typeof postApiVersionAccountSettingsManagedEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountTransferRouteHandler: RouteHandler<
  typeof getApiVersionAccountTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionAccountUsersRouteHandler: RouteHandler<
  typeof postApiVersionAccountUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountUsersRouteHandler: RouteHandler<
  typeof getApiVersionAccountUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountUsersUsernameRouteHandler: RouteHandler<
  typeof getApiVersionAccountUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionAccountUsersUsernameRouteHandler: RouteHandler<
  typeof putApiVersionAccountUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionAccountUsersUsernameRouteHandler: RouteHandler<
  typeof deleteApiVersionAccountUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionAccountUsersUsernameGrantsRouteHandler: RouteHandler<
  typeof getApiVersionAccountUsersUsernameGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionAccountUsersUsernameGrantsRouteHandler: RouteHandler<
  typeof putApiVersionAccountUsersUsernameGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionBetasRouteHandler: RouteHandler<typeof getApiVersionBetasRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiVersionBetasBetaIdRouteHandler: RouteHandler<
  typeof getApiVersionBetasBetaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesEnginesRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesEnginesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesEnginesEngineIdRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesEnginesEngineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesInstancesRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesMysqlConfigRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesMysqlConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDatabasesMysqlInstancesRouteHandler: RouteHandler<
  typeof postApiVersionDatabasesMysqlInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesMysqlInstancesRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesMysqlInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesMysqlInstancesInstanceIdRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesMysqlInstancesInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionDatabasesMysqlInstancesInstanceIdRouteHandler: RouteHandler<
  typeof putApiVersionDatabasesMysqlInstancesInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionDatabasesMysqlInstancesInstanceIdRouteHandler: RouteHandler<
  typeof deleteApiVersionDatabasesMysqlInstancesInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesMysqlInstancesInstanceIdCredentialsRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesMysqlInstancesInstanceIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDatabasesMysqlInstancesInstanceIdCredentialsResetRouteHandler: RouteHandler<
  typeof postApiVersionDatabasesMysqlInstancesInstanceIdCredentialsResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDatabasesMysqlInstancesInstanceIdPatchRouteHandler: RouteHandler<
  typeof postApiVersionDatabasesMysqlInstancesInstanceIdPatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDatabasesMysqlInstancesInstanceIdResumeRouteHandler: RouteHandler<
  typeof postApiVersionDatabasesMysqlInstancesInstanceIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesMysqlInstancesInstanceIdSslRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesMysqlInstancesInstanceIdSslRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDatabasesMysqlInstancesInstanceIdSuspendRouteHandler: RouteHandler<
  typeof postApiVersionDatabasesMysqlInstancesInstanceIdSuspendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesPostgresqlConfigRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesPostgresqlConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDatabasesPostgresqlInstancesRouteHandler: RouteHandler<
  typeof postApiVersionDatabasesPostgresqlInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesPostgresqlInstancesRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesPostgresqlInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesPostgresqlInstancesInstanceIdRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesPostgresqlInstancesInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionDatabasesPostgresqlInstancesInstanceIdRouteHandler: RouteHandler<
  typeof putApiVersionDatabasesPostgresqlInstancesInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionDatabasesPostgresqlInstancesInstanceIdRouteHandler: RouteHandler<
  typeof deleteApiVersionDatabasesPostgresqlInstancesInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsResetRouteHandler: RouteHandler<
  typeof postApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDatabasesPostgresqlInstancesInstanceIdPatchRouteHandler: RouteHandler<
  typeof postApiVersionDatabasesPostgresqlInstancesInstanceIdPatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDatabasesPostgresqlInstancesInstanceIdResumeRouteHandler: RouteHandler<
  typeof postApiVersionDatabasesPostgresqlInstancesInstanceIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesPostgresqlInstancesInstanceIdSslRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesPostgresqlInstancesInstanceIdSslRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDatabasesPostgresqlInstancesInstanceIdSuspendRouteHandler: RouteHandler<
  typeof postApiVersionDatabasesPostgresqlInstancesInstanceIdSuspendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesTypesRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDatabasesTypesTypeIdRouteHandler: RouteHandler<
  typeof getApiVersionDatabasesTypesTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDomainsRouteHandler: RouteHandler<
  typeof postApiVersionDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDomainsRouteHandler: RouteHandler<
  typeof getApiVersionDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDomainsImportRouteHandler: RouteHandler<
  typeof postApiVersionDomainsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDomainsDomainIdRouteHandler: RouteHandler<
  typeof getApiVersionDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionDomainsDomainIdRouteHandler: RouteHandler<
  typeof putApiVersionDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionDomainsDomainIdRouteHandler: RouteHandler<
  typeof deleteApiVersionDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDomainsDomainIdCloneRouteHandler: RouteHandler<
  typeof postApiVersionDomainsDomainIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionDomainsDomainIdRecordsRouteHandler: RouteHandler<
  typeof postApiVersionDomainsDomainIdRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDomainsDomainIdRecordsRouteHandler: RouteHandler<
  typeof getApiVersionDomainsDomainIdRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDomainsDomainIdRecordsRecordIdRouteHandler: RouteHandler<
  typeof getApiVersionDomainsDomainIdRecordsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionDomainsDomainIdRecordsRecordIdRouteHandler: RouteHandler<
  typeof putApiVersionDomainsDomainIdRecordsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionDomainsDomainIdRecordsRecordIdRouteHandler: RouteHandler<
  typeof deleteApiVersionDomainsDomainIdRecordsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionDomainsDomainIdZoneFileRouteHandler: RouteHandler<
  typeof getApiVersionDomainsDomainIdZoneFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionImagesRouteHandler: RouteHandler<
  typeof postApiVersionImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesRouteHandler: RouteHandler<
  typeof getApiVersionImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionImagesSharegroupsRouteHandler: RouteHandler<
  typeof postApiVersionImagesSharegroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesSharegroupsRouteHandler: RouteHandler<
  typeof getApiVersionImagesSharegroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionImagesSharegroupsTokensRouteHandler: RouteHandler<
  typeof postApiVersionImagesSharegroupsTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesSharegroupsTokensRouteHandler: RouteHandler<
  typeof getApiVersionImagesSharegroupsTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesSharegroupsTokensTokenUuidRouteHandler: RouteHandler<
  typeof getApiVersionImagesSharegroupsTokensTokenUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionImagesSharegroupsTokensTokenUuidRouteHandler: RouteHandler<
  typeof putApiVersionImagesSharegroupsTokensTokenUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionImagesSharegroupsTokensTokenUuidRouteHandler: RouteHandler<
  typeof deleteApiVersionImagesSharegroupsTokensTokenUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesSharegroupsTokensTokenUuidSharegroupRouteHandler: RouteHandler<
  typeof getApiVersionImagesSharegroupsTokensTokenUuidSharegroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesSharegroupsTokensTokenUuidSharegroupImagesRouteHandler: RouteHandler<
  typeof getApiVersionImagesSharegroupsTokensTokenUuidSharegroupImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesSharegroupsSharegroupIdRouteHandler: RouteHandler<
  typeof getApiVersionImagesSharegroupsSharegroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionImagesSharegroupsSharegroupIdRouteHandler: RouteHandler<
  typeof putApiVersionImagesSharegroupsSharegroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionImagesSharegroupsSharegroupIdRouteHandler: RouteHandler<
  typeof deleteApiVersionImagesSharegroupsSharegroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionImagesSharegroupsSharegroupIdImagesRouteHandler: RouteHandler<
  typeof postApiVersionImagesSharegroupsSharegroupIdImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesSharegroupsSharegroupIdImagesRouteHandler: RouteHandler<
  typeof getApiVersionImagesSharegroupsSharegroupIdImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionImagesSharegroupsSharegroupIdImagesImageIdRouteHandler: RouteHandler<
  typeof putApiVersionImagesSharegroupsSharegroupIdImagesImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionImagesSharegroupsSharegroupIdImagesImageIdRouteHandler: RouteHandler<
  typeof deleteApiVersionImagesSharegroupsSharegroupIdImagesImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionImagesSharegroupsSharegroupIdMembersRouteHandler: RouteHandler<
  typeof postApiVersionImagesSharegroupsSharegroupIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesSharegroupsSharegroupIdMembersRouteHandler: RouteHandler<
  typeof getApiVersionImagesSharegroupsSharegroupIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRouteHandler: RouteHandler<
  typeof getApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRouteHandler: RouteHandler<
  typeof putApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRouteHandler: RouteHandler<
  typeof deleteApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionImagesUploadRouteHandler: RouteHandler<
  typeof postApiVersionImagesUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesImageIdRouteHandler: RouteHandler<
  typeof getApiVersionImagesImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionImagesImageIdRouteHandler: RouteHandler<
  typeof putApiVersionImagesImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionImagesImageIdRouteHandler: RouteHandler<
  typeof deleteApiVersionImagesImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionImagesImageIdRegionsRouteHandler: RouteHandler<
  typeof postApiVersionImagesImageIdRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionImagesImageIdSharegroupsRouteHandler: RouteHandler<
  typeof getApiVersionImagesImageIdSharegroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLinodeInstancesLinodeIdRouteHandler: RouteHandler<
  typeof putApiVersionLinodeInstancesLinodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLinodeInstancesLinodeIdRouteHandler: RouteHandler<
  typeof deleteApiVersionLinodeInstancesLinodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdBackupsRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdBackupsRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdBackupsCancelRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdBackupsCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdBackupsEnableRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdBackupsEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdBackupsBackupIdRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdBackupsBackupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdBackupsBackupIdRestoreRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdBackupsBackupIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdBootRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdBootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdCloneRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdConfigsRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdConfigsRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdConfigsConfigIdRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLinodeInstancesLinodeIdConfigsConfigIdRouteHandler: RouteHandler<
  typeof putApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdRouteHandler: RouteHandler<
  typeof deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesOrderRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof putApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdDisksRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdDisksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdDisksRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdDisksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdDisksDiskIdRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLinodeInstancesLinodeIdDisksDiskIdRouteHandler: RouteHandler<
  typeof putApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLinodeInstancesLinodeIdDisksDiskIdRouteHandler: RouteHandler<
  typeof deleteApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdDisksDiskIdCloneRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdDisksDiskIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdDisksDiskIdPasswordRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdDisksDiskIdPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdDisksDiskIdResizeRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdDisksDiskIdResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdFirewallsRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdFirewallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLinodeInstancesLinodeIdFirewallsRouteHandler: RouteHandler<
  typeof putApiVersionLinodeInstancesLinodeIdFirewallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdFirewallsApplyRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdFirewallsApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdInterfacesRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdInterfacesRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdInterfacesHistoryRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdInterfacesHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdInterfacesSettingsRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdInterfacesSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLinodeInstancesLinodeIdInterfacesSettingsRouteHandler: RouteHandler<
  typeof putApiVersionLinodeInstancesLinodeIdInterfacesSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof putApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof deleteApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewallsRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdIpsRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdIpsRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdIpsAddressRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdIpsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLinodeInstancesLinodeIdIpsAddressRouteHandler: RouteHandler<
  typeof putApiVersionLinodeInstancesLinodeIdIpsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLinodeInstancesLinodeIdIpsAddressRouteHandler: RouteHandler<
  typeof deleteApiVersionLinodeInstancesLinodeIdIpsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdMigrateRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdMutateRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdMutateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdNodebalancersRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdNodebalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdPasswordRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdRebootRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdRebootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdRebuildRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdRebuildRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdRescueRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdRescueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdResizeRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdShutdownRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdShutdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdStatsRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdStatsYearMonthRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdStatsYearMonthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdTransferRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdTransferYearMonthRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdTransferYearMonthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeInstancesLinodeIdUpgradeInterfacesRouteHandler: RouteHandler<
  typeof postApiVersionLinodeInstancesLinodeIdUpgradeInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeInstancesLinodeIdVolumesRouteHandler: RouteHandler<
  typeof getApiVersionLinodeInstancesLinodeIdVolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeKernelsRouteHandler: RouteHandler<
  typeof getApiVersionLinodeKernelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeKernelsKernelIdRouteHandler: RouteHandler<
  typeof getApiVersionLinodeKernelsKernelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLinodeStackscriptsRouteHandler: RouteHandler<
  typeof postApiVersionLinodeStackscriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeStackscriptsRouteHandler: RouteHandler<
  typeof getApiVersionLinodeStackscriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeStackscriptsStackscriptIdRouteHandler: RouteHandler<
  typeof getApiVersionLinodeStackscriptsStackscriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLinodeStackscriptsStackscriptIdRouteHandler: RouteHandler<
  typeof putApiVersionLinodeStackscriptsStackscriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLinodeStackscriptsStackscriptIdRouteHandler: RouteHandler<
  typeof deleteApiVersionLinodeStackscriptsStackscriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeTypesRouteHandler: RouteHandler<
  typeof getApiVersionLinodeTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLinodeTypesTypeIdRouteHandler: RouteHandler<
  typeof getApiVersionLinodeTypesTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLkeClustersRouteHandler: RouteHandler<
  typeof postApiVersionLkeClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeClustersRouteHandler: RouteHandler<
  typeof getApiVersionLkeClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeClustersClusterIdRouteHandler: RouteHandler<
  typeof getApiVersionLkeClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLkeClustersClusterIdRouteHandler: RouteHandler<
  typeof putApiVersionLkeClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLkeClustersClusterIdRouteHandler: RouteHandler<
  typeof deleteApiVersionLkeClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeClustersClusterIdApiEndpointsRouteHandler: RouteHandler<
  typeof getApiVersionLkeClustersClusterIdApiEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeClustersClusterIdControlPlaneAclRouteHandler: RouteHandler<
  typeof getApiVersionLkeClustersClusterIdControlPlaneAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLkeClustersClusterIdControlPlaneAclRouteHandler: RouteHandler<
  typeof putApiVersionLkeClustersClusterIdControlPlaneAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLkeClustersClusterIdControlPlaneAclRouteHandler: RouteHandler<
  typeof deleteApiVersionLkeClustersClusterIdControlPlaneAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeClustersClusterIdDashboardRouteHandler: RouteHandler<
  typeof getApiVersionLkeClustersClusterIdDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeClustersClusterIdKubeconfigRouteHandler: RouteHandler<
  typeof getApiVersionLkeClustersClusterIdKubeconfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLkeClustersClusterIdKubeconfigRouteHandler: RouteHandler<
  typeof deleteApiVersionLkeClustersClusterIdKubeconfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeClustersClusterIdNodesNodeIdRouteHandler: RouteHandler<
  typeof getApiVersionLkeClustersClusterIdNodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLkeClustersClusterIdNodesNodeIdRouteHandler: RouteHandler<
  typeof deleteApiVersionLkeClustersClusterIdNodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLkeClustersClusterIdNodesNodeIdRecycleRouteHandler: RouteHandler<
  typeof postApiVersionLkeClustersClusterIdNodesNodeIdRecycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLkeClustersClusterIdPoolsRouteHandler: RouteHandler<
  typeof postApiVersionLkeClustersClusterIdPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeClustersClusterIdPoolsRouteHandler: RouteHandler<
  typeof getApiVersionLkeClustersClusterIdPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeClustersClusterIdPoolsPoolIdRouteHandler: RouteHandler<
  typeof getApiVersionLkeClustersClusterIdPoolsPoolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLkeClustersClusterIdPoolsPoolIdRouteHandler: RouteHandler<
  typeof putApiVersionLkeClustersClusterIdPoolsPoolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLkeClustersClusterIdPoolsPoolIdRouteHandler: RouteHandler<
  typeof deleteApiVersionLkeClustersClusterIdPoolsPoolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLkeClustersClusterIdPoolsPoolIdRecycleRouteHandler: RouteHandler<
  typeof postApiVersionLkeClustersClusterIdPoolsPoolIdRecycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLkeClustersClusterIdRecycleRouteHandler: RouteHandler<
  typeof postApiVersionLkeClustersClusterIdRecycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLkeClustersClusterIdRegenerateRouteHandler: RouteHandler<
  typeof postApiVersionLkeClustersClusterIdRegenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLkeClustersClusterIdServicetokenRouteHandler: RouteHandler<
  typeof deleteApiVersionLkeClustersClusterIdServicetokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeTiersTierVersionsRouteHandler: RouteHandler<
  typeof getApiVersionLkeTiersTierVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeTiersTierVersionsVersionRouteHandler: RouteHandler<
  typeof getApiVersionLkeTiersTierVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeTypesRouteHandler: RouteHandler<
  typeof getApiVersionLkeTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeVersionsRouteHandler: RouteHandler<
  typeof getApiVersionLkeVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLkeVersionsVersionRouteHandler: RouteHandler<
  typeof getApiVersionLkeVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionLongviewClientsRouteHandler: RouteHandler<
  typeof postApiVersionLongviewClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLongviewClientsRouteHandler: RouteHandler<
  typeof getApiVersionLongviewClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLongviewClientsClientIdRouteHandler: RouteHandler<
  typeof getApiVersionLongviewClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLongviewClientsClientIdRouteHandler: RouteHandler<
  typeof putApiVersionLongviewClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionLongviewClientsClientIdRouteHandler: RouteHandler<
  typeof deleteApiVersionLongviewClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLongviewPlanRouteHandler: RouteHandler<
  typeof getApiVersionLongviewPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionLongviewPlanRouteHandler: RouteHandler<
  typeof putApiVersionLongviewPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLongviewSubscriptionsRouteHandler: RouteHandler<
  typeof getApiVersionLongviewSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLongviewSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getApiVersionLongviewSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionLongviewTypesRouteHandler: RouteHandler<
  typeof getApiVersionLongviewTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMaintenancePoliciesRouteHandler: RouteHandler<
  typeof getApiVersionMaintenancePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionManagedContactsRouteHandler: RouteHandler<
  typeof postApiVersionManagedContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedContactsRouteHandler: RouteHandler<
  typeof getApiVersionManagedContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedContactsContactIdRouteHandler: RouteHandler<
  typeof getApiVersionManagedContactsContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionManagedContactsContactIdRouteHandler: RouteHandler<
  typeof putApiVersionManagedContactsContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionManagedContactsContactIdRouteHandler: RouteHandler<
  typeof deleteApiVersionManagedContactsContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionManagedCredentialsRouteHandler: RouteHandler<
  typeof postApiVersionManagedCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedCredentialsRouteHandler: RouteHandler<
  typeof getApiVersionManagedCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedCredentialsSshkeyRouteHandler: RouteHandler<
  typeof getApiVersionManagedCredentialsSshkeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedCredentialsCredentialIdRouteHandler: RouteHandler<
  typeof getApiVersionManagedCredentialsCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionManagedCredentialsCredentialIdRouteHandler: RouteHandler<
  typeof putApiVersionManagedCredentialsCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionManagedCredentialsCredentialIdRevokeRouteHandler: RouteHandler<
  typeof postApiVersionManagedCredentialsCredentialIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionManagedCredentialsCredentialIdUpdateRouteHandler: RouteHandler<
  typeof postApiVersionManagedCredentialsCredentialIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedIssuesRouteHandler: RouteHandler<
  typeof getApiVersionManagedIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedIssuesIssueIdRouteHandler: RouteHandler<
  typeof getApiVersionManagedIssuesIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedLinodeSettingsRouteHandler: RouteHandler<
  typeof getApiVersionManagedLinodeSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedLinodeSettingsLinodeIdRouteHandler: RouteHandler<
  typeof getApiVersionManagedLinodeSettingsLinodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionManagedLinodeSettingsLinodeIdRouteHandler: RouteHandler<
  typeof putApiVersionManagedLinodeSettingsLinodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionManagedServicesRouteHandler: RouteHandler<
  typeof postApiVersionManagedServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedServicesRouteHandler: RouteHandler<
  typeof getApiVersionManagedServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedServicesServiceIdRouteHandler: RouteHandler<
  typeof getApiVersionManagedServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionManagedServicesServiceIdRouteHandler: RouteHandler<
  typeof putApiVersionManagedServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionManagedServicesServiceIdRouteHandler: RouteHandler<
  typeof deleteApiVersionManagedServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionManagedServicesServiceIdDisableRouteHandler: RouteHandler<
  typeof postApiVersionManagedServicesServiceIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionManagedServicesServiceIdEnableRouteHandler: RouteHandler<
  typeof postApiVersionManagedServicesServiceIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionManagedStatsRouteHandler: RouteHandler<
  typeof getApiVersionManagedStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMonitorAlertChannelsRouteHandler: RouteHandler<
  typeof getApiVersionMonitorAlertChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMonitorAlertDefinitionsRouteHandler: RouteHandler<
  typeof getApiVersionMonitorAlertDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMonitorDashboardsRouteHandler: RouteHandler<
  typeof getApiVersionMonitorDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMonitorDashboardsDashboardIdRouteHandler: RouteHandler<
  typeof getApiVersionMonitorDashboardsDashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMonitorServicesRouteHandler: RouteHandler<
  typeof getApiVersionMonitorServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMonitorServicesServiceTypeRouteHandler: RouteHandler<
  typeof getApiVersionMonitorServicesServiceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionMonitorServicesServiceTypeAlertDefinitionsRouteHandler: RouteHandler<
  typeof postApiVersionMonitorServicesServiceTypeAlertDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMonitorServicesServiceTypeAlertDefinitionsRouteHandler: RouteHandler<
  typeof getApiVersionMonitorServicesServiceTypeAlertDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRouteHandler: RouteHandler<
  typeof getApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRouteHandler: RouteHandler<
  typeof putApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRouteHandler: RouteHandler<
  typeof deleteApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMonitorServicesServiceTypeDashboardsRouteHandler: RouteHandler<
  typeof getApiVersionMonitorServicesServiceTypeDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionMonitorServicesServiceTypeMetricDefinitionsRouteHandler: RouteHandler<
  typeof getApiVersionMonitorServicesServiceTypeMetricDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionMonitorServicesServiceTypeMetricsRouteHandler: RouteHandler<
  typeof postApiVersionMonitorServicesServiceTypeMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionMonitorServicesServiceTypeTokenRouteHandler: RouteHandler<
  typeof postApiVersionMonitorServicesServiceTypeTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkTransferPricesRouteHandler: RouteHandler<
  typeof getApiVersionNetworkTransferPricesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNetworkingFirewallsRouteHandler: RouteHandler<
  typeof postApiVersionNetworkingFirewallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingFirewallsRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingFirewallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingFirewallsSettingsRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingFirewallsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionNetworkingFirewallsSettingsRouteHandler: RouteHandler<
  typeof putApiVersionNetworkingFirewallsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingFirewallsTemplatesRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingFirewallsTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingFirewallsTemplatesSlugRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingFirewallsTemplatesSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingFirewallsFirewallIdRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingFirewallsFirewallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionNetworkingFirewallsFirewallIdRouteHandler: RouteHandler<
  typeof putApiVersionNetworkingFirewallsFirewallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionNetworkingFirewallsFirewallIdRouteHandler: RouteHandler<
  typeof deleteApiVersionNetworkingFirewallsFirewallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNetworkingFirewallsFirewallIdDevicesRouteHandler: RouteHandler<
  typeof postApiVersionNetworkingFirewallsFirewallIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingFirewallsFirewallIdDevicesRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingFirewallsFirewallIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRouteHandler: RouteHandler<
  typeof deleteApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingFirewallsFirewallIdHistoryRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingFirewallsFirewallIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersionRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingFirewallsFirewallIdRulesRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingFirewallsFirewallIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionNetworkingFirewallsFirewallIdRulesRouteHandler: RouteHandler<
  typeof putApiVersionNetworkingFirewallsFirewallIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNetworkingIpsRouteHandler: RouteHandler<
  typeof postApiVersionNetworkingIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingIpsRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNetworkingIpsAssignRouteHandler: RouteHandler<
  typeof postApiVersionNetworkingIpsAssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNetworkingIpsShareRouteHandler: RouteHandler<
  typeof postApiVersionNetworkingIpsShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingIpsAddressRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingIpsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionNetworkingIpsAddressRouteHandler: RouteHandler<
  typeof putApiVersionNetworkingIpsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNetworkingIpv4AssignRouteHandler: RouteHandler<
  typeof postApiVersionNetworkingIpv4AssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNetworkingIpv4ShareRouteHandler: RouteHandler<
  typeof postApiVersionNetworkingIpv4ShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingIpv6PoolsRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingIpv6PoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNetworkingIpv6RangesRouteHandler: RouteHandler<
  typeof postApiVersionNetworkingIpv6RangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingIpv6RangesRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingIpv6RangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingIpv6RangesRangeRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingIpv6RangesRangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionNetworkingIpv6RangesRangeRouteHandler: RouteHandler<
  typeof deleteApiVersionNetworkingIpv6RangesRangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNetworkingVlansRouteHandler: RouteHandler<
  typeof getApiVersionNetworkingVlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionNetworkingVlansRegionIdLabelRouteHandler: RouteHandler<
  typeof deleteApiVersionNetworkingVlansRegionIdLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNodebalancersRouteHandler: RouteHandler<
  typeof postApiVersionNodebalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersTypesRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersNodeBalancerIdRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersNodeBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionNodebalancersNodeBalancerIdRouteHandler: RouteHandler<
  typeof putApiVersionNodebalancersNodeBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionNodebalancersNodeBalancerIdRouteHandler: RouteHandler<
  typeof deleteApiVersionNodebalancersNodeBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNodebalancersNodeBalancerIdConfigsRouteHandler: RouteHandler<
  typeof postApiVersionNodebalancersNodeBalancerIdConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersNodeBalancerIdConfigsRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersNodeBalancerIdConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRouteHandler: RouteHandler<
  typeof putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRouteHandler: RouteHandler<
  typeof deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRouteHandler: RouteHandler<
  typeof postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRouteHandler: RouteHandler<
  typeof putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRouteHandler: RouteHandler<
  typeof deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRebuildRouteHandler: RouteHandler<
  typeof postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRebuildRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersNodeBalancerIdFirewallsRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersNodeBalancerIdFirewallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionNodebalancersNodeBalancerIdFirewallsRouteHandler: RouteHandler<
  typeof putApiVersionNodebalancersNodeBalancerIdFirewallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersNodeBalancerIdStatsRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersNodeBalancerIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersNodeBalancerIdVpcsRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersNodeBalancerIdVpcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigIdRouteHandler: RouteHandler<
  typeof getApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionObjectStorageBucketsRouteHandler: RouteHandler<
  typeof postApiVersionObjectStorageBucketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageBucketsRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageBucketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageBucketsRegionIdRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageBucketsRegionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageBucketsRegionIdBucketRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageBucketsRegionIdBucketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionObjectStorageBucketsRegionIdBucketRouteHandler: RouteHandler<
  typeof deleteApiVersionObjectStorageBucketsRegionIdBucketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionObjectStorageBucketsRegionIdBucketAccessRouteHandler: RouteHandler<
  typeof postApiVersionObjectStorageBucketsRegionIdBucketAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageBucketsRegionIdBucketAccessRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageBucketsRegionIdBucketAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionObjectStorageBucketsRegionIdBucketAccessRouteHandler: RouteHandler<
  typeof putApiVersionObjectStorageBucketsRegionIdBucketAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageBucketsRegionIdBucketObjectAclRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageBucketsRegionIdBucketObjectAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionObjectStorageBucketsRegionIdBucketObjectAclRouteHandler: RouteHandler<
  typeof putApiVersionObjectStorageBucketsRegionIdBucketObjectAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageBucketsRegionIdBucketObjectListRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageBucketsRegionIdBucketObjectListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionObjectStorageBucketsRegionIdBucketObjectUrlRouteHandler: RouteHandler<
  typeof postApiVersionObjectStorageBucketsRegionIdBucketObjectUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionObjectStorageBucketsRegionIdBucketSslRouteHandler: RouteHandler<
  typeof postApiVersionObjectStorageBucketsRegionIdBucketSslRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageBucketsRegionIdBucketSslRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageBucketsRegionIdBucketSslRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionObjectStorageBucketsRegionIdBucketSslRouteHandler: RouteHandler<
  typeof deleteApiVersionObjectStorageBucketsRegionIdBucketSslRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionObjectStorageCancelRouteHandler: RouteHandler<
  typeof postApiVersionObjectStorageCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageClustersRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageClustersClusterIdRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageEndpointsRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionObjectStorageKeysRouteHandler: RouteHandler<
  typeof postApiVersionObjectStorageKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageKeysRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageKeysKeyIdRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionObjectStorageKeysKeyIdRouteHandler: RouteHandler<
  typeof putApiVersionObjectStorageKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionObjectStorageKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteApiVersionObjectStorageKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageQuotasRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageQuotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageQuotasObjQuotaIdRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageQuotasObjQuotaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageQuotasObjQuotaIdUsageRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageQuotasObjQuotaIdUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageTransferRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionObjectStorageTypesRouteHandler: RouteHandler<
  typeof getApiVersionObjectStorageTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionPlacementGroupsRouteHandler: RouteHandler<
  typeof postApiVersionPlacementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionPlacementGroupsRouteHandler: RouteHandler<
  typeof getApiVersionPlacementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionPlacementGroupsGroupIdRouteHandler: RouteHandler<
  typeof getApiVersionPlacementGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionPlacementGroupsGroupIdRouteHandler: RouteHandler<
  typeof putApiVersionPlacementGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionPlacementGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteApiVersionPlacementGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionPlacementGroupsGroupIdAssignRouteHandler: RouteHandler<
  typeof postApiVersionPlacementGroupsGroupIdAssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionPlacementGroupsGroupIdUnassignRouteHandler: RouteHandler<
  typeof postApiVersionPlacementGroupsGroupIdUnassignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileRouteHandler: RouteHandler<
  typeof getApiVersionProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionProfileRouteHandler: RouteHandler<
  typeof putApiVersionProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileAppsRouteHandler: RouteHandler<
  typeof getApiVersionProfileAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileAppsAppIdRouteHandler: RouteHandler<
  typeof getApiVersionProfileAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionProfileAppsAppIdRouteHandler: RouteHandler<
  typeof deleteApiVersionProfileAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileDevicesRouteHandler: RouteHandler<
  typeof getApiVersionProfileDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileDevicesDeviceIdRouteHandler: RouteHandler<
  typeof getApiVersionProfileDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionProfileDevicesDeviceIdRouteHandler: RouteHandler<
  typeof deleteApiVersionProfileDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileGrantsRouteHandler: RouteHandler<
  typeof getApiVersionProfileGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileLoginsRouteHandler: RouteHandler<
  typeof getApiVersionProfileLoginsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileLoginsLoginIdRouteHandler: RouteHandler<
  typeof getApiVersionProfileLoginsLoginIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionProfilePhoneNumberRouteHandler: RouteHandler<
  typeof postApiVersionProfilePhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionProfilePhoneNumberRouteHandler: RouteHandler<
  typeof deleteApiVersionProfilePhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionProfilePhoneNumberVerifyRouteHandler: RouteHandler<
  typeof postApiVersionProfilePhoneNumberVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfilePreferencesRouteHandler: RouteHandler<
  typeof getApiVersionProfilePreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionProfilePreferencesRouteHandler: RouteHandler<
  typeof putApiVersionProfilePreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionProfileSecurityQuestionsRouteHandler: RouteHandler<
  typeof postApiVersionProfileSecurityQuestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileSecurityQuestionsRouteHandler: RouteHandler<
  typeof getApiVersionProfileSecurityQuestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionProfileSshkeysRouteHandler: RouteHandler<
  typeof postApiVersionProfileSshkeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileSshkeysRouteHandler: RouteHandler<
  typeof getApiVersionProfileSshkeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileSshkeysSshKeyIdRouteHandler: RouteHandler<
  typeof getApiVersionProfileSshkeysSshKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionProfileSshkeysSshKeyIdRouteHandler: RouteHandler<
  typeof putApiVersionProfileSshkeysSshKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionProfileSshkeysSshKeyIdRouteHandler: RouteHandler<
  typeof deleteApiVersionProfileSshkeysSshKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionProfileTfaDisableRouteHandler: RouteHandler<
  typeof postApiVersionProfileTfaDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionProfileTfaEnableRouteHandler: RouteHandler<
  typeof postApiVersionProfileTfaEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionProfileTfaEnableConfirmRouteHandler: RouteHandler<
  typeof postApiVersionProfileTfaEnableConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionProfileTokensRouteHandler: RouteHandler<
  typeof postApiVersionProfileTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileTokensRouteHandler: RouteHandler<
  typeof getApiVersionProfileTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionProfileTokensTokenIdRouteHandler: RouteHandler<
  typeof getApiVersionProfileTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionProfileTokensTokenIdRouteHandler: RouteHandler<
  typeof putApiVersionProfileTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionProfileTokensTokenIdRouteHandler: RouteHandler<
  typeof deleteApiVersionProfileTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionRegionsRouteHandler: RouteHandler<
  typeof getApiVersionRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionRegionsAvailabilityRouteHandler: RouteHandler<
  typeof getApiVersionRegionsAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionRegionsRegionIdRouteHandler: RouteHandler<
  typeof getApiVersionRegionsRegionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionRegionsRegionIdAvailabilityRouteHandler: RouteHandler<
  typeof getApiVersionRegionsRegionIdAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionSupportTicketsRouteHandler: RouteHandler<
  typeof postApiVersionSupportTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionSupportTicketsRouteHandler: RouteHandler<
  typeof getApiVersionSupportTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionSupportTicketsTicketIdRouteHandler: RouteHandler<
  typeof getApiVersionSupportTicketsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionSupportTicketsTicketIdAttachmentsRouteHandler: RouteHandler<
  typeof postApiVersionSupportTicketsTicketIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionSupportTicketsTicketIdCloseRouteHandler: RouteHandler<
  typeof postApiVersionSupportTicketsTicketIdCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionSupportTicketsTicketIdRepliesRouteHandler: RouteHandler<
  typeof postApiVersionSupportTicketsTicketIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionSupportTicketsTicketIdRepliesRouteHandler: RouteHandler<
  typeof getApiVersionSupportTicketsTicketIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionTagsRouteHandler: RouteHandler<typeof postApiVersionTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiVersionTagsRouteHandler: RouteHandler<typeof getApiVersionTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiVersionTagsTagLabelRouteHandler: RouteHandler<
  typeof getApiVersionTagsTagLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionTagsTagLabelRouteHandler: RouteHandler<
  typeof deleteApiVersionTagsTagLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionVolumesRouteHandler: RouteHandler<
  typeof postApiVersionVolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionVolumesRouteHandler: RouteHandler<
  typeof getApiVersionVolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionVolumesTypesRouteHandler: RouteHandler<
  typeof getApiVersionVolumesTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionVolumesVolumeIdRouteHandler: RouteHandler<
  typeof getApiVersionVolumesVolumeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionVolumesVolumeIdRouteHandler: RouteHandler<
  typeof putApiVersionVolumesVolumeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionVolumesVolumeIdRouteHandler: RouteHandler<
  typeof deleteApiVersionVolumesVolumeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionVolumesVolumeIdAttachRouteHandler: RouteHandler<
  typeof postApiVersionVolumesVolumeIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionVolumesVolumeIdCloneRouteHandler: RouteHandler<
  typeof postApiVersionVolumesVolumeIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionVolumesVolumeIdDetachRouteHandler: RouteHandler<
  typeof postApiVersionVolumesVolumeIdDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionVolumesVolumeIdResizeRouteHandler: RouteHandler<
  typeof postApiVersionVolumesVolumeIdResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionVpcsRouteHandler: RouteHandler<typeof postApiVersionVpcsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiVersionVpcsRouteHandler: RouteHandler<typeof getApiVersionVpcsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiVersionVpcsIpsRouteHandler: RouteHandler<
  typeof getApiVersionVpcsIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionVpcsVpcIdRouteHandler: RouteHandler<
  typeof getApiVersionVpcsVpcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionVpcsVpcIdRouteHandler: RouteHandler<
  typeof putApiVersionVpcsVpcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionVpcsVpcIdRouteHandler: RouteHandler<
  typeof deleteApiVersionVpcsVpcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionVpcsVpcIdIpsRouteHandler: RouteHandler<
  typeof getApiVersionVpcsVpcIdIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiVersionVpcsVpcIdSubnetsRouteHandler: RouteHandler<
  typeof postApiVersionVpcsVpcIdSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionVpcsVpcIdSubnetsRouteHandler: RouteHandler<
  typeof getApiVersionVpcsVpcIdSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiVersionVpcsVpcIdSubnetsVpcSubnetIdRouteHandler: RouteHandler<
  typeof getApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiVersionVpcsVpcIdSubnetsVpcSubnetIdRouteHandler: RouteHandler<
  typeof putApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiVersionVpcsVpcIdSubnetsVpcSubnetIdRouteHandler: RouteHandler<
  typeof deleteApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
