import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProjectProjectAiGatewayKeysKeyIdRoute,
  deleteProjectProjectIntegrationEndpointIntegrationEndpointIdRoute,
  deleteProjectProjectIntegrationIntegrationIdRoute,
  deleteProjectProjectInviteInvitedEmailRoute,
  deleteProjectProjectRoute,
  deleteProjectProjectSecretsCmksCmkIdRoute,
  deleteProjectProjectServiceServiceNameAclKafkaAclIdRoute,
  deleteProjectProjectServiceServiceNameClickhouseDbDatabaseRoute,
  deleteProjectProjectServiceServiceNameClickhouseRoleRoleUuidRoute,
  deleteProjectProjectServiceServiceNameClickhouseUserUserUuidRoute,
  deleteProjectProjectServiceServiceNameConnectionPoolPoolNameRoute,
  deleteProjectProjectServiceServiceNameConnectorsConnectorNameRoute,
  deleteProjectProjectServiceServiceNameDbDbnameRoute,
  deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdRoute,
  deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdRoute,
  deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionApplicationVersionIdRoute,
  deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdRoute,
  deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRoute,
  deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionApplicationVersionIdRoute,
  deleteProjectProjectServiceServiceNameIndexIndexPatternRoute,
  deleteProjectProjectServiceServiceNameKafkaAclKafkaAclIdRoute,
  deleteProjectProjectServiceServiceNameKafkaSchemaRegistryAclSchemaRegistryAclIdRoute,
  deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameRoute,
  deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRoute,
  deleteProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
  deleteProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
  deleteProjectProjectServiceServiceNamePrivatelinkAwsRoute,
  deleteProjectProjectServiceServiceNamePrivatelinkAzureRoute,
  deleteProjectProjectServiceServiceNamePrivatelinkGoogleRoute,
  deleteProjectProjectServiceServiceNameQuotaRoute,
  deleteProjectProjectServiceServiceNameRoute,
  deleteProjectProjectServiceServiceNameTopicTopicNameRoute,
  deleteProjectProjectServiceServiceNameUserServiceUsernameRoute,
  deleteProjectProjectStaticIpsStaticIpAddressIdAssociationRoute,
  deleteProjectProjectStaticIpsStaticIpAddressIdRoute,
  deleteProjectProjectUserUserEmailRoute,
  deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerResourceGroupsPeerResourceGroupPeerVpcsPeerVpcRoute,
  deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerVpcsPeerVpcPeerRegionsPeerRegionRoute,
  deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerVpcsPeerVpcRoute,
  deleteProjectProjectVpcsProjectVpcIdRoute,
  getProjectProjectAiGatewayBudgetRoute,
  getProjectProjectAiGatewayKeyOwnersRoute,
  getProjectProjectAiGatewayKeysKeyIdRoute,
  getProjectProjectAiGatewayKeysRoute,
  getProjectProjectAiGatewayModelsRoute,
  getProjectProjectAiGatewayUsageRoute,
  getProjectProjectAlertsRoute,
  getProjectProjectCloudsRoute,
  getProjectProjectCreditsRoute,
  getProjectProjectDownloadSbomFileFormatDownloadCookieRoute,
  getProjectProjectEventsRoute,
  getProjectProjectGenerateSbomDownloadUrlFileFormatRoute,
  getProjectProjectIntegrationEndpointIntegrationEndpointIdRoute,
  getProjectProjectIntegrationEndpointRoute,
  getProjectProjectIntegrationEndpointTypesRoute,
  getProjectProjectIntegrationIntegrationIdRoute,
  getProjectProjectIntegrationTypesRoute,
  getProjectProjectInvoiceInvoiceNumberDownloadCookieRoute,
  getProjectProjectInvoiceRoute,
  getProjectProjectKmsCaRoute,
  getProjectProjectPricingServiceTypesServiceTypePlansServicePlanCloudsCloudRoute,
  getProjectProjectPrivatelinkAvailabilityRoute,
  getProjectProjectRoute,
  getProjectProjectSecretsCmksAccessorsRoute,
  getProjectProjectSecretsCmksCmkIdRoute,
  getProjectProjectSecretsCmksCmkIdServiceAssociationsRoute,
  getProjectProjectSecretsCmksRoute,
  getProjectProjectServiceRoute,
  getProjectProjectServiceServiceNameAclRoute,
  getProjectProjectServiceServiceNameAlertsRoute,
  getProjectProjectServiceServiceNameAvailableConnectorsRoute,
  getProjectProjectServiceServiceNameBackupsRoute,
  getProjectProjectServiceServiceNameClickhouseDbRoute,
  getProjectProjectServiceServiceNameClickhouseQueryRoute,
  getProjectProjectServiceServiceNameClickhouseQueryStatsRoute,
  getProjectProjectServiceServiceNameClickhouseRoleRoute,
  getProjectProjectServiceServiceNameClickhouseTieredStorageSummaryRoute,
  getProjectProjectServiceServiceNameClickhouseUserRoute,
  getProjectProjectServiceServiceNameConnectorPluginsConnectorNameConfigurationRoute,
  getProjectProjectServiceServiceNameConnectorsConnectorNameStatusRoute,
  getProjectProjectServiceServiceNameConnectorsRoute,
  getProjectProjectServiceServiceNameDbRoute,
  getProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdRoute,
  getProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentRoute,
  getProjectProjectServiceServiceNameFlinkApplicationApplicationIdRoute,
  getProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionApplicationVersionIdRoute,
  getProjectProjectServiceServiceNameFlinkApplicationRoute,
  getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdRoute,
  getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentRoute,
  getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRoute,
  getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionApplicationVersionIdRoute,
  getProjectProjectServiceServiceNameFlinkJarApplicationRoute,
  getProjectProjectServiceServiceNameFlinkJobJobIdRoute,
  getProjectProjectServiceServiceNameFlinkJobRoute,
  getProjectProjectServiceServiceNameFlinkOverviewRoute,
  getProjectProjectServiceServiceNameIndexRoute,
  getProjectProjectServiceServiceNameIntegrationRoute,
  getProjectProjectServiceServiceNameKafkaAclKafkaAclIdRoute,
  getProjectProjectServiceServiceNameKafkaAclRoute,
  getProjectProjectServiceServiceNameKafkaSchemaConfigRoute,
  getProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRoute,
  getProjectProjectServiceServiceNameKafkaSchemaRegistryAclRoute,
  getProjectProjectServiceServiceNameKafkaSchemaSchemasIdsSchemaIdRoute,
  getProjectProjectServiceServiceNameKafkaSchemaSubjectsRoute,
  getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRoute,
  getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRoute,
  getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdSchemaRoute,
  getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageByTopicRoute,
  getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageTotalRoute,
  getProjectProjectServiceServiceNameKafkaTieredStorageSummaryRoute,
  getProjectProjectServiceServiceNameMigrationRoute,
  getProjectProjectServiceServiceNameMirrormakerReplicationFlowsRoute,
  getProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
  getProjectProjectServiceServiceNameOpensearchAclRoute,
  getProjectProjectServiceServiceNameOpensearchSecurityRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameAllRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameStatusRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameStatusRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRestorationInProgressRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRoute,
  getProjectProjectServiceServiceNameOpensearchTieredStorageSummaryRoute,
  getProjectProjectServiceServiceNamePgAvailableExtensionsRoute,
  getProjectProjectServiceServiceNamePrivatelinkAwsConnectionsRoute,
  getProjectProjectServiceServiceNamePrivatelinkAwsRoute,
  getProjectProjectServiceServiceNamePrivatelinkAzureConnectionsRoute,
  getProjectProjectServiceServiceNamePrivatelinkAzureRoute,
  getProjectProjectServiceServiceNamePrivatelinkGoogleConnectionsRoute,
  getProjectProjectServiceServiceNamePrivatelinkGoogleRoute,
  getProjectProjectServiceServiceNameQuotaDescribeRoute,
  getProjectProjectServiceServiceNameQuotaRoute,
  getProjectProjectServiceServiceNameRoute,
  getProjectProjectServiceServiceNameTagsRoute,
  getProjectProjectServiceServiceNameTaskTaskIdRoute,
  getProjectProjectServiceServiceNameThanosStorageSummaryRoute,
  getProjectProjectServiceServiceNameTopicRoute,
  getProjectProjectServiceServiceNameTopicTopicNameRoute,
  getProjectProjectServiceServiceNameUserServiceUsernameRoute,
  getProjectProjectServiceTypes2Route,
  getProjectProjectServiceTypesRoute,
  getProjectProjectServiceTypesServiceTypePlansRoute,
  getProjectProjectServiceTypesServiceTypePlansServicePlanRoute,
  getProjectProjectServiceTypesServiceTypeRoute,
  getProjectProjectStaticIpAvailabilityRoute,
  getProjectProjectStaticIpsRoute,
  getProjectProjectTagsRoute,
  getProjectProjectUsersRoute,
  getProjectProjectVpcPeeringConnectionTypesRoute,
  getProjectProjectVpcsProjectVpcIdRoute,
  getProjectProjectVpcsRoute,
  getProjectRoute,
  patchProjectProjectAiGatewayKeysKeyIdRoute,
  patchProjectProjectServiceServiceNameServiceTypeRoute,
  patchProjectProjectServiceServiceNameTagsRoute,
  patchProjectProjectStaticIpsStaticIpAddressIdRoute,
  patchProjectProjectTagsRoute,
  postProjectProjectAiGatewayKeysRoute,
  postProjectProjectCreditsRoute,
  postProjectProjectIntegrationEndpointRoute,
  postProjectProjectIntegrationRoute,
  postProjectProjectInviteInviteVerificationCodeRoute,
  postProjectProjectInviteRoute,
  postProjectProjectSecretsCmksCmkIdAccessCheckRoute,
  postProjectProjectSecretsCmksCmkIdRoute,
  postProjectProjectSecretsCmksRoute,
  postProjectProjectServiceRoute,
  postProjectProjectServiceServiceNameAclRoute,
  postProjectProjectServiceServiceNameApplicationRedeployRoute,
  postProjectProjectServiceServiceNameBackupToAnotherRegionReportRoute,
  postProjectProjectServiceServiceNameClickhouseDbRoute,
  postProjectProjectServiceServiceNameClickhouseQueryRoute,
  postProjectProjectServiceServiceNameClickhouseUserRoute,
  postProjectProjectServiceServiceNameConnectionPoolRoute,
  postProjectProjectServiceServiceNameConnectorsConnectorNamePauseRoute,
  postProjectProjectServiceServiceNameConnectorsConnectorNameRestartRoute,
  postProjectProjectServiceServiceNameConnectorsConnectorNameResumeRoute,
  postProjectProjectServiceServiceNameConnectorsConnectorNameStopRoute,
  postProjectProjectServiceServiceNameConnectorsConnectorNameTasksTaskIdRestartRoute,
  postProjectProjectServiceServiceNameConnectorsRoute,
  postProjectProjectServiceServiceNameDbRoute,
  postProjectProjectServiceServiceNameEnableWritesRoute,
  postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdCancelRoute,
  postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdStopRoute,
  postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentRoute,
  postProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionRoute,
  postProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionValidateRoute,
  postProjectProjectServiceServiceNameFlinkApplicationRoute,
  postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdCancelRoute,
  postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdStopRoute,
  postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentRoute,
  postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionRoute,
  postProjectProjectServiceServiceNameFlinkJarApplicationRoute,
  postProjectProjectServiceServiceNameIndexCloseMultipleRoute,
  postProjectProjectServiceServiceNameIndexOpenMultipleRoute,
  postProjectProjectServiceServiceNameKafkaAclRoute,
  postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameMessagesRoute,
  postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameProduceRoute,
  postProjectProjectServiceServiceNameKafkaSchemaCompatibilitySubjectsSubjectNameVersionsVersionIdRoute,
  postProjectProjectServiceServiceNameKafkaSchemaRegistryAclRoute,
  postProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRoute,
  postProjectProjectServiceServiceNameLogsRoute,
  postProjectProjectServiceServiceNameMetricsRoute,
  postProjectProjectServiceServiceNameMirrormakerReplicationFlowsRoute,
  postProjectProjectServiceServiceNameMysqlQueryStatsRoute,
  postProjectProjectServiceServiceNameOpensearchAclRoute,
  postProjectProjectServiceServiceNameOpensearchIndexPatternCloseRoute,
  postProjectProjectServiceServiceNameOpensearchIndexPatternOpenRoute,
  postProjectProjectServiceServiceNameOpensearchSecurityAdminRoute,
  postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreCheckRoute,
  postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreRoute,
  postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
  postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameVerifyRoute,
  postProjectProjectServiceServiceNamePgQueryStatsRoute,
  postProjectProjectServiceServiceNamePrivatelinkAwsRoute,
  postProjectProjectServiceServiceNamePrivatelinkAzureConnectionsPrivatelinkConnectionIdApproveRoute,
  postProjectProjectServiceServiceNamePrivatelinkAzureRefreshRoute,
  postProjectProjectServiceServiceNamePrivatelinkAzureRoute,
  postProjectProjectServiceServiceNamePrivatelinkGoogleConnectionsPrivatelinkConnectionIdApproveRoute,
  postProjectProjectServiceServiceNamePrivatelinkGoogleRefreshRoute,
  postProjectProjectServiceServiceNamePrivatelinkGoogleRoute,
  postProjectProjectServiceServiceNameQueryActivityRoute,
  postProjectProjectServiceServiceNameQueryCancelRoute,
  postProjectProjectServiceServiceNameQueryStatsRoute,
  postProjectProjectServiceServiceNameQuotaRoute,
  postProjectProjectServiceServiceNameRotateInternalSecretsRoute,
  postProjectProjectServiceServiceNameRotateSecretServiceEncryptionKeyRoute,
  postProjectProjectServiceServiceNameRotateTokenServiceSecretsRoute,
  postProjectProjectServiceServiceNameTaskRoute,
  postProjectProjectServiceServiceNameTopicRoute,
  postProjectProjectServiceServiceNameUpgradeValidationRoute,
  postProjectProjectServiceServiceNameUserRoute,
  postProjectProjectServiceServiceNameValidateCustomPluginClassesRoute,
  postProjectProjectStaticIpsRoute,
  postProjectProjectStaticIpsStaticIpAddressIdAssociationRoute,
  postProjectProjectVpcsProjectVpcIdPeeringConnectionsRefreshRoute,
  postProjectProjectVpcsProjectVpcIdPeeringConnectionsRoute,
  postProjectProjectVpcsRoute,
  postProjectRoute,
  putProjectProjectAiGatewayBudgetRoute,
  putProjectProjectIntegrationEndpointIntegrationEndpointIdRoute,
  putProjectProjectIntegrationIntegrationIdRoute,
  putProjectProjectRoute,
  putProjectProjectServiceServiceNameClickhouseUserUserUuidPasswordRoute,
  putProjectProjectServiceServiceNameConnectionPoolPoolNameRoute,
  putProjectProjectServiceServiceNameConnectorsConnectorNameRoute,
  putProjectProjectServiceServiceNameFlinkApplicationApplicationIdRoute,
  putProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRoute,
  putProjectProjectServiceServiceNameKafkaSchemaConfigRoute,
  putProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRoute,
  putProjectProjectServiceServiceNameMaintenanceStartRoute,
  putProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
  putProjectProjectServiceServiceNameOpensearchAclRoute,
  putProjectProjectServiceServiceNameOpensearchSecurityAdminRoute,
  putProjectProjectServiceServiceNamePrivatelinkAwsRoute,
  putProjectProjectServiceServiceNamePrivatelinkAzureConnectionsPrivatelinkConnectionIdRoute,
  putProjectProjectServiceServiceNamePrivatelinkAzureRoute,
  putProjectProjectServiceServiceNameQueryStatsResetRoute,
  putProjectProjectServiceServiceNameRoute,
  putProjectProjectServiceServiceNameTagsRoute,
  putProjectProjectServiceServiceNameTopicTopicNameRoute,
  putProjectProjectServiceServiceNameUserServiceUsernameCredentialsResetRoute,
  putProjectProjectServiceServiceNameUserServiceUsernameRoute,
  putProjectProjectTagsRoute,
  putProjectProjectUserUserEmailRoute,
  putProjectProjectVpcsProjectVpcIdUserPeerNetworkCidrsRoute,
} from '../routes'

