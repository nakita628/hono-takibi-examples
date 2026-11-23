import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminAdminAccountIdHandler,
  adminHandler,
  administratorHandler,
  allowListsHandler,
  automatedDiscoveryHandler,
  classificationExportConfigurationHandler,
  classificationScopesHandler,
  customDataIdentifiersHandler,
  datasourcesHandler,
  findingsfiltersHandler,
  findingsHandler,
  findingsPublicationConfigurationHandler,
  invitationsHandler,
  jobsHandler,
  macieHandler,
  managedDataIdentifiersHandler,
  masterHandler,
  membersHandler,
  resourceProfilesHandler,
  resourceProfilesResourceArnHandler,
  revealConfigurationHandler,
  tagsHandler,
  templatesHandler,
  usageHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', invitationsHandler)
  .route('/', customDataIdentifiersHandler)
  .route('/', allowListsHandler)
  .route('/', jobsHandler)
  .route('/', findingsfiltersHandler)
  .route('/', membersHandler)
  .route('/', findingsHandler)
  .route('/', datasourcesHandler)
  .route('/', adminHandler)
  .route('/', macieHandler)
  .route('/', adminAdminAccountIdHandler)
  .route('/', administratorHandler)
  .route('/', masterHandler)
  .route('/', automatedDiscoveryHandler)
  .route('/', classificationExportConfigurationHandler)
  .route('/', classificationScopesHandler)
  .route('/', findingsPublicationConfigurationHandler)
  .route('/', resourceProfilesResourceArnHandler)
  .route('/', revealConfigurationHandler)
  .route('/', templatesHandler)
  .route('/', usageHandler)
  .route('/', managedDataIdentifiersHandler)
  .route('/', resourceProfilesHandler)
  .route('/', tagsHandler)

export default app
