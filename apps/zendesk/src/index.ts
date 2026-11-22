import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountSettingsHandler,
  activityStreamHandler,
  apiTokensHandler,
  approvalRequestsHandler,
  attachmentsHandler,
  auditLogsHandler,
  automationsHandler,
  basicsHandler,
  bookmarksHandler,
  brandAgentsHandler,
  brandsHandler,
  brandUserMigrationsHandler,
  channelFrameworkHandler,
  conversationLogHandler,
  countriesHandler,
  customObjectFieldsHandler,
  customObjectPermissionsHandler,
  customObjectRecordAttachmentsHandler,
  customObjectRecordsHandler,
  customObjectsHandler,
  customRolesHandler,
  customTicketStatusesHandler,
  deletionSchedulesHandler,
  dynamicContentHandler,
  dynamicContentItemVariantsHandler,
  emailNotificationsHandler,
  globalClientsHandler,
  grantTypeTokensHandler,
  groupMembershipsHandler,
  groupsHandler,
  groupSLAPoliciesHandler,
  incrementalExportHandler,
  incrementalSkillBasedRoutingHandler,
  itamAssetFieldsHandler,
  itamAssetLocationsHandler,
  itamAssetsHandler,
  itamAssetStatusesHandler,
  itamAssetTypesHandler,
  jobStatusesHandler,
  localesHandler,
  lookupRelationshipsHandler,
  macrosHandler,
  oAuthClientsHandler,
  oAuthTokensHandler,
  objectTriggersHandler,
  omnichannelRoutingQueuesHandler,
  organizationFieldsHandler,
  organizationMembershipsHandler,
  organizationsHandler,
  organizationSubscriptionsHandler,
  pushNotificationDevicesHandler,
  remoteAuthenticationsHandler,
  requestsHandler,
  resellerHandler,
  resourceCollectionsHandler,
  satisfactionRatingsHandler,
  satisfactionReasonsHandler,
  savedSearchesHandler,
  searchHandler,
  securitySettingsHandler,
  sessionsHandler,
  sharingAgreementsHandler,
  skillBasedRoutingHandler,
  slaPoliciesHandler,
  supportAddressesHandler,
  suspendedTicketsHandler,
  tagsHandler,
  targetFailuresHandler,
  targetsHandler,
  taskListsHandler,
  taskListTemplatesHandler,
  ticketAuditsHandler,
  ticketCommentsHandler,
  ticketContentPinsHandler,
  ticketFieldsHandler,
  ticketFormsHandler,
  ticketFormStatusesHandler,
  ticketImportHandler,
  ticketMetricEventsHandler,
  ticketMetricsHandler,
  ticketsHandler,
  ticketSkipsHandler,
  triggerCategoriesHandler,
  triggersHandler,
  userFieldsHandler,
  userIdentitiesHandler,
  userPasswordsHandler,
  usersHandler,
  viewsHandler,
  whatsAppTemplatesHandler,
  workspacesHandler,
  xChannelHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', lookupRelationshipsHandler)
  .route('/', accountSettingsHandler)
  .route('/', resellerHandler)
  .route('/', activityStreamHandler)
  .route('/', channelFrameworkHandler)
  .route('/', apiTokensHandler)
  .route('/', approvalRequestsHandler)
  .route('/', attachmentsHandler)
  .route('/', auditLogsHandler)
  .route('/', tagsHandler)
  .route('/', automationsHandler)
  .route('/', bookmarksHandler)
  .route('/', brandAgentsHandler)
  .route('/', brandsHandler)
  .route('/', brandUserMigrationsHandler)
  .route('/', xChannelHandler)
  .route('/', basicsHandler)
  .route('/', whatsAppTemplatesHandler)
  .route('/', ticketCommentsHandler)
  .route('/', countriesHandler)
  .route('/', customObjectsHandler)
  .route('/', customObjectPermissionsHandler)
  .route('/', customObjectFieldsHandler)
  .route('/', customObjectRecordsHandler)
  .route('/', customObjectRecordAttachmentsHandler)
  .route('/', objectTriggersHandler)
  .route('/', customRolesHandler)
  .route('/', customTicketStatusesHandler)
  .route('/', ticketsHandler)
  .route('/', usersHandler)
  .route('/', deletionSchedulesHandler)
  .route('/', dynamicContentHandler)
  .route('/', dynamicContentItemVariantsHandler)
  .route('/', emailNotificationsHandler)
  .route('/', userIdentitiesHandler)
  .route('/', groupMembershipsHandler)
  .route('/', groupSLAPoliciesHandler)
  .route('/', groupsHandler)
  .route('/', ticketImportHandler)
  .route('/', incrementalExportHandler)
  .route('/', incrementalSkillBasedRoutingHandler)
  .route('/', ticketMetricEventsHandler)
  .route('/', itamAssetTypesHandler)
  .route('/', itamAssetFieldsHandler)
  .route('/', itamAssetsHandler)
  .route('/', itamAssetLocationsHandler)
  .route('/', itamAssetStatusesHandler)
  .route('/', jobStatusesHandler)
  .route('/', localesHandler)
  .route('/', macrosHandler)
  .route('/', oAuthClientsHandler)
  .route('/', globalClientsHandler)
  .route('/', oAuthTokensHandler)
  .route('/', organizationFieldsHandler)
  .route('/', organizationMembershipsHandler)
  .route('/', organizationsHandler)
  .route('/', organizationSubscriptionsHandler)
  .route('/', requestsHandler)
  .route('/', pushNotificationDevicesHandler)
  .route('/', omnichannelRoutingQueuesHandler)
  .route('/', supportAddressesHandler)
  .route('/', remoteAuthenticationsHandler)
  .route('/', resourceCollectionsHandler)
  .route('/', skillBasedRoutingHandler)
  .route('/', satisfactionRatingsHandler)
  .route('/', satisfactionReasonsHandler)
  .route('/', savedSearchesHandler)
  .route('/', searchHandler)
  .route('/', securitySettingsHandler)
  .route('/', sessionsHandler)
  .route('/', sharingAgreementsHandler)
  .route('/', ticketSkipsHandler)
  .route('/', slaPoliciesHandler)
  .route('/', suspendedTicketsHandler)
  .route('/', targetFailuresHandler)
  .route('/', targetsHandler)
  .route('/', taskListTemplatesHandler)
  .route('/', taskListsHandler)
  .route('/', ticketAuditsHandler)
  .route('/', ticketContentPinsHandler)
  .route('/', ticketFieldsHandler)
  .route('/', ticketFormStatusesHandler)
  .route('/', ticketFormsHandler)
  .route('/', ticketMetricsHandler)
  .route('/', conversationLogHandler)
  .route('/', triggerCategoriesHandler)
  .route('/', triggersHandler)
  .route('/', userFieldsHandler)
  .route('/', userPasswordsHandler)
  .route('/', viewsHandler)
  .route('/', workspacesHandler)
  .route('/', grantTypeTokensHandler)

export default app
