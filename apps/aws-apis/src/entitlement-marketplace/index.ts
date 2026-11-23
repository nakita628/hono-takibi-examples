import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMPEntitlementServiceGetEntitlementsRoute } from './routes'
import { postXAmzTargetAWSMPEntitlementServiceGetEntitlementsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postXAmzTargetAWSMPEntitlementServiceGetEntitlementsRoute,
  postXAmzTargetAWSMPEntitlementServiceGetEntitlementsRouteHandler,
)

export default app
