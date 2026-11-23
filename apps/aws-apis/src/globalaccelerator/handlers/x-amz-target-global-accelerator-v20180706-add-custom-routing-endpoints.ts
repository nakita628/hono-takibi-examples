import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
