import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const dbaasHandler = app
  .openapi(deleteDbaasExternalEndpointOpensearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointOpensearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointOpensearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasOpensearchNameAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasOpensearchNameAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasValkeyNameMigrationStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasGrafanaNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresServiceUpgradeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasMysqlServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresServiceNameConnectionPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasMysqlNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasMysqlNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasMysqlNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasMysqlNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasThanosNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasExternalEndpointElasticsearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointElasticsearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointElasticsearchEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasMysqlServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasServiceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasClickhouseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasClickhouseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasClickhouseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasClickhouseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasExternalEndpointRsyslogNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasCaCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasSettingsGrafanaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasPostgresServiceNameDatabaseDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasClickhouseServiceNameRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresNameMigrationStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasKafkaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasKafkaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasKafkaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasKafkaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasKafkaNameSchemaRegistryAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalIntegrationsServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalIntegrationIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasClickhouseServiceNameRoleRoleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasKafkaServiceNameConnectPasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasOpensearchServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointPrometheusEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasExternalEndpointPrometheusEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointPrometheusEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasKafkaServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasValkeyServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasSettingsMysqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasSettingsValkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresServiceNameDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasSettingsThanosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasSettingsClickhouseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasOpensearchServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasIntegrationTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasPostgresServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasPostgresServiceNameUserUsernameAllowReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasKafkaNameTopicAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasExternalEndpointOpensearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasMysqlServiceNameDatabaseDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasServiceLogsServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasPostgresNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasGrafanaServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasGrafanaServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasClickhouseServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasClickhouseServiceNameAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasClickhouseServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasClickhouseServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasValkeyServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasValkeyServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasKafkaNameSchemaRegistryAclConfigAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasKafkaServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasServiceTypeServiceTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasExternalEndpointDatadogNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasMysqlNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasOpensearchServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasMysqlServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasServiceMetricsServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasMysqlNameEnableWritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasKafkaServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasTaskMigrationCheckServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasExternalEndpointDatadogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointDatadogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointDatadogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasClickhouseServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasExternalEndpointPrometheusNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasThanosServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasClickhouseServiceNameUserUserUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasSettingsPgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasValkeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasValkeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasValkeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasValkeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasMysqlNameMigrationStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasKafkaNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasThanosNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasThanosNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasThanosNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasThanosNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasMigrationStatusNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasMysqlServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasMysqlServiceNameDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasSettingsKafkaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasPostgresServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasSettingsOpensearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointSourceServiceNameAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasGrafanaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasGrafanaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasGrafanaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasGrafanaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasExternalEndpointRsyslogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointRsyslogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointRsyslogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasExternalEndpointElasticsearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasOpensearchNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasKafkaNameAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasKafkaServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasOpensearchServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasValkeyNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasOpensearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasOpensearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasOpensearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasOpensearchNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointSourceServiceNameDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasValkeyServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasPostgresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasPostgresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasPostgresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasValkeyServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasValkeyServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasIntegrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasTaskServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasClickhouseNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasKafkaNameTopicAclConfigAclIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasPostgresServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
