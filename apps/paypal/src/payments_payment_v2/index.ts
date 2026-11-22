import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authorizationsHandler,
  capturesHandler,
  findEligibleMethodsHandler,
  refundsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authorizationsHandler)
  .route('/', capturesHandler)
  .route('/', findEligibleMethodsHandler)
  .route('/', refundsHandler)

export default app
