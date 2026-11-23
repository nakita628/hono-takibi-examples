import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623ListRunsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
