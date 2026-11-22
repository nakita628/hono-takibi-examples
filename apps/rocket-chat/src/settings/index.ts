import { OpenAPIHono } from '@hono/zod-openapi'
import {
  auditHandler,
  bulkUserImportHandler,
  cloudHandler,
  deviceManagementHandler,
  dnsHandler,
  e2EHandler,
  importHandler,
  instancesHandler,
  mediaCallsHandler,
  moderationHandler,
  passwordPolicyHandler,
  settingsHandler,
  videoConferenceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', settingsHandler)
  .route('/', cloudHandler)
  .route('/', dnsHandler)
  .route('/', e2EHandler)
  .route('/', importHandler)
  .route('/', bulkUserImportHandler)
  .route('/', instancesHandler)
  .route('/', moderationHandler)
  .route('/', deviceManagementHandler)
  .route('/', passwordPolicyHandler)
  .route('/', videoConferenceHandler)
  .route('/', mediaCallsHandler)
  .route('/', auditHandler)

export default app
