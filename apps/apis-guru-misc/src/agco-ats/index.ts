import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activitiesHandler,
  activityRunsHandler,
  aftermarketServicesHandler,
  agentsHandler,
  authenticationHandler,
  authorizationCategoriesHandler,
  authorizationCodeDefinitionsHandler,
  authorizationCodesHandler,
  authorizationContactInformationHandler,
  brandsHandler,
  bundlesHandler,
  clientsHandler,
  contentDefinitionsHandler,
  contentReleaseHandler,
  contentSubmissionsHandler,
  contentSubmissionTypesHandler,
  dealerByCountryHandler,
  dealersHandler,
  filesHandler,
  globalImageCategoriesHandler,
  globalImagesHandler,
  jobRunsHandler,
  jobsHandler,
  languagesHandler,
  licenseActivationsHandler,
  licensesHandler,
  logsHandler,
  notificationsHandler,
  packageReportsHandler,
  packagesHandler,
  packageTypesHandler,
  packageTypetoBundlesHandler,
  permissionsHandler,
  priorityPackagesHandler,
  releaseHandler,
  reportingHandler,
  rolesHandler,
  stepsHandler,
  stringDefinitionsHandler,
  stringTranslationsHandler,
  translationKeysHandler,
  translationRequestsHandler,
  translationSetsHandler,
  updateGroupClientRelationshipsHandler,
  updateGroupsHandler,
  updateGroupSubscriptionsHandler,
  updateSystemHandler,
  userContentDefinitionsHandler,
  userPermissionsHandler,
  usersHandler,
  voucherHistoryHandler,
  vouchersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aftermarketServicesHandler)
  .route('/', authenticationHandler)
  .route('/', authorizationCategoriesHandler)
  .route('/', authorizationCodeDefinitionsHandler)
  .route('/', authorizationCodesHandler)
  .route('/', authorizationContactInformationHandler)
  .route('/', brandsHandler)
  .route('/', bundlesHandler)
  .route('/', clientsHandler)
  .route('/', updateSystemHandler)
  .route('/', packageReportsHandler)
  .route('/', contentDefinitionsHandler)
  .route('/', contentReleaseHandler)
  .route('/', contentSubmissionsHandler)
  .route('/', contentSubmissionTypesHandler)
  .route('/', dealerByCountryHandler)
  .route('/', dealersHandler)
  .route('/', filesHandler)
  .route('/', globalImageCategoriesHandler)
  .route('/', globalImagesHandler)
  .route('/', languagesHandler)
  .route('/', licenseActivationsHandler)
  .route('/', licensesHandler)
  .route('/', logsHandler)
  .route('/', notificationsHandler)
  .route('/', packageTypesHandler)
  .route('/', packageTypetoBundlesHandler)
  .route('/', packagesHandler)
  .route('/', permissionsHandler)
  .route('/', priorityPackagesHandler)
  .route('/', releaseHandler)
  .route('/', reportingHandler)
  .route('/', rolesHandler)
  .route('/', userPermissionsHandler)
  .route('/', stringDefinitionsHandler)
  .route('/', stringTranslationsHandler)
  .route('/', translationKeysHandler)
  .route('/', translationRequestsHandler)
  .route('/', translationSetsHandler)
  .route('/', updateGroupClientRelationshipsHandler)
  .route('/', updateGroupSubscriptionsHandler)
  .route('/', updateGroupsHandler)
  .route('/', userContentDefinitionsHandler)
  .route('/', usersHandler)
  .route('/', voucherHistoryHandler)
  .route('/', vouchersHandler)
  .route('/', activitiesHandler)
  .route('/', activityRunsHandler)
  .route('/', agentsHandler)
  .route('/', jobRunsHandler)
  .route('/', jobsHandler)
  .route('/', stepsHandler)

export default app
