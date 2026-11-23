import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListTestGridSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623ListTestGridSessionsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListTestGridSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
