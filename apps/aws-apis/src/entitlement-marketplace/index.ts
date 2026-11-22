import { OpenAPIHono } from '@hono/zod-openapi'
import { XAmzTargetAWSMPEntitlementServiceGetEntitlementsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', XAmzTargetAWSMPEntitlementServiceGetEntitlementsHandler)

export default app
