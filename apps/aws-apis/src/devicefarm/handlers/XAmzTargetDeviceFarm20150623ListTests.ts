import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListTestsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListTestsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListTestsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
