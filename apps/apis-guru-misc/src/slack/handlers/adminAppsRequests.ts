import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminAppsRequestsListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminAppsRequestsHandler = app.openapi(getAdminAppsRequestsListRoute, (c) => {
  throw new Error('Not implemented')
})
