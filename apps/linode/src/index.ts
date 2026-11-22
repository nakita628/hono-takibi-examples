import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessKeysHandler,
  accountAgreementsHandler,
  accountAvailabilityHandler,
  accountHandler,
  accountSettingsHandler,
  accountTransferHandler,
  advancedParametersHandler,
  alertsHandler,
  attachmentsHandler,
  backupsHandler,
  betaProgramsHandler,
  bucketsHandler,
  childAccountsHandler,
  clusterDashboardHandler,
  clustersHandler,
  configurationProfileInterfacesHandler,
  configurationProfilesHandler,
  configurationsHandler,
  controlPlaneACLHandler,
  credentialsHandler,
  databasesHandler,
  devicesHandler,
  disksHandler,
  domainsHandler,
  domainZoneFileHandler,
  endpointsHandler,
  enginesHandler,
  entityTransfersHandler,
  eventsHandler,
  firewallSettingsHandler,
  firewallsHandler,
  grantsHandler,
  imagesHandler,
  imageSharingHandler,
  invoicesHandler,
  ipAddressesHandler,
  iPv4AddressesHandler,
  iPv6PoolsHandler,
  iPv6RangesHandler,
  kernelsHandler,
  kubeconfigsHandler,
  linodeInstancesHandler,
  linodeInterfacesHandler,
  linodeTypesHandler,
  lkeapiEndpointsHandler,
  lkeServiceTokensHandler,
  lkeTypesHandler,
  lkeVersionsHandler,
  loginsHandler,
  longviewClientsHandler,
  longviewPlansHandler,
  longviewSubscriptionsHandler,
  longviewTypesHandler,
  maintenancePoliciesHandler,
  maintenancesHandler,
  managedContactsHandler,
  managedCredentialsHandler,
  managedIssuesHandler,
  managedLinodeSettingsHandler,
  managedServiceMonitorsHandler,
  managedSSHKeysHandler,
  managedStatisticsHandler,
  metricsHandler,
  networkTransferPricesHandler,
  nodeBalancersHandler,
  nodeBalancerTypesHandler,
  nodePoolsHandler,
  nodesHandler,
  notificationsHandler,
  oAuthAppsHandler,
  oAuthClientHandler,
  oAuthClientsHandler,
  oAuthPreferencesHandler,
  objectStorageHandler,
  paymentMethodsHandler,
  paymentsHandler,
  personalAccessTokensHandler,
  phoneNumberHandler,
  placementGroupsHandler,
  profileHandler,
  promoCreditsHandler,
  recordsHandler,
  regionsHandler,
  repliesHandler,
  securityQuestionsHandler,
  serviceTransfersHandler,
  sshKeysHandler,
  sslCertificatesHandler,
  stackScriptsHandler,
  statisticsHandler,
  supportTicketsHandler,
  tagsHandler,
  templatesHandler,
  tlssslCertificatesHandler,
  trustedDevicesHandler,
  twoFactorAuthenticationHandler,
  typesHandler,
  usersHandler,
  vlaNsHandler,
  volumesHandler,
  volumeTypesHandler,
  vpCsHandler,
  vpcSubnetsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', accountAgreementsHandler)
  .route('/', accountAvailabilityHandler)
  .route('/', betaProgramsHandler)
  .route('/', childAccountsHandler)
  .route('/', paymentsHandler)
  .route('/', entityTransfersHandler)
  .route('/', eventsHandler)
  .route('/', invoicesHandler)
  .route('/', loginsHandler)
  .route('/', maintenancesHandler)
  .route('/', notificationsHandler)
  .route('/', oAuthClientsHandler)
  .route('/', oAuthClientHandler)
  .route('/', paymentMethodsHandler)
  .route('/', promoCreditsHandler)
  .route('/', serviceTransfersHandler)
  .route('/', accountSettingsHandler)
  .route('/', accountTransferHandler)
  .route('/', usersHandler)
  .route('/', enginesHandler)
  .route('/', databasesHandler)
  .route('/', advancedParametersHandler)
  .route('/', credentialsHandler)
  .route('/', sslCertificatesHandler)
  .route('/', typesHandler)
  .route('/', domainsHandler)
  .route('/', recordsHandler)
  .route('/', domainZoneFileHandler)
  .route('/', imagesHandler)
  .route('/', imageSharingHandler)
  .route('/', linodeInstancesHandler)
  .route('/', backupsHandler)
  .route('/', configurationProfilesHandler)
  .route('/', configurationProfileInterfacesHandler)
  .route('/', disksHandler)
  .route('/', firewallsHandler)
  .route('/', linodeInterfacesHandler)
  .route('/', ipAddressesHandler)
  .route('/', nodeBalancersHandler)
  .route('/', statisticsHandler)
  .route('/', volumesHandler)
  .route('/', kernelsHandler)
  .route('/', stackScriptsHandler)
  .route('/', linodeTypesHandler)
  .route('/', clustersHandler)
  .route('/', lkeapiEndpointsHandler)
  .route('/', controlPlaneACLHandler)
  .route('/', clusterDashboardHandler)
  .route('/', kubeconfigsHandler)
  .route('/', nodesHandler)
  .route('/', nodePoolsHandler)
  .route('/', lkeServiceTokensHandler)
  .route('/', lkeVersionsHandler)
  .route('/', lkeTypesHandler)
  .route('/', longviewClientsHandler)
  .route('/', longviewPlansHandler)
  .route('/', longviewSubscriptionsHandler)
  .route('/', longviewTypesHandler)
  .route('/', maintenancePoliciesHandler)
  .route('/', managedContactsHandler)
  .route('/', managedCredentialsHandler)
  .route('/', managedSSHKeysHandler)
  .route('/', managedIssuesHandler)
  .route('/', managedLinodeSettingsHandler)
  .route('/', managedServiceMonitorsHandler)
  .route('/', managedStatisticsHandler)
  .route('/', alertsHandler)
  .route('/', metricsHandler)
  .route('/', networkTransferPricesHandler)
  .route('/', firewallSettingsHandler)
  .route('/', templatesHandler)
  .route('/', devicesHandler)
  .route('/', iPv4AddressesHandler)
  .route('/', iPv6PoolsHandler)
  .route('/', iPv6RangesHandler)
  .route('/', vlaNsHandler)
  .route('/', nodeBalancerTypesHandler)
  .route('/', configurationsHandler)
  .route('/', vpCsHandler)
  .route('/', bucketsHandler)
  .route('/', tlssslCertificatesHandler)
  .route('/', objectStorageHandler)
  .route('/', endpointsHandler)
  .route('/', accessKeysHandler)
  .route('/', placementGroupsHandler)
  .route('/', profileHandler)
  .route('/', oAuthAppsHandler)
  .route('/', trustedDevicesHandler)
  .route('/', grantsHandler)
  .route('/', phoneNumberHandler)
  .route('/', oAuthPreferencesHandler)
  .route('/', securityQuestionsHandler)
  .route('/', sshKeysHandler)
  .route('/', twoFactorAuthenticationHandler)
  .route('/', personalAccessTokensHandler)
  .route('/', regionsHandler)
  .route('/', supportTicketsHandler)
  .route('/', attachmentsHandler)
  .route('/', repliesHandler)
  .route('/', tagsHandler)
  .route('/', volumeTypesHandler)
  .route('/', vpcSubnetsHandler)

export default app
