import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetTestGridSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetTestGridSessionHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetTestGridSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
