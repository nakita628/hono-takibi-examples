import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListSamplesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListSamplesHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListSamplesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
