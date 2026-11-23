import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListSamplesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623ListSamplesHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListSamplesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
