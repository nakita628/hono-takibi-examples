import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
