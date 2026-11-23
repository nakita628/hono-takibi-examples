import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
