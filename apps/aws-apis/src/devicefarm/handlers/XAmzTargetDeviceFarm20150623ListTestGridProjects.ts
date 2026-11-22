import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListTestGridProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListTestGridProjectsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListTestGridProjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
