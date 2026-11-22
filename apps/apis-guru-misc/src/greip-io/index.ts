import { OpenAPIHono } from '@hono/zod-openapi'
import {
  badWordsHandler,
  BulkLookupHandler,
  CountryHandler,
  GeoIPHandler,
  IPLookupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', BulkLookupHandler)
  .route('/', CountryHandler)
  .route('/', GeoIPHandler)
  .route('/', IPLookupHandler)
  .route('/', badWordsHandler)

export default app
