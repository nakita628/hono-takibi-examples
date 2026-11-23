import { OpenAPIHono } from '@hono/zod-openapi'
import { getCrmOwners202609OwnerIdRoute, getCrmOwners202609Route } from './routes'
import { getCrmOwners202609OwnerIdRouteHandler, getCrmOwners202609RouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmOwners202609Route, getCrmOwners202609RouteHandler)
  .openapi(getCrmOwners202609OwnerIdRoute, getCrmOwners202609OwnerIdRouteHandler)

export default app
