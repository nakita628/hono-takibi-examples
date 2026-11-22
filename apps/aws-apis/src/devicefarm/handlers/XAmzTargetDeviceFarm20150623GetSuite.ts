import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetSuiteRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetSuiteHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetSuiteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
