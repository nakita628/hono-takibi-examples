import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623StopJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623StopJobHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623StopJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
