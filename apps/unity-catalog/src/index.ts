import { OpenAPIHono } from '@hono/zod-openapi'
import {
  catalogsHandler,
  credentialsHandler,
  deltaHandler,
  externalLocationsHandler,
  functionsHandler,
  metastoreSummaryHandler,
  modelsHandler,
  permissionsHandler,
  schemasHandler,
  stagingTablesHandler,
  tablesHandler,
  temporaryModelVersionCredentialsHandler,
  temporaryPathCredentialsHandler,
  temporaryTableCredentialsHandler,
  temporaryVolumeCredentialsHandler,
  volumesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', catalogsHandler)
  .route('/', schemasHandler)
  .route('/', stagingTablesHandler)
  .route('/', tablesHandler)
  .route('/', volumesHandler)
  .route('/', temporaryModelVersionCredentialsHandler)
  .route('/', temporaryTableCredentialsHandler)
  .route('/', temporaryVolumeCredentialsHandler)
  .route('/', functionsHandler)
  .route('/', modelsHandler)
  .route('/', temporaryPathCredentialsHandler)
  .route('/', permissionsHandler)
  .route('/', metastoreSummaryHandler)
  .route('/', credentialsHandler)
  .route('/', externalLocationsHandler)
  .route('/', deltaHandler)

export default app
