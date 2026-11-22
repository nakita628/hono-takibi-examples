import { OpenAPIHono } from '@hono/zod-openapi'
import {
  customersHandler,
  devicesHandler,
  groupsHandler,
  inboundSamlSsoProfilesHandler,
  inboundSsoAssignmentsHandler,
  orgUnitsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', devicesHandler)
  .route('/', groupsHandler)
  .route('/', inboundSamlSsoProfilesHandler)
  .route('/', inboundSsoAssignmentsHandler)
  .route('/', customersHandler)
  .route('/', orgUnitsHandler)

export default app
