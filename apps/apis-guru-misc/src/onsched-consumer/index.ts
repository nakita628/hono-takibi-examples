import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appointmentsHandler,
  availabilityHandler,
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
  .route('/', availabilityHandler)
  .route('/', customersHandler)
  .route('/', locationsHandler)
  .route('/', resourceGroupsHandler)
  .route('/', resourcesHandler)
  .route('/', serviceGroupsHandler)
  .route('/', servicesHandler)

export default app
