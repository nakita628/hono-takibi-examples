import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623CreateProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623CreateProjectHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623CreateProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
