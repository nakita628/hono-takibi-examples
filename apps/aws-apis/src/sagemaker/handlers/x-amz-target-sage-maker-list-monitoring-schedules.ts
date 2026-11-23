import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListMonitoringSchedulesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListMonitoringSchedulesHandler = app.openapi(
  postXAmzTargetSageMakerListMonitoringSchedulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
