import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623UpdateTestGridProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623UpdateTestGridProjectHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623UpdateTestGridProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
