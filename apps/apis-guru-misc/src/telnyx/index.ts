import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessTokensHandler,
  addressesHandler,
  authenticationProvidersHandler,
  billingGroupsHandler,
  billingHandler,
  bulkCredentialsHandler,
  callCommandsHandler,
  callControlApplicationsHandler,
  callInformationHandler,
  cdrUsageReportsHandler,
  conferenceCommandsHandler,
  connectionsHandler,
  credentialConnectionsHandler,
  credentialsHandler,
  csvDownloadsHandler,
  debuggingHandler,
  detailRecordsHandler,
  documentsHandler,
  fqdnConnectionsHandler,
  fqdNsHandler,
  inboundChannelsHandler,
  inventoryLevelHandler,
  ipConnectionsHandler,
  iPsHandler,
  managedAccountsHandler,
  mdrDetailReportsHandler,
  mdrSearchBetaHandler,
  mdrUsageReportsHandler,
  mediaStorageAPIHandler,
  messagesHandler,
  messagingHostedNumberHandler,
  messagingProfilesHandler,
  messagingURLDomainsHandler,
  mobileOperatorNetworksHandler,
  notificationsHandler,
  numberBackgroundJobsHandler,
  numberBlockOrdersHandler,
  numberBlocksBackgroundJobsHandler,
  numberConfigurationsHandler,
  numberLookupHandler,
  numberOrderDocumentsHandler,
  numberOrdersHandler,
  numberPortoutHandler,
  numberReservationsHandler,
  numberSearchHandler,
  otaUpdatesHandler,
  outboundVoiceProfilesHandler,
  phoneNumberPortingHandler,
  portingOrderHandler,
  privateWirelessGatewaysHandler,
  programmableFaxApplicationsHandler,
  programmableFaxCommandsHandler,
  queueCommandsHandler,
  recordingsCommandsHandler,
  reportingHandler,
  reportsHandler,
  requirementsHandler,
  requirementTypesHandler,
  roomParticipantsHandler,
  roomsClientTokensHandler,
  roomSessionsHandler,
  roomsHandler,
  shortCodesHandler,
  simCardGroupActionsHandler,
  simCardGroupsHandler,
  simCardOrdersHandler,
  simCardsHandler,
  teXMLApplicationsHandler,
  verifyHandler,
  wdrDetailReportsHandler,
  webhooksHandler,
  whatsAppContactsHandler,
  whatsAppDetailReportsHandler,
  whatsAppMediaHandler,
  whatsAppMessagesHandler,
  whatsAppUsageAggregationsHandler,
  whatsAppUsersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bulkCredentialsHandler)
  .route('/', simCardsHandler)
  .route('/', addressesHandler)
  .route('/', authenticationProvidersHandler)
  .route('/', numberSearchHandler)
  .route('/', billingHandler)
  .route('/', billingGroupsHandler)
  .route('/', callControlApplicationsHandler)
  .route('/', debuggingHandler)
  .route('/', callCommandsHandler)
  .route('/', callInformationHandler)
  .route('/', numberOrdersHandler)
  .route('/', conferenceCommandsHandler)
  .route('/', connectionsHandler)
  .route('/', credentialConnectionsHandler)
  .route('/', detailRecordsHandler)
  .route('/', documentsHandler)
  .route('/', programmableFaxApplicationsHandler)
  .route('/', programmableFaxCommandsHandler)
  .route('/', fqdnConnectionsHandler)
  .route('/', fqdNsHandler)
  .route('/', inventoryLevelHandler)
  .route('/', ipConnectionsHandler)
  .route('/', iPsHandler)
  .route('/', reportsHandler)
  .route('/', managedAccountsHandler)
  .route('/', mediaStorageAPIHandler)
  .route('/', mdrSearchBetaHandler)
  .route('/', messagesHandler)
  .route('/', messagingHostedNumberHandler)
  .route('/', messagingProfilesHandler)
  .route('/', messagingURLDomainsHandler)
  .route('/', mobileOperatorNetworksHandler)
  .route('/', notificationsHandler)
  .route('/', numberBlockOrdersHandler)
  .route('/', numberLookupHandler)
  .route('/', numberOrderDocumentsHandler)
  .route('/', numberReservationsHandler)
  .route('/', otaUpdatesHandler)
  .route('/', outboundVoiceProfilesHandler)
  .route('/', numberBlocksBackgroundJobsHandler)
  .route('/', numberConfigurationsHandler)
  .route('/', csvDownloadsHandler)
  .route('/', inboundChannelsHandler)
  .route('/', numberBackgroundJobsHandler)
  .route('/', phoneNumberPortingHandler)
  .route('/', portingOrderHandler)
  .route('/', numberPortoutHandler)
  .route('/', privateWirelessGatewaysHandler)
  .route('/', queueCommandsHandler)
  .route('/', recordingsCommandsHandler)
  .route('/', mdrDetailReportsHandler)
  .route('/', cdrUsageReportsHandler)
  .route('/', mdrUsageReportsHandler)
  .route('/', wdrDetailReportsHandler)
  .route('/', requirementTypesHandler)
  .route('/', requirementsHandler)
  .route('/', roomParticipantsHandler)
  .route('/', roomSessionsHandler)
  .route('/', roomsHandler)
  .route('/', roomsClientTokensHandler)
  .route('/', shortCodesHandler)
  .route('/', simCardGroupActionsHandler)
  .route('/', simCardGroupsHandler)
  .route('/', simCardOrdersHandler)
  .route('/', credentialsHandler)
  .route('/', accessTokensHandler)
  .route('/', teXMLApplicationsHandler)
  .route('/', verifyHandler)
  .route('/', webhooksHandler)
  .route('/', whatsAppContactsHandler)
  .route('/', whatsAppDetailReportsHandler)
  .route('/', whatsAppMediaHandler)
  .route('/', whatsAppMessagesHandler)
  .route('/', whatsAppUsageAggregationsHandler)
  .route('/', whatsAppUsersHandler)
  .route('/', reportingHandler)

export default app
