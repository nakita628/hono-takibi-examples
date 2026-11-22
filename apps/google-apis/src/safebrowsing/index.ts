import { OpenAPIHono } from '@hono/zod-openapi'
import {
  encodedFullHashesHandler,
  encodedUpdatesHandler,
  fullHashesHandler,
  threatHitsHandler,
  threatListsHandler,
  threatListUpdatesHandler,
  threatMatchesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', encodedFullHashesHandler)
  .route('/', encodedUpdatesHandler)
  .route('/', fullHashesHandler)
  .route('/', threatHitsHandler)
  .route('/', threatListUpdatesHandler)
  .route('/', threatListsHandler)
  .route('/', threatMatchesHandler)

export default app
