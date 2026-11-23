import { OpenAPIHono } from '@hono/zod-openapi'
import {
  badWordsHandler,
  bulkLookupHandler,
  countryHandler,
  geoIpHandler,
  ipLookupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bulkLookupHandler)
  .route('/', countryHandler)
  .route('/', geoIpHandler)
  .route('/', ipLookupHandler)
  .route('/', badWordsHandler)

export default app
