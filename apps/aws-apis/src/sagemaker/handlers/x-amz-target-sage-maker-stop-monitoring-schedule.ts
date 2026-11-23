import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopMonitoringScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStopMonitoringScheduleHandler = app.openapi(
  postXAmzTargetSageMakerStopMonitoringScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
