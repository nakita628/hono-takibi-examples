import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteMobileDeviceAccessOverrideRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
