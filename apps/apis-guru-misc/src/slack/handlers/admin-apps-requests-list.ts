import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminAppsRequestsListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminAppsRequestsListHandler = app.openapi(getAdminAppsRequestsListRoute, (c) => {
  throw new Error('Not implemented')
})
