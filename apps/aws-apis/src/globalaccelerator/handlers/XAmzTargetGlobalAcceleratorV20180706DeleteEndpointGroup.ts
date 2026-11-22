import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
