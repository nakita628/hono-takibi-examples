import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ScopeProtectedResourcesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app.openapi(getV1ScopeProtectedResourcesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
