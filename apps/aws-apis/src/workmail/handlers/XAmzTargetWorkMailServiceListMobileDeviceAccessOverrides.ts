import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListMobileDeviceAccessOverridesHandler = app.openapi(
  postXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
