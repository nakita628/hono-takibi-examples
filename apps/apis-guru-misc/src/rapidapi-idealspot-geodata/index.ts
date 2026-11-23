import { OpenAPIHono } from '@hono/zod-openapi'
import { dataHandler, geometriesHandler, trafficHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dataHandler)
  .route('/', geometriesHandler)
  .route('/', trafficHandler)

export default app
