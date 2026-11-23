import { OpenAPIHono } from '@hono/zod-openapi'
import { getSectionFormatRoute } from './routes'
import { getSectionFormatRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getSectionFormatRoute, getSectionFormatRouteHandler)

export default app
