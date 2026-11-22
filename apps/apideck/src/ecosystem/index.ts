import { OpenAPIHono } from '@hono/zod-openapi'
import {
  categoryHandler,
  collectionHandler,
  ecosystemHandler,
  listingHandler,
  productHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ecosystemHandler)
  .route('/', categoryHandler)
  .route('/', collectionHandler)
  .route('/', listingHandler)
  .route('/', productHandler)

export default app
