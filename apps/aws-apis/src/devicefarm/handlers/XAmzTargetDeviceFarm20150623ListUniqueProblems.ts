import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListUniqueProblemsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListUniqueProblemsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListUniqueProblemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
