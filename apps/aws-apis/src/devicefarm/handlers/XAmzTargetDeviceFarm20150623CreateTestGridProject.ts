import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623CreateTestGridProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623CreateTestGridProjectHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623CreateTestGridProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
