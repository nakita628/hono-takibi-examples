import { OpenAPIHono } from '@hono/zod-openapi'
import { geometriesAPIHandler, insightsAPIHandler, trafficCountAPIHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', insightsAPIHandler)
  .route('/', geometriesAPIHandler)
  .route('/', trafficCountAPIHandler)

export default app
