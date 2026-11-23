import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aiHandler,
  antiAffinityGroupHandler,
  apiKeyHandler,
  blockStorageHandler,
  blockStorageSnapshotHandler,
  consoleHandler,
  dbaasCaCertificateHandler,
  dbaasClickhouseHandler,
  dbaasExternalEndpointDatadogHandler,
  dbaasExternalEndpointElasticsearchHandler,
  dbaasExternalEndpointHandler,
  dbaasExternalEndpointOpensearchHandler,
  dbaasExternalEndpointPrometheusHandler,
  dbaasExternalEndpointRsyslogHandler,
  dbaasExternalEndpointsHandler,
  dbaasExternalEndpointTypesHandler,
  dbaasExternalIntegrationHandler,
  dbaasExternalIntegrationSettingsDatadogHandler,
  dbaasExternalIntegrationsHandler,
  dbaasGrafanaHandler,
  dbaasIntegrationHandler,
  dbaasIntegrationSettingsHandler,
  dbaasIntegrationTypesHandler,
  dbaasKafkaHandler,
  dbaasMigrationStatusHandler,
  dbaasMysqlHandler,
  dbaasOpensearchHandler,
  dbaasPostgresHandler,
  dbaasServiceHandler,
  dbaasServiceLogsHandler,
  dbaasServiceMetricsHandler,
  dbaasServiceTypeHandler,
  dbaasSettingsClickhouseHandler,
  dbaasSettingsGrafanaHandler,
  dbaasSettingsKafkaHandler,
  dbaasSettingsMysqlHandler,
  dbaasSettingsOpensearchHandler,
  dbaasSettingsPgHandler,
  dbaasSettingsThanosHandler,
  dbaasSettingsValkeyHandler,
  dbaasTaskHandler,
  dbaasTaskMigrationCheckHandler,
  dbaasThanosHandler,
  dbaasValkeyHandler,
  deployTargetHandler,
  dnsDomainHandler,
  elasticIpHandler,
  envImpactHandler,
  environmentalImpactHandler,
  eventHandler,
  iamOrganizationPolicyHandler,
  iamOrganizationPolicyResetHandler,
  iamRoleHandler,
  instanceHandler,
  instancePoolHandler,
  instanceTypeHandler,
  kmsKeyHandler,
  liveBalanceHandler,
  loadBalancerHandler,
  operationHandler,
  organizationHandler,
  privateNetworkHandler,
  quotaHandler,
  reverseDnsHandler,
  securityGroupHandler,
  sksClusterDeprecatedResourcesHandler,
  sksClusterHandler,
  sksClusterKubeconfigHandler,
  sksClusterVersionHandler,
  sksTemplateHandler,
  snapshotHandler,
  sosBucketsUsageHandler,
  sosHandler,
  sshKeyHandler,
  templateHandler,
  usageReportHandler,
  userHandler,
  vpcHandler,
  zoneHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', loadBalancerHandler)
  .route('/', dbaasExternalEndpointOpensearchHandler)
  .route('/', dbaasOpensearchHandler)
  .route('/', instancePoolHandler)
  .route('/', instanceHandler)
  .route('/', dbaasValkeyHandler)
  .route('/', reverseDnsHandler)
  .route('/', antiAffinityGroupHandler)
  .route('/', usageReportHandler)
  .route('/', eventHandler)
  .route('/', securityGroupHandler)
  .route('/', dbaasGrafanaHandler)
  .route('/', kmsKeyHandler)
  .route('/', dbaasPostgresHandler)
  .route('/', dbaasMysqlHandler)
  .route('/', aiHandler)
  .route('/', privateNetworkHandler)
  .route('/', iamRoleHandler)
  .route('/', vpcHandler)
  .route('/', dbaasThanosHandler)
  .route('/', dbaasExternalEndpointElasticsearchHandler)
  .route('/', dbaasServiceTypeHandler)
  .route('/', instanceTypeHandler)
  .route('/', dbaasClickhouseHandler)
  .route('/', sksTemplateHandler)
  .route('/', dbaasServiceHandler)
  .route('/', elasticIpHandler)
  .route('/', zoneHandler)
  .route('/', dbaasExternalEndpointRsyslogHandler)
  .route('/', sksClusterKubeconfigHandler)
  .route('/', dnsDomainHandler)
  .route('/', dbaasCaCertificateHandler)
  .route('/', dbaasSettingsGrafanaHandler)
  .route('/', environmentalImpactHandler)
  .route('/', deployTargetHandler)
  .route('/', liveBalanceHandler)
  .route('/', blockStorageHandler)
  .route('/', dbaasKafkaHandler)
  .route('/', sksClusterHandler)
  .route('/', blockStorageSnapshotHandler)
  .route('/', dbaasExternalIntegrationsHandler)
  .route('/', dbaasExternalIntegrationHandler)
  .route('/', dbaasExternalEndpointTypesHandler)
  .route('/', organizationHandler)
  .route('/', snapshotHandler)
  .route('/', quotaHandler)
  .route('/', sksClusterDeprecatedResourcesHandler)
  .route('/', dbaasExternalEndpointPrometheusHandler)
  .route('/', apiKeyHandler)
  .route('/', dbaasExternalIntegrationSettingsDatadogHandler)
  .route('/', dbaasSettingsMysqlHandler)
  .route('/', dbaasSettingsValkeyHandler)
  .route('/', dbaasSettingsThanosHandler)
  .route('/', dbaasSettingsClickhouseHandler)
  .route('/', dbaasIntegrationTypesHandler)
  .route('/', envImpactHandler)
  .route('/', operationHandler)
  .route('/', iamOrganizationPolicyHandler)
  .route('/', dbaasServiceLogsHandler)
  .route('/', templateHandler)
  .route('/', userHandler)
  .route('/', dbaasExternalEndpointDatadogHandler)
  .route('/', sosBucketsUsageHandler)
  .route('/', sshKeyHandler)
  .route('/', dbaasServiceMetricsHandler)
  .route('/', dbaasTaskMigrationCheckHandler)
  .route('/', consoleHandler)
  .route('/', dbaasIntegrationHandler)
  .route('/', dbaasIntegrationSettingsHandler)
  .route('/', dbaasSettingsPgHandler)
  .route('/', dbaasExternalEndpointsHandler)
  .route('/', dbaasMigrationStatusHandler)
  .route('/', dbaasSettingsKafkaHandler)
  .route('/', iamOrganizationPolicyResetHandler)
  .route('/', dbaasSettingsOpensearchHandler)
  .route('/', dbaasExternalEndpointHandler)
  .route('/', dbaasTaskHandler)
  .route('/', sosHandler)
  .route('/', sksClusterVersionHandler)

export default app
