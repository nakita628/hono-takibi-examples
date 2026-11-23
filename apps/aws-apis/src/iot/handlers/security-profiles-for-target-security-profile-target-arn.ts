import { OpenAPIHono } from '@hono/zod-openapi'
import { getSecurityProfilesForTargetSecurityProfileTargetArnRoute } from '../routes'

const app = new OpenAPIHono()

export const securityProfilesForTargetSecurityProfileTargetArnHandler = app.openapi(
  getSecurityProfilesForTargetSecurityProfileTargetArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
