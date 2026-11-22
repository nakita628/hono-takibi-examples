import { OpenAPIHono } from '@hono/zod-openapi'
import {
  autocompleteHandler,
  crossSellingHandler,
  facetsHandler,
  offersHandler,
  searchHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', facetsHandler)
  .route('/', crossSellingHandler)
  .route('/', offersHandler)
  .route('/', searchHandler)
  .route('/', autocompleteHandler)

export default app
