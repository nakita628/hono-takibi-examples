import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  attributesHandler,
  categoriesHandler,
  chainsHandler,
  googleLocationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', attributesHandler)
  .route('/', categoriesHandler)
  .route('/', chainsHandler)
  .route('/', googleLocationsHandler)

export default app
