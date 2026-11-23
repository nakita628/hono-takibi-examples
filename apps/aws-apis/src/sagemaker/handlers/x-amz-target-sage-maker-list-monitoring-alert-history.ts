import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListMonitoringAlertHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListMonitoringAlertHistoryHandler = app.openapi(
  postXAmzTargetSageMakerListMonitoringAlertHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
