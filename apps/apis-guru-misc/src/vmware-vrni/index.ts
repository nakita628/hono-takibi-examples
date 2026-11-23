import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authHandler,
  dataSourcesHandler,
  entitiesHandler,
  groupsHandler,
  infoHandler,
  infraHandler,
  microSegHandler,
  searchHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', dataSourcesHandler)
  .route('/', entitiesHandler)
  .route('/', groupsHandler)
  .route('/', infoHandler)
  .route('/', infraHandler)
  .route('/', microSegHandler)
  .route('/', searchHandler)

export default app
