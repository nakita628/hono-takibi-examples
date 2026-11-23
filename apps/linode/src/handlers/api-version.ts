import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiVersionHandler = app
  .openapi(getApiVersionAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountAvailabilityRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountBetasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountBetasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountBetasBetaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountChildAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountChildAccountsEuuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountChildAccountsEuuIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountCreditCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountEntityTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountEntityTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountEntityTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionAccountEntityTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountEntityTransfersTokenAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountEventsEventIdSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountInvoicesInvoiceIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountLoginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountLoginsLoginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionAccountOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountOauthClientsClientIdResetSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountOauthClientsClientIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountOauthClientsClientIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionAccountPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountPaymentMethodsPaymentMethodIdMakeDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountPaymentsPaypalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountPaymentsPaypalExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountPromoCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountServiceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountServiceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountServiceTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionAccountServiceTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountServiceTransfersTokenAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountSettingsManagedEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionAccountUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountUsersUsernameGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountUsersUsernameGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionBetasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionBetasBetaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesEnginesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesEnginesEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesMysqlConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesMysqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesMysqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesMysqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionDatabasesMysqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionDatabasesMysqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesMysqlInstancesInstanceIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesMysqlInstancesInstanceIdCredentialsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesMysqlInstancesInstanceIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesMysqlInstancesInstanceIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesMysqlInstancesInstanceIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesMysqlInstancesInstanceIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesPostgresqlConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesPostgresqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesPostgresqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesPostgresqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionDatabasesPostgresqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionDatabasesPostgresqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesPostgresqlInstancesInstanceIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesPostgresqlInstancesInstanceIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesPostgresqlInstancesInstanceIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesPostgresqlInstancesInstanceIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesTypesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDomainsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDomainsDomainIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDomainsDomainIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDomainsDomainIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDomainsDomainIdRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionDomainsDomainIdRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionDomainsDomainIdRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDomainsDomainIdZoneFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesSharegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesSharegroupsTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsTokensTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionImagesSharegroupsTokensTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionImagesSharegroupsTokensTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsTokensTokenUuidSharegroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsTokensTokenUuidSharegroupImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsSharegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionImagesSharegroupsSharegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionImagesSharegroupsSharegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesSharegroupsSharegroupIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsSharegroupIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionImagesSharegroupsSharegroupIdImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionImagesSharegroupsSharegroupIdImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesSharegroupsSharegroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsSharegroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionImagesSharegroupsSharegroupIdMembersTokenUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionImagesImageIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionImagesImageIdSharegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeInstancesLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdBackupsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdBackupsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdBackupsBackupIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdBootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiVersionLinodeInstancesLinodeIdDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeInstancesLinodeIdDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdDisksDiskIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdDisksDiskIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdDisksDiskIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdFirewallsApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdInterfacesHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdInterfacesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdInterfacesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeInstancesLinodeIdIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdMutateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdNodebalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdRebuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdRescueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdStatsYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdTransferYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdUpgradeInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeKernelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeKernelsKernelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeStackscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeStackscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeStackscriptsStackscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeStackscriptsStackscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeStackscriptsStackscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeTypesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLkeClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLkeClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdApiEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdControlPlaneAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLkeClustersClusterIdControlPlaneAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdControlPlaneAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdKubeconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdKubeconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLkeClustersClusterIdNodesNodeIdRecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLkeClustersClusterIdPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLkeClustersClusterIdPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLkeClustersClusterIdPoolsPoolIdRecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLkeClustersClusterIdRecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLkeClustersClusterIdRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdServicetokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeTiersTierVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeTiersTierVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLongviewClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLongviewClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLongviewClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLongviewClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLongviewClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLongviewPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLongviewPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLongviewSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLongviewSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLongviewTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMaintenancePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionManagedContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionManagedContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedCredentialsSshkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionManagedCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedCredentialsCredentialIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedCredentialsCredentialIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedLinodeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedLinodeSettingsLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionManagedLinodeSettingsLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionManagedServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionManagedServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedServicesServiceIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedServicesServiceIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorAlertChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorAlertDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesServiceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionMonitorServicesServiceTypeAlertDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesServiceTypeAlertDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesServiceTypeDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionMonitorServicesServiceTypeMetricDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionMonitorServicesServiceTypeMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionMonitorServicesServiceTypeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkTransferPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNetworkingFirewallsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsTemplatesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNetworkingFirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNetworkingFirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingFirewallsFirewallIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNetworkingFirewallsFirewallIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsFirewallIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNetworkingFirewallsFirewallIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingIpsAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingIpsShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNetworkingIpsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingIpv4AssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingIpv4ShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingIpv6PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNetworkingIpv6RangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingIpv6RangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingIpv6RangesRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNetworkingIpv6RangesRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingVlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNetworkingVlansRegionIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNodebalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNodebalancersNodeBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNodebalancersNodeBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNodebalancersNodeBalancerIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRebuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNodebalancersNodeBalancerIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionObjectStorageBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionObjectStorageBucketsRegionIdBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionObjectStorageBucketsRegionIdBucketAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdBucketAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionObjectStorageBucketsRegionIdBucketAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdBucketObjectAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionObjectStorageBucketsRegionIdBucketObjectAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdBucketObjectListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionObjectStorageBucketsRegionIdBucketObjectUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionObjectStorageBucketsRegionIdBucketSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageBucketsRegionIdBucketSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionObjectStorageBucketsRegionIdBucketSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionObjectStorageCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionObjectStorageKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionObjectStorageKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionObjectStorageKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageQuotasObjQuotaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageQuotasObjQuotaIdUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionPlacementGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionPlacementGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionPlacementGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionPlacementGroupsGroupIdAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionPlacementGroupsGroupIdUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionProfileAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionProfileDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileLoginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileLoginsLoginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfilePhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionProfilePhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfilePhoneNumberVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfilePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionProfilePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfileSecurityQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileSecurityQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfileSshkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileSshkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileSshkeysSshKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionProfileSshkeysSshKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionProfileSshkeysSshKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfileTfaDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfileTfaEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfileTfaEnableConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfileTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionProfileTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionProfileTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionRegionsAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionRegionsRegionIdAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionSupportTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionSupportTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionSupportTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionSupportTicketsTicketIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionSupportTicketsTicketIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionSupportTicketsTicketIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionSupportTicketsTicketIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionTagsTagLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionTagsTagLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVolumesTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVolumesVolumeIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVolumesVolumeIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVolumesVolumeIdDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVolumesVolumeIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionVpcsVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionVpcsVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsVpcIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVpcsVpcIdSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsVpcIdSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionVpcsVpcIdSubnetsVpcSubnetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
