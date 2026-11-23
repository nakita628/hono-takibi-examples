import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202EnableEnhancedMonitoringRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202EnableEnhancedMonitoringHandler = app.openapi(
  postXAmzTargetKinesis20131202EnableEnhancedMonitoringRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
