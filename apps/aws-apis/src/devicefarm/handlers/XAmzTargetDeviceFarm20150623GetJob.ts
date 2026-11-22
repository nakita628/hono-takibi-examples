import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623GetJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623GetJobHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623GetJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
