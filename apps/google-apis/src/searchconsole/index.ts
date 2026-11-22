import { OpenAPIHono } from '@hono/zod-openapi'
import {
  searchanalyticsHandler,
  sitemapsHandler,
  sitesHandler,
  urlInspectionHandler,
  urlTestingToolsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', urlInspectionHandler)
  .route('/', urlTestingToolsHandler)
  .route('/', sitesHandler)
  .route('/', searchanalyticsHandler)
  .route('/', sitemapsHandler)

export default app
