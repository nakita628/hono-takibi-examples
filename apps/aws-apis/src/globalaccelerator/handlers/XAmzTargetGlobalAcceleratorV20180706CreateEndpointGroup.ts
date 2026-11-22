import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
