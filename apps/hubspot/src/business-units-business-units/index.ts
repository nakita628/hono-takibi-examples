import { OpenAPIHono } from '@hono/zod-openapi'
import { getBusinessUnitsPublic202609BusinessUnitsUserUserIdRoute } from './routes'
import { getBusinessUnitsPublic202609BusinessUnitsUserUserIdRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getBusinessUnitsPublic202609BusinessUnitsUserUserIdRoute,
  getBusinessUnitsPublic202609BusinessUnitsUserUserIdRouteHandler,
)

export default app
