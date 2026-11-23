import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623DeleteRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623DeleteRunHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623DeleteRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
