import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMPEntitlementServiceGetEntitlementsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMPEntitlementServiceGetEntitlementsHandler = app.openapi(
  postXAmzTargetAWSMPEntitlementServiceGetEntitlementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
