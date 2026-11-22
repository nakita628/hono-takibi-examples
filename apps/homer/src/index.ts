import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentsHandler,
  aliasesHandler,
  authHandler,
  dashboardsHandler,
  exportsHandler,
  hepsubHandler,
  importsHandler,
  integrationsHandler,
  logsHandler,
  mappingsHandler,
  settingsHandler,
  statisticsHandler,
  streamHandler,
  systemHandler,
  tokensHandler,
  transactionsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', usersHandler)
  .route('/', settingsHandler)
  .route('/', transactionsHandler)
  .route('/', exportsHandler)
  .route('/', importsHandler)
  .route('/', dashboardsHandler)
  .route('/', mappingsHandler)
  .route('/', hepsubHandler)
  .route('/', aliasesHandler)
  .route('/', systemHandler)
  .route('/', tokensHandler)
  .route('/', agentsHandler)
  .route('/', statisticsHandler)
  .route('/', logsHandler)
  .route('/', integrationsHandler)
  .route('/', streamHandler)

export default app
