import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountingHandler,
  browserHandler,
  customersHandler,
  dictionariesHandler,
  filesHandler,
  jobsHandler,
  licenseHandler,
  macrosHandler,
  projectsHandler,
  providersHandler,
  quotesHandler,
  reportsHandler,
  servicesHandler,
  subscriptionHandler,
  tasksHandler,
  usersHandler,
  v2Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountingHandler)
  .route('/', browserHandler)
  .route('/', customersHandler)
  .route('/', dictionariesHandler)
  .route('/', filesHandler)
  .route('/', jobsHandler)
  .route('/', licenseHandler)
  .route('/', macrosHandler)
  .route('/', projectsHandler)
  .route('/', providersHandler)
  .route('/', quotesHandler)
  .route('/', reportsHandler)
  .route('/', servicesHandler)
  .route('/', subscriptionHandler)
  .route('/', tasksHandler)
  .route('/', usersHandler)
  .route('/', v2Handler)

export default app
