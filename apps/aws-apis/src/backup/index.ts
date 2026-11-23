import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountSettingsHandler,
  auditHandler,
  backupHandler,
  backupJobsHandler,
  backupVaultsHandler,
  copyJobsHandler,
  globalSettingsHandler,
  legalHoldsHandler,
  resourcesHandler,
  restoreJobsHandler,
  supportedResourceTypesHandler,
  tagsHandler,
  untagHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', legalHoldsHandler)
  .route('/', backupHandler)
  .route('/', backupVaultsHandler)
  .route('/', auditHandler)
  .route('/', backupJobsHandler)
  .route('/', copyJobsHandler)
  .route('/', globalSettingsHandler)
  .route('/', resourcesHandler)
  .route('/', accountSettingsHandler)
  .route('/', restoreJobsHandler)
  .route('/', supportedResourceTypesHandler)
  .route('/', tagsHandler)
  .route('/', untagHandler)

export default app
