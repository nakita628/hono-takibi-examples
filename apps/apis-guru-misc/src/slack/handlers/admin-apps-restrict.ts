import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminAppsRestrictRoute } from '../routes'

const app = new OpenAPIHono()

export const adminAppsRestrictHandler = app.openapi(postAdminAppsRestrictRoute, (c) => {
  throw new Error('Not implemented')
})
