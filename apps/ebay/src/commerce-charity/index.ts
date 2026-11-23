import { OpenAPIHono } from '@hono/zod-openapi'
import { getCharityOrgCharityOrgIdRoute, getCharityOrgRoute } from './routes'
import { getCharityOrgCharityOrgIdRouteHandler, getCharityOrgRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCharityOrgRoute, getCharityOrgRouteHandler)
  .openapi(getCharityOrgCharityOrgIdRoute, getCharityOrgCharityOrgIdRouteHandler)

export default app
