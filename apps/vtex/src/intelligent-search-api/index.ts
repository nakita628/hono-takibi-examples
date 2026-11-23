import { OpenAPIHono } from '@hono/zod-openapi'
import {
  autocompleteSuggestionsHandler,
  bannersHandler,
  correctionSearchHandler,
  facetsHandler,
  productSearchHandler,
  searchSuggestionsHandler,
  topSearchesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', autocompleteSuggestionsHandler)
  .route('/', bannersHandler)
  .route('/', correctionSearchHandler)
  .route('/', facetsHandler)
  .route('/', productSearchHandler)
  .route('/', searchSuggestionsHandler)
  .route('/', topSearchesHandler)

export default app
