import { OpenAPIHono } from '@hono/zod-openapi'
import { xAmzTargetAwsmpEntitlementServiceGetEntitlementsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', xAmzTargetAwsmpEntitlementServiceGetEntitlementsHandler)

export default app
