import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressesHandler,
  clustersHandler,
  customerProfilesHandler,
  documentsHandler,
  indicesHandler,
  schemasHandler,
  scrollHandler,
  searchHandler,
  versionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addressesHandler)
  .route('/', customerProfilesHandler)
  .route('/', documentsHandler)
  .route('/', clustersHandler)
  .route('/', versionsHandler)
  .route('/', indicesHandler)
  .route('/', schemasHandler)
  .route('/', scrollHandler)
  .route('/', searchHandler)

export default app
