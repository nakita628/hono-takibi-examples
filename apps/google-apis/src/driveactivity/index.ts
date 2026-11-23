import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2ActivityQueryRoute } from './routes'
import { postV2ActivityQueryRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postV2ActivityQueryRoute, postV2ActivityQueryRouteHandler)

export default app
