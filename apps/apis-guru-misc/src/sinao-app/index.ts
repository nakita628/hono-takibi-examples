import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountCategoriesHandler,
  accountHandler,
  accountsHandler,
  applicationsHandler,
  attachmentsHandler,
  authenticationHandler,
  bankDetailsHandler,
  emailsHandler,
  entriesHandler,
  establishmentsHandler,
  exportsHandler,
  hiddenHandler,
  invoicesHandler,
  organizationProfileHandler,
  organizationsHandler,
  paymentsHandler,
  personsHandler,
  productsHandler,
  purchasesHandler,
  quotesHandler,
  relationshipsHandler,
  signatureHandler,
  sourcesHandler,
  statisticsHandler,
  stocksHandler,
  transactionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationsHandler)
  .route('/', hiddenHandler)
  .route('/', accountCategoriesHandler)
  .route('/', entriesHandler)
  .route('/', accountsHandler)
  .route('/', attachmentsHandler)
  .route('/', bankDetailsHandler)
  .route('/', sourcesHandler)
  .route('/', emailsHandler)
  .route('/', establishmentsHandler)
  .route('/', exportsHandler)
  .route('/', invoicesHandler)
  .route('/', organizationProfileHandler)
  .route('/', organizationsHandler)
  .route('/', paymentsHandler)
  .route('/', personsHandler)
  .route('/', productsHandler)
  .route('/', stocksHandler)
  .route('/', purchasesHandler)
  .route('/', quotesHandler)
  .route('/', relationshipsHandler)
  .route('/', signatureHandler)
  .route('/', statisticsHandler)
  .route('/', transactionsHandler)
  .route('/', authenticationHandler)
  .route('/', accountHandler)

export default app
