import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminAppsApproveRoute } from '../routes'

const app = new OpenAPIHono()

export const adminAppsApproveHandler = app.openapi(postAdminAppsApproveRoute, (c) => {
  throw new Error('Not implemented')
})
