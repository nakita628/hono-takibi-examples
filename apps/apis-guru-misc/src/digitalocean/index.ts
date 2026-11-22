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
} from './routes'
import {
  deleteV2AccountKeysSshKeyIdentifierRouteHandler,
  deleteV2AppsIdRouteHandler,
  deleteV2CdnEndpointsCdnIdCacheRouteHandler,
  deleteV2CdnEndpointsCdnIdRouteHandler,
  deleteV2CertificatesCertificateIdRouteHandler,
  deleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameRouteHandler,
  deleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdRouteHandler,
  deleteV2DatabasesDatabaseClusterUuidPoolsPoolNameRouteHandler,
  deleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameRouteHandler,
  deleteV2DatabasesDatabaseClusterUuidRouteHandler,
  deleteV2DatabasesDatabaseClusterUuidUsersUsernameRouteHandler,
  deleteV2DomainsDomainNameRecordsDomainRecordIdRouteHandler,
  deleteV2DomainsDomainNameRouteHandler,
  deleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousRouteHandler,
  deleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveRouteHandler,
  deleteV2DropletsDropletIdRouteHandler,
  deleteV2DropletsRouteHandler,
  deleteV2FirewallsFirewallIdDropletsRouteHandler,
  deleteV2FirewallsFirewallIdRouteHandler,
  deleteV2FirewallsFirewallIdRulesRouteHandler,
  deleteV2FirewallsFirewallIdTagsRouteHandler,
  deleteV2FloatingIpsFloatingIpRouteHandler,
  deleteV2FunctionsNamespacesNamespaceIdRouteHandler,
  deleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRouteHandler,
  deleteV2ImagesImageIdRouteHandler,
  deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousRouteHandler,
  deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveRouteHandler,
  deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdRouteHandler,
  deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdRouteHandler,
  deleteV2KubernetesClustersClusterIdRouteHandler,
  deleteV2KubernetesRegistryRouteHandler,
  deleteV2LoadBalancersLbIdDropletsRouteHandler,
  deleteV2LoadBalancersLbIdForwardingRulesRouteHandler,
  deleteV2LoadBalancersLbIdRouteHandler,
  deleteV2MonitoringAlertsAlertUuidRouteHandler,
  deleteV2ProjectsProjectIdRouteHandler,
  deleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestRouteHandler,
  deleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagRouteHandler,
  deleteV2RegistryRouteHandler,
  deleteV2ReservedIpsReservedIpRouteHandler,
  deleteV2SnapshotsSnapshotIdRouteHandler,
  deleteV2TagsTagIdResourcesRouteHandler,
  deleteV2TagsTagIdRouteHandler,
  deleteV2UptimeChecksCheckIdAlertsAlertIdRouteHandler,
  deleteV2UptimeChecksCheckIdRouteHandler,
  deleteV2VolumesRouteHandler,
  deleteV2VolumesSnapshotsSnapshotIdRouteHandler,
  deleteV2VolumesVolumeIdRouteHandler,
  deleteV2VpcsVpcIdRouteHandler,
  getV21ClicksRouteHandler,
  getV2AccountKeysRouteHandler,
  getV2AccountKeysSshKeyIdentifierRouteHandler,
  getV2AccountRouteHandler,
  getV2ActionsActionIdRouteHandler,
  getV2ActionsRouteHandler,
  getV2AppsAppIdAlertsRouteHandler,
  getV2AppsAppIdComponentsComponentNameLogsRouteHandler,
  getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsRouteHandler,
  getV2AppsAppIdDeploymentsDeploymentIdLogsRouteHandler,
  getV2AppsAppIdDeploymentsDeploymentIdRouteHandler,
  getV2AppsAppIdDeploymentsRouteHandler,
  getV2AppsAppIdLogsRouteHandler,
  getV2AppsAppIdMetricsBandwidthDailyRouteHandler,
  getV2AppsIdRouteHandler,
  getV2AppsRegionsRouteHandler,
  getV2AppsRouteHandler,
  getV2AppsTiersInstanceSizesRouteHandler,
  getV2AppsTiersInstanceSizesSlugRouteHandler,
  getV2AppsTiersRouteHandler,
  getV2AppsTiersSlugRouteHandler,
  getV2CdnEndpointsCdnIdRouteHandler,
  getV2CdnEndpointsRouteHandler,
  getV2CertificatesCertificateIdRouteHandler,
  getV2CertificatesRouteHandler,
  getV2CustomersMyBalanceRouteHandler,
  getV2CustomersMyBillingHistoryRouteHandler,
  getV2CustomersMyInvoicesInvoiceUuidCsvRouteHandler,
  getV2CustomersMyInvoicesInvoiceUuidPdfRouteHandler,
  getV2CustomersMyInvoicesInvoiceUuidRouteHandler,
  getV2CustomersMyInvoicesInvoiceUuidSummaryRouteHandler,
  getV2CustomersMyInvoicesRouteHandler,
  getV2DatabasesDatabaseClusterUuidBackupsRouteHandler,
  getV2DatabasesDatabaseClusterUuidCaRouteHandler,
  getV2DatabasesDatabaseClusterUuidConfigRouteHandler,
  getV2DatabasesDatabaseClusterUuidDbsDatabaseNameRouteHandler,
  getV2DatabasesDatabaseClusterUuidDbsRouteHandler,
  getV2DatabasesDatabaseClusterUuidEvictionPolicyRouteHandler,
  getV2DatabasesDatabaseClusterUuidFirewallRouteHandler,
  getV2DatabasesDatabaseClusterUuidOnlineMigrationRouteHandler,
  getV2DatabasesDatabaseClusterUuidPoolsPoolNameRouteHandler,
  getV2DatabasesDatabaseClusterUuidPoolsRouteHandler,
  getV2DatabasesDatabaseClusterUuidReplicasReplicaNameRouteHandler,
  getV2DatabasesDatabaseClusterUuidReplicasRouteHandler,
  getV2DatabasesDatabaseClusterUuidRouteHandler,
  getV2DatabasesDatabaseClusterUuidSqlModeRouteHandler,
  getV2DatabasesDatabaseClusterUuidUsersRouteHandler,
  getV2DatabasesDatabaseClusterUuidUsersUsernameRouteHandler,
  getV2DatabasesOptionsRouteHandler,
  getV2DatabasesRouteHandler,
  getV2DomainsDomainNameRecordsDomainRecordIdRouteHandler,
  getV2DomainsDomainNameRecordsRouteHandler,
  getV2DomainsDomainNameRouteHandler,
  getV2DomainsRouteHandler,
  getV2DropletsDropletIdActionsActionIdRouteHandler,
  getV2DropletsDropletIdActionsRouteHandler,
  getV2DropletsDropletIdBackupsRouteHandler,
  getV2DropletsDropletIdDestroyWithAssociatedResourcesRouteHandler,
  getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusRouteHandler,
  getV2DropletsDropletIdFirewallsRouteHandler,
  getV2DropletsDropletIdKernelsRouteHandler,
  getV2DropletsDropletIdNeighborsRouteHandler,
  getV2DropletsDropletIdRouteHandler,
  getV2DropletsDropletIdSnapshotsRouteHandler,
  getV2DropletsRouteHandler,
  getV2FirewallsFirewallIdRouteHandler,
  getV2FirewallsRouteHandler,
  getV2FloatingIpsFloatingIpActionsActionIdRouteHandler,
  getV2FloatingIpsFloatingIpActionsRouteHandler,
  getV2FloatingIpsFloatingIpRouteHandler,
  getV2FloatingIpsRouteHandler,
  getV2FunctionsNamespacesNamespaceIdRouteHandler,
  getV2FunctionsNamespacesNamespaceIdTriggersRouteHandler,
  getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRouteHandler,
  getV2FunctionsNamespacesRouteHandler,
  getV2ImagesImageIdActionsActionIdRouteHandler,
  getV2ImagesImageIdActionsRouteHandler,
  getV2ImagesImageIdRouteHandler,
  getV2ImagesRouteHandler,
  getV2KubernetesClustersClusterIdClusterlintRouteHandler,
  getV2KubernetesClustersClusterIdCredentialsRouteHandler,
  getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesRouteHandler,
  getV2KubernetesClustersClusterIdKubeconfigRouteHandler,
  getV2KubernetesClustersClusterIdNodePoolsNodePoolIdRouteHandler,
  getV2KubernetesClustersClusterIdNodePoolsRouteHandler,
  getV2KubernetesClustersClusterIdRouteHandler,
  getV2KubernetesClustersClusterIdUpgradesRouteHandler,
  getV2KubernetesClustersClusterIdUserRouteHandler,
  getV2KubernetesClustersRouteHandler,
  getV2KubernetesOptionsRouteHandler,
  getV2LoadBalancersLbIdRouteHandler,
  getV2LoadBalancersRouteHandler,
  getV2MonitoringAlertsAlertUuidRouteHandler,
  getV2MonitoringAlertsRouteHandler,
  getV2MonitoringMetricsDropletBandwidthRouteHandler,
  getV2MonitoringMetricsDropletCpuRouteHandler,
  getV2MonitoringMetricsDropletFilesystemFreeRouteHandler,
  getV2MonitoringMetricsDropletFilesystemSizeRouteHandler,
  getV2MonitoringMetricsDropletLoad15RouteHandler,
  getV2MonitoringMetricsDropletLoad1RouteHandler,
  getV2MonitoringMetricsDropletLoad5RouteHandler,
  getV2MonitoringMetricsDropletMemoryAvailableRouteHandler,
  getV2MonitoringMetricsDropletMemoryCachedRouteHandler,
  getV2MonitoringMetricsDropletMemoryFreeRouteHandler,
  getV2MonitoringMetricsDropletMemoryTotalRouteHandler,
  getV2ProjectsDefaultResourcesRouteHandler,
  getV2ProjectsDefaultRouteHandler,
  getV2ProjectsProjectIdResourcesRouteHandler,
  getV2ProjectsProjectIdRouteHandler,
  getV2ProjectsRouteHandler,
  getV2RegionsRouteHandler,
  getV2RegistryDockerCredentialsRouteHandler,
  getV2RegistryOptionsRouteHandler,
  getV2RegistryRegistryNameGarbageCollectionRouteHandler,
  getV2RegistryRegistryNameGarbageCollectionsRouteHandler,
  getV2RegistryRegistryNameRepositoriesRouteHandler,
  getV2RegistryRegistryNameRepositoriesV2RouteHandler,
  getV2RegistryRegistryNameRepositoryNameDigestsRouteHandler,
  getV2RegistryRegistryNameRepositoryNameTagsRouteHandler,
  getV2RegistryRouteHandler,
  getV2RegistrySubscriptionRouteHandler,
  getV2ReportsDropletNeighborsIdsRouteHandler,
  getV2ReservedIpsReservedIpActionsActionIdRouteHandler,
  getV2ReservedIpsReservedIpActionsRouteHandler,
  getV2ReservedIpsReservedIpRouteHandler,
  getV2ReservedIpsRouteHandler,
  getV2SizesRouteHandler,
  getV2SnapshotsRouteHandler,
  getV2SnapshotsSnapshotIdRouteHandler,
  getV2TagsRouteHandler,
  getV2TagsTagIdRouteHandler,
  getV2UptimeChecksCheckIdAlertsAlertIdRouteHandler,
  getV2UptimeChecksCheckIdAlertsRouteHandler,
  getV2UptimeChecksCheckIdRouteHandler,
  getV2UptimeChecksCheckIdStateRouteHandler,
  getV2UptimeChecksRouteHandler,
  getV2VolumesRouteHandler,
  getV2VolumesSnapshotsSnapshotIdRouteHandler,
  getV2VolumesVolumeIdActionsActionIdRouteHandler,
  getV2VolumesVolumeIdActionsRouteHandler,
  getV2VolumesVolumeIdRouteHandler,
  getV2VolumesVolumeIdSnapshotsRouteHandler,
  getV2VpcsRouteHandler,
  getV2VpcsVpcIdMembersRouteHandler,
  getV2VpcsVpcIdRouteHandler,
  patchV2DatabasesDatabaseClusterUuidConfigRouteHandler,
  patchV2DomainsDomainNameRecordsDomainRecordIdRouteHandler,
  patchV2ProjectsDefaultRouteHandler,
  patchV2ProjectsProjectIdRouteHandler,
  patchV2VpcsVpcIdRouteHandler,
  postV21ClicksKubernetesRouteHandler,
  postV2AccountKeysRouteHandler,
  postV2AppsAppIdAlertsAlertIdDestinationsRouteHandler,
  postV2AppsAppIdDeploymentsDeploymentIdCancelRouteHandler,
  postV2AppsAppIdDeploymentsRouteHandler,
  postV2AppsAppIdRollbackCommitRouteHandler,
  postV2AppsAppIdRollbackRevertRouteHandler,
  postV2AppsAppIdRollbackRouteHandler,
  postV2AppsAppIdRollbackValidateRouteHandler,
  postV2AppsMetricsBandwidthDailyRouteHandler,
  postV2AppsProposeRouteHandler,
  postV2AppsRouteHandler,
  postV2CdnEndpointsRouteHandler,
  postV2CertificatesRouteHandler,
  postV2DatabasesDatabaseClusterUuidDbsRouteHandler,
  postV2DatabasesDatabaseClusterUuidPoolsRouteHandler,
  postV2DatabasesDatabaseClusterUuidReplicasRouteHandler,
  postV2DatabasesDatabaseClusterUuidUsersRouteHandler,
  postV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthRouteHandler,
  postV2DatabasesRouteHandler,
  postV2DomainsDomainNameRecordsRouteHandler,
  postV2DomainsRouteHandler,
  postV2DropletsActionsRouteHandler,
  postV2DropletsDropletIdActionsRouteHandler,
  postV2DropletsDropletIdDestroyWithAssociatedResourcesRetryRouteHandler,
  postV2DropletsRouteHandler,
  postV2FirewallsFirewallIdDropletsRouteHandler,
  postV2FirewallsFirewallIdRulesRouteHandler,
  postV2FirewallsFirewallIdTagsRouteHandler,
  postV2FirewallsRouteHandler,
  postV2FloatingIpsFloatingIpActionsRouteHandler,
  postV2FloatingIpsRouteHandler,
  postV2FunctionsNamespacesNamespaceIdTriggersRouteHandler,
  postV2FunctionsNamespacesRouteHandler,
  postV2ImagesImageIdActionsRouteHandler,
  postV2ImagesRouteHandler,
  postV2KubernetesClustersClusterIdClusterlintRouteHandler,
  postV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleRouteHandler,
  postV2KubernetesClustersClusterIdNodePoolsRouteHandler,
  postV2KubernetesClustersClusterIdUpgradeRouteHandler,
  postV2KubernetesClustersRouteHandler,
  postV2KubernetesRegistryRouteHandler,
  postV2LoadBalancersLbIdDropletsRouteHandler,
  postV2LoadBalancersLbIdForwardingRulesRouteHandler,
  postV2LoadBalancersRouteHandler,
  postV2MonitoringAlertsRouteHandler,
  postV2ProjectsDefaultResourcesRouteHandler,
  postV2ProjectsProjectIdResourcesRouteHandler,
  postV2ProjectsRouteHandler,
  postV2RegistryRegistryNameGarbageCollectionRouteHandler,
  postV2RegistryRouteHandler,
  postV2RegistrySubscriptionRouteHandler,
  postV2RegistryValidateNameRouteHandler,
  postV2ReservedIpsReservedIpActionsRouteHandler,
  postV2ReservedIpsRouteHandler,
  postV2TagsRouteHandler,
  postV2TagsTagIdResourcesRouteHandler,
  postV2UptimeChecksCheckIdAlertsRouteHandler,
  postV2UptimeChecksRouteHandler,
  postV2VolumesActionsRouteHandler,
  postV2VolumesRouteHandler,
  postV2VolumesVolumeIdActionsRouteHandler,
  postV2VolumesVolumeIdSnapshotsRouteHandler,
  postV2VpcsRouteHandler,
  putV2AccountKeysSshKeyIdentifierRouteHandler,
  putV2AppsIdRouteHandler,
  putV2CdnEndpointsCdnIdRouteHandler,
  putV2DatabasesDatabaseClusterUuidEvictionPolicyRouteHandler,
  putV2DatabasesDatabaseClusterUuidFirewallRouteHandler,
  putV2DatabasesDatabaseClusterUuidMaintenanceRouteHandler,
  putV2DatabasesDatabaseClusterUuidMigrateRouteHandler,
  putV2DatabasesDatabaseClusterUuidOnlineMigrationRouteHandler,
  putV2DatabasesDatabaseClusterUuidPoolsPoolNameRouteHandler,
  putV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteRouteHandler,
  putV2DatabasesDatabaseClusterUuidResizeRouteHandler,
  putV2DatabasesDatabaseClusterUuidSqlModeRouteHandler,
  putV2DatabasesDatabaseClusterUuidUpgradeRouteHandler,
  putV2DomainsDomainNameRecordsDomainRecordIdRouteHandler,
  putV2FirewallsFirewallIdRouteHandler,
  putV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRouteHandler,
  putV2ImagesImageIdRouteHandler,
  putV2KubernetesClustersClusterIdNodePoolsNodePoolIdRouteHandler,
  putV2KubernetesClustersClusterIdRouteHandler,
  putV2LoadBalancersLbIdRouteHandler,
  putV2MonitoringAlertsAlertUuidRouteHandler,
  putV2ProjectsDefaultRouteHandler,
  putV2ProjectsProjectIdRouteHandler,
  putV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidRouteHandler,
  putV2UptimeChecksCheckIdAlertsAlertIdRouteHandler,
  putV2UptimeChecksCheckIdRouteHandler,
  putV2VpcsVpcIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV21ClicksRoute, getV21ClicksRouteHandler)
  .openapi(postV21ClicksKubernetesRoute, postV21ClicksKubernetesRouteHandler)
  .openapi(getV2AccountRoute, getV2AccountRouteHandler)
  .openapi(getV2AccountKeysRoute, getV2AccountKeysRouteHandler)
  .openapi(postV2AccountKeysRoute, postV2AccountKeysRouteHandler)
  .openapi(
    deleteV2AccountKeysSshKeyIdentifierRoute,
    deleteV2AccountKeysSshKeyIdentifierRouteHandler,
  )
  .openapi(getV2AccountKeysSshKeyIdentifierRoute, getV2AccountKeysSshKeyIdentifierRouteHandler)
  .openapi(putV2AccountKeysSshKeyIdentifierRoute, putV2AccountKeysSshKeyIdentifierRouteHandler)
  .openapi(getV2ActionsRoute, getV2ActionsRouteHandler)
  .openapi(getV2ActionsActionIdRoute, getV2ActionsActionIdRouteHandler)
  .openapi(getV2AppsRoute, getV2AppsRouteHandler)
  .openapi(postV2AppsRoute, postV2AppsRouteHandler)
  .openapi(postV2AppsMetricsBandwidthDailyRoute, postV2AppsMetricsBandwidthDailyRouteHandler)
  .openapi(postV2AppsProposeRoute, postV2AppsProposeRouteHandler)
  .openapi(getV2AppsRegionsRoute, getV2AppsRegionsRouteHandler)
  .openapi(getV2AppsTiersRoute, getV2AppsTiersRouteHandler)
  .openapi(getV2AppsTiersInstanceSizesRoute, getV2AppsTiersInstanceSizesRouteHandler)
  .openapi(getV2AppsTiersInstanceSizesSlugRoute, getV2AppsTiersInstanceSizesSlugRouteHandler)
  .openapi(getV2AppsTiersSlugRoute, getV2AppsTiersSlugRouteHandler)
  .openapi(getV2AppsAppIdAlertsRoute, getV2AppsAppIdAlertsRouteHandler)
  .openapi(
    postV2AppsAppIdAlertsAlertIdDestinationsRoute,
    postV2AppsAppIdAlertsAlertIdDestinationsRouteHandler,
  )
  .openapi(
    getV2AppsAppIdComponentsComponentNameLogsRoute,
    getV2AppsAppIdComponentsComponentNameLogsRouteHandler,
  )
  .openapi(getV2AppsAppIdDeploymentsRoute, getV2AppsAppIdDeploymentsRouteHandler)
  .openapi(postV2AppsAppIdDeploymentsRoute, postV2AppsAppIdDeploymentsRouteHandler)
  .openapi(
    getV2AppsAppIdDeploymentsDeploymentIdRoute,
    getV2AppsAppIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    postV2AppsAppIdDeploymentsDeploymentIdCancelRoute,
    postV2AppsAppIdDeploymentsDeploymentIdCancelRouteHandler,
  )
  .openapi(
    getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsRoute,
    getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsRouteHandler,
  )
  .openapi(
    getV2AppsAppIdDeploymentsDeploymentIdLogsRoute,
    getV2AppsAppIdDeploymentsDeploymentIdLogsRouteHandler,
  )
  .openapi(getV2AppsAppIdLogsRoute, getV2AppsAppIdLogsRouteHandler)
  .openapi(
    getV2AppsAppIdMetricsBandwidthDailyRoute,
    getV2AppsAppIdMetricsBandwidthDailyRouteHandler,
  )
  .openapi(postV2AppsAppIdRollbackRoute, postV2AppsAppIdRollbackRouteHandler)
  .openapi(postV2AppsAppIdRollbackCommitRoute, postV2AppsAppIdRollbackCommitRouteHandler)
  .openapi(postV2AppsAppIdRollbackRevertRoute, postV2AppsAppIdRollbackRevertRouteHandler)
  .openapi(postV2AppsAppIdRollbackValidateRoute, postV2AppsAppIdRollbackValidateRouteHandler)
  .openapi(deleteV2AppsIdRoute, deleteV2AppsIdRouteHandler)
  .openapi(getV2AppsIdRoute, getV2AppsIdRouteHandler)
  .openapi(putV2AppsIdRoute, putV2AppsIdRouteHandler)
  .openapi(getV2CdnEndpointsRoute, getV2CdnEndpointsRouteHandler)
  .openapi(postV2CdnEndpointsRoute, postV2CdnEndpointsRouteHandler)
  .openapi(deleteV2CdnEndpointsCdnIdRoute, deleteV2CdnEndpointsCdnIdRouteHandler)
  .openapi(getV2CdnEndpointsCdnIdRoute, getV2CdnEndpointsCdnIdRouteHandler)
  .openapi(putV2CdnEndpointsCdnIdRoute, putV2CdnEndpointsCdnIdRouteHandler)
  .openapi(deleteV2CdnEndpointsCdnIdCacheRoute, deleteV2CdnEndpointsCdnIdCacheRouteHandler)
  .openapi(getV2CertificatesRoute, getV2CertificatesRouteHandler)
  .openapi(postV2CertificatesRoute, postV2CertificatesRouteHandler)
  .openapi(deleteV2CertificatesCertificateIdRoute, deleteV2CertificatesCertificateIdRouteHandler)
  .openapi(getV2CertificatesCertificateIdRoute, getV2CertificatesCertificateIdRouteHandler)
  .openapi(getV2CustomersMyBalanceRoute, getV2CustomersMyBalanceRouteHandler)
  .openapi(getV2CustomersMyBillingHistoryRoute, getV2CustomersMyBillingHistoryRouteHandler)
  .openapi(getV2CustomersMyInvoicesRoute, getV2CustomersMyInvoicesRouteHandler)
  .openapi(
    getV2CustomersMyInvoicesInvoiceUuidRoute,
    getV2CustomersMyInvoicesInvoiceUuidRouteHandler,
  )
  .openapi(
    getV2CustomersMyInvoicesInvoiceUuidCsvRoute,
    getV2CustomersMyInvoicesInvoiceUuidCsvRouteHandler,
  )
  .openapi(
    getV2CustomersMyInvoicesInvoiceUuidPdfRoute,
    getV2CustomersMyInvoicesInvoiceUuidPdfRouteHandler,
  )
  .openapi(
    getV2CustomersMyInvoicesInvoiceUuidSummaryRoute,
    getV2CustomersMyInvoicesInvoiceUuidSummaryRouteHandler,
  )
  .openapi(getV2DatabasesRoute, getV2DatabasesRouteHandler)
  .openapi(postV2DatabasesRoute, postV2DatabasesRouteHandler)
  .openapi(getV2DatabasesOptionsRoute, getV2DatabasesOptionsRouteHandler)
  .openapi(
    deleteV2DatabasesDatabaseClusterUuidRoute,
    deleteV2DatabasesDatabaseClusterUuidRouteHandler,
  )
  .openapi(getV2DatabasesDatabaseClusterUuidRoute, getV2DatabasesDatabaseClusterUuidRouteHandler)
  .openapi(
    getV2DatabasesDatabaseClusterUuidBackupsRoute,
    getV2DatabasesDatabaseClusterUuidBackupsRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidCaRoute,
    getV2DatabasesDatabaseClusterUuidCaRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidConfigRoute,
    getV2DatabasesDatabaseClusterUuidConfigRouteHandler,
  )
  .openapi(
    patchV2DatabasesDatabaseClusterUuidConfigRoute,
    patchV2DatabasesDatabaseClusterUuidConfigRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidDbsRoute,
    getV2DatabasesDatabaseClusterUuidDbsRouteHandler,
  )
  .openapi(
    postV2DatabasesDatabaseClusterUuidDbsRoute,
    postV2DatabasesDatabaseClusterUuidDbsRouteHandler,
  )
  .openapi(
    deleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameRoute,
    deleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidDbsDatabaseNameRoute,
    getV2DatabasesDatabaseClusterUuidDbsDatabaseNameRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidEvictionPolicyRoute,
    getV2DatabasesDatabaseClusterUuidEvictionPolicyRouteHandler,
  )
  .openapi(
    putV2DatabasesDatabaseClusterUuidEvictionPolicyRoute,
    putV2DatabasesDatabaseClusterUuidEvictionPolicyRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidFirewallRoute,
    getV2DatabasesDatabaseClusterUuidFirewallRouteHandler,
  )
  .openapi(
    putV2DatabasesDatabaseClusterUuidFirewallRoute,
    putV2DatabasesDatabaseClusterUuidFirewallRouteHandler,
  )
  .openapi(
    putV2DatabasesDatabaseClusterUuidMaintenanceRoute,
    putV2DatabasesDatabaseClusterUuidMaintenanceRouteHandler,
  )
  .openapi(
    putV2DatabasesDatabaseClusterUuidMigrateRoute,
    putV2DatabasesDatabaseClusterUuidMigrateRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidOnlineMigrationRoute,
    getV2DatabasesDatabaseClusterUuidOnlineMigrationRouteHandler,
  )
  .openapi(
    putV2DatabasesDatabaseClusterUuidOnlineMigrationRoute,
    putV2DatabasesDatabaseClusterUuidOnlineMigrationRouteHandler,
  )
  .openapi(
    deleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdRoute,
    deleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidPoolsRoute,
    getV2DatabasesDatabaseClusterUuidPoolsRouteHandler,
  )
  .openapi(
    postV2DatabasesDatabaseClusterUuidPoolsRoute,
    postV2DatabasesDatabaseClusterUuidPoolsRouteHandler,
  )
  .openapi(
    deleteV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute,
    deleteV2DatabasesDatabaseClusterUuidPoolsPoolNameRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute,
    getV2DatabasesDatabaseClusterUuidPoolsPoolNameRouteHandler,
  )
  .openapi(
    putV2DatabasesDatabaseClusterUuidPoolsPoolNameRoute,
    putV2DatabasesDatabaseClusterUuidPoolsPoolNameRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidReplicasRoute,
    getV2DatabasesDatabaseClusterUuidReplicasRouteHandler,
  )
  .openapi(
    postV2DatabasesDatabaseClusterUuidReplicasRoute,
    postV2DatabasesDatabaseClusterUuidReplicasRouteHandler,
  )
  .openapi(
    deleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameRoute,
    deleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidReplicasReplicaNameRoute,
    getV2DatabasesDatabaseClusterUuidReplicasReplicaNameRouteHandler,
  )
  .openapi(
    putV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteRoute,
    putV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteRouteHandler,
  )
  .openapi(
    putV2DatabasesDatabaseClusterUuidResizeRoute,
    putV2DatabasesDatabaseClusterUuidResizeRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidSqlModeRoute,
    getV2DatabasesDatabaseClusterUuidSqlModeRouteHandler,
  )
  .openapi(
    putV2DatabasesDatabaseClusterUuidSqlModeRoute,
    putV2DatabasesDatabaseClusterUuidSqlModeRouteHandler,
  )
  .openapi(
    putV2DatabasesDatabaseClusterUuidUpgradeRoute,
    putV2DatabasesDatabaseClusterUuidUpgradeRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidUsersRoute,
    getV2DatabasesDatabaseClusterUuidUsersRouteHandler,
  )
  .openapi(
    postV2DatabasesDatabaseClusterUuidUsersRoute,
    postV2DatabasesDatabaseClusterUuidUsersRouteHandler,
  )
  .openapi(
    deleteV2DatabasesDatabaseClusterUuidUsersUsernameRoute,
    deleteV2DatabasesDatabaseClusterUuidUsersUsernameRouteHandler,
  )
  .openapi(
    getV2DatabasesDatabaseClusterUuidUsersUsernameRoute,
    getV2DatabasesDatabaseClusterUuidUsersUsernameRouteHandler,
  )
  .openapi(
    postV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthRoute,
    postV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthRouteHandler,
  )
  .openapi(getV2DomainsRoute, getV2DomainsRouteHandler)
  .openapi(postV2DomainsRoute, postV2DomainsRouteHandler)
  .openapi(deleteV2DomainsDomainNameRoute, deleteV2DomainsDomainNameRouteHandler)
  .openapi(getV2DomainsDomainNameRoute, getV2DomainsDomainNameRouteHandler)
  .openapi(getV2DomainsDomainNameRecordsRoute, getV2DomainsDomainNameRecordsRouteHandler)
  .openapi(postV2DomainsDomainNameRecordsRoute, postV2DomainsDomainNameRecordsRouteHandler)
  .openapi(
    deleteV2DomainsDomainNameRecordsDomainRecordIdRoute,
    deleteV2DomainsDomainNameRecordsDomainRecordIdRouteHandler,
  )
  .openapi(
    getV2DomainsDomainNameRecordsDomainRecordIdRoute,
    getV2DomainsDomainNameRecordsDomainRecordIdRouteHandler,
  )
  .openapi(
    patchV2DomainsDomainNameRecordsDomainRecordIdRoute,
    patchV2DomainsDomainNameRecordsDomainRecordIdRouteHandler,
  )
  .openapi(
    putV2DomainsDomainNameRecordsDomainRecordIdRoute,
    putV2DomainsDomainNameRecordsDomainRecordIdRouteHandler,
  )
  .openapi(deleteV2DropletsRoute, deleteV2DropletsRouteHandler)
  .openapi(getV2DropletsRoute, getV2DropletsRouteHandler)
  .openapi(postV2DropletsRoute, postV2DropletsRouteHandler)
  .openapi(postV2DropletsActionsRoute, postV2DropletsActionsRouteHandler)
  .openapi(deleteV2DropletsDropletIdRoute, deleteV2DropletsDropletIdRouteHandler)
  .openapi(getV2DropletsDropletIdRoute, getV2DropletsDropletIdRouteHandler)
  .openapi(getV2DropletsDropletIdActionsRoute, getV2DropletsDropletIdActionsRouteHandler)
  .openapi(postV2DropletsDropletIdActionsRoute, postV2DropletsDropletIdActionsRouteHandler)
  .openapi(
    getV2DropletsDropletIdActionsActionIdRoute,
    getV2DropletsDropletIdActionsActionIdRouteHandler,
  )
  .openapi(getV2DropletsDropletIdBackupsRoute, getV2DropletsDropletIdBackupsRouteHandler)
  .openapi(
    getV2DropletsDropletIdDestroyWithAssociatedResourcesRoute,
    getV2DropletsDropletIdDestroyWithAssociatedResourcesRouteHandler,
  )
  .openapi(
    deleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousRoute,
    deleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousRouteHandler,
  )
  .openapi(
    postV2DropletsDropletIdDestroyWithAssociatedResourcesRetryRoute,
    postV2DropletsDropletIdDestroyWithAssociatedResourcesRetryRouteHandler,
  )
  .openapi(
    deleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveRoute,
    deleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveRouteHandler,
  )
  .openapi(
    getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusRoute,
    getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusRouteHandler,
  )
  .openapi(getV2DropletsDropletIdFirewallsRoute, getV2DropletsDropletIdFirewallsRouteHandler)
  .openapi(getV2DropletsDropletIdKernelsRoute, getV2DropletsDropletIdKernelsRouteHandler)
  .openapi(getV2DropletsDropletIdNeighborsRoute, getV2DropletsDropletIdNeighborsRouteHandler)
  .openapi(getV2DropletsDropletIdSnapshotsRoute, getV2DropletsDropletIdSnapshotsRouteHandler)
  .openapi(getV2FirewallsRoute, getV2FirewallsRouteHandler)
  .openapi(postV2FirewallsRoute, postV2FirewallsRouteHandler)
  .openapi(deleteV2FirewallsFirewallIdRoute, deleteV2FirewallsFirewallIdRouteHandler)
  .openapi(getV2FirewallsFirewallIdRoute, getV2FirewallsFirewallIdRouteHandler)
  .openapi(putV2FirewallsFirewallIdRoute, putV2FirewallsFirewallIdRouteHandler)
  .openapi(
    deleteV2FirewallsFirewallIdDropletsRoute,
    deleteV2FirewallsFirewallIdDropletsRouteHandler,
  )
  .openapi(postV2FirewallsFirewallIdDropletsRoute, postV2FirewallsFirewallIdDropletsRouteHandler)
  .openapi(deleteV2FirewallsFirewallIdRulesRoute, deleteV2FirewallsFirewallIdRulesRouteHandler)
  .openapi(postV2FirewallsFirewallIdRulesRoute, postV2FirewallsFirewallIdRulesRouteHandler)
  .openapi(deleteV2FirewallsFirewallIdTagsRoute, deleteV2FirewallsFirewallIdTagsRouteHandler)
  .openapi(postV2FirewallsFirewallIdTagsRoute, postV2FirewallsFirewallIdTagsRouteHandler)
  .openapi(getV2FloatingIpsRoute, getV2FloatingIpsRouteHandler)
  .openapi(postV2FloatingIpsRoute, postV2FloatingIpsRouteHandler)
  .openapi(deleteV2FloatingIpsFloatingIpRoute, deleteV2FloatingIpsFloatingIpRouteHandler)
  .openapi(getV2FloatingIpsFloatingIpRoute, getV2FloatingIpsFloatingIpRouteHandler)
  .openapi(getV2FloatingIpsFloatingIpActionsRoute, getV2FloatingIpsFloatingIpActionsRouteHandler)
  .openapi(postV2FloatingIpsFloatingIpActionsRoute, postV2FloatingIpsFloatingIpActionsRouteHandler)
  .openapi(
    getV2FloatingIpsFloatingIpActionsActionIdRoute,
    getV2FloatingIpsFloatingIpActionsActionIdRouteHandler,
  )
  .openapi(getV2FunctionsNamespacesRoute, getV2FunctionsNamespacesRouteHandler)
  .openapi(postV2FunctionsNamespacesRoute, postV2FunctionsNamespacesRouteHandler)
  .openapi(
    deleteV2FunctionsNamespacesNamespaceIdRoute,
    deleteV2FunctionsNamespacesNamespaceIdRouteHandler,
  )
  .openapi(
    getV2FunctionsNamespacesNamespaceIdRoute,
    getV2FunctionsNamespacesNamespaceIdRouteHandler,
  )
  .openapi(
    getV2FunctionsNamespacesNamespaceIdTriggersRoute,
    getV2FunctionsNamespacesNamespaceIdTriggersRouteHandler,
  )
  .openapi(
    postV2FunctionsNamespacesNamespaceIdTriggersRoute,
    postV2FunctionsNamespacesNamespaceIdTriggersRouteHandler,
  )
  .openapi(
    deleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute,
    deleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRouteHandler,
  )
  .openapi(
    getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute,
    getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRouteHandler,
  )
  .openapi(
    putV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRoute,
    putV2FunctionsNamespacesNamespaceIdTriggersTriggerNameRouteHandler,
  )
  .openapi(getV2ImagesRoute, getV2ImagesRouteHandler)
  .openapi(postV2ImagesRoute, postV2ImagesRouteHandler)
  .openapi(deleteV2ImagesImageIdRoute, deleteV2ImagesImageIdRouteHandler)
  .openapi(getV2ImagesImageIdRoute, getV2ImagesImageIdRouteHandler)
  .openapi(putV2ImagesImageIdRoute, putV2ImagesImageIdRouteHandler)
  .openapi(getV2ImagesImageIdActionsRoute, getV2ImagesImageIdActionsRouteHandler)
  .openapi(postV2ImagesImageIdActionsRoute, postV2ImagesImageIdActionsRouteHandler)
  .openapi(getV2ImagesImageIdActionsActionIdRoute, getV2ImagesImageIdActionsActionIdRouteHandler)
  .openapi(getV2KubernetesClustersRoute, getV2KubernetesClustersRouteHandler)
  .openapi(postV2KubernetesClustersRoute, postV2KubernetesClustersRouteHandler)
  .openapi(
    deleteV2KubernetesClustersClusterIdRoute,
    deleteV2KubernetesClustersClusterIdRouteHandler,
  )
  .openapi(getV2KubernetesClustersClusterIdRoute, getV2KubernetesClustersClusterIdRouteHandler)
  .openapi(putV2KubernetesClustersClusterIdRoute, putV2KubernetesClustersClusterIdRouteHandler)
  .openapi(
    getV2KubernetesClustersClusterIdClusterlintRoute,
    getV2KubernetesClustersClusterIdClusterlintRouteHandler,
  )
  .openapi(
    postV2KubernetesClustersClusterIdClusterlintRoute,
    postV2KubernetesClustersClusterIdClusterlintRouteHandler,
  )
  .openapi(
    getV2KubernetesClustersClusterIdCredentialsRoute,
    getV2KubernetesClustersClusterIdCredentialsRouteHandler,
  )
  .openapi(
    getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesRoute,
    getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesRouteHandler,
  )
  .openapi(
    deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousRoute,
    deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousRouteHandler,
  )
  .openapi(
    deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveRoute,
    deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveRouteHandler,
  )
  .openapi(
    getV2KubernetesClustersClusterIdKubeconfigRoute,
    getV2KubernetesClustersClusterIdKubeconfigRouteHandler,
  )
  .openapi(
    getV2KubernetesClustersClusterIdNodePoolsRoute,
    getV2KubernetesClustersClusterIdNodePoolsRouteHandler,
  )
  .openapi(
    postV2KubernetesClustersClusterIdNodePoolsRoute,
    postV2KubernetesClustersClusterIdNodePoolsRouteHandler,
  )
  .openapi(
    deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute,
    deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdRouteHandler,
  )
  .openapi(
    getV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute,
    getV2KubernetesClustersClusterIdNodePoolsNodePoolIdRouteHandler,
  )
  .openapi(
    putV2KubernetesClustersClusterIdNodePoolsNodePoolIdRoute,
    putV2KubernetesClustersClusterIdNodePoolsNodePoolIdRouteHandler,
  )
  .openapi(
    deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdRoute,
    deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdRouteHandler,
  )
  .openapi(
    postV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleRoute,
    postV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleRouteHandler,
  )
  .openapi(
    postV2KubernetesClustersClusterIdUpgradeRoute,
    postV2KubernetesClustersClusterIdUpgradeRouteHandler,
  )
  .openapi(
    getV2KubernetesClustersClusterIdUpgradesRoute,
    getV2KubernetesClustersClusterIdUpgradesRouteHandler,
  )
  .openapi(
    getV2KubernetesClustersClusterIdUserRoute,
    getV2KubernetesClustersClusterIdUserRouteHandler,
  )
  .openapi(getV2KubernetesOptionsRoute, getV2KubernetesOptionsRouteHandler)
  .openapi(deleteV2KubernetesRegistryRoute, deleteV2KubernetesRegistryRouteHandler)
  .openapi(postV2KubernetesRegistryRoute, postV2KubernetesRegistryRouteHandler)
  .openapi(getV2LoadBalancersRoute, getV2LoadBalancersRouteHandler)
  .openapi(postV2LoadBalancersRoute, postV2LoadBalancersRouteHandler)
  .openapi(deleteV2LoadBalancersLbIdRoute, deleteV2LoadBalancersLbIdRouteHandler)
  .openapi(getV2LoadBalancersLbIdRoute, getV2LoadBalancersLbIdRouteHandler)
  .openapi(putV2LoadBalancersLbIdRoute, putV2LoadBalancersLbIdRouteHandler)
  .openapi(deleteV2LoadBalancersLbIdDropletsRoute, deleteV2LoadBalancersLbIdDropletsRouteHandler)
  .openapi(postV2LoadBalancersLbIdDropletsRoute, postV2LoadBalancersLbIdDropletsRouteHandler)
  .openapi(
    deleteV2LoadBalancersLbIdForwardingRulesRoute,
    deleteV2LoadBalancersLbIdForwardingRulesRouteHandler,
  )
  .openapi(
    postV2LoadBalancersLbIdForwardingRulesRoute,
    postV2LoadBalancersLbIdForwardingRulesRouteHandler,
  )
  .openapi(getV2MonitoringAlertsRoute, getV2MonitoringAlertsRouteHandler)
  .openapi(postV2MonitoringAlertsRoute, postV2MonitoringAlertsRouteHandler)
  .openapi(deleteV2MonitoringAlertsAlertUuidRoute, deleteV2MonitoringAlertsAlertUuidRouteHandler)
  .openapi(getV2MonitoringAlertsAlertUuidRoute, getV2MonitoringAlertsAlertUuidRouteHandler)
  .openapi(putV2MonitoringAlertsAlertUuidRoute, putV2MonitoringAlertsAlertUuidRouteHandler)
  .openapi(
    getV2MonitoringMetricsDropletBandwidthRoute,
    getV2MonitoringMetricsDropletBandwidthRouteHandler,
  )
  .openapi(getV2MonitoringMetricsDropletCpuRoute, getV2MonitoringMetricsDropletCpuRouteHandler)
  .openapi(
    getV2MonitoringMetricsDropletFilesystemFreeRoute,
    getV2MonitoringMetricsDropletFilesystemFreeRouteHandler,
  )
  .openapi(
    getV2MonitoringMetricsDropletFilesystemSizeRoute,
    getV2MonitoringMetricsDropletFilesystemSizeRouteHandler,
  )
  .openapi(getV2MonitoringMetricsDropletLoad1Route, getV2MonitoringMetricsDropletLoad1RouteHandler)
  .openapi(
    getV2MonitoringMetricsDropletLoad15Route,
    getV2MonitoringMetricsDropletLoad15RouteHandler,
  )
  .openapi(getV2MonitoringMetricsDropletLoad5Route, getV2MonitoringMetricsDropletLoad5RouteHandler)
  .openapi(
    getV2MonitoringMetricsDropletMemoryAvailableRoute,
    getV2MonitoringMetricsDropletMemoryAvailableRouteHandler,
  )
  .openapi(
    getV2MonitoringMetricsDropletMemoryCachedRoute,
    getV2MonitoringMetricsDropletMemoryCachedRouteHandler,
  )
  .openapi(
    getV2MonitoringMetricsDropletMemoryFreeRoute,
    getV2MonitoringMetricsDropletMemoryFreeRouteHandler,
  )
  .openapi(
    getV2MonitoringMetricsDropletMemoryTotalRoute,
    getV2MonitoringMetricsDropletMemoryTotalRouteHandler,
  )
  .openapi(getV2ProjectsRoute, getV2ProjectsRouteHandler)
  .openapi(postV2ProjectsRoute, postV2ProjectsRouteHandler)
  .openapi(getV2ProjectsDefaultRoute, getV2ProjectsDefaultRouteHandler)
  .openapi(patchV2ProjectsDefaultRoute, patchV2ProjectsDefaultRouteHandler)
  .openapi(putV2ProjectsDefaultRoute, putV2ProjectsDefaultRouteHandler)
  .openapi(getV2ProjectsDefaultResourcesRoute, getV2ProjectsDefaultResourcesRouteHandler)
  .openapi(postV2ProjectsDefaultResourcesRoute, postV2ProjectsDefaultResourcesRouteHandler)
  .openapi(deleteV2ProjectsProjectIdRoute, deleteV2ProjectsProjectIdRouteHandler)
  .openapi(getV2ProjectsProjectIdRoute, getV2ProjectsProjectIdRouteHandler)
  .openapi(patchV2ProjectsProjectIdRoute, patchV2ProjectsProjectIdRouteHandler)
  .openapi(putV2ProjectsProjectIdRoute, putV2ProjectsProjectIdRouteHandler)
  .openapi(getV2ProjectsProjectIdResourcesRoute, getV2ProjectsProjectIdResourcesRouteHandler)
  .openapi(postV2ProjectsProjectIdResourcesRoute, postV2ProjectsProjectIdResourcesRouteHandler)
  .openapi(getV2RegionsRoute, getV2RegionsRouteHandler)
  .openapi(deleteV2RegistryRoute, deleteV2RegistryRouteHandler)
  .openapi(getV2RegistryRoute, getV2RegistryRouteHandler)
  .openapi(postV2RegistryRoute, postV2RegistryRouteHandler)
  .openapi(getV2RegistryDockerCredentialsRoute, getV2RegistryDockerCredentialsRouteHandler)
  .openapi(getV2RegistryOptionsRoute, getV2RegistryOptionsRouteHandler)
  .openapi(getV2RegistrySubscriptionRoute, getV2RegistrySubscriptionRouteHandler)
  .openapi(postV2RegistrySubscriptionRoute, postV2RegistrySubscriptionRouteHandler)
  .openapi(postV2RegistryValidateNameRoute, postV2RegistryValidateNameRouteHandler)
  .openapi(
    getV2RegistryRegistryNameGarbageCollectionRoute,
    getV2RegistryRegistryNameGarbageCollectionRouteHandler,
  )
  .openapi(
    postV2RegistryRegistryNameGarbageCollectionRoute,
    postV2RegistryRegistryNameGarbageCollectionRouteHandler,
  )
  .openapi(
    putV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidRoute,
    putV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidRouteHandler,
  )
  .openapi(
    getV2RegistryRegistryNameGarbageCollectionsRoute,
    getV2RegistryRegistryNameGarbageCollectionsRouteHandler,
  )
  .openapi(
    getV2RegistryRegistryNameRepositoriesRoute,
    getV2RegistryRegistryNameRepositoriesRouteHandler,
  )
  .openapi(
    getV2RegistryRegistryNameRepositoriesV2Route,
    getV2RegistryRegistryNameRepositoriesV2RouteHandler,
  )
  .openapi(
    getV2RegistryRegistryNameRepositoryNameDigestsRoute,
    getV2RegistryRegistryNameRepositoryNameDigestsRouteHandler,
  )
  .openapi(
    deleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestRoute,
    deleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestRouteHandler,
  )
  .openapi(
    getV2RegistryRegistryNameRepositoryNameTagsRoute,
    getV2RegistryRegistryNameRepositoryNameTagsRouteHandler,
  )
  .openapi(
    deleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagRoute,
    deleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagRouteHandler,
  )
  .openapi(getV2ReportsDropletNeighborsIdsRoute, getV2ReportsDropletNeighborsIdsRouteHandler)
  .openapi(getV2ReservedIpsRoute, getV2ReservedIpsRouteHandler)
  .openapi(postV2ReservedIpsRoute, postV2ReservedIpsRouteHandler)
  .openapi(deleteV2ReservedIpsReservedIpRoute, deleteV2ReservedIpsReservedIpRouteHandler)
  .openapi(getV2ReservedIpsReservedIpRoute, getV2ReservedIpsReservedIpRouteHandler)
  .openapi(getV2ReservedIpsReservedIpActionsRoute, getV2ReservedIpsReservedIpActionsRouteHandler)
  .openapi(postV2ReservedIpsReservedIpActionsRoute, postV2ReservedIpsReservedIpActionsRouteHandler)
  .openapi(
    getV2ReservedIpsReservedIpActionsActionIdRoute,
    getV2ReservedIpsReservedIpActionsActionIdRouteHandler,
  )
  .openapi(getV2SizesRoute, getV2SizesRouteHandler)
  .openapi(getV2SnapshotsRoute, getV2SnapshotsRouteHandler)
  .openapi(deleteV2SnapshotsSnapshotIdRoute, deleteV2SnapshotsSnapshotIdRouteHandler)
  .openapi(getV2SnapshotsSnapshotIdRoute, getV2SnapshotsSnapshotIdRouteHandler)
  .openapi(getV2TagsRoute, getV2TagsRouteHandler)
  .openapi(postV2TagsRoute, postV2TagsRouteHandler)
  .openapi(deleteV2TagsTagIdRoute, deleteV2TagsTagIdRouteHandler)
  .openapi(getV2TagsTagIdRoute, getV2TagsTagIdRouteHandler)
  .openapi(deleteV2TagsTagIdResourcesRoute, deleteV2TagsTagIdResourcesRouteHandler)
  .openapi(postV2TagsTagIdResourcesRoute, postV2TagsTagIdResourcesRouteHandler)
  .openapi(getV2UptimeChecksRoute, getV2UptimeChecksRouteHandler)
  .openapi(postV2UptimeChecksRoute, postV2UptimeChecksRouteHandler)
  .openapi(deleteV2UptimeChecksCheckIdRoute, deleteV2UptimeChecksCheckIdRouteHandler)
  .openapi(getV2UptimeChecksCheckIdRoute, getV2UptimeChecksCheckIdRouteHandler)
  .openapi(putV2UptimeChecksCheckIdRoute, putV2UptimeChecksCheckIdRouteHandler)
  .openapi(getV2UptimeChecksCheckIdAlertsRoute, getV2UptimeChecksCheckIdAlertsRouteHandler)
  .openapi(postV2UptimeChecksCheckIdAlertsRoute, postV2UptimeChecksCheckIdAlertsRouteHandler)
  .openapi(
    deleteV2UptimeChecksCheckIdAlertsAlertIdRoute,
    deleteV2UptimeChecksCheckIdAlertsAlertIdRouteHandler,
  )
  .openapi(
    getV2UptimeChecksCheckIdAlertsAlertIdRoute,
    getV2UptimeChecksCheckIdAlertsAlertIdRouteHandler,
  )
  .openapi(
    putV2UptimeChecksCheckIdAlertsAlertIdRoute,
    putV2UptimeChecksCheckIdAlertsAlertIdRouteHandler,
  )
  .openapi(getV2UptimeChecksCheckIdStateRoute, getV2UptimeChecksCheckIdStateRouteHandler)
  .openapi(deleteV2VolumesRoute, deleteV2VolumesRouteHandler)
  .openapi(getV2VolumesRoute, getV2VolumesRouteHandler)
  .openapi(postV2VolumesRoute, postV2VolumesRouteHandler)
  .openapi(postV2VolumesActionsRoute, postV2VolumesActionsRouteHandler)
  .openapi(deleteV2VolumesSnapshotsSnapshotIdRoute, deleteV2VolumesSnapshotsSnapshotIdRouteHandler)
  .openapi(getV2VolumesSnapshotsSnapshotIdRoute, getV2VolumesSnapshotsSnapshotIdRouteHandler)
  .openapi(deleteV2VolumesVolumeIdRoute, deleteV2VolumesVolumeIdRouteHandler)
  .openapi(getV2VolumesVolumeIdRoute, getV2VolumesVolumeIdRouteHandler)
  .openapi(getV2VolumesVolumeIdActionsRoute, getV2VolumesVolumeIdActionsRouteHandler)
  .openapi(postV2VolumesVolumeIdActionsRoute, postV2VolumesVolumeIdActionsRouteHandler)
  .openapi(
    getV2VolumesVolumeIdActionsActionIdRoute,
    getV2VolumesVolumeIdActionsActionIdRouteHandler,
  )
  .openapi(getV2VolumesVolumeIdSnapshotsRoute, getV2VolumesVolumeIdSnapshotsRouteHandler)
  .openapi(postV2VolumesVolumeIdSnapshotsRoute, postV2VolumesVolumeIdSnapshotsRouteHandler)
  .openapi(getV2VpcsRoute, getV2VpcsRouteHandler)
  .openapi(postV2VpcsRoute, postV2VpcsRouteHandler)
  .openapi(deleteV2VpcsVpcIdRoute, deleteV2VpcsVpcIdRouteHandler)
  .openapi(getV2VpcsVpcIdRoute, getV2VpcsVpcIdRouteHandler)
  .openapi(patchV2VpcsVpcIdRoute, patchV2VpcsVpcIdRouteHandler)
  .openapi(putV2VpcsVpcIdRoute, putV2VpcsVpcIdRouteHandler)
  .openapi(getV2VpcsVpcIdMembersRoute, getV2VpcsVpcIdMembersRouteHandler)

export default app
