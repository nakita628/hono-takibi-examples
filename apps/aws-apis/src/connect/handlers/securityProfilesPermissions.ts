import { OpenAPIHono } from '@hono/zod-openapi'
import { getSecurityProfilesPermissionsInstanceIdSecurityProfileIdRoute } from '../routes'

const app = new OpenAPIHono()

export const securityProfilesPermissionsHandler = app.openapi(
  getSecurityProfilesPermissionsInstanceIdSecurityProfileIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
