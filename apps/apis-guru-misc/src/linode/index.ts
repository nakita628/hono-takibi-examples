import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountEntityTransfersTokenRoute,
  deleteAccountOauthClientsClientIdRoute,
  deleteAccountPaymentMethodsPaymentMethodIdRoute,
  deleteAccountServiceTransfersTokenRoute,
  deleteAccountUsersUsernameRoute,
  deleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdRoute,
  deleteDatabasesMongodbInstancesInstanceIdRoute,
  deleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdRoute,
  deleteDatabasesMysqlInstancesInstanceIdRoute,
  deleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRoute,
  deleteDatabasesPostgresqlInstancesInstanceIdRoute,
  deleteDomainsDomainIdRecordsRecordIdRoute,
  deleteDomainsDomainIdRoute,
  deleteImagesImageIdRoute,
  deleteLinodeInstancesLinodeIdConfigsConfigIdRoute,
  deleteLinodeInstancesLinodeIdDisksDiskIdRoute,
  deleteLinodeInstancesLinodeIdIpsAddressRoute,
  deleteLinodeInstancesLinodeIdRoute,
  deleteLinodeStackscriptsStackscriptIdRoute,
  deleteLkeClustersClusterIdKubeconfigRoute,
  deleteLkeClustersClusterIdNodesNodeIdRoute,
  deleteLkeClustersClusterIdPoolsPoolIdRoute,
  deleteLkeClustersClusterIdRoute,
  deleteLkeClustersClusterIdServicetokenRoute,
  deleteLongviewClientsClientIdRoute,
  deleteManagedContactsContactIdRoute,
  deleteManagedServicesServiceIdRoute,
  deleteNetworkingFirewallsFirewallIdDevicesDeviceIdRoute,
  deleteNetworkingFirewallsFirewallIdRoute,
  deleteNetworkingIpv6RangesRangeRoute,
  deleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  deleteNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  deleteNodebalancersNodeBalancerIdRoute,
  deleteObjectStorageBucketsClusterIdBucketRoute,
  deleteObjectStorageBucketsClusterIdBucketSslRoute,
  deleteObjectStorageKeysKeyIdRoute,
  deleteProfileAppsAppIdRoute,
  deleteProfileDevicesDeviceIdRoute,
  deleteProfilePhoneNumberRoute,
  deleteProfileSshkeysSshKeyIdRoute,
  deleteProfileTokensTokenIdRoute,
  deleteTagsLabelRoute,
  deleteVolumesVolumeIdRoute,
  getAccountEntityTransfersRoute,
  getAccountEntityTransfersTokenRoute,
  getAccountEventsEventIdRoute,
  getAccountEventsRoute,
  getAccountInvoicesInvoiceIdItemsRoute,
  getAccountInvoicesInvoiceIdRoute,
  getAccountInvoicesRoute,
  getAccountLoginsLoginIdRoute,
  getAccountLoginsRoute,
  getAccountMaintenanceRoute,
  getAccountNotificationsRoute,
  getAccountOauthClientsClientIdRoute,
  getAccountOauthClientsClientIdThumbnailRoute,
  getAccountOauthClientsRoute,
  getAccountPaymentMethodsPaymentMethodIdRoute,
  getAccountPaymentMethodsRoute,
  getAccountPaymentsPaymentIdRoute,
  getAccountPaymentsRoute,
  getAccountRoute,
  getAccountServiceTransfersRoute,
  getAccountServiceTransfersTokenRoute,
  getAccountSettingsRoute,
  getAccountTransferRoute,
  getAccountUsersRoute,
  getAccountUsersUsernameGrantsRoute,
  getAccountUsersUsernameRoute,
  getDatabasesEnginesEngineIdRoute,
  getDatabasesEnginesRoute,
  getDatabasesInstancesRoute,
  getDatabasesMongodbInstancesInstanceIdBackupsBackupIdRoute,
  getDatabasesMongodbInstancesInstanceIdBackupsRoute,
  getDatabasesMongodbInstancesInstanceIdCredentialsRoute,
  getDatabasesMongodbInstancesInstanceIdRoute,
  getDatabasesMongodbInstancesInstanceIdSslRoute,
  getDatabasesMongodbInstancesRoute,
  getDatabasesMysqlInstancesInstanceIdBackupsBackupIdRoute,
  getDatabasesMysqlInstancesInstanceIdBackupsRoute,
  getDatabasesMysqlInstancesInstanceIdCredentialsRoute,
  getDatabasesMysqlInstancesInstanceIdRoute,
  getDatabasesMysqlInstancesInstanceIdSslRoute,
  getDatabasesMysqlInstancesRoute,
  getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRoute,
  getDatabasesPostgresqlInstancesInstanceIdBackupsRoute,
  getDatabasesPostgresqlInstancesInstanceIdCredentialsRoute,
  getDatabasesPostgresqlInstancesInstanceIdRoute,
  getDatabasesPostgresqlInstancesInstanceIdSslRoute,
  getDatabasesPostgresqlInstancesRoute,
  getDatabasesTypesRoute,
  getDatabasesTypesTypeIdRoute,
  getDomainsDomainIdRecordsRecordIdRoute,
  getDomainsDomainIdRecordsRoute,
  getDomainsDomainIdRoute,
  getDomainsDomainIdZoneFileRoute,
  getDomainsRoute,
  getImagesImageIdRoute,
  getImagesRoute,
  getLinodeInstancesLinodeIdBackupsBackupIdRoute,
  getLinodeInstancesLinodeIdBackupsRoute,
  getLinodeInstancesLinodeIdConfigsConfigIdRoute,
  getLinodeInstancesLinodeIdConfigsRoute,
  getLinodeInstancesLinodeIdDisksDiskIdRoute,
  getLinodeInstancesLinodeIdDisksRoute,
  getLinodeInstancesLinodeIdFirewallsRoute,
  getLinodeInstancesLinodeIdIpsAddressRoute,
  getLinodeInstancesLinodeIdIpsRoute,
  getLinodeInstancesLinodeIdNodebalancersRoute,
  getLinodeInstancesLinodeIdRoute,
  getLinodeInstancesLinodeIdStatsRoute,
  getLinodeInstancesLinodeIdStatsYearMonthRoute,
  getLinodeInstancesLinodeIdTransferRoute,
  getLinodeInstancesLinodeIdTransferYearMonthRoute,
  getLinodeInstancesLinodeIdVolumesRoute,
  getLinodeInstancesRoute,
  getLinodeKernelsKernelIdRoute,
  getLinodeKernelsRoute,
  getLinodeStackscriptsRoute,
  getLinodeStackscriptsStackscriptIdRoute,
  getLinodeTypesRoute,
  getLinodeTypesTypeIdRoute,
  getLkeClustersClusterIdApiEndpointsRoute,
  getLkeClustersClusterIdDashboardRoute,
  getLkeClustersClusterIdKubeconfigRoute,
  getLkeClustersClusterIdNodesNodeIdRoute,
  getLkeClustersClusterIdPoolsPoolIdRoute,
  getLkeClustersClusterIdPoolsRoute,
  getLkeClustersClusterIdRoute,
  getLkeClustersRoute,
  getLkeVersionsRoute,
  getLkeVersionsVersionRoute,
  getLongviewClientsClientIdRoute,
  getLongviewClientsRoute,
  getLongviewPlanRoute,
  getLongviewSubscriptionsRoute,
  getLongviewSubscriptionsSubscriptionIdRoute,
  getManagedContactsContactIdRoute,
  getManagedContactsRoute,
  getManagedCredentialsCredentialIdRoute,
  getManagedCredentialsRoute,
  getManagedCredentialsSshkeyRoute,
  getManagedIssuesIssueIdRoute,
  getManagedIssuesRoute,
  getManagedLinodeSettingsLinodeIdRoute,
  getManagedLinodeSettingsRoute,
  getManagedServicesRoute,
  getManagedServicesServiceIdRoute,
  getManagedStatsRoute,
  getNetworkingFirewallsFirewallIdDevicesDeviceIdRoute,
  getNetworkingFirewallsFirewallIdDevicesRoute,
  getNetworkingFirewallsFirewallIdRoute,
  getNetworkingFirewallsFirewallIdRulesRoute,
  getNetworkingFirewallsRoute,
  getNetworkingIpsAddressRoute,
  getNetworkingIpsRoute,
  getNetworkingIpv6PoolsRoute,
  getNetworkingIpv6RangesRangeRoute,
  getNetworkingIpv6RangesRoute,
  getNetworkingVlansRoute,
  getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  getNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute,
  getNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  getNodebalancersNodeBalancerIdConfigsRoute,
  getNodebalancersNodeBalancerIdRoute,
  getNodebalancersNodeBalancerIdStatsRoute,
  getNodebalancersRoute,
  getObjectStorageBucketsClusterIdBucketObjectAclRoute,
  getObjectStorageBucketsClusterIdBucketObjectListRoute,
  getObjectStorageBucketsClusterIdBucketRoute,
  getObjectStorageBucketsClusterIdBucketSslRoute,
  getObjectStorageBucketsClusterIdRoute,
  getObjectStorageBucketsRoute,
  getObjectStorageClustersClusterIdRoute,
  getObjectStorageClustersRoute,
  getObjectStorageKeysKeyIdRoute,
  getObjectStorageKeysRoute,
  getObjectStorageTransferRoute,
  getProfileAppsAppIdRoute,
  getProfileAppsRoute,
  getProfileDevicesDeviceIdRoute,
  getProfileDevicesRoute,
  getProfileGrantsRoute,
  getProfileLoginsLoginIdRoute,
  getProfileLoginsRoute,
  getProfilePreferencesRoute,
  getProfileRoute,
  getProfileSecurityQuestionsRoute,
  getProfileSshkeysRoute,
  getProfileSshkeysSshKeyIdRoute,
  getProfileTokensRoute,
  getProfileTokensTokenIdRoute,
  getRegionsRegionIdRoute,
  getRegionsRoute,
  getSupportTicketsRoute,
  getSupportTicketsTicketIdRepliesRoute,
  getSupportTicketsTicketIdRoute,
  getTagsLabelRoute,
  getTagsRoute,
  getVolumesRoute,
  getVolumesVolumeIdRoute,
  postAccountCancelRoute,
  postAccountCreditCardRoute,
  postAccountEntityTransfersRoute,
  postAccountEntityTransfersTokenAcceptRoute,
  postAccountEventsEventIdReadRoute,
  postAccountEventsEventIdSeenRoute,
  postAccountOauthClientsClientIdResetSecretRoute,
  postAccountOauthClientsRoute,
  postAccountPaymentMethodsPaymentMethodIdMakeDefaultRoute,
  postAccountPaymentMethodsRoute,
  postAccountPaymentsPaypalExecuteRoute,
  postAccountPaymentsPaypalRoute,
  postAccountPaymentsRoute,
  postAccountPromoCodesRoute,
  postAccountServiceTransfersRoute,
  postAccountServiceTransfersTokenAcceptRoute,
  postAccountSettingsManagedEnableRoute,
  postAccountUsersRoute,
  postDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreRoute,
  postDatabasesMongodbInstancesInstanceIdBackupsRoute,
  postDatabasesMongodbInstancesInstanceIdCredentialsResetRoute,
  postDatabasesMongodbInstancesInstanceIdPatchRoute,
  postDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreRoute,
  postDatabasesMysqlInstancesInstanceIdBackupsRoute,
  postDatabasesMysqlInstancesInstanceIdCredentialsResetRoute,
  postDatabasesMysqlInstancesInstanceIdPatchRoute,
  postDatabasesMysqlInstancesRoute,
  postDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreRoute,
  postDatabasesPostgresqlInstancesInstanceIdBackupsRoute,
  postDatabasesPostgresqlInstancesInstanceIdCredentialsResetRoute,
  postDatabasesPostgresqlInstancesInstanceIdPatchRoute,
  postDatabasesPostgresqlInstancesRoute,
  postDomainsDomainIdCloneRoute,
  postDomainsDomainIdRecordsRoute,
  postDomainsImportRoute,
  postDomainsRoute,
  postImagesRoute,
  postImagesUploadRoute,
  postLinodeInstancesLinodeIdBackupsBackupIdRestoreRoute,
  postLinodeInstancesLinodeIdBackupsCancelRoute,
  postLinodeInstancesLinodeIdBackupsEnableRoute,
  postLinodeInstancesLinodeIdBackupsRoute,
  postLinodeInstancesLinodeIdBootRoute,
  postLinodeInstancesLinodeIdCloneRoute,
  postLinodeInstancesLinodeIdConfigsRoute,
  postLinodeInstancesLinodeIdDisksDiskIdCloneRoute,
  postLinodeInstancesLinodeIdDisksDiskIdPasswordRoute,
  postLinodeInstancesLinodeIdDisksDiskIdResizeRoute,
  postLinodeInstancesLinodeIdDisksRoute,
  postLinodeInstancesLinodeIdIpsRoute,
  postLinodeInstancesLinodeIdMigrateRoute,
  postLinodeInstancesLinodeIdMutateRoute,
  postLinodeInstancesLinodeIdPasswordRoute,
  postLinodeInstancesLinodeIdRebootRoute,
  postLinodeInstancesLinodeIdRebuildRoute,
  postLinodeInstancesLinodeIdRescueRoute,
  postLinodeInstancesLinodeIdResizeRoute,
  postLinodeInstancesLinodeIdShutdownRoute,
  postLinodeInstancesRoute,
  postLinodeStackscriptsRoute,
  postLkeClustersClusterIdNodesNodeIdRecycleRoute,
  postLkeClustersClusterIdPoolsPoolIdRecycleRoute,
  postLkeClustersClusterIdPoolsRoute,
  postLkeClustersClusterIdRecycleRoute,
  postLkeClustersClusterIdRegenerateRoute,
  postLkeClustersRoute,
  postLongviewClientsRoute,
  postManagedContactsRoute,
  postManagedCredentialsCredentialIdRevokeRoute,
  postManagedCredentialsCredentialIdUpdateRoute,
  postManagedCredentialsRoute,
  postManagedServicesRoute,
  postManagedServicesServiceIdDisableRoute,
  postManagedServicesServiceIdEnableRoute,
  postNetworkingFirewallsFirewallIdDevicesRoute,
  postNetworkingFirewallsRoute,
  postNetworkingIpsAssignRoute,
  postNetworkingIpsRoute,
  postNetworkingIpsShareRoute,
  postNetworkingIpv4AssignRoute,
  postNetworkingIpv4ShareRoute,
  postNetworkingIpv6RangesRoute,
  postNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute,
  postNodebalancersNodeBalancerIdConfigsConfigIdRebuildRoute,
  postNodebalancersNodeBalancerIdConfigsRoute,
  postNodebalancersRoute,
  postObjectStorageBucketsClusterIdBucketAccessRoute,
  postObjectStorageBucketsClusterIdBucketObjectUrlRoute,
  postObjectStorageBucketsClusterIdBucketSslRoute,
  postObjectStorageBucketsRoute,
  postObjectStorageCancelRoute,
  postObjectStorageKeysRoute,
  postProfilePhoneNumberRoute,
  postProfilePhoneNumberVerifyRoute,
  postProfileSecurityQuestionsRoute,
  postProfileSshkeysRoute,
  postProfileTfaDisableRoute,
  postProfileTfaEnableConfirmRoute,
  postProfileTfaEnableRoute,
  postProfileTokensRoute,
  postSupportTicketsRoute,
  postSupportTicketsTicketIdAttachmentsRoute,
  postSupportTicketsTicketIdCloseRoute,
  postSupportTicketsTicketIdRepliesRoute,
  postTagsRoute,
  postVolumesRoute,
  postVolumesVolumeIdAttachRoute,
  postVolumesVolumeIdCloneRoute,
  postVolumesVolumeIdDetachRoute,
  postVolumesVolumeIdResizeRoute,
  putAccountOauthClientsClientIdRoute,
  putAccountOauthClientsClientIdThumbnailRoute,
  putAccountRoute,
  putAccountSettingsRoute,
  putAccountUsersUsernameGrantsRoute,
  putAccountUsersUsernameRoute,
  putDatabasesMongodbInstancesInstanceIdRoute,
  putDatabasesMysqlInstancesInstanceIdRoute,
  putDatabasesPostgresqlInstancesInstanceIdRoute,
  putDomainsDomainIdRecordsRecordIdRoute,
  putDomainsDomainIdRoute,
  putImagesImageIdRoute,
  putLinodeInstancesLinodeIdConfigsConfigIdRoute,
  putLinodeInstancesLinodeIdDisksDiskIdRoute,
  putLinodeInstancesLinodeIdIpsAddressRoute,
  putLinodeInstancesLinodeIdRoute,
  putLinodeStackscriptsStackscriptIdRoute,
  putLkeClustersClusterIdPoolsPoolIdRoute,
  putLkeClustersClusterIdRoute,
  putLongviewClientsClientIdRoute,
  putLongviewPlanRoute,
  putManagedContactsContactIdRoute,
  putManagedCredentialsCredentialIdRoute,
  putManagedLinodeSettingsLinodeIdRoute,
  putManagedServicesServiceIdRoute,
  putNetworkingFirewallsFirewallIdRoute,
  putNetworkingFirewallsFirewallIdRulesRoute,
  putNetworkingIpsAddressRoute,
  putNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  putNodebalancersNodeBalancerIdConfigsConfigIdRoute,
  putNodebalancersNodeBalancerIdRoute,
  putObjectStorageBucketsClusterIdBucketAccessRoute,
  putObjectStorageBucketsClusterIdBucketObjectAclRoute,
  putObjectStorageKeysKeyIdRoute,
  putProfilePreferencesRoute,
  putProfileRoute,
  putProfileSshkeysSshKeyIdRoute,
  putProfileTokensTokenIdRoute,
  putVolumesVolumeIdRoute,
} from './routes'
import {
  deleteAccountEntityTransfersTokenRouteHandler,
  deleteAccountOauthClientsClientIdRouteHandler,
  deleteAccountPaymentMethodsPaymentMethodIdRouteHandler,
  deleteAccountServiceTransfersTokenRouteHandler,
  deleteAccountUsersUsernameRouteHandler,
  deleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdRouteHandler,
  deleteDatabasesMongodbInstancesInstanceIdRouteHandler,
  deleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdRouteHandler,
  deleteDatabasesMysqlInstancesInstanceIdRouteHandler,
  deleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRouteHandler,
  deleteDatabasesPostgresqlInstancesInstanceIdRouteHandler,
  deleteDomainsDomainIdRecordsRecordIdRouteHandler,
  deleteDomainsDomainIdRouteHandler,
  deleteImagesImageIdRouteHandler,
  deleteLinodeInstancesLinodeIdConfigsConfigIdRouteHandler,
  deleteLinodeInstancesLinodeIdDisksDiskIdRouteHandler,
  deleteLinodeInstancesLinodeIdIpsAddressRouteHandler,
  deleteLinodeInstancesLinodeIdRouteHandler,
  deleteLinodeStackscriptsStackscriptIdRouteHandler,
  deleteLkeClustersClusterIdKubeconfigRouteHandler,
  deleteLkeClustersClusterIdNodesNodeIdRouteHandler,
  deleteLkeClustersClusterIdPoolsPoolIdRouteHandler,
  deleteLkeClustersClusterIdRouteHandler,
  deleteLkeClustersClusterIdServicetokenRouteHandler,
  deleteLongviewClientsClientIdRouteHandler,
  deleteManagedContactsContactIdRouteHandler,
  deleteManagedServicesServiceIdRouteHandler,
  deleteNetworkingFirewallsFirewallIdDevicesDeviceIdRouteHandler,
  deleteNetworkingFirewallsFirewallIdRouteHandler,
  deleteNetworkingIpv6RangesRangeRouteHandler,
  deleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRouteHandler,
  deleteNodebalancersNodeBalancerIdConfigsConfigIdRouteHandler,
  deleteNodebalancersNodeBalancerIdRouteHandler,
  deleteObjectStorageBucketsClusterIdBucketRouteHandler,
  deleteObjectStorageBucketsClusterIdBucketSslRouteHandler,
  deleteObjectStorageKeysKeyIdRouteHandler,
  deleteProfileAppsAppIdRouteHandler,
  deleteProfileDevicesDeviceIdRouteHandler,
  deleteProfilePhoneNumberRouteHandler,
  deleteProfileSshkeysSshKeyIdRouteHandler,
  deleteProfileTokensTokenIdRouteHandler,
  deleteTagsLabelRouteHandler,
  deleteVolumesVolumeIdRouteHandler,
  getAccountEntityTransfersRouteHandler,
  getAccountEntityTransfersTokenRouteHandler,
  getAccountEventsEventIdRouteHandler,
  getAccountEventsRouteHandler,
  getAccountInvoicesInvoiceIdItemsRouteHandler,
  getAccountInvoicesInvoiceIdRouteHandler,
  getAccountInvoicesRouteHandler,
  getAccountLoginsLoginIdRouteHandler,
  getAccountLoginsRouteHandler,
  getAccountMaintenanceRouteHandler,
  getAccountNotificationsRouteHandler,
  getAccountOauthClientsClientIdRouteHandler,
  getAccountOauthClientsClientIdThumbnailRouteHandler,
  getAccountOauthClientsRouteHandler,
  getAccountPaymentMethodsPaymentMethodIdRouteHandler,
  getAccountPaymentMethodsRouteHandler,
  getAccountPaymentsPaymentIdRouteHandler,
  getAccountPaymentsRouteHandler,
  getAccountRouteHandler,
  getAccountServiceTransfersRouteHandler,
  getAccountServiceTransfersTokenRouteHandler,
  getAccountSettingsRouteHandler,
  getAccountTransferRouteHandler,
  getAccountUsersRouteHandler,
  getAccountUsersUsernameGrantsRouteHandler,
  getAccountUsersUsernameRouteHandler,
  getDatabasesEnginesEngineIdRouteHandler,
  getDatabasesEnginesRouteHandler,
  getDatabasesInstancesRouteHandler,
  getDatabasesMongodbInstancesInstanceIdBackupsBackupIdRouteHandler,
  getDatabasesMongodbInstancesInstanceIdBackupsRouteHandler,
  getDatabasesMongodbInstancesInstanceIdCredentialsRouteHandler,
  getDatabasesMongodbInstancesInstanceIdRouteHandler,
  getDatabasesMongodbInstancesInstanceIdSslRouteHandler,
  getDatabasesMongodbInstancesRouteHandler,
  getDatabasesMysqlInstancesInstanceIdBackupsBackupIdRouteHandler,
  getDatabasesMysqlInstancesInstanceIdBackupsRouteHandler,
  getDatabasesMysqlInstancesInstanceIdCredentialsRouteHandler,
  getDatabasesMysqlInstancesInstanceIdRouteHandler,
  getDatabasesMysqlInstancesInstanceIdSslRouteHandler,
  getDatabasesMysqlInstancesRouteHandler,
  getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRouteHandler,
  getDatabasesPostgresqlInstancesInstanceIdBackupsRouteHandler,
  getDatabasesPostgresqlInstancesInstanceIdCredentialsRouteHandler,
  getDatabasesPostgresqlInstancesInstanceIdRouteHandler,
  getDatabasesPostgresqlInstancesInstanceIdSslRouteHandler,
  getDatabasesPostgresqlInstancesRouteHandler,
  getDatabasesTypesRouteHandler,
  getDatabasesTypesTypeIdRouteHandler,
  getDomainsDomainIdRecordsRecordIdRouteHandler,
  getDomainsDomainIdRecordsRouteHandler,
  getDomainsDomainIdRouteHandler,
  getDomainsDomainIdZoneFileRouteHandler,
  getDomainsRouteHandler,
  getImagesImageIdRouteHandler,
  getImagesRouteHandler,
  getLinodeInstancesLinodeIdBackupsBackupIdRouteHandler,
  getLinodeInstancesLinodeIdBackupsRouteHandler,
  getLinodeInstancesLinodeIdConfigsConfigIdRouteHandler,
  getLinodeInstancesLinodeIdConfigsRouteHandler,
  getLinodeInstancesLinodeIdDisksDiskIdRouteHandler,
  getLinodeInstancesLinodeIdDisksRouteHandler,
  getLinodeInstancesLinodeIdFirewallsRouteHandler,
  getLinodeInstancesLinodeIdIpsAddressRouteHandler,
  getLinodeInstancesLinodeIdIpsRouteHandler,
  getLinodeInstancesLinodeIdNodebalancersRouteHandler,
  getLinodeInstancesLinodeIdRouteHandler,
  getLinodeInstancesLinodeIdStatsRouteHandler,
  getLinodeInstancesLinodeIdStatsYearMonthRouteHandler,
  getLinodeInstancesLinodeIdTransferRouteHandler,
  getLinodeInstancesLinodeIdTransferYearMonthRouteHandler,
  getLinodeInstancesLinodeIdVolumesRouteHandler,
  getLinodeInstancesRouteHandler,
  getLinodeKernelsKernelIdRouteHandler,
  getLinodeKernelsRouteHandler,
  getLinodeStackscriptsRouteHandler,
  getLinodeStackscriptsStackscriptIdRouteHandler,
  getLinodeTypesRouteHandler,
  getLinodeTypesTypeIdRouteHandler,
  getLkeClustersClusterIdApiEndpointsRouteHandler,
  getLkeClustersClusterIdDashboardRouteHandler,
  getLkeClustersClusterIdKubeconfigRouteHandler,
  getLkeClustersClusterIdNodesNodeIdRouteHandler,
  getLkeClustersClusterIdPoolsPoolIdRouteHandler,
  getLkeClustersClusterIdPoolsRouteHandler,
  getLkeClustersClusterIdRouteHandler,
  getLkeClustersRouteHandler,
  getLkeVersionsRouteHandler,
  getLkeVersionsVersionRouteHandler,
  getLongviewClientsClientIdRouteHandler,
  getLongviewClientsRouteHandler,
  getLongviewPlanRouteHandler,
  getLongviewSubscriptionsRouteHandler,
  getLongviewSubscriptionsSubscriptionIdRouteHandler,
  getManagedContactsContactIdRouteHandler,
  getManagedContactsRouteHandler,
  getManagedCredentialsCredentialIdRouteHandler,
  getManagedCredentialsRouteHandler,
  getManagedCredentialsSshkeyRouteHandler,
  getManagedIssuesIssueIdRouteHandler,
  getManagedIssuesRouteHandler,
  getManagedLinodeSettingsLinodeIdRouteHandler,
  getManagedLinodeSettingsRouteHandler,
  getManagedServicesRouteHandler,
  getManagedServicesServiceIdRouteHandler,
  getManagedStatsRouteHandler,
  getNetworkingFirewallsFirewallIdDevicesDeviceIdRouteHandler,
  getNetworkingFirewallsFirewallIdDevicesRouteHandler,
  getNetworkingFirewallsFirewallIdRouteHandler,
  getNetworkingFirewallsFirewallIdRulesRouteHandler,
  getNetworkingFirewallsRouteHandler,
  getNetworkingIpsAddressRouteHandler,
  getNetworkingIpsRouteHandler,
  getNetworkingIpv6PoolsRouteHandler,
  getNetworkingIpv6RangesRangeRouteHandler,
  getNetworkingIpv6RangesRouteHandler,
  getNetworkingVlansRouteHandler,
  getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRouteHandler,
  getNodebalancersNodeBalancerIdConfigsConfigIdNodesRouteHandler,
  getNodebalancersNodeBalancerIdConfigsConfigIdRouteHandler,
  getNodebalancersNodeBalancerIdConfigsRouteHandler,
  getNodebalancersNodeBalancerIdRouteHandler,
  getNodebalancersNodeBalancerIdStatsRouteHandler,
  getNodebalancersRouteHandler,
  getObjectStorageBucketsClusterIdBucketObjectAclRouteHandler,
  getObjectStorageBucketsClusterIdBucketObjectListRouteHandler,
  getObjectStorageBucketsClusterIdBucketRouteHandler,
  getObjectStorageBucketsClusterIdBucketSslRouteHandler,
  getObjectStorageBucketsClusterIdRouteHandler,
  getObjectStorageBucketsRouteHandler,
  getObjectStorageClustersClusterIdRouteHandler,
  getObjectStorageClustersRouteHandler,
  getObjectStorageKeysKeyIdRouteHandler,
  getObjectStorageKeysRouteHandler,
  getObjectStorageTransferRouteHandler,
  getProfileAppsAppIdRouteHandler,
  getProfileAppsRouteHandler,
  getProfileDevicesDeviceIdRouteHandler,
  getProfileDevicesRouteHandler,
  getProfileGrantsRouteHandler,
  getProfileLoginsLoginIdRouteHandler,
  getProfileLoginsRouteHandler,
  getProfilePreferencesRouteHandler,
  getProfileRouteHandler,
  getProfileSecurityQuestionsRouteHandler,
  getProfileSshkeysRouteHandler,
  getProfileSshkeysSshKeyIdRouteHandler,
  getProfileTokensRouteHandler,
  getProfileTokensTokenIdRouteHandler,
  getRegionsRegionIdRouteHandler,
  getRegionsRouteHandler,
  getSupportTicketsRouteHandler,
  getSupportTicketsTicketIdRepliesRouteHandler,
  getSupportTicketsTicketIdRouteHandler,
  getTagsLabelRouteHandler,
  getTagsRouteHandler,
  getVolumesRouteHandler,
  getVolumesVolumeIdRouteHandler,
  postAccountCancelRouteHandler,
  postAccountCreditCardRouteHandler,
  postAccountEntityTransfersRouteHandler,
  postAccountEntityTransfersTokenAcceptRouteHandler,
  postAccountEventsEventIdReadRouteHandler,
  postAccountEventsEventIdSeenRouteHandler,
  postAccountOauthClientsClientIdResetSecretRouteHandler,
  postAccountOauthClientsRouteHandler,
  postAccountPaymentMethodsPaymentMethodIdMakeDefaultRouteHandler,
  postAccountPaymentMethodsRouteHandler,
  postAccountPaymentsPaypalExecuteRouteHandler,
  postAccountPaymentsPaypalRouteHandler,
  postAccountPaymentsRouteHandler,
  postAccountPromoCodesRouteHandler,
  postAccountServiceTransfersRouteHandler,
  postAccountServiceTransfersTokenAcceptRouteHandler,
  postAccountSettingsManagedEnableRouteHandler,
  postAccountUsersRouteHandler,
  postDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreRouteHandler,
  postDatabasesMongodbInstancesInstanceIdBackupsRouteHandler,
  postDatabasesMongodbInstancesInstanceIdCredentialsResetRouteHandler,
  postDatabasesMongodbInstancesInstanceIdPatchRouteHandler,
  postDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreRouteHandler,
  postDatabasesMysqlInstancesInstanceIdBackupsRouteHandler,
  postDatabasesMysqlInstancesInstanceIdCredentialsResetRouteHandler,
  postDatabasesMysqlInstancesInstanceIdPatchRouteHandler,
  postDatabasesMysqlInstancesRouteHandler,
  postDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreRouteHandler,
  postDatabasesPostgresqlInstancesInstanceIdBackupsRouteHandler,
  postDatabasesPostgresqlInstancesInstanceIdCredentialsResetRouteHandler,
  postDatabasesPostgresqlInstancesInstanceIdPatchRouteHandler,
  postDatabasesPostgresqlInstancesRouteHandler,
  postDomainsDomainIdCloneRouteHandler,
  postDomainsDomainIdRecordsRouteHandler,
  postDomainsImportRouteHandler,
  postDomainsRouteHandler,
  postImagesRouteHandler,
  postImagesUploadRouteHandler,
  postLinodeInstancesLinodeIdBackupsBackupIdRestoreRouteHandler,
  postLinodeInstancesLinodeIdBackupsCancelRouteHandler,
  postLinodeInstancesLinodeIdBackupsEnableRouteHandler,
  postLinodeInstancesLinodeIdBackupsRouteHandler,
  postLinodeInstancesLinodeIdBootRouteHandler,
  postLinodeInstancesLinodeIdCloneRouteHandler,
  postLinodeInstancesLinodeIdConfigsRouteHandler,
  postLinodeInstancesLinodeIdDisksDiskIdCloneRouteHandler,
  postLinodeInstancesLinodeIdDisksDiskIdPasswordRouteHandler,
  postLinodeInstancesLinodeIdDisksDiskIdResizeRouteHandler,
  postLinodeInstancesLinodeIdDisksRouteHandler,
  postLinodeInstancesLinodeIdIpsRouteHandler,
  postLinodeInstancesLinodeIdMigrateRouteHandler,
  postLinodeInstancesLinodeIdMutateRouteHandler,
  postLinodeInstancesLinodeIdPasswordRouteHandler,
  postLinodeInstancesLinodeIdRebootRouteHandler,
  postLinodeInstancesLinodeIdRebuildRouteHandler,
  postLinodeInstancesLinodeIdRescueRouteHandler,
  postLinodeInstancesLinodeIdResizeRouteHandler,
  postLinodeInstancesLinodeIdShutdownRouteHandler,
  postLinodeInstancesRouteHandler,
  postLinodeStackscriptsRouteHandler,
  postLkeClustersClusterIdNodesNodeIdRecycleRouteHandler,
  postLkeClustersClusterIdPoolsPoolIdRecycleRouteHandler,
  postLkeClustersClusterIdPoolsRouteHandler,
  postLkeClustersClusterIdRecycleRouteHandler,
  postLkeClustersClusterIdRegenerateRouteHandler,
  postLkeClustersRouteHandler,
  postLongviewClientsRouteHandler,
  postManagedContactsRouteHandler,
  postManagedCredentialsCredentialIdRevokeRouteHandler,
  postManagedCredentialsCredentialIdUpdateRouteHandler,
  postManagedCredentialsRouteHandler,
  postManagedServicesRouteHandler,
  postManagedServicesServiceIdDisableRouteHandler,
  postManagedServicesServiceIdEnableRouteHandler,
  postNetworkingFirewallsFirewallIdDevicesRouteHandler,
  postNetworkingFirewallsRouteHandler,
  postNetworkingIpsAssignRouteHandler,
  postNetworkingIpsRouteHandler,
  postNetworkingIpsShareRouteHandler,
  postNetworkingIpv4AssignRouteHandler,
  postNetworkingIpv4ShareRouteHandler,
  postNetworkingIpv6RangesRouteHandler,
  postNodebalancersNodeBalancerIdConfigsConfigIdNodesRouteHandler,
  postNodebalancersNodeBalancerIdConfigsConfigIdRebuildRouteHandler,
  postNodebalancersNodeBalancerIdConfigsRouteHandler,
  postNodebalancersRouteHandler,
  postObjectStorageBucketsClusterIdBucketAccessRouteHandler,
  postObjectStorageBucketsClusterIdBucketObjectUrlRouteHandler,
  postObjectStorageBucketsClusterIdBucketSslRouteHandler,
  postObjectStorageBucketsRouteHandler,
  postObjectStorageCancelRouteHandler,
  postObjectStorageKeysRouteHandler,
  postProfilePhoneNumberRouteHandler,
  postProfilePhoneNumberVerifyRouteHandler,
  postProfileSecurityQuestionsRouteHandler,
  postProfileSshkeysRouteHandler,
  postProfileTfaDisableRouteHandler,
  postProfileTfaEnableConfirmRouteHandler,
  postProfileTfaEnableRouteHandler,
  postProfileTokensRouteHandler,
  postSupportTicketsRouteHandler,
  postSupportTicketsTicketIdAttachmentsRouteHandler,
  postSupportTicketsTicketIdCloseRouteHandler,
  postSupportTicketsTicketIdRepliesRouteHandler,
  postTagsRouteHandler,
  postVolumesRouteHandler,
  postVolumesVolumeIdAttachRouteHandler,
  postVolumesVolumeIdCloneRouteHandler,
  postVolumesVolumeIdDetachRouteHandler,
  postVolumesVolumeIdResizeRouteHandler,
  putAccountOauthClientsClientIdRouteHandler,
  putAccountOauthClientsClientIdThumbnailRouteHandler,
  putAccountRouteHandler,
  putAccountSettingsRouteHandler,
  putAccountUsersUsernameGrantsRouteHandler,
  putAccountUsersUsernameRouteHandler,
  putDatabasesMongodbInstancesInstanceIdRouteHandler,
  putDatabasesMysqlInstancesInstanceIdRouteHandler,
  putDatabasesPostgresqlInstancesInstanceIdRouteHandler,
  putDomainsDomainIdRecordsRecordIdRouteHandler,
  putDomainsDomainIdRouteHandler,
  putImagesImageIdRouteHandler,
  putLinodeInstancesLinodeIdConfigsConfigIdRouteHandler,
  putLinodeInstancesLinodeIdDisksDiskIdRouteHandler,
  putLinodeInstancesLinodeIdIpsAddressRouteHandler,
  putLinodeInstancesLinodeIdRouteHandler,
  putLinodeStackscriptsStackscriptIdRouteHandler,
  putLkeClustersClusterIdPoolsPoolIdRouteHandler,
  putLkeClustersClusterIdRouteHandler,
  putLongviewClientsClientIdRouteHandler,
  putLongviewPlanRouteHandler,
  putManagedContactsContactIdRouteHandler,
  putManagedCredentialsCredentialIdRouteHandler,
  putManagedLinodeSettingsLinodeIdRouteHandler,
  putManagedServicesServiceIdRouteHandler,
  putNetworkingFirewallsFirewallIdRouteHandler,
  putNetworkingFirewallsFirewallIdRulesRouteHandler,
  putNetworkingIpsAddressRouteHandler,
  putNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRouteHandler,
  putNodebalancersNodeBalancerIdConfigsConfigIdRouteHandler,
  putNodebalancersNodeBalancerIdRouteHandler,
  putObjectStorageBucketsClusterIdBucketAccessRouteHandler,
  putObjectStorageBucketsClusterIdBucketObjectAclRouteHandler,
  putObjectStorageKeysKeyIdRouteHandler,
  putProfilePreferencesRouteHandler,
  putProfileRouteHandler,
  putProfileSshkeysSshKeyIdRouteHandler,
  putProfileTokensTokenIdRouteHandler,
  putVolumesVolumeIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(putAccountRoute, putAccountRouteHandler)
  .openapi(postAccountCancelRoute, postAccountCancelRouteHandler)
  .openapi(postAccountCreditCardRoute, postAccountCreditCardRouteHandler)
  .openapi(getAccountEntityTransfersRoute, getAccountEntityTransfersRouteHandler)
  .openapi(postAccountEntityTransfersRoute, postAccountEntityTransfersRouteHandler)
  .openapi(deleteAccountEntityTransfersTokenRoute, deleteAccountEntityTransfersTokenRouteHandler)
  .openapi(getAccountEntityTransfersTokenRoute, getAccountEntityTransfersTokenRouteHandler)
  .openapi(
    postAccountEntityTransfersTokenAcceptRoute,
    postAccountEntityTransfersTokenAcceptRouteHandler,
  )
  .openapi(getAccountEventsRoute, getAccountEventsRouteHandler)
  .openapi(getAccountEventsEventIdRoute, getAccountEventsEventIdRouteHandler)
  .openapi(postAccountEventsEventIdReadRoute, postAccountEventsEventIdReadRouteHandler)
  .openapi(postAccountEventsEventIdSeenRoute, postAccountEventsEventIdSeenRouteHandler)
  .openapi(getAccountInvoicesRoute, getAccountInvoicesRouteHandler)
  .openapi(getAccountInvoicesInvoiceIdRoute, getAccountInvoicesInvoiceIdRouteHandler)
  .openapi(getAccountInvoicesInvoiceIdItemsRoute, getAccountInvoicesInvoiceIdItemsRouteHandler)
  .openapi(getAccountLoginsRoute, getAccountLoginsRouteHandler)
  .openapi(getAccountLoginsLoginIdRoute, getAccountLoginsLoginIdRouteHandler)
  .openapi(getAccountMaintenanceRoute, getAccountMaintenanceRouteHandler)
  .openapi(getAccountNotificationsRoute, getAccountNotificationsRouteHandler)
  .openapi(getAccountOauthClientsRoute, getAccountOauthClientsRouteHandler)
  .openapi(postAccountOauthClientsRoute, postAccountOauthClientsRouteHandler)
  .openapi(deleteAccountOauthClientsClientIdRoute, deleteAccountOauthClientsClientIdRouteHandler)
  .openapi(getAccountOauthClientsClientIdRoute, getAccountOauthClientsClientIdRouteHandler)
  .openapi(putAccountOauthClientsClientIdRoute, putAccountOauthClientsClientIdRouteHandler)
  .openapi(
    postAccountOauthClientsClientIdResetSecretRoute,
    postAccountOauthClientsClientIdResetSecretRouteHandler,
  )
  .openapi(
    getAccountOauthClientsClientIdThumbnailRoute,
    getAccountOauthClientsClientIdThumbnailRouteHandler,
  )
  .openapi(
    putAccountOauthClientsClientIdThumbnailRoute,
    putAccountOauthClientsClientIdThumbnailRouteHandler,
  )
  .openapi(getAccountPaymentMethodsRoute, getAccountPaymentMethodsRouteHandler)
  .openapi(postAccountPaymentMethodsRoute, postAccountPaymentMethodsRouteHandler)
  .openapi(
    deleteAccountPaymentMethodsPaymentMethodIdRoute,
    deleteAccountPaymentMethodsPaymentMethodIdRouteHandler,
  )
  .openapi(
    getAccountPaymentMethodsPaymentMethodIdRoute,
    getAccountPaymentMethodsPaymentMethodIdRouteHandler,
  )
  .openapi(
    postAccountPaymentMethodsPaymentMethodIdMakeDefaultRoute,
    postAccountPaymentMethodsPaymentMethodIdMakeDefaultRouteHandler,
  )
  .openapi(getAccountPaymentsRoute, getAccountPaymentsRouteHandler)
  .openapi(postAccountPaymentsRoute, postAccountPaymentsRouteHandler)
  .openapi(postAccountPaymentsPaypalRoute, postAccountPaymentsPaypalRouteHandler)
  .openapi(postAccountPaymentsPaypalExecuteRoute, postAccountPaymentsPaypalExecuteRouteHandler)
  .openapi(getAccountPaymentsPaymentIdRoute, getAccountPaymentsPaymentIdRouteHandler)
  .openapi(postAccountPromoCodesRoute, postAccountPromoCodesRouteHandler)
  .openapi(getAccountServiceTransfersRoute, getAccountServiceTransfersRouteHandler)
  .openapi(postAccountServiceTransfersRoute, postAccountServiceTransfersRouteHandler)
  .openapi(deleteAccountServiceTransfersTokenRoute, deleteAccountServiceTransfersTokenRouteHandler)
  .openapi(getAccountServiceTransfersTokenRoute, getAccountServiceTransfersTokenRouteHandler)
  .openapi(
    postAccountServiceTransfersTokenAcceptRoute,
    postAccountServiceTransfersTokenAcceptRouteHandler,
  )
  .openapi(getAccountSettingsRoute, getAccountSettingsRouteHandler)
  .openapi(putAccountSettingsRoute, putAccountSettingsRouteHandler)
  .openapi(postAccountSettingsManagedEnableRoute, postAccountSettingsManagedEnableRouteHandler)
  .openapi(getAccountTransferRoute, getAccountTransferRouteHandler)
  .openapi(getAccountUsersRoute, getAccountUsersRouteHandler)
  .openapi(postAccountUsersRoute, postAccountUsersRouteHandler)
  .openapi(deleteAccountUsersUsernameRoute, deleteAccountUsersUsernameRouteHandler)
  .openapi(getAccountUsersUsernameRoute, getAccountUsersUsernameRouteHandler)
  .openapi(putAccountUsersUsernameRoute, putAccountUsersUsernameRouteHandler)
  .openapi(getAccountUsersUsernameGrantsRoute, getAccountUsersUsernameGrantsRouteHandler)
  .openapi(putAccountUsersUsernameGrantsRoute, putAccountUsersUsernameGrantsRouteHandler)
  .openapi(getDatabasesEnginesRoute, getDatabasesEnginesRouteHandler)
  .openapi(getDatabasesEnginesEngineIdRoute, getDatabasesEnginesEngineIdRouteHandler)
  .openapi(getDatabasesInstancesRoute, getDatabasesInstancesRouteHandler)
  .openapi(getDatabasesMongodbInstancesRoute, getDatabasesMongodbInstancesRouteHandler)
  .openapi(
    deleteDatabasesMongodbInstancesInstanceIdRoute,
    deleteDatabasesMongodbInstancesInstanceIdRouteHandler,
  )
  .openapi(
    getDatabasesMongodbInstancesInstanceIdRoute,
    getDatabasesMongodbInstancesInstanceIdRouteHandler,
  )
  .openapi(
    putDatabasesMongodbInstancesInstanceIdRoute,
    putDatabasesMongodbInstancesInstanceIdRouteHandler,
  )
  .openapi(
    getDatabasesMongodbInstancesInstanceIdBackupsRoute,
    getDatabasesMongodbInstancesInstanceIdBackupsRouteHandler,
  )
  .openapi(
    postDatabasesMongodbInstancesInstanceIdBackupsRoute,
    postDatabasesMongodbInstancesInstanceIdBackupsRouteHandler,
  )
  .openapi(
    deleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdRoute,
    deleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdRouteHandler,
  )
  .openapi(
    getDatabasesMongodbInstancesInstanceIdBackupsBackupIdRoute,
    getDatabasesMongodbInstancesInstanceIdBackupsBackupIdRouteHandler,
  )
  .openapi(
    postDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreRoute,
    postDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreRouteHandler,
  )
  .openapi(
    getDatabasesMongodbInstancesInstanceIdCredentialsRoute,
    getDatabasesMongodbInstancesInstanceIdCredentialsRouteHandler,
  )
  .openapi(
    postDatabasesMongodbInstancesInstanceIdCredentialsResetRoute,
    postDatabasesMongodbInstancesInstanceIdCredentialsResetRouteHandler,
  )
  .openapi(
    postDatabasesMongodbInstancesInstanceIdPatchRoute,
    postDatabasesMongodbInstancesInstanceIdPatchRouteHandler,
  )
  .openapi(
    getDatabasesMongodbInstancesInstanceIdSslRoute,
    getDatabasesMongodbInstancesInstanceIdSslRouteHandler,
  )
  .openapi(getDatabasesMysqlInstancesRoute, getDatabasesMysqlInstancesRouteHandler)
  .openapi(postDatabasesMysqlInstancesRoute, postDatabasesMysqlInstancesRouteHandler)
  .openapi(
    deleteDatabasesMysqlInstancesInstanceIdRoute,
    deleteDatabasesMysqlInstancesInstanceIdRouteHandler,
  )
  .openapi(
    getDatabasesMysqlInstancesInstanceIdRoute,
    getDatabasesMysqlInstancesInstanceIdRouteHandler,
  )
  .openapi(
    putDatabasesMysqlInstancesInstanceIdRoute,
    putDatabasesMysqlInstancesInstanceIdRouteHandler,
  )
  .openapi(
    getDatabasesMysqlInstancesInstanceIdBackupsRoute,
    getDatabasesMysqlInstancesInstanceIdBackupsRouteHandler,
  )
  .openapi(
    postDatabasesMysqlInstancesInstanceIdBackupsRoute,
    postDatabasesMysqlInstancesInstanceIdBackupsRouteHandler,
  )
  .openapi(
    deleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdRoute,
    deleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdRouteHandler,
  )
  .openapi(
    getDatabasesMysqlInstancesInstanceIdBackupsBackupIdRoute,
    getDatabasesMysqlInstancesInstanceIdBackupsBackupIdRouteHandler,
  )
  .openapi(
    postDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreRoute,
    postDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreRouteHandler,
  )
  .openapi(
    getDatabasesMysqlInstancesInstanceIdCredentialsRoute,
    getDatabasesMysqlInstancesInstanceIdCredentialsRouteHandler,
  )
  .openapi(
    postDatabasesMysqlInstancesInstanceIdCredentialsResetRoute,
    postDatabasesMysqlInstancesInstanceIdCredentialsResetRouteHandler,
  )
  .openapi(
    postDatabasesMysqlInstancesInstanceIdPatchRoute,
    postDatabasesMysqlInstancesInstanceIdPatchRouteHandler,
  )
  .openapi(
    getDatabasesMysqlInstancesInstanceIdSslRoute,
    getDatabasesMysqlInstancesInstanceIdSslRouteHandler,
  )
  .openapi(getDatabasesPostgresqlInstancesRoute, getDatabasesPostgresqlInstancesRouteHandler)
  .openapi(postDatabasesPostgresqlInstancesRoute, postDatabasesPostgresqlInstancesRouteHandler)
  .openapi(
    deleteDatabasesPostgresqlInstancesInstanceIdRoute,
    deleteDatabasesPostgresqlInstancesInstanceIdRouteHandler,
  )
  .openapi(
    getDatabasesPostgresqlInstancesInstanceIdRoute,
    getDatabasesPostgresqlInstancesInstanceIdRouteHandler,
  )
  .openapi(
    putDatabasesPostgresqlInstancesInstanceIdRoute,
    putDatabasesPostgresqlInstancesInstanceIdRouteHandler,
  )
  .openapi(
    getDatabasesPostgresqlInstancesInstanceIdBackupsRoute,
    getDatabasesPostgresqlInstancesInstanceIdBackupsRouteHandler,
  )
  .openapi(
    postDatabasesPostgresqlInstancesInstanceIdBackupsRoute,
    postDatabasesPostgresqlInstancesInstanceIdBackupsRouteHandler,
  )
  .openapi(
    deleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRoute,
    deleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRouteHandler,
  )
  .openapi(
    getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRoute,
    getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRouteHandler,
  )
  .openapi(
    postDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreRoute,
    postDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreRouteHandler,
  )
  .openapi(
    getDatabasesPostgresqlInstancesInstanceIdCredentialsRoute,
    getDatabasesPostgresqlInstancesInstanceIdCredentialsRouteHandler,
  )
  .openapi(
    postDatabasesPostgresqlInstancesInstanceIdCredentialsResetRoute,
    postDatabasesPostgresqlInstancesInstanceIdCredentialsResetRouteHandler,
  )
  .openapi(
    postDatabasesPostgresqlInstancesInstanceIdPatchRoute,
    postDatabasesPostgresqlInstancesInstanceIdPatchRouteHandler,
  )
  .openapi(
    getDatabasesPostgresqlInstancesInstanceIdSslRoute,
    getDatabasesPostgresqlInstancesInstanceIdSslRouteHandler,
  )
  .openapi(getDatabasesTypesRoute, getDatabasesTypesRouteHandler)
  .openapi(getDatabasesTypesTypeIdRoute, getDatabasesTypesTypeIdRouteHandler)
  .openapi(getDomainsRoute, getDomainsRouteHandler)
  .openapi(postDomainsRoute, postDomainsRouteHandler)
  .openapi(postDomainsImportRoute, postDomainsImportRouteHandler)
  .openapi(deleteDomainsDomainIdRoute, deleteDomainsDomainIdRouteHandler)
  .openapi(getDomainsDomainIdRoute, getDomainsDomainIdRouteHandler)
  .openapi(putDomainsDomainIdRoute, putDomainsDomainIdRouteHandler)
  .openapi(postDomainsDomainIdCloneRoute, postDomainsDomainIdCloneRouteHandler)
  .openapi(getDomainsDomainIdRecordsRoute, getDomainsDomainIdRecordsRouteHandler)
  .openapi(postDomainsDomainIdRecordsRoute, postDomainsDomainIdRecordsRouteHandler)
  .openapi(
    deleteDomainsDomainIdRecordsRecordIdRoute,
    deleteDomainsDomainIdRecordsRecordIdRouteHandler,
  )
  .openapi(getDomainsDomainIdRecordsRecordIdRoute, getDomainsDomainIdRecordsRecordIdRouteHandler)
  .openapi(putDomainsDomainIdRecordsRecordIdRoute, putDomainsDomainIdRecordsRecordIdRouteHandler)
  .openapi(getDomainsDomainIdZoneFileRoute, getDomainsDomainIdZoneFileRouteHandler)
  .openapi(getImagesRoute, getImagesRouteHandler)
  .openapi(postImagesRoute, postImagesRouteHandler)
  .openapi(postImagesUploadRoute, postImagesUploadRouteHandler)
  .openapi(deleteImagesImageIdRoute, deleteImagesImageIdRouteHandler)
  .openapi(getImagesImageIdRoute, getImagesImageIdRouteHandler)
  .openapi(putImagesImageIdRoute, putImagesImageIdRouteHandler)
  .openapi(getLinodeInstancesRoute, getLinodeInstancesRouteHandler)
  .openapi(postLinodeInstancesRoute, postLinodeInstancesRouteHandler)
  .openapi(deleteLinodeInstancesLinodeIdRoute, deleteLinodeInstancesLinodeIdRouteHandler)
  .openapi(getLinodeInstancesLinodeIdRoute, getLinodeInstancesLinodeIdRouteHandler)
  .openapi(putLinodeInstancesLinodeIdRoute, putLinodeInstancesLinodeIdRouteHandler)
  .openapi(getLinodeInstancesLinodeIdBackupsRoute, getLinodeInstancesLinodeIdBackupsRouteHandler)
  .openapi(postLinodeInstancesLinodeIdBackupsRoute, postLinodeInstancesLinodeIdBackupsRouteHandler)
  .openapi(
    postLinodeInstancesLinodeIdBackupsCancelRoute,
    postLinodeInstancesLinodeIdBackupsCancelRouteHandler,
  )
  .openapi(
    postLinodeInstancesLinodeIdBackupsEnableRoute,
    postLinodeInstancesLinodeIdBackupsEnableRouteHandler,
  )
  .openapi(
    getLinodeInstancesLinodeIdBackupsBackupIdRoute,
    getLinodeInstancesLinodeIdBackupsBackupIdRouteHandler,
  )
  .openapi(
    postLinodeInstancesLinodeIdBackupsBackupIdRestoreRoute,
    postLinodeInstancesLinodeIdBackupsBackupIdRestoreRouteHandler,
  )
  .openapi(postLinodeInstancesLinodeIdBootRoute, postLinodeInstancesLinodeIdBootRouteHandler)
  .openapi(postLinodeInstancesLinodeIdCloneRoute, postLinodeInstancesLinodeIdCloneRouteHandler)
  .openapi(getLinodeInstancesLinodeIdConfigsRoute, getLinodeInstancesLinodeIdConfigsRouteHandler)
  .openapi(postLinodeInstancesLinodeIdConfigsRoute, postLinodeInstancesLinodeIdConfigsRouteHandler)
  .openapi(
    deleteLinodeInstancesLinodeIdConfigsConfigIdRoute,
    deleteLinodeInstancesLinodeIdConfigsConfigIdRouteHandler,
  )
  .openapi(
    getLinodeInstancesLinodeIdConfigsConfigIdRoute,
    getLinodeInstancesLinodeIdConfigsConfigIdRouteHandler,
  )
  .openapi(
    putLinodeInstancesLinodeIdConfigsConfigIdRoute,
    putLinodeInstancesLinodeIdConfigsConfigIdRouteHandler,
  )
  .openapi(getLinodeInstancesLinodeIdDisksRoute, getLinodeInstancesLinodeIdDisksRouteHandler)
  .openapi(postLinodeInstancesLinodeIdDisksRoute, postLinodeInstancesLinodeIdDisksRouteHandler)
  .openapi(
    deleteLinodeInstancesLinodeIdDisksDiskIdRoute,
    deleteLinodeInstancesLinodeIdDisksDiskIdRouteHandler,
  )
  .openapi(
    getLinodeInstancesLinodeIdDisksDiskIdRoute,
    getLinodeInstancesLinodeIdDisksDiskIdRouteHandler,
  )
  .openapi(
    putLinodeInstancesLinodeIdDisksDiskIdRoute,
    putLinodeInstancesLinodeIdDisksDiskIdRouteHandler,
  )
  .openapi(
    postLinodeInstancesLinodeIdDisksDiskIdCloneRoute,
    postLinodeInstancesLinodeIdDisksDiskIdCloneRouteHandler,
  )
  .openapi(
    postLinodeInstancesLinodeIdDisksDiskIdPasswordRoute,
    postLinodeInstancesLinodeIdDisksDiskIdPasswordRouteHandler,
  )
  .openapi(
    postLinodeInstancesLinodeIdDisksDiskIdResizeRoute,
    postLinodeInstancesLinodeIdDisksDiskIdResizeRouteHandler,
  )
  .openapi(
    getLinodeInstancesLinodeIdFirewallsRoute,
    getLinodeInstancesLinodeIdFirewallsRouteHandler,
  )
  .openapi(getLinodeInstancesLinodeIdIpsRoute, getLinodeInstancesLinodeIdIpsRouteHandler)
  .openapi(postLinodeInstancesLinodeIdIpsRoute, postLinodeInstancesLinodeIdIpsRouteHandler)
  .openapi(
    deleteLinodeInstancesLinodeIdIpsAddressRoute,
    deleteLinodeInstancesLinodeIdIpsAddressRouteHandler,
  )
  .openapi(
    getLinodeInstancesLinodeIdIpsAddressRoute,
    getLinodeInstancesLinodeIdIpsAddressRouteHandler,
  )
  .openapi(
    putLinodeInstancesLinodeIdIpsAddressRoute,
    putLinodeInstancesLinodeIdIpsAddressRouteHandler,
  )
  .openapi(postLinodeInstancesLinodeIdMigrateRoute, postLinodeInstancesLinodeIdMigrateRouteHandler)
  .openapi(postLinodeInstancesLinodeIdMutateRoute, postLinodeInstancesLinodeIdMutateRouteHandler)
  .openapi(
    getLinodeInstancesLinodeIdNodebalancersRoute,
    getLinodeInstancesLinodeIdNodebalancersRouteHandler,
  )
  .openapi(
    postLinodeInstancesLinodeIdPasswordRoute,
    postLinodeInstancesLinodeIdPasswordRouteHandler,
  )
  .openapi(postLinodeInstancesLinodeIdRebootRoute, postLinodeInstancesLinodeIdRebootRouteHandler)
  .openapi(postLinodeInstancesLinodeIdRebuildRoute, postLinodeInstancesLinodeIdRebuildRouteHandler)
  .openapi(postLinodeInstancesLinodeIdRescueRoute, postLinodeInstancesLinodeIdRescueRouteHandler)
  .openapi(postLinodeInstancesLinodeIdResizeRoute, postLinodeInstancesLinodeIdResizeRouteHandler)
  .openapi(
    postLinodeInstancesLinodeIdShutdownRoute,
    postLinodeInstancesLinodeIdShutdownRouteHandler,
  )
  .openapi(getLinodeInstancesLinodeIdStatsRoute, getLinodeInstancesLinodeIdStatsRouteHandler)
  .openapi(
    getLinodeInstancesLinodeIdStatsYearMonthRoute,
    getLinodeInstancesLinodeIdStatsYearMonthRouteHandler,
  )
  .openapi(getLinodeInstancesLinodeIdTransferRoute, getLinodeInstancesLinodeIdTransferRouteHandler)
  .openapi(
    getLinodeInstancesLinodeIdTransferYearMonthRoute,
    getLinodeInstancesLinodeIdTransferYearMonthRouteHandler,
  )
  .openapi(getLinodeInstancesLinodeIdVolumesRoute, getLinodeInstancesLinodeIdVolumesRouteHandler)
  .openapi(getLinodeKernelsRoute, getLinodeKernelsRouteHandler)
  .openapi(getLinodeKernelsKernelIdRoute, getLinodeKernelsKernelIdRouteHandler)
  .openapi(getLinodeStackscriptsRoute, getLinodeStackscriptsRouteHandler)
  .openapi(postLinodeStackscriptsRoute, postLinodeStackscriptsRouteHandler)
  .openapi(
    deleteLinodeStackscriptsStackscriptIdRoute,
    deleteLinodeStackscriptsStackscriptIdRouteHandler,
  )
  .openapi(getLinodeStackscriptsStackscriptIdRoute, getLinodeStackscriptsStackscriptIdRouteHandler)
  .openapi(putLinodeStackscriptsStackscriptIdRoute, putLinodeStackscriptsStackscriptIdRouteHandler)
  .openapi(getLinodeTypesRoute, getLinodeTypesRouteHandler)
  .openapi(getLinodeTypesTypeIdRoute, getLinodeTypesTypeIdRouteHandler)
  .openapi(getLkeClustersRoute, getLkeClustersRouteHandler)
  .openapi(postLkeClustersRoute, postLkeClustersRouteHandler)
  .openapi(deleteLkeClustersClusterIdRoute, deleteLkeClustersClusterIdRouteHandler)
  .openapi(getLkeClustersClusterIdRoute, getLkeClustersClusterIdRouteHandler)
  .openapi(putLkeClustersClusterIdRoute, putLkeClustersClusterIdRouteHandler)
  .openapi(
    getLkeClustersClusterIdApiEndpointsRoute,
    getLkeClustersClusterIdApiEndpointsRouteHandler,
  )
  .openapi(getLkeClustersClusterIdDashboardRoute, getLkeClustersClusterIdDashboardRouteHandler)
  .openapi(
    deleteLkeClustersClusterIdKubeconfigRoute,
    deleteLkeClustersClusterIdKubeconfigRouteHandler,
  )
  .openapi(getLkeClustersClusterIdKubeconfigRoute, getLkeClustersClusterIdKubeconfigRouteHandler)
  .openapi(
    deleteLkeClustersClusterIdNodesNodeIdRoute,
    deleteLkeClustersClusterIdNodesNodeIdRouteHandler,
  )
  .openapi(getLkeClustersClusterIdNodesNodeIdRoute, getLkeClustersClusterIdNodesNodeIdRouteHandler)
  .openapi(
    postLkeClustersClusterIdNodesNodeIdRecycleRoute,
    postLkeClustersClusterIdNodesNodeIdRecycleRouteHandler,
  )
  .openapi(getLkeClustersClusterIdPoolsRoute, getLkeClustersClusterIdPoolsRouteHandler)
  .openapi(postLkeClustersClusterIdPoolsRoute, postLkeClustersClusterIdPoolsRouteHandler)
  .openapi(
    deleteLkeClustersClusterIdPoolsPoolIdRoute,
    deleteLkeClustersClusterIdPoolsPoolIdRouteHandler,
  )
  .openapi(getLkeClustersClusterIdPoolsPoolIdRoute, getLkeClustersClusterIdPoolsPoolIdRouteHandler)
  .openapi(putLkeClustersClusterIdPoolsPoolIdRoute, putLkeClustersClusterIdPoolsPoolIdRouteHandler)
  .openapi(
    postLkeClustersClusterIdPoolsPoolIdRecycleRoute,
    postLkeClustersClusterIdPoolsPoolIdRecycleRouteHandler,
  )
  .openapi(postLkeClustersClusterIdRecycleRoute, postLkeClustersClusterIdRecycleRouteHandler)
  .openapi(postLkeClustersClusterIdRegenerateRoute, postLkeClustersClusterIdRegenerateRouteHandler)
  .openapi(
    deleteLkeClustersClusterIdServicetokenRoute,
    deleteLkeClustersClusterIdServicetokenRouteHandler,
  )
  .openapi(getLkeVersionsRoute, getLkeVersionsRouteHandler)
  .openapi(getLkeVersionsVersionRoute, getLkeVersionsVersionRouteHandler)
  .openapi(getLongviewClientsRoute, getLongviewClientsRouteHandler)
  .openapi(postLongviewClientsRoute, postLongviewClientsRouteHandler)
  .openapi(deleteLongviewClientsClientIdRoute, deleteLongviewClientsClientIdRouteHandler)
  .openapi(getLongviewClientsClientIdRoute, getLongviewClientsClientIdRouteHandler)
  .openapi(putLongviewClientsClientIdRoute, putLongviewClientsClientIdRouteHandler)
  .openapi(getLongviewPlanRoute, getLongviewPlanRouteHandler)
  .openapi(putLongviewPlanRoute, putLongviewPlanRouteHandler)
  .openapi(getLongviewSubscriptionsRoute, getLongviewSubscriptionsRouteHandler)
  .openapi(
    getLongviewSubscriptionsSubscriptionIdRoute,
    getLongviewSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(getManagedContactsRoute, getManagedContactsRouteHandler)
  .openapi(postManagedContactsRoute, postManagedContactsRouteHandler)
  .openapi(deleteManagedContactsContactIdRoute, deleteManagedContactsContactIdRouteHandler)
  .openapi(getManagedContactsContactIdRoute, getManagedContactsContactIdRouteHandler)
  .openapi(putManagedContactsContactIdRoute, putManagedContactsContactIdRouteHandler)
  .openapi(getManagedCredentialsRoute, getManagedCredentialsRouteHandler)
  .openapi(postManagedCredentialsRoute, postManagedCredentialsRouteHandler)
  .openapi(getManagedCredentialsSshkeyRoute, getManagedCredentialsSshkeyRouteHandler)
  .openapi(getManagedCredentialsCredentialIdRoute, getManagedCredentialsCredentialIdRouteHandler)
  .openapi(putManagedCredentialsCredentialIdRoute, putManagedCredentialsCredentialIdRouteHandler)
  .openapi(
    postManagedCredentialsCredentialIdRevokeRoute,
    postManagedCredentialsCredentialIdRevokeRouteHandler,
  )
  .openapi(
    postManagedCredentialsCredentialIdUpdateRoute,
    postManagedCredentialsCredentialIdUpdateRouteHandler,
  )
  .openapi(getManagedIssuesRoute, getManagedIssuesRouteHandler)
  .openapi(getManagedIssuesIssueIdRoute, getManagedIssuesIssueIdRouteHandler)
  .openapi(getManagedLinodeSettingsRoute, getManagedLinodeSettingsRouteHandler)
  .openapi(getManagedLinodeSettingsLinodeIdRoute, getManagedLinodeSettingsLinodeIdRouteHandler)
  .openapi(putManagedLinodeSettingsLinodeIdRoute, putManagedLinodeSettingsLinodeIdRouteHandler)
  .openapi(getManagedServicesRoute, getManagedServicesRouteHandler)
  .openapi(postManagedServicesRoute, postManagedServicesRouteHandler)
  .openapi(deleteManagedServicesServiceIdRoute, deleteManagedServicesServiceIdRouteHandler)
  .openapi(getManagedServicesServiceIdRoute, getManagedServicesServiceIdRouteHandler)
  .openapi(putManagedServicesServiceIdRoute, putManagedServicesServiceIdRouteHandler)
  .openapi(
    postManagedServicesServiceIdDisableRoute,
    postManagedServicesServiceIdDisableRouteHandler,
  )
  .openapi(postManagedServicesServiceIdEnableRoute, postManagedServicesServiceIdEnableRouteHandler)
  .openapi(getManagedStatsRoute, getManagedStatsRouteHandler)
  .openapi(getNetworkingFirewallsRoute, getNetworkingFirewallsRouteHandler)
  .openapi(postNetworkingFirewallsRoute, postNetworkingFirewallsRouteHandler)
  .openapi(
    deleteNetworkingFirewallsFirewallIdRoute,
    deleteNetworkingFirewallsFirewallIdRouteHandler,
  )
  .openapi(getNetworkingFirewallsFirewallIdRoute, getNetworkingFirewallsFirewallIdRouteHandler)
  .openapi(putNetworkingFirewallsFirewallIdRoute, putNetworkingFirewallsFirewallIdRouteHandler)
  .openapi(
    getNetworkingFirewallsFirewallIdDevicesRoute,
    getNetworkingFirewallsFirewallIdDevicesRouteHandler,
  )
  .openapi(
    postNetworkingFirewallsFirewallIdDevicesRoute,
    postNetworkingFirewallsFirewallIdDevicesRouteHandler,
  )
  .openapi(
    deleteNetworkingFirewallsFirewallIdDevicesDeviceIdRoute,
    deleteNetworkingFirewallsFirewallIdDevicesDeviceIdRouteHandler,
  )
  .openapi(
    getNetworkingFirewallsFirewallIdDevicesDeviceIdRoute,
    getNetworkingFirewallsFirewallIdDevicesDeviceIdRouteHandler,
  )
  .openapi(
    getNetworkingFirewallsFirewallIdRulesRoute,
    getNetworkingFirewallsFirewallIdRulesRouteHandler,
  )
  .openapi(
    putNetworkingFirewallsFirewallIdRulesRoute,
    putNetworkingFirewallsFirewallIdRulesRouteHandler,
  )
  .openapi(getNetworkingIpsRoute, getNetworkingIpsRouteHandler)
  .openapi(postNetworkingIpsRoute, postNetworkingIpsRouteHandler)
  .openapi(postNetworkingIpsAssignRoute, postNetworkingIpsAssignRouteHandler)
  .openapi(postNetworkingIpsShareRoute, postNetworkingIpsShareRouteHandler)
  .openapi(getNetworkingIpsAddressRoute, getNetworkingIpsAddressRouteHandler)
  .openapi(putNetworkingIpsAddressRoute, putNetworkingIpsAddressRouteHandler)
  .openapi(postNetworkingIpv4AssignRoute, postNetworkingIpv4AssignRouteHandler)
  .openapi(postNetworkingIpv4ShareRoute, postNetworkingIpv4ShareRouteHandler)
  .openapi(getNetworkingIpv6PoolsRoute, getNetworkingIpv6PoolsRouteHandler)
  .openapi(getNetworkingIpv6RangesRoute, getNetworkingIpv6RangesRouteHandler)
  .openapi(postNetworkingIpv6RangesRoute, postNetworkingIpv6RangesRouteHandler)
  .openapi(deleteNetworkingIpv6RangesRangeRoute, deleteNetworkingIpv6RangesRangeRouteHandler)
  .openapi(getNetworkingIpv6RangesRangeRoute, getNetworkingIpv6RangesRangeRouteHandler)
  .openapi(getNetworkingVlansRoute, getNetworkingVlansRouteHandler)
  .openapi(getNodebalancersRoute, getNodebalancersRouteHandler)
  .openapi(postNodebalancersRoute, postNodebalancersRouteHandler)
  .openapi(deleteNodebalancersNodeBalancerIdRoute, deleteNodebalancersNodeBalancerIdRouteHandler)
  .openapi(getNodebalancersNodeBalancerIdRoute, getNodebalancersNodeBalancerIdRouteHandler)
  .openapi(putNodebalancersNodeBalancerIdRoute, putNodebalancersNodeBalancerIdRouteHandler)
  .openapi(
    getNodebalancersNodeBalancerIdConfigsRoute,
    getNodebalancersNodeBalancerIdConfigsRouteHandler,
  )
  .openapi(
    postNodebalancersNodeBalancerIdConfigsRoute,
    postNodebalancersNodeBalancerIdConfigsRouteHandler,
  )
  .openapi(
    deleteNodebalancersNodeBalancerIdConfigsConfigIdRoute,
    deleteNodebalancersNodeBalancerIdConfigsConfigIdRouteHandler,
  )
  .openapi(
    getNodebalancersNodeBalancerIdConfigsConfigIdRoute,
    getNodebalancersNodeBalancerIdConfigsConfigIdRouteHandler,
  )
  .openapi(
    putNodebalancersNodeBalancerIdConfigsConfigIdRoute,
    putNodebalancersNodeBalancerIdConfigsConfigIdRouteHandler,
  )
  .openapi(
    getNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute,
    getNodebalancersNodeBalancerIdConfigsConfigIdNodesRouteHandler,
  )
  .openapi(
    postNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute,
    postNodebalancersNodeBalancerIdConfigsConfigIdNodesRouteHandler,
  )
  .openapi(
    deleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
    deleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRouteHandler,
  )
  .openapi(
    getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
    getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRouteHandler,
  )
  .openapi(
    putNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
    putNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRouteHandler,
  )
  .openapi(
    postNodebalancersNodeBalancerIdConfigsConfigIdRebuildRoute,
    postNodebalancersNodeBalancerIdConfigsConfigIdRebuildRouteHandler,
  )
  .openapi(
    getNodebalancersNodeBalancerIdStatsRoute,
    getNodebalancersNodeBalancerIdStatsRouteHandler,
  )
  .openapi(getObjectStorageBucketsRoute, getObjectStorageBucketsRouteHandler)
  .openapi(postObjectStorageBucketsRoute, postObjectStorageBucketsRouteHandler)
  .openapi(getObjectStorageBucketsClusterIdRoute, getObjectStorageBucketsClusterIdRouteHandler)
  .openapi(
    deleteObjectStorageBucketsClusterIdBucketRoute,
    deleteObjectStorageBucketsClusterIdBucketRouteHandler,
  )
  .openapi(
    getObjectStorageBucketsClusterIdBucketRoute,
    getObjectStorageBucketsClusterIdBucketRouteHandler,
  )
  .openapi(
    postObjectStorageBucketsClusterIdBucketAccessRoute,
    postObjectStorageBucketsClusterIdBucketAccessRouteHandler,
  )
  .openapi(
    putObjectStorageBucketsClusterIdBucketAccessRoute,
    putObjectStorageBucketsClusterIdBucketAccessRouteHandler,
  )
  .openapi(
    getObjectStorageBucketsClusterIdBucketObjectAclRoute,
    getObjectStorageBucketsClusterIdBucketObjectAclRouteHandler,
  )
  .openapi(
    putObjectStorageBucketsClusterIdBucketObjectAclRoute,
    putObjectStorageBucketsClusterIdBucketObjectAclRouteHandler,
  )
  .openapi(
    getObjectStorageBucketsClusterIdBucketObjectListRoute,
    getObjectStorageBucketsClusterIdBucketObjectListRouteHandler,
  )
  .openapi(
    postObjectStorageBucketsClusterIdBucketObjectUrlRoute,
    postObjectStorageBucketsClusterIdBucketObjectUrlRouteHandler,
  )
  .openapi(
    deleteObjectStorageBucketsClusterIdBucketSslRoute,
    deleteObjectStorageBucketsClusterIdBucketSslRouteHandler,
  )
  .openapi(
    getObjectStorageBucketsClusterIdBucketSslRoute,
    getObjectStorageBucketsClusterIdBucketSslRouteHandler,
  )
  .openapi(
    postObjectStorageBucketsClusterIdBucketSslRoute,
    postObjectStorageBucketsClusterIdBucketSslRouteHandler,
  )
  .openapi(postObjectStorageCancelRoute, postObjectStorageCancelRouteHandler)
  .openapi(getObjectStorageClustersRoute, getObjectStorageClustersRouteHandler)
  .openapi(getObjectStorageClustersClusterIdRoute, getObjectStorageClustersClusterIdRouteHandler)
  .openapi(getObjectStorageKeysRoute, getObjectStorageKeysRouteHandler)
  .openapi(postObjectStorageKeysRoute, postObjectStorageKeysRouteHandler)
  .openapi(deleteObjectStorageKeysKeyIdRoute, deleteObjectStorageKeysKeyIdRouteHandler)
  .openapi(getObjectStorageKeysKeyIdRoute, getObjectStorageKeysKeyIdRouteHandler)
  .openapi(putObjectStorageKeysKeyIdRoute, putObjectStorageKeysKeyIdRouteHandler)
  .openapi(getObjectStorageTransferRoute, getObjectStorageTransferRouteHandler)
  .openapi(getProfileRoute, getProfileRouteHandler)
  .openapi(putProfileRoute, putProfileRouteHandler)
  .openapi(getProfileAppsRoute, getProfileAppsRouteHandler)
  .openapi(deleteProfileAppsAppIdRoute, deleteProfileAppsAppIdRouteHandler)
  .openapi(getProfileAppsAppIdRoute, getProfileAppsAppIdRouteHandler)
  .openapi(getProfileDevicesRoute, getProfileDevicesRouteHandler)
  .openapi(deleteProfileDevicesDeviceIdRoute, deleteProfileDevicesDeviceIdRouteHandler)
  .openapi(getProfileDevicesDeviceIdRoute, getProfileDevicesDeviceIdRouteHandler)
  .openapi(getProfileGrantsRoute, getProfileGrantsRouteHandler)
  .openapi(getProfileLoginsRoute, getProfileLoginsRouteHandler)
  .openapi(getProfileLoginsLoginIdRoute, getProfileLoginsLoginIdRouteHandler)
  .openapi(deleteProfilePhoneNumberRoute, deleteProfilePhoneNumberRouteHandler)
  .openapi(postProfilePhoneNumberRoute, postProfilePhoneNumberRouteHandler)
  .openapi(postProfilePhoneNumberVerifyRoute, postProfilePhoneNumberVerifyRouteHandler)
  .openapi(getProfilePreferencesRoute, getProfilePreferencesRouteHandler)
  .openapi(putProfilePreferencesRoute, putProfilePreferencesRouteHandler)
  .openapi(getProfileSecurityQuestionsRoute, getProfileSecurityQuestionsRouteHandler)
  .openapi(postProfileSecurityQuestionsRoute, postProfileSecurityQuestionsRouteHandler)
  .openapi(getProfileSshkeysRoute, getProfileSshkeysRouteHandler)
  .openapi(postProfileSshkeysRoute, postProfileSshkeysRouteHandler)
  .openapi(deleteProfileSshkeysSshKeyIdRoute, deleteProfileSshkeysSshKeyIdRouteHandler)
  .openapi(getProfileSshkeysSshKeyIdRoute, getProfileSshkeysSshKeyIdRouteHandler)
  .openapi(putProfileSshkeysSshKeyIdRoute, putProfileSshkeysSshKeyIdRouteHandler)
  .openapi(postProfileTfaDisableRoute, postProfileTfaDisableRouteHandler)
  .openapi(postProfileTfaEnableRoute, postProfileTfaEnableRouteHandler)
  .openapi(postProfileTfaEnableConfirmRoute, postProfileTfaEnableConfirmRouteHandler)
  .openapi(getProfileTokensRoute, getProfileTokensRouteHandler)
  .openapi(postProfileTokensRoute, postProfileTokensRouteHandler)
  .openapi(deleteProfileTokensTokenIdRoute, deleteProfileTokensTokenIdRouteHandler)
  .openapi(getProfileTokensTokenIdRoute, getProfileTokensTokenIdRouteHandler)
  .openapi(putProfileTokensTokenIdRoute, putProfileTokensTokenIdRouteHandler)
  .openapi(getRegionsRoute, getRegionsRouteHandler)
  .openapi(getRegionsRegionIdRoute, getRegionsRegionIdRouteHandler)
  .openapi(getSupportTicketsRoute, getSupportTicketsRouteHandler)
  .openapi(postSupportTicketsRoute, postSupportTicketsRouteHandler)
  .openapi(getSupportTicketsTicketIdRoute, getSupportTicketsTicketIdRouteHandler)
  .openapi(
    postSupportTicketsTicketIdAttachmentsRoute,
    postSupportTicketsTicketIdAttachmentsRouteHandler,
  )
  .openapi(postSupportTicketsTicketIdCloseRoute, postSupportTicketsTicketIdCloseRouteHandler)
  .openapi(getSupportTicketsTicketIdRepliesRoute, getSupportTicketsTicketIdRepliesRouteHandler)
  .openapi(postSupportTicketsTicketIdRepliesRoute, postSupportTicketsTicketIdRepliesRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(postTagsRoute, postTagsRouteHandler)
  .openapi(deleteTagsLabelRoute, deleteTagsLabelRouteHandler)
  .openapi(getTagsLabelRoute, getTagsLabelRouteHandler)
  .openapi(getVolumesRoute, getVolumesRouteHandler)
  .openapi(postVolumesRoute, postVolumesRouteHandler)
  .openapi(deleteVolumesVolumeIdRoute, deleteVolumesVolumeIdRouteHandler)
  .openapi(getVolumesVolumeIdRoute, getVolumesVolumeIdRouteHandler)
  .openapi(putVolumesVolumeIdRoute, putVolumesVolumeIdRouteHandler)
  .openapi(postVolumesVolumeIdAttachRoute, postVolumesVolumeIdAttachRouteHandler)
  .openapi(postVolumesVolumeIdCloneRoute, postVolumesVolumeIdCloneRouteHandler)
  .openapi(postVolumesVolumeIdDetachRoute, postVolumesVolumeIdDetachRouteHandler)
  .openapi(postVolumesVolumeIdResizeRoute, postVolumesVolumeIdResizeRouteHandler)

export default app
