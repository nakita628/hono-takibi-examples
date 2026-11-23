import { OpenAPIHono } from '@hono/zod-openapi'
import { postOpinionsRoute } from './routes'
import { postOpinionsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postOpinionsRoute, postOpinionsRouteHandler)

export default app
