import { OpenAPIHono } from '@hono/zod-openapi'
import {
  administeredHandler,
  devicesHandler,
  networksHandler,
  organizationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', administeredHandler)
  .route('/', devicesHandler)
  .route('/', networksHandler)
  .route('/', organizationsHandler)

export default app
