import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServicePutMobileDeviceAccessOverrideRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServicePutMobileDeviceAccessOverrideHandler = app.openapi(
  postXAmzTargetWorkMailServicePutMobileDeviceAccessOverrideRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
