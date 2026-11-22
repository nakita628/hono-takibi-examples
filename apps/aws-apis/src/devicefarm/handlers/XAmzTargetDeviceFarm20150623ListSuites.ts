import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListSuitesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListSuitesHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListSuitesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
