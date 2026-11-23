import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListMonitoringExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListMonitoringExecutionsHandler = app.openapi(
  postXAmzTargetSageMakerListMonitoringExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
