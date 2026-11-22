import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListMonitoringAlertHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListMonitoringAlertHistoryHandler = app.openapi(
  postXAmzTargetSageMakerListMonitoringAlertHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
