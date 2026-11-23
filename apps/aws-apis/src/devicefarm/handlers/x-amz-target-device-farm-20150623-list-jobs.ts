import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623ListJobsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
