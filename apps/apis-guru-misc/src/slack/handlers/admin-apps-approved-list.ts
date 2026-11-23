import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminAppsApprovedListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminAppsApprovedListHandler = app.openapi(getAdminAppsApprovedListRoute, (c) => {
  throw new Error('Not implemented')
})
