import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteMobileDeviceAccessRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
