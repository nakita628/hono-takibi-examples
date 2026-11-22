import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdateMobileDeviceAccessRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
