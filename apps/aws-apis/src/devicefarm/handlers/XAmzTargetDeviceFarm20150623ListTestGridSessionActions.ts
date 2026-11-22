import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListTestGridSessionActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListTestGridSessionActionsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListTestGridSessionActionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
