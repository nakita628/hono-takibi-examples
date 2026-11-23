import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStartMonitoringScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStartMonitoringScheduleHandler = app.openapi(
  postXAmzTargetSageMakerStartMonitoringScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
