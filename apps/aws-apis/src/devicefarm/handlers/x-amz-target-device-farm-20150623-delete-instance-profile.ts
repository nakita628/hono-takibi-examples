import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623DeleteInstanceProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623DeleteInstanceProfileHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623DeleteInstanceProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
