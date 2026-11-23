import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateMonitoringAlertRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateMonitoringAlertHandler = app.openapi(
  postXAmzTargetSageMakerUpdateMonitoringAlertRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
