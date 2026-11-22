import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateMonitoringScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateMonitoringScheduleHandler = app.openapi(
  postXAmzTargetSageMakerCreateMonitoringScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
