import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetMobileDeviceAccessOverrideRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
