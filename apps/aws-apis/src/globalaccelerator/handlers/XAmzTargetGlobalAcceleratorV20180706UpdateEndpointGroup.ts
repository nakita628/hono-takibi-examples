import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
