import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessTokensHandler,
  actionsHandler,
  addressesHandler,
  advancedNumberOrdersHandler,
  agentGatewayAPIsHandler,
  agentGatewayGuardrailsHandler,
  agentGatewayKeysHandler,
  agentGatewayMCPServersHandler,
  agentGatewayPoliciesHandler,
  agentGatewayPolicyAttachmentsHandler,
  agentGatewaysHandler,
  agentGatewaySpendLogsHandler,
  agentGatewayTeamsHandler,
  agentGatewayToolPermissionsHandler,
  aiCollectionsHandler,
  aiGatewayHandler,
  aiTestsHandler,
  anthropicMessagesHandler,
  artifactsHandler,
  assistantsHandler,
  audioHandler,
  auditLogsHandler,
  authenticationProvidersHandler,
  autoRechargePreferencesHandler,
  avatarsHandler,
  billingGroupsHandler,
  billingHandler,
  botSignupHandler,
  brandsHandler,
  browserSessionsHandler,
  bucketSSLCertificateHandler,
  bucketUsageHandler,
  bulkPhoneNumberCampaignsHandler,
  bulkPhoneNumberOperationsHandler,
  bundlesHandler,
  callCommandsHandler,
  callControlApplicationsHandler,
  callInformationHandler,
  callRecordingsHandler,
  campaignHandler,
  cdrReportsHandler,
  cdrUsageReportsHandler,
  chargesBreakdownHandler,
  chargesSummaryHandler,
  chatHandler,
  cloudfsFilesystemsHandler,
  clustersHandler,
  commentsHandler,
  conferenceCommandsHandler,
  connectionsHandler,
  contentsHandler,
  conversationHistoriesHandler,
  conversationsHandler,
  countryCoverageHandler,
  coverageHandler,
  credentialConnectionsHandler,
  credentialsHandler,
  csvDownloadsHandler,
  customerServiceRecordHandler,
  dataMigrationHandler,
  debuggingHandler,
  decisionModelsHandler,
  dedicatedIPsHandler,
  detailRecordsHandler,
  dialogflowIntegrationHandler,
  dirReferencesHandler,
  displayIdentityRecordsHandler,
  documentsHandler,
  dynamicEmergencyAddressesHandler,
  dynamicEmergencyEndpointsHandler,
  emailDomainDNSRecordsHandler,
  emailDomainsHandler,
  emailDraftsHandler,
  emailEventsHandler,
  emailInboxesHandler,
  emailMessagesHandler,
  emailSuppressionImportsHandler,
  emailSuppressionsHandler,
  emailTemplatesHandler,
  emailThreadsHandler,
  emailUnsubscribeGroupsHandler,
  emailValidationsHandler,
  emailVerificationHandler,
  emailWebhooksHandler,
  embeddingsHandler,
  enterprisesHandler,
  enumHandler,
  externalConnectionsHandler,
  fqdnConnectionsHandler,
  fqdNsHandler,
  functionsHandler,
  globalIPsHandler,
  hostedNumbersHandler,
  inexplicitNumberOrdersHandler,
  infringementClaimsHandler,
  integrationSecretsHandler,
  integrationsHandler,
  inventoryLevelHandler,
  invoicesHandler,
  ipAddressesHandler,
  ipConnectionsHandler,
  ipPoolsHandler,
  ipRangesHandler,
  iPsHandler,
  kvKeysHandler,
  kvNamespacesHandler,
  machinePaymentsHandler,
  managedAccountsHandler,
  mcpServersHandler,
  mdrDetailedReportsHandler,
  mdrDetailReportsHandler,
  mdrUsageReportsHandler,
  mediaStorageAPIHandler,
  meetingCalendarConnectionsHandler,
  meetingSessionActionsHandler,
  meetingSessionArtifactsHandler,
  meetingSessionDataHandler,
  meetingSessionsHandler,
  memoryHandler,
  messagesHandler,
  messagingHandler,
  messagingURLDomainsHandler,
  missionsHandler,
  mobileNetworkOperatorsHandler,
  mobileNumberSettingsHandler,
  mobilePhoneNumbersHandler,
  mobileVoiceConnectionsHandler,
  namespacesHandler,
  networkRoutesHandler,
  networksHandler,
  noiseSuppressionEnginesHandler,
  notificationsHandler,
  numberLookupHandler,
  numberPortoutHandler,
  numberSettingsHandler,
  numbersFeaturesHandler,
  oAuthClientsHandler,
  oAuthDiscoveryHandler,
  oAuthGrantsHandler,
  oAuthProtocolHandler,
  openAIChatHandler,
  openAIEmbeddingsHandler,
  operationsHandler,
  optOutManagementHandler,
  organizationUsersHandler,
  otaUpdatesHandler,
  outboundVoiceProfilesHandler,
  payConnectorsHandler,
  phoneNumberBatchesHandler,
  phoneNumberBlockOrdersHandler,
  phoneNumberBlocksBackgroundJobsHandler,
  phoneNumberCampaignsHandler,
  phoneNumberConfigurationsHandler,
  phoneNumberOrdersHandler,
  phoneNumberPortingHandler,
  phoneNumberReservationsHandler,
  phoneNumberSearchHandler,
  phoneNumbersHandler,
  portingOrdersHandler,
  presignedObjectURLsHandler,
  pricingHandler,
  privateWirelessGatewaysHandler,
  profilesHandler,
  programmableFaxApplicationsHandler,
  programmableFaxCommandsHandler,
  pronunciationDictionariesHandler,
  publicInternetGatewaysHandler,
  pushCredentialsHandler,
  queueCommandsHandler,
  rcsAgentsHandler,
  rcsBrandsHandler,
  rcsHandler,
  referenceDataHandler,
  regionsHandler,
  regulatoryRequirementsHandler,
  reportingHandler,
  reportsHandler,
  reputationHandler,
  requirementGroupsHandler,
  requirementsHandler,
  requirementTypesHandler,
  researchHandler,
  roomCompositionsHandler,
  roomParticipantsHandler,
  roomRecordingsHandler,
  roomsClientTokensHandler,
  roomSessionsHandler,
  roomsHandler,
  sessionAnalysisHandler,
  setiObservabilityHandler,
  settingsHandler,
  sharedCampaignsHandler,
  shortCodesHandler,
  simCardActionsHandler,
  simCardGroupActionsHandler,
  simCardGroupsHandler,
  simCardOrdersHandler,
  simCardsHandler,
  siprecConnectorsHandler,
  sourcesHandler,
  speechToTextBatchReportsHandler,
  speechToTextCapabilitiesHandler,
  speechToTextOverWebSocketsHandler,
  speechToTextUsageReportsHandler,
  spendLimitsHandler,
  sqlDatabasesHandler,
  statefulActorsHandler,
  storedPaymentTransactionsHandler,
  tailscaleSubnetRoutersHandler,
  telcoDataUsageReportsHandler,
  termsOfServiceHandler,
  teXMLApplicationsHandler,
  teXMLRESTCommandsHandler,
  textToSpeechCommandsHandler,
  trafficPolicyProfilesHandler,
  tunnelsHandler,
  uacConnectionsHandler,
  usageReportsBETAHandler,
  userAddressesHandler,
  userBundlesHandler,
  userProfileHandler,
  userTagsHandler,
  verificationRequestsHandler,
  verifiedNumbersHandler,
  verifyHandler,
  virtualCrossConnectsHandler,
  voiceChannelsHandler,
  voiceClonesHandler,
  voiceDesignsHandler,
  voicemailHandler,
  voiceSDKStatsHandler,
  wdrDetailReportsHandler,
  webhooksHandler,
  webSearchHandler,
  whatsappBusinessAccountsHandler,
  whatsappMessageTemplatesHandler,
  whatsappMessagingHandler,
  whatsappPhoneNumbersHandler,
  whatsappSignupHandler,
  wireGuardInterfacesHandler,
  wirelessBlocklistsHandler,
  wirelessRegionsHandler,
  x402PaymentTransactionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', oAuthDiscoveryHandler)
  .route('/', brandsHandler)
  .route('/', campaignHandler)
  .route('/', enumHandler)
  .route('/', sharedCampaignsHandler)
  .route('/', bulkPhoneNumberCampaignsHandler)
  .route('/', phoneNumberCampaignsHandler)
  .route('/', ipAddressesHandler)
  .route('/', ipRangesHandler)
  .route('/', simCardsHandler)
  .route('/', addressesHandler)
  .route('/', advancedNumberOrdersHandler)
  .route('/', agentGatewaysHandler)
  .route('/', agentGatewayAPIsHandler)
  .route('/', agentGatewayGuardrailsHandler)
  .route('/', agentGatewayKeysHandler)
  .route('/', agentGatewayToolPermissionsHandler)
  .route('/', agentGatewayMCPServersHandler)
  .route('/', agentGatewayPoliciesHandler)
  .route('/', agentGatewayPolicyAttachmentsHandler)
  .route('/', agentGatewaySpendLogsHandler)
  .route('/', agentGatewayTeamsHandler)
  .route('/', anthropicMessagesHandler)
  .route('/', assistantsHandler)
  .route('/', audioHandler)
  .route('/', avatarsHandler)
  .route('/', chatHandler)
  .route('/', clustersHandler)
  .route('/', aiCollectionsHandler)
  .route('/', conversationHistoriesHandler)
  .route('/', conversationsHandler)
  .route('/', embeddingsHandler)
  .route('/', integrationsHandler)
  .route('/', mcpServersHandler)
  .route('/', namespacesHandler)
  .route('/', operationsHandler)
  .route('/', profilesHandler)
  .route('/', memoryHandler)
  .route('/', sourcesHandler)
  .route('/', settingsHandler)
  .route('/', missionsHandler)
  .route('/', openAIChatHandler)
  .route('/', openAIEmbeddingsHandler)
  .route('/', aiTestsHandler)
  .route('/', decisionModelsHandler)
  .route('/', messagingHandler)
  .route('/', artifactsHandler)
  .route('/', auditLogsHandler)
  .route('/', authenticationProvidersHandler)
  .route('/', phoneNumberSearchHandler)
  .route('/', billingHandler)
  .route('/', billingGroupsHandler)
  .route('/', botSignupHandler)
  .route('/', browserSessionsHandler)
  .route('/', actionsHandler)
  .route('/', simCardActionsHandler)
  .route('/', bundlesHandler)
  .route('/', userBundlesHandler)
  .route('/', meetingCalendarConnectionsHandler)
  .route('/', callControlApplicationsHandler)
  .route('/', debuggingHandler)
  .route('/', referenceDataHandler)
  .route('/', callCommandsHandler)
  .route('/', callInformationHandler)
  .route('/', voiceChannelsHandler)
  .route('/', chargesBreakdownHandler)
  .route('/', chargesSummaryHandler)
  .route('/', phoneNumberOrdersHandler)
  .route('/', statefulActorsHandler)
  .route('/', functionsHandler)
  .route('/', conferenceCommandsHandler)
  .route('/', connectionsHandler)
  .route('/', countryCoverageHandler)
  .route('/', credentialConnectionsHandler)
  .route('/', callRecordingsHandler)
  .route('/', customerServiceRecordHandler)
  .route('/', detailRecordsHandler)
  .route('/', dialogflowIntegrationHandler)
  .route('/', displayIdentityRecordsHandler)
  .route('/', commentsHandler)
  .route('/', infringementClaimsHandler)
  .route('/', phoneNumberBatchesHandler)
  .route('/', phoneNumbersHandler)
  .route('/', dirReferencesHandler)
  .route('/', emailVerificationHandler)
  .route('/', documentsHandler)
  .route('/', dynamicEmergencyAddressesHandler)
  .route('/', dynamicEmergencyEndpointsHandler)
  .route('/', dedicatedIPsHandler)
  .route('/', ipPoolsHandler)
  .route('/', emailSuppressionsHandler)
  .route('/', emailSuppressionImportsHandler)
  .route('/', emailDomainsHandler)
  .route('/', emailDomainDNSRecordsHandler)
  .route('/', emailWebhooksHandler)
  .route('/', emailEventsHandler)
  .route('/', emailInboxesHandler)
  .route('/', emailDraftsHandler)
  .route('/', emailMessagesHandler)
  .route('/', emailTemplatesHandler)
  .route('/', emailThreadsHandler)
  .route('/', emailUnsubscribeGroupsHandler)
  .route('/', emailValidationsHandler)
  .route('/', enterprisesHandler)
  .route('/', reputationHandler)
  .route('/', externalConnectionsHandler)
  .route('/', requirementGroupsHandler)
  .route('/', programmableFaxApplicationsHandler)
  .route('/', programmableFaxCommandsHandler)
  .route('/', fqdnConnectionsHandler)
  .route('/', fqdNsHandler)
  .route('/', globalIPsHandler)
  .route('/', inexplicitNumberOrdersHandler)
  .route('/', integrationSecretsHandler)
  .route('/', inventoryLevelHandler)
  .route('/', invoicesHandler)
  .route('/', ipConnectionsHandler)
  .route('/', iPsHandler)
  .route('/', reportsHandler)
  .route('/', speechToTextBatchReportsHandler)
  .route('/', mdrDetailedReportsHandler)
  .route('/', cdrReportsHandler)
  .route('/', mdrUsageReportsHandler)
  .route('/', telcoDataUsageReportsHandler)
  .route('/', speechToTextUsageReportsHandler)
  .route('/', cdrUsageReportsHandler)
  .route('/', aiGatewayHandler)
  .route('/', machinePaymentsHandler)
  .route('/', managedAccountsHandler)
  .route('/', mediaStorageAPIHandler)
  .route('/', meetingSessionsHandler)
  .route('/', meetingSessionActionsHandler)
  .route('/', meetingSessionArtifactsHandler)
  .route('/', meetingSessionDataHandler)
  .route('/', messagesHandler)
  .route('/', rcsHandler)
  .route('/', whatsappMessagingHandler)
  .route('/', verificationRequestsHandler)
  .route('/', hostedNumbersHandler)
  .route('/', numberSettingsHandler)
  .route('/', optOutManagementHandler)
  .route('/', messagingURLDomainsHandler)
  .route('/', mobileNetworkOperatorsHandler)
  .route('/', mobilePhoneNumbersHandler)
  .route('/', mobileNumberSettingsHandler)
  .route('/', pushCredentialsHandler)
  .route('/', mobileVoiceConnectionsHandler)
  .route('/', coverageHandler)
  .route('/', networkRoutesHandler)
  .route('/', networksHandler)
  .route('/', noiseSuppressionEnginesHandler)
  .route('/', notificationsHandler)
  .route('/', phoneNumberBlockOrdersHandler)
  .route('/', numberLookupHandler)
  .route('/', phoneNumberReservationsHandler)
  .route('/', numbersFeaturesHandler)
  .route('/', oAuthProtocolHandler)
  .route('/', oAuthClientsHandler)
  .route('/', oAuthGrantsHandler)
  .route('/', organizationUsersHandler)
  .route('/', otaUpdatesHandler)
  .route('/', outboundVoiceProfilesHandler)
  .route('/', payConnectorsHandler)
  .route('/', autoRechargePreferencesHandler)
  .route('/', storedPaymentTransactionsHandler)
  .route('/', phoneNumberBlocksBackgroundJobsHandler)
  .route('/', phoneNumberConfigurationsHandler)
  .route('/', csvDownloadsHandler)
  .route('/', bulkPhoneNumberOperationsHandler)
  .route('/', regulatoryRequirementsHandler)
  .route('/', voicemailHandler)
  .route('/', phoneNumberPortingHandler)
  .route('/', portingOrdersHandler)
  .route('/', numberPortoutHandler)
  .route('/', pricingHandler)
  .route('/', privateWirelessGatewaysHandler)
  .route('/', pronunciationDictionariesHandler)
  .route('/', publicInternetGatewaysHandler)
  .route('/', queueCommandsHandler)
  .route('/', rcsAgentsHandler)
  .route('/', rcsBrandsHandler)
  .route('/', regionsHandler)
  .route('/', mdrDetailReportsHandler)
  .route('/', wdrDetailReportsHandler)
  .route('/', requirementTypesHandler)
  .route('/', requirementsHandler)
  .route('/', roomCompositionsHandler)
  .route('/', roomParticipantsHandler)
  .route('/', roomRecordingsHandler)
  .route('/', roomSessionsHandler)
  .route('/', roomsHandler)
  .route('/', roomsClientTokensHandler)
  .route('/', sessionAnalysisHandler)
  .route('/', setiObservabilityHandler)
  .route('/', shortCodesHandler)
  .route('/', simCardGroupActionsHandler)
  .route('/', simCardGroupsHandler)
  .route('/', simCardOrdersHandler)
  .route('/', uacConnectionsHandler)
  .route('/', siprecConnectorsHandler)
  .route('/', speechToTextCapabilitiesHandler)
  .route('/', speechToTextOverWebSocketsHandler)
  .route('/', spendLimitsHandler)
  .route('/', bucketSSLCertificateHandler)
  .route('/', bucketUsageHandler)
  .route('/', presignedObjectURLsHandler)
  .route('/', cloudfsFilesystemsHandler)
  .route('/', kvNamespacesHandler)
  .route('/', kvKeysHandler)
  .route('/', dataMigrationHandler)
  .route('/', sqlDatabasesHandler)
  .route('/', tailscaleSubnetRoutersHandler)
  .route('/', credentialsHandler)
  .route('/', accessTokensHandler)
  .route('/', termsOfServiceHandler)
  .route('/', teXMLRESTCommandsHandler)
  .route('/', teXMLApplicationsHandler)
  .route('/', textToSpeechCommandsHandler)
  .route('/', trafficPolicyProfilesHandler)
  .route('/', tunnelsHandler)
  .route('/', usageReportsBETAHandler)
  .route('/', userAddressesHandler)
  .route('/', userProfileHandler)
  .route('/', userTagsHandler)
  .route('/', whatsappBusinessAccountsHandler)
  .route('/', whatsappPhoneNumbersHandler)
  .route('/', whatsappMessageTemplatesHandler)
  .route('/', verifyHandler)
  .route('/', verifiedNumbersHandler)
  .route('/', virtualCrossConnectsHandler)
  .route('/', voiceClonesHandler)
  .route('/', voiceDesignsHandler)
  .route('/', voiceSDKStatsHandler)
  .route('/', webSearchHandler)
  .route('/', contentsHandler)
  .route('/', researchHandler)
  .route('/', webhooksHandler)
  .route('/', whatsappSignupHandler)
  .route('/', wireGuardInterfacesHandler)
  .route('/', reportingHandler)
  .route('/', wirelessRegionsHandler)
  .route('/', wirelessBlocklistsHandler)
  .route('/', x402PaymentTransactionsHandler)

export default app
