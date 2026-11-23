import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListMobileDeviceAccessRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListMobileDeviceAccessRulesHandler = app.openapi(
  postXAmzTargetWorkMailServiceListMobileDeviceAccessRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
