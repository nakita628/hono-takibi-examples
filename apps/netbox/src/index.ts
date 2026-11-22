import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authenticationCheckHandler,
  circuitsHandler,
  coreHandler,
  dcimHandler,
  extrasHandler,
  ipamHandler,
  schemaHandler,
  statusHandler,
  tenancyHandler,
  usersHandler,
  virtualizationHandler,
  vpnHandler,
  wirelessHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authenticationCheckHandler)
  .route('/', circuitsHandler)
  .route('/', coreHandler)
  .route('/', dcimHandler)
  .route('/', extrasHandler)
  .route('/', ipamHandler)
  .route('/', schemaHandler)
  .route('/', statusHandler)
  .route('/', tenancyHandler)
  .route('/', usersHandler)
  .route('/', virtualizationHandler)
  .route('/', vpnHandler)
  .route('/', wirelessHandler)

export default app
