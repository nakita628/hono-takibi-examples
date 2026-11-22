import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeMonitoringScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeMonitoringScheduleHandler = app.openapi(
  postXAmzTargetSageMakerDescribeMonitoringScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
