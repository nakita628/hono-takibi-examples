import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ScheduleRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623ScheduleRunHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ScheduleRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
