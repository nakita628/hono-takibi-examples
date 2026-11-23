import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateMobileDeviceAccessRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
