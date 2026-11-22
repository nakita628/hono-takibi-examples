import { OpenAPIHono } from '@hono/zod-openapi'
import {
  circuitsHandler,
  dcimHandler,
  extrasHandler,
  ipamHandler,
  statusHandler,
  tenancyHandler,
  usersHandler,
  virtualizationHandler,
  wirelessHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', circuitsHandler)
  .route('/', dcimHandler)
  .route('/', extrasHandler)
  .route('/', ipamHandler)
  .route('/', statusHandler)
  .route('/', tenancyHandler)
  .route('/', usersHandler)
  .route('/', virtualizationHandler)
  .route('/', wirelessHandler)

export default app
