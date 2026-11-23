import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiApiKeyIdRoute,
  deleteAiDeploymentIdRoute,
  deleteAiModelIdRoute,
  deleteAntiAffinityGroupIdRoute,
  deleteApiKeyIdRoute,
  deleteBlockStorageIdRoute,
  deleteBlockStorageSnapshotIdRoute,
  deleteDbaasClickhouseNameRoute,
  deleteDbaasClickhouseServiceNameRoleRoleUuidRoute,
  deleteDbaasClickhouseServiceNameUserUserUuidRoute,
  deleteDbaasExternalEndpointDatadogEndpointIdRoute,
  deleteDbaasExternalEndpointElasticsearchEndpointIdRoute,
  deleteDbaasExternalEndpointOpensearchEndpointIdRoute,
  deleteDbaasExternalEndpointPrometheusEndpointIdRoute,
  deleteDbaasExternalEndpointRsyslogEndpointIdRoute,
  deleteDbaasGrafanaNameRoute,
  deleteDbaasIntegrationIdRoute,
  deleteDbaasKafkaNameRoute,
  deleteDbaasKafkaNameSchemaRegistryAclConfigAclIdRoute,
  deleteDbaasKafkaNameTopicAclConfigAclIdRoute,
  deleteDbaasKafkaServiceNameUserUsernameRoute,
  deleteDbaasMysqlNameRoute,
  deleteDbaasMysqlServiceNameDatabaseDatabaseNameRoute,
  deleteDbaasMysqlServiceNameUserUsernameRoute,
  deleteDbaasOpensearchNameRoute,
  deleteDbaasOpensearchServiceNameUserUsernameRoute,
  deleteDbaasPostgresNameRoute,
  deleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute,
  deleteDbaasPostgresServiceNameDatabaseDatabaseNameRoute,
  deleteDbaasPostgresServiceNameUserUsernameRoute,
  deleteDbaasServiceNameRoute,
  deleteDbaasThanosNameRoute,
  deleteDbaasValkeyNameRoute,
  deleteDbaasValkeyServiceNameUserUsernameRoute,
  deleteDnsDomainDomainIdRecordRecordIdRoute,
  deleteDnsDomainIdRoute,
  deleteElasticIpIdFieldRoute,
  deleteElasticIpIdRoute,
  deleteIamRoleIdRoute,
  deleteInstanceIdFieldRoute,
  deleteInstanceIdRoute,
  deleteInstancePoolIdFieldRoute,
  deleteInstancePoolIdRoute,
  deleteLoadBalancerIdFieldRoute,
  deleteLoadBalancerIdRoute,
  deleteLoadBalancerIdServiceServiceIdFieldRoute,
  deleteLoadBalancerIdServiceServiceIdRoute,
  deletePrivateNetworkIdFieldRoute,
  deletePrivateNetworkIdRoute,
  deleteReverseDnsElasticIpIdRoute,
  deleteReverseDnsInstanceIdRoute,
  deleteSecurityGroupIdRoute,
  deleteSecurityGroupIdRulesRuleIdRoute,
  deleteSksClusterIdNodepoolSksNodepoolIdRoute,
  deleteSksClusterIdRoute,
  deleteSnapshotIdRoute,
  deleteSshKeyNameRoute,
  deleteTemplateIdRoute,
  deleteUserIdRoute,
  deleteVpcIdRoute,
  deleteVpcVpcIdSubnetIdRoute,
  deleteVpcVpcIdSubnetSubnetIdRouteIdRoute,
  getAiApiKeyIdRevealRoute,
  getAiApiKeyIdRoute,
  getAiApiKeyRoute,
  getAiDeploymentIdApiKeyRoute,
  getAiDeploymentIdLogsRoute,
  getAiDeploymentIdRoute,
  getAiDeploymentRoute,
  getAiHelpInferenceEngineParametersRoute,
  getAiInstanceTypeRoute,
  getAiModelIdRoute,
  getAiModelRoute,
  getAiQuotaRoute,
  getAntiAffinityGroupIdRoute,
  getAntiAffinityGroupRoute,
  getApiKeyIdRoute,
  getApiKeyRoute,
  getBlockStorageIdRoute,
  getBlockStorageRoute,
  getBlockStorageSnapshotIdRoute,
  getBlockStorageSnapshotRoute,
  getConsoleIdRoute,
  getDbaasCaCertificateRoute,
  getDbaasClickhouseNameRoute,
  getDbaasClickhouseServiceNameAclConfigRoute,
  getDbaasClickhouseServiceNameRoleRoute,
  getDbaasClickhouseServiceNameUserRoute,
  getDbaasClickhouseServiceNameUserUsernamePasswordRevealRoute,
  getDbaasExternalEndpointDatadogEndpointIdRoute,
  getDbaasExternalEndpointElasticsearchEndpointIdRoute,
  getDbaasExternalEndpointOpensearchEndpointIdRoute,
  getDbaasExternalEndpointPrometheusEndpointIdRoute,
  getDbaasExternalEndpointRsyslogEndpointIdRoute,
  getDbaasExternalEndpointsRoute,
  getDbaasExternalEndpointTypesRoute,
  getDbaasExternalIntegrationIntegrationIdRoute,
  getDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute,
  getDbaasExternalIntegrationsServiceNameRoute,
  getDbaasGrafanaNameRoute,
  getDbaasGrafanaServiceNameUserUsernamePasswordRevealRoute,
  getDbaasIntegrationIdRoute,
  getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeRoute,
  getDbaasIntegrationTypesRoute,
  getDbaasKafkaNameAclConfigRoute,
  getDbaasKafkaNameRoute,
  getDbaasKafkaServiceNameConnectPasswordRevealRoute,
  getDbaasKafkaServiceNameUserUsernamePasswordRevealRoute,
  getDbaasMigrationStatusNameRoute,
  getDbaasMysqlNameRoute,
  getDbaasMysqlServiceNameUserUsernamePasswordRevealRoute,
  getDbaasOpensearchNameAclConfigRoute,
  getDbaasOpensearchNameRoute,
  getDbaasOpensearchServiceNameUserUsernamePasswordRevealRoute,
  getDbaasPostgresNameRoute,
  getDbaasPostgresServiceNameUserUsernamePasswordRevealRoute,
  getDbaasServiceRoute,
  getDbaasServiceTypeRoute,
  getDbaasServiceTypeServiceTypeNameRoute,
  getDbaasSettingsClickhouseRoute,
  getDbaasSettingsGrafanaRoute,
  getDbaasSettingsKafkaRoute,
  getDbaasSettingsMysqlRoute,
  getDbaasSettingsOpensearchRoute,
  getDbaasSettingsPgRoute,
  getDbaasSettingsThanosRoute,
  getDbaasSettingsValkeyRoute,
  getDbaasTaskServiceIdRoute,
  getDbaasThanosNameRoute,
  getDbaasThanosServiceNameUserUsernamePasswordRevealRoute,
  getDbaasValkeyNameRoute,
  getDbaasValkeyServiceNameUserRoute,
  getDbaasValkeyServiceNameUserUsernamePasswordRevealRoute,
  getDeployTargetIdRoute,
  getDeployTargetRoute,
  getDnsDomainDomainIdRecordRecordIdRoute,
  getDnsDomainDomainIdRecordRoute,
  getDnsDomainIdRoute,
  getDnsDomainIdZoneRoute,
  getDnsDomainRoute,
  getElasticIpIdRoute,
  getElasticIpRoute,
  getEnvImpactPeriodRoute,
  getEnvironmentalImpactReportRoute,
  getEventRoute,
  getIamOrganizationPolicyRoute,
  getIamRoleIdRoute,
  getIamRoleRoute,
  getInstanceIdPasswordRoute,
  getInstanceIdRoute,
  getInstancePoolIdRoute,
  getInstancePoolRoute,
  getInstanceRoute,
  getInstanceTypeIdRoute,
  getInstanceTypeRoute,
  getKmsKeyIdListKeyRotationsRoute,
  getKmsKeyIdRoute,
  getKmsKeyRoute,
  getLiveBalanceRoute,
  getLoadBalancerIdRoute,
  getLoadBalancerIdServiceServiceIdRoute,
  getLoadBalancerRoute,
  getOperationIdRoute,
  getOrganizationRoute,
  getPrivateNetworkIdRoute,
  getPrivateNetworkRoute,
  getQuotaEntityRoute,
  getQuotaRoute,
  getReverseDnsElasticIpIdRoute,
  getReverseDnsInstanceIdRoute,
  getSecurityGroupIdRoute,
  getSecurityGroupRoute,
  getSksClusterDeprecatedResourcesIdRoute,
  getSksClusterIdAuthorityAuthorityCertRoute,
  getSksClusterIdInspectionRoute,
  getSksClusterIdNodepoolSksNodepoolIdRoute,
  getSksClusterIdRoute,
  getSksClusterRoute,
  getSksClusterVersionRoute,
  getSksTemplateKubeVersionVariantRoute,
  getSnapshotIdRoute,
  getSnapshotRoute,
  getSosBucketPresignedUrlRoute,
  getSosBucketsUsageRoute,
  getSshKeyNameRoute,
  getSshKeyRoute,
  getTemplateIdRoute,
  getTemplateRoute,
  getUsageReportRoute,
  getUserRoute,
  getVpcIdRoute,
  getVpcRoute,
  getVpcVpcIdRouteRoute,
  getVpcVpcIdSubnetIdRoute,
  getVpcVpcIdSubnetRoute,
  getVpcVpcIdSubnetSubnetIdRouteRoute,
  getZoneRoute,
  patchAiApiKeyIdRoute,
  patchAiDeploymentIdRoute,
  postAiApiKeyIdRotateRoute,
  postAiApiKeyRoute,
  postAiDeploymentIdScaleRoute,
  postAiDeploymentRoute,
  postAiModelRoute,
  postAntiAffinityGroupRoute,
  postApiKeyRoute,
  postBlockStorageIdCreateSnapshotRoute,
  postBlockStorageRoute,
  postDbaasClickhouseNameRoute,
  postDbaasClickhouseServiceNameUserRoute,
  postDbaasExternalEndpointDatadogNameRoute,
  postDbaasExternalEndpointElasticsearchNameRoute,
  postDbaasExternalEndpointOpensearchNameRoute,
  postDbaasExternalEndpointPrometheusNameRoute,
  postDbaasExternalEndpointRsyslogNameRoute,
  postDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute,
  postDbaasGrafanaNameRoute,
  postDbaasIntegrationRoute,
  postDbaasKafkaNameRoute,
  postDbaasKafkaNameSchemaRegistryAclConfigRoute,
  postDbaasKafkaNameTopicAclConfigRoute,
  postDbaasKafkaServiceNameUserRoute,
  postDbaasMysqlNameMigrationStopRoute,
  postDbaasMysqlNameRoute,
  postDbaasMysqlServiceNameDatabaseRoute,
  postDbaasMysqlServiceNameUserRoute,
  postDbaasOpensearchNameRoute,
  postDbaasOpensearchServiceNameUserRoute,
  postDbaasPostgresNameMigrationStopRoute,
  postDbaasPostgresNameRoute,
  postDbaasPostgresServiceNameConnectionPoolRoute,
  postDbaasPostgresServiceNameDatabaseRoute,
  postDbaasPostgresServiceNameUserRoute,
  postDbaasPostgresServiceUpgradeCheckRoute,
  postDbaasServiceLogsServiceNameRoute,
  postDbaasServiceMetricsServiceNameRoute,
  postDbaasTaskMigrationCheckServiceRoute,
  postDbaasThanosNameRoute,
  postDbaasValkeyNameMigrationStopRoute,
  postDbaasValkeyNameRoute,
  postDbaasValkeyServiceNameUserRoute,
  postDnsDomainDomainIdRecordRoute,
  postDnsDomainRoute,
  postElasticIpRoute,
  postEnvironmentalImpactEstimateRoute,
  postIamOrganizationPolicyResetRoute,
  postIamRoleIdAssumeRoute,
  postIamRoleRoute,
  postInstanceIdCreateSnapshotRoute,
  postInstanceIdEnableTpmRoute,
  postInstanceInstanceIdRevertSnapshotRoute,
  postInstancePoolRoute,
  postInstanceRoute,
  postKmsKeyIdCancelDeletionRoute,
  postKmsKeyIdDecryptRoute,
  postKmsKeyIdDisableKeyRotationRoute,
  postKmsKeyIdDisableRoute,
  postKmsKeyIdEnableKeyRotationRoute,
  postKmsKeyIdEnableRoute,
  postKmsKeyIdEncryptRoute,
  postKmsKeyIdGenerateDataKeyRoute,
  postKmsKeyIdReEncryptRoute,
  postKmsKeyIdReplicateRoute,
  postKmsKeyIdRotateRoute,
  postKmsKeyIdScheduleDeletionRoute,
  postKmsKeyRoute,
  postLoadBalancerIdServiceRoute,
  postLoadBalancerRoute,
  postPrivateNetworkRoute,
  postReverseDnsElasticIpIdRoute,
  postReverseDnsInstanceIdRoute,
  postSecurityGroupIdRulesRoute,
  postSecurityGroupRoute,
  postSksClusterIdNodepoolRoute,
  postSksClusterKubeconfigIdRoute,
  postSksClusterRoute,
  postSnapshotIdExportRoute,
  postSnapshotIdPromoteRoute,
  postSshKeyRoute,
  postTemplateIdRoute,
  postTemplateRoute,
  postUserRoute,
  postVpcRoute,
  postVpcVpcIdSubnetRoute,
  postVpcVpcIdSubnetSubnetIdRouteRoute,
  putBlockStorageIdAttachRoute,
  putBlockStorageIdDetachRoute,
  putBlockStorageIdResizeVolumeRoute,
  putBlockStorageIdRoute,
  putBlockStorageSnapshotIdRoute,
  putDbaasClickhouseNameMaintenanceStartRoute,
  putDbaasClickhouseNameRoute,
  putDbaasClickhouseServiceNameUserUsernamePasswordResetRoute,
  putDbaasExternalEndpointDatadogEndpointIdRoute,
  putDbaasExternalEndpointElasticsearchEndpointIdRoute,
  putDbaasExternalEndpointOpensearchEndpointIdRoute,
  putDbaasExternalEndpointPrometheusEndpointIdRoute,
  putDbaasExternalEndpointRsyslogEndpointIdRoute,
  putDbaasExternalEndpointSourceServiceNameAttachRoute,
  putDbaasExternalEndpointSourceServiceNameDetachRoute,
  putDbaasGrafanaNameMaintenanceStartRoute,
  putDbaasGrafanaNameRoute,
  putDbaasGrafanaServiceNameUserUsernamePasswordResetRoute,
  putDbaasIntegrationIdRoute,
  putDbaasKafkaNameMaintenanceStartRoute,
  putDbaasKafkaNameRoute,
  putDbaasKafkaServiceNameUserUsernamePasswordResetRoute,
  putDbaasMysqlNameEnableWritesRoute,
  putDbaasMysqlNameMaintenanceStartRoute,
  putDbaasMysqlNameRoute,
  putDbaasMysqlServiceNameUserUsernamePasswordResetRoute,
  putDbaasOpensearchNameAclConfigRoute,
  putDbaasOpensearchNameMaintenanceStartRoute,
  putDbaasOpensearchNameRoute,
  putDbaasOpensearchServiceNameUserUsernamePasswordResetRoute,
  putDbaasPostgresNameMaintenanceStartRoute,
  putDbaasPostgresNameRoute,
  putDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute,
  putDbaasPostgresServiceNameUserUsernameAllowReplicationRoute,
  putDbaasPostgresServiceNameUserUsernamePasswordResetRoute,
  putDbaasThanosNameMaintenanceStartRoute,
  putDbaasThanosNameRoute,
  putDbaasValkeyNameMaintenanceStartRoute,
  putDbaasValkeyNameRoute,
  putDbaasValkeyServiceNameUserUsernamePasswordResetRoute,
  putDbaasValkeyServiceNameUserUsernameRoute,
  putDnsDomainDomainIdRecordRecordIdRoute,
  putElasticIpIdAttachRoute,
  putElasticIpIdDetachRoute,
  putElasticIpIdRoute,
  putIamOrganizationPolicyRoute,
  putIamRoleIdPolicyRoute,
  putIamRoleIdRoute,
  putInstanceIdAddProtectionRoute,
  putInstanceIdRebootRoute,
  putInstanceIdRemoveProtectionRoute,
  putInstanceIdResetPasswordRoute,
  putInstanceIdResetRoute,
  putInstanceIdResizeDiskRoute,
  putInstanceIdRoute,
  putInstanceIdScaleRoute,
  putInstanceIdStartRoute,
  putInstanceIdStopRoute,
  putInstancePoolIdEvictRoute,
  putInstancePoolIdRoute,
  putInstancePoolIdScaleRoute,
  putLoadBalancerIdRoute,
  putLoadBalancerIdServiceServiceIdRoute,
  putPrivateNetworkIdAttachRoute,
  putPrivateNetworkIdDetachRoute,
  putPrivateNetworkIdRoute,
  putPrivateNetworkIdUpdateIpRoute,
  putSecurityGroupIdAddSourceRoute,
  putSecurityGroupIdAttachRoute,
  putSecurityGroupIdDetachRoute,
  putSecurityGroupIdRemoveSourceRoute,
  putSksClusterIdGenerateKarpenterExoscaleNodeclassRoute,
  putSksClusterIdGenerateKarpenterNodepoolRoute,
  putSksClusterIdNodepoolSksNodepoolIdEvictRoute,
  putSksClusterIdNodepoolSksNodepoolIdRoute,
  putSksClusterIdNodepoolSksNodepoolIdScaleRoute,
  putSksClusterIdRotateCcmCredentialsRoute,
  putSksClusterIdRotateCsiCredentialsRoute,
  putSksClusterIdRotateKarpenterCredentialsRoute,
  putSksClusterIdRotateOperatorsCaRoute,
  putSksClusterIdRoute,
  putSksClusterIdUpgradeRoute,
  putSksClusterIdUpgradeServiceLevelRoute,
  putTemplateIdRoute,
  putUserIdRoute,
  putVpcIdRoute,
  putVpcVpcIdSubnetIdRoute,
  putVpcVpcIdSubnetSubnetIdAttachRoute,
  putVpcVpcIdSubnetSubnetIdDetachRoute,
} from './routes'
import {
  deleteAiApiKeyIdRouteHandler,
  deleteAiDeploymentIdRouteHandler,
  deleteAiModelIdRouteHandler,
  deleteAntiAffinityGroupIdRouteHandler,
  deleteApiKeyIdRouteHandler,
  deleteBlockStorageIdRouteHandler,
  deleteBlockStorageSnapshotIdRouteHandler,
  deleteDbaasClickhouseNameRouteHandler,
  deleteDbaasClickhouseServiceNameRoleRoleUuidRouteHandler,
  deleteDbaasClickhouseServiceNameUserUserUuidRouteHandler,
  deleteDbaasExternalEndpointDatadogEndpointIdRouteHandler,
  deleteDbaasExternalEndpointElasticsearchEndpointIdRouteHandler,
  deleteDbaasExternalEndpointOpensearchEndpointIdRouteHandler,
  deleteDbaasExternalEndpointPrometheusEndpointIdRouteHandler,
  deleteDbaasExternalEndpointRsyslogEndpointIdRouteHandler,
  deleteDbaasGrafanaNameRouteHandler,
  deleteDbaasIntegrationIdRouteHandler,
  deleteDbaasKafkaNameRouteHandler,
  deleteDbaasKafkaNameSchemaRegistryAclConfigAclIdRouteHandler,
  deleteDbaasKafkaNameTopicAclConfigAclIdRouteHandler,
  deleteDbaasKafkaServiceNameUserUsernameRouteHandler,
  deleteDbaasMysqlNameRouteHandler,
  deleteDbaasMysqlServiceNameDatabaseDatabaseNameRouteHandler,
  deleteDbaasMysqlServiceNameUserUsernameRouteHandler,
  deleteDbaasOpensearchNameRouteHandler,
  deleteDbaasOpensearchServiceNameUserUsernameRouteHandler,
  deleteDbaasPostgresNameRouteHandler,
  deleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRouteHandler,
  deleteDbaasPostgresServiceNameDatabaseDatabaseNameRouteHandler,
  deleteDbaasPostgresServiceNameUserUsernameRouteHandler,
  deleteDbaasServiceNameRouteHandler,
  deleteDbaasThanosNameRouteHandler,
  deleteDbaasValkeyNameRouteHandler,
  deleteDbaasValkeyServiceNameUserUsernameRouteHandler,
  deleteDnsDomainDomainIdRecordRecordIdRouteHandler,
  deleteDnsDomainIdRouteHandler,
  deleteElasticIpIdFieldRouteHandler,
  deleteElasticIpIdRouteHandler,
  deleteIamRoleIdRouteHandler,
  deleteInstanceIdFieldRouteHandler,
  deleteInstanceIdRouteHandler,
  deleteInstancePoolIdFieldRouteHandler,
  deleteInstancePoolIdRouteHandler,
  deleteLoadBalancerIdFieldRouteHandler,
  deleteLoadBalancerIdRouteHandler,
  deleteLoadBalancerIdServiceServiceIdFieldRouteHandler,
  deleteLoadBalancerIdServiceServiceIdRouteHandler,
  deletePrivateNetworkIdFieldRouteHandler,
  deletePrivateNetworkIdRouteHandler,
  deleteReverseDnsElasticIpIdRouteHandler,
  deleteReverseDnsInstanceIdRouteHandler,
  deleteSecurityGroupIdRouteHandler,
  deleteSecurityGroupIdRulesRuleIdRouteHandler,
  deleteSksClusterIdNodepoolSksNodepoolIdRouteHandler,
  deleteSksClusterIdRouteHandler,
  deleteSnapshotIdRouteHandler,
  deleteSshKeyNameRouteHandler,
  deleteTemplateIdRouteHandler,
  deleteUserIdRouteHandler,
  deleteVpcIdRouteHandler,
  deleteVpcVpcIdSubnetIdRouteHandler,
  deleteVpcVpcIdSubnetSubnetIdRouteIdRouteHandler,
  getAiApiKeyIdRevealRouteHandler,
  getAiApiKeyIdRouteHandler,
  getAiApiKeyRouteHandler,
  getAiDeploymentIdApiKeyRouteHandler,
  getAiDeploymentIdLogsRouteHandler,
  getAiDeploymentIdRouteHandler,
  getAiDeploymentRouteHandler,
  getAiHelpInferenceEngineParametersRouteHandler,
  getAiInstanceTypeRouteHandler,
  getAiModelIdRouteHandler,
  getAiModelRouteHandler,
  getAiQuotaRouteHandler,
  getAntiAffinityGroupIdRouteHandler,
  getAntiAffinityGroupRouteHandler,
  getApiKeyIdRouteHandler,
  getApiKeyRouteHandler,
  getBlockStorageIdRouteHandler,
  getBlockStorageRouteHandler,
  getBlockStorageSnapshotIdRouteHandler,
  getBlockStorageSnapshotRouteHandler,
  getConsoleIdRouteHandler,
  getDbaasCaCertificateRouteHandler,
  getDbaasClickhouseNameRouteHandler,
  getDbaasClickhouseServiceNameAclConfigRouteHandler,
  getDbaasClickhouseServiceNameRoleRouteHandler,
  getDbaasClickhouseServiceNameUserRouteHandler,
  getDbaasClickhouseServiceNameUserUsernamePasswordRevealRouteHandler,
  getDbaasExternalEndpointDatadogEndpointIdRouteHandler,
  getDbaasExternalEndpointElasticsearchEndpointIdRouteHandler,
  getDbaasExternalEndpointOpensearchEndpointIdRouteHandler,
  getDbaasExternalEndpointPrometheusEndpointIdRouteHandler,
  getDbaasExternalEndpointRsyslogEndpointIdRouteHandler,
  getDbaasExternalEndpointsRouteHandler,
  getDbaasExternalEndpointTypesRouteHandler,
  getDbaasExternalIntegrationIntegrationIdRouteHandler,
  getDbaasExternalIntegrationSettingsDatadogIntegrationIdRouteHandler,
  getDbaasExternalIntegrationsServiceNameRouteHandler,
  getDbaasGrafanaNameRouteHandler,
  getDbaasGrafanaServiceNameUserUsernamePasswordRevealRouteHandler,
  getDbaasIntegrationIdRouteHandler,
  getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeRouteHandler,
  getDbaasIntegrationTypesRouteHandler,
  getDbaasKafkaNameAclConfigRouteHandler,
  getDbaasKafkaNameRouteHandler,
  getDbaasKafkaServiceNameConnectPasswordRevealRouteHandler,
  getDbaasKafkaServiceNameUserUsernamePasswordRevealRouteHandler,
  getDbaasMigrationStatusNameRouteHandler,
  getDbaasMysqlNameRouteHandler,
  getDbaasMysqlServiceNameUserUsernamePasswordRevealRouteHandler,
  getDbaasOpensearchNameAclConfigRouteHandler,
  getDbaasOpensearchNameRouteHandler,
  getDbaasOpensearchServiceNameUserUsernamePasswordRevealRouteHandler,
  getDbaasPostgresNameRouteHandler,
  getDbaasPostgresServiceNameUserUsernamePasswordRevealRouteHandler,
  getDbaasServiceRouteHandler,
  getDbaasServiceTypeRouteHandler,
  getDbaasServiceTypeServiceTypeNameRouteHandler,
  getDbaasSettingsClickhouseRouteHandler,
  getDbaasSettingsGrafanaRouteHandler,
  getDbaasSettingsKafkaRouteHandler,
  getDbaasSettingsMysqlRouteHandler,
  getDbaasSettingsOpensearchRouteHandler,
  getDbaasSettingsPgRouteHandler,
  getDbaasSettingsThanosRouteHandler,
  getDbaasSettingsValkeyRouteHandler,
  getDbaasTaskServiceIdRouteHandler,
  getDbaasThanosNameRouteHandler,
  getDbaasThanosServiceNameUserUsernamePasswordRevealRouteHandler,
  getDbaasValkeyNameRouteHandler,
  getDbaasValkeyServiceNameUserRouteHandler,
  getDbaasValkeyServiceNameUserUsernamePasswordRevealRouteHandler,
  getDeployTargetIdRouteHandler,
  getDeployTargetRouteHandler,
  getDnsDomainDomainIdRecordRecordIdRouteHandler,
  getDnsDomainDomainIdRecordRouteHandler,
  getDnsDomainIdRouteHandler,
  getDnsDomainIdZoneRouteHandler,
  getDnsDomainRouteHandler,
  getElasticIpIdRouteHandler,
  getElasticIpRouteHandler,
  getEnvImpactPeriodRouteHandler,
  getEnvironmentalImpactReportRouteHandler,
  getEventRouteHandler,
  getIamOrganizationPolicyRouteHandler,
  getIamRoleIdRouteHandler,
  getIamRoleRouteHandler,
  getInstanceIdPasswordRouteHandler,
  getInstanceIdRouteHandler,
  getInstancePoolIdRouteHandler,
  getInstancePoolRouteHandler,
  getInstanceRouteHandler,
  getInstanceTypeIdRouteHandler,
  getInstanceTypeRouteHandler,
  getKmsKeyIdListKeyRotationsRouteHandler,
  getKmsKeyIdRouteHandler,
  getKmsKeyRouteHandler,
  getLiveBalanceRouteHandler,
  getLoadBalancerIdRouteHandler,
  getLoadBalancerIdServiceServiceIdRouteHandler,
  getLoadBalancerRouteHandler,
  getOperationIdRouteHandler,
  getOrganizationRouteHandler,
  getPrivateNetworkIdRouteHandler,
  getPrivateNetworkRouteHandler,
  getQuotaEntityRouteHandler,
  getQuotaRouteHandler,
  getReverseDnsElasticIpIdRouteHandler,
  getReverseDnsInstanceIdRouteHandler,
  getSecurityGroupIdRouteHandler,
  getSecurityGroupRouteHandler,
  getSksClusterDeprecatedResourcesIdRouteHandler,
  getSksClusterIdAuthorityAuthorityCertRouteHandler,
  getSksClusterIdInspectionRouteHandler,
  getSksClusterIdNodepoolSksNodepoolIdRouteHandler,
  getSksClusterIdRouteHandler,
  getSksClusterRouteHandler,
  getSksClusterVersionRouteHandler,
  getSksTemplateKubeVersionVariantRouteHandler,
  getSnapshotIdRouteHandler,
  getSnapshotRouteHandler,
  getSosBucketPresignedUrlRouteHandler,
  getSosBucketsUsageRouteHandler,
  getSshKeyNameRouteHandler,
  getSshKeyRouteHandler,
  getTemplateIdRouteHandler,
  getTemplateRouteHandler,
  getUsageReportRouteHandler,
  getUserRouteHandler,
  getVpcIdRouteHandler,
  getVpcRouteHandler,
  getVpcVpcIdRouteRouteHandler,
  getVpcVpcIdSubnetIdRouteHandler,
  getVpcVpcIdSubnetRouteHandler,
  getVpcVpcIdSubnetSubnetIdRouteRouteHandler,
  getZoneRouteHandler,
  patchAiApiKeyIdRouteHandler,
  patchAiDeploymentIdRouteHandler,
  postAiApiKeyIdRotateRouteHandler,
  postAiApiKeyRouteHandler,
  postAiDeploymentIdScaleRouteHandler,
  postAiDeploymentRouteHandler,
  postAiModelRouteHandler,
  postAntiAffinityGroupRouteHandler,
  postApiKeyRouteHandler,
  postBlockStorageIdCreateSnapshotRouteHandler,
  postBlockStorageRouteHandler,
  postDbaasClickhouseNameRouteHandler,
  postDbaasClickhouseServiceNameUserRouteHandler,
  postDbaasExternalEndpointDatadogNameRouteHandler,
  postDbaasExternalEndpointElasticsearchNameRouteHandler,
  postDbaasExternalEndpointOpensearchNameRouteHandler,
  postDbaasExternalEndpointPrometheusNameRouteHandler,
  postDbaasExternalEndpointRsyslogNameRouteHandler,
  postDbaasExternalIntegrationSettingsDatadogIntegrationIdRouteHandler,
  postDbaasGrafanaNameRouteHandler,
  postDbaasIntegrationRouteHandler,
  postDbaasKafkaNameRouteHandler,
  postDbaasKafkaNameSchemaRegistryAclConfigRouteHandler,
  postDbaasKafkaNameTopicAclConfigRouteHandler,
  postDbaasKafkaServiceNameUserRouteHandler,
  postDbaasMysqlNameMigrationStopRouteHandler,
  postDbaasMysqlNameRouteHandler,
  postDbaasMysqlServiceNameDatabaseRouteHandler,
  postDbaasMysqlServiceNameUserRouteHandler,
  postDbaasOpensearchNameRouteHandler,
  postDbaasOpensearchServiceNameUserRouteHandler,
  postDbaasPostgresNameMigrationStopRouteHandler,
  postDbaasPostgresNameRouteHandler,
  postDbaasPostgresServiceNameConnectionPoolRouteHandler,
  postDbaasPostgresServiceNameDatabaseRouteHandler,
  postDbaasPostgresServiceNameUserRouteHandler,
  postDbaasPostgresServiceUpgradeCheckRouteHandler,
  postDbaasServiceLogsServiceNameRouteHandler,
  postDbaasServiceMetricsServiceNameRouteHandler,
  postDbaasTaskMigrationCheckServiceRouteHandler,
  postDbaasThanosNameRouteHandler,
  postDbaasValkeyNameMigrationStopRouteHandler,
  postDbaasValkeyNameRouteHandler,
  postDbaasValkeyServiceNameUserRouteHandler,
  postDnsDomainDomainIdRecordRouteHandler,
  postDnsDomainRouteHandler,
  postElasticIpRouteHandler,
  postEnvironmentalImpactEstimateRouteHandler,
  postIamOrganizationPolicyResetRouteHandler,
  postIamRoleIdAssumeRouteHandler,
  postIamRoleRouteHandler,
  postInstanceIdCreateSnapshotRouteHandler,
  postInstanceIdEnableTpmRouteHandler,
  postInstanceInstanceIdRevertSnapshotRouteHandler,
  postInstancePoolRouteHandler,
  postInstanceRouteHandler,
  postKmsKeyIdCancelDeletionRouteHandler,
  postKmsKeyIdDecryptRouteHandler,
  postKmsKeyIdDisableKeyRotationRouteHandler,
  postKmsKeyIdDisableRouteHandler,
  postKmsKeyIdEnableKeyRotationRouteHandler,
  postKmsKeyIdEnableRouteHandler,
  postKmsKeyIdEncryptRouteHandler,
  postKmsKeyIdGenerateDataKeyRouteHandler,
  postKmsKeyIdReEncryptRouteHandler,
  postKmsKeyIdReplicateRouteHandler,
  postKmsKeyIdRotateRouteHandler,
  postKmsKeyIdScheduleDeletionRouteHandler,
  postKmsKeyRouteHandler,
  postLoadBalancerIdServiceRouteHandler,
  postLoadBalancerRouteHandler,
  postPrivateNetworkRouteHandler,
  postReverseDnsElasticIpIdRouteHandler,
  postReverseDnsInstanceIdRouteHandler,
  postSecurityGroupIdRulesRouteHandler,
  postSecurityGroupRouteHandler,
  postSksClusterIdNodepoolRouteHandler,
  postSksClusterKubeconfigIdRouteHandler,
  postSksClusterRouteHandler,
  postSnapshotIdExportRouteHandler,
  postSnapshotIdPromoteRouteHandler,
  postSshKeyRouteHandler,
  postTemplateIdRouteHandler,
  postTemplateRouteHandler,
  postUserRouteHandler,
  postVpcRouteHandler,
  postVpcVpcIdSubnetRouteHandler,
  postVpcVpcIdSubnetSubnetIdRouteRouteHandler,
  putBlockStorageIdAttachRouteHandler,
  putBlockStorageIdDetachRouteHandler,
  putBlockStorageIdResizeVolumeRouteHandler,
  putBlockStorageIdRouteHandler,
  putBlockStorageSnapshotIdRouteHandler,
  putDbaasClickhouseNameMaintenanceStartRouteHandler,
  putDbaasClickhouseNameRouteHandler,
  putDbaasClickhouseServiceNameUserUsernamePasswordResetRouteHandler,
  putDbaasExternalEndpointDatadogEndpointIdRouteHandler,
  putDbaasExternalEndpointElasticsearchEndpointIdRouteHandler,
  putDbaasExternalEndpointOpensearchEndpointIdRouteHandler,
  putDbaasExternalEndpointPrometheusEndpointIdRouteHandler,
  putDbaasExternalEndpointRsyslogEndpointIdRouteHandler,
  putDbaasExternalEndpointSourceServiceNameAttachRouteHandler,
  putDbaasExternalEndpointSourceServiceNameDetachRouteHandler,
  putDbaasGrafanaNameMaintenanceStartRouteHandler,
  putDbaasGrafanaNameRouteHandler,
  putDbaasGrafanaServiceNameUserUsernamePasswordResetRouteHandler,
  putDbaasIntegrationIdRouteHandler,
  putDbaasKafkaNameMaintenanceStartRouteHandler,
  putDbaasKafkaNameRouteHandler,
  putDbaasKafkaServiceNameUserUsernamePasswordResetRouteHandler,
  putDbaasMysqlNameEnableWritesRouteHandler,
  putDbaasMysqlNameMaintenanceStartRouteHandler,
  putDbaasMysqlNameRouteHandler,
  putDbaasMysqlServiceNameUserUsernamePasswordResetRouteHandler,
  putDbaasOpensearchNameAclConfigRouteHandler,
  putDbaasOpensearchNameMaintenanceStartRouteHandler,
  putDbaasOpensearchNameRouteHandler,
  putDbaasOpensearchServiceNameUserUsernamePasswordResetRouteHandler,
  putDbaasPostgresNameMaintenanceStartRouteHandler,
  putDbaasPostgresNameRouteHandler,
  putDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRouteHandler,
  putDbaasPostgresServiceNameUserUsernameAllowReplicationRouteHandler,
  putDbaasPostgresServiceNameUserUsernamePasswordResetRouteHandler,
  putDbaasThanosNameMaintenanceStartRouteHandler,
  putDbaasThanosNameRouteHandler,
  putDbaasValkeyNameMaintenanceStartRouteHandler,
  putDbaasValkeyNameRouteHandler,
  putDbaasValkeyServiceNameUserUsernamePasswordResetRouteHandler,
  putDbaasValkeyServiceNameUserUsernameRouteHandler,
  putDnsDomainDomainIdRecordRecordIdRouteHandler,
  putElasticIpIdAttachRouteHandler,
  putElasticIpIdDetachRouteHandler,
  putElasticIpIdRouteHandler,
  putIamOrganizationPolicyRouteHandler,
  putIamRoleIdPolicyRouteHandler,
  putIamRoleIdRouteHandler,
  putInstanceIdAddProtectionRouteHandler,
  putInstanceIdRebootRouteHandler,
  putInstanceIdRemoveProtectionRouteHandler,
  putInstanceIdResetPasswordRouteHandler,
  putInstanceIdResetRouteHandler,
  putInstanceIdResizeDiskRouteHandler,
  putInstanceIdRouteHandler,
  putInstanceIdScaleRouteHandler,
  putInstanceIdStartRouteHandler,
  putInstanceIdStopRouteHandler,
  putInstancePoolIdEvictRouteHandler,
  putInstancePoolIdRouteHandler,
  putInstancePoolIdScaleRouteHandler,
  putLoadBalancerIdRouteHandler,
  putLoadBalancerIdServiceServiceIdRouteHandler,
  putPrivateNetworkIdAttachRouteHandler,
  putPrivateNetworkIdDetachRouteHandler,
  putPrivateNetworkIdRouteHandler,
  putPrivateNetworkIdUpdateIpRouteHandler,
  putSecurityGroupIdAddSourceRouteHandler,
  putSecurityGroupIdAttachRouteHandler,
  putSecurityGroupIdDetachRouteHandler,
  putSecurityGroupIdRemoveSourceRouteHandler,
  putSksClusterIdGenerateKarpenterExoscaleNodeclassRouteHandler,
  putSksClusterIdGenerateKarpenterNodepoolRouteHandler,
  putSksClusterIdNodepoolSksNodepoolIdEvictRouteHandler,
  putSksClusterIdNodepoolSksNodepoolIdRouteHandler,
  putSksClusterIdNodepoolSksNodepoolIdScaleRouteHandler,
  putSksClusterIdRotateCcmCredentialsRouteHandler,
  putSksClusterIdRotateCsiCredentialsRouteHandler,
  putSksClusterIdRotateKarpenterCredentialsRouteHandler,
  putSksClusterIdRotateOperatorsCaRouteHandler,
  putSksClusterIdRouteHandler,
  putSksClusterIdUpgradeRouteHandler,
  putSksClusterIdUpgradeServiceLevelRouteHandler,
  putTemplateIdRouteHandler,
  putUserIdRouteHandler,
  putVpcIdRouteHandler,
  putVpcVpcIdSubnetIdRouteHandler,
  putVpcVpcIdSubnetSubnetIdAttachRouteHandler,
  putVpcVpcIdSubnetSubnetIdDetachRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteLoadBalancerIdServiceServiceIdRoute,
    deleteLoadBalancerIdServiceServiceIdRouteHandler,
  )
  .openapi(putLoadBalancerIdServiceServiceIdRoute, putLoadBalancerIdServiceServiceIdRouteHandler)
  .openapi(getLoadBalancerIdServiceServiceIdRoute, getLoadBalancerIdServiceServiceIdRouteHandler)
  .openapi(
    deleteDbaasExternalEndpointOpensearchEndpointIdRoute,
    deleteDbaasExternalEndpointOpensearchEndpointIdRouteHandler,
  )
  .openapi(
    getDbaasExternalEndpointOpensearchEndpointIdRoute,
    getDbaasExternalEndpointOpensearchEndpointIdRouteHandler,
  )
  .openapi(
    putDbaasExternalEndpointOpensearchEndpointIdRoute,
    putDbaasExternalEndpointOpensearchEndpointIdRouteHandler,
  )
  .openapi(getDbaasOpensearchNameAclConfigRoute, getDbaasOpensearchNameAclConfigRouteHandler)
  .openapi(putDbaasOpensearchNameAclConfigRoute, putDbaasOpensearchNameAclConfigRouteHandler)
  .openapi(putInstancePoolIdScaleRoute, putInstancePoolIdScaleRouteHandler)
  .openapi(postInstanceIdCreateSnapshotRoute, postInstanceIdCreateSnapshotRouteHandler)
  .openapi(postDbaasValkeyNameMigrationStopRoute, postDbaasValkeyNameMigrationStopRouteHandler)
  .openapi(getReverseDnsElasticIpIdRoute, getReverseDnsElasticIpIdRouteHandler)
  .openapi(postReverseDnsElasticIpIdRoute, postReverseDnsElasticIpIdRouteHandler)
  .openapi(deleteReverseDnsElasticIpIdRoute, deleteReverseDnsElasticIpIdRouteHandler)
  .openapi(getAntiAffinityGroupRoute, getAntiAffinityGroupRouteHandler)
  .openapi(postAntiAffinityGroupRoute, postAntiAffinityGroupRouteHandler)
  .openapi(getUsageReportRoute, getUsageReportRouteHandler)
  .openapi(getEventRoute, getEventRouteHandler)
  .openapi(deleteSecurityGroupIdRulesRuleIdRoute, deleteSecurityGroupIdRulesRuleIdRouteHandler)
  .openapi(
    putDbaasGrafanaNameMaintenanceStartRoute,
    putDbaasGrafanaNameMaintenanceStartRouteHandler,
  )
  .openapi(postKmsKeyIdDisableKeyRotationRoute, postKmsKeyIdDisableKeyRotationRouteHandler)
  .openapi(
    postDbaasPostgresServiceUpgradeCheckRoute,
    postDbaasPostgresServiceUpgradeCheckRouteHandler,
  )
  .openapi(
    putDbaasMysqlServiceNameUserUsernamePasswordResetRoute,
    putDbaasMysqlServiceNameUserUsernamePasswordResetRouteHandler,
  )
  .openapi(getAiHelpInferenceEngineParametersRoute, getAiHelpInferenceEngineParametersRouteHandler)
  .openapi(postLoadBalancerRoute, postLoadBalancerRouteHandler)
  .openapi(getLoadBalancerRoute, getLoadBalancerRouteHandler)
  .openapi(postSecurityGroupRoute, postSecurityGroupRouteHandler)
  .openapi(getSecurityGroupRoute, getSecurityGroupRouteHandler)
  .openapi(
    postDbaasPostgresServiceNameConnectionPoolRoute,
    postDbaasPostgresServiceNameConnectionPoolRouteHandler,
  )
  .openapi(putDbaasMysqlNameRoute, putDbaasMysqlNameRouteHandler)
  .openapi(getDbaasMysqlNameRoute, getDbaasMysqlNameRouteHandler)
  .openapi(postDbaasMysqlNameRoute, postDbaasMysqlNameRouteHandler)
  .openapi(deleteDbaasMysqlNameRoute, deleteDbaasMysqlNameRouteHandler)
  .openapi(putPrivateNetworkIdAttachRoute, putPrivateNetworkIdAttachRouteHandler)
  .openapi(postIamRoleIdAssumeRoute, postIamRoleIdAssumeRouteHandler)
  .openapi(putVpcVpcIdSubnetSubnetIdAttachRoute, putVpcVpcIdSubnetSubnetIdAttachRouteHandler)
  .openapi(getKmsKeyIdRoute, getKmsKeyIdRouteHandler)
  .openapi(putDbaasThanosNameMaintenanceStartRoute, putDbaasThanosNameMaintenanceStartRouteHandler)
  .openapi(
    deleteDbaasExternalEndpointElasticsearchEndpointIdRoute,
    deleteDbaasExternalEndpointElasticsearchEndpointIdRouteHandler,
  )
  .openapi(
    getDbaasExternalEndpointElasticsearchEndpointIdRoute,
    getDbaasExternalEndpointElasticsearchEndpointIdRouteHandler,
  )
  .openapi(
    putDbaasExternalEndpointElasticsearchEndpointIdRoute,
    putDbaasExternalEndpointElasticsearchEndpointIdRouteHandler,
  )
  .openapi(postAiModelRoute, postAiModelRouteHandler)
  .openapi(getAiModelRoute, getAiModelRouteHandler)
  .openapi(postDbaasMysqlServiceNameUserRoute, postDbaasMysqlServiceNameUserRouteHandler)
  .openapi(getDbaasServiceTypeRoute, getDbaasServiceTypeRouteHandler)
  .openapi(postAiDeploymentIdScaleRoute, postAiDeploymentIdScaleRouteHandler)
  .openapi(getInstanceTypeIdRoute, getInstanceTypeIdRouteHandler)
  .openapi(deleteDbaasClickhouseNameRoute, deleteDbaasClickhouseNameRouteHandler)
  .openapi(getDbaasClickhouseNameRoute, getDbaasClickhouseNameRouteHandler)
  .openapi(postDbaasClickhouseNameRoute, postDbaasClickhouseNameRouteHandler)
  .openapi(putDbaasClickhouseNameRoute, putDbaasClickhouseNameRouteHandler)
  .openapi(getInstanceIdPasswordRoute, getInstanceIdPasswordRouteHandler)
  .openapi(getSksTemplateKubeVersionVariantRoute, getSksTemplateKubeVersionVariantRouteHandler)
  .openapi(putInstanceIdResizeDiskRoute, putInstanceIdResizeDiskRouteHandler)
  .openapi(getDbaasServiceRoute, getDbaasServiceRouteHandler)
  .openapi(postElasticIpRoute, postElasticIpRouteHandler)
  .openapi(getElasticIpRoute, getElasticIpRouteHandler)
  .openapi(getZoneRoute, getZoneRouteHandler)
  .openapi(getInstancePoolRoute, getInstancePoolRouteHandler)
  .openapi(postInstancePoolRoute, postInstancePoolRouteHandler)
  .openapi(
    postDbaasExternalEndpointRsyslogNameRoute,
    postDbaasExternalEndpointRsyslogNameRouteHandler,
  )
  .openapi(postSksClusterKubeconfigIdRoute, postSksClusterKubeconfigIdRouteHandler)
  .openapi(getDnsDomainDomainIdRecordRoute, getDnsDomainDomainIdRecordRouteHandler)
  .openapi(postDnsDomainDomainIdRecordRoute, postDnsDomainDomainIdRecordRouteHandler)
  .openapi(getDbaasCaCertificateRoute, getDbaasCaCertificateRouteHandler)
  .openapi(getDbaasSettingsGrafanaRoute, getDbaasSettingsGrafanaRouteHandler)
  .openapi(postEnvironmentalImpactEstimateRoute, postEnvironmentalImpactEstimateRouteHandler)
  .openapi(getDeployTargetRoute, getDeployTargetRouteHandler)
  .openapi(getInstanceTypeRoute, getInstanceTypeRouteHandler)
  .openapi(postAiDeploymentRoute, postAiDeploymentRouteHandler)
  .openapi(getAiDeploymentRoute, getAiDeploymentRouteHandler)
  .openapi(getLiveBalanceRoute, getLiveBalanceRouteHandler)
  .openapi(
    deleteDbaasPostgresServiceNameDatabaseDatabaseNameRoute,
    deleteDbaasPostgresServiceNameDatabaseDatabaseNameRouteHandler,
  )
  .openapi(getDbaasClickhouseServiceNameRoleRoute, getDbaasClickhouseServiceNameRoleRouteHandler)
  .openapi(putBlockStorageIdAttachRoute, putBlockStorageIdAttachRouteHandler)
  .openapi(postKmsKeyIdEnableRoute, postKmsKeyIdEnableRouteHandler)
  .openapi(postDbaasPostgresNameMigrationStopRoute, postDbaasPostgresNameMigrationStopRouteHandler)
  .openapi(getDbaasKafkaNameRoute, getDbaasKafkaNameRouteHandler)
  .openapi(postDbaasKafkaNameRoute, postDbaasKafkaNameRouteHandler)
  .openapi(putDbaasKafkaNameRoute, putDbaasKafkaNameRouteHandler)
  .openapi(deleteDbaasKafkaNameRoute, deleteDbaasKafkaNameRouteHandler)
  .openapi(putInstanceIdResetPasswordRoute, putInstanceIdResetPasswordRouteHandler)
  .openapi(
    postDbaasKafkaNameSchemaRegistryAclConfigRoute,
    postDbaasKafkaNameSchemaRegistryAclConfigRouteHandler,
  )
  .openapi(putPrivateNetworkIdUpdateIpRoute, putPrivateNetworkIdUpdateIpRouteHandler)
  .openapi(getVpcVpcIdRouteRoute, getVpcVpcIdRouteRouteHandler)
  .openapi(
    putSksClusterIdNodepoolSksNodepoolIdRoute,
    putSksClusterIdNodepoolSksNodepoolIdRouteHandler,
  )
  .openapi(
    getSksClusterIdNodepoolSksNodepoolIdRoute,
    getSksClusterIdNodepoolSksNodepoolIdRouteHandler,
  )
  .openapi(
    deleteSksClusterIdNodepoolSksNodepoolIdRoute,
    deleteSksClusterIdNodepoolSksNodepoolIdRouteHandler,
  )
  .openapi(deleteBlockStorageSnapshotIdRoute, deleteBlockStorageSnapshotIdRouteHandler)
  .openapi(putBlockStorageSnapshotIdRoute, putBlockStorageSnapshotIdRouteHandler)
  .openapi(getBlockStorageSnapshotIdRoute, getBlockStorageSnapshotIdRouteHandler)
  .openapi(getKmsKeyIdListKeyRotationsRoute, getKmsKeyIdListKeyRotationsRouteHandler)
  .openapi(postDbaasPostgresServiceNameUserRoute, postDbaasPostgresServiceNameUserRouteHandler)
  .openapi(
    getDbaasExternalIntegrationsServiceNameRoute,
    getDbaasExternalIntegrationsServiceNameRouteHandler,
  )
  .openapi(
    getDbaasExternalIntegrationIntegrationIdRoute,
    getDbaasExternalIntegrationIntegrationIdRouteHandler,
  )
  .openapi(deleteInstancePoolIdRoute, deleteInstancePoolIdRouteHandler)
  .openapi(getInstancePoolIdRoute, getInstancePoolIdRouteHandler)
  .openapi(putInstancePoolIdRoute, putInstancePoolIdRouteHandler)
  .openapi(getDbaasExternalEndpointTypesRoute, getDbaasExternalEndpointTypesRouteHandler)
  .openapi(deleteAiApiKeyIdRoute, deleteAiApiKeyIdRouteHandler)
  .openapi(getAiApiKeyIdRoute, getAiApiKeyIdRouteHandler)
  .openapi(patchAiApiKeyIdRoute, patchAiApiKeyIdRouteHandler)
  .openapi(getPrivateNetworkRoute, getPrivateNetworkRouteHandler)
  .openapi(postPrivateNetworkRoute, postPrivateNetworkRouteHandler)
  .openapi(postVpcRoute, postVpcRouteHandler)
  .openapi(getVpcRoute, getVpcRouteHandler)
  .openapi(postAiApiKeyIdRotateRoute, postAiApiKeyIdRotateRouteHandler)
  .openapi(putInstanceIdStartRoute, putInstanceIdStartRouteHandler)
  .openapi(postInstanceIdEnableTpmRoute, postInstanceIdEnableTpmRouteHandler)
  .openapi(getOrganizationRoute, getOrganizationRouteHandler)
  .openapi(getSecurityGroupIdRoute, getSecurityGroupIdRouteHandler)
  .openapi(deleteSecurityGroupIdRoute, deleteSecurityGroupIdRouteHandler)
  .openapi(
    deleteDbaasClickhouseServiceNameRoleRoleUuidRoute,
    deleteDbaasClickhouseServiceNameRoleRoleUuidRouteHandler,
  )
  .openapi(
    getSksClusterIdAuthorityAuthorityCertRoute,
    getSksClusterIdAuthorityAuthorityCertRouteHandler,
  )
  .openapi(postSnapshotIdExportRoute, postSnapshotIdExportRouteHandler)
  .openapi(getAiDeploymentIdRoute, getAiDeploymentIdRouteHandler)
  .openapi(patchAiDeploymentIdRoute, patchAiDeploymentIdRouteHandler)
  .openapi(deleteAiDeploymentIdRoute, deleteAiDeploymentIdRouteHandler)
  .openapi(
    getDbaasKafkaServiceNameConnectPasswordRevealRoute,
    getDbaasKafkaServiceNameConnectPasswordRevealRouteHandler,
  )
  .openapi(postKmsKeyIdEnableKeyRotationRoute, postKmsKeyIdEnableKeyRotationRouteHandler)
  .openapi(getVpcVpcIdSubnetSubnetIdRouteRoute, getVpcVpcIdSubnetSubnetIdRouteRouteHandler)
  .openapi(postVpcVpcIdSubnetSubnetIdRouteRoute, postVpcVpcIdSubnetSubnetIdRouteRouteHandler)
  .openapi(deleteElasticIpIdFieldRoute, deleteElasticIpIdFieldRouteHandler)
  .openapi(getQuotaEntityRoute, getQuotaEntityRouteHandler)
  .openapi(getVpcVpcIdSubnetRoute, getVpcVpcIdSubnetRouteHandler)
  .openapi(postVpcVpcIdSubnetRoute, postVpcVpcIdSubnetRouteHandler)
  .openapi(getSksClusterDeprecatedResourcesIdRoute, getSksClusterDeprecatedResourcesIdRouteHandler)
  .openapi(getBlockStorageIdRoute, getBlockStorageIdRouteHandler)
  .openapi(putBlockStorageIdRoute, putBlockStorageIdRouteHandler)
  .openapi(deleteBlockStorageIdRoute, deleteBlockStorageIdRouteHandler)
  .openapi(
    deleteDbaasOpensearchServiceNameUserUsernameRoute,
    deleteDbaasOpensearchServiceNameUserUsernameRouteHandler,
  )
  .openapi(
    getDbaasExternalEndpointPrometheusEndpointIdRoute,
    getDbaasExternalEndpointPrometheusEndpointIdRouteHandler,
  )
  .openapi(
    deleteDbaasExternalEndpointPrometheusEndpointIdRoute,
    deleteDbaasExternalEndpointPrometheusEndpointIdRouteHandler,
  )
  .openapi(
    putDbaasExternalEndpointPrometheusEndpointIdRoute,
    putDbaasExternalEndpointPrometheusEndpointIdRouteHandler,
  )
  .openapi(postBlockStorageIdCreateSnapshotRoute, postBlockStorageIdCreateSnapshotRouteHandler)
  .openapi(putPrivateNetworkIdDetachRoute, putPrivateNetworkIdDetachRouteHandler)
  .openapi(putPrivateNetworkIdRoute, putPrivateNetworkIdRouteHandler)
  .openapi(getPrivateNetworkIdRoute, getPrivateNetworkIdRouteHandler)
  .openapi(deletePrivateNetworkIdRoute, deletePrivateNetworkIdRouteHandler)
  .openapi(getAiInstanceTypeRoute, getAiInstanceTypeRouteHandler)
  .openapi(deleteLoadBalancerIdFieldRoute, deleteLoadBalancerIdFieldRouteHandler)
  .openapi(putInstanceIdScaleRoute, putInstanceIdScaleRouteHandler)
  .openapi(postApiKeyRoute, postApiKeyRouteHandler)
  .openapi(getApiKeyRoute, getApiKeyRouteHandler)
  .openapi(getBlockStorageSnapshotRoute, getBlockStorageSnapshotRouteHandler)
  .openapi(getDnsDomainRoute, getDnsDomainRouteHandler)
  .openapi(postDnsDomainRoute, postDnsDomainRouteHandler)
  .openapi(putInstanceIdStopRoute, putInstanceIdStopRouteHandler)
  .openapi(getDnsDomainDomainIdRecordRecordIdRoute, getDnsDomainDomainIdRecordRecordIdRouteHandler)
  .openapi(putDnsDomainDomainIdRecordRecordIdRoute, putDnsDomainDomainIdRecordRecordIdRouteHandler)
  .openapi(
    deleteDnsDomainDomainIdRecordRecordIdRoute,
    deleteDnsDomainDomainIdRecordRecordIdRouteHandler,
  )
  .openapi(postDbaasKafkaServiceNameUserRoute, postDbaasKafkaServiceNameUserRouteHandler)
  .openapi(
    putDbaasValkeyServiceNameUserUsernamePasswordResetRoute,
    putDbaasValkeyServiceNameUserUsernamePasswordResetRouteHandler,
  )
  .openapi(
    postDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute,
    postDbaasExternalIntegrationSettingsDatadogIntegrationIdRouteHandler,
  )
  .openapi(
    getDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute,
    getDbaasExternalIntegrationSettingsDatadogIntegrationIdRouteHandler,
  )
  .openapi(putSecurityGroupIdAttachRoute, putSecurityGroupIdAttachRouteHandler)
  .openapi(deleteSnapshotIdRoute, deleteSnapshotIdRouteHandler)
  .openapi(getSnapshotIdRoute, getSnapshotIdRouteHandler)
  .openapi(
    putSksClusterIdNodepoolSksNodepoolIdScaleRoute,
    putSksClusterIdNodepoolSksNodepoolIdScaleRouteHandler,
  )
  .openapi(getDbaasSettingsMysqlRoute, getDbaasSettingsMysqlRouteHandler)
  .openapi(putSksClusterIdUpgradeServiceLevelRoute, putSksClusterIdUpgradeServiceLevelRouteHandler)
  .openapi(getDbaasSettingsValkeyRoute, getDbaasSettingsValkeyRouteHandler)
  .openapi(deleteApiKeyIdRoute, deleteApiKeyIdRouteHandler)
  .openapi(getApiKeyIdRoute, getApiKeyIdRouteHandler)
  .openapi(
    deleteLoadBalancerIdServiceServiceIdFieldRoute,
    deleteLoadBalancerIdServiceServiceIdFieldRouteHandler,
  )
  .openapi(
    postDbaasPostgresServiceNameDatabaseRoute,
    postDbaasPostgresServiceNameDatabaseRouteHandler,
  )
  .openapi(postKmsKeyIdRotateRoute, postKmsKeyIdRotateRouteHandler)
  .openapi(getDbaasSettingsThanosRoute, getDbaasSettingsThanosRouteHandler)
  .openapi(postSecurityGroupIdRulesRoute, postSecurityGroupIdRulesRouteHandler)
  .openapi(getDbaasSettingsClickhouseRoute, getDbaasSettingsClickhouseRouteHandler)
  .openapi(postDbaasOpensearchServiceNameUserRoute, postDbaasOpensearchServiceNameUserRouteHandler)
  .openapi(getDbaasIntegrationTypesRoute, getDbaasIntegrationTypesRouteHandler)
  .openapi(getEnvImpactPeriodRoute, getEnvImpactPeriodRouteHandler)
  .openapi(
    deleteDbaasPostgresServiceNameUserUsernameRoute,
    deleteDbaasPostgresServiceNameUserUsernameRouteHandler,
  )
  .openapi(putInstanceIdAddProtectionRoute, putInstanceIdAddProtectionRouteHandler)
  .openapi(
    putDbaasPostgresServiceNameUserUsernameAllowReplicationRoute,
    putDbaasPostgresServiceNameUserUsernameAllowReplicationRouteHandler,
  )
  .openapi(putIamRoleIdRoute, putIamRoleIdRouteHandler)
  .openapi(getIamRoleIdRoute, getIamRoleIdRouteHandler)
  .openapi(deleteIamRoleIdRoute, deleteIamRoleIdRouteHandler)
  .openapi(deleteInstanceIdFieldRoute, deleteInstanceIdFieldRouteHandler)
  .openapi(deleteInstancePoolIdFieldRoute, deleteInstancePoolIdFieldRouteHandler)
  .openapi(putInstanceIdRemoveProtectionRoute, putInstanceIdRemoveProtectionRouteHandler)
  .openapi(postDbaasKafkaNameTopicAclConfigRoute, postDbaasKafkaNameTopicAclConfigRouteHandler)
  .openapi(getSnapshotRoute, getSnapshotRouteHandler)
  .openapi(getOperationIdRoute, getOperationIdRouteHandler)
  .openapi(getDnsDomainIdZoneRoute, getDnsDomainIdZoneRouteHandler)
  .openapi(
    postDbaasExternalEndpointOpensearchNameRoute,
    postDbaasExternalEndpointOpensearchNameRouteHandler,
  )
  .openapi(
    deleteDbaasMysqlServiceNameDatabaseDatabaseNameRoute,
    deleteDbaasMysqlServiceNameDatabaseDatabaseNameRouteHandler,
  )
  .openapi(putSecurityGroupIdRemoveSourceRoute, putSecurityGroupIdRemoveSourceRouteHandler)
  .openapi(getIamOrganizationPolicyRoute, getIamOrganizationPolicyRouteHandler)
  .openapi(putIamOrganizationPolicyRoute, putIamOrganizationPolicyRouteHandler)
  .openapi(postDbaasServiceLogsServiceNameRoute, postDbaasServiceLogsServiceNameRouteHandler)
  .openapi(postKmsKeyIdDecryptRoute, postKmsKeyIdDecryptRouteHandler)
  .openapi(deleteTemplateIdRoute, deleteTemplateIdRouteHandler)
  .openapi(postTemplateIdRoute, postTemplateIdRouteHandler)
  .openapi(putTemplateIdRoute, putTemplateIdRouteHandler)
  .openapi(getTemplateIdRoute, getTemplateIdRouteHandler)
  .openapi(
    putDbaasPostgresNameMaintenanceStartRoute,
    putDbaasPostgresNameMaintenanceStartRouteHandler,
  )
  .openapi(
    getDbaasGrafanaServiceNameUserUsernamePasswordRevealRoute,
    getDbaasGrafanaServiceNameUserUsernamePasswordRevealRouteHandler,
  )
  .openapi(putUserIdRoute, putUserIdRouteHandler)
  .openapi(deleteUserIdRoute, deleteUserIdRouteHandler)
  .openapi(postReverseDnsInstanceIdRoute, postReverseDnsInstanceIdRouteHandler)
  .openapi(getReverseDnsInstanceIdRoute, getReverseDnsInstanceIdRouteHandler)
  .openapi(deleteReverseDnsInstanceIdRoute, deleteReverseDnsInstanceIdRouteHandler)
  .openapi(putInstancePoolIdEvictRoute, putInstancePoolIdEvictRouteHandler)
  .openapi(
    putSksClusterIdRotateCsiCredentialsRoute,
    putSksClusterIdRotateCsiCredentialsRouteHandler,
  )
  .openapi(
    putDbaasGrafanaServiceNameUserUsernamePasswordResetRoute,
    putDbaasGrafanaServiceNameUserUsernamePasswordResetRouteHandler,
  )
  .openapi(
    putDbaasClickhouseServiceNameUserUsernamePasswordResetRoute,
    putDbaasClickhouseServiceNameUserUsernamePasswordResetRouteHandler,
  )
  .openapi(putSecurityGroupIdDetachRoute, putSecurityGroupIdDetachRouteHandler)
  .openapi(
    getDbaasClickhouseServiceNameAclConfigRoute,
    getDbaasClickhouseServiceNameAclConfigRouteHandler,
  )
  .openapi(getDbaasClickhouseServiceNameUserRoute, getDbaasClickhouseServiceNameUserRouteHandler)
  .openapi(postDbaasClickhouseServiceNameUserRoute, postDbaasClickhouseServiceNameUserRouteHandler)
  .openapi(
    putSksClusterIdNodepoolSksNodepoolIdEvictRoute,
    putSksClusterIdNodepoolSksNodepoolIdEvictRouteHandler,
  )
  .openapi(
    putDbaasValkeyServiceNameUserUsernameRoute,
    putDbaasValkeyServiceNameUserUsernameRouteHandler,
  )
  .openapi(
    deleteDbaasValkeyServiceNameUserUsernameRoute,
    deleteDbaasValkeyServiceNameUserUsernameRouteHandler,
  )
  .openapi(postKmsKeyIdDisableRoute, postKmsKeyIdDisableRouteHandler)
  .openapi(
    deleteDbaasKafkaNameSchemaRegistryAclConfigAclIdRoute,
    deleteDbaasKafkaNameSchemaRegistryAclConfigAclIdRouteHandler,
  )
  .openapi(deleteDnsDomainIdRoute, deleteDnsDomainIdRouteHandler)
  .openapi(getDnsDomainIdRoute, getDnsDomainIdRouteHandler)
  .openapi(putBlockStorageIdResizeVolumeRoute, putBlockStorageIdResizeVolumeRouteHandler)
  .openapi(
    deleteDbaasKafkaServiceNameUserUsernameRoute,
    deleteDbaasKafkaServiceNameUserUsernameRouteHandler,
  )
  .openapi(getDbaasServiceTypeServiceTypeNameRoute, getDbaasServiceTypeServiceTypeNameRouteHandler)
  .openapi(putSecurityGroupIdAddSourceRoute, putSecurityGroupIdAddSourceRouteHandler)
  .openapi(
    postDbaasExternalEndpointDatadogNameRoute,
    postDbaasExternalEndpointDatadogNameRouteHandler,
  )
  .openapi(putDbaasMysqlNameMaintenanceStartRoute, putDbaasMysqlNameMaintenanceStartRouteHandler)
  .openapi(
    putDbaasOpensearchServiceNameUserUsernamePasswordResetRoute,
    putDbaasOpensearchServiceNameUserUsernamePasswordResetRouteHandler,
  )
  .openapi(deleteAiModelIdRoute, deleteAiModelIdRouteHandler)
  .openapi(getAiModelIdRoute, getAiModelIdRouteHandler)
  .openapi(getSosBucketsUsageRoute, getSosBucketsUsageRouteHandler)
  .openapi(putInstanceIdResetRoute, putInstanceIdResetRouteHandler)
  .openapi(
    getDbaasMysqlServiceNameUserUsernamePasswordRevealRoute,
    getDbaasMysqlServiceNameUserUsernamePasswordRevealRouteHandler,
  )
  .openapi(deleteSshKeyNameRoute, deleteSshKeyNameRouteHandler)
  .openapi(getSshKeyNameRoute, getSshKeyNameRouteHandler)
  .openapi(postDbaasServiceMetricsServiceNameRoute, postDbaasServiceMetricsServiceNameRouteHandler)
  .openapi(getDeployTargetIdRoute, getDeployTargetIdRouteHandler)
  .openapi(putElasticIpIdDetachRoute, putElasticIpIdDetachRouteHandler)
  .openapi(putDbaasMysqlNameEnableWritesRoute, putDbaasMysqlNameEnableWritesRouteHandler)
  .openapi(
    getDbaasKafkaServiceNameUserUsernamePasswordRevealRoute,
    getDbaasKafkaServiceNameUserUsernamePasswordRevealRouteHandler,
  )
  .openapi(
    deleteVpcVpcIdSubnetSubnetIdRouteIdRoute,
    deleteVpcVpcIdSubnetSubnetIdRouteIdRouteHandler,
  )
  .openapi(postKmsKeyIdEncryptRoute, postKmsKeyIdEncryptRouteHandler)
  .openapi(postDbaasTaskMigrationCheckServiceRoute, postDbaasTaskMigrationCheckServiceRouteHandler)
  .openapi(
    deleteDbaasExternalEndpointDatadogEndpointIdRoute,
    deleteDbaasExternalEndpointDatadogEndpointIdRouteHandler,
  )
  .openapi(
    getDbaasExternalEndpointDatadogEndpointIdRoute,
    getDbaasExternalEndpointDatadogEndpointIdRouteHandler,
  )
  .openapi(
    putDbaasExternalEndpointDatadogEndpointIdRoute,
    putDbaasExternalEndpointDatadogEndpointIdRouteHandler,
  )
  .openapi(postLoadBalancerIdServiceRoute, postLoadBalancerIdServiceRouteHandler)
  .openapi(getSshKeyRoute, getSshKeyRouteHandler)
  .openapi(postSshKeyRoute, postSshKeyRouteHandler)
  .openapi(postSnapshotIdPromoteRoute, postSnapshotIdPromoteRouteHandler)
  .openapi(
    getDbaasClickhouseServiceNameUserUsernamePasswordRevealRoute,
    getDbaasClickhouseServiceNameUserUsernamePasswordRevealRouteHandler,
  )
  .openapi(postSksClusterRoute, postSksClusterRouteHandler)
  .openapi(getSksClusterRoute, getSksClusterRouteHandler)
  .openapi(putBlockStorageIdDetachRoute, putBlockStorageIdDetachRouteHandler)
  .openapi(
    postDbaasExternalEndpointPrometheusNameRoute,
    postDbaasExternalEndpointPrometheusNameRouteHandler,
  )
  .openapi(getConsoleIdRoute, getConsoleIdRouteHandler)
  .openapi(deleteDbaasIntegrationIdRoute, deleteDbaasIntegrationIdRouteHandler)
  .openapi(putDbaasIntegrationIdRoute, putDbaasIntegrationIdRouteHandler)
  .openapi(getDbaasIntegrationIdRoute, getDbaasIntegrationIdRouteHandler)
  .openapi(putElasticIpIdAttachRoute, putElasticIpIdAttachRouteHandler)
  .openapi(deleteSksClusterIdRoute, deleteSksClusterIdRouteHandler)
  .openapi(getSksClusterIdRoute, getSksClusterIdRouteHandler)
  .openapi(putSksClusterIdRoute, putSksClusterIdRouteHandler)
  .openapi(getQuotaRoute, getQuotaRouteHandler)
  .openapi(
    getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeRoute,
    getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeRouteHandler,
  )
  .openapi(
    getDbaasThanosServiceNameUserUsernamePasswordRevealRoute,
    getDbaasThanosServiceNameUserUsernamePasswordRevealRouteHandler,
  )
  .openapi(
    deleteDbaasClickhouseServiceNameUserUserUuidRoute,
    deleteDbaasClickhouseServiceNameUserUserUuidRouteHandler,
  )
  .openapi(getDbaasSettingsPgRoute, getDbaasSettingsPgRouteHandler)
  .openapi(putElasticIpIdRoute, putElasticIpIdRouteHandler)
  .openapi(getElasticIpIdRoute, getElasticIpIdRouteHandler)
  .openapi(deleteElasticIpIdRoute, deleteElasticIpIdRouteHandler)
  .openapi(getSksClusterIdInspectionRoute, getSksClusterIdInspectionRouteHandler)
  .openapi(deleteDbaasValkeyNameRoute, deleteDbaasValkeyNameRouteHandler)
  .openapi(getDbaasValkeyNameRoute, getDbaasValkeyNameRouteHandler)
  .openapi(postDbaasValkeyNameRoute, postDbaasValkeyNameRouteHandler)
  .openapi(putDbaasValkeyNameRoute, putDbaasValkeyNameRouteHandler)
  .openapi(deleteInstanceIdRoute, deleteInstanceIdRouteHandler)
  .openapi(putInstanceIdRoute, putInstanceIdRouteHandler)
  .openapi(getInstanceIdRoute, getInstanceIdRouteHandler)
  .openapi(postDbaasMysqlNameMigrationStopRoute, postDbaasMysqlNameMigrationStopRouteHandler)
  .openapi(deleteVpcVpcIdSubnetIdRoute, deleteVpcVpcIdSubnetIdRouteHandler)
  .openapi(putVpcVpcIdSubnetIdRoute, putVpcVpcIdSubnetIdRouteHandler)
  .openapi(getVpcVpcIdSubnetIdRoute, getVpcVpcIdSubnetIdRouteHandler)
  .openapi(getDbaasExternalEndpointsRoute, getDbaasExternalEndpointsRouteHandler)
  .openapi(putDbaasKafkaNameMaintenanceStartRoute, putDbaasKafkaNameMaintenanceStartRouteHandler)
  .openapi(
    putSksClusterIdRotateCcmCredentialsRoute,
    putSksClusterIdRotateCcmCredentialsRouteHandler,
  )
  .openapi(
    putDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute,
    putDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRouteHandler,
  )
  .openapi(
    deleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute,
    deleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRouteHandler,
  )
  .openapi(postKmsKeyRoute, postKmsKeyRouteHandler)
  .openapi(getKmsKeyRoute, getKmsKeyRouteHandler)
  .openapi(getDbaasThanosNameRoute, getDbaasThanosNameRouteHandler)
  .openapi(postDbaasThanosNameRoute, postDbaasThanosNameRouteHandler)
  .openapi(putDbaasThanosNameRoute, putDbaasThanosNameRouteHandler)
  .openapi(deleteDbaasThanosNameRoute, deleteDbaasThanosNameRouteHandler)
  .openapi(putIamRoleIdPolicyRoute, putIamRoleIdPolicyRouteHandler)
  .openapi(getDbaasMigrationStatusNameRoute, getDbaasMigrationStatusNameRouteHandler)
  .openapi(
    deleteDbaasMysqlServiceNameUserUsernameRoute,
    deleteDbaasMysqlServiceNameUserUsernameRouteHandler,
  )
  .openapi(
    putSksClusterIdGenerateKarpenterNodepoolRoute,
    putSksClusterIdGenerateKarpenterNodepoolRouteHandler,
  )
  .openapi(putLoadBalancerIdRoute, putLoadBalancerIdRouteHandler)
  .openapi(deleteLoadBalancerIdRoute, deleteLoadBalancerIdRouteHandler)
  .openapi(getLoadBalancerIdRoute, getLoadBalancerIdRouteHandler)
  .openapi(deleteDbaasServiceNameRoute, deleteDbaasServiceNameRouteHandler)
  .openapi(putVpcVpcIdSubnetSubnetIdDetachRoute, putVpcVpcIdSubnetSubnetIdDetachRouteHandler)
  .openapi(postDbaasMysqlServiceNameDatabaseRoute, postDbaasMysqlServiceNameDatabaseRouteHandler)
  .openapi(getTemplateRoute, getTemplateRouteHandler)
  .openapi(postTemplateRoute, postTemplateRouteHandler)
  .openapi(putInstanceIdRebootRoute, putInstanceIdRebootRouteHandler)
  .openapi(getEnvironmentalImpactReportRoute, getEnvironmentalImpactReportRouteHandler)
  .openapi(getDbaasSettingsKafkaRoute, getDbaasSettingsKafkaRouteHandler)
  .openapi(
    getDbaasPostgresServiceNameUserUsernamePasswordRevealRoute,
    getDbaasPostgresServiceNameUserUsernamePasswordRevealRouteHandler,
  )
  .openapi(postIamOrganizationPolicyResetRoute, postIamOrganizationPolicyResetRouteHandler)
  .openapi(getDbaasSettingsOpensearchRoute, getDbaasSettingsOpensearchRouteHandler)
  .openapi(
    putDbaasExternalEndpointSourceServiceNameAttachRoute,
    putDbaasExternalEndpointSourceServiceNameAttachRouteHandler,
  )
  .openapi(postKmsKeyIdScheduleDeletionRoute, postKmsKeyIdScheduleDeletionRouteHandler)
  .openapi(deleteDbaasGrafanaNameRoute, deleteDbaasGrafanaNameRouteHandler)
  .openapi(getDbaasGrafanaNameRoute, getDbaasGrafanaNameRouteHandler)
  .openapi(putDbaasGrafanaNameRoute, putDbaasGrafanaNameRouteHandler)
  .openapi(postDbaasGrafanaNameRoute, postDbaasGrafanaNameRouteHandler)
  .openapi(
    deleteDbaasExternalEndpointRsyslogEndpointIdRoute,
    deleteDbaasExternalEndpointRsyslogEndpointIdRouteHandler,
  )
  .openapi(
    putDbaasExternalEndpointRsyslogEndpointIdRoute,
    putDbaasExternalEndpointRsyslogEndpointIdRouteHandler,
  )
  .openapi(
    getDbaasExternalEndpointRsyslogEndpointIdRoute,
    getDbaasExternalEndpointRsyslogEndpointIdRouteHandler,
  )
  .openapi(
    putSksClusterIdGenerateKarpenterExoscaleNodeclassRoute,
    putSksClusterIdGenerateKarpenterExoscaleNodeclassRouteHandler,
  )
  .openapi(postSksClusterIdNodepoolRoute, postSksClusterIdNodepoolRouteHandler)
  .openapi(
    postDbaasExternalEndpointElasticsearchNameRoute,
    postDbaasExternalEndpointElasticsearchNameRouteHandler,
  )
  .openapi(getAiApiKeyIdRevealRoute, getAiApiKeyIdRevealRouteHandler)
  .openapi(
    putDbaasOpensearchNameMaintenanceStartRoute,
    putDbaasOpensearchNameMaintenanceStartRouteHandler,
  )
  .openapi(getDbaasKafkaNameAclConfigRoute, getDbaasKafkaNameAclConfigRouteHandler)
  .openapi(
    putDbaasKafkaServiceNameUserUsernamePasswordResetRoute,
    putDbaasKafkaServiceNameUserUsernamePasswordResetRouteHandler,
  )
  .openapi(getAiApiKeyRoute, getAiApiKeyRouteHandler)
  .openapi(postAiApiKeyRoute, postAiApiKeyRouteHandler)
  .openapi(postKmsKeyIdReEncryptRoute, postKmsKeyIdReEncryptRouteHandler)
  .openapi(
    getDbaasOpensearchServiceNameUserUsernamePasswordRevealRoute,
    getDbaasOpensearchServiceNameUserUsernamePasswordRevealRouteHandler,
  )
  .openapi(putDbaasValkeyNameMaintenanceStartRoute, putDbaasValkeyNameMaintenanceStartRouteHandler)
  .openapi(postDbaasOpensearchNameRoute, postDbaasOpensearchNameRouteHandler)
  .openapi(getDbaasOpensearchNameRoute, getDbaasOpensearchNameRouteHandler)
  .openapi(deleteDbaasOpensearchNameRoute, deleteDbaasOpensearchNameRouteHandler)
  .openapi(putDbaasOpensearchNameRoute, putDbaasOpensearchNameRouteHandler)
  .openapi(
    putDbaasExternalEndpointSourceServiceNameDetachRoute,
    putDbaasExternalEndpointSourceServiceNameDetachRouteHandler,
  )
  .openapi(
    getDbaasValkeyServiceNameUserUsernamePasswordRevealRoute,
    getDbaasValkeyServiceNameUserUsernamePasswordRevealRouteHandler,
  )
  .openapi(getAiQuotaRoute, getAiQuotaRouteHandler)
  .openapi(putDbaasPostgresNameRoute, putDbaasPostgresNameRouteHandler)
  .openapi(getDbaasPostgresNameRoute, getDbaasPostgresNameRouteHandler)
  .openapi(postDbaasPostgresNameRoute, postDbaasPostgresNameRouteHandler)
  .openapi(deleteDbaasPostgresNameRoute, deleteDbaasPostgresNameRouteHandler)
  .openapi(postDbaasValkeyServiceNameUserRoute, postDbaasValkeyServiceNameUserRouteHandler)
  .openapi(getDbaasValkeyServiceNameUserRoute, getDbaasValkeyServiceNameUserRouteHandler)
  .openapi(
    putSksClusterIdRotateKarpenterCredentialsRoute,
    putSksClusterIdRotateKarpenterCredentialsRouteHandler,
  )
  .openapi(postDbaasIntegrationRoute, postDbaasIntegrationRouteHandler)
  .openapi(getDbaasTaskServiceIdRoute, getDbaasTaskServiceIdRouteHandler)
  .openapi(getSosBucketPresignedUrlRoute, getSosBucketPresignedUrlRouteHandler)
  .openapi(putSksClusterIdRotateOperatorsCaRoute, putSksClusterIdRotateOperatorsCaRouteHandler)
  .openapi(getAiDeploymentIdApiKeyRoute, getAiDeploymentIdApiKeyRouteHandler)
  .openapi(getAntiAffinityGroupIdRoute, getAntiAffinityGroupIdRouteHandler)
  .openapi(deleteAntiAffinityGroupIdRoute, deleteAntiAffinityGroupIdRouteHandler)
  .openapi(postKmsKeyIdReplicateRoute, postKmsKeyIdReplicateRouteHandler)
  .openapi(getSksClusterVersionRoute, getSksClusterVersionRouteHandler)
  .openapi(postInstanceRoute, postInstanceRouteHandler)
  .openapi(getInstanceRoute, getInstanceRouteHandler)
  .openapi(getIamRoleRoute, getIamRoleRouteHandler)
  .openapi(postIamRoleRoute, postIamRoleRouteHandler)
  .openapi(deletePrivateNetworkIdFieldRoute, deletePrivateNetworkIdFieldRouteHandler)
  .openapi(postUserRoute, postUserRouteHandler)
  .openapi(getUserRoute, getUserRouteHandler)
  .openapi(
    putDbaasClickhouseNameMaintenanceStartRoute,
    putDbaasClickhouseNameMaintenanceStartRouteHandler,
  )
  .openapi(getAiDeploymentIdLogsRoute, getAiDeploymentIdLogsRouteHandler)
  .openapi(putSksClusterIdUpgradeRoute, putSksClusterIdUpgradeRouteHandler)
  .openapi(postKmsKeyIdCancelDeletionRoute, postKmsKeyIdCancelDeletionRouteHandler)
  .openapi(postKmsKeyIdGenerateDataKeyRoute, postKmsKeyIdGenerateDataKeyRouteHandler)
  .openapi(putVpcIdRoute, putVpcIdRouteHandler)
  .openapi(getVpcIdRoute, getVpcIdRouteHandler)
  .openapi(deleteVpcIdRoute, deleteVpcIdRouteHandler)
  .openapi(getBlockStorageRoute, getBlockStorageRouteHandler)
  .openapi(postBlockStorageRoute, postBlockStorageRouteHandler)
  .openapi(
    deleteDbaasKafkaNameTopicAclConfigAclIdRoute,
    deleteDbaasKafkaNameTopicAclConfigAclIdRouteHandler,
  )
  .openapi(
    postInstanceInstanceIdRevertSnapshotRoute,
    postInstanceInstanceIdRevertSnapshotRouteHandler,
  )
  .openapi(
    putDbaasPostgresServiceNameUserUsernamePasswordResetRoute,
    putDbaasPostgresServiceNameUserUsernamePasswordResetRouteHandler,
  )

export default app
