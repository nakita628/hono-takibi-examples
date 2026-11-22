import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopMonitoringScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopMonitoringScheduleHandler = app.openapi(
  postXAmzTargetSageMakerStopMonitoringScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
