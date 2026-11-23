import { OpenAPIHono } from '@hono/zod-openapi'
import { post20140605EventsXAmzClientContextRoute } from './routes'
import { post20140605EventsXAmzClientContextRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  post20140605EventsXAmzClientContextRoute,
  post20140605EventsXAmzClientContextRouteHandler,
)

export default app
