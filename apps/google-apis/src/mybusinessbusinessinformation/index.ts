import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  attributesHandler,
  categoriesHandler,
  chainsHandler,
  googleLocationsHandler,
  locationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', attributesHandler)
  .route('/', categoriesHandler)
  .route('/', chainsHandler)
  .route('/', googleLocationsHandler)
  .route('/', locationsHandler)
  .route('/', accountsHandler)

export default app
