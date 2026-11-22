import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UpdateProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623UpdateProjectHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UpdateProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
