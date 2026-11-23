import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListMobileDeviceAccessOverridesHandler = app.openapi(
  postXAmzTargetWorkMailServiceListMobileDeviceAccessOverridesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
