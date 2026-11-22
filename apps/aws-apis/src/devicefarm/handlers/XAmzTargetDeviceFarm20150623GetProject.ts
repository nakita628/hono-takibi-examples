import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetProjectHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
