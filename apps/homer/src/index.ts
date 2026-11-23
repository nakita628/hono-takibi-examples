import { OpenAPIHono } from '@hono/zod-openapi'
import {
  advancedHandler,
  agentsHandler,
  aliasesHandler,
  authHandler,
  authTokensHandler,
  dashboardsHandler,
  dbHandler,
  exportsHandler,
  hepsubsHandler,
  importsHandler,
  integrationsHandler,
  ipaliasesHandler,
  logsHandler,
  mappingsHandler,
  meHandler,
  messagesHandler,
  modulesHandler,
  openapiJsonHandler,
  scriptsHandler,
  statisticsHandler,
  streamHandler,
  transactionsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', usersHandler)
  .route('/', meHandler)
  .route('/', transactionsHandler)
  .route('/', messagesHandler)
  .route('/', exportsHandler)
  .route('/', importsHandler)
  .route('/', dashboardsHandler)
  .route('/', mappingsHandler)
  .route('/', hepsubsHandler)
  .route('/', aliasesHandler)
  .route('/', ipaliasesHandler)
  .route('/', advancedHandler)
  .route('/', scriptsHandler)
  .route('/', openapiJsonHandler)
  .route('/', authTokensHandler)
  .route('/', agentsHandler)
  .route('/', dbHandler)
  .route('/', modulesHandler)
  .route('/', statisticsHandler)
  .route('/', logsHandler)
  .route('/', integrationsHandler)
  .route('/', streamHandler)

export default app
