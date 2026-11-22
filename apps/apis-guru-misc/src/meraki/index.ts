import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionBatchesHandler,
  adminsHandler,
  alertSettingsHandler,
  apiUsageHandler,
  bluetoothClientsHandler,
  bluetoothSettingsHandler,
  cameraQualityRetentionProfilesHandler,
  camerasHandler,
  changeLogHandler,
  clientsHandler,
  configTemplatesHandler,
  contentFilteringCategoriesHandler,
  contentFilteringRulesHandler,
  devicesHandler,
  eventsHandler,
  firewalledServicesHandler,
  floorPlansHandler,
  intrusionSettingsHandler,
  licensesHandler,
  linkAggregationsHandler,
  malwareSettingsHandler,
  merakiAuthUsersHandler,
  mglanSettingsHandler,
  mgPortForwardingRulesHandler,
  monitoredMediaServersHandler,
  mrl3FirewallHandler,
  mvSenseHandler,
  mx11NATRulesHandler,
  mx1ManyNATRulesHandler,
  mxCellularFirewallHandler,
  mxl3InboundFirewallHandler,
  mxl3OutboundFirewallHandler,
  mxl7ApplicationCategoriesHandler,
  mxl7FirewallHandler,
  mxPortForwardingRulesHandler,
  mxStaticRoutesHandler,
  mxvlanPortsHandler,
  mxvpnFirewallHandler,
  mxWarmSpareSettingsHandler,
  namedTagScopeHandler,
  networksHandler,
  openAPISpecHandler,
  organizationsHandler,
  piiHandler,
  radioSettingsHandler,
  samlRolesHandler,
  securityEventsHandler,
  smHandler,
  snmpSettingsHandler,
  splashLoginAttemptsHandler,
  splashSettingsHandler,
  ssiDsHandler,
  switchAccessPoliciesHandler,
  switchPortSchedulesHandler,
  switchPortsHandler,
  switchProfilesHandler,
  switchSettingsHandler,
  switchStacksHandler,
  syslogServersHandler,
  trafficShapingUplinkSettingsHandler,
  vlaNsHandler,
  wirelessHealthHandler,
  wirelessSettingsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', mvSenseHandler)
  .route('/', camerasHandler)
  .route('/', mglanSettingsHandler)
  .route('/', mgPortForwardingRulesHandler)
  .route('/', clientsHandler)
  .route('/', devicesHandler)
  .route('/', switchPortsHandler)
  .route('/', bluetoothSettingsHandler)
  .route('/', networksHandler)
  .route('/', switchAccessPoliciesHandler)
  .route('/', alertSettingsHandler)
  .route('/', mxl3InboundFirewallHandler)
  .route('/', mxvlanPortsHandler)
  .route('/', bluetoothClientsHandler)
  .route('/', cameraQualityRetentionProfilesHandler)
  .route('/', mxCellularFirewallHandler)
  .route('/', wirelessHealthHandler)
  .route('/', contentFilteringRulesHandler)
  .route('/', contentFilteringCategoriesHandler)
  .route('/', ssiDsHandler)
  .route('/', eventsHandler)
  .route('/', firewalledServicesHandler)
  .route('/', floorPlansHandler)
  .route('/', mxl3OutboundFirewallHandler)
  .route('/', mxl7FirewallHandler)
  .route('/', mxl7ApplicationCategoriesHandler)
  .route('/', merakiAuthUsersHandler)
  .route('/', mx1ManyNATRulesHandler)
  .route('/', mx11NATRulesHandler)
  .route('/', piiHandler)
  .route('/', mxPortForwardingRulesHandler)
  .route('/', intrusionSettingsHandler)
  .route('/', malwareSettingsHandler)
  .route('/', securityEventsHandler)
  .route('/', smHandler)
  .route('/', namedTagScopeHandler)
  .route('/', snmpSettingsHandler)
  .route('/', splashLoginAttemptsHandler)
  .route('/', mrl3FirewallHandler)
  .route('/', splashSettingsHandler)
  .route('/', mxStaticRoutesHandler)
  .route('/', mxWarmSpareSettingsHandler)
  .route('/', linkAggregationsHandler)
  .route('/', switchPortSchedulesHandler)
  .route('/', switchSettingsHandler)
  .route('/', switchStacksHandler)
  .route('/', syslogServersHandler)
  .route('/', trafficShapingUplinkSettingsHandler)
  .route('/', vlaNsHandler)
  .route('/', radioSettingsHandler)
  .route('/', wirelessSettingsHandler)
  .route('/', organizationsHandler)
  .route('/', actionBatchesHandler)
  .route('/', adminsHandler)
  .route('/', apiUsageHandler)
  .route('/', configTemplatesHandler)
  .route('/', switchProfilesHandler)
  .route('/', changeLogHandler)
  .route('/', monitoredMediaServersHandler)
  .route('/', licensesHandler)
  .route('/', openAPISpecHandler)
  .route('/', samlRolesHandler)
  .route('/', mxvpnFirewallHandler)

export default app
