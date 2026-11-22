import { OpenAPIHono } from '@hono/zod-openapi'
import {
  advancedDataTypeHandler,
  annotationLayersHandler,
  availableDomainsHandler,
  cacheRestApiHandler,
  chartsHandler,
  cssTemplatesHandler,
  currentUserHandler,
  dashboardFilterStateHandler,
  dashboardPermanentLinkHandler,
  dashboardsHandler,
  databaseHandler,
  datasetsHandler,
  datasourcesHandler,
  embeddedDashboardHandler,
  exploreFormDataHandler,
  exploreHandler,
  explorePermanentLinkHandler,
  importExportHandler,
  logRestApiHandler,
  menuHandler,
  queriesHandler,
  reportSchedulesHandler,
  rowLevelSecurityHandler,
  securityGroupsHandler,
  securityHandler,
  securityPermissionsHandler,
  securityPermissionsOnResourcesViewMenusHandler,
  securityResourcesViewMenusHandler,
  securityRolesHandler,
  securitySubjectsHandler,
  securityUsersHandler,
  semanticLayersHandler,
  semanticViewRestApiHandler,
  sqlLabHandler,
  sqlLabPermanentLinkHandler,
  tagsHandler,
  themesHandler,
  userHandler,
  userRegistrationsRestAPIHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', advancedDataTypeHandler)
  .route('/', annotationLayersHandler)
  .route('/', importExportHandler)
  .route('/', availableDomainsHandler)
  .route('/', cacheRestApiHandler)
  .route('/', chartsHandler)
  .route('/', cssTemplatesHandler)
  .route('/', dashboardsHandler)
  .route('/', dashboardPermanentLinkHandler)
  .route('/', dashboardFilterStateHandler)
  .route('/', databaseHandler)
  .route('/', datasetsHandler)
  .route('/', datasourcesHandler)
  .route('/', embeddedDashboardHandler)
  .route('/', exploreHandler)
  .route('/', exploreFormDataHandler)
  .route('/', explorePermanentLinkHandler)
  .route('/', logRestApiHandler)
  .route('/', currentUserHandler)
  .route('/', menuHandler)
  .route('/', queriesHandler)
  .route('/', reportSchedulesHandler)
  .route('/', rowLevelSecurityHandler)
  .route('/', securityHandler)
  .route('/', securityGroupsHandler)
  .route('/', securityPermissionsOnResourcesViewMenusHandler)
  .route('/', securityPermissionsHandler)
  .route('/', securityResourcesViewMenusHandler)
  .route('/', securityRolesHandler)
  .route('/', securitySubjectsHandler)
  .route('/', userRegistrationsRestAPIHandler)
  .route('/', securityUsersHandler)
  .route('/', semanticLayersHandler)
  .route('/', semanticViewRestApiHandler)
  .route('/', sqlLabHandler)
  .route('/', sqlLabPermanentLinkHandler)
  .route('/', tagsHandler)
  .route('/', themesHandler)
  .route('/', userHandler)

export default app
