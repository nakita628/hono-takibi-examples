import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetTestGridProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetTestGridProjectHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetTestGridProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
