import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1VehiclesRoute } from './routes'
import { postV1VehiclesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postV1VehiclesRoute, postV1VehiclesRouteHandler)

export default app
