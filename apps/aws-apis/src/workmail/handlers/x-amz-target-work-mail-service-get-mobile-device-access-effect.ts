import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetMobileDeviceAccessEffectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceGetMobileDeviceAccessEffectHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetMobileDeviceAccessEffectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
