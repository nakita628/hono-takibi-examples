import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  categoriesHandler,
  tagsHandler,
  transactionsHandler,
  utilityEndpointsHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', transactionsHandler)
  .route('/', categoriesHandler)
  .route('/', tagsHandler)
  .route('/', utilityEndpointsHandler)
  .route('/', webhooksHandler)

export default app
