import { OpenAPIHono } from '@hono/zod-openapi'
import {
  additionalDataHandler,
  filtersHandler,
  geocodingHandler,
  reverseGeocodingHandler,
  searchHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', additionalDataHandler)
  .route('/', searchHandler)
  .route('/', geocodingHandler)
  .route('/', filtersHandler)
  .route('/', reverseGeocodingHandler)

export default app
