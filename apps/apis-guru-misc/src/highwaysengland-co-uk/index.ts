import { OpenAPIHono } from '@hono/zod-openapi'
import {
  areasHandler,
  qualityHandler,
  reportsHandler,
  sitesHandler,
  siteTypesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', areasHandler)
  .route('/', qualityHandler)
  .route('/', reportsHandler)
  .route('/', sitesHandler)
  .route('/', siteTypesHandler)

export default app
