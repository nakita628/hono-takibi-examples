import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appointmentsHandler,
  businessUsersHandler,
  calendarsHandler,
  companiesHandler,
  customersHandler,
  locationsHandler,
  resourceGroupsHandler,
  resourcesHandler,
  serviceGroupsHandler,
  servicesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appointmentsHandler)
  .route('/', businessUsersHandler)
  .route('/', calendarsHandler)
  .route('/', companiesHandler)
  .route('/', customersHandler)
  .route('/', locationsHandler)
  .route('/', resourceGroupsHandler)
  .route('/', resourcesHandler)
  .route('/', serviceGroupsHandler)
  .route('/', servicesHandler)

export default app
