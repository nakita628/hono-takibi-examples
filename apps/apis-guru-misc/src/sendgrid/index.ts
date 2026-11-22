import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alertsHandler,
  apiKeyPermissionsHandler,
  apiKeysHandler,
  blocksAPIHandler,
  bouncesAPIHandler,
  campaignsAPIHandler,
  cancelScheduledSendsHandler,
  categoriesHandler,
  certificatesHandler,
  contactsAPI__CustomFieldsHandler,
  contactsAPI__ListsHandler,
  contactsAPI__RecipientsHandler,
  contactsAPI__SegmentsHandler,
  contactsHandler,
  csvuiOnlyHandler,
  customFieldsHandler,
  designsAPIHandler,
  domainAuthenticationHandler,
  emailAddressValidationHandler,
  emailCNAMERecordsHandler,
  invalidEmailsAPIHandler,
  ipAccessManagementHandler,
  ipAddressesHandler,
  ipPoolsHandler,
  ipWarmupHandler,
  linkBrandingHandler,
  listsHandler,
  mailSendHandler,
  marketingCampaignsStatsHandler,
  queryHandler,
  reverseDNSHandler,
  segmentingContactsHandler,
  segmentingContactsV2__BetaHandler,
  senderIdentitiesAPIHandler,
  sendersHandler,
  senderVerificationHandler,
  sendTestEmailHandler,
  settings__EnforcedTLSHandler,
  settings__InboundParseHandler,
  settings__MailHandler,
  settings__PartnerHandler,
  settings__TrackingHandler,
  singleSendsHandler,
  singleSignOnSettingsHandler,
  singleSignOnTeammatesHandler,
  spamReportsAPIHandler,
  statsHandler,
  subuserMonitorSettingsHandler,
  subusersAPIHandler,
  subuserStatisticsHandler,
  suppressions__GlobalSuppressionsHandler,
  suppressions__SuppressionsHandler,
  suppressions__UnsubscribeGroupsHandler,
  teammatesHandler,
  transactionalTemplatesHandler,
  transactionalTemplatesVersionsHandler,
  usersAPIHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ipAccessManagementHandler)
  .route('/', alertsHandler)
  .route('/', apiKeysHandler)
  .route('/', suppressions__UnsubscribeGroupsHandler)
  .route('/', suppressions__SuppressionsHandler)
  .route('/', suppressions__GlobalSuppressionsHandler)
  .route('/', statsHandler)
  .route('/', campaignsAPIHandler)
  .route('/', categoriesHandler)
  .route('/', contactsAPI__CustomFieldsHandler)
  .route('/', contactsAPI__ListsHandler)
  .route('/', contactsAPI__RecipientsHandler)
  .route('/', contactsAPI__SegmentsHandler)
  .route('/', designsAPIHandler)
  .route('/', ipAddressesHandler)
  .route('/', ipPoolsHandler)
  .route('/', ipWarmupHandler)
  .route('/', cancelScheduledSendsHandler)
  .route('/', mailSendHandler)
  .route('/', settings__MailHandler)
  .route('/', contactsHandler)
  .route('/', customFieldsHandler)
  .route('/', listsHandler)
  .route('/', segmentingContactsHandler)
  .route('/', segmentingContactsV2__BetaHandler)
  .route('/', sendersHandler)
  .route('/', singleSendsHandler)
  .route('/', marketingCampaignsStatsHandler)
  .route('/', sendTestEmailHandler)
  .route('/', queryHandler)
  .route('/', csvuiOnlyHandler)
  .route('/', settings__PartnerHandler)
  .route('/', apiKeyPermissionsHandler)
  .route('/', teammatesHandler)
  .route('/', senderIdentitiesAPIHandler)
  .route('/', certificatesHandler)
  .route('/', singleSignOnSettingsHandler)
  .route('/', singleSignOnTeammatesHandler)
  .route('/', subusersAPIHandler)
  .route('/', subuserStatisticsHandler)
  .route('/', subuserMonitorSettingsHandler)
  .route('/', blocksAPIHandler)
  .route('/', bouncesAPIHandler)
  .route('/', invalidEmailsAPIHandler)
  .route('/', spamReportsAPIHandler)
  .route('/', transactionalTemplatesHandler)
  .route('/', transactionalTemplatesVersionsHandler)
  .route('/', settings__TrackingHandler)
  .route('/', usersAPIHandler)
  .route('/', settings__EnforcedTLSHandler)
  .route('/', webhooksHandler)
  .route('/', settings__InboundParseHandler)
  .route('/', emailAddressValidationHandler)
  .route('/', senderVerificationHandler)
  .route('/', emailCNAMERecordsHandler)
  .route('/', domainAuthenticationHandler)
  .route('/', reverseDNSHandler)
  .route('/', linkBrandingHandler)

export default app
