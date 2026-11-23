import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2AccountKeysSshKeyIdentifierRoute,
  deleteV2AppsIdRoute,
  deleteV2CdnEndpointsCdnIdCacheRoute,
  deleteV2CdnEndpointsCdnIdRoute,
  deleteV2CertificatesCertificateIdRoute,
  deleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameRoute,
  deleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdRoute,
  deleteV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute,
  deleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameRoute,
  deleteV2DatabasesDatabaseClusterUuidRoute,
  deleteV2DatabasesDatabaseClusterUuidUsersUsernameRoute,
  deleteV2DomainsDomainNameRecordsDomainRecordIdRoute,
  deleteV2DomainsDomainNameRoute,
  deleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousRoute,
  deleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveRoute,
  deleteV2DropletsDropletIdRoute,
  deleteV2DropletsRoute,
  deleteV2FirewallsFirewallIdDropletsRoute,
  deleteV2FirewallsFirewallIdRoute,
  deleteV2FirewallsFirewallIdRulesRoute,
  deleteV2FirewallsFirewallIdTagsRoute,
  deleteV2FloatingIpsFloatingIpRoute,
  deleteV2FunctionsNamespacesNamespaceIdRoute,
  deleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute,
  deleteV2ImagesImageIdRoute,
  deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousRoute,
  deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveRoute,
  deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdRoute,
  deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute,
  deleteV2KubernetesClustersClusterIdRoute,
  deleteV2KubernetesRegistryRoute,
  deleteV2LoadBalancersLbIdDropletsRoute,
  deleteV2LoadBalancersLbIdForwardingRulesRoute,
  deleteV2LoadBalancersLbIdRoute,
  deleteV2MonitoringAlertsAlertUuidRoute,
  deleteV2ProjectsProjectIdRoute,
  deleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestRoute,
  deleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagRoute,
  deleteV2RegistryRoute,
  deleteV2ReservedIpsReservedIpRoute,
  deleteV2SnapshotsSnapshotIdRoute,
  deleteV2TagsTagIdResourcesRoute,
  deleteV2TagsTagIdRoute,
  deleteV2UptimeChecksCheckIdAlertsAlertIdRoute,
  deleteV2UptimeChecksCheckIdRoute,
  deleteV2VolumesRoute,
  deleteV2VolumesSnapshotsSnapshotIdRoute,
  deleteV2VolumesVolumeIdRoute,
  deleteV2VpcsVpcIdRoute,
  getV21ClicksRoute,
  getV2AccountKeysRoute,
  getV2AccountKeysSshKeyIdentifierRoute,
  getV2AccountRoute,
  getV2ActionsActionIdRoute,
  getV2ActionsRoute,
  getV2AppsAppIdAlertsRoute,
  getV2AppsAppIdComponentsComponentNameLogsRoute,
  getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsRoute,
  getV2AppsAppIdDeploymentsDeploymentIdLogsRoute,
  getV2AppsAppIdDeploymentsDeploymentIdRoute,
  getV2AppsAppIdDeploymentsRoute,
  getV2AppsAppIdLogsRoute,
  getV2AppsAppIdMetricsBandwidthDailyRoute,
  getV2AppsIdRoute,
  getV2AppsRegionsRoute,
  getV2AppsRoute,
  getV2AppsTiersInstanceSizesRoute,
  getV2AppsTiersInstanceSizesSlugRoute,
  getV2AppsTiersRoute,
  getV2AppsTiersSlugRoute,
  getV2CdnEndpointsCdnIdRoute,
  getV2CdnEndpointsRoute,
  getV2CertificatesCertificateIdRoute,
  getV2CertificatesRoute,
  getV2CustomersMyBalanceRoute,
  getV2CustomersMyBillingHistoryRoute,
  getV2CustomersMyInvoicesInvoiceUuidCsvRoute,
  getV2CustomersMyInvoicesInvoiceUuidPdfRoute,
  getV2CustomersMyInvoicesInvoiceUuidRoute,
  getV2CustomersMyInvoicesInvoiceUuidSummaryRoute,
  getV2CustomersMyInvoicesRoute,
  getV2DatabasesDatabaseClusterUuidBackupsRoute,
  getV2DatabasesDatabaseClusterUuidCaRoute,
  getV2DatabasesDatabaseClusterUuidConfigRoute,
  getV2DatabasesDatabaseClusterUuidDbsDatabaseNameRoute,
  getV2DatabasesDatabaseClusterUuidDbsRoute,
  getV2DatabasesDatabaseClusterUuidEvictionPolicyRoute,
  getV2DatabasesDatabaseClusterUuidFirewallRoute,
  getV2DatabasesDatabaseClusterUuidOnlineMigrationRoute,
  getV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute,
  getV2DatabasesDatabaseClusterUuidPoolsRoute,
  getV2DatabasesDatabaseClusterUuidReplicasReplicaNameRoute,
  getV2DatabasesDatabaseClusterUuidReplicasRoute,
  getV2DatabasesDatabaseClusterUuidRoute,
  getV2DatabasesDatabaseClusterUuidSqlModeRoute,
  getV2DatabasesDatabaseClusterUuidUsersRoute,
  getV2DatabasesDatabaseClusterUuidUsersUsernameRoute,
  getV2DatabasesOptionsRoute,
  getV2DatabasesRoute,
  getV2DomainsDomainNameRecordsDomainRecordIdRoute,
  getV2DomainsDomainNameRecordsRoute,
  getV2DomainsDomainNameRoute,
  getV2DomainsRoute,
  getV2DropletsDropletIdActionsActionIdRoute,
  getV2DropletsDropletIdActionsRoute,
  getV2DropletsDropletIdBackupsRoute,
  getV2DropletsDropletIdDestroyWithAssociatedResourcesRoute,
  getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusRoute,
  getV2DropletsDropletIdFirewallsRoute,
  getV2DropletsDropletIdKernelsRoute,
  getV2DropletsDropletIdNeighborsRoute,
  getV2DropletsDropletIdRoute,
  getV2DropletsDropletIdSnapshotsRoute,
  getV2DropletsRoute,
  getV2FirewallsFirewallIdRoute,
  getV2FirewallsRoute,
  getV2FloatingIpsFloatingIpActionsActionIdRoute,
  getV2FloatingIpsFloatingIpActionsRoute,
  getV2FloatingIpsFloatingIpRoute,
  getV2FloatingIpsRoute,
  getV2FunctionsNamespacesNamespaceIdRoute,
  getV2FunctionsNamespacesNamespaceIdTriggersRoute,
  getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute,
  getV2FunctionsNamespacesRoute,
  getV2ImagesImageIdActionsActionIdRoute,
  getV2ImagesImageIdActionsRoute,
  getV2ImagesImageIdRoute,
  getV2ImagesRoute,
  getV2KubernetesClustersClusterIdClusterlintRoute,
  getV2KubernetesClustersClusterIdCredentialsRoute,
  getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesRoute,
  getV2KubernetesClustersClusterIdKubeconfigRoute,
  getV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute,
  getV2KubernetesClustersClusterIdNodePoolsRoute,
  getV2KubernetesClustersClusterIdRoute,
  getV2KubernetesClustersClusterIdUpgradesRoute,
  getV2KubernetesClustersClusterIdUserRoute,
  getV2KubernetesClustersRoute,
  getV2KubernetesOptionsRoute,
  getV2LoadBalancersLbIdRoute,
  getV2LoadBalancersRoute,
  getV2MonitoringAlertsAlertUuidRoute,
  getV2MonitoringAlertsRoute,
  getV2MonitoringMetricsDropletBandwidthRoute,
  getV2MonitoringMetricsDropletCpuRoute,
  getV2MonitoringMetricsDropletFilesystemFreeRoute,
  getV2MonitoringMetricsDropletFilesystemSizeRoute,
  getV2MonitoringMetricsDropletLoad15Route,
  getV2MonitoringMetricsDropletLoad1Route,
  getV2MonitoringMetricsDropletLoad5Route,
  getV2MonitoringMetricsDropletMemoryAvailableRoute,
  getV2MonitoringMetricsDropletMemoryCachedRoute,
  getV2MonitoringMetricsDropletMemoryFreeRoute,
  getV2MonitoringMetricsDropletMemoryTotalRoute,
  getV2ProjectsDefaultResourcesRoute,
  getV2ProjectsDefaultRoute,
  getV2ProjectsProjectIdResourcesRoute,
  getV2ProjectsProjectIdRoute,
  getV2ProjectsRoute,
  getV2RegionsRoute,
  getV2RegistryDockerCredentialsRoute,
  getV2RegistryOptionsRoute,
  getV2RegistryRegistryNameGarbageCollectionRoute,
  getV2RegistryRegistryNameGarbageCollectionsRoute,
  getV2RegistryRegistryNameRepositoriesRoute,
  getV2RegistryRegistryNameRepositoriesV2Route,
  getV2RegistryRegistryNameRepositoryNameDigestsRoute,
  getV2RegistryRegistryNameRepositoryNameTagsRoute,
  getV2RegistryRoute,
  getV2RegistrySubscriptionRoute,
  getV2ReportsDropletNeighborsIdsRoute,
  getV2ReservedIpsReservedIpActionsActionIdRoute,
  getV2ReservedIpsReservedIpActionsRoute,
  getV2ReservedIpsReservedIpRoute,
  getV2ReservedIpsRoute,
  getV2SizesRoute,
  getV2SnapshotsRoute,
  getV2SnapshotsSnapshotIdRoute,
  getV2TagsRoute,
  getV2TagsTagIdRoute,
  getV2UptimeChecksCheckIdAlertsAlertIdRoute,
  getV2UptimeChecksCheckIdAlertsRoute,
  getV2UptimeChecksCheckIdRoute,
  getV2UptimeChecksCheckIdStateRoute,
  getV2UptimeChecksRoute,
  getV2VolumesRoute,
  getV2VolumesSnapshotsSnapshotIdRoute,
  getV2VolumesVolumeIdActionsActionIdRoute,
  getV2VolumesVolumeIdActionsRoute,
  getV2VolumesVolumeIdRoute,
  getV2VolumesVolumeIdSnapshotsRoute,
  getV2VpcsRoute,
  getV2VpcsVpcIdMembersRoute,
  getV2VpcsVpcIdRoute,
  patchV2DatabasesDatabaseClusterUuidConfigRoute,
  patchV2DomainsDomainNameRecordsDomainRecordIdRoute,
  patchV2ProjectsDefaultRoute,
  patchV2ProjectsProjectIdRoute,
  patchV2VpcsVpcIdRoute,
  postV21ClicksKubernetesRoute,
  postV2AccountKeysRoute,
  postV2AppsAppIdAlertsAlertIdDestinationsRoute,
  postV2AppsAppIdDeploymentsDeploymentIdCancelRoute,
  postV2AppsAppIdDeploymentsRoute,
  postV2AppsAppIdRollbackCommitRoute,
  postV2AppsAppIdRollbackRevertRoute,
  postV2AppsAppIdRollbackRoute,
  postV2AppsAppIdRollbackValidateRoute,
  postV2AppsMetricsBandwidthDailyRoute,
  postV2AppsProposeRoute,
  postV2AppsRoute,
  postV2CdnEndpointsRoute,
  postV2CertificatesRoute,
  postV2DatabasesDatabaseClusterUuidDbsRoute,
  postV2DatabasesDatabaseClusterUuidPoolsRoute,
  postV2DatabasesDatabaseClusterUuidReplicasRoute,
  postV2DatabasesDatabaseClusterUuidUsersRoute,
  postV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthRoute,
  postV2DatabasesRoute,
  postV2DomainsDomainNameRecordsRoute,
  postV2DomainsRoute,
  postV2DropletsActionsRoute,
  postV2DropletsDropletIdActionsRoute,
  postV2DropletsDropletIdDestroyWithAssociatedResourcesRetryRoute,
  postV2DropletsRoute,
  postV2FirewallsFirewallIdDropletsRoute,
  postV2FirewallsFirewallIdRulesRoute,
  postV2FirewallsFirewallIdTagsRoute,
  postV2FirewallsRoute,
  postV2FloatingIpsFloatingIpActionsRoute,
  postV2FloatingIpsRoute,
  postV2FunctionsNamespacesNamespaceIdTriggersRoute,
  postV2FunctionsNamespacesRoute,
  postV2ImagesImageIdActionsRoute,
  postV2ImagesRoute,
  postV2KubernetesClustersClusterIdClusterlintRoute,
  postV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleRoute,
  postV2KubernetesClustersClusterIdNodePoolsRoute,
  postV2KubernetesClustersClusterIdUpgradeRoute,
  postV2KubernetesClustersRoute,
  postV2KubernetesRegistryRoute,
  postV2LoadBalancersLbIdDropletsRoute,
  postV2LoadBalancersLbIdForwardingRulesRoute,
  postV2LoadBalancersRoute,
  postV2MonitoringAlertsRoute,
  postV2ProjectsDefaultResourcesRoute,
  postV2ProjectsProjectIdResourcesRoute,
  postV2ProjectsRoute,
  postV2RegistryRegistryNameGarbageCollectionRoute,
  postV2RegistryRoute,
  postV2RegistrySubscriptionRoute,
  postV2RegistryValidateNameRoute,
  postV2ReservedIpsReservedIpActionsRoute,
  postV2ReservedIpsRoute,
  postV2TagsRoute,
  postV2TagsTagIdResourcesRoute,
  postV2UptimeChecksCheckIdAlertsRoute,
  postV2UptimeChecksRoute,
  postV2VolumesActionsRoute,
  postV2VolumesRoute,
  postV2VolumesVolumeIdActionsRoute,
  postV2VolumesVolumeIdSnapshotsRoute,
  postV2VpcsRoute,
  putV2AccountKeysSshKeyIdentifierRoute,
  putV2AppsIdRoute,
  putV2CdnEndpointsCdnIdRoute,
  putV2DatabasesDatabaseClusterUuidEvictionPolicyRoute,
  putV2DatabasesDatabaseClusterUuidFirewallRoute,
  putV2DatabasesDatabaseClusterUuidMaintenanceRoute,
  putV2DatabasesDatabaseClusterUuidMigrateRoute,
  putV2DatabasesDatabaseClusterUuidOnlineMigrationRoute,
  putV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute,
  putV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteRoute,
  putV2DatabasesDatabaseClusterUuidResizeRoute,
  putV2DatabasesDatabaseClusterUuidSqlModeRoute,
  putV2DatabasesDatabaseClusterUuidUpgradeRoute,
  putV2DomainsDomainNameRecordsDomainRecordIdRoute,
  putV2FirewallsFirewallIdRoute,
  putV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute,
  putV2ImagesImageIdRoute,
  putV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute,
  putV2KubernetesClustersClusterIdRoute,
  putV2LoadBalancersLbIdRoute,
  putV2MonitoringAlertsAlertUuidRoute,
  putV2ProjectsDefaultRoute,
  putV2ProjectsProjectIdRoute,
  putV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidRoute,
  putV2UptimeChecksCheckIdAlertsAlertIdRoute,
  putV2UptimeChecksCheckIdRoute,
  putV2VpcsVpcIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV21ClicksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21ClicksKubernetesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AccountKeysSshKeyIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountKeysSshKeyIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2AccountKeysSshKeyIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AppsMetricsBandwidthDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AppsProposeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsTiersInstanceSizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsTiersInstanceSizesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsTiersSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsAppIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AppsAppIdAlertsAlertIdDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsAppIdComponentsComponentNameLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsAppIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AppsAppIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsAppIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AppsAppIdDeploymentsDeploymentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsAppIdDeploymentsDeploymentIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsAppIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsAppIdMetricsBandwidthDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AppsAppIdRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AppsAppIdRollbackCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AppsAppIdRollbackRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AppsAppIdRollbackValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CdnEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CdnEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CdnEndpointsCdnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CdnEndpointsCdnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CdnEndpointsCdnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CdnEndpointsCdnIdCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersMyBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersMyBillingHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersMyInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersMyInvoicesInvoiceUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersMyInvoicesInvoiceUuidCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersMyInvoicesInvoiceUuidPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersMyInvoicesInvoiceUuidSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DatabasesDatabaseClusterUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2DatabasesDatabaseClusterUuidConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidDbsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DatabasesDatabaseClusterUuidDbsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidDbsDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidEvictionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DatabasesDatabaseClusterUuidEvictionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidFirewallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DatabasesDatabaseClusterUuidFirewallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DatabasesDatabaseClusterUuidMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DatabasesDatabaseClusterUuidMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidOnlineMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DatabasesDatabaseClusterUuidOnlineMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DatabasesDatabaseClusterUuidPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidReplicasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DatabasesDatabaseClusterUuidReplicasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidReplicasReplicaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DatabasesDatabaseClusterUuidResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidSqlModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DatabasesDatabaseClusterUuidSqlModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DatabasesDatabaseClusterUuidUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DatabasesDatabaseClusterUuidUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DatabasesDatabaseClusterUuidUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DatabasesDatabaseClusterUuidUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainsDomainNameRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DomainsDomainNameRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DomainsDomainNameRecordsDomainRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DomainsDomainNameRecordsDomainRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2DomainsDomainNameRecordsDomainRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DomainsDomainNameRecordsDomainRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DropletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DropletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DropletsActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DropletsDropletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsDropletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsDropletIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DropletsDropletIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsDropletIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsDropletIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsDropletIdDestroyWithAssociatedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DropletsDropletIdDestroyWithAssociatedResourcesRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsDropletIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsDropletIdKernelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsDropletIdNeighborsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DropletsDropletIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2FirewallsFirewallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FirewallsFirewallIdDropletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FirewallsFirewallIdDropletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FirewallsFirewallIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FirewallsFirewallIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FirewallsFirewallIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FirewallsFirewallIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FloatingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FloatingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FloatingIpsFloatingIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FloatingIpsFloatingIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FloatingIpsFloatingIpActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FloatingIpsFloatingIpActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FloatingIpsFloatingIpActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FunctionsNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FunctionsNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FunctionsNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FunctionsNamespacesNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FunctionsNamespacesNamespaceIdTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2FunctionsNamespacesNamespaceIdTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesImageIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesImageIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesImageIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KubernetesClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2KubernetesClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2KubernetesClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesClustersClusterIdClusterlintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KubernetesClustersClusterIdClusterlintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesClustersClusterIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesClustersClusterIdKubeconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesClustersClusterIdNodePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KubernetesClustersClusterIdNodePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KubernetesClustersClusterIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesClustersClusterIdUpgradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesClustersClusterIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2KubernetesOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2KubernetesRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KubernetesRegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LoadBalancersLbIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LoadBalancersLbIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LoadBalancersLbIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LoadBalancersLbIdDropletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoadBalancersLbIdDropletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LoadBalancersLbIdForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoadBalancersLbIdForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MonitoringAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2MonitoringAlertsAlertUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringAlertsAlertUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2MonitoringAlertsAlertUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletBandwidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletCpuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletFilesystemFreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletFilesystemSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletLoad1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletLoad15Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletLoad5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletMemoryAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletMemoryCachedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletMemoryFreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MonitoringMetricsDropletMemoryTotalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ProjectsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsDefaultResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsDefaultResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsProjectIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2RegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2RegistryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegistryDockerCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegistryOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegistrySubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2RegistrySubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2RegistryValidateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegistryRegistryNameGarbageCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2RegistryRegistryNameGarbageCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegistryRegistryNameGarbageCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegistryRegistryNameRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegistryRegistryNameRepositoriesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegistryRegistryNameRepositoryNameDigestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2RegistryRegistryNameRepositoryNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ReportsDropletNeighborsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ReservedIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ReservedIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ReservedIpsReservedIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ReservedIpsReservedIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ReservedIpsReservedIpActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ReservedIpsReservedIpActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ReservedIpsReservedIpActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TagsTagIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TagsTagIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UptimeChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UptimeChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UptimeChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UptimeChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UptimeChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UptimeChecksCheckIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UptimeChecksCheckIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UptimeChecksCheckIdAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UptimeChecksCheckIdAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UptimeChecksCheckIdAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UptimeChecksCheckIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VolumesActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VolumesSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VolumesSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VolumesVolumeIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VolumesVolumeIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VolumesVolumeIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VolumesVolumeIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VolumesVolumeIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VpcsVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VpcsVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2VpcsVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2VpcsVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VpcsVpcIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
