import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomTemplatesIdRoute,
  deleteEdgeGroupsIdRoute,
  deleteEdgeJobsIdRoute,
  deleteEdgeJobsIdTasksTaskIDLogsRoute,
  deleteEdgeStacksIdRoute,
  deleteEndpointGroupsIdEndpointsEndpointIdRoute,
  deleteEndpointGroupsIdRoute,
  deleteEndpointsIdKubernetesHelmReleaseRoute,
  deleteEndpointsIdRoute,
  deleteEndpointsRoute,
  deleteGitopsSourcesIdRoute,
  deleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute,
  deleteKubernetesIdNamespacesNamespaceDeploymentsNameRoute,
  deleteKubernetesIdNamespacesNamespacePodsNameRoute,
  deleteKubernetesIdNamespacesNamespaceSecretsSecretRoute,
  deleteKubernetesIdNamespacesRoute,
  deleteRegistriesIdRoute,
  deleteResourceControlsIdRoute,
  deleteStacksIdRoute,
  deleteStacksNameNameRoute,
  deleteTagsIdRoute,
  deleteTeamMembershipsIdRoute,
  deleteTeamsIdRoute,
  deleteUsersIdHelmRepositoriesRepositoryIDRoute,
  deleteUsersIdRoute,
  deleteUsersIdTokensKeyIDRoute,
  deleteWebhooksIdRoute,
  getCustomTemplatesIdFileRoute,
  getCustomTemplatesIdRoute,
  getCustomTemplatesRoute,
  getDockerEnvironmentIdContainersContainerIdGpusRoute,
  getDockerEnvironmentIdDashboardRoute,
  getDockerEnvironmentIdImagesRoute,
  getEdgeGroupsIdRoute,
  getEdgeGroupsRoute,
  getEdgeJobsIdFileRoute,
  getEdgeJobsIdRoute,
  getEdgeJobsIdTasksRoute,
  getEdgeJobsIdTasksTaskIDLogsRoute,
  getEdgeJobsRoute,
  getEdgeStacksIdFileRoute,
  getEdgeStacksIdRoute,
  getEdgeStacksRoute,
  getEndpointGroupsIdRoute,
  getEndpointGroupsRoute,
  getEndpointsIdDockerhubRegistryIdRoute,
  getEndpointsIdEdgeStacksStackIdRoute,
  getEndpointsIdEdgeStatusRoute,
  getEndpointsIdKubernetesHelmReleaseHistoryRoute,
  getEndpointsIdKubernetesHelmReleaseRoute,
  getEndpointsIdKubernetesHelmRoute,
  getEndpointsIdRegistriesRoute,
  getEndpointsIdRoute,
  getEndpointsRoute,
  getEndpointsSummaryRoute,
  getGitopsSourcesIdRoute,
  getGitopsSourcesIdWorkflowsRoute,
  getGitopsSourcesRoute,
  getGitopsSourcesSummaryRoute,
  getGitopsWorkflowsIdRoute,
  getGitopsWorkflowsRoute,
  getGitopsWorkflowsSummaryRoute,
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
  getMotdRoute,
  getRegistriesIdRoute,
  getRegistriesRoute,
  getRolesRoute,
  getSettingsPublicRoute,
  getSettingsRoute,
  getSslRoute,
  getStacksIdFileRoute,
  getStacksIdRoute,
  getStacksRoute,
  getStatusRoute,
  getSystemInfoRoute,
  getSystemNodesRoute,
  getSystemStatusRoute,
  getSystemVersionRoute,
  getTagsRoute,
  getTeamMembershipsRoute,
  getTeamsIdMembershipsRoute,
  getTeamsIdRoute,
  getTeamsRoute,
  getTemplatesHelmCommandRoute,
  getTemplatesHelmRoute,
  getTemplatesRoute,
  getUsersAdminCheckRoute,
  getUsersIdEffectiveAccessRoute,
  getUsersIdHelmRepositoriesRoute,
  getUsersIdMembershipsRoute,
  getUsersIdRoute,
  getUsersIdTokensRoute,
  getUsersMeRoute,
  getUsersRoute,
  getWebhooksRoute,
  getWebsocketAttachRoute,
  getWebsocketExecRoute,
  getWebsocketKubernetesShellRoute,
  getWebsocketPodRoute,
  patchKubernetesIdNamespacesNamespaceDeploymentsNameRoute,
  postAuthLogoutRoute,
  postAuthOauthValidateRoute,
  postAuthRoute,
  postBackupRoute,
  postCustomTemplatesCreateFileRoute,
  postCustomTemplatesCreateRepositoryRoute,
  postCustomTemplatesCreateStringRoute,
  postEdgeGroupsRoute,
  postEdgeJobsCreateFileRoute,
  postEdgeJobsCreateStringRoute,
  postEdgeJobsIdTasksTaskIDLogsRoute,
  postEdgeStacksCreateFileRoute,
  postEdgeStacksCreateRepositoryRoute,
  postEdgeStacksCreateStringRoute,
  postEndpointGroupsRoute,
  postEndpointsDeleteRoute,
  postEndpointsGlobalKeyRoute,
  postEndpointsIdDockerV2BrowsePutRoute,
  postEndpointsIdEdgeJobsJobIDLogsRoute,
  postEndpointsIdKubernetesHelmReleaseRollbackRoute,
  postEndpointsIdKubernetesHelmRoute,
  postEndpointsIdSnapshotRoute,
  postEndpointsRoute,
  postEndpointsSnapshotRoute,
  postGitopsRepoFilePreviewRoute,
  postGitopsSourcesGitRoute,
  postGitopsSourcesIdTestRoute,
  postGitopsSourcesTestRoute,
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
  postLdapCheckRoute,
  postRegistriesIdConfigureRoute,
  postRegistriesPingRoute,
  postRegistriesRoute,
  postResourceControlsRoute,
  postRestoreRoute,
  postStacksCreateKubernetesRepositoryRoute,
  postStacksCreateKubernetesStringRoute,
  postStacksCreateKubernetesUrlRoute,
  postStacksCreateStandaloneFileRoute,
  postStacksCreateStandaloneRepositoryRoute,
  postStacksCreateStandaloneStringRoute,
  postStacksCreateSwarmFileRoute,
  postStacksCreateSwarmRepositoryRoute,
  postStacksCreateSwarmStringRoute,
  postStacksIdGitRoute,
  postStacksIdMigrateRoute,
  postStacksIdStartRoute,
  postStacksIdStopRoute,
  postStacksWebhooksWebhookIDRoute,
  postSystemUpgradeRoute,
  postTagsRoute,
  postTeamMembershipsRoute,
  postTeamsRoute,
  postTemplatesIdFileRoute,
  postUploadTlsCertificateRoute,
  postUsersAdminInitRoute,
  postUsersIdHelmRepositoriesRoute,
  postUsersIdTokensRoute,
  postUsersRoute,
  postWebhooksIdRoute,
  postWebhooksRoute,
  putCustomTemplatesIdGitFetchRoute,
  putCustomTemplatesIdRoute,
  putEdgeGroupsIdRoute,
  putEdgeJobsIdRoute,
  putEdgeStacksIdRoute,
  putEdgeStacksIdStatusRoute,
  putEndpointGroupsIdEndpointsEndpointIdRoute,
  putEndpointGroupsIdRoute,
  putEndpointsIdAssociationRoute,
  putEndpointsIdForceupdateserviceRoute,
  putEndpointsIdRegistriesRegistryIdRoute,
  putEndpointsIdRoute,
  putEndpointsIdSettingsRoute,
  putEndpointsRelationsRoute,
  putGitopsSourcesIdAccessRoute,
  putGitopsSourcesIdRoute,
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
  putRegistriesIdRoute,
  putResourceControlsIdRoute,
  putSettingsRoute,
  putSslRoute,
  putStacksIdAssociateRoute,
  putStacksIdGitRedeployRoute,
  putStacksIdRoute,
  putTeamMembershipsIdRoute,
  putTeamsIdRoute,
  putUsersIdPasswdRoute,
  putUsersIdRoute,
  putWebhooksIdRoute,
} from './routes'
import {
  deleteCustomTemplatesIdRouteHandler,
  deleteEdgeGroupsIdRouteHandler,
  deleteEdgeJobsIdRouteHandler,
  deleteEdgeJobsIdTasksTaskIDLogsRouteHandler,
  deleteEdgeStacksIdRouteHandler,
  deleteEndpointGroupsIdEndpointsEndpointIdRouteHandler,
  deleteEndpointGroupsIdRouteHandler,
  deleteEndpointsIdKubernetesHelmReleaseRouteHandler,
  deleteEndpointsIdRouteHandler,
  deleteEndpointsRouteHandler,
  deleteGitopsSourcesIdRouteHandler,
  deleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapRouteHandler,
  deleteKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler,
  deleteKubernetesIdNamespacesNamespacePodsNameRouteHandler,
  deleteKubernetesIdNamespacesNamespaceSecretsSecretRouteHandler,
  deleteKubernetesIdNamespacesRouteHandler,
  deleteRegistriesIdRouteHandler,
  deleteResourceControlsIdRouteHandler,
  deleteStacksIdRouteHandler,
  deleteStacksNameNameRouteHandler,
  deleteTagsIdRouteHandler,
  deleteTeamMembershipsIdRouteHandler,
  deleteTeamsIdRouteHandler,
  deleteUsersIdHelmRepositoriesRepositoryIDRouteHandler,
  deleteUsersIdRouteHandler,
  deleteUsersIdTokensKeyIDRouteHandler,
  deleteWebhooksIdRouteHandler,
  getCustomTemplatesIdFileRouteHandler,
  getCustomTemplatesIdRouteHandler,
  getCustomTemplatesRouteHandler,
  getDockerEnvironmentIdContainersContainerIdGpusRouteHandler,
  getDockerEnvironmentIdDashboardRouteHandler,
  getDockerEnvironmentIdImagesRouteHandler,
  getEdgeGroupsIdRouteHandler,
  getEdgeGroupsRouteHandler,
  getEdgeJobsIdFileRouteHandler,
  getEdgeJobsIdRouteHandler,
  getEdgeJobsIdTasksRouteHandler,
  getEdgeJobsIdTasksTaskIDLogsRouteHandler,
  getEdgeJobsRouteHandler,
  getEdgeStacksIdFileRouteHandler,
  getEdgeStacksIdRouteHandler,
  getEdgeStacksRouteHandler,
  getEndpointGroupsIdRouteHandler,
  getEndpointGroupsRouteHandler,
  getEndpointsIdDockerhubRegistryIdRouteHandler,
  getEndpointsIdEdgeStacksStackIdRouteHandler,
  getEndpointsIdEdgeStatusRouteHandler,
  getEndpointsIdKubernetesHelmReleaseHistoryRouteHandler,
  getEndpointsIdKubernetesHelmReleaseRouteHandler,
  getEndpointsIdKubernetesHelmRouteHandler,
  getEndpointsIdRegistriesRouteHandler,
  getEndpointsIdRouteHandler,
  getEndpointsRouteHandler,
  getEndpointsSummaryRouteHandler,
  getGitopsSourcesIdRouteHandler,
  getGitopsSourcesIdWorkflowsRouteHandler,
  getGitopsSourcesRouteHandler,
  getGitopsSourcesSummaryRouteHandler,
  getGitopsWorkflowsIdRouteHandler,
  getGitopsWorkflowsRouteHandler,
  getGitopsWorkflowsSummaryRouteHandler,
  getKubernetesConfigRouteHandler,
  getKubernetesIdApplicationsCountRouteHandler,
  getKubernetesIdApplicationsRouteHandler,
  getKubernetesIdClusterrolebindingsRouteHandler,
  getKubernetesIdClusterrolesRouteHandler,
  getKubernetesIdConfigmapsCountRouteHandler,
  getKubernetesIdConfigmapsRouteHandler,
  getKubernetesIdCronJobsRouteHandler,
  getKubernetesIdDashboardRouteHandler,
  getKubernetesIdDeploymentsRouteHandler,
  getKubernetesIdDescribeRouteHandler,
  getKubernetesIdEventsRouteHandler,
  getKubernetesIdIngressclassesRouteHandler,
  getKubernetesIdIngresscontrollersRouteHandler,
  getKubernetesIdIngressesCountRouteHandler,
  getKubernetesIdIngressesRouteHandler,
  getKubernetesIdJobsRouteHandler,
  getKubernetesIdMaxResourceLimitsRouteHandler,
  getKubernetesIdMetricsApplicationsResourcesRouteHandler,
  getKubernetesIdMetricsNodesNameRouteHandler,
  getKubernetesIdMetricsNodesRouteHandler,
  getKubernetesIdMetricsPodsNamespaceNameRouteHandler,
  getKubernetesIdMetricsPodsNamespaceNamespaceRouteHandler,
  getKubernetesIdNamespacesCountRouteHandler,
  getKubernetesIdNamespacesNamespaceConfigmapsConfigmapRouteHandler,
  getKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler,
  getKubernetesIdNamespacesNamespaceDeploymentsRouteHandler,
  getKubernetesIdNamespacesNamespaceEventsRouteHandler,
  getKubernetesIdNamespacesNamespaceIngresscontrollersRouteHandler,
  getKubernetesIdNamespacesNamespaceIngressesIngressRouteHandler,
  getKubernetesIdNamespacesNamespaceIngressesRouteHandler,
  getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameRouteHandler,
  getKubernetesIdNamespacesNamespacePersistentVolumeClaimsRouteHandler,
  getKubernetesIdNamespacesNamespacePodsNameLogRouteHandler,
  getKubernetesIdNamespacesNamespacePodsRouteHandler,
  getKubernetesIdNamespacesNamespaceReplicasetsRouteHandler,
  getKubernetesIdNamespacesNamespaceResourceQuotasRouteHandler,
  getKubernetesIdNamespacesNamespaceRouteHandler,
  getKubernetesIdNamespacesNamespaceSecretsSecretRouteHandler,
  getKubernetesIdNamespacesNamespaceServiceAccountsNameRouteHandler,
  getKubernetesIdNamespacesNamespaceServicesRouteHandler,
  getKubernetesIdNamespacesNamespaceVolumesRouteHandler,
  getKubernetesIdNamespacesRouteHandler,
  getKubernetesIdNodesLimitsRouteHandler,
  getKubernetesIdNodesRouteHandler,
  getKubernetesIdPersistentVolumeClaimsRouteHandler,
  getKubernetesIdPersistentVolumesNameRouteHandler,
  getKubernetesIdPersistentVolumesRouteHandler,
  getKubernetesIdPodsRouteHandler,
  getKubernetesIdRbacEnabledRouteHandler,
  getKubernetesIdRolebindingsRouteHandler,
  getKubernetesIdRolesRouteHandler,
  getKubernetesIdSecretsCountRouteHandler,
  getKubernetesIdSecretsRouteHandler,
  getKubernetesIdServiceaccountsRouteHandler,
  getKubernetesIdServicesCountRouteHandler,
  getKubernetesIdServicesRouteHandler,
  getKubernetesIdStorageClassesNameRouteHandler,
  getKubernetesIdStorageClassesRouteHandler,
  getKubernetesIdVersionRouteHandler,
  getKubernetesIdVolumesCountRouteHandler,
  getKubernetesIdVolumesNamespaceVolumeRouteHandler,
  getKubernetesIdVolumesRouteHandler,
  getMotdRouteHandler,
  getRegistriesIdRouteHandler,
  getRegistriesRouteHandler,
  getRolesRouteHandler,
  getSettingsPublicRouteHandler,
  getSettingsRouteHandler,
  getSslRouteHandler,
  getStacksIdFileRouteHandler,
  getStacksIdRouteHandler,
  getStacksRouteHandler,
  getStatusRouteHandler,
  getSystemInfoRouteHandler,
  getSystemNodesRouteHandler,
  getSystemStatusRouteHandler,
  getSystemVersionRouteHandler,
  getTagsRouteHandler,
  getTeamMembershipsRouteHandler,
  getTeamsIdMembershipsRouteHandler,
  getTeamsIdRouteHandler,
  getTeamsRouteHandler,
  getTemplatesHelmCommandRouteHandler,
  getTemplatesHelmRouteHandler,
  getTemplatesRouteHandler,
  getUsersAdminCheckRouteHandler,
  getUsersIdEffectiveAccessRouteHandler,
  getUsersIdHelmRepositoriesRouteHandler,
  getUsersIdMembershipsRouteHandler,
  getUsersIdRouteHandler,
  getUsersIdTokensRouteHandler,
  getUsersMeRouteHandler,
  getUsersRouteHandler,
  getWebhooksRouteHandler,
  getWebsocketAttachRouteHandler,
  getWebsocketExecRouteHandler,
  getWebsocketKubernetesShellRouteHandler,
  getWebsocketPodRouteHandler,
  patchKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler,
  postAuthLogoutRouteHandler,
  postAuthOauthValidateRouteHandler,
  postAuthRouteHandler,
  postBackupRouteHandler,
  postCustomTemplatesCreateFileRouteHandler,
  postCustomTemplatesCreateRepositoryRouteHandler,
  postCustomTemplatesCreateStringRouteHandler,
  postEdgeGroupsRouteHandler,
  postEdgeJobsCreateFileRouteHandler,
  postEdgeJobsCreateStringRouteHandler,
  postEdgeJobsIdTasksTaskIDLogsRouteHandler,
  postEdgeStacksCreateFileRouteHandler,
  postEdgeStacksCreateRepositoryRouteHandler,
  postEdgeStacksCreateStringRouteHandler,
  postEndpointGroupsRouteHandler,
  postEndpointsDeleteRouteHandler,
  postEndpointsGlobalKeyRouteHandler,
  postEndpointsIdDockerV2BrowsePutRouteHandler,
  postEndpointsIdEdgeJobsJobIDLogsRouteHandler,
  postEndpointsIdKubernetesHelmReleaseRollbackRouteHandler,
  postEndpointsIdKubernetesHelmRouteHandler,
  postEndpointsIdSnapshotRouteHandler,
  postEndpointsRouteHandler,
  postEndpointsSnapshotRouteHandler,
  postGitopsRepoFilePreviewRouteHandler,
  postGitopsSourcesGitRouteHandler,
  postGitopsSourcesIdTestRouteHandler,
  postGitopsSourcesTestRouteHandler,
  postKubernetesIdClusterRoleBindingsDeleteRouteHandler,
  postKubernetesIdClusterRolesDeleteRouteHandler,
  postKubernetesIdCronJobsDeleteRouteHandler,
  postKubernetesIdIngressesDeleteRouteHandler,
  postKubernetesIdJobsDeleteRouteHandler,
  postKubernetesIdManifestsDryRunRouteHandler,
  postKubernetesIdNamespacesNamespaceConfigmapsRouteHandler,
  postKubernetesIdNamespacesNamespaceDeploymentsNameRollbackRouteHandler,
  postKubernetesIdNamespacesNamespaceDeploymentsRouteHandler,
  postKubernetesIdNamespacesNamespaceIngressesRouteHandler,
  postKubernetesIdNamespacesNamespacePersistentVolumeClaimsRouteHandler,
  postKubernetesIdNamespacesNamespacePodsNameRestartRouteHandler,
  postKubernetesIdNamespacesNamespaceSecretsRouteHandler,
  postKubernetesIdNamespacesNamespaceServicesRouteHandler,
  postKubernetesIdNamespacesRouteHandler,
  postKubernetesIdNodesNameDrainRouteHandler,
  postKubernetesIdPersistentVolumeClaimsDeleteRouteHandler,
  postKubernetesIdPersistentVolumesDeleteRouteHandler,
  postKubernetesIdRoleBindingsDeleteRouteHandler,
  postKubernetesIdRolesDeleteRouteHandler,
  postKubernetesIdServiceAccountsDeleteRouteHandler,
  postKubernetesIdServicesDeleteRouteHandler,
  postKubernetesIdStorageClassesDeleteRouteHandler,
  postLdapCheckRouteHandler,
  postRegistriesIdConfigureRouteHandler,
  postRegistriesPingRouteHandler,
  postRegistriesRouteHandler,
  postResourceControlsRouteHandler,
  postRestoreRouteHandler,
  postStacksCreateKubernetesRepositoryRouteHandler,
  postStacksCreateKubernetesStringRouteHandler,
  postStacksCreateKubernetesUrlRouteHandler,
  postStacksCreateStandaloneFileRouteHandler,
  postStacksCreateStandaloneRepositoryRouteHandler,
  postStacksCreateStandaloneStringRouteHandler,
  postStacksCreateSwarmFileRouteHandler,
  postStacksCreateSwarmRepositoryRouteHandler,
  postStacksCreateSwarmStringRouteHandler,
  postStacksIdGitRouteHandler,
  postStacksIdMigrateRouteHandler,
  postStacksIdStartRouteHandler,
  postStacksIdStopRouteHandler,
  postStacksWebhooksWebhookIDRouteHandler,
  postSystemUpgradeRouteHandler,
  postTagsRouteHandler,
  postTeamMembershipsRouteHandler,
  postTeamsRouteHandler,
  postTemplatesIdFileRouteHandler,
  postUploadTlsCertificateRouteHandler,
  postUsersAdminInitRouteHandler,
  postUsersIdHelmRepositoriesRouteHandler,
  postUsersIdTokensRouteHandler,
  postUsersRouteHandler,
  postWebhooksIdRouteHandler,
  postWebhooksRouteHandler,
  putCustomTemplatesIdGitFetchRouteHandler,
  putCustomTemplatesIdRouteHandler,
  putEdgeGroupsIdRouteHandler,
  putEdgeJobsIdRouteHandler,
  putEdgeStacksIdRouteHandler,
  putEdgeStacksIdStatusRouteHandler,
  putEndpointGroupsIdEndpointsEndpointIdRouteHandler,
  putEndpointGroupsIdRouteHandler,
  putEndpointsIdAssociationRouteHandler,
  putEndpointsIdForceupdateserviceRouteHandler,
  putEndpointsIdRegistriesRegistryIdRouteHandler,
  putEndpointsIdRouteHandler,
  putEndpointsIdSettingsRouteHandler,
  putEndpointsRelationsRouteHandler,
  putGitopsSourcesIdAccessRouteHandler,
  putGitopsSourcesIdRouteHandler,
  putKubernetesIdIngresscontrollersRouteHandler,
  putKubernetesIdNamespacesNamespaceConfigmapsConfigmapRouteHandler,
  putKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler,
  putKubernetesIdNamespacesNamespaceDeploymentsNameScaleRouteHandler,
  putKubernetesIdNamespacesNamespaceIngresscontrollersRouteHandler,
  putKubernetesIdNamespacesNamespaceIngressesRouteHandler,
  putKubernetesIdNamespacesNamespaceRouteHandler,
  putKubernetesIdNamespacesNamespaceSecretsSecretRouteHandler,
  putKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsRouteHandler,
  putKubernetesIdNamespacesNamespaceServicesRouteHandler,
  putKubernetesIdNamespacesNamespaceSystemRouteHandler,
  putKubernetesIdNamespacesRouteHandler,
  putKubernetesIdPersistentVolumeClaimsResizeRouteHandler,
  putKubernetesIdPersistentVolumesReclaimPolicyRouteHandler,
  putKubernetesIdStorageClassesNameDefaultRouteHandler,
  putRegistriesIdRouteHandler,
  putResourceControlsIdRouteHandler,
  putSettingsRouteHandler,
  putSslRouteHandler,
  putStacksIdAssociateRouteHandler,
  putStacksIdGitRedeployRouteHandler,
  putStacksIdRouteHandler,
  putTeamMembershipsIdRouteHandler,
  putTeamsIdRouteHandler,
  putUsersIdPasswdRouteHandler,
  putUsersIdRouteHandler,
  putWebhooksIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAuthRoute, postAuthRouteHandler)
  .openapi(postAuthLogoutRoute, postAuthLogoutRouteHandler)
  .openapi(postAuthOauthValidateRoute, postAuthOauthValidateRouteHandler)
  .openapi(postBackupRoute, postBackupRouteHandler)
  .openapi(getCustomTemplatesRoute, getCustomTemplatesRouteHandler)
  .openapi(deleteCustomTemplatesIdRoute, deleteCustomTemplatesIdRouteHandler)
  .openapi(getCustomTemplatesIdRoute, getCustomTemplatesIdRouteHandler)
  .openapi(putCustomTemplatesIdRoute, putCustomTemplatesIdRouteHandler)
  .openapi(getCustomTemplatesIdFileRoute, getCustomTemplatesIdFileRouteHandler)
  .openapi(putCustomTemplatesIdGitFetchRoute, putCustomTemplatesIdGitFetchRouteHandler)
  .openapi(postCustomTemplatesCreateFileRoute, postCustomTemplatesCreateFileRouteHandler)
  .openapi(
    postCustomTemplatesCreateRepositoryRoute,
    postCustomTemplatesCreateRepositoryRouteHandler,
  )
  .openapi(postCustomTemplatesCreateStringRoute, postCustomTemplatesCreateStringRouteHandler)
  .openapi(
    getDockerEnvironmentIdContainersContainerIdGpusRoute,
    getDockerEnvironmentIdContainersContainerIdGpusRouteHandler,
  )
  .openapi(getDockerEnvironmentIdDashboardRoute, getDockerEnvironmentIdDashboardRouteHandler)
  .openapi(getDockerEnvironmentIdImagesRoute, getDockerEnvironmentIdImagesRouteHandler)
  .openapi(getEdgeGroupsRoute, getEdgeGroupsRouteHandler)
  .openapi(postEdgeGroupsRoute, postEdgeGroupsRouteHandler)
  .openapi(deleteEdgeGroupsIdRoute, deleteEdgeGroupsIdRouteHandler)
  .openapi(getEdgeGroupsIdRoute, getEdgeGroupsIdRouteHandler)
  .openapi(putEdgeGroupsIdRoute, putEdgeGroupsIdRouteHandler)
  .openapi(getEdgeJobsRoute, getEdgeJobsRouteHandler)
  .openapi(deleteEdgeJobsIdRoute, deleteEdgeJobsIdRouteHandler)
  .openapi(getEdgeJobsIdRoute, getEdgeJobsIdRouteHandler)
  .openapi(putEdgeJobsIdRoute, putEdgeJobsIdRouteHandler)
  .openapi(getEdgeJobsIdFileRoute, getEdgeJobsIdFileRouteHandler)
  .openapi(getEdgeJobsIdTasksRoute, getEdgeJobsIdTasksRouteHandler)
  .openapi(deleteEdgeJobsIdTasksTaskIDLogsRoute, deleteEdgeJobsIdTasksTaskIDLogsRouteHandler)
  .openapi(getEdgeJobsIdTasksTaskIDLogsRoute, getEdgeJobsIdTasksTaskIDLogsRouteHandler)
  .openapi(postEdgeJobsIdTasksTaskIDLogsRoute, postEdgeJobsIdTasksTaskIDLogsRouteHandler)
  .openapi(postEdgeJobsCreateFileRoute, postEdgeJobsCreateFileRouteHandler)
  .openapi(postEdgeJobsCreateStringRoute, postEdgeJobsCreateStringRouteHandler)
  .openapi(getEdgeStacksRoute, getEdgeStacksRouteHandler)
  .openapi(deleteEdgeStacksIdRoute, deleteEdgeStacksIdRouteHandler)
  .openapi(getEdgeStacksIdRoute, getEdgeStacksIdRouteHandler)
  .openapi(putEdgeStacksIdRoute, putEdgeStacksIdRouteHandler)
  .openapi(getEdgeStacksIdFileRoute, getEdgeStacksIdFileRouteHandler)
  .openapi(putEdgeStacksIdStatusRoute, putEdgeStacksIdStatusRouteHandler)
  .openapi(postEdgeStacksCreateFileRoute, postEdgeStacksCreateFileRouteHandler)
  .openapi(postEdgeStacksCreateRepositoryRoute, postEdgeStacksCreateRepositoryRouteHandler)
  .openapi(postEdgeStacksCreateStringRoute, postEdgeStacksCreateStringRouteHandler)
  .openapi(getEndpointGroupsRoute, getEndpointGroupsRouteHandler)
  .openapi(postEndpointGroupsRoute, postEndpointGroupsRouteHandler)
  .openapi(deleteEndpointGroupsIdRoute, deleteEndpointGroupsIdRouteHandler)
  .openapi(getEndpointGroupsIdRoute, getEndpointGroupsIdRouteHandler)
  .openapi(putEndpointGroupsIdRoute, putEndpointGroupsIdRouteHandler)
  .openapi(
    deleteEndpointGroupsIdEndpointsEndpointIdRoute,
    deleteEndpointGroupsIdEndpointsEndpointIdRouteHandler,
  )
  .openapi(
    putEndpointGroupsIdEndpointsEndpointIdRoute,
    putEndpointGroupsIdEndpointsEndpointIdRouteHandler,
  )
  .openapi(deleteEndpointsRoute, deleteEndpointsRouteHandler)
  .openapi(getEndpointsRoute, getEndpointsRouteHandler)
  .openapi(postEndpointsRoute, postEndpointsRouteHandler)
  .openapi(deleteEndpointsIdRoute, deleteEndpointsIdRouteHandler)
  .openapi(getEndpointsIdRoute, getEndpointsIdRouteHandler)
  .openapi(putEndpointsIdRoute, putEndpointsIdRouteHandler)
  .openapi(putEndpointsIdAssociationRoute, putEndpointsIdAssociationRouteHandler)
  .openapi(postEndpointsIdDockerV2BrowsePutRoute, postEndpointsIdDockerV2BrowsePutRouteHandler)
  .openapi(getEndpointsIdDockerhubRegistryIdRoute, getEndpointsIdDockerhubRegistryIdRouteHandler)
  .openapi(postEndpointsIdEdgeJobsJobIDLogsRoute, postEndpointsIdEdgeJobsJobIDLogsRouteHandler)
  .openapi(getEndpointsIdEdgeStacksStackIdRoute, getEndpointsIdEdgeStacksStackIdRouteHandler)
  .openapi(getEndpointsIdEdgeStatusRoute, getEndpointsIdEdgeStatusRouteHandler)
  .openapi(putEndpointsIdForceupdateserviceRoute, putEndpointsIdForceupdateserviceRouteHandler)
  .openapi(getEndpointsIdKubernetesHelmRoute, getEndpointsIdKubernetesHelmRouteHandler)
  .openapi(postEndpointsIdKubernetesHelmRoute, postEndpointsIdKubernetesHelmRouteHandler)
  .openapi(
    deleteEndpointsIdKubernetesHelmReleaseRoute,
    deleteEndpointsIdKubernetesHelmReleaseRouteHandler,
  )
  .openapi(
    getEndpointsIdKubernetesHelmReleaseRoute,
    getEndpointsIdKubernetesHelmReleaseRouteHandler,
  )
  .openapi(
    getEndpointsIdKubernetesHelmReleaseHistoryRoute,
    getEndpointsIdKubernetesHelmReleaseHistoryRouteHandler,
  )
  .openapi(
    postEndpointsIdKubernetesHelmReleaseRollbackRoute,
    postEndpointsIdKubernetesHelmReleaseRollbackRouteHandler,
  )
  .openapi(getEndpointsIdRegistriesRoute, getEndpointsIdRegistriesRouteHandler)
  .openapi(putEndpointsIdRegistriesRegistryIdRoute, putEndpointsIdRegistriesRegistryIdRouteHandler)
  .openapi(putEndpointsIdSettingsRoute, putEndpointsIdSettingsRouteHandler)
  .openapi(postEndpointsIdSnapshotRoute, postEndpointsIdSnapshotRouteHandler)
  .openapi(postEndpointsDeleteRoute, postEndpointsDeleteRouteHandler)
  .openapi(postEndpointsGlobalKeyRoute, postEndpointsGlobalKeyRouteHandler)
  .openapi(putEndpointsRelationsRoute, putEndpointsRelationsRouteHandler)
  .openapi(postEndpointsSnapshotRoute, postEndpointsSnapshotRouteHandler)
  .openapi(getEndpointsSummaryRoute, getEndpointsSummaryRouteHandler)
  .openapi(postGitopsRepoFilePreviewRoute, postGitopsRepoFilePreviewRouteHandler)
  .openapi(getGitopsSourcesRoute, getGitopsSourcesRouteHandler)
  .openapi(deleteGitopsSourcesIdRoute, deleteGitopsSourcesIdRouteHandler)
  .openapi(getGitopsSourcesIdRoute, getGitopsSourcesIdRouteHandler)
  .openapi(putGitopsSourcesIdRoute, putGitopsSourcesIdRouteHandler)
  .openapi(putGitopsSourcesIdAccessRoute, putGitopsSourcesIdAccessRouteHandler)
  .openapi(postGitopsSourcesIdTestRoute, postGitopsSourcesIdTestRouteHandler)
  .openapi(getGitopsSourcesIdWorkflowsRoute, getGitopsSourcesIdWorkflowsRouteHandler)
  .openapi(postGitopsSourcesGitRoute, postGitopsSourcesGitRouteHandler)
  .openapi(getGitopsSourcesSummaryRoute, getGitopsSourcesSummaryRouteHandler)
  .openapi(postGitopsSourcesTestRoute, postGitopsSourcesTestRouteHandler)
  .openapi(getGitopsWorkflowsRoute, getGitopsWorkflowsRouteHandler)
  .openapi(getGitopsWorkflowsIdRoute, getGitopsWorkflowsIdRouteHandler)
  .openapi(getGitopsWorkflowsSummaryRoute, getGitopsWorkflowsSummaryRouteHandler)
  .openapi(getKubernetesIdApplicationsRoute, getKubernetesIdApplicationsRouteHandler)
  .openapi(getKubernetesIdApplicationsCountRoute, getKubernetesIdApplicationsCountRouteHandler)
  .openapi(
    postKubernetesIdClusterRoleBindingsDeleteRoute,
    postKubernetesIdClusterRoleBindingsDeleteRouteHandler,
  )
  .openapi(postKubernetesIdClusterRolesDeleteRoute, postKubernetesIdClusterRolesDeleteRouteHandler)
  .openapi(getKubernetesIdClusterrolebindingsRoute, getKubernetesIdClusterrolebindingsRouteHandler)
  .openapi(getKubernetesIdClusterrolesRoute, getKubernetesIdClusterrolesRouteHandler)
  .openapi(getKubernetesIdConfigmapsRoute, getKubernetesIdConfigmapsRouteHandler)
  .openapi(getKubernetesIdConfigmapsCountRoute, getKubernetesIdConfigmapsCountRouteHandler)
  .openapi(getKubernetesIdCronJobsRoute, getKubernetesIdCronJobsRouteHandler)
  .openapi(postKubernetesIdCronJobsDeleteRoute, postKubernetesIdCronJobsDeleteRouteHandler)
  .openapi(getKubernetesIdDashboardRoute, getKubernetesIdDashboardRouteHandler)
  .openapi(getKubernetesIdDeploymentsRoute, getKubernetesIdDeploymentsRouteHandler)
  .openapi(getKubernetesIdDescribeRoute, getKubernetesIdDescribeRouteHandler)
  .openapi(getKubernetesIdEventsRoute, getKubernetesIdEventsRouteHandler)
  .openapi(getKubernetesIdIngressclassesRoute, getKubernetesIdIngressclassesRouteHandler)
  .openapi(getKubernetesIdIngresscontrollersRoute, getKubernetesIdIngresscontrollersRouteHandler)
  .openapi(putKubernetesIdIngresscontrollersRoute, putKubernetesIdIngresscontrollersRouteHandler)
  .openapi(getKubernetesIdIngressesRoute, getKubernetesIdIngressesRouteHandler)
  .openapi(getKubernetesIdIngressesCountRoute, getKubernetesIdIngressesCountRouteHandler)
  .openapi(postKubernetesIdIngressesDeleteRoute, postKubernetesIdIngressesDeleteRouteHandler)
  .openapi(getKubernetesIdJobsRoute, getKubernetesIdJobsRouteHandler)
  .openapi(postKubernetesIdJobsDeleteRoute, postKubernetesIdJobsDeleteRouteHandler)
  .openapi(postKubernetesIdManifestsDryRunRoute, postKubernetesIdManifestsDryRunRouteHandler)
  .openapi(getKubernetesIdMaxResourceLimitsRoute, getKubernetesIdMaxResourceLimitsRouteHandler)
  .openapi(
    getKubernetesIdMetricsApplicationsResourcesRoute,
    getKubernetesIdMetricsApplicationsResourcesRouteHandler,
  )
  .openapi(getKubernetesIdMetricsNodesRoute, getKubernetesIdMetricsNodesRouteHandler)
  .openapi(getKubernetesIdMetricsNodesNameRoute, getKubernetesIdMetricsNodesNameRouteHandler)
  .openapi(
    getKubernetesIdMetricsPodsNamespaceNameRoute,
    getKubernetesIdMetricsPodsNamespaceNameRouteHandler,
  )
  .openapi(
    getKubernetesIdMetricsPodsNamespaceNamespaceRoute,
    getKubernetesIdMetricsPodsNamespaceNamespaceRouteHandler,
  )
  .openapi(deleteKubernetesIdNamespacesRoute, deleteKubernetesIdNamespacesRouteHandler)
  .openapi(getKubernetesIdNamespacesRoute, getKubernetesIdNamespacesRouteHandler)
  .openapi(postKubernetesIdNamespacesRoute, postKubernetesIdNamespacesRouteHandler)
  .openapi(putKubernetesIdNamespacesRoute, putKubernetesIdNamespacesRouteHandler)
  .openapi(getKubernetesIdNamespacesNamespaceRoute, getKubernetesIdNamespacesNamespaceRouteHandler)
  .openapi(putKubernetesIdNamespacesNamespaceRoute, putKubernetesIdNamespacesNamespaceRouteHandler)
  .openapi(
    postKubernetesIdNamespacesNamespaceConfigmapsRoute,
    postKubernetesIdNamespacesNamespaceConfigmapsRouteHandler,
  )
  .openapi(
    deleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute,
    deleteKubernetesIdNamespacesNamespaceConfigmapsConfigmapRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute,
    getKubernetesIdNamespacesNamespaceConfigmapsConfigmapRouteHandler,
  )
  .openapi(
    putKubernetesIdNamespacesNamespaceConfigmapsConfigmapRoute,
    putKubernetesIdNamespacesNamespaceConfigmapsConfigmapRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceDeploymentsRoute,
    getKubernetesIdNamespacesNamespaceDeploymentsRouteHandler,
  )
  .openapi(
    postKubernetesIdNamespacesNamespaceDeploymentsRoute,
    postKubernetesIdNamespacesNamespaceDeploymentsRouteHandler,
  )
  .openapi(
    deleteKubernetesIdNamespacesNamespaceDeploymentsNameRoute,
    deleteKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceDeploymentsNameRoute,
    getKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler,
  )
  .openapi(
    patchKubernetesIdNamespacesNamespaceDeploymentsNameRoute,
    patchKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler,
  )
  .openapi(
    putKubernetesIdNamespacesNamespaceDeploymentsNameRoute,
    putKubernetesIdNamespacesNamespaceDeploymentsNameRouteHandler,
  )
  .openapi(
    postKubernetesIdNamespacesNamespaceDeploymentsNameRollbackRoute,
    postKubernetesIdNamespacesNamespaceDeploymentsNameRollbackRouteHandler,
  )
  .openapi(
    putKubernetesIdNamespacesNamespaceDeploymentsNameScaleRoute,
    putKubernetesIdNamespacesNamespaceDeploymentsNameScaleRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceEventsRoute,
    getKubernetesIdNamespacesNamespaceEventsRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceIngresscontrollersRoute,
    getKubernetesIdNamespacesNamespaceIngresscontrollersRouteHandler,
  )
  .openapi(
    putKubernetesIdNamespacesNamespaceIngresscontrollersRoute,
    putKubernetesIdNamespacesNamespaceIngresscontrollersRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceIngressesRoute,
    getKubernetesIdNamespacesNamespaceIngressesRouteHandler,
  )
  .openapi(
    postKubernetesIdNamespacesNamespaceIngressesRoute,
    postKubernetesIdNamespacesNamespaceIngressesRouteHandler,
  )
  .openapi(
    putKubernetesIdNamespacesNamespaceIngressesRoute,
    putKubernetesIdNamespacesNamespaceIngressesRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceIngressesIngressRoute,
    getKubernetesIdNamespacesNamespaceIngressesIngressRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespacePersistentVolumeClaimsRoute,
    getKubernetesIdNamespacesNamespacePersistentVolumeClaimsRouteHandler,
  )
  .openapi(
    postKubernetesIdNamespacesNamespacePersistentVolumeClaimsRoute,
    postKubernetesIdNamespacesNamespacePersistentVolumeClaimsRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameRoute,
    getKubernetesIdNamespacesNamespacePersistentVolumeClaimsNameRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespacePodsRoute,
    getKubernetesIdNamespacesNamespacePodsRouteHandler,
  )
  .openapi(
    deleteKubernetesIdNamespacesNamespacePodsNameRoute,
    deleteKubernetesIdNamespacesNamespacePodsNameRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespacePodsNameLogRoute,
    getKubernetesIdNamespacesNamespacePodsNameLogRouteHandler,
  )
  .openapi(
    postKubernetesIdNamespacesNamespacePodsNameRestartRoute,
    postKubernetesIdNamespacesNamespacePodsNameRestartRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceReplicasetsRoute,
    getKubernetesIdNamespacesNamespaceReplicasetsRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceResourceQuotasRoute,
    getKubernetesIdNamespacesNamespaceResourceQuotasRouteHandler,
  )
  .openapi(
    postKubernetesIdNamespacesNamespaceSecretsRoute,
    postKubernetesIdNamespacesNamespaceSecretsRouteHandler,
  )
  .openapi(
    deleteKubernetesIdNamespacesNamespaceSecretsSecretRoute,
    deleteKubernetesIdNamespacesNamespaceSecretsSecretRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceSecretsSecretRoute,
    getKubernetesIdNamespacesNamespaceSecretsSecretRouteHandler,
  )
  .openapi(
    putKubernetesIdNamespacesNamespaceSecretsSecretRoute,
    putKubernetesIdNamespacesNamespaceSecretsSecretRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceServiceAccountsNameRoute,
    getKubernetesIdNamespacesNamespaceServiceAccountsNameRouteHandler,
  )
  .openapi(
    putKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsRoute,
    putKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecretsRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceServicesRoute,
    getKubernetesIdNamespacesNamespaceServicesRouteHandler,
  )
  .openapi(
    postKubernetesIdNamespacesNamespaceServicesRoute,
    postKubernetesIdNamespacesNamespaceServicesRouteHandler,
  )
  .openapi(
    putKubernetesIdNamespacesNamespaceServicesRoute,
    putKubernetesIdNamespacesNamespaceServicesRouteHandler,
  )
  .openapi(
    putKubernetesIdNamespacesNamespaceSystemRoute,
    putKubernetesIdNamespacesNamespaceSystemRouteHandler,
  )
  .openapi(
    getKubernetesIdNamespacesNamespaceVolumesRoute,
    getKubernetesIdNamespacesNamespaceVolumesRouteHandler,
  )
  .openapi(getKubernetesIdNamespacesCountRoute, getKubernetesIdNamespacesCountRouteHandler)
  .openapi(getKubernetesIdNodesRoute, getKubernetesIdNodesRouteHandler)
  .openapi(postKubernetesIdNodesNameDrainRoute, postKubernetesIdNodesNameDrainRouteHandler)
  .openapi(getKubernetesIdNodesLimitsRoute, getKubernetesIdNodesLimitsRouteHandler)
  .openapi(
    getKubernetesIdPersistentVolumeClaimsRoute,
    getKubernetesIdPersistentVolumeClaimsRouteHandler,
  )
  .openapi(
    postKubernetesIdPersistentVolumeClaimsDeleteRoute,
    postKubernetesIdPersistentVolumeClaimsDeleteRouteHandler,
  )
  .openapi(
    putKubernetesIdPersistentVolumeClaimsResizeRoute,
    putKubernetesIdPersistentVolumeClaimsResizeRouteHandler,
  )
  .openapi(getKubernetesIdPersistentVolumesRoute, getKubernetesIdPersistentVolumesRouteHandler)
  .openapi(
    getKubernetesIdPersistentVolumesNameRoute,
    getKubernetesIdPersistentVolumesNameRouteHandler,
  )
  .openapi(
    postKubernetesIdPersistentVolumesDeleteRoute,
    postKubernetesIdPersistentVolumesDeleteRouteHandler,
  )
  .openapi(
    putKubernetesIdPersistentVolumesReclaimPolicyRoute,
    putKubernetesIdPersistentVolumesReclaimPolicyRouteHandler,
  )
  .openapi(getKubernetesIdPodsRoute, getKubernetesIdPodsRouteHandler)
  .openapi(getKubernetesIdRbacEnabledRoute, getKubernetesIdRbacEnabledRouteHandler)
  .openapi(postKubernetesIdRoleBindingsDeleteRoute, postKubernetesIdRoleBindingsDeleteRouteHandler)
  .openapi(getKubernetesIdRolebindingsRoute, getKubernetesIdRolebindingsRouteHandler)
  .openapi(getKubernetesIdRolesRoute, getKubernetesIdRolesRouteHandler)
  .openapi(postKubernetesIdRolesDeleteRoute, postKubernetesIdRolesDeleteRouteHandler)
  .openapi(getKubernetesIdSecretsRoute, getKubernetesIdSecretsRouteHandler)
  .openapi(getKubernetesIdSecretsCountRoute, getKubernetesIdSecretsCountRouteHandler)
  .openapi(
    postKubernetesIdServiceAccountsDeleteRoute,
    postKubernetesIdServiceAccountsDeleteRouteHandler,
  )
  .openapi(getKubernetesIdServiceaccountsRoute, getKubernetesIdServiceaccountsRouteHandler)
  .openapi(getKubernetesIdServicesRoute, getKubernetesIdServicesRouteHandler)
  .openapi(getKubernetesIdServicesCountRoute, getKubernetesIdServicesCountRouteHandler)
  .openapi(postKubernetesIdServicesDeleteRoute, postKubernetesIdServicesDeleteRouteHandler)
  .openapi(getKubernetesIdStorageClassesRoute, getKubernetesIdStorageClassesRouteHandler)
  .openapi(getKubernetesIdStorageClassesNameRoute, getKubernetesIdStorageClassesNameRouteHandler)
  .openapi(
    putKubernetesIdStorageClassesNameDefaultRoute,
    putKubernetesIdStorageClassesNameDefaultRouteHandler,
  )
  .openapi(
    postKubernetesIdStorageClassesDeleteRoute,
    postKubernetesIdStorageClassesDeleteRouteHandler,
  )
  .openapi(getKubernetesIdVersionRoute, getKubernetesIdVersionRouteHandler)
  .openapi(getKubernetesIdVolumesRoute, getKubernetesIdVolumesRouteHandler)
  .openapi(
    getKubernetesIdVolumesNamespaceVolumeRoute,
    getKubernetesIdVolumesNamespaceVolumeRouteHandler,
  )
  .openapi(getKubernetesIdVolumesCountRoute, getKubernetesIdVolumesCountRouteHandler)
  .openapi(getKubernetesConfigRoute, getKubernetesConfigRouteHandler)
  .openapi(postLdapCheckRoute, postLdapCheckRouteHandler)
  .openapi(getMotdRoute, getMotdRouteHandler)
  .openapi(getRegistriesRoute, getRegistriesRouteHandler)
  .openapi(postRegistriesRoute, postRegistriesRouteHandler)
  .openapi(deleteRegistriesIdRoute, deleteRegistriesIdRouteHandler)
  .openapi(getRegistriesIdRoute, getRegistriesIdRouteHandler)
  .openapi(putRegistriesIdRoute, putRegistriesIdRouteHandler)
  .openapi(postRegistriesIdConfigureRoute, postRegistriesIdConfigureRouteHandler)
  .openapi(postRegistriesPingRoute, postRegistriesPingRouteHandler)
  .openapi(postResourceControlsRoute, postResourceControlsRouteHandler)
  .openapi(deleteResourceControlsIdRoute, deleteResourceControlsIdRouteHandler)
  .openapi(putResourceControlsIdRoute, putResourceControlsIdRouteHandler)
  .openapi(postRestoreRoute, postRestoreRouteHandler)
  .openapi(getRolesRoute, getRolesRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(putSettingsRoute, putSettingsRouteHandler)
  .openapi(getSettingsPublicRoute, getSettingsPublicRouteHandler)
  .openapi(getSslRoute, getSslRouteHandler)
  .openapi(putSslRoute, putSslRouteHandler)
  .openapi(getStacksRoute, getStacksRouteHandler)
  .openapi(deleteStacksIdRoute, deleteStacksIdRouteHandler)
  .openapi(getStacksIdRoute, getStacksIdRouteHandler)
  .openapi(putStacksIdRoute, putStacksIdRouteHandler)
  .openapi(putStacksIdAssociateRoute, putStacksIdAssociateRouteHandler)
  .openapi(getStacksIdFileRoute, getStacksIdFileRouteHandler)
  .openapi(postStacksIdGitRoute, postStacksIdGitRouteHandler)
  .openapi(putStacksIdGitRedeployRoute, putStacksIdGitRedeployRouteHandler)
  .openapi(postStacksIdMigrateRoute, postStacksIdMigrateRouteHandler)
  .openapi(postStacksIdStartRoute, postStacksIdStartRouteHandler)
  .openapi(postStacksIdStopRoute, postStacksIdStopRouteHandler)
  .openapi(
    postStacksCreateKubernetesRepositoryRoute,
    postStacksCreateKubernetesRepositoryRouteHandler,
  )
  .openapi(postStacksCreateKubernetesStringRoute, postStacksCreateKubernetesStringRouteHandler)
  .openapi(postStacksCreateKubernetesUrlRoute, postStacksCreateKubernetesUrlRouteHandler)
  .openapi(postStacksCreateStandaloneFileRoute, postStacksCreateStandaloneFileRouteHandler)
  .openapi(
    postStacksCreateStandaloneRepositoryRoute,
    postStacksCreateStandaloneRepositoryRouteHandler,
  )
  .openapi(postStacksCreateStandaloneStringRoute, postStacksCreateStandaloneStringRouteHandler)
  .openapi(postStacksCreateSwarmFileRoute, postStacksCreateSwarmFileRouteHandler)
  .openapi(postStacksCreateSwarmRepositoryRoute, postStacksCreateSwarmRepositoryRouteHandler)
  .openapi(postStacksCreateSwarmStringRoute, postStacksCreateSwarmStringRouteHandler)
  .openapi(deleteStacksNameNameRoute, deleteStacksNameNameRouteHandler)
  .openapi(postStacksWebhooksWebhookIDRoute, postStacksWebhooksWebhookIDRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getSystemInfoRoute, getSystemInfoRouteHandler)
  .openapi(getSystemNodesRoute, getSystemNodesRouteHandler)
  .openapi(getSystemStatusRoute, getSystemStatusRouteHandler)
  .openapi(postSystemUpgradeRoute, postSystemUpgradeRouteHandler)
  .openapi(getSystemVersionRoute, getSystemVersionRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(postTagsRoute, postTagsRouteHandler)
  .openapi(deleteTagsIdRoute, deleteTagsIdRouteHandler)
  .openapi(getTeamMembershipsRoute, getTeamMembershipsRouteHandler)
  .openapi(postTeamMembershipsRoute, postTeamMembershipsRouteHandler)
  .openapi(deleteTeamMembershipsIdRoute, deleteTeamMembershipsIdRouteHandler)
  .openapi(putTeamMembershipsIdRoute, putTeamMembershipsIdRouteHandler)
  .openapi(getTeamsRoute, getTeamsRouteHandler)
  .openapi(postTeamsRoute, postTeamsRouteHandler)
  .openapi(deleteTeamsIdRoute, deleteTeamsIdRouteHandler)
  .openapi(getTeamsIdRoute, getTeamsIdRouteHandler)
  .openapi(putTeamsIdRoute, putTeamsIdRouteHandler)
  .openapi(getTeamsIdMembershipsRoute, getTeamsIdMembershipsRouteHandler)
  .openapi(getTemplatesRoute, getTemplatesRouteHandler)
  .openapi(postTemplatesIdFileRoute, postTemplatesIdFileRouteHandler)
  .openapi(getTemplatesHelmRoute, getTemplatesHelmRouteHandler)
  .openapi(getTemplatesHelmCommandRoute, getTemplatesHelmCommandRouteHandler)
  .openapi(postUploadTlsCertificateRoute, postUploadTlsCertificateRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(deleteUsersIdRoute, deleteUsersIdRouteHandler)
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(putUsersIdRoute, putUsersIdRouteHandler)
  .openapi(getUsersIdEffectiveAccessRoute, getUsersIdEffectiveAccessRouteHandler)
  .openapi(getUsersIdHelmRepositoriesRoute, getUsersIdHelmRepositoriesRouteHandler)
  .openapi(postUsersIdHelmRepositoriesRoute, postUsersIdHelmRepositoriesRouteHandler)
  .openapi(
    deleteUsersIdHelmRepositoriesRepositoryIDRoute,
    deleteUsersIdHelmRepositoriesRepositoryIDRouteHandler,
  )
  .openapi(getUsersIdMembershipsRoute, getUsersIdMembershipsRouteHandler)
  .openapi(putUsersIdPasswdRoute, putUsersIdPasswdRouteHandler)
  .openapi(getUsersIdTokensRoute, getUsersIdTokensRouteHandler)
  .openapi(postUsersIdTokensRoute, postUsersIdTokensRouteHandler)
  .openapi(deleteUsersIdTokensKeyIDRoute, deleteUsersIdTokensKeyIDRouteHandler)
  .openapi(getUsersAdminCheckRoute, getUsersAdminCheckRouteHandler)
  .openapi(postUsersAdminInitRoute, postUsersAdminInitRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(deleteWebhooksIdRoute, deleteWebhooksIdRouteHandler)
  .openapi(postWebhooksIdRoute, postWebhooksIdRouteHandler)
  .openapi(putWebhooksIdRoute, putWebhooksIdRouteHandler)
  .openapi(getWebsocketAttachRoute, getWebsocketAttachRouteHandler)
  .openapi(getWebsocketExecRoute, getWebsocketExecRouteHandler)
  .openapi(getWebsocketKubernetesShellRoute, getWebsocketKubernetesShellRouteHandler)
  .openapi(getWebsocketPodRoute, getWebsocketPodRouteHandler)

export default app
