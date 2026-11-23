import { OpenAPIHono } from '@hono/zod-openapi'
import { postPerfectpdfApiRoute } from './routes'
import { postPerfectpdfApiRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postPerfectpdfApiRoute, postPerfectpdfApiRouteHandler)

export default app
