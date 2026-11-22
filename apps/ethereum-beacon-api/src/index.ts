import { OpenAPIHono } from '@hono/zod-openapi'
import {
  beaconHandler,
  configHandler,
  debugHandler,
  eventsHandler,
  nodeHandler,
  validatorHandler,
  validatorRequiredApiHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', beaconHandler)
  .route('/', debugHandler)
  .route('/', nodeHandler)
  .route('/', configHandler)
  .route('/', validatorRequiredApiHandler)
  .route('/', validatorHandler)
  .route('/', eventsHandler)

export default app
