import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
