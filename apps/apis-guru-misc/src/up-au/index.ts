import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  categoriesHandler,
  tagsHandler,
  transactionsHandler,
  utilHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', categoriesHandler)
  .route('/', tagsHandler)
  .route('/', transactionsHandler)
  .route('/', utilHandler)
  .route('/', webhooksHandler)

export default app
