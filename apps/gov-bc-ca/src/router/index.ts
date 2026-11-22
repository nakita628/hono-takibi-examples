import { OpenAPIHono } from '@hono/zod-openapi'
import { directionsHandler, distanceHandler, routeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', directionsHandler)
  .route('/', distanceHandler)
  .route('/', routeHandler)

export default app
