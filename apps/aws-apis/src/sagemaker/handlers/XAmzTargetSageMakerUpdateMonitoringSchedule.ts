import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateMonitoringScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateMonitoringScheduleHandler = app.openapi(
  postXAmzTargetSageMakerUpdateMonitoringScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
