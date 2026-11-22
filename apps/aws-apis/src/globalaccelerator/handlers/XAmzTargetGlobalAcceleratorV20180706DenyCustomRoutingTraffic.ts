import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
