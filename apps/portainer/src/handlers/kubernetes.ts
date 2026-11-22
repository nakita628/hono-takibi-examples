import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute,
  deleteKubernetesIdNamespacesNamespaceDeploymentsNameRoute,
  deleteKubernetesIdNamespacesNamespacePodsNameRoute,
  deleteKubernetesIdNamespacesNamespaceSecretsSecretRoute,
  deleteKubernetesIdNamespacesRoute,
  getKubernetesConfigRoute,
  getKubernetesIdApplicationsCountRoute,
  getKubernetesIdApplicationsRoute,
  getKubernetesIdClusterrolebindingsRoute,
  getKubernetesIdClusterrolesRoute,
  getKubernetesIdConfigmapsCountRoute,
  getKubernetesIdConfigmapsRoute,
  getKubernetesIdCronJobsRoute,
  getKubernetesIdDashboardRoute,
  getKubernetesIdDeploymentsRoute,
  getKubernetesIdDescribeRoute,
  getKubernetesIdEventsRoute,
  getKubernetesIdIngressclassesRoute,
  getKubernetesIdIngresscontrollersRoute,
  getKubernetesIdIngressesCountRoute,
  getKubernetesIdIngressesRoute,
  getKubernetesIdJobsRoute,
  getKubernetesIdMaxResourceLimitsRoute,
  getKubernetesIdMetricsApplicationsResourcesRoute,
  getKubernetesIdMetricsNodesNameRoute,
  getKubernetesIdMetricsNodesRoute,
  getKubernetesIdMetricsPodsNamespaceNameRoute,
  getKubernetesIdMetricsPodsNamespaceNamespaceRoute,
  getKubernetesIdNamespacesCountRoute,
  getKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute,
  getKubernetesIdNamespacesNamespaceDeploymentsNameRoute,
  getKubernetesIdNamespacesNamespaceDeploymentsRoute,
  getKubernetesIdNamespacesNamespaceEventsRoute,
  getKubernetesIdNamespacesNamespaceIngresscontrollersRoute,
  getKubernetesIdNamespacesNamespaceIngressesIngressRoute,
  getKubernetesIdNamespacesNamespaceIngressesRoute,
  getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameRoute,
  getKubernetesIdNamespacesNamespacePersistentVolumeClaimsRoute,
  getKubernetesIdNamespacesNamespacePodsNameLogRoute,
  getKubernetesIdNamespacesNamespacePodsRoute,
  getKubernetesIdNamespacesNamespaceReplicasetsRoute,
  getKubernetesIdNamespacesNamespaceResourceQuotasRoute,
  getKubernetesIdNamespacesNamespaceRoute,
  getKubernetesIdNamespacesNamespaceSecretsSecretRoute,
  getKubernetesIdNamespacesNamespaceServiceAccountsNameRoute,
  getKubernetesIdNamespacesNamespaceServicesRoute,
  getKubernetesIdNamespacesNamespaceVolumesRoute,
  getKubernetesIdNamespacesRoute,
  getKubernetesIdNodesLimitsRoute,
  getKubernetesIdNodesRoute,
  getKubernetesIdPersistentVolumeClaimsRoute,
  getKubernetesIdPersistentVolumesNameRoute,
  getKubernetesIdPersistentVolumesRoute,
  getKubernetesIdPodsRoute,
  getKubernetesIdRbacEnabledRoute,
  getKubernetesIdRolebindingsRoute,
  getKubernetesIdRolesRoute,
  getKubernetesIdSecretsCountRoute,
  getKubernetesIdSecretsRoute,
  getKubernetesIdServiceaccountsRoute,
  getKubernetesIdServicesCountRoute,
  getKubernetesIdServicesRoute,
  getKubernetesIdStorageClassesNameRoute,
  getKubernetesIdStorageClassesRoute,
  getKubernetesIdVersionRoute,
  getKubernetesIdVolumesCountRoute,
  getKubernetesIdVolumesNamespaceVolumeRoute,
  getKubernetesIdVolumesRoute,
  patchKubernetesIdNamespacesNamespaceDeploymentsNameRoute,
  postKubernetesIdClusterRoleBindingsDeleteRoute,
  postKubernetesIdClusterRolesDeleteRoute,
  postKubernetesIdCronJobsDeleteRoute,
  postKubernetesIdIngressesDeleteRoute,
  postKubernetesIdJobsDeleteRoute,
  postKubernetesIdManifestsDryRunRoute,
  postKubernetesIdNamespacesNamespaceConfigmapsRoute,
  postKubernetesIdNamespacesNamespaceDeploymentsNameRollbackRoute,
  postKubernetesIdNamespacesNamespaceDeploymentsRoute,
  postKubernetesIdNamespacesNamespaceIngressesRoute,
  postKubernetesIdNamespacesNamespacePersistentVolumeClaimsRoute,
  postKubernetesIdNamespacesNamespacePodsNameRestartRoute,
  postKubernetesIdNamespacesNamespaceSecretsRoute,
  postKubernetesIdNamespacesNamespaceServicesRoute,
  postKubernetesIdNamespacesRoute,
  postKubernetesIdNodesNameDrainRoute,
  postKubernetesIdPersistentVolumeClaimsDeleteRoute,
  postKubernetesIdPersistentVolumesDeleteRoute,
  postKubernetesIdRoleBindingsDeleteRoute,
  postKubernetesIdRolesDeleteRoute,
  postKubernetesIdServiceAccountsDeleteRoute,
  postKubernetesIdServicesDeleteRoute,
  postKubernetesIdStorageClassesDeleteRoute,
  putKubernetesIdIngresscontrollersRoute,
  putKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute,
  putKubernetesIdNamespacesNamespaceDeploymentsNameRoute,
  putKubernetesIdNamespacesNamespaceDeploymentsNameScaleRoute,
  putKubernetesIdNamespacesNamespaceIngresscontrollersRoute,
  putKubernetesIdNamespacesNamespaceIngressesRoute,
  putKubernetesIdNamespacesNamespaceRoute,
  putKubernetesIdNamespacesNamespaceSecretsSecretRoute,
  putKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsRoute,
  putKubernetesIdNamespacesNamespaceServicesRoute,
  putKubernetesIdNamespacesNamespaceSystemRoute,
  putKubernetesIdNamespacesRoute,
  putKubernetesIdPersistentVolumeClaimsResizeRoute,
  putKubernetesIdPersistentVolumesReclaimPolicyRoute,
  putKubernetesIdStorageClassesNameDefaultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kubernetesHandler = app
  .openapi(getKubernetesIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdApplicationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdClusterRoleBindingsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdClusterRolesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdClusterrolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdClusterrolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdConfigmapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdConfigmapsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdCronJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdCronJobsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdDescribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdIngressclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdIngresscontrollersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdIngresscontrollersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdIngressesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdIngressesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdJobsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdManifestsDryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdMaxResourceLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdMetricsApplicationsResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdMetricsNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdMetricsNodesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdMetricsPodsNamespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdMetricsPodsNamespaceNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKubernetesIdNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdNamespacesNamespaceConfigmapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdNamespacesNamespaceDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKubernetesIdNamespacesNamespaceDeploymentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceDeploymentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchKubernetesIdNamespacesNamespaceDeploymentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesNamespaceDeploymentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdNamespacesNamespaceDeploymentsNameRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesNamespaceDeploymentsNameScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceIngresscontrollersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesNamespaceIngresscontrollersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdNamespacesNamespaceIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesNamespaceIngressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceIngressesIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespacePersistentVolumeClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdNamespacesNamespacePersistentVolumeClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespacePodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKubernetesIdNamespacesNamespacePodsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespacePodsNameLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdNamespacesNamespacePodsNameRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceReplicasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceResourceQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdNamespacesNamespaceSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKubernetesIdNamespacesNamespaceSecretsSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceSecretsSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesNamespaceSecretsSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceServiceAccountsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdNamespacesNamespaceServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesNamespaceServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdNamespacesNamespaceSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesNamespaceVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNamespacesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdNodesNameDrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdNodesLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdPersistentVolumeClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdPersistentVolumeClaimsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdPersistentVolumeClaimsResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdPersistentVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdPersistentVolumesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdPersistentVolumesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdPersistentVolumesReclaimPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdPodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdRbacEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdRoleBindingsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdRolebindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdRolesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdSecretsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdServiceAccountsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdServiceaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdServicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdServicesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdStorageClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdStorageClassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKubernetesIdStorageClassesNameDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKubernetesIdStorageClassesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdVolumesNamespaceVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesIdVolumesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKubernetesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
