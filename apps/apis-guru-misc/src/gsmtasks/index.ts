import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountRolesHandler,
  accountsHandler,
  addonsHandler,
  authenticateHandler,
  billingHandler,
  clientRolesHandler,
  clientsHandler,
  configurationsHandler,
  contactAddressesHandler,
  contactAddressExportsHandler,
  contactAddressImportHandler,
  devicesHandler,
  docsHandler,
  documentsHandler,
  emailsHandler,
  exportsHandler,
  fileUploadsHandler,
  formrulesHandler,
  integrationsHandler,
  metafieldsHandler,
  notificationsHandler,
  notificationTemplatesHandler,
  ordersHandler,
  passwordChangeHandler,
  passwordResetConfirmHandler,
  passwordResetHandler,
  pushNotificationsHandler,
  recurrencesHandler,
  registerHandler,
  reportsHandler,
  reviewsHandler,
  routeOptimizationsHandler,
  routesHandler,
  scenesHandler,
  signaturesHandler,
  smsHandler,
  taskAddressFeaturesHandler,
  taskCommandsHandler,
  taskEventsHandler,
  taskEventTracksHandler,
  taskExportsHandler,
  taskFormsHandler,
  taskImportHandler,
  taskImportMappingHandler,
  taskMetadatasHandler,
  tasksHandler,
  timeLocationFeaturesHandler,
  timeLocationsHandler,
  trackersHandler,
  usersHandler,
  usersOnDutyLogHandler,
  webhooksHandler,
  workerFeaturesHandler,
  workerTracksHandler,
  workingStateHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountRolesHandler)
  .route('/', accountsHandler)
  .route('/', addonsHandler)
  .route('/', authenticateHandler)
  .route('/', billingHandler)
  .route('/', clientRolesHandler)
  .route('/', clientsHandler)
  .route('/', configurationsHandler)
  .route('/', contactAddressExportsHandler)
  .route('/', contactAddressImportHandler)
  .route('/', contactAddressesHandler)
  .route('/', devicesHandler)
  .route('/', docsHandler)
  .route('/', documentsHandler)
  .route('/', emailsHandler)
  .route('/', exportsHandler)
  .route('/', fileUploadsHandler)
  .route('/', formrulesHandler)
  .route('/', integrationsHandler)
  .route('/', metafieldsHandler)
  .route('/', notificationTemplatesHandler)
  .route('/', notificationsHandler)
  .route('/', ordersHandler)
  .route('/', passwordChangeHandler)
  .route('/', passwordResetHandler)
  .route('/', passwordResetConfirmHandler)
  .route('/', pushNotificationsHandler)
  .route('/', recurrencesHandler)
  .route('/', registerHandler)
  .route('/', reportsHandler)
  .route('/', reviewsHandler)
  .route('/', routeOptimizationsHandler)
  .route('/', routesHandler)
  .route('/', scenesHandler)
  .route('/', signaturesHandler)
  .route('/', smsHandler)
  .route('/', taskAddressFeaturesHandler)
  .route('/', taskCommandsHandler)
  .route('/', taskEventTracksHandler)
  .route('/', taskEventsHandler)
  .route('/', taskExportsHandler)
  .route('/', taskFormsHandler)
  .route('/', taskImportHandler)
  .route('/', taskImportMappingHandler)
  .route('/', taskMetadatasHandler)
  .route('/', tasksHandler)
  .route('/', timeLocationFeaturesHandler)
  .route('/', timeLocationsHandler)
  .route('/', trackersHandler)
  .route('/', usersHandler)
  .route('/', usersOnDutyLogHandler)
  .route('/', webhooksHandler)
  .route('/', workerFeaturesHandler)
  .route('/', workerTracksHandler)
  .route('/', workingStateHandler)

export default app
