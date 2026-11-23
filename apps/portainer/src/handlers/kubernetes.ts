import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getKubernetesIdApplicationsRouteHandler: RouteHandler<
  typeof getKubernetesIdApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdApplicationsCountRouteHandler: RouteHandler<
  typeof getKubernetesIdApplicationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdClusterRoleBindingsDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdClusterRoleBindingsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdClusterRolesDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdClusterRolesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdClusterrolebindingsRouteHandler: RouteHandler<
  typeof getKubernetesIdClusterrolebindingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdClusterrolesRouteHandler: RouteHandler<
  typeof getKubernetesIdClusterrolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdConfigmapsRouteHandler: RouteHandler<
  typeof getKubernetesIdConfigmapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdConfigmapsCountRouteHandler: RouteHandler<
  typeof getKubernetesIdConfigmapsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdCronJobsRouteHandler: RouteHandler<
  typeof getKubernetesIdCronJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdCronJobsDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdCronJobsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdDashboardRouteHandler: RouteHandler<
  typeof getKubernetesIdDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdDeploymentsRouteHandler: RouteHandler<
  typeof getKubernetesIdDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdDescribeRouteHandler: RouteHandler<
  typeof getKubernetesIdDescribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdEventsRouteHandler: RouteHandler<
  typeof getKubernetesIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdIngressclassesRouteHandler: RouteHandler<
  typeof getKubernetesIdIngressclassesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdIngresscontrollersRouteHandler: RouteHandler<
  typeof getKubernetesIdIngresscontrollersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdIngresscontrollersRouteHandler: RouteHandler<
  typeof putKubernetesIdIngresscontrollersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdIngressesRouteHandler: RouteHandler<
  typeof getKubernetesIdIngressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdIngressesCountRouteHandler: RouteHandler<
  typeof getKubernetesIdIngressesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdIngressesDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdIngressesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdJobsRouteHandler: RouteHandler<
  typeof getKubernetesIdJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdJobsDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdJobsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdManifestsDryRunRouteHandler: RouteHandler<
  typeof postKubernetesIdManifestsDryRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdMaxResourceLimitsRouteHandler: RouteHandler<
  typeof getKubernetesIdMaxResourceLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdMetricsApplicationsResourcesRouteHandler: RouteHandler<
  typeof getKubernetesIdMetricsApplicationsResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdMetricsNodesRouteHandler: RouteHandler<
  typeof getKubernetesIdMetricsNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdMetricsNodesNameRouteHandler: RouteHandler<
  typeof getKubernetesIdMetricsNodesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdMetricsPodsNamespaceNameRouteHandler: RouteHandler<
  typeof getKubernetesIdMetricsPodsNamespaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdMetricsPodsNamespaceNamespaceRouteHandler: RouteHandler<
  typeof getKubernetesIdMetricsPodsNamespaceNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKubernetesIdNamespacesRouteHandler: RouteHandler<
  typeof deleteKubernetesIdNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdNamespacesRouteHandler: RouteHandler<
  typeof postKubernetesIdNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesNamespaceRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdNamespacesNamespaceConfigmapsRouteHandler: RouteHandler<
  typeof postKubernetesIdNamespacesNamespaceConfigmapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapRouteHandler: RouteHandler<
  typeof deleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceConfigmapsConfigmapRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesNamespaceConfigmapsConfigmapRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceDeploymentsRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdNamespacesNamespaceDeploymentsRouteHandler: RouteHandler<
  typeof postKubernetesIdNamespacesNamespaceDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler: RouteHandler<
  typeof deleteKubernetesIdNamespacesNamespaceDeploymentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceDeploymentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler: RouteHandler<
  typeof patchKubernetesIdNamespacesNamespaceDeploymentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesNamespaceDeploymentsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdNamespacesNamespaceDeploymentsNameRollbackRouteHandler: RouteHandler<
  typeof postKubernetesIdNamespacesNamespaceDeploymentsNameRollbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesNamespaceDeploymentsNameScaleRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesNamespaceDeploymentsNameScaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceEventsRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceIngresscontrollersRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceIngresscontrollersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesNamespaceIngresscontrollersRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesNamespaceIngresscontrollersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceIngressesRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceIngressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdNamespacesNamespaceIngressesRouteHandler: RouteHandler<
  typeof postKubernetesIdNamespacesNamespaceIngressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesNamespaceIngressesRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesNamespaceIngressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceIngressesIngressRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceIngressesIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespacePersistentVolumeClaimsRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespacePersistentVolumeClaimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdNamespacesNamespacePersistentVolumeClaimsRouteHandler: RouteHandler<
  typeof postKubernetesIdNamespacesNamespacePersistentVolumeClaimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespacePodsRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespacePodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKubernetesIdNamespacesNamespacePodsNameRouteHandler: RouteHandler<
  typeof deleteKubernetesIdNamespacesNamespacePodsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespacePodsNameLogRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespacePodsNameLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdNamespacesNamespacePodsNameRestartRouteHandler: RouteHandler<
  typeof postKubernetesIdNamespacesNamespacePodsNameRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceReplicasetsRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceReplicasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceResourceQuotasRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceResourceQuotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdNamespacesNamespaceSecretsRouteHandler: RouteHandler<
  typeof postKubernetesIdNamespacesNamespaceSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKubernetesIdNamespacesNamespaceSecretsSecretRouteHandler: RouteHandler<
  typeof deleteKubernetesIdNamespacesNamespaceSecretsSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceSecretsSecretRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceSecretsSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesNamespaceSecretsSecretRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesNamespaceSecretsSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceServiceAccountsNameRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceServiceAccountsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceServicesRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdNamespacesNamespaceServicesRouteHandler: RouteHandler<
  typeof postKubernetesIdNamespacesNamespaceServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesNamespaceServicesRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesNamespaceServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdNamespacesNamespaceSystemRouteHandler: RouteHandler<
  typeof putKubernetesIdNamespacesNamespaceSystemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesNamespaceVolumesRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesNamespaceVolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNamespacesCountRouteHandler: RouteHandler<
  typeof getKubernetesIdNamespacesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNodesRouteHandler: RouteHandler<
  typeof getKubernetesIdNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdNodesNameDrainRouteHandler: RouteHandler<
  typeof postKubernetesIdNodesNameDrainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdNodesLimitsRouteHandler: RouteHandler<
  typeof getKubernetesIdNodesLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdPersistentVolumeClaimsRouteHandler: RouteHandler<
  typeof getKubernetesIdPersistentVolumeClaimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdPersistentVolumeClaimsDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdPersistentVolumeClaimsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdPersistentVolumeClaimsResizeRouteHandler: RouteHandler<
  typeof putKubernetesIdPersistentVolumeClaimsResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdPersistentVolumesRouteHandler: RouteHandler<
  typeof getKubernetesIdPersistentVolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdPersistentVolumesNameRouteHandler: RouteHandler<
  typeof getKubernetesIdPersistentVolumesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdPersistentVolumesDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdPersistentVolumesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdPersistentVolumesReclaimPolicyRouteHandler: RouteHandler<
  typeof putKubernetesIdPersistentVolumesReclaimPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdPodsRouteHandler: RouteHandler<
  typeof getKubernetesIdPodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdRbacEnabledRouteHandler: RouteHandler<
  typeof getKubernetesIdRbacEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdRoleBindingsDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdRoleBindingsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdRolebindingsRouteHandler: RouteHandler<
  typeof getKubernetesIdRolebindingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdRolesRouteHandler: RouteHandler<
  typeof getKubernetesIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdRolesDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdRolesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdSecretsRouteHandler: RouteHandler<
  typeof getKubernetesIdSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdSecretsCountRouteHandler: RouteHandler<
  typeof getKubernetesIdSecretsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdServiceAccountsDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdServiceAccountsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdServiceaccountsRouteHandler: RouteHandler<
  typeof getKubernetesIdServiceaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdServicesRouteHandler: RouteHandler<
  typeof getKubernetesIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdServicesCountRouteHandler: RouteHandler<
  typeof getKubernetesIdServicesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdServicesDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdServicesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdStorageClassesRouteHandler: RouteHandler<
  typeof getKubernetesIdStorageClassesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdStorageClassesNameRouteHandler: RouteHandler<
  typeof getKubernetesIdStorageClassesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKubernetesIdStorageClassesNameDefaultRouteHandler: RouteHandler<
  typeof putKubernetesIdStorageClassesNameDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesIdStorageClassesDeleteRouteHandler: RouteHandler<
  typeof postKubernetesIdStorageClassesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdVersionRouteHandler: RouteHandler<
  typeof getKubernetesIdVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdVolumesRouteHandler: RouteHandler<
  typeof getKubernetesIdVolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdVolumesNamespaceVolumeRouteHandler: RouteHandler<
  typeof getKubernetesIdVolumesNamespaceVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesIdVolumesCountRouteHandler: RouteHandler<
  typeof getKubernetesIdVolumesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesConfigRouteHandler: RouteHandler<
  typeof getKubernetesConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}
