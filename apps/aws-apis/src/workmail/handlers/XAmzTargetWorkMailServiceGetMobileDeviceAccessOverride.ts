import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
