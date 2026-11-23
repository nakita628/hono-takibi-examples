import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623CreateTestGridUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623CreateTestGridUrlHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623CreateTestGridUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
