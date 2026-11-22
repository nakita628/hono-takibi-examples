import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminAppsApproveRoute, postAdminAppsRestrictRoute } from '../routes'

const app = new OpenAPIHono()

export const adminAppsHandler = app
  .openapi(postAdminAppsApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminAppsRestrictRoute, (c) => {
    throw new Error('Not implemented')
  })
