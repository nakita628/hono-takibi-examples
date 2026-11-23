import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountTypesHandler,
  adminHandler,
  authHandler,
  banksHandler,
  categoriesHandler,
  categorizeHandler,
  certificateHandler,
  clientsHandler,
  configHandler,
  connectionsHandler,
  connectorsHandler,
  incidentsHandler,
  invoicingHandler,
  logsHandler,
  monitoringHandler,
  providersHandler,
  psd2RegistrationsHandler,
  publickeyHandler,
  testHandler,
  usersHandler,
  webauthHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountTypesHandler)
  .route('/', adminHandler)
  .route('/', authHandler)
  .route('/', banksHandler)
  .route('/', categoriesHandler)
  .route('/', categorizeHandler)
  .route('/', certificateHandler)
  .route('/', clientsHandler)
  .route('/', configHandler)
  .route('/', connectionsHandler)
  .route('/', connectorsHandler)
  .route('/', incidentsHandler)
  .route('/', invoicingHandler)
  .route('/', logsHandler)
  .route('/', monitoringHandler)
  .route('/', providersHandler)
  .route('/', psd2RegistrationsHandler)
  .route('/', publickeyHandler)
  .route('/', testHandler)
  .route('/', usersHandler)
  .route('/', webauthHandler)
  .route('/', webhooksHandler)

export default app
