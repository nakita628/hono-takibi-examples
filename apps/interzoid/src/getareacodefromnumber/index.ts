import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetareacodefromnumberRoute } from './routes'
import { getGetareacodefromnumberRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetareacodefromnumberRoute, getGetareacodefromnumberRouteHandler)

export default app
