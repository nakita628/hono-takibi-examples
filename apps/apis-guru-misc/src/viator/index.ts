import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bookingServicesHandler,
  deprecatedServicesHandler,
  generalServicesHandler,
  productServicesHandler,
  taxonomyServicesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', productServicesHandler)
  .route('/', bookingServicesHandler)
  .route('/', generalServicesHandler)
  .route('/', deprecatedServicesHandler)
  .route('/', taxonomyServicesHandler)

export default app
