import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const projectHandler = app
  .openapi(postProjectProjectAiGatewayKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectAiGatewayKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectProjectAiGatewayKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayKeyOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectAiGatewayBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectCloudsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectVpcPeeringConnectionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectDownloadSbomFileFormatDownloadCookieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectGenerateSbomDownloadUrlFileFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectInviteInviteVerificationCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectInviteInvitedEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectPrivatelinkAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceTypesServiceTypePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectPricingServiceTypesServiceTypePlansServicePlanCloudsCloudRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceTypesServiceTypePlansServicePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceTypesServiceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectProjectTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectUserUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectUserUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectVpcsProjectVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectVpcsProjectVpcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectVpcsProjectVpcIdPeeringConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerVpcsPeerVpcRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putProjectProjectVpcsProjectVpcIdUserPeerNetworkCidrsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerVpcsPeerVpcPeerRegionsPeerRegionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteProjectProjectVpcsProjectVpcIdPeeringConnectionsPeerAccountsPeerCloudAccountPeerResourceGroupsPeerResourceGroupPeerVpcsPeerVpcRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectProjectVpcsProjectVpcIdPeeringConnectionsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectInvoiceInvoiceNumberDownloadCookieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectKmsCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSecretsCmksCmkIdAccessCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSecretsCmksAccessorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSecretsCmksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSecretsCmksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectSecretsCmksCmkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSecretsCmksCmkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSecretsCmksCmkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSecretsCmksCmkIdServiceAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameApplicationRedeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameClickhouseQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameClickhouseDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameClickhouseDbDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameClickhouseUserUserUuidPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseQueryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameClickhouseRoleRoleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseTieredStorageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameClickhouseUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameClickhouseUserUserUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectProjectServiceServiceNameFlinkApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameFlinkApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameFlinkJarApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameFlinkJarApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameFlinkApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameFlinkApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionApplicationVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionApplicationVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionApplicationVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdVersionApplicationVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameFlinkJobJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameFlinkJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameFlinkOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNameFlinkApplicationApplicationIdDeploymentDeploymentIdStopRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectProjectServiceServiceNameFlinkJarApplicationApplicationIdDeploymentDeploymentIdStopRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectProjectServiceServiceNameFlinkApplicationApplicationIdVersionValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectProjectServiceServiceNameAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameAclKafkaAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameConnectorsConnectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameConnectorsConnectorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameAvailableConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectProjectServiceServiceNameConnectorPluginsConnectorNameConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameConnectorsConnectorNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameConnectorsConnectorNamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameConnectorsConnectorNameRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNameConnectorsConnectorNameTasksTaskIdRestartRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectProjectServiceServiceNameConnectorsConnectorNameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameConnectorsConnectorNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameValidateCustomPluginClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameKafkaAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameKafkaAclKafkaAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaAclKafkaAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameQuotaDescribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageByTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaTieredStorageStorageUsageTotalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaTieredStorageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameTopicTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameTopicTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameTopicTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameKafkaRestTopicsTopicNameProduceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameKafkaSchemaRegistryAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaRegistryAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectProjectServiceServiceNameKafkaSchemaRegistryAclSchemaRegistryAclIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectProjectServiceServiceNameKafkaSchemaCompatibilitySubjectsSubjectNameVersionsVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameKafkaSchemaConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaSchemasIdsSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameKafkaSchemaConfigSubjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectProjectServiceServiceNameKafkaSchemaSubjectsSubjectNameVersionsVersionIdSchemaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameKafkaSchemaSubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameMirrormakerReplicationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameMirrormakerReplicationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProjectProjectServiceServiceNameMirrormakerReplicationFlowsSourceClusterTargetClusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectProjectServiceServiceNameMysqlQueryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameOpensearchAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameOpensearchAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameOpensearchAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameOpensearchIndexPatternCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameIndexCloseMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameIndexIndexPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameOpensearchIndexPatternOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameIndexOpenMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameOpensearchSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameOpensearchSecurityAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameOpensearchSecurityAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreCheckRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameOpensearchSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameOpensearchSnapshotRestorationInProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameOpensearchTieredStorageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNamePgAvailableExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNamePgQueryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameQueryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameConnectionPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameConnectionPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameConnectionPoolPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameThanosStorageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceTypes2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectProjectServiceServiceNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameBackupToAnotherRegionReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameQueryCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameRotateInternalSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameRotateSecretServiceEncryptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameRotateTokenServiceSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameDbDbnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameEnableWritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNamePrivatelinkAwsConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNamePrivatelinkAwsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNamePrivatelinkAwsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNamePrivatelinkAwsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNamePrivatelinkAwsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNamePrivatelinkAzureConnectionsPrivatelinkConnectionIdApproveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNamePrivatelinkAzureConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putProjectProjectServiceServiceNamePrivatelinkAzureConnectionsPrivatelinkConnectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectProjectServiceServiceNamePrivatelinkAzureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNamePrivatelinkAzureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNamePrivatelinkAzureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNamePrivatelinkAzureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNamePrivatelinkAzureRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNamePrivatelinkGoogleConnectionsPrivatelinkConnectionIdApproveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNamePrivatelinkGoogleConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNamePrivatelinkGoogleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNamePrivatelinkGoogleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNamePrivatelinkGoogleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNamePrivatelinkGoogleRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameQueryActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameQueryStatsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectProjectServiceServiceNameServiceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameTaskTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameUserServiceUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameUserServiceUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameUserServiceUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameUserServiceUsernameCredentialsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectIntegrationIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectIntegrationIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectIntegrationIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectIntegrationEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectIntegrationEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectIntegrationEndpointIntegrationEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectIntegrationEndpointIntegrationEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectIntegrationEndpointIntegrationEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectIntegrationEndpointTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectIntegrationTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectStaticIpsStaticIpAddressIdAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectStaticIpsStaticIpAddressIdAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectStaticIpAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectProjectStaticIpsStaticIpAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectStaticIpsStaticIpAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectStaticIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectStaticIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameUpgradeValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
