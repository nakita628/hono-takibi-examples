import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623DeleteTestGridProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623DeleteTestGridProjectHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623DeleteTestGridProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
