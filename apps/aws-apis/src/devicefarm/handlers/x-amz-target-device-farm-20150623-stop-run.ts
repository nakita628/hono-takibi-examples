import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623StopRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623StopRunHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623StopRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
