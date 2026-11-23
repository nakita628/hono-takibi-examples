import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminAppsRestrictedListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminAppsRestrictedListHandler = app.openapi(getAdminAppsRestrictedListRoute, (c) => {
  throw new Error('Not implemented')
})
