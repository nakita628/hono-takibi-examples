import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623DeleteProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623DeleteProjectHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623DeleteProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
