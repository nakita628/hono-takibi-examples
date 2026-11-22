import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListProjectsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListProjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
