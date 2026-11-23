import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteMonitoringScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteMonitoringScheduleHandler = app.openapi(
  postXAmzTargetSageMakerDeleteMonitoringScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
