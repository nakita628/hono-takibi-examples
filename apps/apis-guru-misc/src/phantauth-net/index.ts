import { OpenAPIHono } from '@hono/zod-openapi'
import {
  clientHandler,
  domainHandler,
  fleetHandler,
  teamHandler,
  tenantHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clientHandler)
  .route('/', domainHandler)
  .route('/', fleetHandler)
  .route('/', teamHandler)
  .route('/', tenantHandler)
  .route('/', userHandler)

export default app
