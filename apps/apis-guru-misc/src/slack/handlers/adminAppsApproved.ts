import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminAppsApprovedListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminAppsApprovedHandler = app.openapi(getAdminAppsApprovedListRoute, (c) => {
  throw new Error('Not implemented')
})
