import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  addressesHandler,
  authenticationProvidersHandler,
  availablePhoneNumberBlocksHandler,
  availablePhoneNumbersHandler,
  balanceHandler,
  billingGroupsHandler,
  callControlApplicationsHandler,
  callEventsHandler,
  callsHandler,
  commentsHandler,
  conferencesHandler,
  connectionsHandler,
  credentialConnectionsHandler,
  detailRecordsHandler,
  documentLinksHandler,
  documentsHandler,
  faxApplicationsHandler,
  faxesHandler,
  fqdnConnectionsHandler,
  fqdnsHandler,
  inventoryCoverageHandler,
  ipConnectionsHandler,
  ipsHandler,
  ledgerBillingGroupReportsHandler,
  managedAccountsHandler,
  mediaHandler,
  messageDetailRecordsHandler,
  messagesHandler,
  messagingHostedNumberOrdersHandler,
  messagingHostedNumbersHandler,
  messagingProfileMetricsHandler,
  messagingProfilesHandler,
  messagingUrlDomainsHandler,
  mobileOperatorNetworksHandler,
  notificationChannelsHandler,
  notificationEventConditionsHandler,
  notificationEventsHandler,
  notificationProfilesHandler,
  notificationSettingsHandler,
  numberBlockOrdersHandler,
  numberLookupHandler,
  numberOrderDocumentsHandler,
  numberOrderPhoneNumbersHandler,
  numberOrdersHandler,
  numberReservationsHandler,
  otaUpdatesHandler,
  outboundVoiceProfilesHandler,
  phoneNumberBlocksHandler,
  phoneNumbersHandler,
  portabilityChecksHandler,
  portingOrdersHandler,
  portingPhoneNumbersHandler,
  portoutsHandler,
  privateWirelessGatewaysHandler,
  queuesHandler,
  recordingsHandler,
  reportsHandler,
  requirementsHandler,
  requirementTypesHandler,
  roomParticipantsHandler,
  roomSessionsHandler,
  roomsHandler,
  shortCodesHandler,
  simCardGroupActionsHandler,
  simCardGroupsHandler,
  simCardOrderPreviewHandler,
  simCardOrdersHandler,
  simCardsHandler,
  subNumberOrdersHandler,
  telephonyCredentialsHandler,
  texmlApplicationsHandler,
  verificationsHandler,
  verifyProfilesHandler,
  webhookDeliveriesHandler,
  whatsappContactsHandler,
  whatsappDetailRecordReportsHandler,
  whatsappMediaHandler,
  whatsappMessagesHandler,
  whatsappUsageAggregationsHandler,
  whatsappUsersHandler,
  wirelessHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionsHandler)
  .route('/', addressesHandler)
  .route('/', authenticationProvidersHandler)
  .route('/', availablePhoneNumberBlocksHandler)
  .route('/', availablePhoneNumbersHandler)
  .route('/', balanceHandler)
  .route('/', billingGroupsHandler)
  .route('/', callControlApplicationsHandler)
  .route('/', callEventsHandler)
  .route('/', callsHandler)
  .route('/', commentsHandler)
  .route('/', conferencesHandler)
  .route('/', connectionsHandler)
  .route('/', credentialConnectionsHandler)
  .route('/', detailRecordsHandler)
  .route('/', documentLinksHandler)
  .route('/', documentsHandler)
  .route('/', faxApplicationsHandler)
  .route('/', faxesHandler)
  .route('/', fqdnConnectionsHandler)
  .route('/', fqdnsHandler)
  .route('/', inventoryCoverageHandler)
  .route('/', ipConnectionsHandler)
  .route('/', ipsHandler)
  .route('/', ledgerBillingGroupReportsHandler)
  .route('/', managedAccountsHandler)
  .route('/', mediaHandler)
  .route('/', messageDetailRecordsHandler)
  .route('/', messagesHandler)
  .route('/', messagingHostedNumberOrdersHandler)
  .route('/', messagingHostedNumbersHandler)
  .route('/', messagingProfileMetricsHandler)
  .route('/', messagingProfilesHandler)
  .route('/', messagingUrlDomainsHandler)
  .route('/', mobileOperatorNetworksHandler)
  .route('/', notificationChannelsHandler)
  .route('/', notificationEventConditionsHandler)
  .route('/', notificationEventsHandler)
  .route('/', notificationProfilesHandler)
  .route('/', notificationSettingsHandler)
  .route('/', numberBlockOrdersHandler)
  .route('/', numberLookupHandler)
  .route('/', numberOrderDocumentsHandler)
  .route('/', numberOrderPhoneNumbersHandler)
  .route('/', numberOrdersHandler)
  .route('/', numberReservationsHandler)
  .route('/', otaUpdatesHandler)
  .route('/', outboundVoiceProfilesHandler)
  .route('/', phoneNumberBlocksHandler)
  .route('/', phoneNumbersHandler)
  .route('/', portabilityChecksHandler)
  .route('/', portingOrdersHandler)
  .route('/', portingPhoneNumbersHandler)
  .route('/', portoutsHandler)
  .route('/', privateWirelessGatewaysHandler)
  .route('/', queuesHandler)
  .route('/', recordingsHandler)
  .route('/', reportsHandler)
  .route('/', requirementTypesHandler)
  .route('/', requirementsHandler)
  .route('/', roomParticipantsHandler)
  .route('/', roomSessionsHandler)
  .route('/', roomsHandler)
  .route('/', shortCodesHandler)
  .route('/', simCardGroupActionsHandler)
  .route('/', simCardGroupsHandler)
  .route('/', simCardOrderPreviewHandler)
  .route('/', simCardOrdersHandler)
  .route('/', simCardsHandler)
  .route('/', subNumberOrdersHandler)
  .route('/', telephonyCredentialsHandler)
  .route('/', texmlApplicationsHandler)
  .route('/', verificationsHandler)
  .route('/', verifyProfilesHandler)
  .route('/', webhookDeliveriesHandler)
  .route('/', whatsappContactsHandler)
  .route('/', whatsappDetailRecordReportsHandler)
  .route('/', whatsappMediaHandler)
  .route('/', whatsappMessagesHandler)
  .route('/', whatsappUsageAggregationsHandler)
  .route('/', whatsappUsersHandler)
  .route('/', wirelessHandler)

export default app
