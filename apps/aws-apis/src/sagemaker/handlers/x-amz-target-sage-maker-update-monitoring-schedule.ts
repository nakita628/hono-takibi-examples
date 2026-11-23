import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateMonitoringScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateMonitoringScheduleHandler = app.openapi(
  postXAmzTargetSageMakerUpdateMonitoringScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
