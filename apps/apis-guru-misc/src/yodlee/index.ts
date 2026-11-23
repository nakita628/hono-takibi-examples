import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  authHandler,
  cobrandHandler,
  configsHandler,
  dataExtractsHandler,
  derivedHandler,
  documentsHandler,
  holdingsHandler,
  providerAccountsHandler,
  providersHandler,
  statementsHandler,
  transactionsHandler,
  userHandler,
  verificationHandler,
  verifyAccountHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', authHandler)
  .route('/', cobrandHandler)
  .route('/', configsHandler)
  .route('/', dataExtractsHandler)
  .route('/', derivedHandler)
  .route('/', documentsHandler)
  .route('/', holdingsHandler)
  .route('/', providerAccountsHandler)
  .route('/', providersHandler)
  .route('/', statementsHandler)
  .route('/', transactionsHandler)
  .route('/', userHandler)
  .route('/', verificationHandler)
  .route('/', verifyAccountHandler)

export default app