export const postProjectProjectAiGatewayKeysRouteHandler: RouteHandler<
  typeof postProjectProjectAiGatewayKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectAiGatewayKeysRouteHandler: RouteHandler<
  typeof getProjectProjectAiGatewayKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectAiGatewayKeysKeyIdRouteHandler: RouteHandler<
  typeof getProjectProjectAiGatewayKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectAiGatewayKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectAiGatewayKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProjectProjectAiGatewayKeysKeyIdRouteHandler: RouteHandler<
  typeof patchProjectProjectAiGatewayKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectAiGatewayKeyOwnersRouteHandler: RouteHandler<
  typeof getProjectProjectAiGatewayKeyOwnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectAiGatewayModelsRouteHandler: RouteHandler<
  typeof getProjectProjectAiGatewayModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectAiGatewayBudgetRouteHandler: RouteHandler<
  typeof getProjectProjectAiGatewayBudgetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectAiGatewayBudgetRouteHandler: RouteHandler<
  typeof putProjectProjectAiGatewayBudgetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectAiGatewayUsageRouteHandler: RouteHandler<
  typeof getProjectProjectAiGatewayUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectCloudsRouteHandler: RouteHandler<
  typeof getProjectProjectCloudsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectVpcPeeringConnectionTypesRouteHandler: RouteHandler<
  typeof getProjectProjectVpcPeeringConnectionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectAlertsRouteHandler: RouteHandler<
  typeof getProjectProjectAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectRouteHandler: RouteHandler<typeof postProjectRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectRouteHandler: RouteHandler<typeof getProjectRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectRouteHandler: RouteHandler<
  typeof deleteProjectProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectRouteHandler: RouteHandler<typeof getProjectProjectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putProjectProjectRouteHandler: RouteHandler<typeof putProjectProjectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProjectProjectDownloadSbomFileFormatDownloadCookieRouteHandler: RouteHandler<
  typeof getProjectProjectDownloadSbomFileFormatDownloadCookieRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectGenerateSbomDownloadUrlFileFormatRouteHandler: RouteHandler<
  typeof getProjectProjectGenerateSbomDownloadUrlFileFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectEventsRouteHandler: RouteHandler<
  typeof getProjectProjectEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectInviteRouteHandler: RouteHandler<
  typeof postProjectProjectInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectInviteInviteVerificationCodeRouteHandler: RouteHandler<
  typeof postProjectProjectInviteInviteVerificationCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectInviteInvitedEmailRouteHandler: RouteHandler<
  typeof deleteProjectProjectInviteInvitedEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectPrivatelinkAvailabilityRouteHandler: RouteHandler<
  typeof getProjectProjectPrivatelinkAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceTypesServiceTypePlansRouteHandler: RouteHandler<
  typeof getProjectProjectServiceTypesServiceTypePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectPricingServiceTypesServiceTypePlansServicePlanCloudsCloudRouteHandler: RouteHandler<
  typeof getProjectProjectPricingServiceTypesServiceTypePlansServicePlanCloudsCloudRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceTypesServiceTypePlansServicePlanRouteHandler: RouteHandler<
  typeof getProjectProjectServiceTypesServiceTypePlansServicePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceTypesServiceTypeRouteHandler: RouteHandler<
  typeof getProjectProjectServiceTypesServiceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceTypesRouteHandler: RouteHandler<
  typeof getProjectProjectServiceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectTagsRouteHandler: RouteHandler<
  typeof getProjectProjectTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectTagsRouteHandler: RouteHandler<
  typeof putProjectProjectTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProjectProjectTagsRouteHandler: RouteHandler<
  typeof patchProjectProjectTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectUsersRouteHandler: RouteHandler<
  typeof getProjectProjectUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectUserUserEmailRouteHandler: RouteHandler<
  typeof deleteProjectProjectUserUserEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectUserUserEmailRouteHandler: RouteHandler<
  typeof putProjectProjectUserUserEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectVpcsRouteHandler: RouteHandler<
  typeof postProjectProjectVpcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectVpcsRouteHandler: RouteHandler<
  typeof getProjectProjectVpcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectVpcsProjectVpcIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectVpcsProjectVpcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectVpcsProjectVpcIdRouteHandler: RouteHandler<
  typeof getProjectProjectVpcsProjectVpcIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectVpcsProjectVpcIdPeeringConnectionsRouteHandler: RouteHandler<
  typeof postProjectProjectVpcsProjectVpcIdPeeringConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerVpcsPeerVpcRouteHandler: RouteHandler<
  typeof deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerVpcsPeerVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectVpcsProjectVpcIdUserPeerNetworkCidrsRouteHandler: RouteHandler<
  typeof putProjectProjectVpcsProjectVpcIdUserPeerNetworkCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerVpcsPeerVpcPeerRegionsPeerRegionRouteHandler: RouteHandler<
  typeof deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerVpcsPeerVpcPeerRegionsPeerRegionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerResourceGroupsPeerResourceGroupPeerVpcsPeerVpcRouteHandler: RouteHandler<
  typeof deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerResourceGroupsPeerResourceGroupPeerVpcsPeerVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectVpcsProjectVpcIdPeeringConnectionsRefreshRouteHandler: RouteHandler<
  typeof postProjectProjectVpcsProjectVpcIdPeeringConnectionsRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectCreditsRouteHandler: RouteHandler<
  typeof postProjectProjectCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectCreditsRouteHandler: RouteHandler<
  typeof getProjectProjectCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectInvoiceInvoiceNumberDownloadCookieRouteHandler: RouteHandler<
  typeof getProjectProjectInvoiceInvoiceNumberDownloadCookieRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectInvoiceRouteHandler: RouteHandler<
  typeof getProjectProjectInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectKmsCaRouteHandler: RouteHandler<
  typeof getProjectProjectKmsCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectSecretsCmksCmkIdAccessCheckRouteHandler: RouteHandler<
  typeof postProjectProjectSecretsCmksCmkIdAccessCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectSecretsCmksAccessorsRouteHandler: RouteHandler<
  typeof getProjectProjectSecretsCmksAccessorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectSecretsCmksRouteHandler: RouteHandler<
  typeof postProjectProjectSecretsCmksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectSecretsCmksRouteHandler: RouteHandler<
  typeof getProjectProjectSecretsCmksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectSecretsCmksCmkIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectSecretsCmksCmkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectSecretsCmksCmkIdRouteHandler: RouteHandler<
  typeof getProjectProjectSecretsCmksCmkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectSecretsCmksCmkIdRouteHandler: RouteHandler<
  typeof postProjectProjectSecretsCmksCmkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectSecretsCmksCmkIdServiceAssociationsRouteHandler: RouteHandler<
  typeof getProjectProjectSecretsCmksCmkIdServiceAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameApplicationRedeployRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameApplicationRedeployRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameClickhouseQueryRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameClickhouseQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameClickhouseQueryRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameClickhouseQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameClickhouseDbRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameClickhouseDbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameClickhouseDbRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameClickhouseDbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameClickhouseDbDatabaseRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameClickhouseDbDatabaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameClickhouseUserUserUuidPasswordRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameClickhouseUserUserUuidPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameClickhouseQueryStatsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameClickhouseQueryStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameClickhouseRoleRoleUuidRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameClickhouseRoleRoleUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameClickhouseRoleRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameClickhouseRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameClickhouseTieredStorageSummaryRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameClickhouseTieredStorageSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameClickhouseUserRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameClickhouseUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameClickhouseUserRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameClickhouseUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameClickhouseUserUserUuidRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameClickhouseUserUserUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdCancelRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdCancelRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkApplicationRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkApplicationRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkJarApplicationRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkJarApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkJarApplicationRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkJarApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkApplicationApplicationIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameFlinkApplicationApplicationIdRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameFlinkApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionApplicationVersionIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionApplicationVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionApplicationVersionIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionApplicationVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionApplicationVersionIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionApplicationVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionApplicationVersionIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionApplicationVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkJobJobIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkJobJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkJobRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameFlinkOverviewRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameFlinkOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdStopRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdStopRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionValidateRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameAclRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameAclRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameAclKafkaAclIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameAclKafkaAclIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameConnectorsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameConnectorsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameConnectorsConnectorNameRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameConnectorsConnectorNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameConnectorsConnectorNameRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameConnectorsConnectorNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameAvailableConnectorsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameAvailableConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameConnectorPluginsConnectorNameConfigurationRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameConnectorPluginsConnectorNameConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameConnectorsConnectorNameStatusRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameConnectorsConnectorNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameConnectorsConnectorNamePauseRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameConnectorsConnectorNamePauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameConnectorsConnectorNameRestartRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameConnectorsConnectorNameRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameConnectorsConnectorNameTasksTaskIdRestartRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameConnectorsConnectorNameTasksTaskIdRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameConnectorsConnectorNameResumeRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameConnectorsConnectorNameResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameConnectorsConnectorNameStopRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameConnectorsConnectorNameStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameValidateCustomPluginClassesRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameValidateCustomPluginClassesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameKafkaAclRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameKafkaAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaAclRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameKafkaAclKafkaAclIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameKafkaAclKafkaAclIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaAclKafkaAclIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaAclKafkaAclIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameQuotaRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameQuotaRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameQuotaRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameQuotaDescribeRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameQuotaDescribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageByTopicRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageByTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageTotalRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageTotalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaTieredStorageSummaryRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaTieredStorageSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameTopicRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameTopicRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameTopicTopicNameRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameTopicTopicNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameTopicTopicNameRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameTopicTopicNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameTopicTopicNameRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameTopicTopicNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameMessagesRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameProduceRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameProduceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameKafkaSchemaRegistryAclRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameKafkaSchemaRegistryAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaSchemaRegistryAclRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaSchemaRegistryAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameKafkaSchemaRegistryAclSchemaRegistryAclIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameKafkaSchemaRegistryAclSchemaRegistryAclIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameKafkaSchemaCompatibilitySubjectsSubjectNameVersionsVersionIdRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameKafkaSchemaCompatibilitySubjectsSubjectNameVersionsVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaSchemaConfigRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaSchemaConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameKafkaSchemaConfigRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameKafkaSchemaConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaSchemaSchemasIdsSchemaIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaSchemaSchemasIdsSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdSchemaRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameKafkaSchemaSubjectsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameKafkaSchemaSubjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameMirrormakerReplicationFlowsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameMirrormakerReplicationFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameMirrormakerReplicationFlowsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameMirrormakerReplicationFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameMysqlQueryStatsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameMysqlQueryStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameOpensearchAclRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameOpensearchAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameOpensearchAclRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameOpensearchAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameOpensearchAclRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameOpensearchAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameOpensearchIndexPatternCloseRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameOpensearchIndexPatternCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameIndexCloseMultipleRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameIndexCloseMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameIndexIndexPatternRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameIndexIndexPatternRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameIndexRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameOpensearchIndexPatternOpenRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameOpensearchIndexPatternOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameIndexOpenMultipleRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameIndexOpenMultipleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameOpensearchSecurityRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameOpensearchSecurityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameOpensearchSecurityAdminRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameOpensearchSecurityAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameOpensearchSecurityAdminRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameOpensearchSecurityAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameAllRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameVerifyRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreCheckRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameStatusRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameStatusRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameOpensearchSnapshotRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameOpensearchSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameOpensearchSnapshotRestorationInProgressRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameOpensearchSnapshotRestorationInProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameOpensearchTieredStorageSummaryRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameOpensearchTieredStorageSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNamePgAvailableExtensionsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNamePgAvailableExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNamePgQueryStatsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNamePgQueryStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameQueryStatsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameQueryStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameConnectionPoolRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameConnectionPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameConnectionPoolPoolNameRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameConnectionPoolPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameConnectionPoolPoolNameRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameConnectionPoolPoolNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameThanosStorageSummaryRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameThanosStorageSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceTypes2RouteHandler: RouteHandler<
  typeof getProjectProjectServiceTypes2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameLogsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameTagsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameTagsRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProjectProjectServiceServiceNameTagsRouteHandler: RouteHandler<
  typeof patchProjectProjectServiceServiceNameTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameAlertsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameBackupToAnotherRegionReportRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameBackupToAnotherRegionReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameBackupsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameBackupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameQueryCancelRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameQueryCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceRouteHandler: RouteHandler<
  typeof postProjectProjectServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceRouteHandler: RouteHandler<
  typeof getProjectProjectServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameRotateInternalSecretsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameRotateInternalSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameRotateSecretServiceEncryptionKeyRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameRotateSecretServiceEncryptionKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameRotateTokenServiceSecretsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameRotateTokenServiceSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameDbRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameDbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameDbRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameDbRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameDbDbnameRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameDbDbnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameEnableWritesRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameEnableWritesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameMigrationRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameMaintenanceStartRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameMaintenanceStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameMetricsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNamePrivatelinkAwsConnectionsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNamePrivatelinkAwsConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNamePrivatelinkAwsRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNamePrivatelinkAwsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNamePrivatelinkAwsRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNamePrivatelinkAwsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNamePrivatelinkAwsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNamePrivatelinkAwsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNamePrivatelinkAwsRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNamePrivatelinkAwsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNamePrivatelinkAzureConnectionsPrivatelinkConnectionIdApproveRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNamePrivatelinkAzureConnectionsPrivatelinkConnectionIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNamePrivatelinkAzureConnectionsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNamePrivatelinkAzureConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNamePrivatelinkAzureConnectionsPrivatelinkConnectionIdRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNamePrivatelinkAzureConnectionsPrivatelinkConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNamePrivatelinkAzureRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNamePrivatelinkAzureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNamePrivatelinkAzureRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNamePrivatelinkAzureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNamePrivatelinkAzureRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNamePrivatelinkAzureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNamePrivatelinkAzureRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNamePrivatelinkAzureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNamePrivatelinkAzureRefreshRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNamePrivatelinkAzureRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNamePrivatelinkGoogleConnectionsPrivatelinkConnectionIdApproveRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNamePrivatelinkGoogleConnectionsPrivatelinkConnectionIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNamePrivatelinkGoogleConnectionsRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNamePrivatelinkGoogleConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNamePrivatelinkGoogleRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNamePrivatelinkGoogleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNamePrivatelinkGoogleRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNamePrivatelinkGoogleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNamePrivatelinkGoogleRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNamePrivatelinkGoogleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNamePrivatelinkGoogleRefreshRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNamePrivatelinkGoogleRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameQueryActivityRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameQueryActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameQueryStatsResetRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameQueryStatsResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProjectProjectServiceServiceNameServiceTypeRouteHandler: RouteHandler<
  typeof patchProjectProjectServiceServiceNameServiceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameTaskRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameTaskTaskIdRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameTaskTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameUserRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameUserServiceUsernameRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameUserServiceUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectServiceServiceNameUserServiceUsernameRouteHandler: RouteHandler<
  typeof deleteProjectProjectServiceServiceNameUserServiceUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameUserServiceUsernameRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameUserServiceUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectServiceServiceNameUserServiceUsernameCredentialsResetRouteHandler: RouteHandler<
  typeof putProjectProjectServiceServiceNameUserServiceUsernameCredentialsResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectIntegrationRouteHandler: RouteHandler<
  typeof postProjectProjectIntegrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectIntegrationIntegrationIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectIntegrationIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectIntegrationIntegrationIdRouteHandler: RouteHandler<
  typeof getProjectProjectIntegrationIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectIntegrationIntegrationIdRouteHandler: RouteHandler<
  typeof putProjectProjectIntegrationIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectIntegrationEndpointRouteHandler: RouteHandler<
  typeof postProjectProjectIntegrationEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectIntegrationEndpointRouteHandler: RouteHandler<
  typeof getProjectProjectIntegrationEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectIntegrationEndpointIntegrationEndpointIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectIntegrationEndpointIntegrationEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectIntegrationEndpointIntegrationEndpointIdRouteHandler: RouteHandler<
  typeof getProjectProjectIntegrationEndpointIntegrationEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectProjectIntegrationEndpointIntegrationEndpointIdRouteHandler: RouteHandler<
  typeof putProjectProjectIntegrationEndpointIntegrationEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectIntegrationEndpointTypesRouteHandler: RouteHandler<
  typeof getProjectProjectIntegrationEndpointTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectServiceServiceNameIntegrationRouteHandler: RouteHandler<
  typeof getProjectProjectServiceServiceNameIntegrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectIntegrationTypesRouteHandler: RouteHandler<
  typeof getProjectProjectIntegrationTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectStaticIpsStaticIpAddressIdAssociationRouteHandler: RouteHandler<
  typeof postProjectProjectStaticIpsStaticIpAddressIdAssociationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectStaticIpsStaticIpAddressIdAssociationRouteHandler: RouteHandler<
  typeof deleteProjectProjectStaticIpsStaticIpAddressIdAssociationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectStaticIpAvailabilityRouteHandler: RouteHandler<
  typeof getProjectProjectStaticIpAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProjectProjectStaticIpsStaticIpAddressIdRouteHandler: RouteHandler<
  typeof patchProjectProjectStaticIpsStaticIpAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectProjectStaticIpsStaticIpAddressIdRouteHandler: RouteHandler<
  typeof deleteProjectProjectStaticIpsStaticIpAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectStaticIpsRouteHandler: RouteHandler<
  typeof postProjectProjectStaticIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectProjectStaticIpsRouteHandler: RouteHandler<
  typeof getProjectProjectStaticIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectProjectServiceServiceNameUpgradeValidationRouteHandler: RouteHandler<
  typeof postProjectProjectServiceServiceNameUpgradeValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
