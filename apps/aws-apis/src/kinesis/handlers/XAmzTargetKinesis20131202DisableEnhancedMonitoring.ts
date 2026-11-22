import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DisableEnhancedMonitoringRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202DisableEnhancedMonitoringHandler = app.openapi(
  postXAmzTargetKinesis20131202DisableEnhancedMonitoringRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
