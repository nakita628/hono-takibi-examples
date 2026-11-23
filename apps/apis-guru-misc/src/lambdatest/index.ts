import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  devicesHandler,
  locationsHandler,
  osBrowsersHandler,
  profilesHandler,
  resolutionsHandler,
  stopHandler,
  testIdHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', devicesHandler)
  .route('/', locationsHandler)
  .route('/', osBrowsersHandler)
  .route('/', profilesHandler)
  .route('/', resolutionsHandler)
  .route('/', stopHandler)
  .route('/', testIdHandler)

export default app
