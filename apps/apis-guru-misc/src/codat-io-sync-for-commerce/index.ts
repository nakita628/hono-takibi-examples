import { OpenAPIHono } from '@hono/zod-openapi'
import {
  companyManagementHandler,
  configurationHandler,
  integrationsHandler,
  syncFlowPreferencesHandler,
  syncHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', syncFlowPreferencesHandler)
  .route('/', syncHandler)
  .route('/', configurationHandler)
  .route('/', integrationsHandler)
  .route('/', companyManagementHandler)

export default app
