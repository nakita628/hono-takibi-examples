import { OpenAPIHono } from '@hono/zod-openapi'
import {
  browserHandler,
  clientInvoicesHandler,
  clientsHandler,
  currencyExchangeRatesHandler,
  dictionariesHandler,
  filesHandler,
  jobsClassicHandler,
  jobsSmartV2Handler,
  licenseHandler,
  macrosHandler,
  projectsClassicHandler,
  projectsSmartV2Handler,
  quotesClassicHandler,
  quotesSmartV2Handler,
  reportsHandler,
  subscriptionHandler,
  tasksClassicHandler,
  usersHandler,
  vendorInvoicesHandler,
  vendorsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clientInvoicesHandler)
  .route('/', vendorInvoicesHandler)
  .route('/', browserHandler)
  .route('/', clientsHandler)
  .route('/', dictionariesHandler)
  .route('/', currencyExchangeRatesHandler)
  .route('/', filesHandler)
  .route('/', jobsClassicHandler)
  .route('/', licenseHandler)
  .route('/', macrosHandler)
  .route('/', projectsClassicHandler)
  .route('/', vendorsHandler)
  .route('/', quotesClassicHandler)
  .route('/', reportsHandler)
  .route('/', subscriptionHandler)
  .route('/', tasksClassicHandler)
  .route('/', usersHandler)
  .route('/', jobsSmartV2Handler)
  .route('/', projectsSmartV2Handler)
  .route('/', quotesSmartV2Handler)

export default app
