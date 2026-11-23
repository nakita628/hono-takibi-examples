import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1EmailFreeRoute } from './routes'
import { getV1EmailFreeRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1EmailFreeRoute, getV1EmailFreeRouteHandler)

export default app
