import { OpenAPIHono } from '@hono/zod-openapi'
import {
  circuitsHandler,
  dcimHandler,
  extrasHandler,
  ipamHandler,
  secretsHandler,
  tenancyHandler,
  virtualizationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', circuitsHandler)
  .route('/', dcimHandler)
  .route('/', extrasHandler)
  .route('/', ipamHandler)
  .route('/', secretsHandler)
  .route('/', tenancyHandler)
  .route('/', virtualizationHandler)

export default app
