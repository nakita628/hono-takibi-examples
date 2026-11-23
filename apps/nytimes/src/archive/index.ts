import { OpenAPIHono } from '@hono/zod-openapi'
import { getYearMonthJsonRoute } from './routes'
import { getYearMonthJsonRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getYearMonthJsonRoute, getYearMonthJsonRouteHandler)

export default app
