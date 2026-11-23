import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getV21ClicksRouteHandler: RouteHandler<typeof getV21ClicksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21ClicksKubernetesRouteHandler: RouteHandler<
  typeof postV21ClicksKubernetesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AccountRouteHandler: RouteHandler<typeof getV2AccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AccountKeysRouteHandler: RouteHandler<typeof getV2AccountKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2AccountKeysRouteHandler: RouteHandler<typeof postV2AccountKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2AccountKeysSshKeyIdentifierRouteHandler: RouteHandler<
  typeof deleteV2AccountKeysSshKeyIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AccountKeysSshKeyIdentifierRouteHandler: RouteHandler<
  typeof getV2AccountKeysSshKeyIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2AccountKeysSshKeyIdentifierRouteHandler: RouteHandler<
  typeof putV2AccountKeysSshKeyIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ActionsRouteHandler: RouteHandler<typeof getV2ActionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ActionsActionIdRouteHandler: RouteHandler<
  typeof getV2ActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsRouteHandler: RouteHandler<typeof getV2AppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AppsRouteHandler: RouteHandler<typeof postV2AppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AppsMetricsBandwidthDailyRouteHandler: RouteHandler<
  typeof postV2AppsMetricsBandwidthDailyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AppsProposeRouteHandler: RouteHandler<typeof postV2AppsProposeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2AppsRegionsRouteHandler: RouteHandler<typeof getV2AppsRegionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2AppsTiersRouteHandler: RouteHandler<typeof getV2AppsTiersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsTiersInstanceSizesRouteHandler: RouteHandler<
  typeof getV2AppsTiersInstanceSizesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsTiersInstanceSizesSlugRouteHandler: RouteHandler<
  typeof getV2AppsTiersInstanceSizesSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsTiersSlugRouteHandler: RouteHandler<typeof getV2AppsTiersSlugRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2AppsAppIdAlertsRouteHandler: RouteHandler<
  typeof getV2AppsAppIdAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AppsAppIdAlertsAlertIdDestinationsRouteHandler: RouteHandler<
  typeof postV2AppsAppIdAlertsAlertIdDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsAppIdComponentsComponentNameLogsRouteHandler: RouteHandler<
  typeof getV2AppsAppIdComponentsComponentNameLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsAppIdDeploymentsRouteHandler: RouteHandler<
  typeof getV2AppsAppIdDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AppsAppIdDeploymentsRouteHandler: RouteHandler<
  typeof postV2AppsAppIdDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsAppIdDeploymentsDeploymentIdRouteHandler: RouteHandler<
  typeof getV2AppsAppIdDeploymentsDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AppsAppIdDeploymentsDeploymentIdCancelRouteHandler: RouteHandler<
  typeof postV2AppsAppIdDeploymentsDeploymentIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsRouteHandler: RouteHandler<
  typeof getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsAppIdDeploymentsDeploymentIdLogsRouteHandler: RouteHandler<
  typeof getV2AppsAppIdDeploymentsDeploymentIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsAppIdLogsRouteHandler: RouteHandler<typeof getV2AppsAppIdLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2AppsAppIdMetricsBandwidthDailyRouteHandler: RouteHandler<
  typeof getV2AppsAppIdMetricsBandwidthDailyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AppsAppIdRollbackRouteHandler: RouteHandler<
  typeof postV2AppsAppIdRollbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AppsAppIdRollbackCommitRouteHandler: RouteHandler<
  typeof postV2AppsAppIdRollbackCommitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AppsAppIdRollbackRevertRouteHandler: RouteHandler<
  typeof postV2AppsAppIdRollbackRevertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AppsAppIdRollbackValidateRouteHandler: RouteHandler<
  typeof postV2AppsAppIdRollbackValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2AppsIdRouteHandler: RouteHandler<typeof deleteV2AppsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AppsIdRouteHandler: RouteHandler<typeof getV2AppsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2AppsIdRouteHandler: RouteHandler<typeof putV2AppsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CdnEndpointsRouteHandler: RouteHandler<typeof getV2CdnEndpointsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2CdnEndpointsRouteHandler: RouteHandler<typeof postV2CdnEndpointsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2CdnEndpointsCdnIdRouteHandler: RouteHandler<
  typeof deleteV2CdnEndpointsCdnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CdnEndpointsCdnIdRouteHandler: RouteHandler<
  typeof getV2CdnEndpointsCdnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2CdnEndpointsCdnIdRouteHandler: RouteHandler<
  typeof putV2CdnEndpointsCdnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CdnEndpointsCdnIdCacheRouteHandler: RouteHandler<
  typeof deleteV2CdnEndpointsCdnIdCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CertificatesRouteHandler: RouteHandler<typeof getV2CertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2CertificatesRouteHandler: RouteHandler<typeof postV2CertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2CertificatesCertificateIdRouteHandler: RouteHandler<
  typeof deleteV2CertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CertificatesCertificateIdRouteHandler: RouteHandler<
  typeof getV2CertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyBalanceRouteHandler: RouteHandler<
  typeof getV2CustomersMyBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyBillingHistoryRouteHandler: RouteHandler<
  typeof getV2CustomersMyBillingHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyInvoicesRouteHandler: RouteHandler<
  typeof getV2CustomersMyInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyInvoicesInvoiceUuidRouteHandler: RouteHandler<
  typeof getV2CustomersMyInvoicesInvoiceUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyInvoicesInvoiceUuidCsvRouteHandler: RouteHandler<
  typeof getV2CustomersMyInvoicesInvoiceUuidCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyInvoicesInvoiceUuidPdfRouteHandler: RouteHandler<
  typeof getV2CustomersMyInvoicesInvoiceUuidPdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersMyInvoicesInvoiceUuidSummaryRouteHandler: RouteHandler<
  typeof getV2CustomersMyInvoicesInvoiceUuidSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesRouteHandler: RouteHandler<typeof getV2DatabasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DatabasesRouteHandler: RouteHandler<typeof postV2DatabasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesOptionsRouteHandler: RouteHandler<
  typeof getV2DatabasesOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DatabasesDatabaseClusterUuidRouteHandler: RouteHandler<
  typeof deleteV2DatabasesDatabaseClusterUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidBackupsRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidCaRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidConfigRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2DatabasesDatabaseClusterUuidConfigRouteHandler: RouteHandler<
  typeof patchV2DatabasesDatabaseClusterUuidConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidDbsRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidDbsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DatabasesDatabaseClusterUuidDbsRouteHandler: RouteHandler<
  typeof postV2DatabasesDatabaseClusterUuidDbsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameRouteHandler: RouteHandler<
  typeof deleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidDbsDatabaseNameRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidDbsDatabaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidEvictionPolicyRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidEvictionPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DatabasesDatabaseClusterUuidEvictionPolicyRouteHandler: RouteHandler<
  typeof putV2DatabasesDatabaseClusterUuidEvictionPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidFirewallRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidFirewallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DatabasesDatabaseClusterUuidFirewallRouteHandler: RouteHandler<
  typeof putV2DatabasesDatabaseClusterUuidFirewallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DatabasesDatabaseClusterUuidMaintenanceRouteHandler: RouteHandler<
  typeof putV2DatabasesDatabaseClusterUuidMaintenanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DatabasesDatabaseClusterUuidMigrateRouteHandler: RouteHandler<
  typeof putV2DatabasesDatabaseClusterUuidMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidOnlineMigrationRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidOnlineMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DatabasesDatabaseClusterUuidOnlineMigrationRouteHandler: RouteHandler<
  typeof putV2DatabasesDatabaseClusterUuidOnlineMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdRouteHandler: RouteHandler<
  typeof deleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidPoolsRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DatabasesDatabaseClusterUuidPoolsRouteHandler: RouteHandler<
  typeof postV2DatabasesDatabaseClusterUuidPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DatabasesDatabaseClusterUuidPoolsPoolNameRouteHandler: RouteHandler<
  typeof deleteV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidPoolsPoolNameRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DatabasesDatabaseClusterUuidPoolsPoolNameRouteHandler: RouteHandler<
  typeof putV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidReplicasRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidReplicasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DatabasesDatabaseClusterUuidReplicasRouteHandler: RouteHandler<
  typeof postV2DatabasesDatabaseClusterUuidReplicasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameRouteHandler: RouteHandler<
  typeof deleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidReplicasReplicaNameRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidReplicasReplicaNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteRouteHandler: RouteHandler<
  typeof putV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DatabasesDatabaseClusterUuidResizeRouteHandler: RouteHandler<
  typeof putV2DatabasesDatabaseClusterUuidResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidSqlModeRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidSqlModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DatabasesDatabaseClusterUuidSqlModeRouteHandler: RouteHandler<
  typeof putV2DatabasesDatabaseClusterUuidSqlModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DatabasesDatabaseClusterUuidUpgradeRouteHandler: RouteHandler<
  typeof putV2DatabasesDatabaseClusterUuidUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidUsersRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DatabasesDatabaseClusterUuidUsersRouteHandler: RouteHandler<
  typeof postV2DatabasesDatabaseClusterUuidUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DatabasesDatabaseClusterUuidUsersUsernameRouteHandler: RouteHandler<
  typeof deleteV2DatabasesDatabaseClusterUuidUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DatabasesDatabaseClusterUuidUsersUsernameRouteHandler: RouteHandler<
  typeof getV2DatabasesDatabaseClusterUuidUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthRouteHandler: RouteHandler<
  typeof postV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DomainsRouteHandler: RouteHandler<typeof getV2DomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DomainsRouteHandler: RouteHandler<typeof postV2DomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DomainsDomainNameRouteHandler: RouteHandler<
  typeof deleteV2DomainsDomainNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DomainsDomainNameRouteHandler: RouteHandler<
  typeof getV2DomainsDomainNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DomainsDomainNameRecordsRouteHandler: RouteHandler<
  typeof getV2DomainsDomainNameRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DomainsDomainNameRecordsRouteHandler: RouteHandler<
  typeof postV2DomainsDomainNameRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DomainsDomainNameRecordsDomainRecordIdRouteHandler: RouteHandler<
  typeof deleteV2DomainsDomainNameRecordsDomainRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DomainsDomainNameRecordsDomainRecordIdRouteHandler: RouteHandler<
  typeof getV2DomainsDomainNameRecordsDomainRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2DomainsDomainNameRecordsDomainRecordIdRouteHandler: RouteHandler<
  typeof patchV2DomainsDomainNameRecordsDomainRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DomainsDomainNameRecordsDomainRecordIdRouteHandler: RouteHandler<
  typeof putV2DomainsDomainNameRecordsDomainRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DropletsRouteHandler: RouteHandler<typeof deleteV2DropletsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2DropletsRouteHandler: RouteHandler<typeof getV2DropletsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DropletsRouteHandler: RouteHandler<typeof postV2DropletsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DropletsActionsRouteHandler: RouteHandler<
  typeof postV2DropletsActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DropletsDropletIdRouteHandler: RouteHandler<
  typeof deleteV2DropletsDropletIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DropletsDropletIdRouteHandler: RouteHandler<
  typeof getV2DropletsDropletIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DropletsDropletIdActionsRouteHandler: RouteHandler<
  typeof getV2DropletsDropletIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DropletsDropletIdActionsRouteHandler: RouteHandler<
  typeof postV2DropletsDropletIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DropletsDropletIdActionsActionIdRouteHandler: RouteHandler<
  typeof getV2DropletsDropletIdActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DropletsDropletIdBackupsRouteHandler: RouteHandler<
  typeof getV2DropletsDropletIdBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DropletsDropletIdDestroyWithAssociatedResourcesRouteHandler: RouteHandler<
  typeof getV2DropletsDropletIdDestroyWithAssociatedResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousRouteHandler: RouteHandler<
  typeof deleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DropletsDropletIdDestroyWithAssociatedResourcesRetryRouteHandler: RouteHandler<
  typeof postV2DropletsDropletIdDestroyWithAssociatedResourcesRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveRouteHandler: RouteHandler<
  typeof deleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusRouteHandler: RouteHandler<
  typeof getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DropletsDropletIdFirewallsRouteHandler: RouteHandler<
  typeof getV2DropletsDropletIdFirewallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DropletsDropletIdKernelsRouteHandler: RouteHandler<
  typeof getV2DropletsDropletIdKernelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DropletsDropletIdNeighborsRouteHandler: RouteHandler<
  typeof getV2DropletsDropletIdNeighborsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DropletsDropletIdSnapshotsRouteHandler: RouteHandler<
  typeof getV2DropletsDropletIdSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FirewallsRouteHandler: RouteHandler<typeof getV2FirewallsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2FirewallsRouteHandler: RouteHandler<typeof postV2FirewallsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2FirewallsFirewallIdRouteHandler: RouteHandler<
  typeof deleteV2FirewallsFirewallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FirewallsFirewallIdRouteHandler: RouteHandler<
  typeof getV2FirewallsFirewallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2FirewallsFirewallIdRouteHandler: RouteHandler<
  typeof putV2FirewallsFirewallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2FirewallsFirewallIdDropletsRouteHandler: RouteHandler<
  typeof deleteV2FirewallsFirewallIdDropletsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2FirewallsFirewallIdDropletsRouteHandler: RouteHandler<
  typeof postV2FirewallsFirewallIdDropletsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2FirewallsFirewallIdRulesRouteHandler: RouteHandler<
  typeof deleteV2FirewallsFirewallIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2FirewallsFirewallIdRulesRouteHandler: RouteHandler<
  typeof postV2FirewallsFirewallIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2FirewallsFirewallIdTagsRouteHandler: RouteHandler<
  typeof deleteV2FirewallsFirewallIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2FirewallsFirewallIdTagsRouteHandler: RouteHandler<
  typeof postV2FirewallsFirewallIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FloatingIpsRouteHandler: RouteHandler<typeof getV2FloatingIpsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2FloatingIpsRouteHandler: RouteHandler<typeof postV2FloatingIpsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2FloatingIpsFloatingIpRouteHandler: RouteHandler<
  typeof deleteV2FloatingIpsFloatingIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FloatingIpsFloatingIpRouteHandler: RouteHandler<
  typeof getV2FloatingIpsFloatingIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FloatingIpsFloatingIpActionsRouteHandler: RouteHandler<
  typeof getV2FloatingIpsFloatingIpActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2FloatingIpsFloatingIpActionsRouteHandler: RouteHandler<
  typeof postV2FloatingIpsFloatingIpActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FloatingIpsFloatingIpActionsActionIdRouteHandler: RouteHandler<
  typeof getV2FloatingIpsFloatingIpActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FunctionsNamespacesRouteHandler: RouteHandler<
  typeof getV2FunctionsNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2FunctionsNamespacesRouteHandler: RouteHandler<
  typeof postV2FunctionsNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2FunctionsNamespacesNamespaceIdRouteHandler: RouteHandler<
  typeof deleteV2FunctionsNamespacesNamespaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FunctionsNamespacesNamespaceIdRouteHandler: RouteHandler<
  typeof getV2FunctionsNamespacesNamespaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FunctionsNamespacesNamespaceIdTriggersRouteHandler: RouteHandler<
  typeof getV2FunctionsNamespacesNamespaceIdTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2FunctionsNamespacesNamespaceIdTriggersRouteHandler: RouteHandler<
  typeof postV2FunctionsNamespacesNamespaceIdTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRouteHandler: RouteHandler<
  typeof deleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRouteHandler: RouteHandler<
  typeof getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRouteHandler: RouteHandler<
  typeof putV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ImagesRouteHandler: RouteHandler<typeof getV2ImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ImagesRouteHandler: RouteHandler<typeof postV2ImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2ImagesImageIdRouteHandler: RouteHandler<
  typeof deleteV2ImagesImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ImagesImageIdRouteHandler: RouteHandler<typeof getV2ImagesImageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV2ImagesImageIdRouteHandler: RouteHandler<typeof putV2ImagesImageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2ImagesImageIdActionsRouteHandler: RouteHandler<
  typeof getV2ImagesImageIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ImagesImageIdActionsRouteHandler: RouteHandler<
  typeof postV2ImagesImageIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ImagesImageIdActionsActionIdRouteHandler: RouteHandler<
  typeof getV2ImagesImageIdActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesClustersRouteHandler: RouteHandler<
  typeof getV2KubernetesClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2KubernetesClustersRouteHandler: RouteHandler<
  typeof postV2KubernetesClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2KubernetesClustersClusterIdRouteHandler: RouteHandler<
  typeof deleteV2KubernetesClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesClustersClusterIdRouteHandler: RouteHandler<
  typeof getV2KubernetesClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2KubernetesClustersClusterIdRouteHandler: RouteHandler<
  typeof putV2KubernetesClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesClustersClusterIdClusterlintRouteHandler: RouteHandler<
  typeof getV2KubernetesClustersClusterIdClusterlintRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2KubernetesClustersClusterIdClusterlintRouteHandler: RouteHandler<
  typeof postV2KubernetesClustersClusterIdClusterlintRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesClustersClusterIdCredentialsRouteHandler: RouteHandler<
  typeof getV2KubernetesClustersClusterIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesRouteHandler: RouteHandler<
  typeof getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousRouteHandler: RouteHandler<
  typeof deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveRouteHandler: RouteHandler<
  typeof deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesClustersClusterIdKubeconfigRouteHandler: RouteHandler<
  typeof getV2KubernetesClustersClusterIdKubeconfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesClustersClusterIdNodePoolsRouteHandler: RouteHandler<
  typeof getV2KubernetesClustersClusterIdNodePoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2KubernetesClustersClusterIdNodePoolsRouteHandler: RouteHandler<
  typeof postV2KubernetesClustersClusterIdNodePoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdRouteHandler: RouteHandler<
  typeof deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesClustersClusterIdNodePoolsNodePoolIdRouteHandler: RouteHandler<
  typeof getV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2KubernetesClustersClusterIdNodePoolsNodePoolIdRouteHandler: RouteHandler<
  typeof putV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdRouteHandler: RouteHandler<
  typeof deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleRouteHandler: RouteHandler<
  typeof postV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2KubernetesClustersClusterIdUpgradeRouteHandler: RouteHandler<
  typeof postV2KubernetesClustersClusterIdUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesClustersClusterIdUpgradesRouteHandler: RouteHandler<
  typeof getV2KubernetesClustersClusterIdUpgradesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesClustersClusterIdUserRouteHandler: RouteHandler<
  typeof getV2KubernetesClustersClusterIdUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2KubernetesOptionsRouteHandler: RouteHandler<
  typeof getV2KubernetesOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2KubernetesRegistryRouteHandler: RouteHandler<
  typeof deleteV2KubernetesRegistryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2KubernetesRegistryRouteHandler: RouteHandler<
  typeof postV2KubernetesRegistryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LoadBalancersRouteHandler: RouteHandler<typeof getV2LoadBalancersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2LoadBalancersRouteHandler: RouteHandler<
  typeof postV2LoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2LoadBalancersLbIdRouteHandler: RouteHandler<
  typeof deleteV2LoadBalancersLbIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LoadBalancersLbIdRouteHandler: RouteHandler<
  typeof getV2LoadBalancersLbIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2LoadBalancersLbIdRouteHandler: RouteHandler<
  typeof putV2LoadBalancersLbIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2LoadBalancersLbIdDropletsRouteHandler: RouteHandler<
  typeof deleteV2LoadBalancersLbIdDropletsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoadBalancersLbIdDropletsRouteHandler: RouteHandler<
  typeof postV2LoadBalancersLbIdDropletsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2LoadBalancersLbIdForwardingRulesRouteHandler: RouteHandler<
  typeof deleteV2LoadBalancersLbIdForwardingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoadBalancersLbIdForwardingRulesRouteHandler: RouteHandler<
  typeof postV2LoadBalancersLbIdForwardingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringAlertsRouteHandler: RouteHandler<
  typeof getV2MonitoringAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2MonitoringAlertsRouteHandler: RouteHandler<
  typeof postV2MonitoringAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2MonitoringAlertsAlertUuidRouteHandler: RouteHandler<
  typeof deleteV2MonitoringAlertsAlertUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringAlertsAlertUuidRouteHandler: RouteHandler<
  typeof getV2MonitoringAlertsAlertUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2MonitoringAlertsAlertUuidRouteHandler: RouteHandler<
  typeof putV2MonitoringAlertsAlertUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletBandwidthRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletBandwidthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletCpuRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletCpuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletFilesystemFreeRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletFilesystemFreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletFilesystemSizeRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletFilesystemSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletLoad1RouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletLoad1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletLoad15RouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletLoad15Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletLoad5RouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletLoad5Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletMemoryAvailableRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletMemoryAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletMemoryCachedRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletMemoryCachedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletMemoryFreeRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletMemoryFreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MonitoringMetricsDropletMemoryTotalRouteHandler: RouteHandler<
  typeof getV2MonitoringMetricsDropletMemoryTotalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ProjectsRouteHandler: RouteHandler<typeof getV2ProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ProjectsRouteHandler: RouteHandler<typeof postV2ProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ProjectsDefaultRouteHandler: RouteHandler<
  typeof getV2ProjectsDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2ProjectsDefaultRouteHandler: RouteHandler<
  typeof patchV2ProjectsDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2ProjectsDefaultRouteHandler: RouteHandler<
  typeof putV2ProjectsDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ProjectsDefaultResourcesRouteHandler: RouteHandler<
  typeof getV2ProjectsDefaultResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ProjectsDefaultResourcesRouteHandler: RouteHandler<
  typeof postV2ProjectsDefaultResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2ProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteV2ProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ProjectsProjectIdRouteHandler: RouteHandler<
  typeof getV2ProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2ProjectsProjectIdRouteHandler: RouteHandler<
  typeof patchV2ProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2ProjectsProjectIdRouteHandler: RouteHandler<
  typeof putV2ProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ProjectsProjectIdResourcesRouteHandler: RouteHandler<
  typeof getV2ProjectsProjectIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ProjectsProjectIdResourcesRouteHandler: RouteHandler<
  typeof postV2ProjectsProjectIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RegionsRouteHandler: RouteHandler<typeof getV2RegionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2RegistryRouteHandler: RouteHandler<typeof deleteV2RegistryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2RegistryRouteHandler: RouteHandler<typeof getV2RegistryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2RegistryRouteHandler: RouteHandler<typeof postV2RegistryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RegistryDockerCredentialsRouteHandler: RouteHandler<
  typeof getV2RegistryDockerCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RegistryOptionsRouteHandler: RouteHandler<
  typeof getV2RegistryOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RegistrySubscriptionRouteHandler: RouteHandler<
  typeof getV2RegistrySubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2RegistrySubscriptionRouteHandler: RouteHandler<
  typeof postV2RegistrySubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2RegistryValidateNameRouteHandler: RouteHandler<
  typeof postV2RegistryValidateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RegistryRegistryNameGarbageCollectionRouteHandler: RouteHandler<
  typeof getV2RegistryRegistryNameGarbageCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2RegistryRegistryNameGarbageCollectionRouteHandler: RouteHandler<
  typeof postV2RegistryRegistryNameGarbageCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidRouteHandler: RouteHandler<
  typeof putV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RegistryRegistryNameGarbageCollectionsRouteHandler: RouteHandler<
  typeof getV2RegistryRegistryNameGarbageCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RegistryRegistryNameRepositoriesRouteHandler: RouteHandler<
  typeof getV2RegistryRegistryNameRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RegistryRegistryNameRepositoriesV2RouteHandler: RouteHandler<
  typeof getV2RegistryRegistryNameRepositoriesV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RegistryRegistryNameRepositoryNameDigestsRouteHandler: RouteHandler<
  typeof getV2RegistryRegistryNameRepositoryNameDigestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestRouteHandler: RouteHandler<
  typeof deleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2RegistryRegistryNameRepositoryNameTagsRouteHandler: RouteHandler<
  typeof getV2RegistryRegistryNameRepositoryNameTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagRouteHandler: RouteHandler<
  typeof deleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ReportsDropletNeighborsIdsRouteHandler: RouteHandler<
  typeof getV2ReportsDropletNeighborsIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ReservedIpsRouteHandler: RouteHandler<typeof getV2ReservedIpsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2ReservedIpsRouteHandler: RouteHandler<typeof postV2ReservedIpsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2ReservedIpsReservedIpRouteHandler: RouteHandler<
  typeof deleteV2ReservedIpsReservedIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ReservedIpsReservedIpRouteHandler: RouteHandler<
  typeof getV2ReservedIpsReservedIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ReservedIpsReservedIpActionsRouteHandler: RouteHandler<
  typeof getV2ReservedIpsReservedIpActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ReservedIpsReservedIpActionsRouteHandler: RouteHandler<
  typeof postV2ReservedIpsReservedIpActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ReservedIpsReservedIpActionsActionIdRouteHandler: RouteHandler<
  typeof getV2ReservedIpsReservedIpActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SizesRouteHandler: RouteHandler<typeof getV2SizesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SnapshotsRouteHandler: RouteHandler<typeof getV2SnapshotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2SnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof deleteV2SnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof getV2SnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TagsRouteHandler: RouteHandler<typeof getV2TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TagsRouteHandler: RouteHandler<typeof postV2TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2TagsTagIdRouteHandler: RouteHandler<typeof deleteV2TagsTagIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2TagsTagIdRouteHandler: RouteHandler<typeof getV2TagsTagIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2TagsTagIdResourcesRouteHandler: RouteHandler<
  typeof deleteV2TagsTagIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TagsTagIdResourcesRouteHandler: RouteHandler<
  typeof postV2TagsTagIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UptimeChecksRouteHandler: RouteHandler<typeof getV2UptimeChecksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2UptimeChecksRouteHandler: RouteHandler<typeof postV2UptimeChecksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV2UptimeChecksCheckIdRouteHandler: RouteHandler<
  typeof deleteV2UptimeChecksCheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UptimeChecksCheckIdRouteHandler: RouteHandler<
  typeof getV2UptimeChecksCheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UptimeChecksCheckIdRouteHandler: RouteHandler<
  typeof putV2UptimeChecksCheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UptimeChecksCheckIdAlertsRouteHandler: RouteHandler<
  typeof getV2UptimeChecksCheckIdAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UptimeChecksCheckIdAlertsRouteHandler: RouteHandler<
  typeof postV2UptimeChecksCheckIdAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UptimeChecksCheckIdAlertsAlertIdRouteHandler: RouteHandler<
  typeof deleteV2UptimeChecksCheckIdAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UptimeChecksCheckIdAlertsAlertIdRouteHandler: RouteHandler<
  typeof getV2UptimeChecksCheckIdAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UptimeChecksCheckIdAlertsAlertIdRouteHandler: RouteHandler<
  typeof putV2UptimeChecksCheckIdAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UptimeChecksCheckIdStateRouteHandler: RouteHandler<
  typeof getV2UptimeChecksCheckIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2VolumesRouteHandler: RouteHandler<typeof deleteV2VolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VolumesRouteHandler: RouteHandler<typeof getV2VolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2VolumesRouteHandler: RouteHandler<typeof postV2VolumesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2VolumesActionsRouteHandler: RouteHandler<
  typeof postV2VolumesActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2VolumesSnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof deleteV2VolumesSnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VolumesSnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof getV2VolumesSnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2VolumesVolumeIdRouteHandler: RouteHandler<
  typeof deleteV2VolumesVolumeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VolumesVolumeIdRouteHandler: RouteHandler<
  typeof getV2VolumesVolumeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VolumesVolumeIdActionsRouteHandler: RouteHandler<
  typeof getV2VolumesVolumeIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2VolumesVolumeIdActionsRouteHandler: RouteHandler<
  typeof postV2VolumesVolumeIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VolumesVolumeIdActionsActionIdRouteHandler: RouteHandler<
  typeof getV2VolumesVolumeIdActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VolumesVolumeIdSnapshotsRouteHandler: RouteHandler<
  typeof getV2VolumesVolumeIdSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2VolumesVolumeIdSnapshotsRouteHandler: RouteHandler<
  typeof postV2VolumesVolumeIdSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VpcsRouteHandler: RouteHandler<typeof getV2VpcsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2VpcsRouteHandler: RouteHandler<typeof postV2VpcsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2VpcsVpcIdRouteHandler: RouteHandler<typeof deleteV2VpcsVpcIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2VpcsVpcIdRouteHandler: RouteHandler<typeof getV2VpcsVpcIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2VpcsVpcIdRouteHandler: RouteHandler<typeof patchV2VpcsVpcIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV2VpcsVpcIdRouteHandler: RouteHandler<typeof putV2VpcsVpcIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2VpcsVpcIdMembersRouteHandler: RouteHandler<
  typeof getV2VpcsVpcIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
