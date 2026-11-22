import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionNotificationExportResultsHandler,
  actionNotificationExportsHandler,
  actionWebhookFailuresHandler,
  apiKeyHandler,
  apiKeysHandler,
  appsHandler,
  as2IncomingMessagesHandler,
  as2OutgoingMessagesHandler,
  as2PartnersHandler,
  as2StationsHandler,
  automationRunsHandler,
  automationsHandler,
  bandwidthSnapshotsHandler,
  behaviorsHandler,
  bundleDownloadsHandler,
  bundleNotificationsHandler,
  bundleRecipientsHandler,
  bundleRegistrationsHandler,
  bundlesHandler,
  clickwrapsHandler,
  dnsRecordsHandler,
  externalEventsHandler,
  fileActionsHandler,
  fileCommentReactionsHandler,
  fileCommentsHandler,
  fileMigrationsHandler,
  filesHandler,
  foldersHandler,
  formFieldSetsHandler,
  groupsHandler,
  groupUsersHandler,
  historyExportResultsHandler,
  historyExportsHandler,
  historyHandler,
  inboxRecipientsHandler,
  inboxRegistrationsHandler,
  inboxUploadsHandler,
  invoicesHandler,
  ipAddressesHandler,
  locksHandler,
  messageCommentReactionsHandler,
  messageCommentsHandler,
  messageReactionsHandler,
  messagesHandler,
  notificationsHandler,
  paymentsHandler,
  permissionsHandler,
  prioritiesHandler,
  projectsHandler,
  publicKeysHandler,
  remoteBandwidthSnapshotsHandler,
  remoteServersHandler,
  requestsHandler,
  sessionsHandler,
  settingsChangesHandler,
  sftpHostKeysHandler,
  siteHandler,
  ssoStrategiesHandler,
  stylesHandler,
  usageDailySnapshotsHandler,
  usageSnapshotsHandler,
  userCipherUsesHandler,
  userHandler,
  userRequestsHandler,
  usersHandler,
  webhookTestsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionNotificationExportResultsHandler)
  .route('/', actionNotificationExportsHandler)
  .route('/', actionWebhookFailuresHandler)
  .route('/', apiKeyHandler)
  .route('/', apiKeysHandler)
  .route('/', appsHandler)
  .route('/', as2IncomingMessagesHandler)
  .route('/', as2OutgoingMessagesHandler)
  .route('/', as2PartnersHandler)
  .route('/', as2StationsHandler)
  .route('/', automationRunsHandler)
  .route('/', automationsHandler)
  .route('/', bandwidthSnapshotsHandler)
  .route('/', behaviorsHandler)
  .route('/', bundleDownloadsHandler)
  .route('/', bundleNotificationsHandler)
  .route('/', bundleRecipientsHandler)
  .route('/', bundleRegistrationsHandler)
  .route('/', bundlesHandler)
  .route('/', clickwrapsHandler)
  .route('/', dnsRecordsHandler)
  .route('/', externalEventsHandler)
  .route('/', fileActionsHandler)
  .route('/', fileCommentReactionsHandler)
  .route('/', fileCommentsHandler)
  .route('/', fileMigrationsHandler)
  .route('/', filesHandler)
  .route('/', foldersHandler)
  .route('/', formFieldSetsHandler)
  .route('/', groupUsersHandler)
  .route('/', groupsHandler)
  .route('/', historyHandler)
  .route('/', historyExportResultsHandler)
  .route('/', historyExportsHandler)
  .route('/', inboxRecipientsHandler)
  .route('/', inboxRegistrationsHandler)
  .route('/', inboxUploadsHandler)
  .route('/', invoicesHandler)
  .route('/', ipAddressesHandler)
  .route('/', locksHandler)
  .route('/', messageCommentReactionsHandler)
  .route('/', messageCommentsHandler)
  .route('/', messageReactionsHandler)
  .route('/', messagesHandler)
  .route('/', notificationsHandler)
  .route('/', paymentsHandler)
  .route('/', permissionsHandler)
  .route('/', prioritiesHandler)
  .route('/', projectsHandler)
  .route('/', publicKeysHandler)
  .route('/', remoteBandwidthSnapshotsHandler)
  .route('/', remoteServersHandler)
  .route('/', requestsHandler)
  .route('/', sessionsHandler)
  .route('/', settingsChangesHandler)
  .route('/', sftpHostKeysHandler)
  .route('/', siteHandler)
  .route('/', ssoStrategiesHandler)
  .route('/', stylesHandler)
  .route('/', usageDailySnapshotsHandler)
  .route('/', usageSnapshotsHandler)
  .route('/', userHandler)
  .route('/', userCipherUsesHandler)
  .route('/', userRequestsHandler)
  .route('/', usersHandler)
  .route('/', webhookTestsHandler)

export default app
