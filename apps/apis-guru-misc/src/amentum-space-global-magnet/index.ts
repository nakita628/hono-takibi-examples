import { OpenAPIHono } from '@hono/zod-openapi'
import { getMagneticFieldRoute } from './routes'
import { getMagneticFieldRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getMagneticFieldRoute, getMagneticFieldRouteHandler)

export default app
