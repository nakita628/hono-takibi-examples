import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListMonitoringAlertsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListMonitoringAlertsHandler = app.openapi(
  postXAmzTargetSageMakerListMonitoringAlertsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
