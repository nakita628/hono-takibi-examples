import { OpenAPIHono } from '@hono/zod-openapi'
import {
  catalogHandler,
  connectionsHandler,
  listOrdersHandler,
  ordersHandler,
  outpostsHandler,
  sitesHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ordersHandler)
  .route('/', outpostsHandler)
  .route('/', sitesHandler)
  .route('/', catalogHandler)
  .route('/', connectionsHandler)
  .route('/', listOrdersHandler)
  .route('/', tagsHandler)

export default app
